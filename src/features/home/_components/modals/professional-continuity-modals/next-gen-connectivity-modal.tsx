import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { cn } from '@/lib';

const leftFeatures = [
    {
        title: 'MULTI-NETWORK CONNECTIVITY',
        desc: 'Combines Classic, 4-5G mobile, Radio (Entropia) and satellite (Starlink) for maximum availability and performance.',
    },
    {
        title: 'INTELLIGENT FAILOVER',
        desc: 'Automatically switches to the best available network if one becomes unavailable. You stay connected. Always.',
    },
    {
        title: 'RELIABLE BY DESIGN',
        desc: 'Built for critical communications. No downtime. No compromise. Engineered for resilience.',
    },
    {
        title: 'FLEXIBLE & FUTURE-READY',
        desc: "Adapts to your environment and evolves with new technologies. Ready for what's next.",
    },
];

const stats = [
    {
        value: '100% CONTINUITY',
        desc: 'Always connected, even if a network goes down.',
    },
    {
        value: 'MAXIMUM RELIABILITY',
        desc: 'Built on diverse, proven technologies.',
    },
    { value: 'GLOBAL COVERAGE', desc: 'Connect anywhere, in any environment.' },
    {
        value: 'PEACE OF MIND',
        desc: 'Your critical communications never stop.',
    },
];

export function NextGenConnectivityModal({
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
        <div className="border-border-default flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-4 border-t py-4 text-xs font-bold md:gap-x-8 lg:pt-0">
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
                Next gen connectivity.
                <br />
                <span className="text-primary">Always connected.</span>
            </h2>
            <p className="text-text-subdued mt-4 max-w-sm text-sm leading-relaxed font-medium">
                Multiple networks. Smart fallback.
                <br />
                Uninterrupted communications,
                <br />
                wherever you are.
            </p>
            <div className="bg-primary mt-2 mb-2 h-[2px] w-12 lg:mb-4" />
        </div>
    );

    const featuresListDesktop = (
        <div className="hidden w-full flex-col gap-6 lg:flex">
            {leftFeatures.map((f, i) => (
                <div
                    key={i}
                    className="border-primary border-border-default flex flex-col gap-2 border-b border-l-2 pb-5 pl-4 last:border-0 last:pb-0"
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

    const diagram = (
        <div
            className="mt-2 w-full overflow-x-auto pt-2 pb-6 lg:mt-4 [&::-webkit-scrollbar]:hidden"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
            <div className="flex w-full min-w-[700px] flex-col items-center px-2">
                {/* Top labels */}
                <div className="mb-2 flex w-full items-end justify-between">
                    <div className="flex flex-1 justify-center">
                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">
                            SOVEREIGN NETWORKS
                        </span>
                    </div>
                    <div className="flex w-[180px] justify-center">
                        <span className="text-[10px] font-bold tracking-widest text-red-500 uppercase">
                            NON-SOVEREIGN NETWORK
                        </span>
                    </div>
                </div>

                {/* Boxes row */}
                <div className="flex w-full items-stretch justify-between gap-4">
                    {/* Sovereign Group */}
                    <div className="bg-background relative flex flex-1 gap-1 rounded-lg border-[1.5px] border-blue-500 p-1">
                        <div className="bg-primary-50/50 dark:bg-primary-50/10 flex flex-1 flex-col items-center rounded-md px-3 py-5 text-center">
                            <span className="text-text-default text-[11px] font-bold tracking-widest uppercase">
                                CLASSIC
                            </span>
                            <span className="text-text-subdued mt-1 text-[10px] font-bold">
                                ADSL, VDSL, Fiber
                            </span>
                            <p className="text-text-subdued mt-5 text-[10px] leading-relaxed">
                                Sovereign and independent connectivity over
                                fixed lines. High-speed, cost-effective where
                                infrastructure is available.
                            </p>
                        </div>
                        <div className="bg-primary-50/50 dark:bg-primary-50/10 flex flex-1 flex-col items-center rounded-md px-3 py-5 text-center">
                            <span className="text-text-default text-[11px] font-bold tracking-widest uppercase">
                                4-5G MOBILE
                            </span>
                            <span className="text-text-subdued mt-1 text-[10px] font-bold">
                                4G or 5G depending
                                <br />
                                on your region
                            </span>
                            <p className="text-text-subdued mt-5 text-[10px] leading-relaxed">
                                Sovereign mobile connectivity with broad
                                coverage. 4G is already more than enough in most
                                cases.
                            </p>
                        </div>
                        <div className="bg-primary-50/50 dark:bg-primary-50/10 flex flex-1 flex-col items-center rounded-md px-3 py-5 text-center">
                            <span className="text-text-default text-[11px] font-bold tracking-widest uppercase">
                                RADIO NETWORK
                            </span>
                            <span className="text-text-subdued mt-1 text-[10px] font-bold">
                                Entropia Network
                            </span>
                            <p className="text-text-subdued mt-5 text-[10px] leading-relaxed">
                                Sovereign private radio network. Never been
                                hacked. Designed for mission-critical
                                communications.
                            </p>
                        </div>
                    </div>

                    {/* Non Sovereign Group */}
                    <div className="bg-background relative flex w-[180px] rounded-lg border-[1.5px] border-red-400 p-1">
                        <div className="bg-primary-50/50 dark:bg-primary-50/10 flex flex-1 flex-col items-center rounded-md px-3 py-5 text-center">
                            <span className="text-text-default text-[11px] font-bold tracking-widest uppercase">
                                SATELLITE
                            </span>
                            <span className="text-text-subdued mt-1 text-[10px] font-bold">
                                Starlink
                            </span>
                            <p className="text-text-subdued mt-5 text-[10px] leading-relaxed">
                                High-performance satellite connectivity
                                (Starlink). Not sovereign but extremely robust
                                technology. Ideal for any location.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Connectors row */}
                <div className="relative h-[40px] w-full">
                    {/* Vertical drop from Sovereign */}
                    <div className="bg-primary absolute top-0 left-[calc((100%-196px)/2)] h-[15px] w-[1.5px]"></div>
                    {/* Vertical drop from Non Sovereign */}
                    <div className="bg-primary absolute top-0 right-[90px] h-[15px] w-[1.5px]"></div>
                    {/* Horizontal connecting line */}
                    <div className="bg-primary absolute top-[15px] right-[90px] left-[calc((100%-196px)/2)] h-[1.5px]"></div>
                    {/* Vertical drop to Failover box */}
                    <div className="bg-primary absolute top-[15px] left-1/2 h-[25px] w-[1.5px]"></div>
                    {/* Arrow head */}
                    <div className="bg-background absolute top-[28px] left-1/2 flex -translate-x-1/2 items-center justify-center rounded-full">
                        <ChevronDown
                            size={16}
                            strokeWidth={3}
                            className="text-primary"
                        />
                    </div>
                </div>

                {/* Intelligent Failover Box */}
                <div className="bg-primary-50/50 dark:bg-primary-50/10 z-10 flex min-w-[400px] flex-col items-center justify-center rounded-lg px-8 py-5 text-center">
                    <span className="text-primary text-[11px] font-bold tracking-widest uppercase sm:text-xs">
                        INTELLIGENT FAILOVER
                    </span>
                    <span className="text-text-default mt-2 text-[11px] font-medium">
                        Automatically switches to the best available network.
                    </span>
                    <span className="text-text-subdued mt-1 text-[11px] font-medium">
                        Seamless. Automatic. Uninterrupted.
                    </span>
                </div>
            </div>
        </div>
    );

    const statsSection = (
        <div className="border-border-default my-4 grid grid-cols-2 gap-x-4 gap-y-6 rounded-lg border py-6 shadow-sm lg:my-6 lg:grid-cols-4 lg:py-8">
            {stats.map((s, i) => (
                <div
                    key={i}
                    className={cn(
                        'border-border-default flex flex-col items-center gap-2 px-4 text-center',
                        'border-l',
                        i === 0 && 'border-l-0',
                        i === 2 && 'border-l-0 lg:border-l',
                    )}
                >
                    <span className="text-primary text-[11px] font-bold tracking-widest uppercase sm:text-xs">
                        {s.value}
                    </span>
                    <span className="text-text-subdued text-[10px] leading-relaxed font-medium sm:text-[11px]">
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
                    OXOVOLT delivers next generation connectivity for operations
                    that cannot stop.
                </span>
                <span className="text-primary text-[13px] font-bold tracking-wide sm:text-sm">
                    Multiple networks. Smart fallback. One mission: keep you
                    connected.
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
                                {/* Left Column */}
                                <div className="flex flex-col gap-8 lg:col-span-4 lg:gap-12">
                                    {headerContent}
                                    {featuresListDesktop}
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col lg:col-span-8">
                                    <div className="flex flex-col gap-3">
                                        <span className="text-text-default text-xs font-bold tracking-widest uppercase">
                                            HOW IT WORKS
                                        </span>
                                        <div className="bg-primary mb-1 h-[2px] w-full" />
                                        <p className="text-text-subdued max-w-xl text-sm leading-relaxed font-medium">
                                            OXOVOLT combines multiple
                                            connectivity technologies to ensure
                                            continuous, reliable communications
                                            in all conditions.
                                        </p>
                                    </div>

                                    {diagram}
                                    {statsSection}
                                    {featuresListMobile}
                                    {alertBox}
                                </div>
                            </div>

                            {/* Render footer inside body for mobile so it scrolls */}
                            {isSmallView && footerContent}
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
