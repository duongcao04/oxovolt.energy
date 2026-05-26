import { PageLayout, PageSection } from './_page-layout';

export const ProductAndSystemPages = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Product & System Pages" onBack={onBack}>
            <PageSection subtitle="Residential Systems" link="solutions@oxovolt.com">
                <p className="mb-4">Energy systems designed for homes requiring continuity, stability and intelligent backup infrastructure.</p>
                <p>Built to integrate seamlessly into modern residential energy environments.</p>
            </PageSection>
            <PageSection subtitle="Commercial Infrastructure" link="solutions@oxovolt.com">
                <p className="mb-4">Scalable systems developed for offices, commercial buildings and operational facilities.</p>
                <p>Focused on reliability, efficiency and uninterrupted day-to-day energy availability.</p>
            </PageSection>
            <PageSection subtitle="Industrial Deployments" link="solutions@oxovolt.com">
                <p className="mb-4">Industrial-grade infrastructure engineered for demanding operational environments and critical systems.</p>
                <p>Designed for long-term continuity, monitoring and scalable energy integration.</p>
            </PageSection>
            <PageSection subtitle="Hybrid Architecture" link="solutions@oxovolt.com">
                <p className="mb-4">Integrated systems combining storage, intelligence and advanced infrastructure management.</p>
                <p>Built to support resilient and adaptive energy ecosystems across multiple environments.</p>
            </PageSection>
        </PageLayout>
    );
};
