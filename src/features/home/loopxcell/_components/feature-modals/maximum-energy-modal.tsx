import { ArrowRight } from 'lucide-react';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { cn } from '@/lib';

import BatteryImg from '@/assets/feature/image-01.1.png';

type MaximumEnergyModalProps = {
    isOpen: boolean;
    onOpenChange: (state: boolean) => void;
};

const features = [
    {
        title: 'HIGH ENERGY DENSITY',
        desc: 'Advanced cell technology and smart packaging deliver more usable energy in a smaller, lighter system.',
    },
    {
        title: 'COMPACT DESIGN',
        desc: 'Wall-mounted, space-saving form factor.\nPerfect for offices, technical rooms and constrained environments.',
    },
    {
        title: 'MAXIMUM PERFORMANCE',
        desc: 'Optimized power output and efficiency for demanding professional applications.\nMore autonomy, always ready.',
    },
    {
        title: 'BUILT FOR PROFESSIONALS',
        desc: 'Robust, reliable and engineered for continuous operation.\nMaximum power, minimal footprint.',
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

export const MaximumEnergyModal = ({
    isOpen,
    onOpenChange,
}: MaximumEnergyModalProps) => {
    const { isSmallView } = useDevice();

    const footerContent = (
        <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-4 pt-4 text-[10px] font-bold sm:text-xs md:gap-x-8 lg:pt-0">
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
                        <div className="hidden h-3.5 w-[1px] bg-slate-200 md:block"></div>
                    )}
                </div>
            ))}
        </div>
    );

    const actionButton = (
        <button className="group border-primary text-primary mt-4 flex w-full items-center justify-center gap-3 rounded-lg border-[1.5px] px-5 py-3 text-[11px] font-bold tracking-widest uppercase transition-colors hover:bg-blue-50 sm:text-xs lg:mt-8 lg:w-fit">
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
                            'border-border-default bg-background overflow-hidden border p-0 shadow-2xl lg:p-8 lg:pr-2',
                            isSmallView ? 'rounded-none' : 'rounded-[32px]',
                        )}
                    >
                        <Modal.CloseTrigger className="border-border-default bg-background text-text-subdued hover:bg-background-hovered top-4 right-4 z-50 rounded border p-1 shadow-sm transition-colors sm:top-6 sm:right-6 lg:top-6 lg:right-8" />

                        <Modal.Body className="mt-0 overflow-x-hidden overflow-y-auto bg-transparent p-6 whitespace-pre-line sm:p-8 lg:p-10">
                            <div className="flex w-full flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-16">
                                {/* Left Column */}
                                <div className="flex flex-col justify-start">
                                    <h3 className="text-primary mb-4 text-xs font-bold tracking-[0.15em] uppercase">
                                        OXOVOLT
                                    </h3>
                                    <h2 className="text-text-default mb-6 text-4xl leading-[1.1] font-bold sm:text-5xl lg:mb-8 lg:text-[52px]">
                                        <span className="block">
                                            Maximum energy.
                                        </span>
                                        <span className="text-primary block">
                                            More power
                                            <br className="hidden lg:block" />
                                            in less space.
                                        </span>
                                    </h2>
                                    <p className="text-text-default mb-6 max-w-sm text-[15px] leading-relaxed font-bold lg:mb-8 lg:text-lg">
                                        Engineered for high performance and
                                        efficiency.
                                    </p>
                                    <div className="bg-primary mb-6 h-[2px] w-12 lg:mb-8" />
                                    <div className="text-text-subdued flex flex-col gap-4 text-[13px] leading-relaxed font-medium sm:text-[14px]">
                                        <p>
                                            OXOVOLT systems deliver exceptional
                                            energy capacity in a compact
                                            footprint.
                                        </p>
                                        <p>
                                            Ideal for professional environments
                                            where space, performance and
                                            reliability matter.
                                        </p>
                                    </div>
                                    {!isSmallView && actionButton}
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col justify-center lg:mr-4">
                                    <div className="border-border-default mb-8 w-full overflow-hidden rounded-xl border bg-slate-50">
                                        {/* Placeholder for the wall-mounted battery image */}
                                        <img
                                            src={BatteryImg}
                                            alt="Maximum Energy"
                                            className="h-auto w-full object-cover lg:h-[450px]"
                                        />
                                    </div>

                                    <div className="divide-border-default flex flex-col divide-y">
                                        {features.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="py-5 first:pt-0 last:pb-0 lg:py-6"
                                            >
                                                <div className="border-primary flex items-start gap-4 border-l-2 pl-6">
                                                    <div className="flex flex-col gap-2">
                                                        <h4 className="text-text-default text-[11px] font-bold tracking-widest uppercase sm:text-xs">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-text-subdued max-w-md text-xs leading-relaxed font-medium sm:text-[13px]">
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
                                <div className="border-border-default mt-12 w-full border-t pt-6">
                                    {footerContent}
                                </div>
                            )}
                        </Modal.Body>

                        {/* Render footer outside body for desktop so it's fixed */}
                        {!isSmallView && (
                            <Modal.Footer className="border-border-default mt-0 shrink-0 border-t bg-transparent px-10 pt-6 pb-6">
                                {footerContent}
                            </Modal.Footer>
                        )}
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};
