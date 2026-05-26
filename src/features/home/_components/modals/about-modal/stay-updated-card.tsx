import { ArrowRightIcon } from 'lucide-react';

export const StayUpdatedCard = () => {
    return (
        <div className="md:bg-background z-10 mt-auto w-full md:sticky md:bottom-0 lg:px-6 lg:py-3">
            <div className="border-border-muted bg-background flex w-full flex-col justify-between gap-6 rounded-2xl border p-8 md:flex-row md:items-center md:gap-8">
                <div className="flex-1">
                    <div className="mb-3 flex items-center">
                        <div className="bg-primary mr-3 h-0.5 w-6 shrink-0"></div>
                        <span className="text-primary text-[10px] font-extrabold tracking-[0.2em] uppercase">
                            STAY UPDATED
                        </span>
                    </div>
                    <h3 className="text-text-default text-base leading-snug font-bold">
                        Interested in staying
                        <br />
                        up to date with Oxovolt?
                    </h3>
                </div>
                <div className="flex-1">
                    <p className="text-text-subdued text-xs leading-relaxed font-medium">
                        Field notes, technology releases
                        <br />
                        and company updates.
                    </p>
                </div>
                <div className="relative w-full flex-1">
                    <input
                        type="email"
                        placeholder="Your email"
                        className="text-text-default focus:border-primary border-border-default w-full rounded-none border-b bg-transparent pb-2 text-sm placeholder-gray-400 transition-colors focus:outline-none"
                    />
                    <button className="text-text-subdued hover:text-primary absolute right-0 bottom-2 transition-colors">
                        <ArrowRightIcon className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};
