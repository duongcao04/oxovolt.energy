import { ArrowRight } from 'lucide-react';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { cn } from '@/lib';

import BatteryImg from '@/assets/feature/image-04.1.jpg';

export const BuiltInInvertersModal = ({
    isOpen,
    onOpenChange,
}: {
    isOpen: boolean;
    onOpenChange: (state: boolean) => void;
}) => {
    const { isSmallView } = useDevice();

    const features = [
        {
            title: 'BUILT-IN POWER CONVERSION',
            desc: 'Integrated inverter infrastructure directly inside the system.',
        },
        {
            title: 'MULTIPLE CONFIGURATIONS',
            desc: '1, 2 or 3 MultiPlus-II units depending on project scale.',
        },
        {
            title: 'INTEGRATED SOLAR CHARGING',
            desc: 'Optional RS450 MPPT solar charging with multiple tracker configurations.',
        },
        {
            title: 'REDUCED INSTALLATION COMPLEXITY',
            desc: 'Less external hardware. Cleaner wiring. Faster deployment.',
        },
        {
            title: 'SMART ENERGY ORCHESTRATION',
            desc: 'Battery, solar and power conversion managed as one ecosystem.',
        },
        {
            title: 'READY FOR OFF-GRID & HYBRID',
            desc: 'Designed for on-grid, hybrid and autonomous infrastructures.',
        },
    ];

    const actionButton = (
        <button className="group flex w-full items-center justify-center gap-3 rounded-lg border-[1.5px] border-primary px-5 py-3 text-[11px] font-bold tracking-widest text-primary uppercase transition-colors hover:bg-blue-50 sm:text-xs lg:w-fit lg:justify-start">
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
                            <div className="flex w-full flex-col gap-10 lg:grid lg:grid-cols-[1fr_minmax(0,1.2fr)_1fr] lg:gap-12 xl:gap-16">
                                {/* Left Column */}
                                <div className="flex flex-col justify-start">
                                    <h3 className="mb-4 text-xs font-bold tracking-[0.15em] text-primary uppercase">
                                        OXOVOLT
                                    </h3>
                                    <h2 className="mb-6 text-4xl leading-[1.1] font-bold text-text-default sm:text-5xl lg:mb-8 lg:text-[46px] xl:text-[52px]">
                                        <span className="block">
                                            Built-in inverters.
                                        </span>
                                        <span className="block text-primary">
                                            Integrated solar charging.
                                        </span>
                                    </h2>

                                    <div className="mb-6 flex flex-col gap-6 text-[13px] leading-relaxed font-medium text-text-default sm:text-[14px]">
                                        <p>
                                            OXOVOLT combines battery storage,
                                            inverter systems and solar charging
                                            into a single unified
                                            infrastructure.
                                        </p>
                                        <p className="font-bold text-text-default">
                                            Fewer external devices.
                                            <br />
                                            Cleaner installations.
                                            <br />
                                            Maximum reliability.
                                        </p>
                                    </div>

                                    <div className="mb-6 h-[2px] w-12 bg-primary lg:mb-8" />

                                    {/* Lists section */}
                                    <div className="flex flex-col gap-8">
                                        <div className="flex flex-col gap-3">
                                            <h4 className="text-[11px] font-bold tracking-[0.1em] text-primary uppercase">
                                                SYSTEMS CAN INTEGRATE
                                            </h4>
                                            <ul className="flex flex-col gap-2 pl-1">
                                                {[
                                                    '1× MultiPlus-II 3000 or 5000',
                                                    '2× MultiPlus-II',
                                                    '3× MultiPlus-II for advanced infrastructures',
                                                ].map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-2 text-[13px] font-medium text-text-default sm:text-[14px]"
                                                    >
                                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex flex-col gap-3">
                                            <h4 className="text-[11px] font-bold tracking-[0.1em] text-primary uppercase">
                                                INTEGRATED SOLAR CHARGING
                                            </h4>
                                            <ul className="flex flex-col gap-2 pl-1">
                                                {[
                                                    'RS450/100 MPPT (2 trackers)',
                                                    'RS450/200 MPPT (4 trackers)',
                                                ].map((item, i) => (
                                                    <li
                                                        key={i}
                                                        className="flex items-start gap-2 text-[13px] font-medium text-text-default sm:text-[14px]"
                                                    >
                                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Alert box */}
                                    <div className="mt-8 rounded-xl bg-primary-50/50 dark:bg-primary-50/10 p-4 text-[13px] font-medium text-text-subdued sm:text-[14px]">
                                        Solar charging remains optional for
                                        buildings without photovoltaic
                                        capability.
                                    </div>

                                    {!isSmallView && (
                                        <div className="pt-8">
                                            <p className="mb-6 text-[13px] font-medium text-text-default">
                                                Power conversion. Solar
                                                charging. Battery orchestration.
                                                Unified.
                                            </p>
                                            {actionButton}
                                        </div>
                                    )}
                                </div>

                                {/* Middle Column - Image */}
                                <div className="flex w-full flex-col justify-center">
                                    <div className="w-full overflow-hidden rounded-xl border border-border-default bg-slate-50 shadow-sm">
                                        <img
                                            src={BatteryImg}
                                            alt="Built-in inverters"
                                            className="h-auto max-h-[800px] w-full object-cover lg:h-full lg:max-h-none"
                                        />
                                    </div>
                                </div>

                                {/* Right Column - Features */}
                                <div className="flex flex-col justify-center">
                                    <div className="flex flex-col divide-y divide-border-default">
                                        {features.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="py-5 first:pt-0 last:pb-0 lg:py-6"
                                            >
                                                <div className="border-primary flex items-start gap-4 border-l-2 pl-6">
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
                                        <div className="mt-8 flex w-full">
                                            {actionButton}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};
