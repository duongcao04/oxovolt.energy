import { DedicatedTechnologyPages } from './dedicated-technology-pages';
import { ProductAndSystemPages } from './product-and-system-pages';
import { PillarsOfInnovation } from './pillars-of-innovation';
import { PublicAnnouncements } from './public-announcements';
import { EcosystemVisibility } from './ecosystem-visibility';
import { InterviewsCoverage } from './interviews-coverage';
import { PageLayout, PageSection } from './_page-layout';
import { DataPreferences } from './data-preferences';
import { Certifications } from './certifications';
import { TechnicalBlog } from './technical-blog';
import { PrivacyPolicy } from './privacy-policy';
import { MediaReleases } from './media-releases';
import { Documentation } from './documentation';
import { LegalNotices } from './legal-notices';
import { MyInstaller } from './my-installer';
import { TermsOfUse } from './terms-of-use';
import { WhyOxovolt } from './why-oxovolt';
import { FieldNotes } from './field-notes';
import { WhoWeAre } from './who-we-are';
import { Ecosystem } from './ecosystem';
import { Roadmap } from './roadmap';
import { Contact } from './contact';
import { Career } from './career';
import { Press } from './press';

export const PageRenderer = ({
    activePage,
    onBack,
}: {
    activePage: string;
    onBack: () => void;
}) => {
    switch (activePage) {
        // About
        case 'who-we-are':
            return <WhoWeAre onBack={onBack} />;
        case 'why-oxovolt':
            return <WhyOxovolt onBack={onBack} />;
        case 'ecosystem':
            return <Ecosystem onBack={onBack} />;
        case 'pillars-of-innovation':
            return <PillarsOfInnovation onBack={onBack} />;
        // Solutions
        case 'product-and-system-pages':
            return <ProductAndSystemPages onBack={onBack} />;
        case 'dedicated-technology-pages':
            return <DedicatedTechnologyPages onBack={onBack} />;
        case 'my-installer':
            return <MyInstaller onBack={onBack} />;
        case 'certifications':
            return <Certifications onBack={onBack} />;
        case 'roadmap':
            return <Roadmap onBack={onBack} />;
        // Knowledge
        case 'technical-blog':
            return <TechnicalBlog onBack={onBack} />;
        case 'field-notes':
            return <FieldNotes onBack={onBack} />;
        case 'press':
            return <Press onBack={onBack} />;
        case 'documentation':
            return <Documentation onBack={onBack} />;
        // Access
        case 'careers':
            return <Career onBack={onBack} />;
        case 'privacy-policy':
            return <PrivacyPolicy onBack={onBack} />;
        case 'terms-of-use':
            return <TermsOfUse onBack={onBack} />;
        case 'legal-notices':
            return <LegalNotices onBack={onBack} />;
        case 'data-preferences':
            return <DataPreferences onBack={onBack} />;
        case 'contact-us':
            return <Contact onBack={onBack} />;
        case 'media-releases':
            return <MediaReleases onBack={onBack} />;
        case 'public-announcements':
            return <PublicAnnouncements onBack={onBack} />;
        case 'interviews-n-coverage':
            return <InterviewsCoverage onBack={onBack} />;
        case 'ecosystem-visibility':
            return <EcosystemVisibility onBack={onBack} />;
        default:
            // For placeholders like 'careers' or 'contact-us'
            return <ComingPage onBack={onBack} />;
    }
};

function ComingPage({ onBack }: { onBack: () => void }) {
    return (
        <PageLayout title="Press" onBack={onBack}>
            <PageSection link="press@oxovolt.com">
                <p className="mb-4">
                    This section is currently being prepared and expanded by the
                    Oxovolt team.
                </p>
                <p className="mb-4">
                    For press inquiries, interviews, technical information or
                    early media access, please contact:
                </p>
            </PageSection>
            <PageSection>
                <p>
                    WhatsApp:{' '}
                    <a
                        href="https://wa.me/+32455130162"
                        className="font-bold hover:underline"
                        target="_blank"
                    >
                        +32 455 13 01 62
                    </a>
                </p>
            </PageSection>
        </PageLayout>
    );
}
