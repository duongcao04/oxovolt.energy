import {
    UtilityPole,
    ChevronRight,
    Building2,
    Monitor,
    Check,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { cn } from '@/lib';

const leftFeatures = [
    {
        title: 'BATTERY FIRST, ALWAYS',
        desc: 'Your entire workspace is powered by OXOVOLT battery by default. Stable, clean and continuous energy — 24/7.',
    },
    {
        title: 'GRID ONLY FOR CHARGING',
        desc: 'We automatically buy energy when prices are low (even negative) to recharge the battery. You never consume from the grid during peak hours.',
    },
    {
        title: 'SEAMLESS BY DESIGN',
        desc: "Switching to the grid only occurs when the battery charges. Ultra-fast transition (< 20 ms). You don't feel it. Your activity never stops.",
    },
    {
        title: 'PROTECTS WHAT MATTERS',
        desc: 'Your people, your equipment and your data stay powered and protected at all times.',
    },
    {
        title: '100% AUTOMATIC. 24/7.',
        desc: 'The orchestrator analyzes prices, forecasts, battery status and usage in real time. No manual action. No complexity.',
    },
    {
        title: 'RELIABLE BY DESIGN',
        desc: 'Built for maximum availability and long-term peace of mind. Engineered, tested and proven.',
    },
];

const stats = [
    { value: '0', label: 'DOWNTIME', desc: 'Your activity never stops.' },
    {
        value: '< 20 ms',
        label: 'SWITCHING TIME',
        desc: 'Seamless switch only when the battery charges.',
    },
    {
        value: '24/7',
        label: 'BATTERY POWER',
        desc: 'Your workspace runs on battery. Always on. Always ready.',
    },
];

const idealFor = [
    { title: 'OFFICES', desc: 'Keep teams productive and systems running.' },
    {
        title: 'IT & SERVERS',
        desc: 'Protect your infrastructure and critical data.',
    },
    {
        title: 'LIGHTING & HVAC',
        desc: 'Maintain comfort, safety and operations.',
    },
    { title: 'EQUIPMENT', desc: 'Power all essential tools and machines.' },
];

export function PowerYourActivityModal({
    isOpen,
    onOpenChange,
}: {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    const { isSmallView } = useDevice();

    const { t } = useTranslation();
    const tabs = t('home.hero.modal.energy.tabs', {
        returnObjects: true,
    }) as string[];

    const footerContent = (
        <div className="border-border-default flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-4 border-t py-4 text-xs font-bold md:gap-x-8">
            {tabs.map((tab, idx) => (
                <div key={tab} className="flex items-center gap-4 md:gap-8">
                    <button
                        className={cn(
                            'text-text-default hover:text-primary tracking-widest uppercase transition-colors',
                        )}
                    >
                        {tab}
                    </button>
                    {idx < tabs.length - 1 && (
                        <div className="hidden h-3.5 w-[1px] bg-gray-300 md:block"></div>
                    )}
                </div>
            ))}
        </div>
    );

    const headerContent = (
        <div className="flex flex-col gap-4 pt-4 lg:pt-0">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase sm:text-xs">
                OXOVOLT ENERGY
            </span>
            <h2 className="-mt-2 text-4xl leading-tight font-bold text-text-default sm:text-5xl">
                Power your activity.
                <br />
                <span className="text-primary">Without interruption.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed font-medium text-text-subdued">
                With OXOVOLT, your workspace runs on battery by default. The
                grid is only used to charge — at the best price.
            </p>
            <div className="mt-2 mb-2 h-[2px] w-12 bg-primary lg:mb-4" />
        </div>
    );

    const featuresListDesktop = (
        <div className="hidden w-full flex-col gap-6 lg:flex">
            {leftFeatures.map((f, i) => (
                <div
                    key={i}
                    className="flex flex-col gap-2 border-b border-border-default pb-5 last:border-0 last:pb-0"
                >
                    <span className="text-xs font-bold tracking-widest text-text-default uppercase">
                        {f.title}
                    </span>
                    <span className="max-w-sm text-sm leading-relaxed font-medium text-text-subdued">
                        {f.desc}
                    </span>
                </div>
            ))}
        </div>
    );

    const featuresListMobile = (
        <div className="flex w-full flex-col gap-8 py-8 lg:hidden">
            {leftFeatures.map((f, i) => {
                const isRight = i % 2 !== 0;
                return (
                    <div
                        key={i}
                        className={cn(
                            'flex w-[85%] flex-col gap-2 sm:w-[70%]',
                            isRight
                                ? 'self-end border-r-2 border-primary pr-4 text-right'
                                : 'self-start border-l-2 border-primary pl-4 text-left',
                        )}
                    >
                        <span className="text-[10px] font-bold tracking-widest text-text-default uppercase sm:text-xs">
                            {f.title}
                        </span>
                        <span className="text-xs leading-relaxed font-medium text-text-subdued sm:text-sm">
                            {f.desc}
                        </span>
                    </div>
                );
            })}
        </div>
    );

    const diagram = (
        <div
            className="mt-4 w-full overflow-x-auto pt-4 pb-6 lg:mt-8 [&::-webkit-scrollbar]:hidden"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
            <div className="flex w-full min-w-[550px] items-start justify-between gap-2">
                {/* Grid */}
                <div className="flex w-[110px] flex-col items-center gap-4">
                    <UtilityPole
                        size={56}
                        strokeWidth={1}
                        className="text-text-default"
                    />
                    <div className="text-center">
                        <span className="block text-xs font-bold tracking-wider text-text-default">
                            GRID
                        </span>
                        <span className="mt-2 block text-[10px] leading-relaxed text-text-subdued">
                            Used only to charge
                            <br />
                            the battery at
                            <br />
                            the best price
                        </span>
                    </div>
                </div>

                {/* Arrow 1 */}
                <div className="mt-6 flex flex-1 flex-col items-center">
                    <span className="mb-2 text-center text-[9px] font-bold tracking-widest text-text-default uppercase">
                        CHARGING ONLY
                        <br />
                        <span className="text-[10px] font-normal tracking-normal text-text-subdued capitalize">
                            When prices are low
                        </span>
                    </span>
                    <div className="flex w-full items-center justify-center">
                        <div className="h-[1px] w-full max-w-[100px] border-t border-dashed border-border-default"></div>
                        <ChevronRight
                            size={16}
                            className="-ml-1 text-slate-400"
                        />
                    </div>
                </div>

                {/* Battery System */}
                <div className="flex w-[140px] flex-col items-center gap-4">
                    <div className="relative flex h-[88px] w-20 items-center justify-center rounded-md border-[1.5px] border-slate-800">
                        <div className="absolute top-1/2 left-4 h-0.5 w-3 -translate-y-1/2 bg-primary"></div>
                        <div className="absolute top-1/2 right-3 h-10 w-[1.5px] -translate-y-1/2 bg-slate-300"></div>
                        <div className="absolute top-1/2 right-5 h-10 w-[1.5px] -translate-y-1/2 bg-slate-300"></div>
                    </div>
                    <div className="text-center">
                        <span className="block text-[11px] leading-tight font-bold tracking-wider text-text-default">
                            OXOVOLT BATTERY SYSTEM
                        </span>
                        <span className="mt-2 block text-[10px] leading-relaxed text-text-subdued">
                            Powers your workspace
                            <br />
                            by default
                        </span>
                    </div>
                </div>

                {/* Arrow 2 */}
                <div className="mt-[44px] flex flex-1 items-center justify-center">
                    <div className="h-[1.5px] w-full max-w-[80px] bg-primary"></div>
                    <ChevronRight size={16} className="-ml-1 text-primary" />
                </div>

                {/* Workspace */}
                <div className="flex w-[110px] flex-col items-center gap-4">
                    <div className="flex h-[88px] items-end gap-1 pb-2 text-text-default">
                        <Building2 size={36} strokeWidth={1.2} />
                        <Monitor size={42} strokeWidth={1} />
                    </div>
                    <div className="text-center">
                        <span className="block text-[11px] font-bold tracking-wider text-text-default">
                            YOUR WORKSPACE
                        </span>
                        <span className="mt-2 block text-[10px] leading-relaxed text-text-subdued">
                            Always powered
                            <br />
                            by battery
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

    const statsSection = (
        <div className="my-4 grid grid-cols-3 gap-2 border-t border-b border-border-default py-6 sm:gap-6 lg:my-6">
            {stats.map((s, i) => (
                <div
                    key={i}
                    className="flex flex-col gap-1 border-l border-border-default pl-3 first:border-0 first:pl-0 sm:pl-5"
                >
                    <span className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                        {s.value}
                    </span>
                    <span className="mt-1 text-[10px] font-bold tracking-widest text-text-default uppercase sm:mt-2 sm:text-xs">
                        {s.label}
                    </span>
                    <span className="pr-1 text-[10px] leading-relaxed font-medium text-text-subdued sm:text-xs">
                        {s.desc}
                    </span>
                </div>
            ))}
        </div>
    );

    const idealForSection = (
        <div className="mt-2 flex flex-col gap-4 rounded-lg border border-border-default p-5 lg:p-6">
            <span className="text-xs font-bold tracking-widest text-text-default uppercase">
                IDEAL FOR
            </span>
            <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4">
                {idealFor.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col gap-2 border-l-2 border-border-default pl-3"
                    >
                        <span className="text-[10px] font-bold tracking-wider text-text-default uppercase sm:text-[11px]">
                            {item.title}
                        </span>
                        <span className="text-[10px] leading-relaxed font-medium text-text-subdued sm:text-[11px]">
                            {item.desc}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );

    const alertBox = (
        <div className="mt-6 flex items-start gap-4 rounded-lg bg-primary-50/50 dark:bg-primary-50/10 p-5 sm:p-6">
            <div className="mt-0.5 shrink-0 rounded-full border-[1.5px] border-primary bg-background p-1 text-primary">
                <Check size={14} strokeWidth={3} />
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-[13px] font-medium tracking-wide text-text-default sm:text-sm">
                    Battery first. Grid second.
                </span>
                <span className="text-[13px] font-bold tracking-wide text-primary sm:text-sm">
                    Lower bills. Zero peak exposure. 100% automatic.
                </span>
            </div>
        </div>
    );

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container size={isSmallView ? 'full' : 'cover'}>
                    <Modal.Dialog className="max-h-[100dvh] w-full rounded-none bg-background p-0 shadow-2xl lg:max-h-[90vh] lg:rounded-2xl lg:p-6 lg:pr-2">
                        <Modal.CloseTrigger className="top-4 right-4 z-50 rounded border border-border-default bg-background p-1 text-text-subdued shadow-sm transition-colors hover:bg-background-hovered sm:top-6 sm:right-6 lg:top-8 lg:right-8" />

                        <Modal.Body className="mt-0 overflow-x-hidden overflow-y-auto rounded-t-2xl bg-background p-0 lg:rounded-none">
                            <div className="flex w-full flex-col gap-8 px-6 py-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:p-12 lg:pb-16">
                                {/* Left Column */}
                                <div className="flex flex-col gap-8 lg:col-span-5 lg:gap-12">
                                    {headerContent}
                                    {featuresListDesktop}
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col lg:col-span-7">
                                    <div className="flex flex-col gap-3">
                                        <span className="text-xs font-bold tracking-widest text-text-default uppercase">
                                            HOW IT WORKS
                                        </span>
                                        <div className="mb-1 h-[2px] w-full bg-primary" />
                                        <p className="max-w-lg text-sm leading-relaxed font-medium text-text-subdued">
                                            OXOVOLT intelligently manages energy
                                            flows.
                                            <br className="hidden sm:block" />
                                            The battery powers your activity.
                                            The grid only charges the battery —
                                            when it's optimal.
                                        </p>
                                    </div>

                                    {diagram}

                                    {statsSection}

                                    {featuresListMobile}

                                    {idealForSection}

                                    {alertBox}
                                </div>
                            </div>

                            {/* Render footer inside body for mobile so it scrolls */}
                            {isSmallView && footerContent}
                        </Modal.Body>

                        {/* Render footer outside body for desktop so it's fixed */}
                        {!isSmallView && (
                            <Modal.Footer className="mt-0 p-0">
                                {footerContent}
                            </Modal.Footer>
                        )}
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
