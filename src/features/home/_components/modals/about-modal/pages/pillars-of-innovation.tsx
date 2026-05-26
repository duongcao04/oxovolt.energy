import { PageLayout, PageSection } from './_page-layout';

export const PillarsOfInnovation = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Pillars of Innovation" onBack={onBack}>
            <PageSection subtitle="Engineering Principles" link="about@oxovolt.com">
                <p className="mb-4">Core engineering principles guide the development of Oxovolt systems and infrastructure.</p>
                <p>Design priorities focus on continuity, modularity and operational reliability.</p>
            </PageSection>
            <PageSection subtitle="System Intelligence" link="about@oxovolt.com">
                <p className="mb-4">Innovation includes integrated monitoring, infrastructure optimization and adaptive technologies.</p>
                <p>Systems are designed to improve operational visibility and long-term performance.</p>
            </PageSection>
            <PageSection subtitle="Infrastructure Design" link="about@oxovolt.com">
                <p className="mb-4">Technologies are developed with scalability, flexibility and future integration in mind.</p>
                <p>Engineering choices support resilient infrastructure across multiple deployment environments.</p>
            </PageSection>
            <PageSection subtitle="Long-Term Innovation" link="about@oxovolt.com">
                <p className="mb-4">Research and development continuously shape future technologies and ecosystem direction.</p>
                <p>Innovation remains focused on practical engineering and real-world operational needs.</p>
            </PageSection>
        </PageLayout>
    );
};
