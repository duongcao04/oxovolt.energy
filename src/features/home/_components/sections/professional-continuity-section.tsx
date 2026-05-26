import { Button, SectionSubTitle, SectionTitle } from '@/components/ui';
import { useDevice, useModalHash } from '../../../../hooks';
import { ResponsiveContainer } from '@/components/layout';
import graphic03 from '@/assets/graphic/graphic-03.png';
import { useTranslation } from 'react-i18next';
import { ArrowRightIcon } from 'lucide-react';
import { Separator } from '@heroui/react';
import { cn } from '../../../../lib';
import React from 'react';

import { BuiltForEverydayReliabilityModal } from '../modals/professional-continuity-modals/built-for-everyday-reliability-modal';
import { MultiNodesSplittedFilesModal } from '../modals/professional-continuity-modals/multi-nodes-splitted-files-modal';
import { PrivateSovereignCloudModal } from '../modals/professional-continuity-modals/private-sovereign-cloud-modal';
import { NextGenConnectivityModal } from '../modals/professional-continuity-modals/next-gen-connectivity-modal';
import { PowerYourActivityModal } from '../modals/professional-continuity-modals/power-your-activity-modal';
import { AutonomousEnergyModal } from '../modals/professional-continuity-modals/autonomous-energy-modal';
import { SecureResilientModal } from '../modals/professional-continuity-modals/secure-resilient-modal';
import { SimpleProcessModal } from '../modals/professional-continuity-modals/simple-process-modal';
import { useRouter } from '@tanstack/react-router';

export const ProfessionalContinuitySection = () => {
    const router = useRouter();
    const { isSmallView } = useDevice();
    const { t } = useTranslation();
    const features = t('home.professional.features', {
        returnObjects: true,
    }) as { title: string; desc: string }[];

    const powerYourActivityModal = useModalHash('power-your-activity');
    const simpleProcessModal = useModalHash('simple-process');
    const autonomousEnergyModal = useModalHash('autonomous-energy');
    const secureResilientModal = useModalHash('secure-resilient');
    const nextGenConnectivityModal = useModalHash('next-gen-connectivity');
    const privateSovereignCloudModal = useModalHash('private-sovereign-cloud');
    const multiNodesSplittedFilesModal = useModalHash(
        'multi-nodes-splitted-files',
    );
    const builtForEverydayModal = useModalHash(
        'built-for-everyday-reliability',
    );

    const featureModals = [
        powerYourActivityModal,
        autonomousEnergyModal,
        secureResilientModal,
        nextGenConnectivityModal,
        privateSovereignCloudModal,
        multiNodesSplittedFilesModal,
        builtForEverydayModal,
    ];

    return (
        <ResponsiveContainer
            fillScreen
            anchor="environment"
            className="relative px-0 lg:grid lg:grid-cols-[1fr_450px] lg:items-start"
        >
            <div className="flex flex-1 flex-col justify-center lg:mt-20">
                <AbsoluteGraphic />
                <div className="px-6 lg:px-11">
                    {/* Virtual same place button with section 1 */}
                    {!isSmallView && <div className="h-70" />}
                    {/* Subtitle */}
                    <SectionSubTitle>
                        {t('home.professional.tag')}
                    </SectionSubTitle>
                    {/* Main Headline */}
                    <SectionTitle
                        mainText={t('home.professional.mainText')}
                        highlightText={t('home.professional.highlightText')}
                    />
                    <div className="text-text-subdued max-w-lg space-y-4 text-sm leading-relaxed font-medium whitespace-pre-line sm:text-base">
                        {isSmallView
                            ? t('home.professional.mobileDesc')
                            : t('home.professional.desc')}
                    </div>
                    {/* Short blue divider line */}
                    <div className="bg-primary my-4 h-0.5 w-10 lg:mt-12 lg:mb-8 lg:w-50"></div>
                    {/* Button */}{' '}
                    <div className="flex w-full flex-col items-start justify-center gap-6 lg:flex-row lg:items-center lg:justify-start">
                        <Button
                            variant="outlinedBox"
                            onClick={simpleProcessModal.onOpen}
                            className="bg-primary hover:bg-primary/60 text-white"
                        >
                            Simple Process
                        </Button>

                        <Button
                            variant="outlinedBox"
                            linkProps={{
                                hash: 'professional-practices',
                            }}
                            arrowType="down"
                        >
                            {t('home.professional.cta')}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Right Column (Approx 40%) */}
            <div className="px-6 lg:px-0">
                <div className="flex w-full flex-col flex-wrap items-start gap-6 pl-2.5 lg:gap-12">
                    {features.map((feature, idx) => {
                        const alignmentClass = isSmallView
                            ? idx % 2 === 0
                                ? 'self-start'
                                : 'self-end'
                            : 'w-full';
                        const wrapperClass = isSmallView
                            ? idx % 2 === 0
                                ? 'border-r-0 border-l-2 pl-6'
                                : 'border-l-0 border-r-2 pr-6'
                            : '';
                        return (
                            <React.Fragment key={idx}>
                                <div className={alignmentClass}>
                                    <FeatureCard
                                        className={cn(wrapperClass)}
                                        title={feature.title}
                                        description={feature.desc}
                                        onClick={featureModals[idx]?.onOpen}
                                    />
                                </div>

                                {isSmallView && idx < features.length - 1 && (
                                    <Separator />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>

            <PowerYourActivityModal
                isOpen={powerYourActivityModal.isOpen}
                onOpenChange={powerYourActivityModal.onOpenChange}
            />
            <SimpleProcessModal
                isOpen={simpleProcessModal.isOpen}
                onOpenChange={simpleProcessModal.onOpenChange}
                onGetStartedNowClick={() => {
                    simpleProcessModal.onClose();
                    router.navigate({
                        hash: 'get-started-now',
                    });
                }}
            />
            <AutonomousEnergyModal
                isOpen={autonomousEnergyModal.isOpen}
                onOpenChange={autonomousEnergyModal.onOpenChange}
            />
            <SecureResilientModal
                isOpen={secureResilientModal.isOpen}
                onOpenChange={secureResilientModal.onOpenChange}
            />
            <NextGenConnectivityModal
                isOpen={nextGenConnectivityModal.isOpen}
                onOpenChange={nextGenConnectivityModal.onOpenChange}
            />
            <PrivateSovereignCloudModal
                isOpen={privateSovereignCloudModal.isOpen}
                onOpenChange={privateSovereignCloudModal.onOpenChange}
            />
            <MultiNodesSplittedFilesModal
                isOpen={multiNodesSplittedFilesModal.isOpen}
                onOpenChange={multiNodesSplittedFilesModal.onOpenChange}
            />
            <BuiltForEverydayReliabilityModal
                isOpen={builtForEverydayModal.isOpen}
                onOpenChange={builtForEverydayModal.onOpenChange}
            />
        </ResponsiveContainer>
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
    onClick?: () => void;
    className?: string;
}) {
    return (
        <button
            className={cn(
                'group hover:text-primary border-primary flex cursor-pointer flex-col items-start gap-2 border-l-2 p-2 pl-6 text-left transition-colors duration-300',
                className,
            )}
            title={title}
            onClick={onClick}
        >
            <p className="text-sm leading-tight font-bold tracking-widest uppercase">
                {title}
            </p>
            <p className="text-xs lg:text-sm">{description}</p>
            {onClick && (
                <ArrowRightIcon
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                />
            )}
        </button>
    );
}

function AbsoluteGraphic() {
    return (
        <div className="flex w-full flex-col justify-center lg:absolute lg:top-0 lg:left-0 lg:ml-6 lg:w-[calc(100%-500px)]">
            <img
                src={graphic03}
                alt="Oxovolt Performance Chart"
                className="h-auto w-full object-contain"
            />
        </div>
    );
}
