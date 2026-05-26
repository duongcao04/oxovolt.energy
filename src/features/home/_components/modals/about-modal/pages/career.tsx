import { PageLayout, PageSection } from './_page-layout';

export const Career = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Careers" onBack={onBack}>
            <PageSection link="jobs@oxovolt.com">
                <p className="mb-4">
                    Join the teams shaping the future of advanced energy systems, intelligent infrastructure, industrial experimentation, and next-generation technologies.
                </p>
                <p className="mb-8">
                    OXOVOLT is currently entering a major acceleration phase focused on ecosystem expansion, laboratory development, infrastructure deployment, and industrial growth. The coming year represents an important boost period for the company, with multiple projects moving from research environments toward real-world implementation.
                </p>

                <p className="mb-4">We are actively looking for:</p>
                <ul className="mb-8 list-inside list-disc space-y-1 ml-2">
                    <li>Engineers</li>
                    <li>Developers</li>
                    <li>Technicians</li>
                    <li>Industrial designers</li>
                    <li>Embedded systems specialists</li>
                    <li>Prototype builders</li>
                    <li>Media &amp; communication profiles</li>
                    <li>Research contributors</li>
                    <li>Operational support profiles</li>
                    <li>Field installation teams</li>
                </ul>

                <p className="mb-8">
                    Applications from technical installers are also highly encouraged. Future installation technicians will progressively receive internal training related to OXOVOLT systems, energy infrastructures, deployment procedures, and ecosystem technologies.
                </p>

                <p className="mb-4">Beyond experience, we value:</p>
                <ul className="mb-8 list-inside list-disc space-y-1 ml-2">
                    <li>Curiosity</li>
                    <li>Motivation</li>
                    <li>Adaptability</li>
                    <li>Problem-solving mindset</li>
                    <li>Technical passion</li>
                    <li>Ability to evolve in fast-moving environments</li>
                    <li>Interest in experimental and future-oriented technologies</li>
                </ul>

                <p className="mb-8">
                    Students, self-taught profiles, multidisciplinary creators, and unconventional technical backgrounds are welcome. OXOVOLT is building long-term teams capable of evolving alongside the ecosystem itself.
                </p>

                <p className="mb-0">To apply or introduce your profile:</p>
            </PageSection>
        </PageLayout>
    );
};
