import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { cn } from '@/lib';
import BatteryImg from '@/assets/batteries/v1-oxovolt-battery.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ENABLE_FINGER = true;
const NAV_BUTTONS = true;

const leftFeatures = [
    {
        title: 'LOCAL ORCHESTRATION CORE',
        desc: 'Industrial ARM compute architecture paired with a real-time energy orchestration controller.',
    },
    {
        title: 'HARDWARE SOVEREIGNTY',
        desc: 'High-efficiency compute, industrial I/O management, isolated communication buses, real-time control and secure local execution layers.',
    },
    {
        title: 'REAL-TIME SYSTEM FABRIC',
        desc: 'The orchestration layer supervises batteries, inverters, connectivity, storage, node sync and failover operations. All processed locally with deterministic behavior.',
    },
    {
        title: 'EDGE COMPUTE ARCHITECTURE',
        desc: 'CEREBROXmesh operates directly on the edge. No hyperscaler dependency. No mandatory remote compute. Infrastructure intelligence remains physically attached to the system.',
    },
    {
        title: 'SOVEREIGN BY DESIGN',
        desc: 'Data, logic and infrastructure remain under your control. No forced dependency. No centralized lock-in. No invisible orchestration layer.',
    },
];

const stats = [
    {
        title: 'REAL-TIME ORCHESTRATION',
        desc: 'Continuous infrastructure synchronization.',
    },
    {
        title: 'LOCAL-FIRST LOGIC',
        desc: 'Critical decisions processed locally.',
    },
    {
        title: 'RESILIENT MESH',
        desc: 'Distributed ecosystem intelligence.',
    },
    {
        title: 'CLOUD OPTIONAL',
        desc: 'Infrastructure remains operational offline.',
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

export function SovereignOrchestratorModal({
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

    const headerTitle = (
        <div className="flex flex-col gap-4 pt-4 lg:pt-0">
            <span className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-primary uppercase sm:text-xs">
                PRIVATE SOVEREIGN ORCHESTRATION
            </span>
            <h2 className="text-4xl leading-tight font-extrabold text-text-default sm:text-5xl lg:text-6xl">
                CEREBROX<span className="text-primary">mesh.</span>
            </h2>
            <h3 className="text-xl leading-snug font-bold text-text-default sm:text-2xl lg:text-3xl">
                Autonomous orchestration layer<br className="hidden lg:block" />
                for sovereign infrastructure.
            </h3>
        </div>
    );

    const descriptionText = (
        <p className="mt-6 max-w-lg text-[11px] leading-relaxed font-medium text-text-default sm:text-xs lg:mt-8">
            CEREBROXmesh is the sovereign intelligence layer orchestrating the entire OXOVOLT ecosystem.
            <br /><br />
            It synchronizes energy, connectivity, storage, routing and local compute in real time — without relying on centralized cloud infrastructures.
            <br /><br />
            Designed for resilience.<br />
            Built for autonomy.<br />
            Engineered for post-cloud infrastructure.
        </p>
    );

    const topHighlightBox = (
        <div className="mt-8 flex flex-col justify-between gap-4 rounded-xl bg-primary-50/50 p-5 dark:bg-primary-50/10 sm:flex-row sm:gap-8 sm:p-6 lg:mt-0">
            <div className="flex flex-1 flex-col gap-2 border-l-2 border-primary pl-4">
                <span className="text-sm font-bold text-blue-700 sm:text-base">
                    Your infrastructure. Your logic. Your sovereignty.
                </span>
                <span className="text-[11px] leading-relaxed font-medium text-text-subdued sm:text-[12px]">
                    CEREBROXmesh orchestrates local intelligence across the entire ecosystem while preserving autonomy, resilience and operational continuity.
                </span>
            </div>
            <div className="flex flex-[0.7] flex-col justify-center gap-2 sm:text-right">
                <span className="text-[10px] leading-relaxed font-medium text-blue-700 sm:text-[11px]">
                    OXOVOLT cannot remotely control your infrastructure.
                    <br />
                    Critical orchestration always remains local-first.
                </span>
            </div>
        </div>
    );

    const leftFeaturesList = (
        <div className="mt-8 flex w-full flex-col gap-6 lg:mt-10">
            {leftFeatures.map((f, i) => (
                <div
                    key={i}
                    className="flex flex-col gap-2 border-l-2 border-primary pl-4 pb-2"
                >
                    <span className="text-[11px] font-bold tracking-widest text-blue-700 uppercase sm:text-xs">
                        {f.title}
                    </span>
                    <span className="max-w-md text-[11px] leading-relaxed font-medium text-text-default sm:text-[12px]">
                        {f.desc}
                    </span>
                </div>
            ))}
        </div>
    );

    const diagram = (
        <div
            className="mt-6 w-full overflow-x-auto pt-8 pb-8 [&::-webkit-scrollbar]:hidden"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
            <div className="flex w-full min-w-[700px] flex-col">
                {/* 3 Steps */}
                <div className="mb-10 flex w-full justify-between">
                    <div className="flex w-1/3 flex-col gap-2 pr-4">
                        <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                            1. INDUSTRIAL EDGE COMPUTE
                        </span>
                        <span className="text-[10px] leading-relaxed font-medium text-text-default">
                            ARM-based sovereign compute core. Real-time orchestration controller. Secure local execution.
                        </span>
                    </div>
                    <div className="flex w-1/3 flex-col gap-2 px-2">
                        <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                            2. MESH SYNCHRONIZATION
                        </span>
                        <span className="text-[10px] leading-relaxed font-medium text-text-default">
                            Nodes exchange encrypted operational states across the ecosystem.
                        </span>
                    </div>
                    <div className="flex w-1/3 flex-col gap-2 pl-4">
                        <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                            3. AUTONOMOUS INFRASTRUCTURE
                        </span>
                        <span className="mb-2 text-[10px] leading-relaxed font-medium text-text-default">
                            Energy, storage and connectivity remain operational locally — even during outages or network failures.
                        </span>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex h-12 items-center justify-center bg-slate-50 text-[9px] font-bold tracking-widest text-text-subdued">ENERGY SYSTEMS</div>
                            <div className="flex h-12 items-center justify-center bg-slate-50 text-[9px] font-bold tracking-widest text-text-subdued">STORAGE SYSTEMS</div>
                            <div className="flex h-12 items-center justify-center bg-slate-50 text-[9px] font-bold tracking-widest text-text-subdued">CONNECTIVITY LAYERS</div>
                            <div className="flex h-12 items-center justify-center bg-slate-50 text-[9px] font-bold tracking-widest text-text-subdued">ENDPOINT DEVICES</div>
                        </div>
                    </div>
                </div>

                {/* The visual graph placeholder */}
                <div className="relative mt-4 flex w-full items-center justify-between px-4">
                    <img src={BatteryImg} className="w-40 drop-shadow-lg opacity-80" alt="CerebroXMesh" />
                    
                    {/* Dotted Arrow */}
                    <div className="mx-4 flex flex-1 items-center justify-center">
                        <div className="w-full border-t-[1.5px] border-dashed border-blue-400"></div>
                        <ChevronRight size={20} className="-ml-2 text-blue-400" />
                    </div>

                    {/* Nodes Network Placeholder */}
                    <div className="relative flex h-40 w-40 items-center justify-center">
                         <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 160 160">
                             <line x1="80" y1="20" x2="20" y2="80" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                             <line x1="80" y1="20" x2="140" y2="80" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                             <line x1="20" y1="80" x2="80" y2="140" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                             <line x1="140" y1="80" x2="80" y2="140" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3" />
                         </svg>
                         <img src={BatteryImg} className="absolute top-5 left-20 w-8 -translate-x-1/2 -translate-y-1/2 drop-shadow-md opacity-60" />
                         <img src={BatteryImg} className="absolute top-20 left-5 w-8 -translate-x-1/2 -translate-y-1/2 drop-shadow-md opacity-60" />
                         <img src={BatteryImg} className="absolute top-20 left-35 w-8 -translate-x-1/2 -translate-y-1/2 drop-shadow-md opacity-60" />
                         <img src={BatteryImg} className="absolute top-35 left-20 w-8 -translate-x-1/2 -translate-y-1/2 drop-shadow-md opacity-60" />
                    </div>

                    <div className="mx-4 flex flex-1 items-center justify-center">
                        <div className="w-full border-t-[1.5px] border-dashed border-blue-400"></div>
                        <ChevronRight size={20} className="-ml-2 text-blue-400" />
                    </div>
                    
                    <div className="w-40" />
                </div>
            </div>
        </div>
    );

    const statsSection = (
        <div className="my-4 grid grid-cols-2 gap-x-4 gap-y-6 border-y border-border-default py-6 lg:mt-6 lg:grid-cols-4">
            {stats.map((s, i) => (
                <div
                    key={i}
                    className={cn(
                        'flex flex-col gap-2 px-2',
                        'border-l border-primary',
                        i === 0 && 'border-l-0 pl-0',
                        i === 2 && 'border-l-0 pl-0 lg:border-l lg:pl-2',
                    )}
                >
                    <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                        {s.title}
                    </span>
                    <span className="text-[11px] leading-relaxed font-medium text-text-subdued">
                        {s.desc}
                    </span>
                </div>
            ))}
        </div>
    );

    const alertBoxes = (
        <div className="mt-2 grid grid-cols-1 gap-4 lg:mt-6">
            <div className="flex items-center gap-6 rounded-xl bg-green-50/50 p-5 dark:bg-green-50/10 sm:p-6">
                <img src={BatteryImg} className="w-24 shrink-0 drop-shadow-md" />
                <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold text-green-700">
                        Autonomous resilience.<br />Global coordination.
                    </span>
                    <span className="text-[11px] font-medium text-text-default">
                        Local systems continue operating independently while the mesh infrastructure synchronizes in the background.<br /><br />
                        No single point of orchestration failure.
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-6 rounded-xl bg-blue-50/50 p-5 dark:bg-blue-50/10 sm:p-6">
                <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold text-blue-700">
                        One orchestrator.<br />Infinite infrastructure possibilities.
                    </span>
                    <span className="text-[11px] font-medium text-text-default">
                        CEREBROXmesh adapts from single-node systems to distributed sovereign infrastructures.
                    </span>
                </div>
                <img src={BatteryImg} className="w-24 shrink-0 opacity-50" />
            </div>
        </div>
    );

    const bottomCombinedBox = (
        <div className="mt-4 mb-6 flex w-full flex-col gap-6 lg:mt-6 lg:mb-0 lg:flex-row lg:items-stretch lg:gap-8 lg:p-6">
            <div className="flex flex-1 flex-col gap-2">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                    NOT A CENTRALIZED CLOUD
                </span>
                <span className="text-[11px] leading-relaxed font-medium text-text-subdued">
                    CEREBROXmesh is not dependent on hyperscaler infrastructure.
                    The orchestration layer remains distributed, local-first and sovereign.
                </span>
            </div>

            {/* Divider */}
            <div className="hidden w-px bg-slate-300 lg:block" />
            <div className="block h-px w-full bg-slate-200 lg:hidden" />

            <div className="flex flex-1 flex-col gap-2">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                    A SOVEREIGN INTELLIGENCE LAYER
                </span>
                <span className="text-[11px] leading-relaxed font-medium text-text-subdued">
                    You control the infrastructure.
                    <br />
                    You control the logic.
                    <br />
                    You control the ecosystem.
                </span>
            </div>
        </div>
    );

    const desktopLayout = (
        <div className="flex w-full flex-col gap-8 px-6 py-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:p-12 lg:pb-16">
            <div className="flex flex-col lg:col-span-4">
                {headerTitle}
                {descriptionText}
                {leftFeaturesList}
            </div>
            <div className="flex flex-col lg:col-span-8">
                {topHighlightBox}
                {diagram}
                {statsSection}
                {alertBoxes}
            </div>
        </div>
    );

    const mobilePage1 = (
        <div className="flex w-full flex-col px-6 py-6">
            {headerTitle}
            {topHighlightBox}
            {descriptionText}
            {leftFeaturesList}
            {diagram}
        </div>
    );

    const mobilePage2 = (
        <div className="flex w-full flex-col gap-2 px-6 py-6">
            {statsSection}
            {alertBoxes}
            {bottomCombinedBox}
        </div>
    );

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container size={isSmallView ? 'full' : 'cover'}>
                    <Modal.Dialog
                        className={cn(
                            'mx-auto w-full bg-background p-0 shadow-2xl',
                            isSmallView
                                ? 'flex h-[100dvh] flex-col overflow-hidden rounded-none'
                                : 'max-h-[95vh] lg:rounded-2xl lg:p-6 lg:pr-2',
                        )}
                    >
                        <Modal.CloseTrigger className="top-4 right-4 z-50 rounded border border-border-default bg-background p-1 text-text-subdued shadow-sm transition-colors hover:bg-background-hovered sm:top-6 sm:right-6 lg:top-8 lg:right-8" />

                        {isSmallView && (
                            <Modal.Header className="grid shrink-0 grid-cols-[1fr_84px_44px_84px_1fr] items-center border-b border-slate-100 px-4 pt-6 pb-4">
                                <div />
                                <div className="flex justify-start">
                                    {NAV_BUTTONS && (
                                        <button
                                            onClick={() => paginate(-1)}
                                            disabled={page === 0}
                                            className={cn(
                                                'flex items-center gap-1 rounded-[100px] px-4 py-2 text-[11px] font-bold tracking-widest transition-colors',
                                                page === 0
                                                    ? 'cursor-not-allowed border border-slate-100 bg-slate-50 text-slate-300'
                                                    : 'border border-[#e2e8f0] bg-[#f4f7fe] text-primary hover:bg-[#ebf0fe]',
                                            )}
                                        >
                                            <ChevronLeft size={14} strokeWidth={3} />
                                            PREV
                                        </button>
                                    )}
                                </div>

                                <div className="flex flex-col items-center justify-center gap-3">
                                    <div className="flex items-center gap-1.5">
                                        <div
                                            className={`h-1.5 w-1.5 rounded-full transition-colors ${page === 0 ? 'bg-primary' : 'bg-slate-300'}`}
                                        />
                                        <div
                                            className={`h-1.5 w-1.5 rounded-full transition-colors ${page === 1 ? 'bg-primary' : 'bg-slate-300'}`}
                                        />
                                    </div>
                                    <span className="pt-[1px] text-[10px] font-bold tracking-widest text-text-default">
                                        {page + 1} / 2
                                    </span>
                                </div>

                                <div className="flex justify-end">
                                    {NAV_BUTTONS && (
                                        <button
                                            onClick={() => paginate(1)}
                                            disabled={page === 1}
                                            className={cn(
                                                'flex items-center gap-1 rounded-[100px] px-4 py-2 text-[11px] font-bold tracking-widest transition-colors',
                                                page === 1
                                                    ? 'cursor-not-allowed border border-slate-100 bg-slate-50 text-slate-300'
                                                    : 'border border-[#e2e8f0] bg-[#f4f7fe] text-primary hover:bg-[#ebf0fe]',
                                            )}
                                        >
                                            NEXT
                                            <ChevronRight size={14} strokeWidth={3} />
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
                                    ? 'relative min-h-0 flex-1 bg-background'
                                    : 'overflow-x-hidden overflow-y-auto rounded-t-2xl bg-background lg:rounded-none',
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
                                        className="absolute inset-0 flex w-full touch-pan-y flex-col overflow-x-hidden overflow-y-auto"
                                    >
                                        <div className="flex min-h-full flex-col pb-6">
                                            {page === 0 ? mobilePage1 : mobilePage2}
                                            {page === 1 && (
                                                <div className="px-6">
                                                    {/* Additional footer spacing on mobile */}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            ) : (
                                desktopLayout
                            )}
                        </Modal.Body>

                        {!isSmallView && (
                            <Modal.Footer className="mt-0 shrink-0 border-t-0 p-0">
                                {bottomCombinedBox}
                            </Modal.Footer>
                        )}
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
