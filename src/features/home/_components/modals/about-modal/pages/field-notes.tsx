import { PageLayout, PageSection } from './_page-layout';

export const FieldNotes = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Field Notes" onBack={onBack}>
            <PageSection subtitle="Deployments" link="knowledge@amoovo.com">
                <p className="mb-4">Field notes document real-world deployments and operational experiences.</p>
                <p>Each report highlights infrastructure behavior, performance and deployment conditions.</p>
            </PageSection>
            <PageSection subtitle="Operational Learnings" link="knowledge@amoovo.com">
                <p className="mb-4">Understand how systems behave under real operating conditions and workloads.</p>
                <p>Explore lessons learned through installation and infrastructure management.</p>
            </PageSection>
            <PageSection subtitle="Infrastructure Feedback" link="knowledge@amoovo.com">
                <p className="mb-4">Technical feedback collected from field operations and deployment environments.</p>
                <p>Includes observations related to integration, stability and system continuity.</p>
            </PageSection>
            <PageSection subtitle="Real Environments" link="knowledge@amoovo.com">
                <p className="mb-4">Explore how Oxovolt systems adapt to industrial and operational constraints.</p>
                <p>Field notes focus on reliability, scalability and implementation challenges.</p>
            </PageSection>
        </PageLayout>
    );
};
