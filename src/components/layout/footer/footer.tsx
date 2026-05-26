import { LoopxcellDatasheetModal } from '../../../features/home/loopxcell/_components/loopxcell-datasheet-modal';
import { AboutModal } from '../../../features/home/_components/modals/about-modal';
import { LanguageSwitcher } from '../../language-switcher';
import { useDevice, useDisclosure, useModalHash } from '../../../hooks';
import { ThemeSwitcher } from '../header/theme-switcher';
import { useTranslation } from 'react-i18next';
import { APP_CONFIG } from '../../../config';

export const Footer = () => {
    const { t } = useTranslation();
    const { isSmallView } = useDevice();

    const aboutModal = useModalHash('about-oxovolt');
    const datasheetModal = useDisclosure();

    return (
        <>
            {aboutModal.isOpen && (
                <AboutModal
                    isOpen={aboutModal.isOpen}
                    onOpenChange={aboutModal.onOpenChange}
                    onOpenLoopXcellDatasheet={() => {
                        aboutModal.onClose();
                        datasheetModal.onOpen();
                    }}
                />
            )}
            {datasheetModal.isOpen && (
                <LoopxcellDatasheetModal
                    isOpen={datasheetModal.isOpen}
                    onOpenChange={datasheetModal.onOpenChange}
                />
            )}
            <footer className="text-text-default bg-[#f7f7f7] pb-20 dark:bg-[#1c1c1d]">
                <div className="content_container flex w-full flex-col items-center justify-center pt-7 md:px-12">
                    <button
                        className="group flex cursor-pointer flex-col items-center p-4"
                        aria-label="Scroll to About section"
                        onClick={aboutModal.onOpen}
                    >
                        <span className="text-text-default mb-1.5 text-base font-bold tracking-[0.2em] uppercase lg:text-lg">
                            {t('home.last.about')}
                        </span>
                        {/* Expanding underline animation on hover */}
                        <div className="bg-primary h-[2px] w-full origin-center scale-x-50 transform transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
                    </button>

                    {isSmallView && (
                        <div className="flex flex-col items-center justify-center gap-3">
                            {APP_CONFIG.darkMode.isEnable && <ThemeSwitcher />}
                            <LanguageSwitcher placement="top" />
                        </div>
                    )}

                    {/* <a
                        href="https://wa.me/32455130162"
                        aria-label="Contact us on WhatsApp"
                        target="_blank"
                    >
                        <Button variant="outline" className="mt-4">
                            <WhatsappFillIcon
                                className="size-6"
                                style={{ color: '#25d366' }}
                            />
                            <p className="text-xs lg:text-sm">
                                Contact via Whatsapp
                            </p>
                        </Button>
                    </a> */}
                </div>
            </footer>
        </>
    );
};
