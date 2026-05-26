import { PageLayout, PageSection } from './_page-layout';

export const MediaReleases = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Press" onBack={onBack}>
            <PageSection subtitle="Media Releases" link="press@oxovolt.com">
                <p className="mb-4">
                    Official announcements related to technologies, deployments
                    and ecosystem developments.
                </p>
                <p>
                    Press releases communicate important updates across Oxovolt
                    initiatives.
                </p>
            </PageSection>
        </PageLayout>
    );
};
