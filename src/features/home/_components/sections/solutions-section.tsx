import { DiscoverKameleoModal, DiscoverLoopxcellModal } from '@/features/home';
import { SectionSubTitle, SectionTitle } from '../../../../components/ui';
import { ResponsiveContainer } from '@/components/layout';
import { useRouter } from '@tanstack/react-router';
import { useDevice, useDisclosure } from '@/hooks';
import { useTranslation } from 'react-i18next';

export const SolutionsSection = () => {
    const { t } = useTranslation();

    const { isSmallView } = useDevice();

    const router = useRouter();

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
            <ResponsiveContainer
                fillScreen
                className="items-center"
                anchor="our-solutions"
            >
                <div className="flex flex-col justify-center w-full h-full py-12 lg:py-20">
                    <div className="flex flex-col w-full max-w-5xl">
                        <div className="mb-16">
                            {/* Subtitle */}
                            <SectionSubTitle>
                                {t(
                                    'home.solutions.subtitle',
                                    'TWO INFRASTRUCTURE PHILOSOPHIES',
                                )}
                            </SectionSubTitle>
                            <h3 className="mb-4 text-[11px] font-extrabold tracking-[0.15em] text-primary uppercase"></h3>
                            {/* Main Headline */}
                            <SectionTitle
                                mainText={t(
                                    'home.solutions.mainText',
                                    'Choose the solution',
                                )}
                                highlightText={t(
                                    'home.solutions.highlightText',
                                    'that fits your environment.',
                                )}
                            />

                            <p className="max-w-md text-base font-medium leading-relaxed whitespace-pre-line text-zinc-700">
                                {t(
                                    'home.solutions.desc',
                                    'Two complementary approaches.\nOne mission: ensure your continuity.\nYour way.',
                                )}
                            </p>
                        </div>

                        <div className="grid max-w-4xl grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-16">
                            {/* Kameleo Info */}
                            <div className="flex flex-col pl-6 border-l-2 border-primary">
                                <button
                                    onClick={kameleoModal.onOpen}
                                    className="flex items-center gap-2 mb-4 text-lg font-bold uppercase transition-colors cursor-pointer group text-primary hover:text-primary-700 w-fit"
                                >
                                    {t('home.solutions.kameleo.cta', 'KAMELEO')}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-transform group-hover:translate-x-1"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </button>
                                {!isSmallView && (
                                    <p className="text-[15px] leading-relaxed font-medium whitespace-pre-line text-zinc-600">
                                        {t(
                                            'home.solutions.kameleo.desc',
                                            'Modular battery units that seamlessly\nintegrate with your existing energy systems.\nAdd capacity. Stay in control.\nGrow at your pace.',
                                        )}
                                    </p>
                                )}
                            </div>

                            {/* LoopXcell Info */}
                            <div className="flex flex-col pl-6 border-l-2 border-primary">
                                <button
                                    onClick={loopxcellModal.onOpen}
                                    className="flex items-center gap-2 mb-4 text-lg font-bold text-primary uppercase transition-colors cursor-pointer group w-fit hover:text-blue-700"
                                >
                                    {t(
                                        'home.solutions.loopxcell.cta',
                                        'LOOPXCELL',
                                    )}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-transform group-hover:translate-x-1"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m12 5 7 7-7 7" />
                                    </svg>
                                </button>
                                {!isSmallView && (
                                    <p className="text-[15px] leading-relaxed font-medium whitespace-pre-line text-zinc-600">
                                        {t(
                                            'home.solutions.loopxcell.desc',
                                            'All-in-one energy system combining storage,\ninverters and intelligence in a unified,\nimmersed architecture.\nOne system. Maximum autonomy.',
                                        )}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </ResponsiveContainer>
        </>
    );
};
