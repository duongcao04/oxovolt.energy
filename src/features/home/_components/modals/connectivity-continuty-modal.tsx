import { useTranslation } from 'react-i18next';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { cn } from '@/lib';

type ConnectivityContinuityModalProps = {
    isOpen: boolean;
    onOpenChange: (state: boolean) => void;
};

export const ConnectivityContinuityModal = ({
    isOpen,
    onOpenChange,
}: ConnectivityContinuityModalProps) => {
    const { t } = useTranslation();
    const { isSmallView } = useDevice();

    const features = t('home.hero.modal.connectivity.features', {
        returnObjects: true,
    }) as { title: string; desc: string }[];
    const tabs = t('home.hero.modal.connectivity.tabs', {
        returnObjects: true,
    }) as string[];

    const footerContent = (
        <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-4 pt-4 text-xs font-bold md:gap-x-8 lg:pt-0">
            {tabs.map((tab, idx) => (
                <div key={tab} className="flex items-center gap-4 md:gap-8">
                    <button
                        className={cn(
                            'tracking-widest text-text-default uppercase transition-colors hover:text-primary',
                        )}
                    >
                        {tab}
                    </button>
                    {idx < tabs.length - 1 && (
                        <div className="hidden h-3.5 w-[1px] bg-gray-300 md:block"></div>
                    )}
                </div>
            ))}
        </div>
    );

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container {...(isSmallView && { size: 'full' })}>
                    <Modal.Dialog
                        className={cn(
                            'overflow-hidden border border-border-default bg-background p-0 shadow-2xl lg:p-8',
                            isSmallView
                                ? 'rounded-none'
                                : 'max-w-300 rounded-[32px]',
                        )}
                    >
                        <Modal.CloseTrigger />

                        <Modal.Body className="mt-0 overflow-x-hidden bg-transparent p-8 whitespace-pre-line lg:p-10">
                            <div className="grid w-full flex-1 grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
                                {/* Left Column */}
                                <div className="flex flex-col justify-center">
                                    <h3 className="mb-4 text-xs font-extrabold tracking-[0.15em] text-primary uppercase">
                                        {t('home.hero.modal.connectivity.tag')}
                                    </h3>
                                    <h2 className="mb-8 text-4xl leading-[1.1] font-extrabold lg:text-[44px]">
                                        <span className="block text-text-default">
                                            {t(
                                                'home.hero.modal.connectivity.mainText',
                                            )}
                                        </span>
                                        <span className="block text-primary">
                                            {t(
                                                'home.hero.modal.connectivity.highlightText',
                                            )}
                                        </span>
                                    </h2>
                                    <p className="mb-8 max-w-md text-base leading-relaxed text-text-subdued">
                                        {t('home.hero.modal.connectivity.desc')}
                                    </p>
                                    <p className="text-base font-bold text-text-default">
                                        {' '}
                                        {t(
                                            'home.hero.modal.connectivity.subtitle',
                                        )}
                                    </p>
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col justify-center divide-y divide-border-default">
                                    {features.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="py-4 first:pt-0 last:pb-0"
                                        >
                                            <div className="flex items-start gap-4 border-l-2 border-primary py-1 pl-4">
                                                <div>
                                                    <h4 className="mb-1 text-base font-bold text-text-default">
                                                        {item.title}
                                                    </h4>
                                                    <p className="max-w-sm text-sm leading-relaxed text-text-subdued">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {isSmallView && (
                                <div className="mt-12 w-full border-t border-zinc-200/60 pt-6">
                                    {footerContent}
                                </div>
                            )}
                        </Modal.Body>

                        {!isSmallView && (
                            <Modal.Footer className="bg-transparent px-10 pt-6 pb-4">
                                {footerContent}
                            </Modal.Footer>
                        )}
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};
