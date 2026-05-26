import { ConnectivityContinuityModal } from '../modals/connectivity-continuty-modal';
import { SecureYourPracticeModal } from '../modals/secure-your-practice.modal';
import { EnergyContinuityModal } from '../modals/energy-continuity-modal';
import { Button, SectionSubTitle, SectionTitle } from '@/components/ui';
import OxovoltBattery from '@/assets/batteries/v1-oxovolt-battery.png';
import { DataContinuityModal } from '../modals/data-continuity-modal';
import { ResponsiveContainer } from '@/components/layout';
// import graphic02 from '@/assets/graphic/graphic-02.png';
// import graphic01 from '@/assets/graphic/graphic-01.png';
import { useDevice, useModalHash } from '@/hooks';
import { useTranslation } from 'react-i18next';
import { Separator } from '@heroui/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../../../lib';
import { Image } from 'antd';

export const HeroSection = () => {
    const { t } = useTranslation();
    const { isSmallView } = useDevice();

    const secureModal = useModalHash('secure-your-practice');
    const dataModal = useModalHash('data-continuity');
    const energyModal = useModalHash('energy-continuity');
    const connectivityModal = useModalHash('connectivity-continuity');

    return (
        <>
            {secureModal.isOpen && (
                <SecureYourPracticeModal
                    isOpen={secureModal.isOpen}
                    onOpenChange={secureModal.onOpenChange}
                />
            )}
            {dataModal.isOpen && (
                <DataContinuityModal
                    isOpen={dataModal.isOpen}
                    onOpenChange={dataModal.onOpenChange}
                />
            )}
            {connectivityModal.isOpen && (
                <ConnectivityContinuityModal
                    isOpen={connectivityModal.isOpen}
                    onOpenChange={connectivityModal.onOpenChange}
                />
            )}
            {energyModal.isOpen && (
                <EnergyContinuityModal
                    isOpen={energyModal.isOpen}
                    onOpenChange={energyModal.onOpenChange}
                />
            )}
            <ResponsiveContainer fillScreen className="relative px-0">
                <div
                    className={cn(
                        'w-full max-w-4xl',
                        'px-0 py-6 lg:px-10 xl:py-16',
                    )}
                >
                    <div className="px-6 lg:px-0">
                        {/* Subtitle */}
                        <SectionSubTitle>
                            {t('home.hero.subtitle')}
                        </SectionSubTitle>
                        {/* Main Headline */}
                        <SectionTitle
                            mainText={t('home.hero.mainText')}
                            highlightText={t('home.hero.highlightText')}
                            isBlock={false}
                        />

                        {/* Short blue divider line */}
                        {isSmallView && (
                            <div className="bg-primary my-4 h-0.5 w-10 lg:my-8"></div>
                        )}

                        {/* Tagline */}
                        <p className="text-text-default text-center text-base font-bold tracking-tight sm:text-[28px] md:text-left lg:text-2xl">
                            {t('home.hero.tagline')}
                        </p>

                        {/* Short blue divider line */}
                        {!isSmallView && (
                            <div className="bg-primary my-4 h-0.5 w-10 lg:my-8"></div>
                        )}

                        {/* Paragraph */}
                        <p className="text-text-subdued mt-5 mb-6 text-center text-sm leading-relaxed font-medium sm:text-base md:text-left lg:mt-0 lg:mb-12 lg:max-w-130">
                            {isSmallView
                                ? t('home.hero.mobileDesc')
                                : t('home.hero.desc')}
                        </p>
                    </div>

                    {/* Chart Graphic - Responsive Absolute on Desktop */}
                    {/* <ChartGraphic /> */}
                    <OxovoltBatteryImage />

                    {/* Feature Icons Row */}
                    {!isSmallView && (
                        <div className="mb-12 grid max-w-4xl grid-cols-3 items-start gap-8">
                            <FeatureCard
                                title={t('home.hero.features.energy.title')}
                                description={t(
                                    'home.hero.features.energy.desc',
                                )}
                                onClick={energyModal.onOpen}
                            />

                            <FeatureCard
                                title={t('home.hero.features.data.title')}
                                description={t('home.hero.features.data.desc')}
                                onClick={dataModal.onOpen}
                            />

                            <FeatureCard
                                title={t(
                                    'home.hero.features.connectivity.title',
                                )}
                                description={t(
                                    'home.hero.features.connectivity.desc',
                                )}
                                onClick={connectivityModal.onOpen}
                            />
                        </div>
                    )}

                    {!isSmallView && (
                        <div className="flex w-full flex-col items-center justify-center gap-6 lg:flex-row lg:justify-start">
                            <Button
                                variant="outlinedBox"
                                onClick={secureModal.onOpen}
                                className="bg-primary hover:bg-primary/60 text-white"
                            >
                                {t('home.hero.button')}
                            </Button>
                            <Button
                                variant="outlinedBox"
                                linkProps={{
                                    hash: 'environment',
                                }}
                                arrowType="down"
                            >
                                {t('home.hero.secondButton')}
                            </Button>
                        </div>
                    )}

                    <div className="px-6 lg:px-0">
                        {isSmallView && (
                            <div className="mt-8 flex w-full flex-col gap-6 pl-2.5 lg:mt-12">
                                <FeatureCard
                                    title={t('home.hero.features.energy.title')}
                                    description={t(
                                        'home.hero.features.energy.desc',
                                    )}
                                    onClick={energyModal.onOpen}
                                />

                                <Separator />
                                <FeatureCard
                                    title={t('home.hero.features.data.title')}
                                    description={t(
                                        'home.hero.features.data.desc',
                                    )}
                                    onClick={dataModal.onOpen}
                                />

                                <Separator />
                                <FeatureCard
                                    title={t(
                                        'home.hero.features.connectivity.title',
                                    )}
                                    description={t(
                                        'home.hero.features.connectivity.desc',
                                    )}
                                    onClick={connectivityModal.onOpen}
                                />
                            </div>
                        )}

                        {isSmallView && (
                            <div className="mt-10 flex w-full flex-col items-start justify-center gap-6 lg:flex-row lg:justify-start">
                                <Button
                                    variant="outlinedBox"
                                    onClick={secureModal.onOpen}
                                    className="bg-primary hover:bg-primary/60 text-white"
                                >
                                    {t('home.hero.button')}
                                </Button>
                                <Button
                                    variant="outlinedBox"
                                    linkProps={{
                                        hash: 'environment',
                                    }}
                                    arrowType="down"
                                >
                                    {t('home.hero.secondButton')}
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
                <div />
            </ResponsiveContainer>
        </>
    );
};

function FeatureCard({
    title,
    description,
    onClick,
    className,
}: {
    title: string;
    description: string;
    onClick: () => void;
    className?: string;
}) {
    const { isSmallView } = useDevice();
    return (
        <button
            className={cn(
                'group hover:text-primary border-primary flex cursor-pointer flex-col items-start gap-2 border-l-2 p-2 pl-6 text-left transition-colors duration-300',
                isSmallView && 'grid grid-cols-[1fr_44px] items-center gap-5',
                className,
            )}
            title={title}
            onClick={onClick}
        >
            <div className="space-y-1">
                <p className="text-primary text-sm leading-tight font-bold tracking-widest uppercase">
                    {title}
                </p>
                <p className="text-xs lg:text-sm">{description}</p>
            </div>
            <ArrowRight
                size={isSmallView ? 20 : 14}
                className={cn(
                    'transition-transform duration-300 group-hover:translate-x-1',
                    isSmallView && 'text-primary',
                )}
            />
        </button>
    );
}

// function ChartGraphic() {
//     const { t } = useTranslation();
//     return (
//         <div className="my-8 flex w-full flex-col justify-center lg:absolute lg:top-1/2 lg:right-0 lg:my-0 lg:w-[600px] lg:-translate-y-1/2 lg:pb-20 xl:right-0 xl:w-[700px]">
//             <div className="relative w-full max-w-[500px] lg:max-w-none">
//                 <img
//                     src={graphic01}
//                     alt="Oxovolt Performance Chart"
//                     className="h-auto w-full object-contain"
//                 />

//                 {/* CLASSIC Text */}
//                 <div className="absolute bottom-0 left-[20px] lg:top-[30%] lg:left-0">
//                     <p className="text-text-default text-[11px] font-bold tracking-widest uppercase sm:text-xs">
//                         {t('home.hero.chart.classic.title')}
//                     </p>
//                     <p className="text-text-subdued mb-8 text-[10px] leading-relaxed whitespace-pre-line sm:text-[11px]">
//                         {t('home.hero.chart.classic.desc')}
//                     </p>
//                 </div>
//             </div>

//             <div className="relative mt-32 w-full max-w-[500px] lg:mt-56 lg:max-w-none">
//                 <img
//                     src={graphic02}
//                     alt="Oxovolt Performance Chart"
//                     className="h-auto w-full object-contain"
//                 />
//                 {/* OXOVOLT Text */}
//                 <div className="absolute bottom-0 left-[20px] lg:bottom-[18%] lg:left-0">
//                     <p className="text-primary text-[11px] font-bold tracking-widest uppercase sm:text-xs">
//                         {t('home.hero.chart.oxovolt.title')}
//                     </p>
//                     <p className="text-text-subdued mb-8 text-[10px] leading-relaxed whitespace-pre-line sm:text-[11px]">
//                         {t('home.hero.chart.oxovolt.desc')}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// }

function OxovoltBatteryImage() {
    return (
        <div className="flex w-full flex-col items-center justify-center lg:absolute lg:top-1/2 lg:right-0 lg:my-0 lg:w-[550px] lg:-translate-y-1/2 lg:pb-20 xl:right-0 xl:w-[550px]">
            <Image
                preview={{
                    getContainer: () =>
                        document.querySelector('[data-slot="modal-dialog"]') ||
                        document.body,
                    mask: null,
                }}
                src={OxovoltBattery}
                alt="OXOVOLT Battery"
                rootClassName="w-[200px] lg:w-full"
                className="cursor-zoom-in object-contain drop-shadow-2xl lg:scale-110"
            />
        </div>
    );
}
