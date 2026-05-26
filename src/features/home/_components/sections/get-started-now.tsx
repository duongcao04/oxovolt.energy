import { SectionSubTitle, SectionTitle } from '@/components/ui';
import { ResponsiveContainer } from '@/components/layout';
import { ContactForm } from '../forms/contact-form';
import { Icon } from '@iconify-icon/react';

export function GetStartedNow() {
    const onClickWhatsapp = () => {
        window.open('https://wa.me/32455130162', '_blank');
    };
    return (
        <ResponsiveContainer fillScreen anchor="get-started-now">
            <div className="grid w-full flex-1 grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
                {/* Left Column */}
                <div className="flex flex-col justify-start lg:pt-4">
                    <SectionSubTitle className="text-primary mb-6 text-xs font-bold tracking-[0.2em] uppercase">
                        GET STARTED NOW
                    </SectionSubTitle>

                    {/* Short blue divider line */}
                    <div className="bg-primary mb-8 h-0.5 w-10"></div>

                    <SectionTitle
                        mainText={"Let's talk about\nyour project."}
                        highlightText={"We're ready."}
                    />

                    <p className="text-text-default mb-12 max-w-md text-[15px] leading-relaxed font-medium">
                        Tell us a few details and we'll get back to you
                        personally to discuss your needs.
                    </p>

                    {/* WhatsApp Block */}
                    <button
                        className="mb-10 flex w-fit cursor-pointer items-center gap-4"
                        onClick={onClickWhatsapp}
                    >
                        <Icon
                            icon="ic:outline-whatsapp"
                            width={44}
                            height={44}
                            style={{
                                color: '#0ac34b',
                            }}
                        />
                        <div>
                            <p className="text-text-default text-left text-[14px] font-bold">
                                Prefer WhatsApp?
                            </p>
                            <p className="text-text-subdued text-left text-[14px] font-medium">
                                Send us a message — we're responsive.
                            </p>
                        </div>
                    </button>

                    <div className="mb-8 w-full max-w-sm border-t border-blue-200/50"></div>

                    <div className="flex flex-col gap-8">
                        <div>
                            <p className="text-text-default mb-1 text-[14px] font-bold">
                                Call us
                            </p>
                            <a
                                href="https://wa.me/32455130162"
                                className="text-text-default text-[14px] font-medium underline-offset-1 hover:underline"
                            >
                                +32 455 130 162
                            </a>
                        </div>
                        <div>
                            <p className="text-text-default mb-1 text-[14px] font-bold">
                                Email us
                            </p>
                            <a
                                href="mailto:sales@oxovolt.com"
                                className="text-text-default text-[14px] font-medium underline-offset-1 hover:underline"
                            >
                                sales@oxovolt.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-center">
                    <ContactForm />
                </div>
            </div>
        </ResponsiveContainer>
    );
}
