import NotFoundBackground from '@/assets/background/notfound-background.jpeg';
import { Button, SectionSubTitle, SectionTitle } from '@/components/ui';
import { ResponsiveContainer } from '../../components/layout';

const DataField = ({ label, value }: { label: string; value: string }) => (
    <div className="flex-1 text-center md:min-w-37.5 md:text-left">
        <div className="text-[8px] font-medium tracking-wider text-text-subdued uppercase lg:text-xs">
            {label}
        </div>
        <div className="text-primary text-xs font-semibold tracking-wide uppercase sm:text-base lg:text-sm">
            {value}
        </div>
    </div>
);

export const NotFoundPage = () => {
    return (
        <ResponsiveContainer
            fillScreen
            paddingBlock={false}
            backgroundUrl={NotFoundBackground}
            className="selection:bg-primary/30 container py-6 md:pt-16 md:pb-8"
        >
            {/* Main Content Area */}
            <main className="z-10 flex w-full flex-1 flex-col items-center justify-start px-4 md:px-6 lg:px-8">
                <div className="flex w-full flex-col items-center gap-2">
                    <SectionSubTitle className="border-primary cursor-default rounded-md border bg-[#00040d90] px-2 py-1 text-[10px] tracking-[2px] lg:px-3 lg:py-1.5 lg:text-xs lg:tracking-[5px]">
                        INFRASTRUCTURE ERROR . 404
                    </SectionSubTitle>
                    <SectionTitle
                        mainText="NODE"
                        highlightText="NOT FOUND"
                        classNames={{
                            base: 'mt-2 mb-0 lg::mb-16 flex flex-row gap-2 lg:gap-0 lg:flex-col items-center justify-center',
                            mainText: 'text-white mt-1 lg:mt-0',
                        }}
                    />

                    <p className="mb-12 w-full max-w-lg text-center text-sm leading-relaxed text-text-subdued sm:mb-20 sm:text-base">
                        The requested infrastructure endpoint could not be
                        located inside the{' '}
                        <span className="text-primary-400 font-semibold">
                            Oxovolt
                        </span>{' '}
                        network.
                    </p>
                </div>
            </main>

            {/* Footer Section with technical data */}
            <footer className="z-10 mt-auto flex w-full flex-col items-center justify-center gap-5 px-4 md:px-6 lg:px-8">
                <Button
                    variant="outlinedBox"
                    color="primary"
                    showArrow
                    href="/"
                    className="bg-[#00040d90] px-8 py-2 hover:bg-[#020b1f] lg:px-10 lg:py-5"
                >
                    RETURN TO NETWORK
                </Button>
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 md:gap-4">
                    {/* The four data points grid */}
                    <div className="flex w-full flex-row items-center justify-between gap-6 rounded-lg border border-gray-800 bg-[#01081280] p-6 md:gap-4">
                        <DataField label="ROUTE ID" value="XR-404-NF" />
                        <DataField label="STATUS" value="UNREACHABLE" />
                        <DataField label="NETWORK STATE" value="STABLE" />
                        <DataField label="TIME" value="14:23:59 UTC" />
                    </div>

                    {/* Final Logo/Brand line */}
                    <div className="flex items-center gap-2.5 text-xs tracking-[0.2em] text-white/70 uppercase">
                        <div className="border-primary/70 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2">
                            <div className="bg-primary/70 h-1.5 w-1.5 rounded-full"></div>
                        </div>
                        Oxovolt Energy Infrastructure
                    </div>
                </div>
            </footer>
        </ResponsiveContainer>
    );
};
