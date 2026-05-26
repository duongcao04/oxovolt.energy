import DarkBackground from '@/assets/background/dark-background-02.png';
import Background from '@/assets/background/background-02.png';
import { ResponsiveContainer } from '@/components/layout';
import { SectionTitle } from '../../../../components/ui';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'next-themes';
import { useDevice } from '@/hooks';

export const LastSection = () => {
    const { t } = useTranslation();
    const { isSmallView } = useDevice();

    const { theme } = useTheme();

    return (
        <>
            <ResponsiveContainer
                fillScreen={!isSmallView}
                className="aspect-video size-full h-full min-h-[600px] pt-12 pb-8 md:min-h-[800px] lg:py-0 xl:min-h-[0]"
                backgroundUrl={theme === 'dark' ? DarkBackground : Background}
            >
                <div className="content_container relative flex h-full! flex-col items-start justify-start">
                    {/* Main Content Area */}
                    <div className="mt-20 md:mt-50 lg:mt-40 lg:w-4xl xl:mt-32">
                        <SectionTitle
                            mainText={t('home.last.title_main')}
                            highlightText={t('home.last.title_highlight')}
                            classNames={{
                                highlight: 'text-primary',
                            }}
                        />
                    </div>
                </div>
            </ResponsiveContainer>
        </>
    );
};
