import { PageLayout, PageSection } from './_page-layout';

export const MyInstaller = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="My Installer" onBack={onBack}>
            <PageSection subtitle="Installer Access" link="solutions@oxovolt.com">
                <p className="mb-4">Dedicated resources and tools designed for certified installers and integration partners.</p>
                <p>Provides access to deployment information and operational support materials.</p>
            </PageSection>
            <PageSection subtitle="Downloads & Resources" link="solutions@oxovolt.com">
                <p className="mb-4">Access technical files, documentation and deployment-related operational resources.</p>
                <p>Materials are designed to support installation and infrastructure integration processes.</p>
            </PageSection>
            <PageSection subtitle="Installation Support" link="solutions@oxovolt.com">
                <p className="mb-4">Operational guidance focused on deployment consistency and infrastructure compatibility.</p>
                <p>Designed to simplify installation workflows across different environments.</p>
            </PageSection>
            <PageSection subtitle="Partner Infrastructure" link="solutions@oxovolt.com">
                <p className="mb-4">Installer resources evolve continuously alongside Oxovolt technologies and systems.</p>
                <p>Focused on scalable deployment, operational continuity and ecosystem integration.</p>
            </PageSection>
        </PageLayout>
    );
};
