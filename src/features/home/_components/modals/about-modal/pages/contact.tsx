import { PageLayout, PageSection } from './_page-layout';
export const Contact = ({ onBack }: { onBack: () => void }) => {
    return (
        <PageLayout title="Contact" onBack={onBack}>
            <PageSection>
                <p className="mb-4">
                    Please contact the OXOVOLT team on{' '}
                    <a
                        href="https://wa.me/+32455130162"
                        className="font-bold hover:underline"
                        target="_blank"
                    >
                        +32 455 130 162
                    </a>{' '}
                    (also Whatsapp) to speak with the sales or service team.
                </p>
            </PageSection>

            <PageSection subtitle="Europe Showroom" link="Sales@oxovolt.com">
                <p className="mb-4">
                    You can send us a letter — the old-fashioned way, we will
                    appreciate.
                </p>
                <p className="mb-1 font-bold text-text-default">OXOVOLT ENERGY</p>
                <p>Rue des Prairies, 11/B</p>
                <p>4800 Verviers</p>
                <p>Belgium</p>

                <p className='text-text-default'>ID.: BE0689.990.296</p>
            </PageSection>
        </PageLayout>
    );
};
