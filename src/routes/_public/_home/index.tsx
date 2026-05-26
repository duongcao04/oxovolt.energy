import {
    HeroSection,
    LastSection,
    LoopXcellSeriesSection,
    ProfessionalContinuitySection,
    TheyChooseOxovolt,
    ForProfessionalPracticesSection,
    SovereignInfrastructure,
    GetStartedNow,
    MadeInBelgium,
} from '../../../features/home';
import { createFileRoute } from '@tanstack/react-router';
import { Separator } from '@heroui/react';
// Strip section-scroll anchors from URL on page load to prevent unwanted jumps.
// Modal hashes are preserved so they can auto-open.
export const SECTION_ANCHORS = new Set([
    'environment',
    'professional-practices',
    'loopXcell-series',
    'sovereign-infrastructure',
    'kameleo-series',
    'they-choose-oxovolt',
    'made-in-belgium',
    'our-solutions',
    'get-started-now',
]);

export const Route = createFileRoute('/_public/_home/')({
    component: () => {
        return (
            <>
                <HeroSection />
                <Separator />
                <ProfessionalContinuitySection />
                <ForProfessionalPracticesSection />
                {/* <Separator /> */}
                {/* <SolutionsSection /> */}
                {/* <TwoEnergyArchitecturesSection /> */}
                {/* <Separator />
                <KameleoSeriesSection /> */}
                <Separator />
                <LoopXcellSeriesSection />
                <Separator />
                <SovereignInfrastructure />
                <Separator />
                <TheyChooseOxovolt />
                <Separator />
                <MadeInBelgium />
                <Separator />
                <GetStartedNow />
                <Separator />
                <LastSection />
            </>
        );
    },
});
