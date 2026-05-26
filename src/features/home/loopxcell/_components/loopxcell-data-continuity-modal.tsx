import { ArrowRight, Database, ShieldAlert } from 'lucide-react';
import Battery from '@/assets/loopxcell-series/01.png';
import { Logo } from '../../../../components/layout';
import { useTranslation } from 'react-i18next';
import { Modal } from '@heroui/react';
import { useDevice } from '@/hooks';
import { Image } from 'antd';

export function LoopXcellDataContinuityModal({
    isOpen,
    onOpenChange,
    onCTAClick,
    onSecondaryClick,
}: {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onCTAClick: () => void;
    onSecondaryClick: () => void;
}) {
    const { isSmallView } = useDevice();
    const { t } = useTranslation();

    const featuresLeft = t('home.modals.data.features_left', {
        returnObjects: true,
    }) as { title: string; desc: string }[];
    const featuresRight = t('home.modals.data.features_right', {
        returnObjects: true,
    }) as { title: string; desc: string }[];
    const bottomGrid = t('home.modals.data.bottom_grid', {
        returnObjects: true,
    }) as { title: string; desc: string }[];
    const footerStats = t('home.modals.data.footer_stats', {
        returnObjects: true,
    }) as { val: string; label: string }[];
    const cardTitle = t('home.modals.data.card_title', {
        returnObjects: true,
    }) as string[];
    const cloudList1 = t('home.modals.data.cloud.list1', {
        returnObjects: true,
    }) as string[];
    const cloudList2 = t('home.modals.data.cloud.list2', {
        returnObjects: true,
    }) as string[];

    const footerContent = (
        <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-zinc-200 bg-[#F5F7FA] px-4 py-4 lg:flex-row lg:gap-6 lg:px-10 lg:py-6">
            {/* Left Footer */}
            <div className="flex w-full items-center gap-4 lg:w-[280px]">
                <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
                    <Database size={20} className="absolute mt-[-6px]" />
                    <ShieldAlert
                        size={14}
                        className="absolute mt-[12px] rounded-full border border-blue-700 bg-blue-700"
                    />
                </div>
                <div>
                    <h4 className="mb-0.5 text-[10px] font-bold tracking-wider whitespace-pre-line text-zinc-900 uppercase">
                        {t('home.modals.data.footer_left_title')}
                    </h4>
                    <p className="text-[10px] leading-snug whitespace-pre-line text-zinc-600">
                        {t('home.modals.data.footer_left_desc')}
                    </p>
                </div>
            </div>

            {/* Middle Footer Stats */}
            <div className="flex w-full flex-wrap items-center justify-center gap-4 lg:w-auto lg:gap-8 lg:border-l lg:border-zinc-200 lg:px-6">
                {footerStats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-4 lg:gap-8">
                        {idx > 0 && <div className="h-8 w-px bg-zinc-200" />}
                        <div className="flex flex-col items-center">
                            <span className="text-xl font-bold text-blue-700 lg:text-2xl">
                                {stat.val}
                            </span>
                            <span className="mt-1 text-[8px] font-bold tracking-wider text-zinc-500 uppercase">
                                {stat.label}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center lg:border-l lg:border-zinc-200 lg:pr-4 lg:pl-6">
                {/* Belgian Flag */}
                <div className="mb-2 flex h-4 w-6 overflow-hidden rounded-[2px] shadow-sm">
                    <div className="h-full w-2 bg-black"></div>
                    <div className="h-full w-2 bg-yellow-400"></div>
                    <div className="h-full w-2 bg-[#ED2939]"></div>
                </div>
                <span className="text-[8px] font-bold tracking-wider text-zinc-900 uppercase">
                    {t('home.modals.data.footer_belgium')}
                </span>
            </div>

            {/* Right Footer Buttons */}
            <div className="flex w-full flex-col gap-2 lg:ml-auto lg:w-[240px]">
                <button
                    className="flex w-full cursor-pointer items-center justify-between rounded-lg bg-blue-700 px-5 py-3.5 text-[10px] font-bold text-white uppercase transition-colors hover:bg-blue-800"
                    onClick={onCTAClick}
                >
                    <span>{t('home.modals.data.footer_btn1')}</span>
                    <ArrowRight size={14} />
                </button>
                <button
                    className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-zinc-300 bg-background px-5 py-3.5 text-[10px] font-bold text-zinc-900 uppercase transition-colors hover:bg-zinc-50"
                    onClick={onSecondaryClick}
                >
                    <span>{t('home.modals.data.footer_btn2')}</span>
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
                                        <span>
                                            {t('home.modals.header.energy')}
                                        </span>
                                        <div className="size-1.5 rounded-full bg-[#111111]" />
                                        <span className="text-primary">
                                            {t('home.modals.header.data')}
                                        </span>
                                        <div className="size-1.5 rounded-full bg-[#111111]" />
                                        <span>
                                            {t(
                                                'home.modals.header.connectivity',
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Modal.Header>

                        <Modal.Body className="mt-0 overflow-x-hidden bg-[#F5F7FA] p-6 lg:p-4">
                            <div className="grid w-full flex-1 grid-cols-12 gap-6 px-4 pb-4 font-sans lg:gap-10 lg:px-10 lg:pb-10">
                                {/* Left Column */}
                                <div className="col-span-12 flex flex-col justify-center lg:col-span-3">
                                    <span className="mb-4 text-xs font-bold tracking-[0.15em] text-blue-700">
                                        {t('home.modals.data.tag')}
                                    </span>
                                    <h2 className="mb-1 text-3xl leading-[1.1] font-extrabold text-zinc-900 lg:text-[40px]">
                                        {t('home.modals.data.title_main')}
                                    </h2>
                                    <h2 className="mb-6 text-3xl leading-[1.1] font-extrabold text-blue-700 lg:text-[40px]">
                                        {t('home.modals.data.title_highlight')}
                                    </h2>
                                    <p className="mb-10 pr-4 text-sm leading-relaxed text-zinc-700">
                                        {t('home.modals.data.desc')}
                                    </p>

                                    <div className="flex flex-col gap-6">
                                        {featuresLeft.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="border-l-2 border-blue-700 py-0.5 pl-4"
                                            >
                                                <h4 className="mb-1 text-[11px] font-bold tracking-wide text-zinc-900">
                                                    {item.title}
                                                </h4>
                                                <p className="pr-4 text-xs leading-snug text-zinc-600">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Middle Column - Server Image */}
                                <div className="relative col-span-12 flex items-center justify-center lg:col-span-4">
                                    {/* Glowing Background */}
                                    <div className="absolute inset-0 my-auto h-[80%] w-full rounded-full bg-background/40 blur-[80px]" />
                                    <div className="absolute inset-0 mx-auto my-auto h-[60%] w-[80%] rounded-full bg-blue-100/20 blur-[100px]" />
                                    <Image
                                        preview={{
                                            getContainer: () =>
                                                document.querySelector(
                                                    '[data-slot="modal-dialog"]',
                                                ) || document.body,
                                        }}
                                        src={Battery}
                                        alt="OXOVOLT Kameleo SERIES Server"
                                        className="relative z-10 w-full max-w-[240px] object-contain mix-blend-multiply drop-shadow-2xl lg:max-w-[380px]"
                                    />
                                </div>

                                {/* Right Column */}
                                <div className="col-span-12 flex flex-col justify-center gap-8 lg:col-span-5">
                                    {/* Top Right Grid */}
                                    <div>
                                        <h3 className="mb-6 text-xl font-bold">
                                            <span className="text-zinc-900">
                                                {t(
                                                    'home.modals.data.features_right_title_main',
                                                )}
                                            </span>
                                            <br />
                                            <span className="text-blue-700">
                                                {t(
                                                    'home.modals.data.features_right_title_highlight',
                                                )}
                                            </span>
                                        </h3>

                                        <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:gap-y-8">
                                            {featuresRight.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="border-l-2 border-blue-200 pl-3"
                                                >
                                                    <h4 className="mb-1.5 text-[10px] font-bold tracking-wider text-zinc-900">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-[11px] leading-snug text-zinc-600">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom Right Card */}
                                    <div className="mt-2 rounded-2xl border border-zinc-100 bg-background p-6 shadow-sm">
                                        <h4 className="mb-2 text-base font-bold">
                                            <span className="text-zinc-900">
                                                {cardTitle[0]}{' '}
                                            </span>
                                            <span className="text-blue-700">
                                                {cardTitle[1]}{' '}
                                            </span>
                                            <br />
                                            <span className="text-zinc-900">
                                                {cardTitle[2]}{' '}
                                            </span>
                                            <span className="text-blue-700">
                                                {cardTitle[3]}
                                            </span>
                                        </h4>
                                        <p className="mb-6 text-[11px] text-zinc-600">
                                            {t('home.modals.data.card_desc')}
                                        </p>

                                        <div className="mb-6 flex flex-col items-center gap-6 lg:flex-row lg:gap-4">
                                            <div className="w-full flex-1 text-center lg:text-left">
                                                <h5 className="mb-2 text-[9px] font-bold tracking-wider text-blue-700">
                                                    {t(
                                                        'home.modals.data.cloud.title1',
                                                    )}
                                                </h5>
                                                <p className="mb-3 text-[10px] leading-snug text-zinc-600">
                                                    {t(
                                                        'home.modals.data.cloud.desc1',
                                                    )}
                                                </p>
                                                <ul className="inline-block space-y-1 text-left lg:block">
                                                    {cloudList1.map(
                                                        (item, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="border-l-2 border-blue-700 pl-2 text-[10px] font-medium text-zinc-800"
                                                            >
                                                                {item}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>

                                            <div className="relative flex h-32 w-32 flex-shrink-0 items-center justify-center">
                                                <Image
                                                    preview={false}
                                                    src="/cloud_network_node.png"
                                                    alt="Cloud Network"
                                                    className="h-full w-full object-contain mix-blend-multiply"
                                                />
                                            </div>

                                            <div className="w-full flex-1 text-center lg:text-left">
                                                <h5 className="mb-2 text-[9px] font-bold tracking-wider text-blue-700">
                                                    {t(
                                                        'home.modals.data.cloud.title2',
                                                    )}
                                                </h5>
                                                <p className="mb-3 text-[10px] leading-snug text-zinc-600">
                                                    {t(
                                                        'home.modals.data.cloud.desc2',
                                                    )}
                                                </p>
                                                <ul className="inline-block space-y-1 text-left lg:block">
                                                    {cloudList2.map(
                                                        (item, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="border-l-2 border-zinc-900 pl-2 text-[10px] font-medium text-zinc-800"
                                                            >
                                                                {item}
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 border-t border-zinc-100 pt-5 md:grid-cols-4">
                                            {bottomGrid.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="border-l-2 border-blue-700 py-0.5 pl-2"
                                                >
                                                    <h6 className="mb-1 text-[8px] font-bold text-zinc-900 uppercase">
                                                        {item.title}
                                                    </h6>
                                                    <p className="text-[9px] leading-tight text-zinc-500">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {isSmallView && footerContent}
                        </Modal.Body>

                        {!isSmallView && (
                            <Modal.Footer className="mt-0 p-0">
                                {footerContent}
                            </Modal.Footer>
                        )}
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
