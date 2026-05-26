import { z } from 'zod';

// 1. Define the Schema
const configSchema = z.object({
    MODE: z.enum(['development', 'production', 'test']).default('development'),
    APP_TITLE: z.string().optional().default('Oxovolt Energy'),
    APP_VERSION: z.string().optional().default('1.0.0'),
    API_ENDPOINT: z
        .string()
        .url()
        .optional()
        .transform((val) => val && val.replace(/\/$/, '')),
    APP_URL: z
        .string()
        .url()
        .optional()
        .transform((val) => val && val.replace(/\/$/, '')),

    WS_URL: z.string().url().optional(),

    VITE_GOOGLE_SHEET_ENDPOINT: z.string().optional(),
    VITE_GOOGLE_SHEET_API_KEY: z.string().optional(),
    VITE_GOOGLE_SHEET_ID: z.string().optional(),
});

export type EnvConfig = z.infer<typeof configSchema>;

function configProject() {
    try {
        const rawConfig = {
            MODE: import.meta.env.MODE,
            APP_TITLE: import.meta.env.VITE_APP_TITLE,
            APP_VERSION: import.meta.env.VITE_APP_VERSION,
            API_ENDPOINT: import.meta.env.VITE_API_ENDPOINT,
            APP_URL: import.meta.env.VITE_APP_URL,
            WS_URL: import.meta.env.VITE_WS_URL,

            VITE_GOOGLE_SHEET_ID: import.meta.env.VITE_GOOGLE_SHEET_ID,
            VITE_GOOGLE_SHEET_ENDPOINT: import.meta.env
                .VITE_GOOGLE_SHEET_ENDPOINT,
            VITE_GOOGLE_SHEET_API_KEY: import.meta.env
                .VITE_GOOGLE_SHEET_API_KEY,
        };

        const config = configSchema.parse(rawConfig);

        // Only log in development
        if (config.MODE === 'development') {
            console.log('✅ Environment validated successfully:');
            console.table(config);
        }

        return config;
    } catch (error) {
        if (error instanceof z.ZodError) {
            // ZodError provides a structured list of errors
            const errorDetails = error.issues.map((issue) => ({
                variable: issue.path.join('.'),
                message: issue.message,
            }));

            console.error('❌ Env Validation Error:');
            console.table(errorDetails);
        }

        throw error;
    }
}

export const envConfig = configProject();
