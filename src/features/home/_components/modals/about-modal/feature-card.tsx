import { ArrowRightIcon, ChevronDownIcon } from 'lucide-react';
import { Accordion } from '@heroui/react';
import { cn } from '@/lib';

export const FeatureCard = ({
    title,
    desc,
    isActive,
    children,
    onPress,
    onChildPress,
    activeChildId,
}: {
    title: string;
    desc?: string;
    isActive?: boolean;
    onPress?: () => void;
    children?: Array<{ id: string; title: string }>;
    onChildPress?: (id: string) => void;
    activeChildId?: string | null;
}) => {
    if (children && children.length > 0) {
        return (
            <Accordion className="w-full p-0" variant="default">
                <Accordion.Item className="border-border-default border-b last:border-b-0">
                    <Accordion.Heading>
                        <Accordion.Trigger
                            className={cn(
                                'group mt-2 flex w-full cursor-pointer items-start justify-between py-6 transition-all duration-200 first:mt-0',
                                isActive &&
                                    'bg-primary-50/60 dark:bg-background-hovered rounded-xl px-6 py-6',
                                !isActive &&
                                    'hover:bg-primary-50/50 dark:bg-primary-50/10 hover:dark:bg-background-hovered rounded-md pr-4 pl-2',
                            )}
                        >
                            <div className="flex items-start text-left">
                                <div
                                    className={cn(
                                        'bg-primary-600 mt-1 mr-5 h-5 w-0.5 shrink-0 transition-colors',
                                    )}
                                ></div>
                                <div>
                                    <h3
                                        className={cn(
                                            'mb-2 text-xs font-bold tracking-[0.1em] uppercase transition-colors lg:text-sm',
                                            isActive
                                                ? 'text-primary'
                                                : 'text-text-default',
                                        )}
                                    >
                                        {title}
                                    </h3>
                                    {desc && (
                                        <p className="text-text-subdued text-sm leading-relaxed font-medium whitespace-pre-line">
                                            {desc}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <Accordion.Indicator>
                                <ChevronDownIcon
                                    className={cn(
                                        'text-text-subdued group-hover:text-primary mt-2 ml-4 h-5 w-5 shrink-0 transition-all duration-200',
                                    )}
                                />
                            </Accordion.Indicator>
                        </Accordion.Trigger>
                    </Accordion.Heading>
                    <Accordion.Panel>
                        <Accordion.Body className="pt-2 pr-4 pb-6 pl-[38px]">
                            <div className="flex flex-col gap-1">
                                {children.map((child) => (
                                    <button
                                        key={child.id}
                                        className={cn(
                                            'cursor-pointer rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-all',
                                            activeChildId === child.id
                                                ? 'bg-primary-50 text-primary'
                                                : 'hover:bg-primary-50/40 hover:text-primary text-text-subdued',
                                        )}
                                        onClick={() => onChildPress?.(child.id)}
                                    >
                                        {child.title}
                                    </button>
                                ))}
                            </div>
                        </Accordion.Body>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        );
    }

    return (
        <div className="mt-2 first:mt-0">
            <button
                className={cn(
                    'group border-border-default flex w-full cursor-pointer items-start justify-between border-b py-6 transition-all duration-200',
                    isActive &&
                        'bg-primary-50/60 dark:bg-background-hovered rounded-xl border-b-0 px-6 py-6 first:pt-6',
                    !isActive &&
                        'hover:bg-primary-50/50 dark:bg-primary-50/10 hover:dark:bg-background-hovered rounded-md pr-4 pl-2',
                )}
                onClick={onPress}
            >
                <div className="flex items-start text-left">
                    <div
                        className={cn(
                            'bg-primary-600 mt-1 mr-5 h-5 w-0.5 shrink-0 transition-colors',
                        )}
                    ></div>
                    <div>
                        <h3
                            className={cn(
                                'mb-2 text-xs font-bold tracking-[0.1em] uppercase transition-colors lg:text-sm',
                                isActive ? 'text-primary' : 'text-text-default',
                            )}
                        >
                            {title}
                        </h3>
                        {desc && (
                            <p className="text-text-subdued text-sm leading-relaxed font-medium whitespace-pre-line">
                                {desc}
                            </p>
                        )}
                    </div>
                </div>
                <ArrowRightIcon
                    className={cn(
                        'mt-2 ml-4 h-5 w-5 shrink-0 transition-all duration-200',
                        isActive
                            ? 'text-primary'
                            : 'text-text-subdued group-hover:text-primary group-hover:translate-x-1',
                    )}
                />
            </button>
        </div>
    );
};
