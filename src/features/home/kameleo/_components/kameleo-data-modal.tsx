import KameleoImage from '@/assets/kameleo-series/02-transparent.png';
import { useTranslation } from 'react-i18next';
import { Logo } from '@/components/layout';
import { ArrowRight } from 'lucide-react';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { Image } from 'antd';

export function KameleoDataModal({
    isOpen,
    onOpenChange,
    onDiscoverSeries,
}: {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onDiscoverSeries: () => void;
}) {
    const { isSmallView } = useDevice();
    const { t } = useTranslation();

    const footerContent = (
        <div className="flex w-full flex-col items-center justify-between gap-6 rounded-2xl border border-zinc-200 bg-background p-4 shadow-sm lg:flex-row lg:gap-0 lg:p-6">
            {/* Left section (Title + Desc) */}
            <div className="flex w-full flex-col pl-0 text-center lg:w-[240px] lg:pl-2 lg:text-left">
                <h4 className="mb-1 text-[11px] font-extrabold tracking-wider whitespace-pre-line text-zinc-900 uppercase">
                    {t('kameleo.data.footer.tag')}
                </h4>
                <p className="text-[10px] leading-snug whitespace-pre-line text-zinc-600">
                    {t('kameleo.data.footer.desc')}
                </p>
            </div>

            {/* Middle section (4 columns) */}
            <div className="grid w-full grid-cols-2 gap-4 px-0 lg:flex lg:flex-1 lg:items-center lg:justify-between lg:gap-0 lg:px-6">
                {[
                    {
                        title: t('kameleo.data.footer.always_available.title'),
                        desc: t('kameleo.data.footer.always_available.desc'),
                    },
                    {
                        title: t('kameleo.data.footer.secure.title'),
                        desc: t('kameleo.data.footer.secure.desc'),
                    },
                    {
                        title: t('kameleo.data.footer.reliable.title'),
                        desc: t('kameleo.data.footer.reliable.desc'),
                    },
                    {
                        title: t('kameleo.data.footer.peace_of_mind.title'),
                        desc: t('kameleo.data.footer.peace_of_mind.desc'),
                    },
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className="border-l-2 border-blue-700 py-0.5 pl-3"
                    >
                        <h5 className="mb-1 text-[9px] font-bold tracking-wider text-blue-700 uppercase">
                            {item.title}
                        </h5>
                        <p className="text-[10px] leading-snug whitespace-pre-line text-zinc-600">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* Right section (Buttons) */}
            <div className="flex w-full flex-col gap-2 lg:w-[260px]">
                <button
                    className="flex w-full cursor-pointer items-center justify-between rounded-lg bg-blue-700 px-5 py-3 text-[10px] font-bold text-white uppercase transition-colors hover:bg-blue-800"
                    onClick={onDiscoverSeries}
                >
                    <span>{t('common.buttons.discover')}</span>
                    <ArrowRight size={14} />
                </button>
                <button className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-zinc-300 bg-background px-5 py-3 text-[10px] font-bold text-zinc-900 uppercase transition-colors hover:bg-zinc-50">
                    <span>{t('common.buttons.technical_specs')}</span>
                    <ArrowRight size={14} />
                </button>
            </div>
        </div>
    );

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container size={isSmallView ? 'full' : 'cover'}>
                    <Modal.Dialog className="bg-[#F5F7FA] p-0 lg:p-6">
                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <div className="flex w-full items-start justify-between bg-[#F5F7FA] px-4 pt-6 pb-4 lg:px-10 lg:pt-10 lg:pb-6">
                                <div className="flex w-fit flex-col items-start justify-center">
                                    <div className="flex w-full items-center justify-center">
                                        <Logo
                                            classNames={{
                                                img: 'h-10.5 w-61',
                                            }}
                                        />
                                    </div>

                                    <div className="flex w-full flex-wrap items-center justify-center gap-2 text-[9px] font-extrabold tracking-[2px] text-[#0f0f0d] uppercase lg:text-[11px]">
                                        <span>{t('common.tabs.energy')}</span>
                                        <div className="size-1.5 rounded-full bg-[#111111]" />
                                        <span className="text-primary">
                                            {t('common.tabs.data')}
                                        </span>
                                        <div className="size-1.5 rounded-full bg-[#111111]" />
                                        <span>
                                            {t('common.tabs.connectivity')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Modal.Header>

                        <Modal.Body className="mt-0 overflow-x-hidden bg-[#F5F7FA] p-6 pb-4 lg:p-4">
                            <div className="grid w-full flex-1 grid-cols-12 gap-6 px-4 font-sans lg:gap-10 lg:px-10">
                                {/* Left Column */}
                                <div className="col-span-12 flex flex-col justify-start lg:col-span-5">
                                    <span className="mb-4 text-xs font-bold tracking-[0.15em] text-blue-700 uppercase">
                                        {t('kameleo.data.tag')}
                                    </span>
                                    <h2 className="text-3xl leading-[1.1] font-extrabold text-zinc-900 lg:text-[40px]">
                                        {t('kameleo.data.title1')}
                                    </h2>
                                    <h2 className="mb-6 text-3xl leading-[1.1] font-extrabold text-blue-700 lg:text-[40px]">
                                        {t('kameleo.data.title2')}
                                    </h2>
                                    <p className="mb-10 max-w-sm text-sm leading-relaxed whitespace-pre-line text-zinc-700">
                                        {t('kameleo.data.desc')}
                                    </p>

                                    {/* Product Image */}
                                    <div className="relative mt-8 flex items-center justify-center">
                                        <Image
                                            preview={{
                                                getContainer: () =>
                                                    document.querySelector(
                                                        '[data-slot="modal-dialog"]',
                                                    ) || document.body,
                                            }}
                                            src={KameleoImage}
                                            alt="OXOVOLT Kameleo SERIES"
                                            className="relative z-10 w-full cursor-zoom-in object-contain lg:max-w-[280px]"
                                        />
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="col-span-12 flex flex-col justify-start lg:col-span-7">
                                    <div>
                                        <h3 className="text-2xl font-bold text-zinc-900">
                                            {t('kameleo.data.continuity')}
                                        </h3>
                                        <h3 className="mb-8 text-2xl font-bold text-blue-700">
                                            {t(
                                                'kameleo.data.remains_protected',
                                            )}
                                        </h3>

                                        <div className="flex flex-col gap-6">
                                            {[
                                                {
                                                    title: t(
                                                        'kameleo.data.features.accessible.title',
                                                    ),
                                                    desc: t(
                                                        'kameleo.data.features.accessible.desc',
                                                    ),
                                                },
                                                {
                                                    title: t(
                                                        'kameleo.data.features.secure.title',
                                                    ),
                                                    desc: t(
                                                        'kameleo.data.features.secure.desc',
                                                    ),
                                                },
                                                {
                                                    title: t(
                                                        'kameleo.data.features.reliable.title',
                                                    ),
                                                    desc: t(
                                                        'kameleo.data.features.reliable.desc',
                                                    ),
                                                },
                                                {
                                                    title: t(
                                                        'kameleo.data.features.built_for.title',
                                                    ),
                                                    desc: t(
                                                        'kameleo.data.features.built_for.desc',
                                                    ),
                                                },
                                            ].map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="border-l-2 border-blue-700 py-0.5 pl-4"
                                                >
                                                    <h4 className="mb-1 text-[11px] font-bold tracking-wide text-zinc-900 uppercase">
                                                        {item.title}
                                                    </h4>
                                                    <p className="pr-4 text-xs leading-snug text-zinc-600">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom Card */}
                                    <div className="mt-12 rounded-2xl border border-zinc-100 bg-background p-6 shadow-sm">
                                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                                            <div className="flex-1">
                                                <h4 className="text-lg leading-tight font-bold whitespace-pre-line text-zinc-900">
                                                    {t(
                                                        'kameleo.data.protection.title',
                                                    )}
                                                </h4>
                                                <p className="mt-2 text-sm font-bold text-blue-700">
                                                    {t(
                                                        'kameleo.data.protection.subtitle',
                                                    )}
                                                </p>
                                            </div>

                                            <div className="flex flex-col gap-4 lg:flex-[1.5] lg:flex-row">
                                                {[
                                                    {
                                                        title: t(
                                                            'kameleo.data.protection.home.title',
                                                        ),
                                                        desc: t(
                                                            'kameleo.data.protection.home.desc',
                                                        ),
                                                    },
                                                    {
                                                        title: t(
                                                            'kameleo.data.protection.business.title',
                                                        ),
                                                        desc: t(
                                                            'kameleo.data.protection.business.desc',
                                                        ),
                                                    },
                                                    {
                                                        title: t(
                                                            'kameleo.data.protection.infrastructure.title',
                                                        ),
                                                        desc: t(
                                                            'kameleo.data.protection.infrastructure.desc',
                                                        ),
                                                    },
                                                ].map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex-1 border-l-2 border-blue-200 py-0.5 pl-4"
                                                    >
                                                        <h5 className="mb-1.5 text-[10px] font-bold tracking-wider text-blue-700 uppercase">
                                                            {item.title}
                                                        </h5>
                                                        <p className="text-[11px] leading-snug text-zinc-700">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {isSmallView && (
                                <div className="mt-8 px-4 pb-4">
                                    {footerContent}
                                </div>
                            )}
                        </Modal.Body>

                        {!isSmallView && (
                            <Modal.Footer className="mt-6 mb-10 bg-[#F5F7FA] px-10 pb-0">
                                {footerContent}
                            </Modal.Footer>
                        )}
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
