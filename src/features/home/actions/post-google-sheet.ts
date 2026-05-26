import type { TContactFormValues } from '../_components/forms/contact-form';
import { envConfig } from '../../../config';

export async function postGoogleSheet(values: TContactFormValues) {
    const scriptUrl = envConfig.VITE_GOOGLE_SHEET_ENDPOINT!;

    try {
        const response = await fetch(scriptUrl, {
            method: 'POST',
            // Using text/plain is the secret to avoiding CORS errors with Google Scripts!
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            // Match the exact keys your Google Script expects
            body: JSON.stringify({
                fullName: values.fullname,
                email: values.email,
                phoneNumber: values.phoneNumber,
                message: values.message,
            }),
        });

        const result = await response.json();

        if (result.status === 'success') {
            console.log('Successfully saved to Oxovolt sheet!');
            return true;
        } else {
            console.error('Google Script Error:', result.message);
            return false;
        }
    } catch (error) {
        console.error('Fetch failed:', error);
        return false;
    }
}
