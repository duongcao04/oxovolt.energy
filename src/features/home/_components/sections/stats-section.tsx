import { useTranslation } from 'react-i18next';

export const StatsSection = () => {
    const { t } = useTranslation();
    const stats = t('home.stats', { returnObjects: true }) as { title: string; desc: string }[];

    return (
        <section className="z-10 border-y border-gray-200 bg-background/50 backdrop-blur-sm py-8">
            <div className="content_container flex flex-wrap justify-between items-center gap-6 text-xs sm:text-sm">
                {stats.map((stat, i) => (

                    <div key={i} className="flex flex-col">
                        <span className="font-bold text-base">
                            {stat.title}
                        </span>
                        <span className="text-sm mt-1">{stat.desc}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
