import {
    Button as HeroButton,
    type ButtonProps as HeroButtonProps,
} from '@heroui/react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from 'lucide-react';
import { Link, type LinkProps } from '@tanstack/react-router';
import { cn } from '../../lib/utils';

interface ButtonProps extends Omit<HeroButtonProps, 'variant'> {
    color?: 'primary' | 'secondary' | string;
    variant?:
        | 'underline'
        | 'ghostArrow'
        | 'outlinedBox'
        | HeroButtonProps['variant'];
    showArrow?: boolean;
    arrowType?: 'right' | 'up' | 'down' | 'left';
    children: React.ReactNode;
    href?: LinkProps['to'];
    linkProps?: Omit<LinkProps, 'to'>;
    classNames?: {
        underline?: string;
        arrowIcon?: string;
    };
}
export const Button = ({
    color = 'primary',
    children,
    variant = 'outlinedBox',
    className,
    classNames,
    showArrow,
    arrowType = 'right',
    href,
    linkProps,
    ...props
}: ButtonProps) => {
    const variantStyles = {
        underline: cn(
            'bg-transparent hover:bg-transparent rounded-none font-bold tracking-widest h-auto min-w-0 border-none relative overflow-visible',
            'px-3.5 py-2.5 lg:px-6 lg:py-4',
            color === 'primary' && 'text-primary',
            color === 'secondary' && 'text-secondary-500',
            color !== 'primary' && color !== 'secondary' && `text-${color}`,
        ),
        ghostArrow: cn(
            'bg-transparent hover:bg-transparent rounded-none font-bold tracking-widest h-auto min-w-0 border-none relative overflow-visible',
            'px-3.5 py-2.5 lg:px-6 lg:py-4',
            color === 'primary' && 'text-primary',
            color === 'secondary' && 'text-secondary-500',
            color !== 'primary' && color !== 'secondary' && `text-${color}`,
        ),
        outlinedBox: cn(
            'bg-transparent border rounded-md font-bold tracking-widest h-auto hover:text-white! transition-all duration-300',
            'px-3.5 py-2.5 lg:px-6 lg:py-4',
            color === 'primary' &&
                'text-primary hover:bg-primary border-primary',
            color === 'secondary' &&
                'text-secondary-500 hover:bg-secondary-500 border-secondary-500',
            color !== 'primary' &&
                color !== 'secondary' &&
                `text-${color} hover:bg-${color} border-${color}`,
        ),
    };

    const hasArrow =
        showArrow ?? (variant === 'ghostArrow' || variant === 'outlinedBox');

    const renderArrow = () => {
        switch (arrowType) {
            case 'right':
                return (
                    <ArrowRight
                        size={18}
                        className={cn(
                            'transition-transform group-hover:translate-x-1',
                            classNames?.arrowIcon,
                        )}
                    />
                );
            case 'up':
                return (
                    <ArrowUp
                        size={18}
                        className={cn(
                            'transition-transform group-hover:-translate-y-1',
                            classNames?.arrowIcon,
                        )}
                    />
                );
            case 'down':
                return (
                    <ArrowDown
                        size={18}
                        className={cn(
                            'transition-transform group-hover:translate-y-1',
                            classNames?.arrowIcon,
                        )}
                    />
                );
            case 'left':
                return (
                    <ArrowLeft
                        size={18}
                        className={cn(
                            'transition-transform group-hover:-translate-x-1',
                            classNames?.arrowIcon,
                        )}
                    />
                );
        }
    };
    const ButtonElement = (
        <>
            <HeroButton
                variant="ghost"
                id="customize-button"
                className={cn(
                    'group uppercase transition-all',
                    (variant === 'underline' || variant === 'ghostArrow') &&
                        '-ml-6',
                    variantStyles[variant as keyof typeof variantStyles] || '',
                    className,
                )}
                {...props}
            >
                <div className="relative z-10 flex items-center gap-4">
                    {children}
                    {hasArrow && renderArrow()}
                </div>

                {/* The "Oxovolt" Background Underline */}
                {(variant === 'underline' || variant === 'ghostArrow') && (
                    <div
                        className={cn(
                            'absolute right-6 bottom-2 left-6 h-px transition-all duration-300',
                            variant === 'underline'
                                ? 'bg-primary'
                                : 'bg-primary/30 group-hover:bg-primary',
                            classNames?.underline,
                        )}
                        style={{
                            background:
                                color === 'primary'
                                    ? 'var(--color-primary)'
                                    : color === 'secondary'
                                      ? 'var(--color-secondary-500)'
                                      : color,
                        }}
                    />
                )}
            </HeroButton>
        </>
    );

    if (href || linkProps) {
        return (
            <Link
                to={href || '.'}
                {...linkProps}
                className="inline-block w-fit"
            >
                {ButtonElement}
            </Link>
        );
    }

    return ButtonElement;
};
