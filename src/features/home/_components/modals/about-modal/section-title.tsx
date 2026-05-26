import { cn } from '../../../../../lib';

export const SectionTitle = ({
    title,
    className,
}: {
    title: string | React.ReactNode;
    className?: string;
}) => {
    return (
        <h2
            className={cn(
                'mb-16 text-3xl leading-[1.1] font-bold tracking-tight text-text-default md:text-4xl lg:whitespace-pre-line',
                className,
            )}
        >
            {title}
        </h2>
    );
};

export const SectionTag = ({
    title,
    className,
}: {
    title: string;
    className?: string;
}) => {
    return (
        <h4
            className={cn(
                'text-primary-600 mb-6 text-sm font-bold tracking-[0.1em] uppercase',
                className,
            )}
        >
            {title}
        </h4>
    );
};