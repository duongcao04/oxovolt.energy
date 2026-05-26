import { Button, SectionSubTitle, SectionTitle } from '@/components/ui';
import { ResponsiveContainer } from '@/components/layout';
import { ArrowRightIcon, Star } from 'lucide-react';
import { cn } from '@/lib';

export function TheyChooseOxovolt() {
    const stats = [
        { value: '200+', label: 'Systems deployed' },
        { value: '3', label: 'Countries' },
        { value: '99.9%', label: 'Availability' },
        { value: '100%', label: 'Peace of mind' },
        { value: 'STARS', label: '4.2/5 average customer rating' },
    ];

    const testimonials = [
        {
            quote: 'Zero downtime.\nOur patients, our systems,\neverything stays protected.',
            author: 'DENTAL CLINIC',
        },
        {
            quote: 'I work with sensitive data.\nOxovolt gives me security\nand total independence.',
            author: 'IT CONSULTANT\n(FREELANCE)',
        },
        {
            quote: 'Power cuts are not\nan option for my clients.\nOxovolt keeps everything\nrunning, always.',
            author: 'LAWYER\n(LAW FIRM)',
        },
        {
            quote: "Renders, deadlines, clients.\nI can't stop.\nOxovolt makes sure I don't.",
            author: 'ARCHITECT\n(DESIGN STUDIO)',
        },
        {
            quote: 'A calm practice\nneeds a reliable system.\nOxovolt is just silent.',
            author: 'THERAPIST\n(PRIVATE PRACTICE)',
        },
    ];

    return (
        <ResponsiveContainer fillScreen anchor="they-choose-oxovolt">
            <div className="size-full">
                {/* Top Section */}
                <div className="flex w-full flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
                    {/* Left Column */}
                    <div className="flex w-full flex-col items-start lg:w-1/2">
                        <SectionSubTitle>THEY CHOSE OXOVOLT</SectionSubTitle>

                        <SectionTitle
                            mainText={
                                'Trusted by\nprofessionals\nwho expect more.'
                            }
                            highlightText="Chosen for a reason."
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex w-full flex-col lg:w-5/12 lg:pt-24">
                        <p className="text-text-default text-[15px] leading-relaxed font-medium">
                            Law firms, medical practices, architects, IT
                            consultants, clinics, agencies.
                            <br />
                            Independent professionals who can't afford downtime.
                            <br />
                            They choose Oxovolt for reliability, energy
                            independence
                            <br />
                            and total peace of mind.
                        </p>
                        <p className="text-text-default mt-6 text-[15px] leading-relaxed font-medium">
                            <strong>They choose Oxovolt.</strong>
                            <br />
                            <strong>
                                Now they run their practice, their way.
                            </strong>
                        </p>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="mt-20 grid grid-cols-2 gap-8 border-b border-blue-200/50 pb-12 md:grid-cols-5 md:gap-0">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                'flex flex-col',
                                idx !== 4 &&
                                    'border-blue-200/50 md:border-r md:pr-8',
                                idx !== 0 && 'md:pl-8', // Added padding left to match right padding
                            )}
                        >
                            {stat.value === 'STARS' ? (
                                <div className="text-primary mb-2 flex gap-1">
                                    <Star className="fill-primary" size={24} />
                                    <Star className="fill-primary" size={24} />
                                    <Star className="fill-primary" size={24} />
                                    <Star className="fill-primary" size={24} />
                                    <Star size={24} />
                                </div>
                            ) : (
                                <span className="text-primary mb-2 text-4xl font-bold">
                                    {stat.value}
                                </span>
                            )}
                            <span className="text-text-default flex items-center gap-2 text-[13px] font-bold">
                                {stat.label}
                                <ArrowRightIcon
                                    size={14}
                                    className="text-primary"
                                />
                            </span>
                        </div>
                    ))}
                </div>

                {/* Testimonials Row */}
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-5">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col rounded-xl border border-blue-200/50 p-6 transition-shadow hover:shadow-lg"
                        >
                            <span className="text-text-default mb-4 font-serif text-5xl leading-none">
                                “
                            </span>
                            <p className="text-text-default mb-8 flex-grow text-[14px] leading-relaxed font-medium whitespace-pre-line">
                                {item.quote}
                            </p>
                            <p className="text-text-default mb-6 text-[12px] font-bold tracking-[0.1em] whitespace-pre-line uppercase">
                                {item.author}
                            </p>
                            <button className="group text-primary mt-auto flex items-center gap-2 text-[12px] font-bold tracking-[0.1em] uppercase transition-colors">
                                READ THEIR STORY
                                <ArrowRightIcon
                                    size={14}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-32 flex flex-col items-center text-center">
                    <h2 className="text-text-default mb-8 text-2xl font-bold md:text-3xl">
                        You deserve the same peace of mind.{' '}
                        <span className="text-primary">
                            You deserve Oxovolt.
                        </span>
                    </h2>
                    <Button
                        variant="outlinedBox"
                        className="bg-primary hover:bg-primary/60 text-white"
                    >
                        I WANT THE SAME SYSTEM
                    </Button>
                </div>
            </div>
        </ResponsiveContainer>
    );
}
