import { PageLayout, PageSection } from './_page-layout';

export const LegalNotices = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Legal Notices" onBack={onBack}>
            <PageSection subtitle="Company Information" link="legal@oxovolt.com">
                <p className="mb-4">Oxovolt develops industrial energy technologies and engineering infrastructure systems.</p>
                <p className="mb-4">The ecosystem includes digital platforms and technology development activities.</p>
                <p>Public information is provided for presentation and informational purposes.</p>
            </PageSection>
            <PageSection subtitle="Public Information" link="legal@oxovolt.com">
                <p className="mb-4">Technical materials and visuals are provided for informational purposes only.</p>
                <p className="mb-4">Certain specifications or concepts may differ from future production versions.</p>
                <p>Published information should not be interpreted as contractual commitments.</p>
            </PageSection>
            <PageSection subtitle="Technology Evolution" link="legal@oxovolt.com">
                <p className="mb-4">Systems and future developments may evolve over time.</p>
                <p className="mb-4">Technical roadmaps and product directions can change according to research.</p>
                <p>Oxovolt continuously improves technologies and engineering approaches.</p>
            </PageSection>
            <PageSection subtitle="Liability" link="legal@oxovolt.com">
                <p className="mb-4">Oxovolt cannot be held responsible for misuse or unauthorized modifications.</p>
                <p className="mb-4">External services and third-party platforms remain outside direct control.</p>
                <p className="mb-4">Users are responsible for appropriate use of technologies and systems.</p>
                <p>Extended legal documentation available upon request.</p>
            </PageSection>
        </PageLayout>
    );
};
