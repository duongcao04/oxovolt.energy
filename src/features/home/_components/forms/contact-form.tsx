import {
    Button,
    FieldError,
    Input,
    Label,
    Spinner,
    TextArea,
    TextField,
    toast,
} from '@heroui/react';
import { postGoogleSheet } from '../../actions/post-google-sheet';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { cn } from '@/lib';
import z from 'zod';

const contactSchemas = z.object({
    fullname: z.string().optional(),
    email: z.string().email('Email is invalid').min(1, 'Email is required!'),
    phoneNumber: z.string().optional(),
    message: z.string().optional(),
});
export type TContactFormValues = z.infer<typeof contactSchemas>;

export const ContactForm = ({ className }: { className?: string }) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<TContactFormValues>({
        defaultValues: {
            email: '',
            fullname: '',
            message: '',
            phoneNumber: '',
        },
        resolver: zodResolver(contactSchemas),
    });

    const onSubmit = async (values: TContactFormValues) => {
        await postGoogleSheet(values)
            .then(() => {
                toast.success('Submit successful', {
                    description:
                        'Thank you! Your message has been sent successfully. We will get back to you soon.',
                });
            })
            .catch((error) => {
                toast.danger('Something went wrong!', {
                    description: JSON.stringify(error),
                });
            });
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn('flex flex-col gap-6', className)}
        >
            <Controller
                control={control}
                name="fullname"
                render={({ field }) => {
                    return (
                        <TextField
                            name="fullname"
                            isInvalid={!!errors.fullname}
                            className="flex flex-col gap-2"
                            isDisabled={isSubmitting}
                        >
                            <Label className="text-text-default text-[13px] font-bold">
                                Full name{' '}
                                <span className="text-text-subdued font-normal">
                                    (optional)
                                </span>
                            </Label>
                            <Input
                                name="fullName"
                                placeholder="Your name"
                                value={field.value}
                                onChange={field.onChange}
                            />
                            {!!errors.fullname && (
                                <FieldError>
                                    {errors.fullname.message}
                                </FieldError>
                            )}
                        </TextField>
                    );
                }}
            />

            <Controller
                control={control}
                name="email"
                render={({ field }) => {
                    return (
                        <TextField
                            name="email"
                            isInvalid={!!errors.email}
                            className="flex flex-col gap-2"
                            isDisabled={isSubmitting}
                        >
                            <Label className="text-text-default text-[13px] font-bold">
                                Email
                            </Label>
                            <Input
                                name="email"
                                placeholder="your.email@example.com"
                                value={field.value}
                                onChange={field.onChange}
                            />
                            {!!errors.email && (
                                <FieldError>{errors.email.message}</FieldError>
                            )}
                        </TextField>
                    );
                }}
            />

            <Controller
                control={control}
                name="phoneNumber"
                render={({ field }) => {
                    return (
                        <TextField
                            name="phoneNumber"
                            isInvalid={!!errors.phoneNumber}
                            className="flex flex-col gap-2"
                            isDisabled={isSubmitting}
                        >
                            <Label className="text-text-default text-[13px] font-bold">
                                Phone number{' '}
                                <span className="text-text-subdued font-normal">
                                    (optional)
                                </span>
                            </Label>
                            <Input
                                name="phoneNumber"
                                placeholder="Your phone number"
                                type="tel"
                                value={field.value}
                                onChange={field.onChange}
                            />
                            {!!errors.phoneNumber && (
                                <FieldError>
                                    {errors.phoneNumber.message}
                                </FieldError>
                            )}
                        </TextField>
                    );
                }}
            />

            <Controller
                control={control}
                name="message"
                render={({ field }) => {
                    return (
                        <TextField
                            name="message"
                            isInvalid={!!errors.message}
                            className="flex flex-col gap-2"
                            isDisabled={isSubmitting}
                        >
                            <Label className="text-text-default text-[13px] font-bold">
                                Your message{' '}
                                <span className="text-text-subdued font-normal">
                                    (optional)
                                </span>
                            </Label>
                            <TextArea
                                name="message"
                                placeholder="Tell us about your project..."
                                rows={4}
                                value={field.value}
                                onChange={field.onChange}
                            />
                            {!!errors.message && (
                                <FieldError>
                                    {errors.message.message}
                                </FieldError>
                            )}
                        </TextField>
                    );
                }}
            />

            <Button
                type="submit"
                variant="primary"
                isDisabled={isSubmitting}
                className="mt-2 h-14 w-full font-medium tracking-wide uppercase"
                isPending={isSubmitting}
            >
                {({ isPending }) => (
                    <>
                        {isPending ? (
                            <div className='flex items-center justify-center gap-2'>
                                <Spinner color="current" size="sm" />
                                Submitting...
                            </div>
                        ) : (
                            'CONTACT ME TO DISCUSS MY PROJECT'
                        )}
                    </>
                )}
            </Button>

            <div className="mt-6 flex flex-col items-center text-center">
                <p className="text-text-default text-base leading-relaxed font-semibold">
                    Your data is safe with us. Book a call with an expert.
                    <br />
                    Our daily goal is to follow you.
                </p>
                <div className="bg-primary mt-6 h-0.5 w-10"></div>
            </div>
        </form>
    );
};
