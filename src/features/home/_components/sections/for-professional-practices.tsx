import { SectionSubTitle, SectionTitle, Button } from '@/components/ui';
import { ResponsiveContainer } from '@/components/layout';
import { useTranslation } from 'react-i18next';
import { Separator } from '@heroui/react';

export const ForProfessionalPracticesSection = () => {
    const { t } = useTranslation();

    return (
        <ResponsiveContainer fillScreen anchor="professional-practices">
            <div className="flex w-full flex-col justify-center gap-12 py-16 lg:gap-16 lg:py-24">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
                    {/* Left Column - Top */}
                    <div className="flex flex-col lg:pr-16">
                        <SectionSubTitle className="text-primary mb-6 text-xs font-bold tracking-[0.2em]">
                            {t('home.professional_practices_section.tag')}
                        </SectionSubTitle>

                        <SectionTitle
                            mainText={t(
                                'home.professional_practices_section.mainText',
                            )}
                            highlightText={t(
                                'home.professional_practices_section.highlightText',
                            )}
                            classNames={{
                                mainText: 'whitespace-pre-line',
                                highlight: 'text-primary whitespace-pre-line',
                            }}
                        />

                        <div className="text-text-subdued mt-8 space-y-6 pr-8 text-[15px] leading-relaxed font-medium whitespace-pre-line">
                            <div className="flex flex-col">
                                <p>
                                    {t(
                                        'home.professional_practices_section.desc1',
                                    )}
                                </p>
                            </div>

                            <div className="flex flex-col">
                                <p>
                                    {t(
                                        'home.professional_practices_section.desc2',
                                    )}
                                </p>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Button
                                variant="outlinedBox"
                                linkProps={{
                                    hash: 'loopXcell-series',
                                }}
                                arrowType="down"
                            >
                                {t(
                                    'home.professional_practices_section.button',
                                )}
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Top */}
                    <div className="flex flex-col gap-10 pt-4 lg:pt-32 lg:pl-16">
                        <div className="border-primary flex flex-col border-l-2 pl-6">
                            <p className="text-text-subdued text-[14px] leading-relaxed font-medium whitespace-pre-line">
                                {t(
                                    'home.professional_practices_section.right1',
                                )}
                            </p>
                        </div>
                        <div className="border-primary flex flex-col border-l-2 pl-6">
                            <p className="text-text-subdued text-[14px] leading-relaxed font-medium whitespace-pre-line">
                                {t(
                                    'home.professional_practices_section.right2',
                                )}
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-text-default text-[16px] font-bold">
                                {t(
                                    'home.professional_practices_section.right3',
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Horizontal Line Separator */}
                <Separator className="bg-gray-200" />

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-0">
                    {/* Left Column - Bottom */}
                    <div className="h-full lg:pr-16">
                        <div className="border-primary flex h-full flex-col border-l-2 pl-6">
                            <p className="text-text-subdued text-[15px] leading-relaxed font-medium whitespace-pre-line">
                                {t(
                                    'home.professional_practices_section.bottomLeft',
                                )}
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Bottom */}
                    <div className="h-full lg:pl-16">
                        <div className="border-primary flex h-full flex-col border-l-2 pl-6">
                            <p className="text-text-subdued mb-4 text-[14px] leading-relaxed font-medium">
                                {t(
                                    'home.professional_practices_section.bottomRight1',
                                )}
                            </p>
                            <p className="text-text-default text-[16px] font-bold">
                                {t(
                                    'home.professional_practices_section.bottomRight2',
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ResponsiveContainer>
    );
};
