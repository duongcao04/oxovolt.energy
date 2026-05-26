import { PageLayout, PageSection } from './_page-layout';

export const DedicatedTechnologyPages = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Dedicated Technology Pages" onBack={onBack}>
            <PageSection subtitle="Immersion Cooling" link="solutions@oxovolt.com">
                <p className="mb-4">Advanced thermal management systems designed to improve efficiency and operational stability.</p>
                <p>Fluid-based architectures help maintain controlled temperatures across infrastructure environments.</p>
            </PageSection>
            <PageSection subtitle="Thermal Intelligence" link="solutions@oxovolt.com">
                <p className="mb-4">Intelligent monitoring systems designed to optimize thermal behavior and energy performance.</p>
                <p>Focused on infrastructure reliability, operational balance and system longevity.</p>
            </PageSection>
            <PageSection subtitle="Hybrid Infrastructure" link="solutions@oxovolt.com">
                <p className="mb-4">Technologies combining multiple energy sources within unified operational environments.</p>
                <p>Designed to improve flexibility, resilience and infrastructure continuity.</p>
            </PageSection>
            <PageSection subtitle="System Integration" link="solutions@oxovolt.com">
                <p className="mb-4">Integrated technologies built to operate together as scalable infrastructure ecosystems.</p>
                <p>Focused on modular deployment, intelligent management and operational efficiency.</p>
            </PageSection>
        </PageLayout>
    );
};
