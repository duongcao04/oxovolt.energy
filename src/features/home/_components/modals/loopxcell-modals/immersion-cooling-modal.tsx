import BatteryImg from '@/assets/images/image01.png';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { cn } from '@/lib';

export function ImmersionCoolingModal({
    isOpen,
    onOpenChange,
}: {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    const { isSmallView } = useDevice();

    const features = [
        {
            title: 'Eliminates thermal runaway, eliminates fire risk',
            desc: 'Immersion cooling maintains every component at a stable, uniform temperature.',
        },
        {
            title: 'Built for any environment',
            desc: 'Operates reliably in extreme conditions: dust, snow, rain, high humidity, and extreme temperatures from -80°C to +80°C.',
        },
        {
            title: 'Silent. Zero vibration.',
            desc: 'The fluid eliminates mechanical noise and vibrations for a completely silent system.',
        },
        {
            title: 'Full electrical isolation',
            desc: 'All components are fully insulated, increasing safety and system reliability.',
        },
        {
            title: 'Unlocks overclocking',
            desc: 'Superior thermal control keeps components far below critical limits, allowing inverters to run at higher power for longer. With smaller inverters, you achieve the performance of larger units.',
        },
        {
            title: 'Dielectric. Biodegradable. Non-toxic.',
            desc: 'Our dielectric fluid is intrinsically biodegradable, non-polluting and non-toxic. Safe for people, equipment and the environment.',
        },
        {
            title: 'Stops oxidation at the source',
            desc: 'The fluid protects cells, electronics and all connections from moisture and oxygen — eliminating corrosion and oxidation.',
        },
        {
            title: 'Maximum compaction, maximum energy density',
            desc: 'Everything is compact, protected and optimized. More energy in less space, with unmatched reliability.',
        },
        {
            title: 'OXOFLEX lifetime performance',
            desc: 'Coupled with the OXOFLEX program, the battery ecosystem maintains stable long-term performance — designed to operate like day one, year after year. Extreme reliability. Extreme investment protection.',
        },
    ];

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container size={isSmallView ? 'full' : 'cover'}>
                    <Modal.Dialog
                        className={cn(
                            'dark:bg-background mx-auto w-full bg-white p-0 shadow-2xl',
                            isSmallView
                                ? 'flex h-[100dvh] flex-col overflow-x-hidden overflow-y-auto rounded-none'
                                : 'max-h-[95vh] lg:rounded-[32px] lg:p-0',
                        )}
                    >
                        <Modal.CloseTrigger className="text-text-subdued top-4 right-4 z-50 rounded-lg bg-slate-100 p-2 shadow-sm transition-colors hover:bg-slate-200 sm:top-6 sm:right-6 lg:top-4 lg:right-7 dark:bg-slate-800 dark:hover:bg-slate-700" />

                        <Modal.Body className="p-6 pt-12 pb-0 sm:p-10 lg:p-12 lg:pb-0 lg:pt-16">
                            <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-10">
                                {/* Left Column (4 cols) */}
                                <div className="flex flex-col gap-6 pb-8 lg:col-span-4 lg:pb-12">
                                    <div className="flex flex-col gap-4">
                                        <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                                            OXOVOLT
                                        </span>
                                        <h2 className="text-text-default text-[32px] leading-[1.1] font-extrabold sm:text-4xl lg:text-[40px]">
                                            Immersion cooling.
                                            <br />
                                            <span className="text-primary">
                                                Maximum performance.
                                            </span>
                                            <br />
                                            <span className="text-primary">
                                                Ultimate protection.
                                            </span>
                                        </h2>
                                        <div className="mt-2 flex flex-col gap-4">
                                            <p className="text-text-default text-sm leading-relaxed font-medium">
                                                OXOVOLT immersion cooling
                                                technology redefines energy
                                                systems.
                                            </p>
                                            <p className="text-text-subdued text-sm leading-relaxed font-medium">
                                                Batteries, electronics,
                                                inverters and solar MPPT
                                                chargers — all protected, all
                                                optimized, all in a sealed,
                                                intelligent thermal environment.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Light Blue Box */}
                                    <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-slate-100 bg-[#f8fafe] p-6 dark:border-slate-800 dark:bg-slate-900/50">
                                        <h3 className="text-primary text-lg leading-snug font-bold">
                                            Engineered for extreme conditions.
                                            Built for lifetime performance.
                                        </h3>
                                        <p className="text-text-subdued text-[13px] leading-relaxed font-medium">
                                            Our immersion-cooled architecture
                                            eliminates the weak points of
                                            traditional systems. Higher
                                            efficiency, higher power, and
                                            unmatched reliability.
                                        </p>
                                    </div>

                                    {/* Overclocking Box */}
                                    <div className="mt-2 flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
                                        <span className="text-primary text-[10px] font-bold tracking-widest uppercase">
                                            HOW OVERCLOCKING WORKS
                                        </span>
                                        <div className="flex flex-col gap-6 sm:flex-row">
                                            <p className="text-text-subdued flex-1 text-[11px] leading-relaxed font-medium">
                                                Thanks to ultra-stable
                                                temperatures, components operate
                                                far below their thermal limits.
                                                This allows safe performance
                                                beyond standard ratings,
                                                delivering more power from
                                                smaller inverters and chargers —
                                                with higher efficiency and
                                                longer lifespan.
                                            </p>

                                            {/* Graph Area */}
                                            <div className="text-text-subdued relative flex h-24 flex-1 flex-col border-b-2 border-l-2 border-slate-300 pb-2 pl-2 text-[8px] font-bold">
                                                <span className="absolute -top-3 left-0">
                                                    Performance
                                                </span>
                                                <span className="absolute right-0 -bottom-4">
                                                    Time
                                                </span>

                                                <div className="relative mt-2 h-full w-full">
                                                    {/* Immersion cooling line (straight) */}
                                                    <div className="border-primary absolute top-4 left-0 z-10 w-full border-t-[1.5px]"></div>
                                                    <span className="text-primary absolute top-1 right-0">
                                                        Immersion cooling
                                                    </span>

                                                    {/* Air cooling line (dropping dashed) */}
                                                    <svg
                                                        className="absolute top-4 left-0 h-[calc(100%-16px)] w-full"
                                                        preserveAspectRatio="none"
                                                    >
                                                        <path
                                                            d="M0,0 Q 20,20 100,50"
                                                            stroke="#94a3b8"
                                                            strokeWidth="1.5"
                                                            strokeDasharray="4 4"
                                                            fill="none"
                                                            vectorEffect="non-scaling-stroke"
                                                        />
                                                    </svg>
                                                    <span className="absolute right-0 bottom-2 text-slate-400">
                                                        Air cooling
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column (8 cols) */}
                                <div className="flex flex-col border-t border-slate-100 pt-8 pb-12 lg:col-span-8 lg:border-t-0 lg:pt-0 lg:pb-12">
                                    <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 sm:h-64 lg:h-80 dark:border-slate-700 dark:bg-slate-800">
                                        {/* Placeholder for the large server/immersion image */}
                                        <img
                                            src={BatteryImg}
                                            alt="Immersion Cooling"
                                            className="size-full object-cover drop-shadow-xl"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
                                    </div>

                                    {/* 3x3 Feature Grid */}
                                    <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                                        {features.map((feature, i) => (
                                            <div
                                                key={i}
                                                className="hover:border-primary relative flex flex-col gap-2 border-l-[3px] border-blue-100 pl-4 transition-colors dark:border-blue-900/50"
                                            >
                                                <h4 className="text-text-default text-[13px] leading-snug font-bold">
                                                    {feature.title}
                                                </h4>
                                                <p className="text-text-subdued text-[11px] leading-relaxed font-medium">
                                                    {feature.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Row Footer */}
                            <div className="w-full border-t border-slate-100 bg-[#f8fafe] p-6 sm:p-10 lg:px-12 lg:py-8 dark:border-slate-800 dark:bg-slate-900">
                                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
                                    <div className="flex">
                                        <h3 className="text-primary text-2xl leading-tight font-extrabold sm:text-[28px]">
                                            Your system.
                                            <br />
                                            Year after year.
                                        </h3>
                                    </div>

                                    <div className="flex border-l-2 border-slate-200 pl-6 dark:border-slate-700">
                                        <p className="text-text-subdued text-[11px] leading-relaxed font-bold">
                                            OXOFLEX continuously optimizes
                                            thermal equilibrium, balancing and
                                            operational stress to preserve
                                            long-term performance and
                                            infrastructure value.
                                        </p>
                                    </div>

                                    <div className="flex border-l-2 border-slate-200 pl-6 dark:border-slate-700">
                                        <ul className="text-text-subdued flex flex-col gap-1 text-[11px] font-bold">
                                            <li>Predictive balancing.</li>
                                            <li>Thermal stabilization.</li>
                                            <li>Reduced cell stress.</li>
                                            <li>
                                                Extended component lifespan.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="border-primary flex border-l-[3px] pl-6">
                                        <div className="text-primary flex flex-col gap-1 text-[15px] font-extrabold">
                                            <span>Built to last.</span>
                                            <span>Built to perform.</span>
                                            <span>
                                                Built to protect your
                                                investment.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
