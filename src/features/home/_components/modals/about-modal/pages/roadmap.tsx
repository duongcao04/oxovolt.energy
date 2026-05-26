import { PageLayout, PageSection } from './_page-layout';

export const Roadmap = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Roadmap" onBack={onBack}>
            <PageSection subtitle="Current Generation" link="solutions@oxovolt.com">
                <p className="mb-4">Explore the current generation of Oxovolt technologies and infrastructure systems.</p>
                <p>Focused on operational continuity, scalability and advanced system integration.</p>
            </PageSection>
            <PageSection subtitle="Future Systems" link="solutions@oxovolt.com">
                <p className="mb-4">Future developments may include new architectures, infrastructure models and deployment solutions.</p>
                <p>Research and engineering activities continuously shape upcoming technologies.</p>
            </PageSection>
            <PageSection subtitle="Deployment Evolution" link="solutions@oxovolt.com">
                <p className="mb-4">Operational roadmaps evolve according to engineering progress and infrastructure feedback.</p>
                <p>Deployment strategies are refined through ongoing research and field experience.</p>
            </PageSection>
            <PageSection subtitle="Research Direction" link="solutions@oxovolt.com">
                <p className="mb-4">Long-term development focuses on intelligent infrastructure and resilient energy ecosystems.</p>
                <p>Future concepts may evolve over time according to operational and technological requirements.</p>
            </PageSection>
        </PageLayout>
    );
};
