import { Button, SectionSubTitle, SectionTitle } from '@/components/ui';
import { ResponsiveContainer } from '@/components/layout';
import graphic03 from '@/assets/graphic/graphic-03.png';
import { useTranslation } from 'react-i18next';
import { useDevice } from '../../../../hooks';
import { ArrowRightIcon } from 'lucide-react';
import { Separator } from '@heroui/react';
import { cn } from '../../../../lib';
import React, { useState } from 'react';

import { PowerYourActivityModal } from '../modals/professional-continuity-modals/power-your-activity-modal';
import { AutonomousEnergyModal } from '../modals/professional-continuity-modals/autonomous-energy-modal';
import { SecureResilientModal } from '../modals/professional-continuity-modals/secure-resilient-modal';
import { NextGenConnectivityModal } from '../modals/professional-continuity-modals/next-gen-connectivity-modal';
import { PrivateSovereignCloudModal } from '../modals/professional-continuity-modals/private-sovereign-cloud-modal';
import { MultiNodesSplittedFilesModal } from '../modals/professional-continuity-modals/multi-nodes-splitted-files-modal';
import { BuiltForEverydayReliabilityModal } from '../modals/professional-continuity-modals/built-for-everyday-reliability-modal';

export const ProfessionalContinuitySection = () => {
    const { isSmallView } = useDevice();
    const { t } = useTranslation();
    const features = t('home.professional.features', {
        returnObjects: true,
    }) as { title: string; desc: string }[];

    const [activeFeatureIdx, setActiveFeatureIdx] = useState<number | null>(null);

    const handleClose = (open: boolean) => {
        if (!open) setActiveFeatureIdx(null);
    };

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

                    {/* Button */}
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

            {/* Right Column (Approx 40%) */}
            <div className="px-6 lg:px-0">
                <div className="flex w-full flex-col flex-wrap items-start gap-6 pl-2.5 lg:gap-12">
                    {features.map((feature, idx) => {
                        // If index is even (0, 2), align left. If odd (1), align right.
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
                                        onClick={() => setActiveFeatureIdx(idx)}
                                    />
                                </div>

                                {/* Only render the separator if it's NOT the last item */}
                                {isSmallView && idx < features.length - 1 && (
                                    <Separator />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>

            <PowerYourActivityModal isOpen={activeFeatureIdx === 0} onOpenChange={handleClose} />
            <AutonomousEnergyModal isOpen={activeFeatureIdx === 1} onOpenChange={handleClose} />
            <SecureResilientModal isOpen={activeFeatureIdx === 2} onOpenChange={handleClose} />
            <NextGenConnectivityModal isOpen={activeFeatureIdx === 3} onOpenChange={handleClose} />
            <PrivateSovereignCloudModal isOpen={activeFeatureIdx === 4} onOpenChange={handleClose} />
            <MultiNodesSplittedFilesModal isOpen={activeFeatureIdx === 5} onOpenChange={handleClose} />
            <BuiltForEverydayReliabilityModal isOpen={activeFeatureIdx === 6} onOpenChange={handleClose} />
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
