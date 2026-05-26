import { ArrowLeftIcon } from 'lucide-react';
import React from 'react';

export const PageLayout = ({
    title,
    onBack,
    children,
}: {
    title: string;
    onBack: () => void;
    children: React.ReactNode;
}) => {
    return (
        <div className="flex w-full flex-col">
            <button
                onClick={onBack}
                className="group mb-8 flex w-fit items-center text-sm font-extrabold tracking-[0.1em] text-text-subdued uppercase transition-colors hover:text-primary lg:hidden"
            >
                <ArrowLeftIcon className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back
            </button>
            <h2 className="mb-12 text-3xl leading-[1.1] font-bold tracking-tight text-text-default md:text-4xl lg:text-[40px]">
                {title}
            </h2>
            <div className="flex w-full flex-col gap-12 pb-12">{children}</div>
        </div>
    );
};

export const PageSection = ({
    subtitle,
    children,
    link,
}: {
    subtitle?: string;
    children: React.ReactNode;
    link?: string;
}) => {
    return (
        <div className="flex flex-col">
            {subtitle && (
                <h3 className="mb-4 text-sm font-extrabold tracking-[0.15em] text-text-default uppercase">
                    {subtitle}
                </h3>
            )}
            <div className="text-sm leading-relaxed font-medium text-text-subdued">
                {children}
            </div>
            {link && (
                <a
                    href={link.includes('@') ? `mailto:${link}` : link}
                    className="mt-4 w-fit text-sm font-bold text-primary transition-colors hover:text-blue-700 hover:underline"
                >
                    {link}
                </a>
            )}
        </div>
    );
};
