import { PageLayout, PageSection } from './_page-layout';

export const DataPreferences = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Data Preferences" onBack={onBack}>
            <PageSection subtitle="Communication Preferences" link="legal@oxovolt.com">
                <p className="mb-4">Users may manage communication and subscription settings at any time.</p>
                <p className="mb-4">Notification preferences can be adjusted through available platform tools.</p>
                <p>Preference management is designed to remain clear and accessible.</p>
            </PageSection>
            <PageSection subtitle="Analytics" link="legal@oxovolt.com">
                <p className="mb-4">Optional analytics data may be used to improve usability and performance.</p>
                <p className="mb-4">Performance monitoring helps optimize reliability and user experience quality.</p>
                <p>Collected metrics are intended for operational improvements.</p>
            </PageSection>
            <PageSection subtitle="Cookies" link="legal@oxovolt.com">
                <p className="mb-4">Cookie and tracking preferences may be configured through browser settings.</p>
                <p className="mb-4">Certain technologies help improve navigation and interface functionality.</p>
                <p>Users remain free to disable optional tracking mechanisms.</p>
            </PageSection>
            <PageSection subtitle="Data Requests" link="legal@oxovolt.com">
                <p className="mb-4">Eligible users may request data export, correction or deletion when applicable.</p>
                <p className="mb-4">Requests are processed according to privacy and regulatory requirements.</p>
                <p className="mb-4">Oxovolt maintains transparent data management procedures.</p>
                <p>Extended legal documentation available upon request.</p>
            </PageSection>
        </PageLayout>
    );
};
