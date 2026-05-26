import {
    useDevice,
    useDisclosure,
    type DisclosureResultProps,
} from '../../../../hooks';
import { DiscoverLoopxcellModal } from '../../loopxcell/_components/discover-loopxcell-modal';
import { DiscoverKameleoModal } from '../../kameleo/_components/discover-kameleo-modal';
import { ArrowRight, CloudIcon, RadioTowerIcon } from 'lucide-react';
import kameleoImg from '@/assets/kameleo-series/02-transparent.png';
import { SectionSubTitle, SectionTitle } from '@/components/ui';
import loopxcellImg from '@/assets/loopxcell-series/01.png';
import { ResponsiveContainer } from '@/components/layout';
import { useRouter } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { Separator } from '@heroui/react';
import { Image } from 'antd';

export const TwoEnergyArchitecturesSection = () => {
    const { t } = useTranslation();

    const router = useRouter();

    const { isSmallView } = useDevice();

    const kameleoModal = useDisclosure();
    const loopxcellModal = useDisclosure();

    return (
        <>
            {kameleoModal.isOpen && (
                <DiscoverKameleoModal
                    isOpen={kameleoModal.isOpen}
                    onOpenChange={kameleoModal.onOpenChange}
                    onDiscover={() => {
                        kameleoModal.onClose();
                        router.navigate({
                            hash: 'kameleo-series',
                        });
                    }}
                />
            )}
            {loopxcellModal.isOpen && (
                <DiscoverLoopxcellModal
                    isOpen={loopxcellModal.isOpen}
                    onOpenChange={loopxcellModal.onOpenChange}
                    onDiscover={() => {
                        loopxcellModal.onClose();
                        router.navigate({
                            hash: 'loopxcell-series',
                        });
                    }}
                />
            )}
            <ResponsiveContainer fillScreen anchor="our-solutions">
                <div className="flex flex-col">
                    {/* Header */}
                    <div className="flex flex-col">
                        <SectionSubTitle className="text-primary text-sm font-bold tracking-widest uppercase">
                            {t('home.architectures.tag')}
                        </SectionSubTitle>
                        <SectionTitle
                            mainText={t('home.architectures.mainText')}
                            highlightText={t(
                                'home.architectures.highlightText',
                            )}
                        />
                        {/* Paragraph */}
                        <p className="mt-5 mb-6 text-left text-sm leading-relaxed font-medium text-text-subdued lg:mt-0 lg:mb-12 lg:max-w-100">
                            {isSmallView
                                ? t('home.architectures.mobileDesc')
                                : t('home.architectures.desc')}
                        </p>
                    </div>

                    {/* Cards */}
                    {!isSmallView && (
                        <DesktopGridCard
                            kameleoModal={kameleoModal}
                            loopXcellModal={loopxcellModal}
                        />
                    )}
                    {isSmallView && (
                        <MobileGridCard
                            kameleoModal={kameleoModal}
                            loopXcellModal={loopxcellModal}
                        />
                    )}

                    {/* Footer Banner */}
                    <div className="mt-8 flex flex-col items-center justify-between gap-8 rounded-2xl md:flex-row lg:mt-12 lg:p-10">
                        <div className="flex items-center md:w-2/3">
                            {!isSmallView && (
                                <>
                                    <div className="text-primary flex shrink-0 flex-col items-center justify-center gap-4">
                                        <CloudIcon
                                            size={isSmallView ? 20 : 36}
                                            strokeWidth={1.5}
                                        />
                                        <RadioTowerIcon
                                            size={isSmallView ? 20 : 36}
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                    <div className="bg-primary mx-5 h-[56px] w-[2px] lg:mx-10 lg:h-[88px]"></div>
                                </>
                            )}
                            <p className="text-xs leading-relaxed font-medium whitespace-pre-wrap text-text-subdued sm:text-base lg:text-sm lg:whitespace-pre-line">
                                {t('home.architectures.footer.textLeft.text1')}
                                <span className="text-primary font-bold">
                                    {t(
                                        'home.architectures.footer.textLeft.text2',
                                    )}
                                </span>
                                {t('home.architectures.footer.textLeft.text3')}
                                <span className="text-primary font-bold">
                                    {t(
                                        'home.architectures.footer.textLeft.text4',
                                    )}
                                </span>
                                {t('home.architectures.footer.textLeft.text5')}
                            </p>
                        </div>

                        {!isSmallView && (
                            <>
                                <div className="bg-primary mx-10 h-[88px] w-[2.25px]"></div>

                                <div className="md:w-1/3">
                                    <p className="text-center text-sm leading-relaxed font-medium text-text-subdued sm:text-base md:text-left">
                                        {t(
                                            'home.architectures.footer.rightText',
                                            'One ecosystem designed for uninterrupted energy.',
                                        )}
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </ResponsiveContainer>
        </>
    );
};

function DesktopGridCard({
    kameleoModal,
    loopXcellModal,
}: {
    kameleoModal: DisclosureResultProps;
    loopXcellModal: DisclosureResultProps;
}) {
    const { t } = useTranslation();
    return (
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            {/* Kameleo Card */}
            <div className="border-primary grid w-full grid-cols-[300px_1fr] items-center gap-8 border-l-2 pl-6 lg:pl-8">
                <div className="flex size-full items-center justify-center">
                    <Image
                        preview={{
                            getContainer: () =>
                                document.querySelector(
                                    '[data-slot="modal-dialog"]',
                                ) || document.body,
                            mask: null,
                        }}
                        src={kameleoImg}
                        alt="OXOVOLT Kameleo SERIES"
                        className="w-full cursor-zoom-in object-contain drop-shadow-2xl"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <h3
                        className="group hover:text-primary flex cursor-pointer items-center gap-2 text-2xl font-bold transition-colors"
                        onClick={kameleoModal.onOpen}
                    >
                        {t('home.architectures.kameleo.tag', 'KAMELEO')}
                        <ArrowRight
                            className="text-primary transition-transform group-hover:translate-x-1"
                            size={24}
                        />
                    </h3>
                    <p className="text-primary text-xs font-bold tracking-[0.15em] uppercase">
                        {t(
                            'home.architectures.kameleo.subtitle',
                            'MODULAR & RETROFIT',
                        )}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed font-medium whitespace-pre-line text-text-subdued">
                        {t(
                            'home.architectures.kameleo.desc',
                            'Battery-only architecture designed to integrate\nwith your existing energy system.\n\nNo inverter. No solar charger.\nPure storage. Total flexibility.',
                        )}
                    </p>
                </div>
            </div>

            {/* LoopXcell Card */}
            <div className="border-primary grid w-full grid-cols-[300px_1fr] items-center gap-8 border-l-2 pl-6 lg:pl-8">
                <div className="flex size-full items-center justify-center">
                    <Image
                        preview={{
                            getContainer: () =>
                                document.querySelector(
                                    '[data-slot="modal-dialog"]',
                                ) || document.body,
                            mask: null,
                        }}
                        src={loopxcellImg}
                        alt="OXOVOLT LoopXcell SERIES"
                        className="w-full cursor-zoom-in object-contain drop-shadow-2xl"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <h3
                        className="group hover:text-primary flex cursor-pointer items-center gap-2 text-2xl font-bold transition-colors"
                        onClick={loopXcellModal.onOpen}
                    >
                        {t('home.architectures.loopxcell.tag', 'LOOPXCELL')}
                        <ArrowRight
                            className="text-primary transition-transform group-hover:translate-x-1"
                            size={24}
                        />
                    </h3>
                    <p className="text-primary text-xs font-bold tracking-[0.15em] uppercase">
                        {t(
                            'home.architectures.loopxcell.subtitle',
                            'ALL-IN-ONE & AUTONOMOUS',
                        )}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed font-medium whitespace-pre-line text-text-subdued">
                        {t(
                            'home.architectures.loopxcell.desc',
                            'An integrated energy system combining storage, power conversion, intelligence and backup in a single unified architecture.\n\nDesigned for maximum autonomy.',
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}

function MobileGridCard({
    kameleoModal,
    loopXcellModal,
}: {
    kameleoModal: DisclosureResultProps;
    loopXcellModal: DisclosureResultProps;
}) {
    const { t } = useTranslation();

    return (
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
            {/* Kameleo Card */}
            <div className="border-primary items-center border-l-2 pl-6 lg:pl-8">
                <div className="flex flex-col gap-3">
                    <h3
                        className="group hover:text-primary flex cursor-pointer items-center gap-2 text-2xl font-bold transition-colors"
                        onClick={kameleoModal.onOpen}
                    >
                        {t('home.architectures.kameleo.tag', 'KAMELEO')}
                        <ArrowRight
                            className="text-primary transition-transform group-hover:translate-x-1"
                            size={24}
                        />
                    </h3>
                    <p className="text-primary text-xs font-bold tracking-[0.15em] uppercase">
                        {t(
                            'home.architectures.kameleo.subtitle',
                            'MODULAR & RETROFIT',
                        )}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed font-medium whitespace-pre-line text-text-subdued">
                        {t(
                            'home.architectures.kameleo.desc',
                            'Battery-only architecture designed to integrate\nwith your existing energy system.\n\nNo inverter. No solar charger.\nPure storage. Total flexibility.',
                        )}
                    </p>
                </div>
            </div>

            {/* Separator - Hidden on medium+ screens so it doesn't break the 2-column grid */}
            <div className="md:hidden">
                <Separator />
            </div>

            {/* LoopXcell Card */}
            <div className="border-primary items-center border-r-2 pr-6 lg:pr-8">
                {/* TEXT: Takes full width when image is hidden, adds left padding only when divider is visible */}
                <div className="flex flex-col gap-3 text-wrap">
                    <h3
                        className="group hover:text-primary flex cursor-pointer items-center gap-2 text-2xl font-bold transition-colors"
                        onClick={loopXcellModal.onOpen}
                    >
                        {t('home.architectures.loopxcell.tag', 'LOOPXCELL')}
                        <ArrowRight
                            className="text-primary transition-transform group-hover:translate-x-1"
                            size={24}
                        />
                    </h3>
                    <p className="text-primary text-xs font-bold tracking-[0.15em] uppercase">
                        {t(
                            'home.architectures.loopxcell.subtitle',
                            'ALL-IN-ONE & AUTONOMOUS',
                        )}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed font-medium whitespace-pre-line text-text-subdued">
                        {t(
                            'home.architectures.loopxcell.desc',
                            'An integrated energy system combining storage, power conversion, intelligence and backup in a single unified architecture.\n\nDesigned for maximum autonomy.',
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}
