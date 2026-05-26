import LoopXcellImage from '@/assets/loopxcell-series/01.png';
import { Check, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from '@tanstack/react-router';
import { cn, ECOSYSTEM_URLS } from '@/lib';
import { Button } from '@/components/ui';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { Image } from 'antd';

export function DiscoverLoopxcellModal({
    isOpen,
    onOpenChange,
    onDiscover,
}: {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onDiscover?: () => void;
}) {
    const { isSmallView } = useDevice();
    const { t } = useTranslation();

    const footerContent = (
        <div className="flex w-full items-center justify-center gap-3 border-t border-zinc-200/60 pt-6 text-center lg:text-left">
            <ShieldCheck
                className="flex-shrink-0 text-zinc-400"
                size={24}
                strokeWidth={1.5}
            />
            <div className="flex w-full items-center justify-center lg:justify-start">
                <p className="text-sm text-zinc-600">
                    {t('home.solutions.disclaimer_start')}
                    <Link
                        to={ECOSYSTEM_URLS.boltarium}
                        target="_blank"
                        className="text-primary! z-10 -mx-7 -my-5 px-7 py-5 font-semibold transition-colors duration-300 hover:text-[#c11c83]!"
                    >
                        <span className="font-bold">
                            {t('home.solutions.disclaimer_link')}
                            {t('home.solutions.disclaimer_middle')}
                        </span>
                    </Link>
                    {t('home.solutions.disclaimer_end')}
                </p>
            </div>
        </div>
    );

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container {...(isSmallView && { size: 'full' })}>
                    <Modal.Dialog
                        className={cn(
                            'overflow-hidden border border-border-default bg-[#F5F7FA] p-0 shadow-2xl lg:p-8',
                            isSmallView
                                ? 'rounded-none'
                                : 'max-w-225 rounded-[32px]',
                        )}
                    >
                        <Modal.CloseTrigger />

                        <Modal.Body className="mt-0 overflow-x-hidden bg-transparent p-8 lg:p-10">
                            <div className="grid w-full flex-1 grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">
                                {/* Left Column */}
                                <div className="flex flex-col justify-center">
                                    <span className="mb-4 text-xs font-extrabold tracking-[0.15em] text-primary uppercase">
                                        {t(
                                            'loopxcell.discover.tag',
                                            'LOOPXCELL SERIES',
                                        )}
                                    </span>
                                    <h2 className="mb-8 text-4xl leading-[1.1] font-extrabold text-zinc-900 lg:text-[44px]">
                                        {t(
                                            'loopxcell.discover.title',
                                            'Integrated\ncontinuity\nenvironment.',
                                        )}
                                    </h2>
                                    <p className="mb-10 max-w-sm text-base leading-relaxed whitespace-pre-line text-zinc-700">
                                        {t(
                                            'loopxcell.discover.desc',
                                            'All-in-one energy system combining storage,\ninverters and intelligence in a unified,\nimmersed architecture.\nOne system. Maximum autonomy.',
                                        )}
                                    </p>

                                    <div className="mb-10 flex flex-col gap-4">
                                        {[
                                            t(
                                                'loopxcell.discover.features.1',
                                                'All-in-one integration',
                                            ),
                                            t(
                                                'loopxcell.discover.features.2',
                                                'Maximum safety & performance',
                                            ),
                                            t(
                                                'loopxcell.discover.features.3',
                                                'Optimized thermal management',
                                            ),
                                            t(
                                                'loopxcell.discover.features.4',
                                                'Built for long-term independence',
                                            ),
                                        ].map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-3"
                                            >
                                                <Check
                                                    className="flex-shrink-0 text-primary"
                                                    size={18}
                                                    strokeWidth={3}
                                                />
                                                <span className="font-bold text-zinc-800">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        variant="ghostArrow"
                                        onPress={onDiscover}
                                    >
                                        {t('home.solutions.loopxcell.button')}
                                    </Button>
                                </div>

                                {/* Right Column - Image */}
                                <div className="flex items-center justify-center">
                                    <Image
                                        preview={{
                                            getContainer: () =>
                                                document.querySelector(
                                                    '[data-slot="modal-dialog"]',
                                                ) || document.body,
                                        }}
                                        src={LoopXcellImage}
                                        alt="OXOVOLT LoopXcell SERIES"
                                        className="w-full cursor-zoom-in object-contain drop-shadow-2xl lg:scale-110"
                                    />
                                </div>
                            </div>

                            {isSmallView && (
                                <div className="mt-12 w-full">
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
}
