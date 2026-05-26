import { SectionSubTitle, SectionTitle } from '@/components/ui';
import { ResponsiveContainer } from '@/components/layout';
import { cn } from '@/lib';

type SplitStat = { type: 'split'; title: string; left: { value: string; label: string }; right: { value: string; label: string } };
type FullStat = { type: 'full'; title: string; value: string; description: string };
type Stat = SplitStat | FullStat;

export function MadeInBelgium() {
    const stats: Stat[] = [
        {
            title: 'LOOPXCELL PACK (EXCL. CELLS)',
            type: 'split',
            left: { value: '30%', label: '30% Asia' },
            right: { value: '70%', label: '70% Europe' },
        },
        {
            title: 'CELLS',
            type: 'full',
            value: '100%',
            description:
                '100% Asia — but not for long.\nPartnerships with European cell manufacturers\nare already in place for the 2028–2030 horizon.',
        },
        {
            title: 'VALUE THAT STAYS IN EUROPE',
            type: 'full',
            value: '>70%',
            description:
                'Today, more than 70% of our selling price\nremains in Europe.\nA strong performance already —\nand we continue to do even better tomorrow.',
        },
    ];

    const features = [
        {
            title: 'TRUST',
            description:
                'Transparency builds trust.\nWe share our supply chain,\nour choices and our roadmap.',
        },
        {
            title: 'TRACEABILITY',
            description:
                'We are developing a dedicated tool\nthat gives full visibility from design\nto delivery. Nothing hidden,\neverything tracked.',
        },
        {
            title: 'DESIGN MADE IN BELGIUM',
            description:
                'LoopXCELL and the entire system\narchitecture are designed in Belgium.\nInnovation with purpose.',
        },
        {
            title: 'INVERTERS DESIGNED IN THE NETHERLANDS',
            description:
                'Our inverters are designed in the Netherlands.\nThe immersion cooling version\nis redesigned in Belgium.\nExcellence through collaboration.',
        },
    ];

    return (
        <ResponsiveContainer fillScreen anchor="made-in-belgium">
            <div className="size-full">
                {/* Top Section */}
                <div className="flex w-full flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
                    {/* Left Column */}
                    <div className="flex w-full flex-col items-start lg:w-1/2">
                        <SectionSubTitle>MADE IN BELGIUM</SectionSubTitle>

                        <SectionTitle
                            mainText={'Designed in Belgium.\nEngineered in Europe.'}
                            highlightText="Built for long-term impact."
                        />

                        <div className="mt-8 flex flex-col gap-4">
                            <p className="text-text-default text-[15px] leading-relaxed font-medium">
                                Our prototypes were even more Belgian than our
                                final products.
                                <br />
                                But this is a necessary step back to take a
                                bigger leap forward.
                            </p>
                            <p className="text-text-default text-[15px] leading-relaxed font-medium">
                                We are in a phase of strategic acceleration.
                                <br />
                                Some components are produced in Asia,
                                <br />
                                while key systems are designed, developed and
                                assembled in Europe.
                            </p>
                            <p className="text-text-default text-[15px] leading-relaxed font-medium">
                                We believe in transparency, traceability and
                                continuous progress.
                                <br />
                                We put all the cards on the table.
                            </p>
                        </div>

                        <div className="bg-primary mt-8 h-0.5 w-8" />
                    </div>

                    {/* Right Column — stat blocks */}
                    <div className="flex w-full flex-col gap-8 lg:w-5/12 lg:pt-16">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="border-primary flex flex-col gap-3 border-l-2 pl-6"
                            >
                                <span className="text-text-default text-[11px] font-bold tracking-[0.1em] uppercase">
                                    {stat.title}
                                </span>

                                {stat.type === 'split' ? (
                                    <>
                                        <div className="flex h-10 overflow-hidden rounded-sm">
                                            <div className="flex w-[30%] items-center justify-center bg-blue-100 text-[13px] font-bold text-gray-600">
                                                {stat.left.value}
                                            </div>
                                            <div className="bg-primary flex w-[70%] items-center justify-center text-[13px] font-bold text-white">
                                                {stat.right.value}
                                            </div>
                                        </div>
                                        <div className="flex justify-between text-[12px] font-medium text-gray-500">
                                            <span>{stat.left.label}</span>
                                            <span>{stat.right.label}</span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex h-10 items-center justify-center overflow-hidden rounded-sm bg-blue-100">
                                            <span className="text-text-default text-[13px] font-bold">
                                                {stat.value}
                                            </span>
                                        </div>
                                        <p className="text-text-default text-[13px] leading-relaxed font-medium whitespace-pre-line">
                                            {stat.description}
                                        </p>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Features Grid */}
                <div className="relative mt-20 grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0 lg:mt-32">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                'group flex cursor-pointer flex-col items-start transition-colors md:px-10 lg:px-12',
                                'border-blue-200/50 first:pl-0 last:pr-0',
                                idx !== 3 && 'md:border-r',
                            )}
                        >
                            <div className="border-primary mb-6 w-6 border-t-2" />
                            <p className="group-hover:text-primary text-text-default mb-4 text-[13px] font-bold tracking-[0.15em] uppercase transition-colors">
                                {feature.title}
                            </p>
                            <p className="text-text-subdued mb-8 grow text-[14px] leading-relaxed font-medium whitespace-pre-line">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </ResponsiveContainer>
    );
}
