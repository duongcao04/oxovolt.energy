import { PageLayout, PageSection } from './_page-layout';

export const InterviewsCoverage = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Press" onBack={onBack}>
            <PageSection
                subtitle="Interviews & Coverage"
                link="press@oxovolt.com"
            >
                <p className="mb-4">
                    Selected interviews and media coverage related to Oxovolt
                    technologies and vision.
                </p>
                <p>
                    Explore discussions around infrastructure, continuity and
                    industrial innovation.
                </p>
            </PageSection>
        </PageLayout>
    );
};
