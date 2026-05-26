import {
    HeroSection,
    LastSection,
    LoopXcellSeriesSection,
    ProfessionalContinuitySection,
    TheyChooseOxovolt,
    ForProfessionalPracticesSection,
    SovereignInfrastructure,
    GetStartedNow,
} from '../../../features/home';
import { createFileRoute } from '@tanstack/react-router';
import { Separator } from '@heroui/react';

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
                <GetStartedNow />
                <Separator />
                <LastSection />
            </>
        );
    },
});
