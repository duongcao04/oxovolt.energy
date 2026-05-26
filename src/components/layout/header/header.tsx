import { useLocation, useRouter } from '@tanstack/react-router';
import { LanguageSwitcher } from '../../language-switcher';
import { BurgerMenu } from '../burger-menu/burger-menu';
import { ThemeSwitcher } from './theme-switcher';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useDevice } from '../../../hooks';
import { TopHeader } from './top-header';
import { MenuIcon } from 'lucide-react';
import { Button } from '@heroui/react';
import { APP_CONFIG } from '@/config';
import { cn } from '@/lib/utils';
import { Logo } from './logo';

export const Header = () => {
    const { isSmallView } = useDevice();
    const [isScrolled, setIsScrolled] = useState(false);
    const { t } = useTranslation();

    const pathname = useLocation().pathname;

    const router = useRouter();
    const handleClickLogo = () => {
        if (pathname === '/') {
            // If already on the home page, just scroll smoothly to the top
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        } else {
            // If anywhere else, navigate home and reset scroll
            router.navigate({
                to: '/',
                resetScroll: true,
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            // Set to true if scrolled past 10px, false otherwise
            setIsScrolled(window.scrollY > 10);
        };

        // Listen to the scroll event
        window.addEventListener('scroll', handleScroll);

        // Check initial scroll position on mount
        handleScroll();

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <div
            className={cn(
                'fixed z-50 w-full transition-all duration-300',
                isScrolled
                    ? 'border-border-muted border-b shadow-xs backdrop-blur-md'
                    : 'border-b-0 bg-transparent',
            )}
        >
            <TopHeader />

            <div className="flex h-14 w-full items-center justify-between lg:h-20">
                <div className="content_container flex size-full items-center justify-center gap-2 lg:container lg:justify-start">
                    {APP_CONFIG.showBurgerMenu && (
                        <BurgerMenu
                            trigger={
                                <Button variant="ghost" size="lg">
                                    <MenuIcon className="size-7" />
                                </Button>
                            }
                        />
                    )}

                    <button
                        className="flex w-fit cursor-pointer flex-col items-start justify-center"
                        onClick={handleClickLogo}
                    >
                        <div className="flex w-full items-center justify-start lg:justify-center">
                            <Logo
                                classNames={{
                                    img: 'w-46 lg:h-10.5 lg:w-61',
                                }}
                            />
                        </div>

                        {!isSmallView && (
                            <div className="text-text-default flex w-full items-center justify-start gap-2 text-[9px] font-extrabold uppercase lg:justify-center lg:text-[11px] lg:tracking-[2px]">
                                <span>{t('common.tabs.energy')}</span>
                                <div className="bg-primary mb-[2px] size-1 rounded-full lg:mb-0 lg:size-1.5" />
                                <span>{t('common.tabs.data')}</span>
                                <div className="bg-primary mb-[2px] size-1 rounded-full lg:mb-0 lg:size-1.5" />
                                <span>{t('common.tabs.connectivity')}</span>
                            </div>
                        )}
                    </button>
                </div>

                {!isSmallView && (
                    <div className="mr-4 flex items-center gap-2 lg:mr-8">
                        {APP_CONFIG.darkMode.isEnable && <ThemeSwitcher />}
                        <LanguageSwitcher placement="bottom end" />
                    </div>
                )}
            </div>
        </div>
    );
};
