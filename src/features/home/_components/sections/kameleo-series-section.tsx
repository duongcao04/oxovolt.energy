import {
    KameleoConnectivityModal,
    KameleoDataModal,
    KameleoEnergyModal,
    KemeleoSeriesModal,
} from '@/features/home';
import { Button, SectionSubTitle, SectionTitle } from '@/components/ui';
import { KAMELEO_PERSONAL_CAROUSELS } from '../../_data/kameleo-data';
import { ResponsiveContainer } from '@/components/layout';
import { UpdatingModal } from '@/features/(updating)';
import { useTranslation } from 'react-i18next';
import { ArrowRightIcon } from 'lucide-react';
import { useDisclosure } from '@/hooks';
import { cn } from '../../../../lib';

export function KameleoSeriesSection() {
    const { t } = useTranslation();

    const bulletPoints = t('home.kameleo_section.bulletPoints', {
        returnObjects: true,
    }) as string[];
    const features1 = t('home.kameleo_section.features1', {
        returnObjects: true,
    }) as { title: string; desc: string }[];
    const features2 = t('home.kameleo_section.features2', {
        returnObjects: true,
    }) as { title: string; desc: string }[];

    const personalModalState = useDisclosure();
    const updatingModalState = useDisclosure();

    const energyModalState = useDisclosure();
    const dataModalState = useDisclosure();
    const connectivityModalState = useDisclosure();

    return (
        <>
            {personalModalState.isOpen && (
                <KemeleoSeriesModal
                    isOpen={personalModalState.isOpen}
                    onOpenChange={personalModalState.onOpenChange}
                    carouselData={KAMELEO_PERSONAL_CAROUSELS}
                />
            )}

            {updatingModalState.isOpen && (
                <UpdatingModal
                    isOpen={updatingModalState.isOpen}
                    onOpenChange={updatingModalState.onOpenChange}
                />
            )}

            {energyModalState.isOpen && (
                <KameleoEnergyModal
                    isOpen={energyModalState.isOpen}
                    onOpenChange={energyModalState.onOpenChange}
                    onDiscoverSeries={() => {
                        energyModalState.onClose();
                        personalModalState.onOpen();
                    }}
                />
            )}

            {dataModalState.isOpen && (
                <KameleoDataModal
                    isOpen={dataModalState.isOpen}
                    onOpenChange={dataModalState.onOpenChange}
                    onDiscoverSeries={() => {
                        dataModalState.onClose();
                        personalModalState.onOpen();
                    }}
                />
            )}

            {connectivityModalState.isOpen && (
                <KameleoConnectivityModal
                    isOpen={connectivityModalState.isOpen}
                    onOpenChange={connectivityModalState.onOpenChange}
                    onDiscoverSeries={() => {
                        connectivityModalState.onClose();
                        personalModalState.onOpen();
                    }}
                />
            )}

            <ResponsiveContainer fillScreen anchor="kameleo-series">
                <div className="size-full">
                    <div className="flex w-full flex-col gap-16 lg:grid lg:grid-cols-[1fr_450px] lg:items-start">
                        {/* Left Column */}
                        <div className="flex w-full flex-col items-start">
                            <SectionSubTitle className="text-primary mb-6 text-xs font-bold tracking-[0.2em]">
                                {t('home.kameleo_section.tag')}
                            </SectionSubTitle>

                            <SectionTitle
                                mainText={t('home.kameleo_section.mainText')}
                                highlightText={t(
                                    'home.kameleo_section.highlightText',
                                )}
                                classNames={{
                                    highlight: 'text-primary',
                                }}
                            />

                            <p className="mt-8 pr-8 text-[15px] leading-relaxed font-medium text-text-subdued">
                                {t('home.kameleo_section.desc')}
                            </p>

                            <div className="mt-8 flex flex-col gap-2 text-[15px] font-medium text-text-subdued">
                                {bulletPoints?.map((pt, i) => (
                                    <p key={i}>{pt}</p>
                                ))}
                            </div>

                            <p className="text-primary mt-6 text-[15px] font-bold">
                                {t('home.kameleo_section.slogan')}
                            </p>

                            {/* Short blue divider line */}
                            <div className="bg-primary my-4 h-0.5 w-10 lg:my-8"></div>

                            <Button
                                variant="outlinedBox"
                                onClick={personalModalState.onOpen}
                            >
                                {t('home.kameleo_section.button')}
                            </Button>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-10 pt-2">
                            {features1?.map((feature, idx) => (
                                <FeatureCard
                                    key={idx}
                                    title={feature.title}
                                    description={feature.desc}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Bottom Features */}
                    <div className="relative mt-20 lg:mt-32 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
                        {[
                            {
                                ...features2[0],
                                onPress: energyModalState.onOpen,
                            },
                            {
                                ...features2[1],
                                onPress: dataModalState.onOpen,
                            },
                            {
                                ...features2[2],
                                onPress: connectivityModalState.onOpen,
                            },
                        ].map((feature, idx) => (
                            <div
                                key={idx}
                                onClick={feature.onPress}
                                className={cn(
                                    'group flex cursor-pointer flex-col items-start transition-colors md:px-12',
                                    'border-blue-200/50 first:pl-0 last:pr-0',
                                    idx !== 2 && 'md:border-r',
                                )}
                            >
                                <div className="border-primary mb-6 w-6 border-t-2" />
                                <p className="group-hover:text-primary mb-4 text-sm font-bold tracking-[0.15em] text-text-default uppercase transition-colors">
                                    {feature.title}
                                </p>
                                <p className="mb-8 flex-grow text-[14px] leading-relaxed font-medium text-text-subdued">
                                    {feature.desc}
                                </p>
                                <ArrowRightIcon
                                    size={16}
                                    className="text-primary mt-auto transition-transform duration-300 group-hover:translate-x-2"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </ResponsiveContainer>
        </>
    );
}

function FeatureCard({
    title,
    description,
    onClick,
    className,
}: {
    title: string;
    description: string;
    onClick?: () => void;
    className?: string;
}) {
    return (
        <button
            className={cn(
                'group hover:border-primary flex cursor-default flex-col items-start gap-2 border-l-2 border-primary/60 pl-6 text-left transition-colors duration-300',
                onClick && 'cursor-pointer',
                className,
            )}
            title={title}
            onClick={onClick}
        >
            <p className="text-[13px] leading-tight font-bold tracking-[0.15em] text-text-default uppercase">
                {title}
            </p>
            <p className="text-[14px] leading-relaxed font-medium text-text-subdued">
                {description}
            </p>
            {onClick && (
                <ArrowRightIcon
                    size={14}
                    className="text-primary mt-1 transition-transform duration-300 group-hover:translate-x-1"
                />
            )}
        </button>
    );
}
