import { Link } from '@tanstack/react-router'
import { ECOSYSTEM_URLS } from '@/lib/constants'
import { SeparatorGradient } from '@/components/ui'
import { useTranslation } from 'react-i18next'

export const OxovoltTechnologySection = () => {
    const { t } = useTranslation();
    const features1 = t('home.technology.features1', { returnObjects: true }) as { title: string; desc: string; slogan: string }[];
    const features2 = t('home.technology.features2', { returnObjects: true }) as { title: string; desc: string }[];

    return (
        <section className="content_container py-24">
            <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr_300px] gap-16">
                <div>
                    <h2 className="text-primary font-semibold text-lg tracking-widest uppercase mb-4">
                        {t('home.technology.tag')}
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 whitespace-pre-line">
                        {t('home.technology.title')}
                    </h3>
                    <p className="text-lg max-w-md">
                        {t('home.technology.desc_start')}
                        <Link
                            to={ECOSYSTEM_URLS.boltarium}
                            target="_blank"
                            className="text-[#c11c83]! font-semibold"
                        >
                            Boltarium™
                        </Link>
                        {t('home.technology.desc_end')}
                    </p>

                    <SeparatorGradient thickness="2px" className="my-6" />

                    <div className="space-y-8">
                        {features1.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-start gap-2"
                            >
                                <SeparatorGradient
                                    thickness="2px"
                                    orientation="vertical"
                                />
                                <div>
                                    <h4 className="font-bold text-lg tracking-wider mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm max-w-sm mb-2">
                                        {item.desc}
                                    </p>
                                    <p className="text-primary text-sm font-medium">
                                        {item.slogan}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div />

                <div className="flex flex-col gap-x-8 gap-y-12 content-start pt-12">
                    {features2.map((feature, i) => {
                        return (
                            <div
                                key={i}
                                className="flex items-center justify-start gap-4"
                            >
                                <SeparatorGradient
                                    thickness="2px"
                                    from="var(--color-primary-200)"
                                    to="var(--color-primary-200)"
                                    orientation="vertical"
                                />
                                <div>
                                    <h4 className="font-bold text-lg">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm leading-normal">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
