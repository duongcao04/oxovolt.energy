import { PageLayout, PageSection } from './_page-layout';

export const TermsOfUse = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Terms of Use" onBack={onBack}>
            <PageSection subtitle="Platform Access" link="legal@oxovolt.com">
                <p className="mb-4">Access to Oxovolt services is intended for lawful and authorized use only.</p>
                <p className="mb-4">Users must interact responsibly with digital platforms and infrastructure systems.</p>
                <p>Unauthorized access attempts or misuse are strictly prohibited.</p>
            </PageSection>
            <PageSection subtitle="Intellectual Property" link="legal@oxovolt.com">
                <p className="mb-4">All technologies, visuals and engineering systems remain the property of Oxovolt.</p>
                <p className="mb-4">Content and technical materials may not be reproduced without permission.</p>
                <p>Intellectual property protections apply across all related platforms.</p>
            </PageSection>
            <PageSection subtitle="User Responsibilities" link="legal@oxovolt.com">
                <p className="mb-4">Users agree not to interfere with infrastructure or connected services.</p>
                <p className="mb-4">Unauthorized modification or reproduction may result in restricted access.</p>
                <p>Responsible usage helps preserve platform stability and reliability.</p>
            </PageSection>
            <PageSection subtitle="Service Evolution" link="legal@oxovolt.com">
                <p className="mb-4">Oxovolt reserves the right to modify or improve services when required.</p>
                <p className="mb-4">Features and platform structures may evolve over time.</p>
                <p className="mb-4">Updates may occur without prior notice.</p>
                <p>Extended legal documentation available upon request.</p>
            </PageSection>
        </PageLayout>
    );
};
