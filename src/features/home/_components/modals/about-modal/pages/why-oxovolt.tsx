import { PageLayout, PageSection } from './_page-layout';

export const WhyOxovolt = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Why Oxovolt" onBack={onBack}>
            <PageSection subtitle="Continuity First" link="about@oxovolt.com">
                <p className="mb-4">Oxovolt systems are designed around uninterrupted operation and infrastructure resilience.</p>
                <p>Continuity remains central across architecture, deployment and operational environments.</p>
            </PageSection>
            <PageSection subtitle="Different Architecture" link="about@oxovolt.com">
                <p className="mb-4">Our technologies explore alternative approaches to energy storage and infrastructure management.</p>
                <p>Engineering decisions prioritize stability, adaptability and operational efficiency.</p>
            </PageSection>
            <PageSection subtitle="Integrated Systems" link="about@oxovolt.com">
                <p className="mb-4">Hardware, software and infrastructure are developed as connected operational ecosystems.</p>
                <p>Integrated intelligence improves monitoring, scalability and long-term system behavior.</p>
            </PageSection>
            <PageSection subtitle="Future Infrastructure" link="about@oxovolt.com">
                <p className="mb-4">Oxovolt technologies are designed to evolve alongside future industrial requirements.</p>
                <p>Research focuses on resilient infrastructure and intelligent energy ecosystems.</p>
            </PageSection>
        </PageLayout>
    );
};
