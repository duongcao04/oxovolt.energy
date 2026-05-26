import React, { type HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface ResponsiveContainerProps extends HTMLAttributes<HTMLDivElement> {
    id?: string;
    children: React.ReactNode;
    fillScreen?: boolean;
    paddingBlock?: boolean;
    backgroundUrl?: string;
    overlayOpacity?: string; // Useful if you want to darken/lighten the image for text readability
    anchor?: string; // is ID for scroll with #
}

export const ResponsiveContainer = ({
    anchor,
    children,
    className = '',
    fillScreen = false,
    paddingBlock = true,
    backgroundUrl,
    overlayOpacity = 'bg-transparent',
    style,
    ...props
}: ResponsiveContainerProps) => {
    return (
        <>
            {anchor && <div id={anchor} className="top-0 -mt-20" />}
            <section
                className={cn(
                    'relative w-full overflow-hidden',
                    'lg:whitespace-pre-line', // \n for new line <p>
                    anchor && 'mt-20',
                )}
            >
                {/* 1. Background Image Layer */}
                {backgroundUrl && (
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${backgroundUrl})`,
                        }}
                    />
                )}

                {/* 2. Optional Overlay (Sits between image and text) */}
                {backgroundUrl && (
                    <div
                        className={cn('absolute inset-0 z-1', overlayOpacity)}
                    />
                )}

                {/* 3. The Content Container (Z-10 ensures it is on top) */}
                <div
                    className={cn(
                        'content_container relative z-10 mx-auto w-full',
                        fillScreen
                            ? 'flex min-h-screen flex-col items-start justify-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-3'
                            : 'h-auto',
                        paddingBlock && 'py-12 xl:py-16',
                        className,
                    )}
                    style={style}
                    {...props}
                >
                    {children}
                </div>
            </section>
        </>
    );
};
