import { useDevice } from '@/hooks';
import { cn } from '@/lib';
import { Modal } from '@heroui/react';
import { Clock } from 'lucide-react';
import { Button } from '../../../../../components/ui';

const steps = [
    {
        num: '01',
        title: 'You tell us your goals',
        desc: 'We listen and understand your needs.',
    },
    {
        num: '02',
        title: 'Quick call scheduled',
        desc: '7/7 between 6:00 AM and 11:00 PM, when you are relaxed and without stress, with a field technician.',
    },
    {
        num: '03',
        title: 'Technico specialist is free',
        desc: 'On-site analysis by a hardware, energy, data & connectivity specialist.',
    },
    {
        num: '04',
        title: 'Free cotation & options',
        desc: 'Clear recommendations and options tailored to your goals.',
    },
    {
        num: '05',
        title: 'Our technicians install',
        desc: 'We intervene outside business hours and on weekends, for total peace of mind.',
    },
    {
        num: '06',
        title: 'Lifetime support with Oxoflex',
        desc: "We manage whenever it's necessary. Full coverage of your system.",
    },
];

export function SimpleProcessModal({
    isOpen,
    onOpenChange,
    onGetStartedNowClick,
}: {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onGetStartedNowClick: () => void;
}) {
    const { isSmallView } = useDevice();

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container size={isSmallView ? 'full' : 'cover'}>
                    <Modal.Dialog
                        className={cn(
                            'dark:bg-background mx-auto w-full bg-white p-0 shadow-2xl',
                            isSmallView
                                ? 'flex h-[100dvh] flex-col overflow-x-hidden overflow-y-auto rounded-none'
                                : 'max-h-[95vh] max-w-6xl lg:rounded-[32px] lg:p-0',
                        )}
                    >
                        <Modal.CloseTrigger className="text-text-subdued top-4 right-4 z-50 rounded-lg bg-slate-100 p-2 shadow-sm transition-colors hover:bg-slate-200 sm:top-6 sm:right-6 lg:top-8 lg:right-8 dark:bg-slate-800 dark:hover:bg-slate-700" />

                        <Modal.Body className="p-6 pt-12 sm:p-10 lg:p-16">
                            {/* Header Section */}
                            <div className="flex max-w-4xl flex-col gap-4">
                                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                                    OXOVOLT PROCESS
                                </span>
                                <h2 className="text-text-default text-4xl leading-tight font-extrabold sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
                                    A simple process.
                                    <br />
                                    <span className="text-primary">
                                        Total peace
                                    </span>{' '}
                                    of mind.
                                </h2>
                                <p className="text-text-subdued mt-2 text-sm font-medium lg:text-base">
                                    We handle the technical part. You stay
                                    focused on your practice.
                                </p>
                            </div>

                            {/* Desktop Horizontal Timeline */}
                            <div className="relative mt-20 hidden w-full items-start px-4 lg:flex">
                                {/* Connecting Line */}
                                <div className="absolute top-[22px] right-[5%] left-[5%] -z-10 h-0.5 bg-blue-100 dark:bg-blue-900/50"></div>
                                <div className="bg-primary absolute top-[22px] right-[5%] left-[5%] -z-10 h-0.5 w-[90%]"></div>

                                {steps.map((step, i) => (
                                    <div
                                        key={i}
                                        className="relative flex flex-1 flex-col items-center px-2 text-center"
                                    >
                                        <div className="bg-primary flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white shadow-[0_0_0_6px_rgba(255,255,255,1)] dark:shadow-[0_0_0_6px_rgba(15,23,42,1)]">
                                            {step.num}
                                        </div>
                                        <h3 className="text-text-default mt-8 text-[15px] leading-snug font-bold">
                                            {step.title}
                                        </h3>
                                        <p className="text-text-subdued mt-4 max-w-[140px] text-xs leading-relaxed font-medium">
                                            {step.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Mobile/Tablet Vertical Timeline */}
                            <div className="mt-12 flex w-full flex-col pr-2 pl-4 lg:hidden">
                                {steps.map((step, i) => (
                                    <div
                                        key={i}
                                        className="relative flex pb-10 last:pb-0"
                                    >
                                        {/* Vertical connecting line */}
                                        {i !== steps.length - 1 && (
                                            <div className="absolute top-10 left-[22px] -z-10 h-full w-0.5 bg-blue-100 dark:bg-blue-900/50"></div>
                                        )}
                                        {i !== steps.length - 1 && (
                                            <div className="bg-primary absolute top-10 left-[22px] -z-10 h-full w-0.5"></div>
                                        )}

                                        <div className="bg-primary z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-[0_0_0_6px_rgba(255,255,255,1)] dark:shadow-[0_0_0_6px_rgba(15,23,42,1)]">
                                            {step.num}
                                        </div>

                                        <div className="ml-6 flex flex-col pt-1">
                                            <h3 className="text-text-default text-[15px] font-bold">
                                                {step.title}
                                            </h3>
                                            <p className="text-text-subdued mt-2 text-xs leading-relaxed font-medium">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Info Box */}
                            <div className="mt-16 flex flex-col items-start gap-6 rounded-xl border border-slate-100 bg-[#f8fafe] p-6 sm:flex-row sm:items-center dark:border-slate-800 dark:bg-slate-900">
                                <div className="text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
                                    <Clock size={24} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-text-default text-[13px] font-bold">
                                        The process from 01 to 06 generally
                                        takes around 4 months.
                                    </span>
                                    <span className="text-text-subdued text-xs font-medium">
                                        It can be faster depending on the
                                        urgency and priority defined, or longer
                                        if you need an extended timeline. No
                                        worries.
                                    </span>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-10 flex justify-center pb-8 lg:pb-0">
                                <Button
                                    onPress={onGetStartedNowClick}
                                    variant="outlinedBox"
                                >
                                    GET STARTED NOW
                                </Button>
                            </div>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
