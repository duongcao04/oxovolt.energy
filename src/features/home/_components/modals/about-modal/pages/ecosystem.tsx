import { PageLayout, PageSection } from './_page-layout';

export const Ecosystem = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Ecosystem" onBack={onBack}>
            <PageSection subtitle="Connected Infrastructure" link="about@oxovolt.com">
                <p className="mb-4">The Oxovolt ecosystem connects technologies, platforms and infrastructure environments together.</p>
                <p>Systems are designed to operate within scalable and adaptive operational frameworks.</p>
            </PageSection>
            <PageSection subtitle="Technology Environment" link="about@oxovolt.com">
                <p className="mb-4">The ecosystem includes energy systems, research activities and future infrastructure concepts.</p>
                <p>Each component contributes to broader operational continuity and integration objectives.</p>
            </PageSection>
            <PageSection subtitle="Shared Intelligence" link="about@oxovolt.com">
                <p className="mb-4">Infrastructure, monitoring and operational systems are designed to function collectively.</p>
                <p>Shared intelligence improves visibility, optimization and long-term deployment flexibility.</p>
            </PageSection>
            <PageSection subtitle="Ecosystem Evolution" link="about@oxovolt.com">
                <p className="mb-4">The ecosystem continuously evolves through engineering research and operational experience.</p>
                <p>Future developments may expand technologies, integrations and infrastructure capabilities.</p>
            </PageSection>
        </PageLayout>
    );
};
