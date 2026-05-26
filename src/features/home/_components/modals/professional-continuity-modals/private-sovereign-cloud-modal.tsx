import {
    FileText,
    Monitor,
    Smartphone,
    Tablet,
    Home,
    Info,
    Shield,
    Lock,
    Globe,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

const ENABLE_FINGER = true;
const NAV_BUTTONS = true;
import BatteryImg from '@/assets/batteries/v1-oxovolt-battery.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { useState } from 'react';
import { cn } from '@/lib';

const features = [
    {
        title: 'LOCAL COPY: UNFRAGMENTED & ENCRYPTED',
        desc: 'Your files are stored locally on your OXOVOLT node, encrypted but unfragmented. Fully accessible instantly on all your devices, including smartphones, tablets and computers.',
    },
    {
        title: 'COPIES: FRAGMENTED & DISTRIBUTED',
        desc: 'Your data is automatically split into encrypted fragments. These fragments are distributed and stored on multiple OXOVOLT nodes across the community network. No single node can reconstruct your data.',
    },
    {
        title: 'DISKS OFF. ALWAYS SECURE.',
        desc: 'Local and remote node disks are OFF by default. They activate only when needed, transparently and instantly, with no noticeable latency. Disk exposure drops from 99% to less than 1%. A new security paradigm.',
    },
    {
        title: 'YOU CHOOSE THE NODES',
        desc: 'Select your own nodes or choose from trusted members of your ecosystem for ethical and secure storage.',
    },
    {
        title: 'ACCESSIBLE WHERE YOU DECIDE',
        desc: 'Access your data securely from any device, anywhere in the world. You decide who, when, and how. You stay in control.',
    },
];

const stats = [
    {
        title: 'DATA NEVER LOST',
        desc: 'Each fragment is stored on multiple nodes. If a node goes offline, your data remains safe and accessible.',
    },
    {
        title: 'RANSOMWARE PROTECTED',
        desc: (
            <>
                Your data is{' '}
                <span className="font-semibold text-primary">encrypted</span>,
                fragmented and distributed. Ransomware cannot lock what it
                cannot access.
            </>
        ),
    },
    {
        title: 'YOU CHOOSE THE NODES',
        desc: (
            <>
                Select your own nodes or choose from trusted members of your
                ecosystem for{' '}
                <span className="font-semibold text-green-600">ethical</span>{' '}
                and secure storage.
            </>
        ),
    },
    {
        title: 'BUILT FOR RESILIENCE',
        desc: 'A community-powered infrastructure designed for long-term availability, privacy and peace of mind.',
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

export function PrivateSovereignCloudModal({
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
        <div className="flex flex-col gap-4 pt-4 lg:pt-0">
            <span className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-text-default uppercase sm:text-xs">
                <div className="h-4 w-[3px] bg-primary"></div> PRIVATE
                SOVEREIGN CLOUD
            </span>
            <h2 className="text-2xl leading-snug font-medium text-text-default sm:text-3xl">
                Encrypted local-first architecture
                <br className="hidden lg:block" />
                <span className="lg:hidden"> </span>with secure access.
            </h2>
        </div>
    );

    const descriptionText = (
        <p className="mt-6 max-w-lg text-[11px] leading-relaxed font-medium text-text-default sm:text-xs lg:mt-8">
            OXOVOLT Private Sovereign Cloud is a secure, distributed storage
            architecture designed to protect what matters most.
            <br />
            It is not a cloud for running applications.
            <br />
            It is a digital vault — built to store your data safely, and make it
            accessible only by you, from anywhere you choose.
        </p>
    );

    const topHighlightBox = (
        <div className="mt-8 flex flex-col justify-between gap-4 rounded-xl bg-primary-50/50 dark:bg-primary-50/10 p-5 sm:flex-row sm:gap-8 sm:p-6 lg:mt-0">
            <div className="flex flex-1 flex-col gap-2">
                <span className="text-sm font-bold text-blue-700 sm:text-base">
                    Your data. Your rules. Your locations.
                </span>
                <span className="text-[11px] leading-relaxed font-medium text-text-subdued sm:text-[12px]">
                    You choose where your data is stored, who can access it, and
                    which community nodes you trust.
                </span>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2 sm:text-right">
                <span className="text-[11px] leading-relaxed font-medium text-blue-700 sm:text-[12px]">
                    OXOVOLT cannot access or read your data at any time.
                    <br />
                    You always stay in control.
                </span>
            </div>
        </div>
    );

    const leftFeaturesList = (
        <div className="mt-8 flex w-full flex-col gap-6 lg:mt-10">
            {features.map((f, i) => (
                <div
                    key={i}
                    className="flex flex-col gap-2 border-b border-border-default pb-5 last:border-0 last:pb-0"
                >
                    <span className="text-[11px] font-bold tracking-widest text-blue-800 uppercase sm:text-xs">
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
            className="mt-6 w-full overflow-x-auto rounded-xl border border-border-default bg-primary-50/50 dark:bg-primary-50/10 pt-8 pb-8 [&::-webkit-scrollbar]:hidden"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
            <div className="flex w-full min-w-[700px] flex-col px-6">
                {/* 3 Steps */}
                <div className="mb-10 flex w-full justify-between">
                    <div className="flex w-1/3 flex-col gap-2 pr-4">
                        <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                            1. STORE LOCALLY (UNFRAGMENTED)
                        </span>
                        <span className="text-[10px] leading-relaxed font-medium text-text-subdued">
                            Your file is encrypted and stored locally on your
                            OXOVOLT node.
                            <br />
                            Fully accessible, instantly.
                        </span>
                    </div>
                    <div className="flex w-1/3 flex-col gap-2 px-2">
                        <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                            2. DISTRIBUTE COPIES (FRAGMENTED)
                        </span>
                        <span className="text-[10px] leading-relaxed font-medium text-text-subdued">
                            Encrypted fragments are created and distributed to
                            multiple OXOVOLT nodes across the community network.
                        </span>
                    </div>
                    <div className="flex w-1/3 flex-col gap-2 pl-4">
                        <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                            3. SECURE ACCESS ANYWHERE
                        </span>
                        <span className="text-[10px] leading-relaxed font-medium text-text-subdued">
                            You access your data from anywhere. Fragments are
                            reassembled securely on your device.
                        </span>
                    </div>
                </div>

                {/* The visual graph */}
                <div className="relative mt-4 flex w-full items-center justify-between px-4">
                    {/* Left Icon */}
                    <div className="flex shrink-0 flex-col items-center">
                        <FileText
                            size={48}
                            strokeWidth={1}
                            className="mb-2 text-text-subdued"
                        />
                    </div>

                    {/* Dotted Line */}
                    <div className="mx-2 flex h-[2px] w-[60px] shrink-0 justify-center">
                        <div className="w-full border-t-[1.5px] border-dashed border-blue-400"></div>
                    </div>

                    {/* Local Node */}
                    <div className="relative z-10 flex shrink-0 flex-col items-center">
                        <img
                            src={BatteryImg}
                            className="mb-3 h-auto w-20 drop-shadow-md lg:w-28"
                        />
                        <div className="mt-2 flex flex-col items-center text-center">
                            <span className="text-[10px] font-bold tracking-widest text-text-default uppercase">
                                LOCAL OXOVOLT NODE
                            </span>
                            <span className="mt-1 text-[10px] text-text-subdued">
                                Unfragmented.
                                <br />
                                Encrypted.
                                <br />
                                Disks OFF by default.
                            </span>
                        </div>
                    </div>

                    {/* Branching */}
                    <div className="mx-2 flex w-[50px] shrink-0 items-center justify-center">
                        <div className="flex gap-1">
                            <div className="h-2 w-2 bg-blue-700"></div>
                            <div className="h-2 w-2 bg-blue-500"></div>
                            <div className="h-2 w-2 bg-blue-400"></div>
                            <div className="h-2 w-2 bg-blue-300"></div>
                        </div>
                    </div>

                    {/* 5 Nodes Array (Diamond Mesh) */}
                    <div className="relative mx-2 flex h-[260px] w-[280px] shrink-0 items-center justify-center">
                        <svg
                            className="pointer-events-none absolute inset-0 h-full w-full"
                            viewBox="0 0 280 260"
                        >
                            {/* Entry */}
                            <line
                                x1="0"
                                y1="130"
                                x2="60"
                                y2="70"
                                stroke="#60a5fa"
                                strokeWidth="1.5"
                                strokeDasharray="3 3"
                            />
                            <line
                                x1="0"
                                y1="130"
                                x2="60"
                                y2="190"
                                stroke="#60a5fa"
                                strokeWidth="1.5"
                                strokeDasharray="3 3"
                            />

                            {/* Borders */}
                            <line
                                x1="60"
                                y1="70"
                                x2="220"
                                y2="70"
                                stroke="#60a5fa"
                                strokeWidth="1.5"
                                strokeDasharray="3 3"
                            />
                            <line
                                x1="60"
                                y1="70"
                                x2="60"
                                y2="190"
                                stroke="#60a5fa"
                                strokeWidth="1.5"
                                strokeDasharray="3 3"
                            />
                            <line
                                x1="220"
                                y1="70"
                                x2="220"
                                y2="190"
                                stroke="#60a5fa"
                                strokeWidth="1.5"
                                strokeDasharray="3 3"
                            />

                            {/* Diagonals */}
                            <line
                                x1="60"
                                y1="70"
                                x2="220"
                                y2="190"
                                stroke="#60a5fa"
                                strokeWidth="1.5"
                                strokeDasharray="3 3"
                            />
                            <line
                                x1="60"
                                y1="190"
                                x2="220"
                                y2="70"
                                stroke="#60a5fa"
                                strokeWidth="1.5"
                                strokeDasharray="3 3"
                            />

                            {/* V Bottom */}
                            <line
                                x1="60"
                                y1="190"
                                x2="140"
                                y2="230"
                                stroke="#60a5fa"
                                strokeWidth="1.5"
                                strokeDasharray="3 3"
                            />
                            <line
                                x1="140"
                                y1="230"
                                x2="220"
                                y2="190"
                                stroke="#60a5fa"
                                strokeWidth="1.5"
                                strokeDasharray="3 3"
                            />

                            {/* Exit */}
                            <line
                                x1="220"
                                y1="70"
                                x2="280"
                                y2="130"
                                stroke="#60a5fa"
                                strokeWidth="1.5"
                                strokeDasharray="3 3"
                            />
                            <line
                                x1="220"
                                y1="190"
                                x2="280"
                                y2="130"
                                stroke="#60a5fa"
                                strokeWidth="1.5"
                                strokeDasharray="3 3"
                            />
                        </svg>

                        <img
                            src={BatteryImg}
                            className="absolute top-[70px] left-[60px] w-12 -translate-x-1/2 -translate-y-1/2 drop-shadow lg:w-16"
                        />
                        <img
                            src={BatteryImg}
                            className="absolute top-[190px] left-[60px] w-12 -translate-x-1/2 -translate-y-1/2 drop-shadow lg:w-16"
                        />
                        <img
                            src={BatteryImg}
                            className="absolute top-[230px] left-[140px] w-12 -translate-x-1/2 -translate-y-1/2 drop-shadow lg:w-16"
                        />
                        <img
                            src={BatteryImg}
                            className="absolute top-[70px] left-[220px] w-12 -translate-x-1/2 -translate-y-1/2 drop-shadow lg:w-16"
                        />
                        <img
                            src={BatteryImg}
                            className="absolute top-[190px] left-[220px] w-12 -translate-x-1/2 -translate-y-1/2 drop-shadow lg:w-16"
                        />
                    </div>

                    {/* Merge Line */}
                    <div className="mx-2 flex h-[2px] w-[60px] shrink-0 justify-center">
                        <div className="w-full border-t-[1.5px] border-dashed border-blue-400"></div>
                    </div>

                    {/* Right Icons */}
                    <div className="flex shrink-0 flex-col items-center gap-4">
                        <Monitor
                            size={36}
                            strokeWidth={1}
                            className="text-text-subdued"
                        />
                        <div className="flex gap-4">
                            <Smartphone
                                size={28}
                                strokeWidth={1}
                                className="text-text-subdued"
                            />
                            <Tablet
                                size={28}
                                strokeWidth={1}
                                className="text-text-subdued"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const statsSection = (
        <div className="my-4 grid grid-cols-2 gap-x-4 gap-y-6 rounded-xl border border-blue-100 bg-primary-50/50 dark:bg-primary-50/10 py-6 shadow-sm lg:mt-6 lg:grid-cols-4">
            {stats.map((s, i) => (
                <div
                    key={i}
                    className={cn(
                        'flex flex-col items-center gap-2 border-border-default px-4 text-center',
                        'border-l',
                        i === 0 && 'border-l-0',
                        i === 2 && 'border-l-0 lg:border-l',
                    )}
                >
                    <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                        {s.title}
                    </span>
                    <span className="text-[10px] leading-relaxed font-medium text-text-subdued">
                        {s.desc}
                    </span>
                </div>
            ))}
        </div>
    );

    const alertBoxes = (
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-6 lg:gap-6">
            <div className="rounded-xl border border-green-100 bg-green-50/50 dark:bg-green-50/10 p-5 sm:p-6">
                <span className="mb-6 block text-[11px] font-bold tracking-widest text-green-800 uppercase">
                    LOCAL PERFORMANCE,
                    <br />
                    GLOBAL SECURITY
                </span>
                <div className="flex items-start gap-4">
                    <div className="relative flex w-20 shrink-0 justify-center">
                        <Home
                            size={64}
                            strokeWidth={1}
                            className="absolute -top-4 text-green-700/20"
                        />
                        <img
                            src={BatteryImg}
                            className="relative z-10 mt-4 w-12 drop-shadow lg:w-16"
                        />
                    </div>
                    <div className="flex flex-col gap-4 pt-1">
                        <span className="text-[11px] font-medium text-text-default">
                            Work seamlessly on your local, unfragmented,
                            encrypted copy.
                        </span>
                        <span className="text-[11px] font-medium text-text-default">
                            Enjoy fast access for your daily work.
                        </span>
                        <span className="text-[11px] font-medium text-text-default">
                            The network protects your data in the background.
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-between rounded-xl border border-blue-100 bg-primary-50/50 dark:bg-primary-50/10 p-5 sm:p-6">
                <div>
                    <span className="mb-6 block text-[11px] font-bold tracking-widest text-blue-700 uppercase">
                        ONE NODE IS ENOUGH
                    </span>
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex flex-1 flex-col gap-4">
                            <span className="text-[11px] font-medium text-text-default">
                                You only need one OXOVOLT battery node at your
                                location.
                            </span>
                            <span className="text-[11px] font-medium text-text-default">
                                Your data is automatically protected by the
                                network of community nodes you trust.
                            </span>
                        </div>
                        <img
                            src={BatteryImg}
                            className="w-14 shrink-0 drop-shadow-md lg:w-20"
                        />
                    </div>
                </div>
                <div className="mt-6 flex flex-col items-end">
                    <span className="text-sm font-extrabold tracking-widest text-blue-700 uppercase">
                        OXOVOLT
                    </span>
                    <span className="mt-0.5 text-[9px] font-bold tracking-widest text-blue-700 uppercase">
                        BATTERY NODES
                    </span>
                    <span className="mt-1 text-[9px] font-medium text-primary">
                        Powering a secure digital future.
                    </span>
                </div>
            </div>
        </div>
    );

    const bottomCombinedBox = (
        <div className="mt-4 mb-6 flex w-full flex-col gap-6 rounded-xl border border-blue-200 bg-background p-5 lg:mt-6 lg:mb-0 lg:flex-row lg:items-center lg:gap-8 lg:p-6 lg:shadow-sm">
            {/* Left part */}
            <div className="flex flex-1 items-start gap-4 lg:items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Info size={24} />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-bold tracking-widest text-[#1e1b4b] uppercase">
                        NOT A CLOUD FOR APPLICATIONS
                    </span>
                    <span className="text-[11px] leading-relaxed font-medium text-text-subdued">
                        OXOVOLT Private Sovereign Cloud is a secure storage
                        solution.
                        <br className="hidden lg:block" />
                        It is not designed to run or host applications.
                    </span>
                </div>
            </div>

            {/* Divider */}
            <div className="hidden h-16 w-px bg-slate-300 lg:block" />
            <div className="block h-px w-full bg-slate-200 lg:hidden" />

            {/* Middle part */}
            <div className="flex flex-1 flex-col gap-1">
                <span className="text-[11px] font-bold tracking-widest text-[#1e1b4b] uppercase">
                    A SOVEREIGN CLOUD. YOUR WAY.
                </span>
                <span className="text-[11px] leading-relaxed font-medium text-text-subdued">
                    You choose the nodes. You control your data.
                    <br className="hidden lg:block" />
                    You are part of a secure, resilient and responsible
                    ecosystem.
                </span>
            </div>

            {/* Right part (Icons) */}
            <div className="flex flex-[0.8] items-start justify-between gap-2 text-center lg:justify-end lg:gap-8">
                <div className="flex flex-col items-center">
                    <Shield
                        size={28}
                        strokeWidth={1.5}
                        className="mb-2 text-primary"
                    />
                    <span className="text-[9px] font-bold tracking-widest text-primary uppercase">
                        PRIVATE
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <Lock
                        size={28}
                        strokeWidth={1.5}
                        className="mb-2 text-primary"
                    />
                    <span className="text-[9px] font-bold tracking-widest text-primary uppercase">
                        SOVEREIGN
                    </span>
                </div>
                <div className="flex flex-col items-center">
                    <Globe
                        size={28}
                        strokeWidth={1.5}
                        className="mb-2 text-primary"
                    />
                    <span className="text-[9px] font-bold tracking-widest text-primary uppercase">
                        EVERYWHERE
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
            {statsSection}
        </div>
    );

    const mobilePage2 = (
        <div className="flex w-full flex-col gap-2 px-6 py-6">
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
