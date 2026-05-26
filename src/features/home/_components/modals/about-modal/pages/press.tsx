import { PageLayout, PageSection } from './_page-layout';

export const Press = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Press" onBack={onBack}>
            <PageSection subtitle="Media Releases" link="press@oxovolt.com">
                <p className="mb-4">Official announcements related to technologies, deployments and ecosystem developments.</p>
                <p>Press releases communicate important updates across Oxovolt initiatives.</p>
            </PageSection>
            <PageSection subtitle="Public Announcements" link="press@oxovolt.com">
                <p className="mb-4">Stay informed about new projects, launches and operational milestones.</p>
                <p>Announcements may include partnerships, research progress and deployment updates.</p>
            </PageSection>
            <PageSection subtitle="Interviews & Coverage" link="press@oxovolt.com">
                <p className="mb-4">Selected interviews and media coverage related to Oxovolt technologies and vision.</p>
                <p>Explore discussions around infrastructure, continuity and industrial innovation.</p>
            </PageSection>
            <PageSection subtitle="Ecosystem Visibility" link="press@oxovolt.com">
                <p className="mb-4">Press materials help present the broader Oxovolt ecosystem and long-term direction.</p>
                <p>Content may include visuals, statements and technical communications.</p>
            </PageSection>
        </PageLayout>
    );
};
