import { PageLayout, PageSection } from './_page-layout';

export const Documentation = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Documentation" onBack={onBack}>
            <PageSection subtitle="Technical Manuals" link="press@oxovolt.com">
                <p className="mb-4">Access technical manuals covering systems, infrastructure and operational guidelines.</p>
                <p>Documentation supports deployment, integration and maintenance processes.</p>
            </PageSection>
            <PageSection subtitle="Integration Guides" link="press@oxovolt.com">
                <p className="mb-4">Guides explain how systems connect within broader infrastructure environments.</p>
                <p>Explore compatibility, operational requirements and implementation recommendations.</p>
            </PageSection>
            <PageSection subtitle="Whitepapers" link="press@oxovolt.com">
                <p className="mb-4">Technical whitepapers provide deeper analysis of systems and engineering concepts.</p>
                <p>Documents may include research insights and infrastructure explanations.</p>
            </PageSection>
            <PageSection subtitle="Operational Resources" link="press@oxovolt.com">
                <p className="mb-4">Documentation resources support understanding of platforms and system behavior.</p>
                <p>Materials evolve continuously alongside infrastructure and technology development.</p>
            </PageSection>
        </PageLayout>
    );
};
