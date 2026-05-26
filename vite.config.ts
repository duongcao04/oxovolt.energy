/* eslint-disable @typescript-eslint/no-explicit-any */
import { imageToWebpPlugin } from 'vite-plugin-image-to-webp';
import { reactCompilerPreset } from '@vitejs/plugin-react';
import tanstackRouter from '@tanstack/router-plugin/vite';
import tailwindcss from '@tailwindcss/vite';
import babel from '@rolldown/plugin-babel';
import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';

// 1. Custom Vite plugin to generate version.json automatically on build
const generateVersionPlugin = () => {
    return {
        name: 'generate-version',
        buildStart() {
            const version = new Date().toISOString();
            const publicDir = path.resolve(__dirname, './public');

            // Ensure the public directory exists before writing
            if (!fs.existsSync(publicDir)) {
                fs.mkdirSync(publicDir);
            }

            // Write the version.json file to the public folder
            fs.writeFileSync(
                path.join(publicDir, 'version.json'),
                JSON.stringify({ version, timestamp: Date.now() }),
            );

            console.log(`\n[Build] 🚀 Generated version.json: ${version}\n`);
        },
    };
};

// 2. Custom Babel Plugin để tự động thêm loading="lazy" vào thẻ <img>
const autoLazyLoadImagePlugin = ({ types: t }: any) => {
    return {
        name: 'auto-lazy-load-img',
        visitor: {
            JSXOpeningElement(path: any) {
                // Chỉ tìm các thẻ có tên là 'img'
                if (path.node.name && path.node.name.name === 'img') {
                    // Kiểm tra xem thẻ này đã có thuộc tính 'loading' chưa
                    const hasLoadingAttr = path.node.attributes.some(
                        (attr: any) =>
                            attr.name && attr.name.name === 'loading',
                    );

                    // Nếu chưa có, tự động push thêm loading="lazy"
                    if (!hasLoadingAttr) {
                        path.node.attributes.push(
                            t.jsxAttribute(
                                t.jsxIdentifier('loading'),
                                t.stringLiteral('lazy'),
                            ),
                        );
                    }
                }
            },
        },
    };
};

// https://vite.dev/config/
export default defineConfig(({}) => {
    return {
        envPrefix: ['VITE_'],

        server: {
            port: 3001,
            host: true,
            strictPort: true,
            fs: {
                allow: ['..'],
            },
        },

        plugins: [
            tailwindcss(),
            tanstackRouter({
                target: 'react',
                autoCodeSplitting: true,
            }),
            babel({
                presets: [reactCompilerPreset()],
                plugins: [autoLazyLoadImagePlugin],
            }),
            imageToWebpPlugin({
                // Optional: Specify which formats to target
                imageFormats: ['png', 'jpg', 'jpeg'],

                // Optional: Adjust the quality of the generated WebP images (0-100)
                webpQuality: { quality: 80 },
            }),
            generateVersionPlugin(),
        ],

        resolve: {
            alias: {
                // Maps '@' to the 'src' directory
                '@': path.resolve(__dirname, './src'),
            },
        },

        build: {
            minify: 'terser',
            terserOptions: {
                compress: {
                    drop_console: ['log', 'error'],
                    pure_funcs: ['console.log', 'console.error'],
                },
            },
            chunkSizeWarningLimit: 600,
            rollupOptions: {
                output: {
                    // Use a function instead of an object
                    manualChunks(id: string) {
                        // Group React dependencies into a 'vendor' chunk
                        if (
                            id.includes('node_modules/react/') ||
                            id.includes('node_modules/react-dom/')
                        ) {
                            return 'vendor';
                        }

                        // Group heavy UI libraries into a 'ui' chunk
                        if (
                            id.includes('node_modules/@mui/') ||
                            id.includes('node_modules/@emotion/')
                        ) {
                            return 'ui';
                        }

                        // Group lodash into its own chunk
                        if (id.includes('node_modules/lodash/')) {
                            return 'lodash';
                        }

                        // Optional: A catch-all for all other node_modules
                        // if (id.includes('node_modules')) {
                        //   return 'dependencies';
                        // }
                    },
                },
            },
        },
    };
});
