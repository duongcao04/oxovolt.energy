import { PageLayout, PageSection } from './_page-layout';

export const EcosystemVisibility = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Press" onBack={onBack}>
            <PageSection
                subtitle="Ecosystem Visibility"
                link="press@oxovolt.com"
            >
                <p className="mb-4">
                    Press materials help present the broader Oxovolt ecosystem
                    and long-term direction.
                </p>
                <p>
                    Content may include visuals, statements and technical
                    communications.
                </p>
            </PageSection>
        </PageLayout>
    );
};
