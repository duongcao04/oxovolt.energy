import { FOOTER_NAVIGATE } from './data/footer-navigate';
import { Link } from '@tanstack/react-router';

export const FooterOld = () => {
    return (
        <div className="bg-black text-white">
            <footer className="content_container w-full pt-7 md:px-12">
                <div className="mx-auto flex flex-col gap-16">
                    {/* Top Row: Links & Newsletter */}
                    <div className="flex flex-col items-start justify-between gap-10 py-5 lg:flex-row lg:items-end lg:gap-4">
                        {/* Left: Navigation Links */}
                        <nav>
                            <ul className="flex flex-wrap items-center gap-x-3 gap-y-3">
                                {FOOTER_NAVIGATE.map((it) => {
                                    return (
                                        <li key={it.id}>
                                            <Link
                                                to={it.href}
                                                className="text-xs font-medium tracking-wide text-white! transition-colors hover:text-gray-300 lg:text-sm"
                                                {...it.linkProps}
                                            >
                                                {it.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* Right: Newsletter Signup */}
                        <div className="flex w-full flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6 lg:w-auto">
                            <span className="text-sm font-medium whitespace-nowrap">
                                Interested in staying up to date with Oxovolt?
                            </span>

                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="flex w-full items-center border-b border-gray-600 pb-1.5 transition-colors focus-within:border-white sm:w-70"
                            >
                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="w-full bg-transparent text-sm text-white placeholder-gray-400 outline-none"
                                />
                                <button
                                    type="submit"
                                    className="ml-4 flex items-center text-sm font-bold whitespace-nowrap transition-colors hover:text-gray-300"
                                >
                                    SIGN UP
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={3}
                                        stroke="currentColor"
                                        className="mt-0.5 ml-1.5 h-3.5 w-3.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                        />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Row: Branding & Legal */}
                    <div className="flex flex-col items-start justify-between gap-6 pb-30 md:flex-row md:items-center">
                        {/* Left: Designed in Belgium */}
                        <div className="flex items-center gap-3">
                            {/* Belgian Flag constructed with divs */}
                            <div className="flex aspect-video w-17 overflow-hidden rounded-xs border border-gray-800">
                                <div className="flex-1 bg-black"></div>
                                <div className="flex-1 bg-[#FDDA24]"></div>
                                <div className="flex-1 bg-[#EF3340]"></div>
                            </div>

                            <span className="flex items-center text-sm font-medium text-gray-100">
                                Designed in Belgium by
                                <img
                                    src={'/brands/amoovoxlab.png'}
                                    className="w-45"
                                />
                            </span>
                        </div>

                        {/* Right: Privacy Policy Note */}
                        <div className="text-sm font-medium text-gray-100">
                            By clicking Sign Up, you agree to our Privacy
                            Policy.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
