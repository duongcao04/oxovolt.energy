import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { cn } from '@/lib';
import BatteryImg from '@/assets/batteries/v1-oxovolt-battery.png';
import { ChevronLeft, ChevronRight, FileText, Lock, CheckCircle2, Info, ShieldCheck } from 'lucide-react';

const ENABLE_FINGER = true;
const NAV_BUTTONS = true;

const features = [
    {
        title: 'Encrypted, split, redundant',
        desc: 'Your files are encrypted, split into fragments, and distributed across multiple nodes. Built-in redundancy ensures data integrity and availability.',
    },
    {
        title: 'Sovereign & fully private',
        desc: 'Your data stays yours. Stored in sovereign infrastructure you control — fully private and compliant.',
    },
    {
        title: 'End-to-end encryption',
        desc: 'Your data is encrypted at every step — in transit and at rest. Zero knowledge. Zero compromise.',
    },
    {
        title: 'Always available',
        desc: 'High-availability architecture with automatic failover ensures your data is accessible whenever you need it.',
    },
    {
        title: 'Unlimited. Every type. Everywhere.',
        desc: 'Store all your data — any size, any format. Scalable without limits. Built for today and ready for whatever comes next.',
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

export function SovereignDataVaultModal({
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
            <span className="text-[10px] font-bold tracking-widest text-text-subdued uppercase sm:text-xs">
                DATA VAULT - DATA
            </span>
            <h2 className="text-4xl leading-tight font-extrabold text-text-default sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
                Your own data.
                <br />
                <span className="text-primary">Oxovault™,</span>
                <br />
                <span className="text-primary">your own data.</span>
            </h2>
        </div>
    );

    const leftContent = (
        <div className="mt-6 flex flex-col gap-6 lg:mt-8">
            <p className="text-sm font-medium text-text-default lg:text-base">
                More than storage. Total data protection.
            </p>
            <p className="text-sm leading-relaxed font-medium text-text-subdued lg:text-base">
                Oxovault™ keeps your files encrypted, split across multiple nodes with redundancy — so your data stays private, protected, and accessible at all times.
            </p>
            <p className="text-sm font-bold text-text-default lg:text-base">
                You own your data.
                <br />
                We protect it without compromise.
            </p>

            <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl bg-green-50/50 p-6 dark:bg-green-50/10">
                <div className="flex flex-col gap-4">
                    <span className="text-sm font-bold text-green-700">
                        Sovereign by design.
                        <br />
                        Built for the long term.
                    </span>
                    <span className="text-xs font-medium text-text-default">
                        Engineered in Europe.
                        <br />
                        Designed for durability.
                        <br />
                        Created for total data sovereignty.
                    </span>
                </div>
                <img src={BatteryImg} className="w-16 drop-shadow-md sm:w-20" alt="Oxovault Battery" />
            </div>
        </div>
    );

    const centerContent = (
        <div className="flex flex-col gap-8">
            {/* Blue Highlight Box */}
            <div className="flex items-start gap-4 lg:justify-between">
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-blue-700 sm:text-base">
                        Your data. Your rules. Your infrastructure.
                    </span>
                    <span className="max-w-sm text-xs leading-relaxed font-medium text-text-default">
                        Oxovault™ protects your data from end to end. Encrypted, distributed and fully under your control.
                    </span>
                </div>
                <div className="hidden flex-col items-end text-right lg:flex">
                    <span className="text-[10px] font-medium text-blue-700">OXOVOLT cannot access or read your data at any time.</span>
                    <span className="text-[10px] font-bold text-blue-700">You always stay in control.</span>
                </div>
            </div>

            {/* Diagram */}
            <div className="flex flex-col gap-6 lg:mt-4">
                <span className="text-xs font-bold tracking-widest text-primary uppercase">
                    HOW OXOVAULT™ WORKS
                </span>

                <div className="flex flex-col items-center gap-6 py-4">
                    {/* Step 1 */}
                    <div className="flex w-full items-center justify-center gap-4">
                        <div className="flex h-16 w-12 items-center justify-center rounded border border-slate-300 bg-white">
                            <FileText size={24} className="text-text-subdued" />
                        </div>
                        <div className="flex w-40 flex-col">
                            <span className="text-[11px] font-bold text-text-default uppercase">YOUR FILE</span>
                            <span className="text-[11px] text-text-subdued">Encrypted locally</span>
                        </div>
                    </div>
                    
                    <div className="flex w-full flex-col items-center justify-center">
                         <div className="h-6 w-[2px] border-l-[1.5px] border-dashed border-blue-400"></div>
                         <ChevronRight size={16} className="text-blue-400 rotate-90" />
                    </div>

                    {/* Step 2 */}
                    <div className="flex w-full items-center justify-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-white">
                            <Lock size={20} className="text-primary" />
                        </div>
                        <div className="flex w-40 flex-col">
                            <span className="text-[11px] font-bold text-text-default uppercase">ENCRYPTED & SPLIT</span>
                            <span className="text-[11px] text-text-subdued">Your file is encrypted and split into fragments.</span>
                        </div>
                    </div>

                    {/* Branches */}
                    <div className="relative mt-2 flex h-24 w-full items-center justify-center">
                         <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 100">
                             <line x1="100" y1="0" x2="20" y2="60" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                             <line x1="100" y1="0" x2="60" y2="60" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                             <line x1="100" y1="0" x2="100" y2="60" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                             <line x1="100" y1="0" x2="140" y2="60" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                             <line x1="100" y1="0" x2="180" y2="60" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                         </svg>
                         <div className="absolute top-[60px] flex w-full justify-center gap-4">
                             <img src={BatteryImg} className="w-6 opacity-70" />
                             <img src={BatteryImg} className="w-6 opacity-70" />
                             <img src={BatteryImg} className="w-6 opacity-70" />
                             <img src={BatteryImg} className="w-6 opacity-70" />
                             <img src={BatteryImg} className="w-6 opacity-70" />
                         </div>
                    </div>

                    {/* Step 3 */}
                    <div className="mt-4 flex flex-col items-center text-center">
                         <span className="text-[11px] font-bold text-text-default uppercase">DISTRIBUTED & REDUNDANT</span>
                         <span className="max-w-[200px] text-[10px] text-text-subdued">Fragments are distributed across multiple nodes for maximum redundancy and availability.</span>
                    </div>

                    <div className="flex w-full flex-col items-center justify-center">
                         <div className="h-6 w-[2px] border-l-[1.5px] border-dashed border-blue-400"></div>
                         <ChevronRight size={16} className="text-blue-400 rotate-90" />
                    </div>

                    {/* Step 4 */}
                    <div className="flex w-full items-center justify-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white">
                            <CheckCircle2 size={24} className="text-primary" />
                        </div>
                        <div className="flex w-40 flex-col">
                            <span className="text-[11px] font-bold text-text-default uppercase">ALWAYS AVAILABLE</span>
                            <span className="text-[11px] text-text-subdued">Automatic failover ensures your data is accessible whenever you need it.</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

    const rightFeatures = (
        <div className="flex flex-col gap-4 lg:mt-0">
            {features.map((f, i) => (
                <div
                    key={i}
                    className="group flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900"
                >
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-bold text-text-default sm:text-[15px]">
                            {f.title}
                        </span>
                        <span className="text-[11px] leading-relaxed text-text-subdued sm:text-xs">
                            {f.desc}
                        </span>
                    </div>
                    <ChevronRight size={20} className="shrink-0 text-text-default transition-transform group-hover:translate-x-1" />
                </div>
            ))}
        </div>
    );

    const footerBoxes = (
        <div className="mt-6 flex w-full flex-col gap-6 border-t border-slate-100 pt-6 lg:mt-8 lg:flex-row lg:items-stretch lg:gap-8">
            <div className="flex flex-1 items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-blue-50 text-primary dark:bg-blue-900/30">
                    <Info size={20} />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
                        YOU OWN YOUR DATA
                    </span>
                    <span className="text-[11px] leading-relaxed font-medium text-text-subdued">
                        Your data is yours.<br />Not ours. Not theirs.<br />You decide where it lives, who accesses it, and how it's used.
                    </span>
                </div>
            </div>

            <div className="hidden w-px bg-slate-200 lg:block" />
            <div className="block h-px w-full bg-slate-100 lg:hidden" />

            <div className="flex flex-1 items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-blue-50 text-primary dark:bg-blue-900/30">
                    <ShieldCheck size={20} />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
                        BUILT FOR RESILIENCE. BUILT FOR YOU.
                    </span>
                    <span className="text-[11px] leading-relaxed font-medium text-text-subdued">
                        Redundant by design. Sovereign by default.<br />Oxovault™ keeps your data safe, today and tomorrow.
                    </span>
                </div>
            </div>

            {/* Marquee area (simplified for static layout) */}
            <div className="hidden flex-[1.5] items-center justify-end border-l border-slate-200 pl-8 lg:flex">
                <span className="text-right text-[10px] font-bold tracking-[0.2em] text-slate-400">
                    OFFICES &nbsp;&nbsp;&nbsp; INDUSTRY &nbsp;&nbsp;&nbsp; <span className="text-primary">DATA VAULT</span> &nbsp;&nbsp;&nbsp; HEALTHCARE &nbsp;&nbsp;&nbsp; PRIVATE &nbsp;&nbsp;&nbsp; OFFICES &nbsp;&nbsp;&nbsp; INFRASTRUCTURE
                </span>
            </div>
        </div>
    );

    const desktopLayout = (
        <div className="flex w-full flex-col gap-8 px-6 py-10 lg:p-12 lg:pb-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr_1.3fr] lg:gap-16">
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
                 <span className="text-[11px] font-bold tracking-widest text-primary uppercase">OXOVOLT - DATA VAULT</span>
            </div>
            {headerText}
            {leftContent}
            <div className="mt-8 rounded-xl bg-blue-50/50 p-5 dark:bg-blue-50/10">
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-blue-700">Your data. Your rules. Your infrastructure.</span>
                    <span className="text-xs text-text-default">Oxovault™ protects your data from end to end. Encrypted, distributed and fully under your control.</span>
                </div>
            </div>
            <div className="mt-8">
                {centerContent}
            </div>
        </div>
    );

    const mobilePage2 = (
        <div className="flex w-full flex-col px-6 py-6">
            <div className="mb-6 flex items-center justify-between">
                 <span className="text-[11px] font-bold tracking-widest text-primary uppercase">OXOVOLT - DATA VAULT</span>
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
                                : 'max-h-[95vh] lg:rounded-[32px] lg:p-0',
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
