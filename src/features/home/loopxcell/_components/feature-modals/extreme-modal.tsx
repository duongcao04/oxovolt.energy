import { ArrowRight } from 'lucide-react';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { cn } from '@/lib';

import BatteryImg from '@/assets/feature/image-02.1.png';

export const ExtremeModal = ({
    isOpen,
    onOpenChange,
}: {
    isOpen: boolean;
    onOpenChange: (state: boolean) => void;
}) => {
    const { isSmallView } = useDevice();

    const features = [
        {
            title: 'RUGGED BY DESIGN',
            desc: 'Built to withstand extreme temperatures,\nhumidity, dust and vibrations.',
        },
        {
            title: 'INDUSTRIAL-GRADE COMPONENTS',
            desc: 'Premium materials and components\nselected for maximum durability.',
        },
        {
            title: 'RIGOROUSLY TESTED',
            desc: 'Extensive testing under real-world\nconditions to ensure long-term reliability.',
        },
        {
            title: 'CONTINUOUS OPERATION',
            desc: 'Designed for 24/7 performance\nwithout compromise.',
        },
    ];

    const tabs = [
        'OFFICES',
        'LAW FIRMS',
        'MEDICAL PRACTICES',
        'ACCOUNTANTS',
        'ARCHITECTS',
        'CONSULTANTS',
        'PRIVATE PRACTICES',
    ];

    const footerContent = (
        <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-4 pt-4 text-[10px] font-bold sm:text-xs md:gap-x-8 lg:pt-0">
            {tabs.map((tab, idx) => (
                <div key={tab} className="flex items-center gap-4 md:gap-8">
                    <button
                        className={cn(
                            'tracking-widest text-text-default uppercase transition-colors hover:text-primary',
                        )}
                    >
                        {tab}
                    </button>
                    {idx < tabs.length - 1 && (
                        <div className="hidden h-3.5 w-[1px] bg-slate-200 md:block"></div>
                    )}
                </div>
            ))}
        </div>
    );

    const actionButton = (
        <button className="group mt-4 flex w-full items-center justify-center gap-3 rounded-lg border-[1.5px] border-primary px-5 py-3 text-[11px] font-bold tracking-widest text-primary uppercase transition-colors hover:bg-blue-50 sm:text-xs lg:mt-8 lg:w-fit">
            ECOSYSTEM IN IMAGE
            <ArrowRight
                size={16}
                strokeWidth={2}
                className="transition-transform group-hover:translate-x-1"
            />
        </button>
    );

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container size={isSmallView ? 'full' : 'cover'}>
                    <Modal.Dialog
                        className={cn(
                            'border-border-default overflow-hidden border bg-background p-0 shadow-2xl lg:p-8 lg:pr-2',
                            isSmallView ? 'rounded-none' : 'rounded-[32px]',
                        )}
                    >
                        <Modal.CloseTrigger className="top-4 right-4 z-50 rounded border border-border-default bg-background p-1 text-text-subdued shadow-sm transition-colors hover:bg-background-hovered sm:top-6 sm:right-6 lg:top-6 lg:right-8" />

                        <Modal.Body className="mt-0 overflow-x-hidden overflow-y-auto bg-transparent p-6 whitespace-pre-line sm:p-8 lg:p-10">
                            <div className="flex w-full flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-16">
                                {/* Left Column */}
                                <div className="flex flex-col justify-start">
                                    <h3 className="mb-4 text-xs font-bold tracking-[0.15em] text-primary uppercase">
                                        OXOVOLT
                                    </h3>
                                    <h2 className="mb-6 text-4xl leading-[1.1] font-bold text-text-default sm:text-5xl lg:mb-8 lg:text-[52px]">
                                        <span className="block">
                                            Extreme reliability.
                                        </span>
                                        <span className="block text-primary">
                                            Built for the most
                                            <br className="hidden lg:block" />
                                            demanding conditions.
                                        </span>
                                    </h2>
                                    <p className="mb-6 max-w-sm text-[15px] leading-relaxed font-bold text-text-default lg:mb-8 lg:text-lg">
                                        Industrial-grade components.
                                        <br />
                                        Tested for the most demanding
                                        conditions.
                                    </p>
                                    <div className="mb-6 h-[2px] w-12 bg-primary lg:mb-8" />
                                    <div className="flex flex-col gap-4 text-[13px] leading-relaxed font-medium text-text-subdued sm:text-[14px]">
                                        <p>
                                            OXOVOLT systems are engineered with
                                            premium materials and rigorously
                                            tested to ensure long-term
                                            reliability in the harshest
                                            environments.
                                        </p>
                                        <p>
                                            From extreme temperatures to
                                            continuous operation, we deliver
                                            performance you can count on.
                                        </p>
                                    </div>
                                    {!isSmallView && actionButton}
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col justify-center lg:mr-4">
                                    <div className="mb-8 w-full overflow-hidden rounded-xl border border-border-default bg-slate-50">
                                        {/* Placeholder for the wall-mounted battery image */}
                                        <img
                                            src={BatteryImg}
                                            alt="Extreme Reliability"
                                            className="h-auto w-full object-cover lg:h-[450px]"
                                        />
                                    </div>

                                    {/* 2x2 Grid on desktop, 1x4 list on mobile */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6">
                                        {features.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className={cn(
                                                    'py-5 lg:py-6',
                                                    'border-b border-border-default',
                                                    idx >=
                                                        features.length - 1 &&
                                                        'border-b-0',
                                                    idx >= 2 && 'md:border-b-0',
                                                )}
                                            >
                                                <div className="flex h-full items-start gap-4 border-l-2 border-primary pl-6">
                                                    <div className="flex flex-col gap-2">
                                                        <h4 className="text-[11px] font-bold tracking-widest text-text-default uppercase sm:text-xs">
                                                            {item.title}
                                                        </h4>
                                                        <p className="max-w-md text-xs leading-relaxed font-medium text-text-subdued sm:text-[13px]">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {isSmallView && (
                                        <div className="mt-4 flex w-full justify-start">
                                            {actionButton}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Render footer inside body for mobile so it scrolls */}
                            {isSmallView && (
                                <div className="mt-12 w-full border-t border-border-default pt-6">
                                    {footerContent}
                                </div>
                            )}
                        </Modal.Body>

                        {/* Render footer outside body for desktop so it's fixed */}
                        {!isSmallView && (
                            <Modal.Footer className="mt-0 shrink-0 border-t border-border-default bg-transparent px-10 pt-6 pb-6">
                                {footerContent}
                            </Modal.Footer>
                        )}
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};
