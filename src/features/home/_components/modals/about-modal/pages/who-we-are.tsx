import { PageLayout, PageSection } from './_page-layout';
import BernardAvt from '@/assets/team/Bernard.jpeg';
import RobertAvt from '@/assets/team/Robert.jpeg';
import MaximeAvt from '@/assets/team/Maxime.jpeg';
import BjornAvt from '@/assets/team/Bjorn.jpeg';

export const WhoWeAre = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Who We Are" onBack={onBack}>
            <PageSection subtitle="Mission & Vision" link="about@oxovolt.com">
                <p className="mb-4">
                    Oxovolt develops advanced energy infrastructure designed for
                    continuity and operational resilience.
                </p>
                <p>
                    Our systems are engineered to support evolving industrial
                    and technological environments.
                </p>
            </PageSection>
            <PageSection
                subtitle="Engineering Culture"
                link="about@oxovolt.com"
            >
                <p className="mb-4">
                    Engineering decisions are driven by reliability, modularity
                    and long-term infrastructure thinking.
                </p>
                <p>
                    We focus on scalable systems built for real operational
                    conditions and future adaptability.
                </p>
            </PageSection>
            <PageSection
                subtitle="Industrial Approach"
                link="about@oxovolt.com"
            >
                <p className="mb-4">
                    Oxovolt combines energy systems, intelligent infrastructure
                    and integrated technologies.
                </p>
                <p>
                    Development priorities focus on stability, performance and
                    ecosystem-level continuity.
                </p>
            </PageSection>
            <PageSection
                subtitle="Long-Term Direction"
                link="about@oxovolt.com"
            >
                <p className="mb-4">
                    The ecosystem evolves through continuous research,
                    deployment experience and engineering refinement.
                </p>
                <p>
                    Our objective is to build technologies designed to operate
                    reliably over time.
                </p>
            </PageSection>

            {/* Team Section */}
            <div className="mt-16 flex flex-col gap-12">
                <h3 className="mb-2 text-xl font-bold tracking-widest text-text-default uppercase">
                    The Team
                </h3>

                {/* Bernard Feron */}
                <div className="flex flex-col items-center gap-8 md:flex-row">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md md:w-1/2">
                        <img
                            src={BernardAvt}
                            alt="Bernard Feron"
                            className="h-full w-full object-cover"
                            onError={(e) => {
                                // Fallback for placeholder
                                e.currentTarget.src =
                                    'https://placehold.co/600x450/eeeeee/999999?text=Bernard+Feron';
                            }}
                        />
                    </div>
                    <div className="flex w-full flex-col justify-center md:w-1/2">
                        <h4 className="mb-1 text-2xl font-bold text-text-default">
                            Bernard Feron
                        </h4>
                        <p className="mb-4 text-lg font-medium text-primary">
                            – Head of Experimental Lab
                        </p>
                        <p className="mb-2 text-sm leading-relaxed text-text-subdued">
                            Automation specialist ensuring system stability,
                            monitoring, and control under real conditions.
                        </p>
                        <p className="text-sm leading-relaxed text-text-subdued">
                            Validates performance and safety across all
                            deployments.
                        </p>
                    </div>
                </div>

                {/* Bjorn Vidakovic */}
                <div className="flex flex-col items-center gap-8 md:flex-row-reverse">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md md:w-1/2">
                        <img
                            src={BjornAvt}
                            alt="Bjorn Vidakovic"
                            className="h-full w-full object-cover"
                            onError={(e) => {
                                // Fallback for placeholder
                                e.currentTarget.src =
                                    'https://placehold.co/600x450/eeeeee/999999?text=Bjorn+Vidakovic';
                            }}
                        />
                    </div>
                    <div className="flex w-full flex-col justify-center md:w-1/2">
                        <h4 className="mb-1 text-2xl font-bold text-text-default">
                            Bjorn Vidakovic
                        </h4>
                        <p className="mb-4 text-lg font-medium text-primary">
                            – Architecture & Field Captain
                        </p>
                        <p className="mb-4 text-sm leading-relaxed text-text-subdued">
                            Designer of LoopXCell architectures and real-world
                            deployments.
                            <br />
                            Responsible for:
                        </p>
                        <ul className="mb-4 list-inside list-disc space-y-1 text-sm leading-relaxed text-text-subdued">
                            <li>System design and integration</li>
                            <li>On-site validation</li>
                            <li>Client interaction</li>
                            <li>Market development (Benelux)</li>
                        </ul>
                        <p className="text-sm leading-relaxed text-text-subdued italic">
                            Ensures that LoopXCell works not only in theory —
                            but in real installations.
                        </p>
                    </div>
                </div>

                {/* Robert Paulus */}
                <div className="flex flex-col items-center gap-8 md:flex-row">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md md:w-1/2">
                        <img
                            src={RobertAvt}
                            alt="Robert Paulus"
                            className="h-full w-full object-cover"
                            onError={(e) => {
                                // Fallback for placeholder
                                e.currentTarget.src =
                                    'https://placehold.co/600x450/eeeeee/999999?text=Bernard+Feron';
                            }}
                        />
                    </div>
                    <div className="flex w-full flex-col justify-center md:w-1/2">
                        <h4 className="mb-1 text-2xl font-bold text-text-default">
                            Robert Paulus
                        </h4>
                        <p className="mb-4 text-lg font-medium text-primary">
                            – 3D Lab & Emerging Markets
                        </p>
                        <p className="mb-2 text-sm leading-relaxed text-text-subdued">
                            Develops technical adaptations and custom solutions.
                        </p>
                        <p className="text-sm leading-relaxed text-text-subdued">
                            Supports rapid prototyping and expansion into Africa
                            with:
                        </p>
                        <ul className="mb-4 list-inside list-disc space-y-1 text-sm leading-relaxed text-text-subdued">
                            <li>Local deployment strategies</li>
                            <li>Adapted energy solutions</li>
                            <li>Market development</li>
                        </ul>
                    </div>
                </div>

                {/* Maxime Dotrange */}
                <div className="flex flex-col items-center gap-8 md:flex-row-reverse">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-md md:w-1/2">
                        <img
                            src={MaximeAvt}
                            alt="Maxime Dotrange"
                            className="h-full w-full object-cover"
                            onError={(e) => {
                                // Fallback for placeholder
                                e.currentTarget.src =
                                    'https://placehold.co/600x450/eeeeee/999999?text=Bjorn+Vidakovic';
                            }}
                        />
                    </div>
                    <div className="flex w-full flex-col justify-center md:w-1/2">
                        <h4 className="mb-1 text-2xl font-bold text-text-default">
                            Maxime Dotrange
                        </h4>
                        <p className="mb-4 text-lg font-medium text-primary">
                            – Assembly, Renovation & Field Support
                        </p>
                        <p className="mb-4 text-sm leading-relaxed text-text-subdued">
                            Supports daily operations and physical
                            infrastructure.
                            <br />
                            Contributes to:
                        </p>
                        <ul className="mb-4 list-inside list-disc space-y-1 text-sm leading-relaxed text-text-subdued">
                            <li>Assembly of systems</li>
                            <li>Basic maintenance</li>
                            <li>Installation preparation</li>
                            <li>Factory renovation and evolution</li>
                        </ul>
                        <p className="text-sm leading-relaxed text-text-subdued italic">
                            Ensures that both systems and environment remain
                            functional and ready.
                        </p>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};
