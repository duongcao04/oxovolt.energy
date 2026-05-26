import {
    ConnectivityContinuityModal,
    DataContinuityModal,
    EnergyContinuityModal,
    LoopXcellConnectivityContinuityModal,
    LoopXcellDataContinuityModal,
    LoopXcellEnergyContinuityModal,
} from '@/features/home';
import { BuiltInInvertersModal } from '../../loopxcell/_components/feature-modals/built-in-inverters-modal';
import { MaximumEnergyModal } from '../../loopxcell/_components/feature-modals/maximum-energy-modal';
import { LoopxcellDatasheetModal } from '../../loopxcell/_components/loopxcell-datasheet-modal';
import { ImmersionCoolingModal } from '../modals/loopxcell-modals/immersion-cooling-modal';
import { ModularModal } from '../../loopxcell/_components/feature-modals/modular-modal';
import { ExtremeModal } from '../../loopxcell/_components/feature-modals/extreme-modal';
import { LOOPXCELL_PERSONAL_CAROUSELS } from '../../_data/loopxcell-data';
import { Button, SectionSubTitle, SectionTitle } from '@/components/ui';
import { KemeleoSeriesModal } from '../modals/kemeleo-series-modal';
import { ResponsiveContainer } from '@/components/layout';
import { UpdatingModal } from '@/features/(updating)';
import { useDisclosure, useModalHash } from '@/hooks';
import { useTranslation } from 'react-i18next';
import { ArrowRightIcon } from 'lucide-react';
import { cn } from '../../../../lib';

export function LoopXcellSeriesSection() {
    const { t } = useTranslation();

    const features1 = t('home.loopxcell_section.features1', {
        returnObjects: true,
    }) as { title: string; desc: string }[];
    const features2 = t('home.loopxcell_section.features2', {
        returnObjects: true,
    }) as { title: string; desc: string }[];

    const personalModalState = useModalHash('loopxcell-discover');
    const updatingModalState = useDisclosure();

    const dataModalState = useModalHash('loopxcell-data-vault');
    const energyModalState = useModalHash('loopxcell-energy-system');
    const connectivityModalState = useModalHash(
        'loopxcell-connectivity-system',
    );

    const dataContinuityModal = useDisclosure();
    const energyContinuityModal = useDisclosure();
    const connectivityContinuityModal = useDisclosure();

    const datasheetModal = useModalHash('loopxcell-datasheet');

    const immersionCoolingModal = useModalHash('immersion-cooling');
    const maximumEnergyModal = useModalHash('maximum-energy-density');
    const extremeModal = useModalHash('extreme-performance');
    const modularModal = useModalHash('modular-architecture');
    const builtInInvertersModal = useModalHash('built-in-inverters');

    const featureModals = [
        maximumEnergyModal,
        extremeModal,
        modularModal,
        builtInInvertersModal,
    ];

    return (
        <>
            {immersionCoolingModal.isOpen && (
                <ImmersionCoolingModal
                    isOpen={immersionCoolingModal.isOpen}
                    onOpenChange={immersionCoolingModal.onOpenChange}
                />
            )}
            {dataContinuityModal.isOpen && (
                <DataContinuityModal
                    isOpen={dataContinuityModal.isOpen}
                    onOpenChange={dataContinuityModal.onOpenChange}
                />
            )}
            {connectivityContinuityModal.isOpen && (
                <ConnectivityContinuityModal
                    isOpen={connectivityContinuityModal.isOpen}
                    onOpenChange={connectivityContinuityModal.onOpenChange}
                />
            )}
            {energyContinuityModal.isOpen && (
                <EnergyContinuityModal
                    isOpen={energyContinuityModal.isOpen}
                    onOpenChange={energyContinuityModal.onOpenChange}
                />
            )}
            {personalModalState.isOpen && (
                <KemeleoSeriesModal
                    isOpen={personalModalState.isOpen}
                    onOpenChange={personalModalState.onOpenChange}
                    carouselData={LOOPXCELL_PERSONAL_CAROUSELS}
                />
            )}
            {updatingModalState.isOpen && (
                <UpdatingModal
                    isOpen={updatingModalState.isOpen}
                    onOpenChange={updatingModalState.onOpenChange}
                />
            )}

            {datasheetModal.isOpen && (
                <LoopxcellDatasheetModal
                    isOpen={datasheetModal.isOpen}
                    onOpenChange={datasheetModal.onOpenChange}
                />
            )}

            {energyModalState.isOpen && (
                <LoopXcellEnergyContinuityModal
                    isOpen={energyModalState.isOpen}
                    onOpenChange={energyModalState.onOpenChange}
                    onCTAClick={() => {
                        energyModalState.onClose();
                        energyContinuityModal.onOpen();
                    }}
                    onSecondaryClick={() => {
                        energyModalState.onClose();
                        datasheetModal.onOpen();
                    }}
                />
            )}

            {connectivityModalState.isOpen && (
                <LoopXcellConnectivityContinuityModal
                    isOpen={connectivityModalState.isOpen}
                    onOpenChange={connectivityModalState.onOpenChange}
                    onCTAClick={() => {
                        connectivityModalState.onClose();
                        connectivityContinuityModal.onOpen();
                    }}
                    onSecondaryClick={() => {
                        connectivityModalState.onClose();
                        datasheetModal.onOpen();
                    }}
                />
            )}

            {dataModalState.isOpen && (
                <LoopXcellDataContinuityModal
                    isOpen={dataModalState.isOpen}
                    onOpenChange={dataModalState.onOpenChange}
                    onCTAClick={() => {
                        dataModalState.onClose();
                        dataContinuityModal.onOpen();
                    }}
                    onSecondaryClick={() => {
                        dataModalState.onClose();
                        datasheetModal.onOpen();
                    }}
                />
            )}

            {maximumEnergyModal.isOpen && (
                <MaximumEnergyModal
                    isOpen={maximumEnergyModal.isOpen}
                    onOpenChange={maximumEnergyModal.onOpenChange}
                />
            )}

            {extremeModal.isOpen && (
                <ExtremeModal
                    isOpen={extremeModal.isOpen}
                    onOpenChange={extremeModal.onOpenChange}
                />
            )}

            {modularModal.isOpen && (
                <ModularModal
                    isOpen={modularModal.isOpen}
                    onOpenChange={modularModal.onOpenChange}
                />
            )}

            {builtInInvertersModal.isOpen && (
                <BuiltInInvertersModal
                    isOpen={builtInInvertersModal.isOpen}
                    onOpenChange={builtInInvertersModal.onOpenChange}
                />
            )}

            <ResponsiveContainer fillScreen anchor="loopXcell-series">
                <div className="size-full">
                    <div className="flex w-full flex-col gap-16 lg:grid lg:grid-cols-[1fr_450px] lg:items-start">
                        {/* Left Column */}
                        <div className="flex w-full flex-col items-start">
                            <SectionSubTitle className="text-primary mb-6 text-xs font-bold tracking-[0.2em]">
                                {t('home.loopxcell_section.tag')}
                            </SectionSubTitle>

                            <SectionTitle
                                mainText={t('home.loopxcell_section.mainText')}
                                highlightText={t(
                                    'home.loopxcell_section.highlightText',
                                )}
                            />

                            <p className="text-text-subdued mt-8 pr-8 text-[15px] leading-relaxed font-medium whitespace-pre-line">
                                {t('home.loopxcell_section.desc')}
                            </p>

                            {/* Short blue divider line */}
                            <div className="bg-primary my-4 h-0.5 w-10 lg:my-8"></div>

                            <div className="flex w-full flex-col items-start justify-center gap-6 lg:flex-row lg:items-center lg:justify-start">
                                <Button
                                    variant="outlinedBox"
                                    onClick={personalModalState.onOpen}
                                    className="bg-primary hover:bg-primary/60 text-white"
                                >
                                    {t('home.loopxcell_section.button')}
                                </Button>
                                <Button
                                    variant="outlinedBox"
                                    onClick={immersionCoolingModal.onOpen}
                                    className="bg-primary hover:bg-primary/60 text-white"
                                >
                                    Immersion Cooling
                                </Button>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-10 pt-2">
                            {features1?.map((feature, idx) => (
                                <FeatureCard
                                    key={idx}
                                    title={feature.title}
                                    description={feature.desc}
                                    onClick={featureModals[idx]?.onOpen}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Bottom Features */}
                    <div className="relative mt-20 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0 lg:mt-32">
                        {[
                            {
                                ...features2[0],
                                onPress: energyContinuityModal.onOpen,
                            },
                            {
                                ...features2[1],
                                onPress: dataContinuityModal.onOpen,
                            },
                            {
                                ...features2[2],
                                onPress: connectivityContinuityModal.onOpen,
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
                                <p className="group-hover:text-primary text-text-default mb-4 text-sm font-bold tracking-[0.15em] whitespace-pre-line uppercase transition-colors">
                                    {feature.title}
                                </p>
                                <p className="text-text-subdued mb-8 flex-grow text-[14px] leading-relaxed font-medium whitespace-pre-line">
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
                'group border-primary flex cursor-default flex-col items-start gap-2 border-l-2 pl-6 text-left transition-colors duration-300',
                onClick && 'cursor-pointer',
                className,
            )}
            title={title}
            onClick={onClick}
        >
            <p className="group-hover:text-primary text-text-default text-[13px] leading-tight font-bold tracking-[0.15em] whitespace-pre-line uppercase transition-colors duration-200">
                {title}
            </p>
            <p className="group-hover:text-primary text-text-subdued text-[14px] leading-relaxed font-medium whitespace-pre-line transition-colors duration-200">
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
