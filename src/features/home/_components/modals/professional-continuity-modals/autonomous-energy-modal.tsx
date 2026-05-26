import { Building2, ChevronRight, Monitor, UtilityPole } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { cn } from '@/lib';

const leftFeatures = [
    {
        title: 'STORE WHEN PRICES ARE LOW',
        desc: 'OXOVOLT automatically buys and stores energy when prices are at their lowest. You save, without lifting a finger.',
    },
    {
        title: 'POWER WHEN PRICES RISE',
        desc: 'When prices go up, OXOVOLT releases stored energy to keep your activity running. You stay productive. Your bills stay low.',
    },
    {
        title: 'FULLY AUTONOMOUS',
        desc: 'No manual actions. No complexity. OXOVOLT analyzes, decides and acts in real time to optimize your energy costs.',
    },
    {
        title: 'CONTINUITY GUARANTEED',
        desc: 'Your workspace stays powered, thanks to a reliable and intelligent energy strategy — 24/7, all year long.',
    },
];

const stats = [
    {
        value: '24/7',
        label: 'AUTONOMOUS',
        desc: 'Monitors, decides and acts in real time.',
    },
    {
        value: 'LOWER BILLS',
        label: 'BUY LOW. USE SMART.',
        desc: 'Store when prices are low, use when they rise.',
    },
    {
        value: '100% CONTINUITY',
        label: 'NO INTERRUPTION',
        desc: 'Your activity never stops. Power you can count on.',
    },
    {
        value: 'MAXIMUM ROI',
        label: 'EVERY KWH COUNTS',
        desc: 'Optimize every cycle. Boost your savings.',
    },
];

export function AutonomousEnergyModal({
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
            <span className="text-primary text-[10px] font-bold tracking-widest uppercase sm:text-xs">
                OXOVOLT ENERGY
            </span>
            <h2 className="text-text-default -mt-2 text-4xl leading-tight font-bold sm:text-5xl">
                Autonomous energy
                <br className="hidden sm:block" /> continuity.
                <br />
                <span className="text-primary">Your advantage.</span>
            </h2>
            <p className="text-text-subdued mt-4 max-w-sm text-sm leading-relaxed font-medium">
                Store energy when prices are low.
                <br />
                Power your activity when prices rise.
                <br />
                Automatic. Intelligent. Always on your side.
            </p>
            <div className="mt-2 mb-2 h-[2px] w-12 bg-primary lg:mb-4" />
        </div>
    );

    const featuresListDesktop = (
        <div className="hidden w-full flex-col gap-6 lg:flex">
            {leftFeatures.map((f, i) => (
                <div
                    key={i}
                    className="border-border-default flex flex-col gap-2 border-b pb-5 last:border-0 last:pb-0"
                >
                    <span className="text-text-default text-xs font-bold tracking-widest uppercase">
                        {f.title}
                    </span>
                    <span className="text-text-subdued max-w-sm text-sm leading-relaxed font-medium">
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
                                ? 'border-primary self-end border-r-[3px] pr-4 text-right'
                                : 'border-primary self-start border-l-2 pl-4 text-left',
                        )}
                    >
                        <span className="text-text-default text-[10px] font-bold tracking-widest uppercase sm:text-xs">
                            {f.title}
                        </span>
                        <span className="text-text-subdued text-xs leading-relaxed font-medium sm:text-sm">
                            {f.desc}
                        </span>
                    </div>
                );
            })}
        </div>
    );

    const howItWorksSteps = (
        <div className="mt-4 flex w-full flex-col gap-4">
            <p className="text-text-subdued max-w-xl text-sm leading-relaxed font-medium">
                OXOVOLT monitors energy prices in real time to decide the best
                time to store or release energy, optimizing your costs while
                ensuring uninterrupted power.
            </p>

            <div
                className="mt-4 flex w-full flex-row items-center justify-between gap-2 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
                style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
                <div className="flex min-w-[130px] flex-1 flex-col items-center justify-center rounded-md bg-primary-50/50 dark:bg-primary-50/10 px-2 py-4 text-center">
                    <span className="text-text-default text-[10px] font-bold tracking-wider sm:text-[11px]">
                        PRICES LOW
                    </span>
                    <span className="text-text-subdued mt-1 text-[10px]">
                        OXOVOLT stores energy
                    </span>
                </div>
                <ChevronRight size={16} className="text-primary shrink-0" />
                <div className="flex min-w-[130px] flex-1 flex-col items-center justify-center rounded-md bg-primary-50/50 dark:bg-primary-50/10 px-2 py-4 text-center">
                    <span className="text-text-default text-[10px] font-bold tracking-wider sm:text-[11px]">
                        PRICES RISE
                    </span>
                    <span className="text-text-subdued mt-1 text-[10px]">
                        OXOVOLT powers your activity
                    </span>
                </div>
                <ChevronRight size={16} className="text-primary shrink-0" />
                <div className="flex min-w-[130px] flex-1 flex-col items-center justify-center rounded-md bg-primary-50/50 dark:bg-primary-50/10 px-2 py-4 text-center">
                    <span className="text-text-default text-[10px] font-bold tracking-wider sm:text-[11px]">
                        ALWAYS ON
                    </span>
                    <span className="text-text-subdued mt-1 text-[10px]">
                        Your workspace stays powered
                    </span>
                </div>
            </div>
        </div>
    );

    const diagram = (
        <div
            className="mt-2 w-full overflow-x-auto pt-2 pb-6 lg:mt-4 [&::-webkit-scrollbar]:hidden"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
            <div className="flex w-full min-w-[550px] items-start justify-between gap-2">
                <div className="flex w-[110px] flex-col items-center gap-4">
                    <UtilityPole
                        size={56}
                        strokeWidth={1}
                        className="text-text-default"
                    />
                    <div className="text-center">
                        <span className="text-text-default block text-xs font-bold tracking-wider">
                            GRID
                        </span>
                        <span className="text-text-subdued mt-2 block text-[10px] leading-relaxed">
                            Energy purchased
                            <br />
                            when prices are low
                        </span>
                    </div>
                </div>

                <div className="mt-6 flex flex-1 flex-col items-center">
                    <div className="relative mt-4 flex w-full items-center justify-center">
                        <div className="h-[1px] w-full max-w-[100px] border-t-2 border-dashed border-blue-400"></div>
                        <ChevronRight
                            size={16}
                            className="-ml-1 text-blue-400"
                        />
                    </div>
                </div>

                <div className="flex w-[150px] flex-col items-center gap-4">
                    <div className="relative flex h-[88px] w-20 items-center justify-center rounded-md border-[1.5px] border-slate-800">
                        <div className="absolute top-1/2 left-4 h-0.5 w-3 -translate-y-1/2 bg-primary"></div>
                        <div className="absolute top-1/2 right-3 h-10 w-[1.5px] -translate-y-1/2 bg-slate-300"></div>
                        <div className="absolute top-1/2 right-5 h-10 w-[1.5px] -translate-y-1/2 bg-slate-300"></div>
                    </div>
                    <div className="text-center">
                        <span className="text-text-default block text-[11px] leading-tight font-bold tracking-wider">
                            OXOVOLT BATTERY SYSTEM
                        </span>
                        <span className="text-text-subdued mt-2 block text-[10px] leading-relaxed">
                            Stores energy when prices are low,
                            <br />
                            releases it when they rise
                        </span>
                    </div>
                </div>

                <div className="mt-[44px] flex flex-1 items-center justify-center">
                    <div className="h-[1.5px] w-full max-w-[80px] bg-primary"></div>
                    <ChevronRight size={16} className="text-primary -ml-1" />
                </div>

                <div className="flex w-[110px] flex-col items-center gap-4">
                    <div className="text-text-default flex h-[88px] items-end gap-1 pb-2">
                        <Building2 size={36} strokeWidth={1.2} />
                        <Monitor size={42} strokeWidth={1} />
                    </div>
                    <div className="text-center">
                        <span className="text-text-default block text-[11px] font-bold tracking-wider">
                            YOUR WORKSPACE
                        </span>
                        <span className="text-text-subdued mt-2 block text-[10px] leading-relaxed">
                            Always powered,
                            <br />
                            always productive
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

    const statsSection = (
        <div className="border-border-default my-4 grid grid-cols-2 gap-x-4 gap-y-6 rounded-lg border p-5 shadow-sm lg:my-6 lg:grid-cols-4 lg:p-6">
            {stats.map((s, i) => (
                <div
                    key={i}
                    className={cn(
                        'border-border-default flex flex-col gap-1 pl-3 sm:pl-4',
                        'border-l',
                        i === 0 && 'border-l-0 pl-0 sm:pl-0',
                        i === 2 &&
                            'border-l-0 pl-0 lg:border-l lg:pl-3 lg:sm:pl-4',
                    )}
                >
                    <span className="text-primary text-lg leading-tight font-bold tracking-tight sm:text-xl">
                        {s.value}
                    </span>
                    <span className="text-text-default mt-1 text-[9px] font-bold tracking-widest uppercase sm:text-[10px]">
                        {s.label}
                    </span>
                    <span className="text-text-subdued pr-1 text-[9px] leading-relaxed font-medium sm:text-xs">
                        {s.desc}
                    </span>
                </div>
            ))}
        </div>
    );

    const alertBox = (
        <div className="bg-primary-50/50 dark:bg-primary-50/10 mt-2 flex items-start gap-4 rounded-lg p-5 sm:p-6">
            <div className="flex flex-col gap-1">
                <span className="text-text-default text-[13px] font-medium tracking-wide sm:text-sm">
                    OXOVOLT turns energy price variations into a competitive
                    advantage.
                </span>
                <span className="text-primary text-[13px] font-bold tracking-wide sm:text-sm">
                    Smarter energy. Lower costs. Total peace of mind.
                </span>
            </div>
        </div>
    );

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container size={isSmallView ? 'full' : 'cover'}>
                    <Modal.Dialog className="bg-background max-h-[100dvh] w-full rounded-none p-0 shadow-2xl lg:max-h-[90vh] lg:rounded-2xl lg:p-6 lg:pr-2">
                        <Modal.CloseTrigger className="border-border-default bg-background text-text-subdued top-4 right-4 z-50 rounded border p-1 shadow-sm transition-colors hover:bg-background-hovered sm:top-6 sm:right-6 lg:top-8 lg:right-8" />

                        <Modal.Body className="bg-background mt-0 overflow-x-hidden overflow-y-auto rounded-t-2xl p-0 lg:rounded-none">
                            <div className="flex w-full flex-col gap-8 px-6 py-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:p-12 lg:pb-16">
                                <div className="flex flex-col gap-8 lg:col-span-4 lg:gap-12">
                                    {headerContent}
                                    {featuresListDesktop}
                                </div>

                                <div className="flex flex-col lg:col-span-8">
                                    <div className="flex flex-col gap-3">
                                        <span className="text-text-default text-xs font-bold tracking-widest uppercase">
                                            HOW IT WORKS
                                        </span>
                                        <div className="mb-1 h-[2px] w-full bg-primary" />
                                    </div>

                                    {howItWorksSteps}
                                    {diagram}
                                    {statsSection}
                                    {featuresListMobile}
                                    {alertBox}
                                </div>
                            </div>

                            {isSmallView && footerContent}
                        </Modal.Body>

                        {!isSmallView && (
                            <Modal.Footer className="mt-0 border-t-0 p-0">
                                {footerContent}
                            </Modal.Footer>
                        )}
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
