import { QrCode, ChevronLeft, ChevronRight } from 'lucide-react';
import BatteryImage from '@/assets/batteries/v2-oxovolt-battery.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal, Button } from '@heroui/react';
import { Icon } from '@iconify-icon/react';
import { useDevice } from '@/hooks';
import { useState } from 'react';
import { Image } from 'antd';

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
    }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export function MobileLoopxcellDatasheetModal({
    isOpen,
    onOpenChange,
}: {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    const { isSmallView } = useDevice();
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection: number) => {
        if (page + newDirection < 0 || page + newDirection > 1) return;
        setPage([page + newDirection, newDirection]);
    };

    const footerContent = (
        <div className="mt-auto flex w-full flex-col items-center justify-between gap-6 border-t-[1.5px] border-blue-400 bg-background px-4 py-4 lg:flex-row lg:px-8 lg:py-4">
            {/* Text items row */}
            <div className="flex flex-1 flex-wrap items-center justify-center gap-x-2 gap-y-4 lg:justify-start lg:gap-x-4">
                <FooterTextItem title="Lifetime" subtitle="Oxoflex Program" />
                <div className="hidden h-8 w-[1.5px] bg-blue-400 lg:block" />
                <FooterTextItem title="Modular" subtitle="6 x 6 kWh" />
                <div className="hidden h-8 w-[1.5px] bg-blue-400 lg:block" />
                <FooterTextItem title="Phase" subtitle="Balancing" />
                <div className="hidden h-8 w-[1.5px] bg-blue-400 lg:block" />
                <FooterTextItem title="UPS" subtitle="Ready" />
                <div className="hidden h-8 w-[1.5px] bg-blue-400 lg:block" />
                <FooterTextItem title="Trading" subtitle="Ready" />
                <div className="hidden h-8 w-[1.5px] bg-blue-400 lg:block" />
                <FooterTextItem title="Cloud & Nodes" subtitle="Network" />
                <div className="hidden h-8 w-[1.5px] bg-blue-400 lg:block" />
                <FooterTextItem title="Satellite &" subtitle="Radio" />
            </div>

            {/* Serial & QR */}
            <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row lg:mt-0">
                <div className="flex flex-col items-center justify-center rounded-lg border-[1.5px] border-blue-500 px-6 py-2">
                    <span className="mb-0.5 text-[9px] font-bold tracking-widest text-blue-700 uppercase">
                        SERIAL NUMBER
                    </span>
                    <span className="text-lg font-bold tracking-wider text-blue-700">
                        LXC40-XXXXXX
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <QrCode size={40} className="text-text-default" />
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                            SCAN HERE
                        </span>
                        <span className="text-[10px] tracking-wider text-text-subdued uppercase">
                            OFFICIAL DOCUMENTS
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

    const page1Content = (
        <div className="mx-auto flex w-full max-w-lg flex-1 flex-col border-blue-400 lg:border-r-[1.5px] lg:border-l-[1.5px]">
            <div className="flex items-center justify-between border-b-[1.5px] border-blue-400 px-6 py-4">
                <span className="text-xs font-bold tracking-widest text-text-default uppercase">
                    LOOPXCELL{' '}
                    <span className="font-normal text-text-subdued">SERIES</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                    BUILT YEAR 2026
                </span>
            </div>

            <div className="flex items-end justify-between px-6 pt-6 pb-2">
                <div>
                    <p className="mb-0.5 text-[9px] font-bold tracking-widest text-blue-700 uppercase">
                        CAPACITY
                    </p>
                    <p className="text-3xl font-bold tracking-tight text-text-default">
                        40 kWh
                    </p>
                </div>

                <div className="flex items-center gap-2 pb-1">
                    <span className="text-[8px] font-bold tracking-widest text-text-default uppercase">
                        DESIGNED & MADE IN BELGIUM
                    </span>
                    <Icon icon="flagpack:be" width={20} />
                </div>
            </div>

            <div className="mb-6 flex w-full justify-center px-6">
                <Image
                    src={BatteryImage}
                    alt="LoopXcell 40 kWh"
                    className="w-full max-w-[180px] object-contain drop-shadow-md"
                    preview={false}
                />
            </div>

            <div className="flex flex-col">
                <FeatureItem
                    title="CONTINUOUS OPERATION, 24/7"
                    desc="Designed to power entire buildings continuously — not only during outages."
                />
                <FeatureItem
                    title="PRIMARY OR BACKUP. YOUR CHOICE."
                    desc="Use Oxovolt as your main energy source or as intelligent backup infrastructure."
                />
                <FeatureItem
                    title="POWER THE ENTIRE BUILDING"
                    desc="Offices, infrastructure, servers, lighting, HVAC and critical systems."
                />
                <FeatureItem
                    title="DYNAMIC ENERGY OPTIMIZATION"
                    desc="Charge automatically when electricity prices are lower. Power intelligently throughout the day."
                />
                <FeatureItem
                    title="INTEGRATED ENERGY ECOSYSTEM"
                    desc="Built-in inverters, solar chargers, battery intelligence, DATA VAULT and CONNECTIVITY modules."
                    isLast
                />
            </div>
        </div>
    );

    const page2Content = (
        <div className="grid h-fit flex-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* COLUMN 1 */}
            <div className="flex flex-col border-blue-400 lg:border-r-[1.5px]">
                <SpecTable
                    title="BATTERY SYSTEM"
                    rows={[
                        { label: 'Technology', value: 'LiFePO4' },
                        { label: 'Nominal Energy Pack', value: '38 kWh' },
                        { label: 'Usable Energy', value: '36 kWh' },
                        { label: 'Nominal Voltage', value: '48 Vdc' },
                        { label: 'Voltage Max (Pack)', value: '64 Vdc' },
                        { label: 'Partitions Cells (Unlockable)', value: '6 x 6 kWh' },
                        { label: 'Débridable On Demand', value: 'YES' },
                        { label: 'Minimum Activated Partition', value: '2' },
                        { label: 'Depth of Discharge', value: '> 100 %' },
                        { label: 'Cycles (80% DOD)', value: '> 6000' },
                        {
                            label: 'Warranty',
                            value: 'Oxoflex Lifetime Program',
                        },
                    ]}
                />
                <SpecTable
                    title="CELL ACTIVE BALANCING"
                    rows={[
                        { label: 'BMS Active Balancer', value: '2A' },
                        { label: 'Voltage Balancing Accuracy', value: '3 mV' },
                        { label: 'Balancing 24/7', value: 'YES' },
                    ]}
                />
                <SpecTable
                    title="ADDITIONAL ACTIVE BALANCER MODULE"
                    rows={[
                        {
                            label: 'Isolated Active Balancer Module',
                            value: '10A',
                        },
                        { label: 'Voltage Balancing Accuracy', value: '3 mV' },
                        { label: 'Balancing 24/7', value: 'YES' },
                        {
                            label: 'Voltage Balancing Precision 24/7',
                            value: '3 mV',
                        },
                    ]}
                />
                <SpecTable
                    title="INVERTER SYSTEM"
                    rows={[
                        { label: 'Inverters', value: '3 x MultiPlus-II 5000' },
                        {
                            label: 'Peak Power (per inverter)',
                            value: '10 000 W',
                        },
                        {
                            label: 'Continuous Power (per inverter)',
                            value: '5000 W',
                        },
                        { label: 'AC Coupling', value: 'YES' },
                        { label: 'Phase Balancing', value: 'YES' },
                        { label: 'Parallel Capability', value: 'YES' },
                        { label: 'UPS Function', value: 'YES' },
                        {
                            label: 'Continuous Power Supply (Infrastructure)',
                            value: 'YES',
                        },
                    ]}
                    isLast
                />
            </div>

            {/* COLUMN 2 */}
            <div className="flex flex-col border-blue-400 lg:border-r-[1.5px]">
                <SpecTable
                    title="SOLAR CHARGER"
                    rows={[
                        { label: 'Controler', value: 'MPPT RS 450/200' },
                        { label: 'Max PV Power', value: '11 500 W' },
                        { label: 'Max PV Voltage', value: '450 Vdc' },
                        { label: 'MPPT Voltage Range', value: '70 - 450 Vdc' },
                        { label: 'Max Charge Current', value: '200 A' },
                    ]}
                />
                <SpecTable
                    title="GRID COMPATIBILITY"
                    rows={[
                        { label: 'Mono 230 V', value: 'YES' },
                        {
                            label: 'Tri 3x230 V (without Neutral)',
                            value: 'YES',
                        },
                        { label: 'Tri 400 V', value: 'YES' },
                        { label: 'Frequency', value: '50 / 60 Hz' },
                        { label: 'Phase Balancing', value: 'YES' },
                        {
                            label: 'Grid Modes',
                            value: 'On-Grid / Off-Grid / Hybrid',
                        },
                    ]}
                />
                <SpecTable
                    title="IMMERSION COOLING (OPTIONAL)"
                    rows={[
                        { label: 'Immersion Cooling', value: 'YES' },
                        { label: 'Cooling Fluid', value: 'Dielectric' },
                        {
                            label: 'Benefits',
                            value: 'More Power, Safety &\nOperating Temperature',
                        },
                        {
                            label: 'Operating Temperature',
                            value: '-80°C to +80°C',
                        },
                    ]}
                />
                <SpecTable
                    title="CONNECTIVITY & COMMUNICATIONS"
                    rows={[
                        { label: 'Cloud Platform', value: 'OXOVOLT Cloud' },
                        { label: 'Monitoring', value: 'Real-time' },
                        { label: 'Remote Access', value: 'YES' },
                        { label: 'Firmware Updates', value: 'OTA' },
                        {
                            label: 'Connectivity',
                            value: 'Ethernet / WiFi / 4G / 5G',
                        },
                        { label: 'Satellite', value: 'YES' },
                        { label: 'Radio (Long Range)', value: 'YES' },
                    ]}
                    isLast
                />
            </div>

            {/* COLUMN 3 */}
            <div className="flex flex-col">
                <SpecTable
                    title="ORCHESTRATOR"
                    rows={[
                        { label: 'CEREBROX Orchestrator', value: 'YES' },
                        {
                            label: 'Processor',
                            value: 'Quad Core ARM Cortex-A72',
                        },
                        { label: 'RAM', value: '2 GB' },
                        { label: 'eMMC Storage', value: '32 GB' },
                        { label: 'Operating System', value: 'Linux' },
                        { label: 'Ethernet', value: '2x Gigabit' },
                        { label: 'WiFi', value: '802.11 b/g/n/ac' },
                        { label: 'Bluetooth', value: 'Bluetooth 4.2' },
                        { label: 'VE.Direct Ports', value: '3' },
                        { label: 'VE.Can Ports', value: '2' },
                        { label: 'USB Ports', value: '2' },
                        { label: 'Digital Inputs', value: '4' },
                        { label: 'Relay Outputs', value: '2' },
                        { label: 'Data Logging', value: 'YES' },
                        { label: 'Remote Console', value: 'YES' },
                        { label: 'Web Interface', value: 'YES' },
                        { label: 'Mobile App', value: 'YES' },
                        { label: 'MQTT', value: 'YES' },
                        { label: 'Modbus TCP', value: 'YES' },
                        { label: 'NTP', value: 'YES' },
                    ]}
                />

                {/* Splitting Data Storage and Energy Trading */}
                <div className="flex flex-col border-b-[1.5px] border-blue-400 sm:flex-row">
                    <div className="flex-1 border-blue-400 sm:border-r-[1.5px]">
                        <SpecTable
                            title="OXOVOLT DATA STORAGE ARCHITECTURE"
                            rows={[
                                {
                                    label: 'File Management',
                                    value: 'S3ic & Distributed',
                                },
                                {
                                    label: 'Storage via',
                                    value: 'Local & Nodes Network',
                                },
                                { label: 'Minimum Duplication', value: '2' },
                                { label: 'Maximum Duplication', value: '9' },
                                { label: 'Encryption', value: 'AES-256' },
                                { label: 'Data Sovereignty', value: 'YES' },
                            ]}
                            isLast
                            isSplit
                        />
                    </div>
                    <div className="flex-1">
                        <SpecTable
                            title="ENERGY TRADING"
                            rows={[
                                { label: 'Energy Trading', value: 'YES' },
                                {
                                    label: 'Charge Capability (from grid)',
                                    value: 'YES',
                                },
                                {
                                    label: 'Inject Capability (to grid)',
                                    value: 'YES',
                                },
                                {
                                    label: 'Dynamic Pricing',
                                    value: 'YES (24/7)',
                                },
                                { label: 'Smart Scheduling', value: 'YES' },
                                {
                                    label: 'Market API Integration',
                                    value: 'YES',
                                },
                            ]}
                            isLast
                            isSplit
                        />
                    </div>
                </div>

                <SpecTable
                    title="PROTECTIONS"
                    rows={[
                        { label: 'DC Protection', value: 'Integrated' },
                        { label: 'AC Protection', value: 'Integrated' },
                        { label: 'Surge Protection', value: 'Type II' },
                        { label: 'Overload Protection', value: 'YES' },
                        { label: 'Short Circuit Protection', value: 'YES' },
                        { label: 'Reverse Polarity Protection', value: 'YES' },
                        { label: 'BMS Multi-Level Protection', value: 'YES' },
                    ]}
                    isLast
                />
            </div>
        </div>
    );

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container size={isSmallView ? 'full' : 'cover'}>
                    <Modal.Dialog className="flex h-[100dvh] flex-col overflow-hidden bg-background p-0 lg:h-auto lg:p-6">
                        <Modal.CloseTrigger className="z-50" />

                        <Modal.Header className="relative flex shrink-0 justify-center pt-8 pb-4">
                            <div className="flex flex-col gap-1">
                                {/* Mobile Pagination Indicator */}
                                <div className="w-full flex items-center justify-center gap-1">
                                    <div
                                        className={`h-1.5 w-1.5 rounded-full transition-colors ${page === 0 ? 'bg-primary' : 'bg-gray-300'}`}
                                    />
                                    <div
                                        className={`h-1.5 w-1.5 rounded-full transition-colors ${page === 1 ? 'bg-primary' : 'bg-gray-300'}`}
                                    />
                                </div>
                                <h1 className="w-full pb-2 text-center text-lg font-extrabold tracking-wider text-[#1a2b6b] uppercase sm:text-xl">
                                    DATASHEET
                                </h1>
                            </div>

                            {/* Desktop Controls */}
                            <div className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 items-center justify-between gap-2 px-18">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onPress={() => paginate(-1)}
                                    isDisabled={page === 0}
                                    className="bg-blue-50 font-bold tracking-wider text-blue-700 uppercase"
                                >
                                    <ChevronLeft size={16} /> Prev
                                </Button>
                                <span className="pt-12 text-xs font-bold text-text-subdued">
                                    {page + 1} / 2
                                </span>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onPress={() => paginate(1)}
                                    isDisabled={page === 1}
                                    className="bg-blue-50 font-bold tracking-wider text-blue-700 uppercase"
                                >
                                    Next <ChevronRight size={16} />
                                </Button>
                            </div>
                        </Modal.Header>

                        {/* Swipeable Body Area */}
                        <Modal.Body className="relative mt-0 min-h-0 flex-1 bg-background p-0">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={page}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: {
                                            type: 'spring',
                                            stiffness: 300,
                                            damping: 30,
                                        },
                                        opacity: { duration: 0.2 },
                                    }}
                                    drag={isSmallView ? 'x' : false}
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={1}
                                    onDragEnd={(_, { offset, velocity }) => {
                                        if (!isSmallView) return;
                                        const swipe = swipePower(
                                            offset.x,
                                            velocity.x,
                                        );

                                        if (swipe < -swipeConfidenceThreshold) {
                                            paginate(1);
                                        } else if (
                                            swipe > swipeConfidenceThreshold
                                        ) {
                                            paginate(-1);
                                        }
                                    }}
                                    className="absolute inset-0 flex w-full touch-pan-y flex-col overflow-x-hidden overflow-y-auto"
                                >
                                    <div className="flex min-h-full flex-col border-t-[1.5px] border-blue-400 pb-20 lg:pb-0">
                                        {page === 0
                                            ? page1Content
                                            : page2Content}

                                        {/* Render footer inside body for mobile so it scrolls */}
                                        {isSmallView && footerContent}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </Modal.Body>

                        {/* Render footer outside body for desktop so it's fixed */}
                        {!isSmallView && (
                            <Modal.Footer className="mt-0 shrink-0 p-0">
                                {footerContent}
                            </Modal.Footer>
                        )}
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}

function FeatureItem({
    title,
    desc,
    isLast = false,
}: {
    title: string;
    desc: string;
    isLast?: boolean;
}) {
    return (
        <div
            className={`flex flex-col gap-1 border-t-[1.5px] border-blue-400 px-6 py-4 ${isLast ? 'border-b-[1.5px] border-blue-400 lg:border-b-0' : ''}`}
        >
            <h4 className="text-[10px] font-extrabold tracking-widest text-blue-700 uppercase">
                {title}
            </h4>
            <p className="text-[11px] leading-relaxed font-medium text-text-subdued">
                {desc}
            </p>
        </div>
    );
}

function SpecTable({
    title,
    rows,
    isLast = false,
    isSplit = false,
}: {
    title: string;
    rows: { label: string; value: string }[];
    isLast?: boolean;
    isSplit?: boolean;
}) {
    return (
        <div
            className={`flex flex-col px-6 py-4 ${isLast ? '' : 'border-b-[1.5px] border-blue-400'}`}
        >
            <h3
                className={`mb-3 text-[10px] font-extrabold tracking-widest text-blue-700 uppercase ${isSplit ? 'pr-4' : ''}`}
            >
                {title}
            </h3>
            <div className="flex flex-col gap-2">
                {rows.map((row, idx) => (
                    <div
                        key={idx}
                        className="flex items-start justify-between gap-4"
                    >
                        <span className="text-[10px] leading-snug font-bold text-text-default">
                            {row.label}
                        </span>
                        <span className="max-w-[140px] text-right text-[10px] leading-snug font-bold whitespace-pre-line text-text-default">
                            {row.value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function FooterTextItem({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) {
    return (
        <div className="flex flex-col items-center justify-center px-2 sm:w-auto lg:px-0">
            <span className="text-[9px] font-bold tracking-wider text-text-default uppercase">
                {title}
            </span>
            <span className="text-[9px] font-bold tracking-wider text-text-default uppercase">
                {subtitle}
            </span>
        </div>
    );
}
