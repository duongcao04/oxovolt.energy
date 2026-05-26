import { PageLayout, PageSection } from './_page-layout';

export const Certifications = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Certifications" onBack={onBack}>
            <PageSection subtitle="Compliance Standards" link="solutions@oxovolt.com">
                <p className="mb-4">Systems are developed with consideration for applicable industrial and regulatory standards.</p>
                <p>Compliance objectives focus on safety, operational consistency and infrastructure reliability.</p>
            </PageSection>
            <PageSection subtitle="Validation Processes" link="solutions@oxovolt.com">
                <p className="mb-4">Testing and validation procedures support system stability and operational integrity.</p>
                <p>Processes may include thermal analysis, infrastructure testing and performance evaluation.</p>
            </PageSection>
            <PageSection subtitle="Engineering Reliability" link="solutions@oxovolt.com">
                <p className="mb-4">Engineering standards are designed to support scalable and long-term infrastructure deployment.</p>
                <p>Reliability remains central across development, testing and operational implementation.</p>
            </PageSection>
            <PageSection subtitle="Technical Documentation" link="solutions@oxovolt.com">
                <p className="mb-4">Certification-related documentation may be provided depending on systems and deployment context.</p>
                <p>Technical materials evolve continuously alongside technologies and operational requirements.</p>
            </PageSection>
        </PageLayout>
    );
};
