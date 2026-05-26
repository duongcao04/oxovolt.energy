import { PageLayout, PageSection } from './_page-layout';

export const PublicAnnouncements = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Press" onBack={onBack}>
            <PageSection
                subtitle="Public Announcements"
                link="press@oxovolt.com"
            >
                <p className="mb-4">
                    Stay informed about new projects, launches and operational
                    milestones.
                </p>
                <p>
                    Announcements may include partnerships, research progress
                    and deployment updates.
                </p>
            </PageSection>
        </PageLayout>
    );
};
