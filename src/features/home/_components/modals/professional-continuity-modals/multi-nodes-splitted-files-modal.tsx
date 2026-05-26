import {
    FileText,
    Lock,
    Monitor,
    Smartphone,
    Tablet,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

const ENABLE_FINGER = true;
const NAV_BUTTONS = true;
import BatteryImg from '@/assets/batteries/v1-oxovolt-battery.png';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { useState } from 'react';
import { cn } from '@/lib';

const features = [
    {
        title: 'NO COMPLETE FILE ANYWHERE',
        desc: 'Your files are never stored in full on any remote node.',
        highlight:
            'Every piece is just a fragment — useless on its own.\nNo single node can reconstruct your data.',
    },
    {
        title: 'PHYSICALLY IMPOSSIBLE TO ACCESS',
        desc: 'Even if someone gained physical access to one or several nodes, all they would find are encrypted fragments.',
        highlight:
            "Without the complete set, reconstruction is impossible.\nIt's math. It's architecture.\nIt's absolute.",
    },
    {
        title: 'ENCRYPTED BEFORE SPLITTING',
        desc: 'Your files are encrypted on your device before being split into fragments.',
        highlight: 'No keys.\nNo context.\nNo access.',
    },
    {
        title: 'DISTRIBUTED ACROSS THE COMMUNITY',
        desc: 'Fragments are spread across many nodes operated by trusted members of the ecosystem.',
        highlight:
            "They don't belong to you.\nThey don't know you.\nThey cannot access your data.",
    },
    {
        title: 'DESIGNED TO RESIST EVERYTHING',
        desc: 'No central point of failure.\nNo single target for hackers.\nNo data breach. No ransomware.\nNo backdoor.',
        highlight:
            'Just a secure, resilient architecture built for total data protection.',
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
const swipePower = (offset: number, velocity: number) =>
    Math.abs(offset) * velocity;

export function MultiNodesSplittedFilesModal({
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

    const headerTitle = (
        <div className="flex gap-4 pt-4 lg:pt-0">
            <div className="w-[3px] shrink-0 bg-primary lg:w-[4px]"></div>
            <div className="flex flex-col gap-1 lg:gap-2">
                <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase sm:text-[11px] lg:text-text-default">
                    {isSmallView
                        ? 'OXOVOLT ENERGY'
                        : 'MULTI NODES SPLITTED FILES'}
                </span>
                {isSmallView ? (
                    <h2 className="mt-1 text-[22px] leading-tight font-bold text-text-default sm:text-3xl">
                        MULTI NODES
                        <br />
                        SPLITTED FILES.
                        <br />
                        <span className="text-blue-700">
                            No one can access them.
                            <br />
                            Physically impossible.
                        </span>
                    </h2>
                ) : (
                    <h2 className="mt-1 text-2xl leading-snug font-medium text-text-default sm:text-3xl">
                        No one can access them.
                        <br />
                        Physically impossible.
                    </h2>
                )}
            </div>
        </div>
    );

    const descriptionText = (
        <p className="mt-6 max-w-lg text-[11px] leading-relaxed font-medium text-text-default sm:text-[12px] lg:mt-8">
            Your files are automatically split into many encrypted fragments and
            distributed across multiple OXOVOLT nodes within the community
            network.
            <br className="hidden lg:block" />
            <br className="hidden lg:block" />
            <span className="mt-4 block lg:mt-0">
                Each node only stores tiny fragments. Without all the fragments,
                your files are incomplete, unreadable, and useless.
            </span>
        </p>
    );

    const topHighlightBox = (
        <div className="mt-8 flex flex-col justify-between gap-4 rounded-xl bg-primary-50/50 dark:bg-primary-50/10 p-5 sm:flex-row sm:gap-8 sm:p-6 lg:mt-0">
            <div className="flex flex-1 flex-col gap-3 lg:pr-6">
                <span className="text-[13px] font-bold text-blue-700 sm:text-[15px]">
                    No one can access your files.
                    <br className="hidden lg:block" />
                    <span className="lg:hidden"> </span>Not even all the nodes
                    combined.
                </span>
                <span className="text-[11px] leading-relaxed font-medium text-text-subdued sm:text-[12px]">
                    Without your device and your decryption key, your data is
                    physically and mathematically impossible to access.
                </span>
            </div>
            <div className="flex w-[140px] shrink-0 flex-col justify-center gap-1.5 border-l-[1.5px] border-border-default pl-4 sm:pl-6 lg:w-[180px]">
                <span className="text-[11px] font-medium text-blue-700 sm:text-[12px]">
                    Your data.
                </span>
                <span className="text-[11px] font-medium text-blue-700 sm:text-[12px]">
                    Your rules.
                </span>
                <span className="text-[11px] font-medium text-blue-700 sm:text-[12px]">
                    Your locations.
                </span>
                <span className="mt-1 text-[11px] font-medium text-blue-700 sm:text-[12px]">
                    You stay in control.
                </span>
            </div>
        </div>
    );

    const featuresList = (
        <div className="mt-6 flex w-full flex-col gap-6 lg:mt-10">
            {features.map((f, i) => (
                <div
                    key={i}
                    className="flex flex-row gap-4 border-b border-border-default pb-6 last:border-0 last:pb-0 lg:pb-5"
                >
                    <div className="flex flex-1 flex-col gap-2 lg:w-full">
                        <span className="text-[11px] font-bold tracking-widest text-text-default uppercase sm:text-xs lg:text-blue-800">
                            {f.title}
                        </span>
                        <span className="text-[11px] leading-relaxed font-medium whitespace-pre-wrap text-text-default sm:text-[12px]">
                            {f.desc}
                            <span className="ml-1 hidden lg:inline">
                                {f.highlight.replace(/\n/g, ' ')}
                            </span>
                        </span>
                    </div>
                    <div className="flex w-[45%] shrink-0 flex-col gap-1.5 border-l border-border-default pl-4 text-[10px] font-medium text-blue-700 sm:text-[11px] lg:hidden">
                        {f.highlight.split('\n').map((line, idx) => (
                            <span key={idx}>{line}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );

    const diagramAndStats = (
        <div className="mt-8 w-full rounded-xl border border-border-default bg-background shadow-sm lg:bg-primary-50/50 dark:bg-primary-50/10">
            <div
                className="w-full overflow-x-auto pt-8 pb-8 [&::-webkit-scrollbar]:hidden"
                style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
                <div className="flex w-full min-w-[700px] flex-col px-6">
                    {/* 3 Steps */}
                    <div className="mb-10 flex w-full justify-between">
                        <div className="flex w-1/3 flex-col gap-2 pr-4">
                            <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                                1. ENCRYPT & SPLIT
                            </span>
                            <span className="text-[10px] leading-relaxed font-medium text-text-subdued">
                                Your file is encrypted on your device and split
                                into many fragments.
                            </span>
                        </div>
                        <div className="flex w-1/3 flex-col gap-2 px-2">
                            <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                                2. DISTRIBUTE
                            </span>
                            <span className="text-[10px] leading-relaxed font-medium text-text-subdued">
                                Encrypted fragments are distributed across
                                multiple OXOVOLT nodes in the community network.
                            </span>
                        </div>
                        <div className="flex w-1/3 flex-col gap-2 pl-4">
                            <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                                3. IMPOSSIBLE TO ACCESS
                            </span>
                            <span className="text-[10px] leading-relaxed font-medium text-text-subdued">
                                No one can access the fragments. No one can
                                reconstruct your file.
                                <br />
                                Physically impossible.
                            </span>
                        </div>
                    </div>

                    {/* The visual graph */}
                    <div className="relative mt-4 flex w-full items-center justify-between px-4 lg:justify-around lg:px-8">
                        {/* Left Icon */}
                        <div className="relative flex shrink-0 flex-col items-center">
                            <FileText
                                size={48}
                                strokeWidth={1}
                                className="text-text-default lg:h-[64px] lg:w-[64px]"
                            />
                            <div className="absolute -right-2 -bottom-2 flex items-center justify-center rounded-full border-2 border-white bg-primary p-1.5 lg:border-[#fafcff]">
                                <Lock
                                    size={12}
                                    strokeWidth={2.5}
                                    className="text-white"
                                />
                            </div>
                        </div>

                        {/* Dotted Line with Fragments */}
                        <div className="relative mx-2 flex h-[2px] w-[80px] shrink-0 items-center justify-center sm:mx-4 sm:w-[120px]">
                            <div className="absolute top-1/2 w-full -translate-y-1/2 border-t-[2px] border-dashed border-primary"></div>
                            <div className="relative z-10 flex gap-1 bg-background px-2 sm:gap-1.5 lg:bg-primary-50/50 dark:bg-primary-50/10">
                                <div className="h-3 w-3 bg-blue-200 sm:h-4 sm:w-4"></div>
                                <div className="h-3 w-3 bg-blue-400 sm:h-4 sm:w-4"></div>
                                <div className="h-3 w-3 bg-primary sm:h-4 sm:w-4"></div>
                                <div className="h-3 w-3 bg-blue-800 sm:h-4 sm:w-4"></div>
                                <div className="h-3 w-3 bg-slate-200 sm:h-4 sm:w-4"></div>
                            </div>
                        </div>

                        {/* 5 Nodes Array (Diamond Mesh) */}
                        <div className="relative mx-2 flex h-[160px] w-[240px] shrink-0 items-center justify-center sm:h-[220px] sm:w-[320px] lg:h-[260px] lg:w-[400px]">
                            <svg
                                className="pointer-events-none absolute inset-0 h-full w-full"
                                viewBox="0 0 320 220"
                                preserveAspectRatio="none"
                            >
                                {/* Left Entry */}
                                <line
                                    x1="0"
                                    y1="90"
                                    x2="80"
                                    y2="40"
                                    stroke="#2563eb"
                                    strokeWidth="2.5"
                                    strokeDasharray="5 5"
                                />
                                <line
                                    x1="0"
                                    y1="90"
                                    x2="80"
                                    y2="140"
                                    stroke="#2563eb"
                                    strokeWidth="2.5"
                                    strokeDasharray="5 5"
                                />

                                {/* Right Exit */}
                                <line
                                    x1="240"
                                    y1="40"
                                    x2="320"
                                    y2="90"
                                    stroke="#2563eb"
                                    strokeWidth="2.5"
                                    strokeDasharray="5 5"
                                />
                                <line
                                    x1="240"
                                    y1="140"
                                    x2="320"
                                    y2="90"
                                    stroke="#2563eb"
                                    strokeWidth="2.5"
                                    strokeDasharray="5 5"
                                />

                                {/* Horizontal & Vertical */}
                                <line
                                    x1="80"
                                    y1="40"
                                    x2="240"
                                    y2="40"
                                    stroke="#2563eb"
                                    strokeWidth="2.5"
                                    strokeDasharray="5 5"
                                />
                                <line
                                    x1="80"
                                    y1="40"
                                    x2="80"
                                    y2="140"
                                    stroke="#2563eb"
                                    strokeWidth="2.5"
                                    strokeDasharray="5 5"
                                />
                                <line
                                    x1="240"
                                    y1="40"
                                    x2="240"
                                    y2="140"
                                    stroke="#2563eb"
                                    strokeWidth="2.5"
                                    strokeDasharray="5 5"
                                />

                                {/* Diagonals */}
                                <line
                                    x1="80"
                                    y1="40"
                                    x2="240"
                                    y2="140"
                                    stroke="#2563eb"
                                    strokeWidth="2.5"
                                    strokeDasharray="5 5"
                                />
                                <line
                                    x1="80"
                                    y1="140"
                                    x2="240"
                                    y2="40"
                                    stroke="#2563eb"
                                    strokeWidth="2.5"
                                    strokeDasharray="5 5"
                                />

                                {/* Middle Bottom Connections */}
                                <line
                                    x1="80"
                                    y1="140"
                                    x2="160"
                                    y2="200"
                                    stroke="#2563eb"
                                    strokeWidth="2.5"
                                    strokeDasharray="5 5"
                                />
                                <line
                                    x1="240"
                                    y1="140"
                                    x2="160"
                                    y2="200"
                                    stroke="#2563eb"
                                    strokeWidth="2.5"
                                    strokeDasharray="5 5"
                                />
                            </svg>

                            <img
                                src={BatteryImg}
                                className="absolute w-12 -translate-x-1/2 -translate-y-1/2 drop-shadow-md sm:w-16 lg:w-20"
                                style={{ left: '25%', top: '18.18%' }}
                            />
                            <img
                                src={BatteryImg}
                                className="absolute w-12 -translate-x-1/2 -translate-y-1/2 drop-shadow-md sm:w-16 lg:w-20"
                                style={{ left: '75%', top: '18.18%' }}
                            />
                            <img
                                src={BatteryImg}
                                className="absolute w-12 -translate-x-1/2 -translate-y-1/2 drop-shadow-md sm:w-16 lg:w-20"
                                style={{ left: '25%', top: '63.63%' }}
                            />
                            <img
                                src={BatteryImg}
                                className="absolute w-12 -translate-x-1/2 -translate-y-1/2 drop-shadow-md sm:w-16 lg:w-20"
                                style={{ left: '75%', top: '63.63%' }}
                            />
                            <img
                                src={BatteryImg}
                                className="absolute w-12 -translate-x-1/2 -translate-y-1/2 drop-shadow-md sm:w-16 lg:w-20"
                                style={{ left: '50%', top: '90.9%' }}
                            />
                        </div>

                        {/* Merge Line */}
                        <div className="relative mx-2 flex h-[2px] w-[60px] shrink-0 justify-center sm:mx-4 sm:w-[100px]">
                            <div className="absolute top-1/2 w-full -translate-y-1/2 border-t-[2px] border-dashed border-primary"></div>
                        </div>

                        {/* Right Icons */}
                        <div className="relative flex shrink-0 flex-col items-center gap-4 pr-2 lg:gap-6">
                            <Monitor
                                size={36}
                                strokeWidth={1}
                                className="text-text-default lg:h-[48px] lg:w-[48px]"
                            />
                            <div className="flex gap-4">
                                <Smartphone
                                    size={28}
                                    strokeWidth={1}
                                    className="text-text-default lg:h-[36px] lg:w-[36px]"
                                />
                                <Tablet
                                    size={28}
                                    strokeWidth={1}
                                    className="text-text-default lg:h-[36px] lg:w-[36px]"
                                />
                            </div>
                            <div className="absolute -right-2 bottom-2 flex items-center justify-center rounded-full border-2 border-white bg-primary p-1.5 lg:border-[#fafcff]">
                                <Lock
                                    size={12}
                                    strokeWidth={2.5}
                                    className="text-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-2 gap-y-6 border-t border-border-default px-4 py-6 lg:grid-cols-4">
                <div className="flex flex-col items-center gap-2 border-r border-border-default px-2 text-center lg:px-4">
                    <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                        ONLY FRAGMENTS
                    </span>
                    <span className="text-[10px] leading-relaxed font-medium text-text-subdued">
                        Each node stores only a small, encrypted fragment of
                        your file.
                    </span>
                </div>
                <div className="flex flex-col items-center gap-2 border-border-default px-2 text-center lg:border-r lg:px-4">
                    <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                        ENCRYPTED & USELESS
                    </span>
                    <span className="text-[10px] leading-relaxed font-medium text-text-subdued">
                        Fragments are encrypted and contain no readable
                        information.
                    </span>
                </div>
                <div className="flex flex-col items-center gap-2 border-r border-border-default px-2 text-center lg:px-4">
                    <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                        NO RECONSTRUCTION
                    </span>
                    <span className="text-[10px] leading-relaxed font-medium text-text-subdued">
                        A file can only be rebuilt with all fragments and your
                        key.
                    </span>
                </div>
                <div className="flex flex-col items-center gap-2 px-2 text-center lg:px-4">
                    <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                        PHYSICALLY IMPOSSIBLE
                    </span>
                    <span className="text-[10px] leading-relaxed font-medium text-text-subdued">
                        Stealing nodes, disks or backups gives nothing. Without
                        the whole set, your data is inaccessible.
                    </span>
                </div>
            </div>
        </div>
    );

    const bottomAlertBox = (
        <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-xl border border-blue-100 bg-primary-50/50 dark:bg-primary-50/10 p-5 sm:p-6 md:flex-row lg:mt-8">
            <div className="flex flex-1 flex-col gap-2 lg:pr-4">
                <span className="text-[13px] font-bold text-blue-700 sm:text-[14px]">
                    Security by design. Absolute by nature.
                </span>
                <span className="text-[11px] leading-relaxed font-medium text-text-default sm:text-[12px]">
                    OXOVOLT's architecture makes it physically and
                    mathematically impossible to steal, read or misuse your
                    data.
                    <br className="hidden lg:block" />
                    Your files remain yours — and yours only.
                </span>
            </div>
            <div className="mt-2 flex w-[140px] shrink-0 flex-col justify-center gap-1.5 self-start border-l border-slate-300 pl-4 text-[11px] sm:pl-6 sm:text-[12px] md:mt-0 md:self-auto">
                <span className="font-medium text-text-default">Not stored.</span>
                <span className="font-medium text-blue-700">
                    Not available.
                </span>
                <span className="font-medium text-text-default">
                    Not accessible.
                </span>
                <span className="mt-0.5 font-bold text-blue-700">
                    Impossible.
                </span>
            </div>
        </div>
    );

    const bottomBorderedBox = (
        <div className="mt-4 mb-6 flex flex-col gap-6 rounded-xl border-[1.5px] border-primary bg-background p-6 lg:mt-6 lg:mb-0 lg:p-8">
            <span className="w-full text-center text-[10px] font-bold tracking-widest text-blue-700 uppercase sm:text-xs">
                YOUR DATA. YOUR RULES. YOUR LOCATIONS.
            </span>

            <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-6 text-center md:grid-cols-4">
                <div className="flex flex-col items-center border-r border-border-default px-2">
                    <span className="mb-2 text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                        YOUR DATA
                    </span>
                    <span className="text-[10px] font-medium text-text-subdued">
                        You choose where your data is stored. You stay in
                        control.
                    </span>
                </div>
                <div className="flex flex-col items-center border-border-default px-2 md:border-r">
                    <span className="mb-2 text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                        YOUR RULES
                    </span>
                    <span className="text-[10px] font-medium text-text-subdued">
                        You decide who can access it, under what conditions.
                    </span>
                </div>
                <div className="flex flex-col items-center border-r border-border-default px-2">
                    <span className="mb-2 text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                        YOUR LOCATIONS
                    </span>
                    <span className="text-[10px] font-medium text-text-subdued">
                        You choose the nodes and trusted community where your
                        data lives.
                    </span>
                </div>
                <div className="flex flex-col items-center px-2">
                    <span className="mb-2 text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                        YOU STAY IN CONTROL
                    </span>
                    <span className="text-[10px] font-medium text-text-subdued">
                        You are the only one with the keys to reassemble your
                        files.
                    </span>
                </div>
            </div>
        </div>
    );

    const desktopLayout = (
        <div className="flex w-full flex-col gap-8 px-6 py-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:p-12 lg:pb-16">
            <div className="flex flex-col lg:col-span-4">
                {headerTitle}
                {descriptionText}
                {featuresList}
            </div>
            <div className="flex flex-col lg:col-span-8">
                {topHighlightBox}
                {diagramAndStats}
                {bottomAlertBox}
            </div>
        </div>
    );

    const mobilePage1 = (
        <div className="flex w-full flex-col px-6 py-6 pb-2">
            {headerTitle}
            <div className="mt-8">{topHighlightBox}</div>
            <div className="mt-2">{descriptionText}</div>
            {diagramAndStats}
        </div>
    );

    const mobilePage2 = (
        <div className="flex w-full flex-col gap-2 px-6 py-6">
            {headerTitle}
            {featuresList}
            {bottomAlertBox}
            {bottomBorderedBox}
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
                                : 'max-h-[90vh] lg:rounded-2xl lg:p-6 lg:pr-2',
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
                                            <ChevronLeft
                                                size={14}
                                                strokeWidth={3}
                                            />
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
                                            <ChevronRight
                                                size={14}
                                                strokeWidth={3}
                                            />
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
                                <AnimatePresence
                                    initial={false}
                                    custom={direction}
                                >
                                    <motion.div
                                        key={page}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: {
                                                type: 'spring',
                                                stiffness: 300,
                                                damping: 30,
                                            },
                                            opacity: { duration: 0.2 },
                                        }}
                                        drag={ENABLE_FINGER ? 'x' : false}
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={1}
                                        onDragEnd={(
                                            _,
                                            { offset, velocity },
                                        ) => {
                                            const swipe = swipePower(
                                                offset.x,
                                                velocity.x,
                                            );
                                            if (
                                                swipe <
                                                -swipeConfidenceThreshold
                                            ) {
                                                paginate(1);
                                            } else if (
                                                swipe > swipeConfidenceThreshold
                                            ) {
                                                paginate(-1);
                                            }
                                        }}
                                        className="absolute inset-0 flex w-full touch-pan-y flex-col overflow-x-hidden overflow-y-auto"
                                    >
                                        <div className="flex min-h-full flex-col pb-6">
                                            {page === 0
                                                ? mobilePage1
                                                : mobilePage2}
                                            {/* Render footer inside body for mobile so it scrolls, but only on last page */}
                                            {page === 1 && footerContent}
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
