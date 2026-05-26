import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { cn } from '@/lib';
import BatteryImg from '@/assets/batteries/v1-oxovolt-battery.png';
import { ChevronLeft, ChevronRight, Globe, Shield, Wifi, ArrowRightLeft, Lock, Monitor, Cloud, Radio, Satellite, RadioReceiver, ShieldCheck } from 'lucide-react';

const ENABLE_FINGER = true;
const NAV_BUTTONS = true;

const features = [
    {
        icon: Wifi,
        title: 'Always connected',
        desc: 'Stay online at all times with stable, high-performance connectivity designed for uninterrupted operations.',
    },
    {
        icon: ArrowRightLeft,
        title: 'Multi-network & failover',
        desc: 'Automatic switching between multiple networks and providers ensures continuous access — even if one link goes down.',
    },
    {
        icon: Lock,
        title: 'Secure by design',
        desc: 'End-to-end encryption, private routing, and advanced threat protection keep your data and communications safe.',
    },
    {
        icon: Globe,
        title: 'Global coverage',
        desc: 'Connect across regions and continents with intelligent network routing and optimized performance.',
    },
    {
        icon: Monitor,
        title: 'Centralized control',
        desc: 'Monitor, manage, and configure your connectivity from a single interface — with full visibility and control.',
    },
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
    }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

export function ResilientConnectivityModal({
    isOpen,
    onOpenChange,
}: {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    const { isSmallView } = useDevice();
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection: number) => {
        if (page + newDirection < 0 || page + newDirection > 1) return;
        setPage([page + newDirection, newDirection]);
    };

    const headerText = (
        <div className="flex flex-col gap-4 pt-4 lg:pt-0">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase sm:text-xs">
                OXOVOLT – CONNECTIVITY
            </span>
            <h2 className="text-4xl leading-tight font-extrabold text-text-default sm:text-5xl lg:text-[52px] lg:leading-[1.1]">
                Always connected.
                <br />
                <span className="text-primary">Always in control.</span>
            </h2>
        </div>
    );

    const leftContent = (
        <div className="mt-6 flex flex-col gap-6 lg:mt-8">
            <p className="text-sm leading-relaxed font-medium text-text-subdued lg:text-[15px]">
                Reliable connectivity is essential.
                <br />
                Our systems keep you connected, secure,
                <br />
                and in control — anywhere, anytime.
                <br />
                Built for uninterrupted performance.
                <br />
                Designed for a connected world.
            </p>

            <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <Globe size={18} className="text-primary" />
                    <span className="text-sm font-bold text-text-default">Global reach. Local reliability.</span>
                </div>
                <div className="flex items-center gap-3">
                    <Shield size={18} className="text-primary" />
                    <span className="text-sm font-bold text-text-default">Total control over your connectivity.</span>
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-6 rounded-2xl bg-slate-50 p-6 pt-8 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div className="flex flex-col gap-2 z-10">
                    <span className="text-sm font-bold text-blue-700">
                        Multi-layer connectivity.
                    </span>
                    <span className="text-xs font-medium text-text-default max-w-[200px]">
                        4G/5G, classic networks, Entropia radio, and Starlink as alternative.
                    </span>
                </div>
                {/* Hardware placeholder Image */}
                <div className="relative mt-2 flex justify-end">
                    <img src={BatteryImg} className="w-48 drop-shadow-lg -mt-16 z-0" alt="Connectivity Hardware" />
                </div>
            </div>
        </div>
    );

    const centerContent = (
        <div className="flex flex-col gap-8 lg:px-4">
            <div className="flex flex-col items-center gap-8 lg:mt-4">
                <span className="text-xs font-bold tracking-widest text-primary uppercase">
                    MULTI-LAYER CONNECTIVITY ARCHITECTURE
                </span>

                <div className="flex flex-col items-center w-full relative">
                    
                    {/* Internet Node */}
                    <div className="flex flex-col items-center gap-2">
                        <Cloud size={48} strokeWidth={1.5} className="text-primary" />
                        <span className="text-[11px] font-bold text-text-default uppercase">INTERNET</span>
                    </div>

                    {/* Dotted lines from Cloud down to 4 nodes */}
                    <div className="relative mt-4 flex h-8 w-full items-center justify-center">
                        <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 400 40">
                             <line x1="200" y1="0" x2="50" y2="40" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                             <line x1="200" y1="0" x2="150" y2="40" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                             <line x1="200" y1="0" x2="250" y2="40" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                             <line x1="200" y1="0" x2="350" y2="40" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                             {/* Circle endpoints */}
                             <circle cx="50" cy="40" r="2.5" fill="#fff" stroke="#60a5fa" strokeWidth="1.5" />
                             <circle cx="150" cy="40" r="2.5" fill="#fff" stroke="#60a5fa" strokeWidth="1.5" />
                             <circle cx="250" cy="40" r="2.5" fill="#fff" stroke="#60a5fa" strokeWidth="1.5" />
                             <circle cx="350" cy="40" r="2.5" fill="#fff" stroke="#60a5fa" strokeWidth="1.5" />
                        </svg>
                    </div>

                    {/* 4 Network Nodes */}
                    <div className="flex w-full justify-between px-2 mt-4 gap-2">
                        <div className="flex flex-col items-center text-center gap-2 w-1/4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                            <Radio size={32} className="text-primary" strokeWidth={1.5} />
                            <span className="text-[10px] font-bold text-text-default uppercase mt-2">4G / 5G</span>
                            <div className="h-1 w-1 bg-primary rounded-full my-1"></div>
                            <span className="text-[10px] text-text-subdued">Mobile Networks</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2 w-1/4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                            <Wifi size={32} className="text-primary" strokeWidth={1.5} />
                            <span className="text-[10px] font-bold text-text-default uppercase mt-2">CLASSIC NETWORKS</span>
                            <div className="h-1 w-1 bg-primary rounded-full my-1"></div>
                            <span className="text-[10px] text-text-subdued">Fixed Line & DSL</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2 w-1/4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                            <RadioReceiver size={32} className="text-primary" strokeWidth={1.5} />
                            <span className="text-[10px] font-bold text-text-default uppercase mt-2">ENTROPIA RADIO</span>
                            <div className="h-1 w-1 bg-primary rounded-full my-1"></div>
                            <span className="text-[10px] text-text-subdued">Private & Resilient</span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-2 w-1/4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                            <Satellite size={32} className="text-primary" strokeWidth={1.5} />
                            <span className="text-[10px] font-bold text-text-default uppercase mt-2">STARLINK SATELLITE</span>
                            <div className="h-1 w-1 bg-primary rounded-full my-1"></div>
                            <span className="text-[10px] text-text-subdued">High-speed Satellite</span>
                        </div>
                    </div>

                    {/* Dotted lines from 4 nodes down to Router */}
                    <div className="relative mt-2 flex h-12 w-full items-center justify-center">
                        <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 400 60">
                             <line x1="50" y1="0" x2="200" y2="60" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                             <line x1="150" y1="0" x2="200" y2="60" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                             <line x1="250" y1="0" x2="200" y2="60" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                             <line x1="350" y1="0" x2="200" y2="60" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                             {/* Circle endpoints */}
                             <circle cx="50" cy="0" r="2.5" fill="#fff" stroke="#60a5fa" strokeWidth="1.5" />
                             <circle cx="150" cy="0" r="2.5" fill="#fff" stroke="#60a5fa" strokeWidth="1.5" />
                             <circle cx="250" cy="0" r="2.5" fill="#fff" stroke="#60a5fa" strokeWidth="1.5" />
                             <circle cx="350" cy="0" r="2.5" fill="#fff" stroke="#60a5fa" strokeWidth="1.5" />
                        </svg>
                    </div>

                    {/* Router placeholder Image */}
                    <div className="mt-4 flex w-full max-w-[280px] justify-center z-10 bg-blue-700 rounded p-4 relative shadow-md">
                        {/* Fake Router UI */}
                        <div className="absolute top-2 left-2 text-[8px] text-white font-bold">CerebroXmesh®</div>
                        <div className="absolute top-2 right-2 text-[8px] text-white/70">AmoovoXlab</div>
                        <div className="flex gap-2 mt-4 border border-black/20 p-2 bg-black/40 rounded w-full justify-between items-center">
                            <div className="w-6 h-4 bg-black/60 border border-black/40 rounded"></div>
                            <div className="flex gap-1">
                                <div className="w-4 h-2 bg-white/50 rounded"></div>
                                <div className="w-4 h-2 bg-white/50 rounded"></div>
                                <div className="w-4 h-2 bg-white/50 rounded"></div>
                            </div>
                            <div className="w-6 h-4 bg-black/60 border border-black/40 rounded"></div>
                            <div className="flex gap-1">
                                <div className="w-4 h-6 bg-black/60 border border-black/40 rounded"></div>
                                <div className="w-4 h-6 bg-black/60 border border-black/40 rounded"></div>
                                <div className="w-4 h-6 bg-black/60 border border-black/40 rounded"></div>
                            </div>
                        </div>
                        <div className="flex w-full gap-2 mt-2">
                             {[...Array(6)].map((_, i) => (
                                 <div key={i} className="h-6 flex-1 bg-black/80 rounded border-b-2 border-black"></div>
                             ))}
                        </div>
                    </div>

                    {/* Down arrow to Shield */}
                    <div className="flex w-full flex-col items-center justify-center mt-2">
                         <div className="h-6 w-[2px] border-l-[1.5px] border-dashed border-blue-400"></div>
                    </div>

                    {/* Secure & Redundant */}
                    <div className="mt-2 flex flex-col items-center text-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-primary mb-2 dark:bg-blue-900/30">
                            <ShieldCheck size={20} />
                        </div>
                        <span className="text-[11px] font-bold text-text-default uppercase">SECURE & REDUNDANT</span>
                        <span className="max-w-[200px] text-[11px] text-text-subdued mt-1">Automatic failover ensures continuous connectivity.</span>
                    </div>

                </div>
            </div>
        </div>
    );

    const rightFeatures = (
        <div className="flex flex-col gap-3 lg:mt-0">
            {features.map((f, i) => {
                const Icon = f.icon;
                return (
                    <div
                        key={i}
                        className="group flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900"
                    >
                        <div className="mt-1 flex text-primary">
                            <Icon size={20} strokeWidth={2} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <span className="text-sm font-bold text-text-default sm:text-[15px]">
                                {f.title}
                            </span>
                            <span className="text-[11px] leading-relaxed text-text-subdued sm:text-xs">
                                {f.desc}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );

    const footerBoxes = (
        <div className="mt-6 flex w-full flex-col gap-6 border-t border-slate-100 pt-6 lg:mt-8 lg:flex-row lg:items-stretch lg:gap-8">
            <div className="flex flex-1 items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-blue-50 text-primary dark:bg-blue-900/30">
                    <Globe size={20} />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
                        CONNECTED ANYWHERE
                    </span>
                    <span className="text-[11px] leading-relaxed font-medium text-text-subdued">
                        Multiple technologies. Intelligent routing.<br />Seamless connectivity.
                    </span>
                </div>
            </div>

            <div className="hidden w-px bg-slate-200 lg:block" />
            <div className="block h-px w-full bg-slate-100 lg:hidden" />

            <div className="flex flex-1 items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-blue-50 text-primary dark:bg-blue-900/30">
                    <Shield size={20} fill="currentColor" className="text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
                        SECURE BY DESIGN
                    </span>
                    <span className="text-[11px] leading-relaxed font-medium text-text-subdued">
                        Encrypted. Private. Protected.<br />Your data, always safe.
                    </span>
                </div>
            </div>

            {/* Marquee area */}
            <div className="hidden flex-[1.5] items-center justify-end border-l border-slate-200 pl-8 lg:flex">
                <span className="text-right text-[10px] font-bold tracking-[0.2em] text-slate-400">
                    OFFICES &nbsp;&nbsp;&nbsp; INDUSTRY &nbsp;&nbsp;&nbsp; <span className="text-text-default">HEALTHCARE</span> &nbsp;&nbsp;&nbsp; PRIVATE &nbsp;&nbsp;&nbsp; OFFICES &nbsp;&nbsp;&nbsp; INFRASTRUCTURE
                </span>
            </div>
        </div>
    );

    const desktopLayout = (
        <div className="flex w-full flex-col gap-8 px-6 py-10 lg:p-12 lg:pb-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr_1fr] lg:gap-16">
                <div className="flex flex-col">
                    {headerText}
                    {leftContent}
                </div>
                <div className="flex flex-col">
                    {centerContent}
                </div>
                <div className="flex flex-col">
                    {rightFeatures}
                </div>
            </div>
            {footerBoxes}
        </div>
    );

    const mobilePage1 = (
        <div className="flex w-full flex-col px-6 py-6">
            <div className="mb-6 flex items-center justify-between">
                 <span className="text-[11px] font-bold tracking-widest text-primary uppercase">OXOVOLT - CONNECTIVITY</span>
            </div>
            {headerText}
            {leftContent}
            <div className="mt-12 bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
                {centerContent}
            </div>
        </div>
    );

    const mobilePage2 = (
        <div className="flex w-full flex-col px-6 py-6">
            <div className="mb-6 flex items-center justify-between">
                 <span className="text-[11px] font-bold tracking-widest text-primary uppercase">OXOVOLT - CONNECTIVITY</span>
            </div>
            {rightFeatures}
            {footerBoxes}
        </div>
    );

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container size={isSmallView ? 'full' : 'cover'}>
                    <Modal.Dialog
                        className={cn(
                            'mx-auto w-full bg-slate-50 p-0 shadow-2xl dark:bg-background',
                            isSmallView
                                ? 'flex h-[100dvh] flex-col overflow-hidden rounded-none'
                                : 'max-h-[95vh] max-w-[1500px] lg:rounded-[32px] lg:p-0',
                        )}
                    >
                        <Modal.CloseTrigger className="top-4 right-4 z-50 rounded-full bg-white p-2 text-text-subdued shadow-md transition-colors hover:bg-slate-100 sm:top-6 sm:right-6 lg:top-8 lg:right-8" />

                        {isSmallView && (
                            <Modal.Header className="absolute z-50 grid shrink-0 grid-cols-[1fr_84px_44px_84px_1fr] items-center px-4 pt-6 pb-4 w-full">
                                <div />
                                <div className="flex justify-start">
                                    {NAV_BUTTONS && (
                                        <button
                                            onClick={() => paginate(-1)}
                                            disabled={page === 0}
                                            className={cn(
                                                'flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-md transition-opacity',
                                                page === 0 ? 'opacity-0' : 'opacity-100'
                                            )}
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                    )}
                                </div>

                                <div className="flex flex-col items-center justify-center">
                                    <div className="flex items-center gap-1.5">
                                        <div className={`h-1.5 w-1.5 rounded-full transition-colors ${page === 0 ? 'bg-primary' : 'bg-slate-300'}`} />
                                        <div className={`h-1.5 w-1.5 rounded-full transition-colors ${page === 1 ? 'bg-primary' : 'bg-slate-300'}`} />
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    {NAV_BUTTONS && (
                                        <button
                                            onClick={() => paginate(1)}
                                            disabled={page === 1}
                                            className={cn(
                                                'flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-md transition-opacity',
                                                page === 1 ? 'opacity-0' : 'opacity-100'
                                            )}
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    )}
                                </div>
                                <div />
                            </Modal.Header>
                        )}

                        <Modal.Body
                            className={cn(
                                'mt-0 p-0',
                                isSmallView
                                    ? 'relative min-h-0 flex-1'
                                    : 'overflow-x-hidden overflow-y-auto rounded-[32px]',
                            )}
                        >
                            {isSmallView ? (
                                <AnimatePresence initial={false} custom={direction}>
                                    <motion.div
                                        key={page}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: 'spring', stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 },
                                        }}
                                        drag={ENABLE_FINGER ? 'x' : false}
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={1}
                                        onDragEnd={(_, { offset, velocity }) => {
                                            const swipe = swipePower(offset.x, velocity.x);
                                            if (swipe < -swipeConfidenceThreshold) {
                                                paginate(1);
                                            } else if (swipe > swipeConfidenceThreshold) {
                                                paginate(-1);
                                            }
                                        }}
                                        className="absolute inset-0 flex w-full touch-pan-y flex-col overflow-x-hidden overflow-y-auto bg-slate-50 dark:bg-background pt-16"
                                    >
                                        <div className="flex min-h-full flex-col pb-6">
                                            {page === 0 ? mobilePage1 : mobilePage2}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            ) : (
                                desktopLayout
                            )}
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
