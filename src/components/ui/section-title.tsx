import { useDevice } from '../../hooks';
import { cn } from '@/lib/utils';
import React from 'react';

interface SectionTitleProps {
    /** The main black text of the heading */
    mainText: string | React.ReactNode;
    /** The highlighted/colored text of the heading */
    highlightText: string | React.ReactNode;
    tailText?: string | React.ReactNode;
    classNames?: {
        base?: string;
        mainText?: string;
        highlight?: string;
        tailText?: string;
    };
    isBlock?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
    mainText = 'Keep your activity',
    highlightText = 'powered.',
    tailText,
    classNames,
    isBlock = true,
}) => {
    return (
        <h1
            className={cn(
                'text-4xl leading-[1.1] font-bold tracking-tight sm:leading-[1.05] md:text-6xl lg:text-7xl',
                'my-2 -ml-[2px] lg:my-7 lg:-ml-[5px]',
                'w-full',
                classNames?.base,
            )}
        >
            <span
                className={cn(
                    'text-text-default mb-1 sm:mb-2',
                    isBlock ? 'block' : 'inline-block',
                    'lg:whitespace-pre-line',
                    classNames?.mainText,
                )}
            >
                {mainText}
            </span>
            {!isBlock && <span> </span>}
            <span
                className={cn(
                    'text-primary sm:inline',
                    isBlock ? 'block' : 'inline-block',
                    'lg:whitespace-pre-line',
                    classNames?.highlight,
                )}
            >
                {highlightText}
            </span>
            {!isBlock && tailText && <span> </span>}
            <span
                className={cn(
                    'text-text-default mb-1 sm:mb-2',
                    isBlock ? 'block' : 'inline-block',
                    'lg:whitespace-pre-line',
                    classNames?.tailText,
                )}
            >
                {tailText}
            </span>
        </h1>
    );
};

interface SectionSubTitleProps {
    /** The small uppercase badge text above the main title */
    children?: React.ReactNode;
    className?: string;
}

export const SectionSubTitle: React.FC<SectionSubTitleProps> = ({
    children,
    className,
}) => {
    const { isSmallView } = useDevice();
    if (!isSmallView)
        return (
            <h2
                className={cn(
                    'text-primary text-xs font-bold tracking-[0.15em] uppercase sm:text-sm',
                    className,
                )}
            >
                {children}
            </h2>
        );
};
