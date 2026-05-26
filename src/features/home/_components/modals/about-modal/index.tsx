import { AboutModalHeaderLogo } from './about-modal-header-logo';
import { Button, Modal, ScrollShadow } from '@heroui/react';
import { SectionTag, SectionTitle } from './section-title';
import { AboutModalSidebar } from './about-modal-sidebar';
import { AnimatePresence, motion } from 'framer-motion';
import { PageRenderer } from './pages/_page-renderer';
import { StayUpdatedCard } from './stay-updated-card';
import { useDevice } from '../../../../../hooks';
import { MenuIcon, XIcon } from 'lucide-react';
import { FeatureCard } from './feature-card';
import { cn } from '../../../../../lib';
import { useState } from 'react';

export type AboutModalProps = {
    isOpen: boolean;
    onOpenChange: (state: boolean) => void;
    onOpenLoopXcellDatasheet?: () => void;
};

export const AboutModal = ({
    isOpen,
    onOpenChange,
    onOpenLoopXcellDatasheet,
}: AboutModalProps) => {
    const { isSmallView } = useDevice();
    const [activeTab, setActiveTab] = useState('about');
    const [activePage, setActivePage] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop variant="opaque">
                <Modal.Container size={isSmallView ? 'full' : 'cover'}>
                    <Modal.Dialog className="bg-background m-0 h-full w-full max-w-full overflow-hidden p-0">
                        {isSmallView && (
                            <div className="flex items-center justify-start gap-4 p-4">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onPress={() =>
                                        setIsMobileMenuOpen(!isMobileMenuOpen)
                                    }
                                >
                                    {!isMobileMenuOpen ? (
                                        <MenuIcon className="size-7" />
                                    ) : (
                                        <XIcon className="size-7" />
                                    )}
                                </Button>
                                <AboutModalHeaderLogo />
                            </div>
                        )}
                        <Modal.CloseTrigger className="text-text-subdued hover:text-text-default absolute top-4 right-4 z-50 transition-colors md:top-8 md:right-8" />

                        <Modal.Body className="h-full overflow-hidden p-0">
                            <div className="relative flex h-full w-full flex-col overflow-hidden md:flex-row">
                                {/* Sidebar */}
                                <AnimatePresence>
                                    {(!isSmallView || isMobileMenuOpen) && (
                                        <motion.div
                                            key="sidebar"
                                            initial={
                                                isSmallView
                                                    ? { x: '-100%' }
                                                    : false
                                            }
                                            animate={{ x: 0 }}
                                            exit={
                                                isSmallView
                                                    ? { x: '-100%' }
                                                    : undefined
                                            }
                                            transition={{
                                                type: 'spring',
                                                bounce: 0,
                                                duration: 0.4,
                                            }}
                                            className={cn(
                                                'bg-background z-20',
                                                isSmallView
                                                    ? 'absolute inset-0'
                                                    : 'flex w-[280px] shrink-0 lg:w-[320px]',
                                            )}
                                        >
                                            <AboutModalSidebar
                                                setActiveTab={(tab) => {
                                                    setActiveTab(tab);
                                                    setActivePage(null);
                                                    setIsMobileMenuOpen(false);
                                                }}
                                                activeTab={activeTab}
                                                className="flex h-full w-full md:w-[280px] lg:w-[320px]"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Main Content */}
                                <div
                                    className={cn(
                                        'bg-background relative min-h-0 flex-1 flex-col',
                                        'px-0 pb-12 md:pt-6 md:pr-0 md:pb-0 md:pl-6',
                                        'flex',
                                    )}
                                >
                                    {/* <ScrollShadow> */}
                                    <div
                                        className={cn(
                                            'grid min-h-0 w-full flex-1 gap-12 overflow-hidden',
                                            activePage
                                                ? 'grid-cols-1 lg:grid-cols-[480px_1fr]'
                                                : 'grid-cols-1 lg:grid-cols-[720px_1fr]',
                                        )}
                                    >
                                        <ScrollShadow
                                            className={cn(
                                                'h-full',
                                                activePage
                                                    ? 'hidden lg:block'
                                                    : 'block',
                                                'px-6 pt-12',
                                            )}
                                            style={{
                                                height:
                                                    activePage && !isSmallView
                                                        ? 'calc(100% - 45px)'
                                                        : 'calc(100%)',
                                            }}
                                            hideScrollBar
                                        >
                                            <div className="mb-0 w-full shrink-0 md:mb-8">
                                                <>
                                                    {activeTab === 'about' && (
                                                        <>
                                                            <SectionTag title="About OXOVOLT" />
                                                            <SectionTitle
                                                                title={
                                                                    'Engineering continuity\nfor a world that never stops.'
                                                                }
                                                            />

                                                            <div className="mb-4 flex w-full flex-col lg:mb-16">
                                                                {[
                                                                    {
                                                                        id: 'who-we-are',
                                                                        title: 'WHO WE ARE',
                                                                        desc: 'Mission, industrial philosophy\nand engineering culture.',
                                                                    },
                                                                    {
                                                                        id: 'why-oxovolt',
                                                                        title: 'WHY OXOVOLT',
                                                                        desc: 'Why continuity requires\na different energy architecture.',
                                                                    },
                                                                    {
                                                                        id: 'ecosystem',
                                                                        title: 'ECOSYSTEM',
                                                                        desc: 'Our technology ecosystem\nand connected infrastructure.',
                                                                    },
                                                                    {
                                                                        id: 'pillars-of-innovation',
                                                                        title: 'PILLARS OF INNOVATION',
                                                                        desc: 'The core principles guiding our\nsystems and long-term vision.',
                                                                    },
                                                                ].map(
                                                                    (
                                                                        item,
                                                                        i,
                                                                    ) => (
                                                                        <FeatureCard
                                                                            key={
                                                                                i
                                                                            }
                                                                            title={
                                                                                item.title
                                                                            }
                                                                            desc={
                                                                                item.desc
                                                                            }
                                                                            isActive={
                                                                                activePage ===
                                                                                item.id
                                                                            }
                                                                            onPress={() =>
                                                                                setActivePage(
                                                                                    item.id,
                                                                                )
                                                                            }
                                                                        />
                                                                    ),
                                                                )}
                                                            </div>
                                                        </>
                                                    )}

                                                    {activeTab ===
                                                        'solutions' && (
                                                        <>
                                                            <SectionTag title="Solutions" />
                                                            <SectionTitle
                                                                title={
                                                                    'Integrated systems.\nBuilt for continuity.'
                                                                }
                                                            />

                                                            <div className="mb-16 flex w-full flex-col">
                                                                {[
                                                                    {
                                                                        id: 'product-and-system-pages',
                                                                        title: 'Product & system pages',
                                                                        desc: 'Residential, commercial and\nindustrial energy systems.',
                                                                    },
                                                                    {
                                                                        id: 'dedicated-technology-pages',
                                                                        title: 'Dedicated technology pages',
                                                                        desc: 'Immersion cooling, thermal intelligence\nand hybrid architecture.',
                                                                    },
                                                                    {
                                                                        id: 'my-installer',
                                                                        title: 'My Installer',
                                                                        desc: 'Resources, downloads and\ninstallation tools.',
                                                                    },
                                                                    {
                                                                        id: 'certifications',
                                                                        title: 'Certifications',
                                                                        desc: 'Compliance, industrial validation\nand testing standards.',
                                                                    },
                                                                    {
                                                                        id: 'roadmap',
                                                                        title: 'Roadmap',
                                                                        desc: 'Current generation and\nfuture deployment timeline.',
                                                                    },
                                                                ].map(
                                                                    (
                                                                        item,
                                                                        i,
                                                                    ) => (
                                                                        <FeatureCard
                                                                            key={
                                                                                i
                                                                            }
                                                                            title={
                                                                                item.title
                                                                            }
                                                                            desc={
                                                                                item.desc
                                                                            }
                                                                            isActive={
                                                                                activePage ===
                                                                                item.id
                                                                            }
                                                                            onPress={() =>
                                                                                setActivePage(
                                                                                    item.id,
                                                                                )
                                                                            }
                                                                        />
                                                                    ),
                                                                )}
                                                            </div>
                                                        </>
                                                    )}

                                                    {activeTab ===
                                                        'knowledge' && (
                                                        <>
                                                            <SectionTag title="Knowledge" />
                                                            <SectionTitle
                                                                title={
                                                                    'Research.\nField intelligence.\nEngineering insights.'
                                                                }
                                                            />

                                                            <div className="mb-16 flex w-full flex-col">
                                                                {[
                                                                    {
                                                                        id: 'technical-blog',
                                                                        title: 'Technical blog',
                                                                        desc: 'Architecture breakdowns\nand engineering articles.',
                                                                    },
                                                                    {
                                                                        id: 'field-notes',
                                                                        title: 'Field notes',
                                                                        desc: 'Real-world deployments\nand operational learnings.',
                                                                    },
                                                                    {
                                                                        id: 'documentation',
                                                                        title: 'Documentation',
                                                                        desc: 'Technical manuals, integration\nguides and whitepapers.',
                                                                    },
                                                                ].map(
                                                                    (
                                                                        item,
                                                                        i,
                                                                    ) => (
                                                                        <FeatureCard
                                                                            key={
                                                                                i
                                                                            }
                                                                            title={
                                                                                item.title
                                                                            }
                                                                            desc={
                                                                                item.desc
                                                                            }
                                                                            isActive={
                                                                                activePage ===
                                                                                item.id
                                                                            }
                                                                            onPress={() =>
                                                                                setActivePage(
                                                                                    item.id,
                                                                                )
                                                                            }
                                                                        />
                                                                    ),
                                                                )}
                                                            </div>
                                                        </>
                                                    )}

                                                    {activeTab === 'press' && (
                                                        <>
                                                            <SectionTag title="Press" />
                                                            <SectionTitle
                                                                title={
                                                                    'Media releases, interviews\nand public announcements'
                                                                }
                                                            />

                                                            <div className="mb-16 flex w-full flex-col">
                                                                {[
                                                                    {
                                                                        id: 'media-releases',
                                                                        title: 'Media Releases',
                                                                        children:
                                                                            [
                                                                                {
                                                                                    id: 'latest-releases',
                                                                                    title: 'Latest Releases',
                                                                                },
                                                                                {
                                                                                    id: 'technology-releases',
                                                                                    title: 'Technology Releases',
                                                                                },
                                                                                {
                                                                                    id: 'product-releases',
                                                                                    title: 'Product Releases',
                                                                                },
                                                                                {
                                                                                    id: 'partnership-releases',
                                                                                    title: 'Partnership Releases',
                                                                                },
                                                                                {
                                                                                    id: 'corporate-releases',
                                                                                    title: 'Corporate Releases',
                                                                                },
                                                                                {
                                                                                    id: 'release-archive',
                                                                                    title: 'Release Archive',
                                                                                },
                                                                            ],
                                                                    },
                                                                    {
                                                                        id: 'public-announcements',
                                                                        title: 'Public Announcements',
                                                                        children:
                                                                            [
                                                                                {
                                                                                    id: 'public-statements',
                                                                                    title: 'Public Statements',
                                                                                },
                                                                                {
                                                                                    id: 'roadmap-updates',
                                                                                    title: 'Roadmap Updates',
                                                                                },
                                                                                {
                                                                                    id: 'open-calls',
                                                                                    title: 'Open Calls',
                                                                                },
                                                                                {
                                                                                    id: 'demonstrations',
                                                                                    title: 'Demonstrations',
                                                                                },
                                                                                {
                                                                                    id: 'events-exhibitions',
                                                                                    title: 'Events & Exhibitions',
                                                                                },
                                                                                {
                                                                                    id: 'community-notices',
                                                                                    title: 'Community Notices',
                                                                                },
                                                                            ],
                                                                    },
                                                                    {
                                                                        id: 'interviews-n-coverage',
                                                                        title: 'Interviews & Coverage',
                                                                        children:
                                                                            [
                                                                                {
                                                                                    id: 'featured-coverage',
                                                                                    title: 'Featured Coverage',
                                                                                },
                                                                                {
                                                                                    id: 'interviews',
                                                                                    title: 'Interviews',
                                                                                },
                                                                                {
                                                                                    id: 'podcasts',
                                                                                    title: 'Podcasts',
                                                                                },
                                                                                {
                                                                                    id: 'video-features',
                                                                                    title: 'Video Features',
                                                                                },
                                                                                {
                                                                                    id: 'press-articles',
                                                                                    title: 'Press Articles',
                                                                                },
                                                                                {
                                                                                    id: 'independent-analysis',
                                                                                    title: 'Independent Analysis',
                                                                                },
                                                                            ],
                                                                    },
                                                                    {
                                                                        id: 'ecosystem-visibility',
                                                                        title: 'Ecosystem Visibility',
                                                                        children:
                                                                            [
                                                                                {
                                                                                    id: 'ecosystem-reach',
                                                                                    title: 'Ecosystem Reach',
                                                                                },
                                                                                {
                                                                                    id: 'global-presence',
                                                                                    title: 'Global Presence',
                                                                                },
                                                                                {
                                                                                    id: 'public-activity',
                                                                                    title: 'Public Activity',
                                                                                },
                                                                                {
                                                                                    id: 'research-visibility',
                                                                                    title: 'Research Visibility',
                                                                                },
                                                                                {
                                                                                    id: 'social-impact',
                                                                                    title: 'Social Impact',
                                                                                },
                                                                                {
                                                                                    id: 'media-metrics',
                                                                                    title: 'Media Metrics',
                                                                                },
                                                                            ],
                                                                    },
                                                                    {
                                                                        id: 'ecosystem-visibility',
                                                                        title: 'Ecosystem Visibility',
                                                                        children:
                                                                            [
                                                                                {
                                                                                    id: 'brand-assets',
                                                                                    title: 'Brand Assets',
                                                                                },
                                                                                {
                                                                                    id: 'official-logos',
                                                                                    title: 'Official Logos',
                                                                                },
                                                                                {
                                                                                    id: 'official-photos',
                                                                                    title: 'Official Photos',
                                                                                },
                                                                                {
                                                                                    id: 'founder-biography',
                                                                                    title: 'Founder Biography',
                                                                                },
                                                                                {
                                                                                    id: 'company-overview',
                                                                                    title: 'Company Overview',
                                                                                },
                                                                                {
                                                                                    id: 'product-images',
                                                                                    title: 'Product Images',
                                                                                },
                                                                                {
                                                                                    id: 'media-contacts',
                                                                                    title: 'Media Contacts',
                                                                                },
                                                                                {
                                                                                    id: 'download-center',
                                                                                    title: 'Download Center',
                                                                                },
                                                                            ],
                                                                    },
                                                                ].map(
                                                                    (
                                                                        item,
                                                                        i,
                                                                    ) => (
                                                                        <FeatureCard
                                                                            key={
                                                                                i
                                                                            }
                                                                            title={
                                                                                item.title
                                                                            }
                                                                            isActive={
                                                                                activePage ===
                                                                                    item.id ||
                                                                                (item.children &&
                                                                                    item.children.some(
                                                                                        (
                                                                                            c,
                                                                                        ) =>
                                                                                            c.id ===
                                                                                            activePage,
                                                                                    ))
                                                                            }
                                                                            onPress={() => {
                                                                                if (
                                                                                    !item.children
                                                                                ) {
                                                                                    setActivePage(
                                                                                        item.id,
                                                                                    );
                                                                                }
                                                                            }}
                                                                            children={
                                                                                item.children
                                                                            }
                                                                            onChildPress={(
                                                                                id,
                                                                            ) =>
                                                                                setActivePage(
                                                                                    id,
                                                                                )
                                                                            }
                                                                            activeChildId={
                                                                                activePage
                                                                            }
                                                                        />
                                                                    ),
                                                                )}
                                                            </div>
                                                        </>
                                                    )}

                                                    {activeTab ===
                                                        'contact' && (
                                                        <>
                                                            <SectionTag title="Contact" />
                                                            <SectionTitle
                                                                title={
                                                                    'Connect with the\nOxovolt ecosystem.'
                                                                }
                                                            />

                                                            <div className="mb-16 flex w-full flex-col">
                                                                {[
                                                                    {
                                                                        id: 'careers',
                                                                        title: 'Careers',
                                                                        desc: 'Join the future of uninterrupted\nenergy systems.',
                                                                    },
                                                                    {
                                                                        id: 'contact-us',
                                                                        title: 'Contact us',
                                                                        desc: 'Sales, partnerships and\ntechnical assistance.',
                                                                    },
                                                                ].map(
                                                                    (
                                                                        item,
                                                                        i,
                                                                    ) => (
                                                                        <FeatureCard
                                                                            key={
                                                                                i
                                                                            }
                                                                            title={
                                                                                item.title
                                                                            }
                                                                            desc={
                                                                                item.desc
                                                                            }
                                                                            isActive={
                                                                                activePage ===
                                                                                item.id
                                                                            }
                                                                            onPress={() =>
                                                                                setActivePage(
                                                                                    item.id,
                                                                                )
                                                                            }
                                                                        />
                                                                    ),
                                                                )}
                                                            </div>
                                                        </>
                                                    )}

                                                    {activeTab === 'legal' && (
                                                        <>
                                                            <SectionTag title="Legal" />
                                                            <SectionTitle
                                                                title={
                                                                    'Connect with you rights'
                                                                }
                                                            />

                                                            <div className="mb-16 flex w-full flex-col">
                                                                {[
                                                                    {
                                                                        id: 'privacy-policy',
                                                                        title: 'Privacy Policy',
                                                                        desc: 'Policies, compliance and\nlegal information.',
                                                                    },
                                                                    {
                                                                        id: 'terms-of-use',
                                                                        title: 'Terms of Use',
                                                                        desc: 'Platform access and user responsibilities.',
                                                                    },
                                                                    {
                                                                        id: 'legal-notices',
                                                                        title: 'Legal Notices',
                                                                        desc: 'Company information and liability.',
                                                                    },
                                                                    {
                                                                        id: 'data-preferences',
                                                                        title: 'Privacy Preferences',
                                                                        desc: 'Manage data permissions and\ncommunication settings.',
                                                                    },
                                                                ].map(
                                                                    (
                                                                        item,
                                                                        i,
                                                                    ) => (
                                                                        <FeatureCard
                                                                            key={
                                                                                i
                                                                            }
                                                                            title={
                                                                                item.title
                                                                            }
                                                                            desc={
                                                                                item.desc
                                                                            }
                                                                            isActive={
                                                                                activePage ===
                                                                                item.id
                                                                            }
                                                                            onPress={() =>
                                                                                setActivePage(
                                                                                    item.id,
                                                                                )
                                                                            }
                                                                        />
                                                                    ),
                                                                )}
                                                            </div>
                                                        </>
                                                    )}

                                                    {activeTab ===
                                                        'loopxcell-series' && (
                                                        <>
                                                            <SectionTag title="Loopxcell Series" />
                                                            <SectionTitle
                                                                title={
                                                                    'BUILT-IN INVERTERS & SOLAR CHARGERS'
                                                                }
                                                            />

                                                            <div className="mb-16 flex w-full flex-col">
                                                                {[
                                                                    {
                                                                        id: 'loopxcell-datasheet',
                                                                        title: 'Datasheet',
                                                                        onClick:
                                                                            onOpenLoopXcellDatasheet,
                                                                    },
                                                                    {
                                                                        id: 'ess-pro-40kwh-technical-manual',
                                                                        title: 'ESS Pro 40kWh Technical Manual',
                                                                    },
                                                                    {
                                                                        id: 'ess-pro-compatibility-list',
                                                                        title: 'ESS Pro Compatibility List',
                                                                    },
                                                                    {
                                                                        id: 'dg',
                                                                        title: 'DG',
                                                                    },
                                                                    {
                                                                        id: 'iec-test-report',
                                                                        title: 'IEC Test Report',
                                                                    },
                                                                    {
                                                                        id: 'un38-3-test-report',
                                                                        title: 'UN38.3 Test Report',
                                                                    },
                                                                    {
                                                                        id: 'ce',
                                                                        title: 'CE',
                                                                    },
                                                                    {
                                                                        id: 'msds',
                                                                        title: 'MSDS',
                                                                    },
                                                                    {
                                                                        id: 'un38-3-test-summary',
                                                                        title: 'UN38.3 Test Summary',
                                                                    },
                                                                    {
                                                                        id: 'victron-oxovolt-ess',
                                                                        title: 'Victron OXOVOLT ESS',
                                                                    },
                                                                ].map(
                                                                    (
                                                                        item,
                                                                        i,
                                                                    ) => (
                                                                        <FeatureCard
                                                                            key={
                                                                                i
                                                                            }
                                                                            title={
                                                                                item.title
                                                                            }
                                                                            isActive={
                                                                                activePage ===
                                                                                item.id
                                                                            }
                                                                            onPress={() => {
                                                                                if (
                                                                                    item.onClick
                                                                                ) {
                                                                                    item.onClick();
                                                                                } else {
                                                                                    setActivePage(
                                                                                        item.id,
                                                                                    );
                                                                                }
                                                                            }}
                                                                        />
                                                                    ),
                                                                )}
                                                            </div>
                                                        </>
                                                    )}

                                                    {activeTab ===
                                                        'kameleo-series' && (
                                                        <>
                                                            <SectionTag title="Kameleo Series" />
                                                            <SectionTitle
                                                                title={
                                                                    'Coming 2028'
                                                                }
                                                            />
                                                        </>
                                                    )}
                                                </>
                                            </div>
                                        </ScrollShadow>

                                        {activePage && (
                                            <div
                                                className="border-border-default dark:border-border-muted bg-background relative mx-auto h-full w-full overflow-hidden rounded-2xl border shadow-[0_8px_30px_rgb(0,0,0,0.08)] lg:h-[calc(100vh-200px)]"
                                                style={{
                                                    width: isSmallView
                                                        ? 'calc(100% - 16px)'
                                                        : '100%',
                                                }}
                                            >
                                                <ScrollShadow
                                                    className="h-full w-full p-8 pr-4 lg:p-12 lg:pr-8"
                                                    style={{
                                                        height: !isSmallView
                                                            ? 'calc(100% - 60px)'
                                                            : '',
                                                    }}
                                                >
                                                    <PageRenderer
                                                        activePage={activePage}
                                                        onBack={() =>
                                                            setActivePage(null)
                                                        }
                                                    />
                                                    {isSmallView && (
                                                        <StayUpdatedCard />
                                                    )}
                                                </ScrollShadow>
                                            </div>
                                        )}
                                    </div>
                                    {/* </ScrollShadow> */}

                                    {/* Bottom Box */}
                                    {!isSmallView && <StayUpdatedCard />}
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};
