import { PageLayout, PageSection } from './_page-layout';

export const TechnicalBlog = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Technical Blog" onBack={onBack}>
            <PageSection subtitle="Architecture Breakdowns" link="knowledge@amoovo.com">
                <p className="mb-4">Deep technical explanations focused on system architecture and engineering decisions.</p>
                <p>Explore infrastructure logic, thermal design and operational system behavior.</p>
            </PageSection>
            <PageSection subtitle="Engineering Articles" link="knowledge@amoovo.com">
                <p className="mb-4">Technical publications covering energy systems, fluid integration and hybrid infrastructure.</p>
                <p>Research-driven insights designed to explain technologies in a clear operational way.</p>
            </PageSection>
            <PageSection subtitle="Technology Insights" link="knowledge@amoovo.com">
                <p className="mb-4">Explore the thinking behind Oxovolt systems and industrial technology development.</p>
                <p>Understand how design choices impact continuity, efficiency and deployment flexibility.</p>
            </PageSection>
            <PageSection subtitle="System Intelligence" link="knowledge@amoovo.com">
                <p className="mb-4">Discover how hardware, software and infrastructure operate together as one ecosystem.</p>
                <p>Learn how monitoring, optimization and modular systems improve operational continuity.</p>
            </PageSection>
        </PageLayout>
    );
};
