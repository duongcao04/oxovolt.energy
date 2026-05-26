import { Button, SectionSubTitle, SectionTitle } from '@/components/ui';
import { ResponsiveContainer } from '@/components/layout';
import { ArrowRightIcon } from 'lucide-react';
import { cn } from '../../../../lib';

export function SovereignInfrastructure() {
    const bottomFeatures = [
        {
            title: 'SOVEREIGN ORCHESTRATOR',
            desc: 'Compute layer + Cerbo GX.\nIntelligence orchestrates the entire system.\nSecure. Local. Sovereign.',
        },
        {
            title: 'SOVEREIGN DATA VAULT',
            desc: 'OXOVOLT battery. Built for durability.\nEncrypted. Resilient. Sovereign by design.\nEngineered in Europe.',
        },
        {
            title: 'RESILIENT CONNECTIVITY',
            desc: 'Multi-layer connectivity.\n4G/5G, classic networks, Entropia radio,\nand Starlink as alternative.',
        },
        {
            title: 'LIVE SYSTEM MONITORING',
            desc: 'Real-time dashboard. Full visibility.\nEnergy, data and connectivity.\nEverything. Everywhere.',
        },
    ];

    return (
        <ResponsiveContainer fillScreen anchor="sovereign-infrastructure">
            <div className="size-full">
                {/* Top Section */}
                <div className="flex w-full max-w-[800px] flex-col items-start">
                    <SectionSubTitle>SOVEREIGN INFRASTRUCTURE</SectionSubTitle>
                    <SectionTitle
                        mainText={'Maximum control.'}
                        highlightText={'Minimal dependency.'}
                        tailText={'Total sovereignty.'}
                    />

                    <p className="text-text-default mt-8 max-w-2xl text-[15px] leading-relaxed font-medium whitespace-pre-line">
                        OXOVOLT deploys a fully sovereign infrastructure{'\n'}
                        where energy, data and connectivity are orchestrated
                        {'\n'}
                        by our sovereign intelligence layer.
                    </p>

                    <p className="text-text-default mt-6 max-w-2xl text-[15px] leading-relaxed font-medium whitespace-pre-line">
                        Zero risk of hacking. Optimal cell management.{'\n'}
                        Greater resilience. Maximum autonomy.
                    </p>

                    {/* Short blue divider line */}
                    <div className="bg-primary my-4 h-0.5 w-10 lg:my-8"></div>

                    <Button variant="outlinedBox">
                        DISCOVER THE ARCHITECTURE
                    </Button>
                </div>

                {/* Bottom Features */}
                <div className="relative mt-20 grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-0 lg:mt-32">
                    {bottomFeatures.map((feature, idx) => (
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
                            <p className="text-text-subdued mb-8 flex-grow text-[14px] leading-relaxed font-medium whitespace-pre-line">
                                {feature.desc}
                            </p>
                            <ArrowRightIcon
                                size={16}
                                className="text-primary mt-auto transition-transform duration-300 group-hover:translate-x-2"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </ResponsiveContainer>
    );
}
