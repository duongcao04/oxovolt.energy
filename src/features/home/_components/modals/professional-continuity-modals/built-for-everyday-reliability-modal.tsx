import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { useState } from 'react';
import { cn } from '@/lib';

const ENABLE_FINGER = true;
const NAV_BUTTONS = true;

const features = [
    {
        title: 'ALWAYS AVAILABLE TO YOU',
        desc: 'Access your data instantly, from any device, anytime, anywhere. Your files are always there when you need them.',
    },
    {
        title: 'DESIGNED FOR CONTINUOUS USE',
        desc: 'Your data is stored across multiple nodes that are always on, always protected, always ready. No single point of failure. No downtime.',
    },
    {
        title: 'BUILT FOR THE LONG TERM',
        desc: 'Our infrastructure is designed for years — even decades — of reliable operation. Automatic replication and self-healing ensure your data remains safe over time.',
    },
    {
        title: 'RESILIENT BY DESIGN',
        desc: 'Redundant nodes, distributed architecture and automatic protection mechanisms guarantee continuity, even in the face of hardware failures or network issues.',
    },
    {
        title: 'LOW MAINTENANCE, HIGH PEACE OF MIND',
        desc: 'No complex setups. No technical skills required. Your data is protected in the background, so you can focus on what matters.',
    },
    {
        title: 'A RELIABLE FOUNDATION FOR YOUR LIFE',
        desc: 'Personal memories, family archives, professional documents — your digital life deserves a system you can trust, every day.',
    },
];

const reliabilityBoxes = [
    {
        title: 'DISTRIBUTED ARCHITECTURE',
        desc: 'Your data is stored across multiple nodes. If one node goes offline, your data remains available.',
    },
    {
        title: 'AUTOMATIC REPLICATION',
        desc: 'Encrypted fragments are replicated across the network to ensure durability and continuity.',
    },
    {
        title: 'SELF-HEALING NETWORK',
        desc: 'The network automatically detects and replaces any unavailable or failing node.',
    },
    {
        title: 'CONTINUOUS ACCESS',
        desc: 'Your files are always accessible, instantly, from any device, anywhere in the world.',
    },
    {
        title: 'BUILT FOR ENDURANCE',
        desc: 'Engineered for 24/7 operation, year after year, with minimal intervention and maximum peace of mind.',
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

export function BuiltForEverydayReliabilityModal({
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
            <div className="bg-primary w-[3px] shrink-0 lg:w-[4px]"></div>
            <div className="flex flex-col gap-1 lg:gap-2">
                {isSmallView && (
                    <span className="lg:text-text-default text-[10px] font-bold tracking-widest text-blue-700 uppercase sm:text-[11px]">
                        OXOVOLT ENERGY
                    </span>
                )}
                <h2
                    className={cn(
                        'text-text-default leading-tight font-bold',
                        isSmallView
                            ? 'mt-1 text-[22px] sm:text-3xl'
                            : 'text-3xl tracking-wide uppercase',
                    )}
                >
                    BUILT FOR EVERYDAY
                    <br className="lg:hidden" /> RELIABILITY
                </h2>
                <h3 className="text-text-default mt-1 text-base leading-snug font-medium sm:text-lg">
                    Designed for long-term peace of mind
                    <br className="lg:hidden" /> and continuous use.
                </h3>
            </div>
        </div>
    );

    const descriptionText = (
        <p className="text-text-default mt-6 text-[11px] leading-relaxed font-medium sm:text-[12px] lg:mt-8">
            OXOVOLT Private Sovereign Cloud is engineered for durability,
            stability and uninterrupted access to your data. It is not just
            secure — it is reliable, resilient and sustainable for everyday life
            and for the long term.
        </p>
    );

    const topHighlightBox = (
        <div className="bg-primary-50/50 dark:bg-primary-50/10 mt-8 flex flex-col justify-between gap-4 rounded-xl p-5 sm:flex-row sm:gap-8 sm:p-6 lg:mt-0">
            <div className="flex flex-1 flex-col gap-3 lg:pr-6">
                <span className="text-[13px] font-bold text-blue-700 sm:text-[15px]">
                    Your data. Your rules. Your locations.
                </span>
                <span className="text-text-subdued text-[11px] leading-relaxed font-medium sm:text-[12px]">
                    Designed for long-term peace of mind and continuous use.
                    Because your data deserves more than just security — it
                    deserves reliability you can count on, every day.
                </span>
            </div>
            <div className="border-border-default flex w-[160px] shrink-0 flex-col justify-center gap-1.5 border-l-[1.5px] pl-4 sm:pl-6 lg:w-[180px]">
                <span className="text-[11px] font-medium text-blue-700 sm:text-[12px]">
                    You stay in control.
                </span>
                <span className="mt-1 text-[11px] font-medium text-blue-700 sm:text-[12px]">
                    Your data remains yours.
                </span>
                <span className="mt-1 text-[11px] leading-snug font-medium text-blue-700 sm:text-[12px]">
                    Today, tomorrow, and for
                    <br />
                    years to come.
                </span>
            </div>
        </div>
    );

    const featuresList = (
        <div className="mt-6 flex w-full flex-col gap-5 lg:mt-10">
            {features.map((f, i) => (
                <div
                    key={i}
                    className="border-border-default flex flex-col gap-1.5 border-b pb-4 last:border-0 last:pb-0"
                >
                    <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase sm:text-xs">
                        {f.title}
                    </span>
                    <span className="text-text-default pr-4 text-[11px] leading-relaxed font-medium sm:text-[12px]">
                        {f.desc}
                    </span>
                </div>
            ))}
        </div>
    );

    const reliabilityGrid = (
        <div className="mt-2 flex flex-col gap-4 lg:mt-10">
            <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase sm:text-[11px]">
                RELIABILITY AT EVERY LEVEL
            </span>
            <div className="flex flex-col gap-3 lg:grid lg:grid-cols-5">
                {reliabilityBoxes.map((box, i) => (
                    <div
                        key={i}
                        className="border-border-default bg-background flex flex-col gap-2 rounded-lg border p-5 lg:items-center lg:p-4 lg:text-center"
                    >
                        <span className="text-[10px] leading-relaxed font-bold tracking-widest text-blue-700 uppercase">
                            {box.title}
                        </span>
                        <span className="text-text-subdued text-[10px] leading-relaxed font-medium sm:text-[11px]">
                            {box.desc}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );

    const gdprBox = (
        <div className="border-border-default bg-primary-50/50 dark:bg-primary-50/10 mt-8 flex flex-col justify-between gap-8 rounded-xl border p-6 lg:mt-10 lg:flex-row lg:gap-12 lg:p-8">
            <div className="flex flex-1 flex-col gap-4">
                <span className="text-[12px] leading-snug font-bold tracking-wide text-emerald-800 uppercase sm:text-[14px]">
                    GDPR CONSIDERATIONS:
                    <br />
                    WHY OUR ARCHITECTURE REDUCES REGULATORY EXPOSURE
                </span>
                <span className="text-text-default text-[11px] leading-relaxed font-medium sm:text-[12px]">
                    OXOVOLT Private Sovereign Cloud is designed to minimize the
                    processing of personal data across the network.
                </span>
                <span className="text-text-default text-[11px] leading-relaxed font-medium sm:text-[12px]">
                    Encrypted and fragmented data stored on OXOVOLT nodes is:
                </span>
                <div className="mt-1 flex flex-col gap-2">
                    <span className="text-text-default text-[11px] font-medium sm:text-[12px]">
                        <span className="font-bold text-emerald-800">
                            Not readable:
                        </span>{' '}
                        Fragments are encrypted and contain no personal
                        information in usable form.
                    </span>
                    <span className="text-text-default text-[11px] font-medium sm:text-[12px]">
                        <span className="font-bold text-emerald-800">
                            Not re-identifiable:
                        </span>{' '}
                        No single node — or even several — can reassemble or
                        identify your data.
                    </span>
                    <span className="text-text-default text-[11px] font-medium sm:text-[12px]">
                        <span className="font-bold text-emerald-800">
                            Under your control:
                        </span>{' '}
                        Only you hold the encryption keys.
                    </span>
                    <span className="text-text-default text-[11px] font-medium sm:text-[12px]">
                        <span className="font-bold text-emerald-800">
                            Minimized by design:
                        </span>{' '}
                        Data is stored in a way that aligns with data
                        minimization principles.
                    </span>
                </div>

                <div className="bg-background mt-4 rounded-lg border-[1.5px] border-emerald-700/60 p-4">
                    <span className="mb-2 block text-[10px] font-bold text-emerald-800 sm:text-[11px]">
                        According to the European Data Protection Board (EDPB):
                    </span>
                    <span className="text-text-default mb-3 block text-[10px] leading-relaxed font-medium italic sm:text-[11px]">
                        "Data that has been effectively encrypted, and to which
                        the controller does not hold the keys, is considered out
                        of scope of the GDPR."
                    </span>
                    <span className="text-text-subdued block pr-4 text-[9px] leading-relaxed font-medium">
                        Source: EDPB Guidelines 05/2021 on the Interplay between
                        the GDPR and the ePrivacy Directive - Section 2.
                        Encryption
                    </span>
                </div>
            </div>

            <div className="flex shrink-0 flex-col gap-6 border-t border-slate-300 pt-6 lg:w-[320px] lg:border-t-0 lg:border-l-[1.5px] lg:pt-0 lg:pl-8">
                <span className="text-[11px] font-bold tracking-widest text-emerald-800 uppercase sm:text-[12px]">
                    OFFICIAL REFERENCES
                </span>

                <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-bold text-emerald-800 sm:text-[12px]">
                        EDPB Guidelines 05/2021
                    </span>
                    <span className="text-text-default text-[11px] font-medium sm:text-[12px]">
                        The Interplay between the GDPR and the ePrivacy
                        Directive
                    </span>
                    <span className="text-text-default mt-2 text-[10px] leading-relaxed font-medium italic sm:text-[11px]">
                        "When the data are encrypted in such a manner that the
                        data subject is no longer identifiable and the
                        controller does not hold the key, the GDPR does not
                        apply."
                    </span>
                </div>

                <div className="mt-2 flex flex-col gap-1">
                    <span className="text-text-default text-[11px] font-bold sm:text-[12px]">
                        Article 4(1) GDPR
                    </span>
                    <span className="text-text-default text-[10px] leading-relaxed font-medium sm:text-[11px]">
                        The GDPR applies only to "personal data", i.e.
                        information relating to an identified or identifiable
                        natural person.
                    </span>
                </div>

                <div className="mt-2 flex flex-col gap-1">
                    <span className="text-text-default text-[11px] font-bold sm:text-[12px]">
                        Recital 26 GDPR
                    </span>
                    <span className="text-text-default text-[10px] leading-relaxed font-medium sm:text-[11px]">
                        Data that are truly anonymous or encrypted in a way that
                        prevents identification are not personal data.
                    </span>
                </div>
            </div>
        </div>
    );

    const bottomAlertBox = (
        <div className="bg-primary-50/50 dark:bg-primary-50/10 mt-6 mb-6 flex flex-col items-center justify-between gap-4 rounded-xl border border-blue-100 p-5 sm:p-6 md:flex-row lg:mt-8 lg:mb-0">
            <div className="flex flex-1 flex-col gap-2 lg:pr-4">
                <span className="text-[13px] font-bold text-blue-700 sm:text-[14px]">
                    Reliability you can feel.
                    <br />
                    Control you can keep. Privacy you can prove.
                </span>
                <span className="text-text-default mt-1 text-[11px] leading-relaxed font-medium sm:text-[12px]">
                    OXOVOLT is not just built to protect your data.
                    <br className="hidden lg:block" />
                    It's built to keep it available, today and for the long run
                    — while reducing regulatory exposure by design.
                </span>
            </div>
            <div className="mt-2 flex w-[180px] shrink-0 flex-col justify-center gap-1.5 self-start border-l border-slate-300 pl-4 text-[11px] sm:pl-6 sm:text-[12px] md:mt-0 md:self-auto">
                <span className="font-medium text-blue-700">
                    Built for today.
                </span>
                <span className="mt-1 font-medium text-blue-700">
                    Ready for tomorrow.
                </span>
                <span className="mt-1 font-medium text-blue-700">
                    Trusted for years.
                </span>
                <span className="mt-1 font-bold text-blue-700">
                    And designed with privacy in mind.
                </span>
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
                {reliabilityGrid}
                {gdprBox}
                {bottomAlertBox}
            </div>
        </div>
    );

    const mobilePage1 = (
        <div className="flex w-full flex-col px-6 py-6 pb-2">
            {headerTitle}
            <div className="mt-8">{topHighlightBox}</div>
            <div className="mt-2">{descriptionText}</div>
            {featuresList}
        </div>
    );

    const mobilePage2 = (
        <div className="flex w-full flex-col gap-2 px-6 py-6">
            <div className="pt-2">{reliabilityGrid}</div>
            {gdprBox}
            {bottomAlertBox}
        </div>
    );

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container size={isSmallView ? 'full' : 'cover'}>
                    <Modal.Dialog
                        className={cn(
                            'bg-background mx-auto w-full p-0 shadow-2xl',
                            isSmallView
                                ? 'flex h-[100dvh] flex-col overflow-hidden rounded-none'
                                : 'max-h-[90vh] lg:rounded-2xl lg:p-6 lg:pr-2',
                        )}
                    >
                        <Modal.CloseTrigger className="border-border-default bg-background text-text-subdued top-4 right-4 z-50 rounded border p-1 shadow-sm transition-colors hover:bg-background-hovered sm:top-6 sm:right-6 lg:top-8 lg:right-8" />

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
                                                    : 'text-primary border border-[#e2e8f0] bg-[#f4f7fe] hover:bg-[#ebf0fe]',
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
                                    <span className="text-text-default pt-[1px] text-[10px] font-bold tracking-widest">
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
                                                    : 'text-primary border border-[#e2e8f0] bg-[#f4f7fe] hover:bg-[#ebf0fe]',
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
                                    ? 'bg-background relative min-h-0 flex-1'
                                    : 'bg-background overflow-x-hidden overflow-y-auto rounded-t-2xl lg:rounded-none',
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
