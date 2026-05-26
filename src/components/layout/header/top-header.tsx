import { useTranslation } from 'react-i18next';
import BelgiumFlag from '/brands/belgium.png';

export const TopHeader = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-background flex w-full items-start justify-center gap-0 px-4 py-1.5 lg:items-center lg:gap-2">
            <img src={BelgiumFlag} className="size-5" />
            <p className="text-center text-xs font-bold tracking-wider lg:text-sm">
                {t('common.top_header')}
            </p>
        </div>
    );
};
