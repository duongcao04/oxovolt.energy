import { PageLayout, PageSection } from './_page-layout';

export const PrivacyPolicy = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Privacy Policy" onBack={onBack}>
            <PageSection subtitle="Data Collection" link="legal@oxovolt.com">
                <p className="mb-4">Oxovolt collects limited information required to operate and secure its digital services.</p>
                <p className="mb-4">Only relevant data necessary for functionality and system stability may be processed.</p>
                <p>Information is handled with a focus on transparency and security.</p>
            </PageSection>
            <PageSection subtitle="Data Usage" link="legal@oxovolt.com">
                <p className="mb-4">Personal information may be used for communication, support and platform optimization.</p>
                <p className="mb-4">Certain data may help improve usability and infrastructure performance over time.</p>
                <p>Oxovolt does not use personal information beyond operational purposes.</p>
            </PageSection>
            <PageSection subtitle="Protection" link="legal@oxovolt.com">
                <p className="mb-4">Technical and organizational measures are applied to protect stored information.</p>
                <p className="mb-4">Access to sensitive information is restricted when necessary.</p>
                <p>Security practices evolve continuously to reduce operational risks.</p>
            </PageSection>
            <PageSection subtitle="User Rights" link="legal@oxovolt.com">
                <p className="mb-4">Users may request access, correction or deletion of eligible personal information.</p>
                <p className="mb-4">Requests are handled in accordance with applicable privacy regulations.</p>
                <p className="mb-4">Oxovolt aims to provide accessible data management processes.</p>
                <p>Extended legal documentation available upon request.</p>
            </PageSection>
        </PageLayout>
    );
};
