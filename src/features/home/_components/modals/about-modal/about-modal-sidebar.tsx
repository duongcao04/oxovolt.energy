import { ChevronDownIcon } from 'lucide-react';
import { ScrollShadow } from '@heroui/react';
import { cn } from '../../../../../lib';

export const AboutModalSidebar = ({
    activeTab,
    setActiveTab,
    className,
}: {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                'w-full shrink-0 flex-col border-r border-border-default bg-background md:w-[280px] lg:w-[320px]',
                className,
            )}
        >
            <ScrollShadow
                hideScrollBar
                style={{
                    height: 'calc(100% - 200px)',
                }}
            >
                <div className="mt-10 flex flex-col lg:mt-20">
                    {[
                        { id: 'about', label: 'About' },
                        {
                            id: 'solutions',
                            label: 'Solutions',
                        },
                        {
                            id: 'knowledge',
                            label: 'Knowledge',
                        },
                        { id: 'press', label: 'Press' },
                        { id: 'contact', label: 'Contact' },
                        { id: 'legal', label: 'Legal' },
                        { id: 'loopxcell-series', label: 'LoopXcell Series' },
                        { id: 'kameleo-series', label: 'Kameleo Series' },
                    ].map((tab) => (
                        <div
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className="group flex cursor-pointer items-center border-b border-border-default px-8 py-6 lg:px-12"
                        >
                            <div
                                className={cn(
                                    'mr-4 h-8 w-0.5 shrink-0',
                                    activeTab === tab.id
                                        ? 'bg-primary'
                                        : 'bg-transparent',
                                )}
                            ></div>
                            <span
                                className={cn(
                                    'text-sm font-extrabold tracking-[0.2em] uppercase transition-colors',
                                    activeTab === tab.id
                                        ? 'text-text-default'
                                        : 'text-text-subdued group-hover:text-text-default',
                                )}
                            >
                                {tab.label}
                            </span>
                        </div>
                    ))}
                </div>
            </ScrollShadow>

            <div className="text-text-subdued mt-2 flex items-center justify-center">
                <ChevronDownIcon />
            </div>

            <div className="mt-auto px-8 pb-16 lg:px-12">
                <div className="mb-6 h-0.5 w-8 bg-primary"></div>
                <h3 className="mb-3 text-sm font-extrabold tracking-[0.3em] text-text-default uppercase">
                    Oxovolt
                </h3>
                <p className="text-xs leading-relaxed font-medium text-text-subdued">
                    Continuous power.
                    <br />
                    Engineered to never stop.
                </p>
            </div>
        </div>
    );
};
