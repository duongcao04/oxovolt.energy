import { Logo } from '../../../../../components/layout';
import { useTranslation } from 'react-i18next';

export const AboutModalHeaderLogo = () => {
    const { t } = useTranslation();
    return (
        <div className="flex w-fit flex-col items-start justify-center">
            <div className="flex w-full items-center justify-start lg:justify-center">
                <Logo
                    classNames={{
                        img: 'w-46 lg:h-10.5 lg:w-61',
                    }}
                />
            </div>

            <div className="flex w-full items-center justify-start gap-2 text-[9px] font-extrabold text-text-default uppercase lg:justify-center lg:text-[11px] lg:tracking-[2px]">
                <span>{t('common.tabs.energy')}</span>
                <div className="bg-primary mb-[2px] size-1 rounded-full lg:mb-0 lg:size-1.5" />
                <span>{t('common.tabs.data')}</span>
                <div className="bg-primary mb-[2px] size-1 rounded-full lg:mb-0 lg:size-1.5" />
                <span>{t('common.tabs.connectivity')}</span>
            </div>
        </div>
    );
};
