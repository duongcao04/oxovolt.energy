import BatteryImg from '@/assets/batteries/v1-oxovolt-battery.png';
import { useDevice } from '@/hooks';
import { cn } from '@/lib';
import { Modal } from '@heroui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Battery, CheckCircle2, ChevronLeft, ChevronRight, Cloud, Database, Download, Globe, Grid, RefreshCw, Shield, Sun, TowerControl, Wifi, Zap } from 'lucide-react';
import { useState } from 'react';

const ENABLE_FINGER = true;
const NAV_BUTTONS = true;

const alerts = [
    {
        icon: CheckCircle2,
        title: 'All systems operational',
        desc: 'No critical alerts',
        time: 'Just now',
        color: 'text-green-500',
        bg: 'bg-green-50/50 dark:bg-green-500/10'
    },
    {
        icon: Cloud,
        title: 'Cloud connectivity',
        desc: 'All links active',
        time: 'Just now',
        color: 'text-blue-500',
        bg: 'bg-blue-50/50 dark:bg-blue-500/10'
    },
    {
        icon: Battery,
        title: 'Battery status',
        desc: 'Normal',
        time: '2 min ago',
        color: 'text-purple-500',
        bg: 'bg-purple-50/50 dark:bg-purple-500/10'
    },
    {
        icon: Sun,
        title: 'Solar production',
        desc: 'High performance',
        time: '5 min ago',
        color: 'text-orange-500',
        bg: 'bg-orange-50/50 dark:bg-orange-500/10'
    },
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
    }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

export function LiveSystemMonitoringModal({
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

    const leftContent = (
        <div className="flex flex-col gap-6 lg:pr-4">
            <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase sm:text-xs">
                    OXOVOLT – LIVE SYSTEM MONITORING
                </span>
                <h2 className="text-4xl leading-tight font-extrabold text-text-default sm:text-5xl lg:text-5xl lg:leading-[1.1]">
                    Always connected.
                    <br />
                    <span className="text-primary">Always in control.</span>
                </h2>
                <p className="mt-2 text-sm leading-relaxed font-medium text-text-default">
                    One dashboard. Total visibility.<br />
                    Energy, data and connectivity.<br />
                    Everything. Everywhere.
                </p>
            </div>

            <div className="hidden lg:block w-8 h-1 bg-primary/20 rounded"></div>

            <div className="hidden lg:flex flex-col gap-2">
                <span className="text-xs font-bold tracking-widest text-primary uppercase">
                    LIVE SYSTEM MONITORING
                </span>
                <p className="text-xs leading-relaxed font-medium text-text-subdued">
                    Real-time dashboard. Full visibility.<br />
                    Energy, data and connectivity.<br />
                    Everything. Everywhere.
                </p>
                <ChevronRight size={20} className="text-primary mt-2" />
            </div>

            <div className="hidden lg:flex mt-4 flex-col gap-6 rounded-2xl bg-slate-50 p-6 pt-6 border border-slate-100 dark:bg-slate-900 dark:border-slate-800 relative overflow-hidden">
                <div className="flex flex-col gap-2 z-10 relative">
                    <span className="text-xs font-bold text-blue-700">
                        Multi-layer connectivity.
                    </span>
                    <span className="text-[11px] font-medium text-text-default max-w-[160px]">
                        4G/5G, classic networks, Entropia radio, and Starlink as alternative.
                    </span>
                </div>
                <div className="relative mt-2 flex justify-end z-0">
                    <img src={BatteryImg} className="w-32 drop-shadow-lg -mt-12 -mr-4" alt="Connectivity Hardware" />
                </div>
            </div>
        </div>
    );

    const systemOverview = (
        <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">SYSTEM OVERVIEW</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Total Power */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                    <div className="flex items-start gap-3">
                        <div className="flex text-blue-500"><Zap size={20} /></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-text-subdued uppercase">TOTAL POWER</span>
                            <span className="text-2xl font-bold text-text-default">2.45 <span className="text-sm font-medium">kW</span></span>
                        </div>
                    </div>
                    {/* Sparkline Mock */}
                    <div className="mt-4 h-8 w-full">
                        <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="h-full w-full stroke-blue-500 fill-none stroke-[2]">
                            <path d="M0,20 Q10,10 20,25 T40,15 T60,25 T80,5 T100,10" />
                        </svg>
                    </div>
                </div>

                {/* Data Transfer */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                    <div className="flex items-start gap-3">
                        <div className="flex text-green-500"><Database size={20} /></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-text-subdued uppercase">DATA TRANSFER (24H)</span>
                            <span className="text-2xl font-bold text-text-default">18.7 <span className="text-sm font-medium">GB</span></span>
                        </div>
                    </div>
                    <div className="mt-4 h-8 w-full">
                        <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="h-full w-full stroke-green-500 fill-none stroke-[2]">
                            <path d="M0,25 L20,20 L40,22 L60,15 L80,18 L100,5" />
                        </svg>
                    </div>
                </div>

                {/* Network Status */}
                <div className="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                    <div className="flex items-start gap-3">
                        <div className="flex text-purple-500"><Wifi size={20} /></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-text-subdued uppercase">NETWORK STATUS</span>
                            <span className="text-2xl font-bold text-text-default">100%</span>
                            <span className="text-[10px] text-purple-500 font-medium">All systems online</span>
                        </div>
                    </div>
                    <div className="mt-2 h-8 w-full">
                        <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="h-full w-full stroke-purple-500 fill-none stroke-[2]">
                            <path d="M0,15 Q25,20 50,15 T100,15" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );

    const energyFlow = (
        <div className="flex flex-col gap-4 w-full h-full">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">ENERGY FLOW</span>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm dark:bg-slate-900 dark:border-slate-800 flex-1 relative overflow-hidden min-h-[250px]">
                
                {/* Background dashed connecting lines */}
                <svg className="absolute inset-0 w-full h-full z-0 hidden sm:block" preserveAspectRatio="none">
                    {/* Solar to System */}
                    <path d="M 120 70 C 180 70, 180 120, 220 120" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                    {/* Grid to System */}
                    <path d="M 120 180 C 180 180, 180 120, 220 120" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                    {/* System to Loads */}
                    <path d="M 380 120 C 420 120, 420 70, 480 70" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                    {/* System to Battery */}
                    <path d="M 380 120 C 420 120, 420 180, 480 180" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                    {/* Arrow heads */}
                    <circle cx="220" cy="120" r="3" fill="#64748b" />
                    <circle cx="480" cy="70" r="3" fill="#64748b" />
                    <circle cx="480" cy="180" r="3" fill="#64748b" />
                </svg>

                {/* Left Side: Sources */}
                <div className="flex flex-col gap-6 z-10 w-full sm:w-auto">
                    {/* Solar */}
                    <div className="flex flex-col border border-slate-100 p-3 rounded-xl bg-white shadow-sm w-full sm:w-32">
                        <div className="flex items-center gap-2">
                            <Sun size={16} className="text-amber-500" />
                            <span className="text-[10px] font-bold text-text-subdued uppercase">SOLAR</span>
                        </div>
                        <span className="text-sm font-bold mt-1">1.20 <span className="text-[10px] font-normal">kW</span></span>
                        <div className="mt-2 h-4 w-full">
                            <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="h-full w-full stroke-amber-500 fill-none stroke-[1.5]">
                                <path d="M0,15 L20,5 L40,10 L60,0 L80,15 L100,5" />
                            </svg>
                        </div>
                    </div>
                    {/* Grid */}
                    <div className="flex flex-col border border-slate-100 p-3 rounded-xl bg-white shadow-sm w-full sm:w-32">
                        <div className="flex items-center gap-2">
                            <TowerControl size={16} className="text-red-500" />
                            <span className="text-[10px] font-bold text-text-subdued uppercase">GRID</span>
                        </div>
                        <span className="text-sm font-bold mt-1">0.40 <span className="text-[10px] font-normal">kW</span></span>
                        <div className="mt-2 h-4 w-full">
                            <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="h-full w-full stroke-red-500 fill-none stroke-[1.5]">
                                <path d="M0,5 L30,15 L60,5 L80,20 L100,10" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Center: System */}
                <div className="flex flex-col items-center justify-center z-10 my-6 sm:my-0">
                    <span className="text-[9px] font-bold text-primary bg-blue-50 px-2 py-1 rounded mb-2">OXOVOLT SYSTEM</span>
                    <img src={BatteryImg} alt="System" className="w-24 sm:w-32 drop-shadow-md" />
                    <span className="text-lg font-bold mt-2">2.45 <span className="text-xs font-normal">kW</span></span>
                </div>

                {/* Right Side: Sinks */}
                <div className="flex flex-col gap-6 z-10 w-full sm:w-auto">
                    {/* Loads */}
                    <div className="flex flex-col border border-slate-100 p-3 rounded-xl bg-white shadow-sm w-full sm:w-32">
                        <div className="flex items-center gap-2">
                            <Grid size={16} className="text-green-500" />
                            <span className="text-[10px] font-bold text-text-subdued uppercase">LOADS</span>
                        </div>
                        <span className="text-sm font-bold mt-1">1.85 <span className="text-[10px] font-normal">kW</span></span>
                        <div className="mt-2 h-4 w-full">
                            <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="h-full w-full stroke-green-500 fill-none stroke-[1.5]">
                                <path d="M0,15 Q25,0 50,15 T100,5" />
                            </svg>
                        </div>
                    </div>
                    {/* Battery */}
                    <div className="flex flex-col border border-slate-100 p-3 rounded-xl bg-white shadow-sm w-full sm:w-32">
                        <div className="flex items-center gap-2">
                            <Battery size={16} className="text-blue-500" />
                            <span className="text-[10px] font-bold text-text-subdued uppercase">BATTERY</span>
                        </div>
                        <div className="flex justify-between items-baseline mt-1">
                            <span className="text-sm font-bold">60%</span>
                            <span className="text-[10px] font-bold">0.60 <span className="font-normal">kW</span></span>
                        </div>
                        <div className="mt-2 h-4 w-full">
                            <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="h-full w-full stroke-blue-500 fill-none stroke-[1.5]">
                                <path d="M0,20 L30,5 L50,15 L70,0 L100,15" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

    const connectivityMap = (
        <div className="flex flex-col gap-4 w-full h-full">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">CONNECTIVITY MAP</span>
            <div className="flex items-center justify-center rounded-2xl border border-slate-100 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800 flex-1 relative min-h-[250px] overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 250">
                    <circle cx="150" cy="125" r="100" fill="none" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="150" cy="125" r="60" fill="none" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                    
                    {/* Center Node */}
                    <circle cx="150" cy="125" r="24" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
                    
                    {/* Links */}
                    <line x1="150" y1="101" x2="150" y2="45" stroke="#3b82f6" strokeWidth="1.5" />
                    <line x1="172" y1="115" x2="235" y2="85" stroke="#3b82f6" strokeWidth="1.5" />
                    <line x1="172" y1="135" x2="235" y2="165" stroke="#3b82f6" strokeWidth="1.5" />
                    <line x1="128" y1="135" x2="65" y2="165" stroke="#3b82f6" strokeWidth="1.5" />
                    <line x1="128" y1="115" x2="65" y2="85" stroke="#3b82f6" strokeWidth="1.5" />

                    {/* Nodes */}
                    {/* Site 1 */}
                    <circle cx="150" cy="35" r="14" fill="#fff" stroke="#10b981" strokeWidth="1.5" />
                    {/* Site 2 */}
                    <circle cx="245" cy="80" r="14" fill="#fff" stroke="#10b981" strokeWidth="1.5" />
                    {/* Site 3 */}
                    <circle cx="245" cy="170" r="14" fill="#fff" stroke="#10b981" strokeWidth="1.5" />
                    {/* Site 4 */}
                    <circle cx="55" cy="80" r="14" fill="#fff" stroke="#10b981" strokeWidth="1.5" />
                    {/* Site 5 */}
                    <circle cx="55" cy="170" r="14" fill="#fff" stroke="#10b981" strokeWidth="1.5" />
                </svg>
                
                {/* Cloud icon on top of center SVG */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mt-[-10px]">
                    <Cloud size={24} className="text-primary" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-6 text-center">
                    <span className="text-[10px] font-bold text-text-default">OXOVOLT CLOUD</span>
                    <span className="block text-[8px] text-text-subdued">Redundancy: 3x</span>
                    <span className="block text-[8px] text-text-subdued">Fragmentation: 3+3</span>
                </div>
            </div>
        </div>
    );

    const realTimeInsights = (
        <div className="flex flex-col gap-4 col-span-1 lg:col-span-2">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">REAL-TIME INSIGHTS</span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Power Over Time */}
                <div className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-text-default uppercase">POWER OVER TIME</span>
                        <span className="text-[10px] text-text-subdued bg-slate-50 px-2 py-0.5 rounded">24H ∨</span>
                    </div>
                    <span className="text-[10px] text-text-subdued">kW</span>
                    <div className="h-32 w-full mt-2 relative">
                        <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="h-full w-full">
                            <path d="M0,45 L10,35 L20,40 L30,20 L40,10 L50,25 L60,15 L70,30 L80,20 L90,35 L100,10" fill="none" stroke="#f59e0b" strokeWidth="1" />
                            <path d="M0,40 L10,45 L20,30 L30,40 L40,30 L50,20 L60,25 L70,20 L80,10 L90,30 L100,5" fill="none" stroke="#10b981" strokeWidth="1" />
                            <path d="M0,50 L10,48 L20,50 L30,45 L40,48 L50,45 L60,40 L70,45 L80,42 L90,48 L100,45" fill="none" stroke="#ef4444" strokeWidth="1" />
                            <path d="M0,35 L10,30 L20,25 L30,35 L40,25 L50,30 L60,35 L70,30 L80,35 L90,25 L100,20" fill="none" stroke="#3b82f6" strokeWidth="1" />
                        </svg>
                        <div className="absolute bottom-0 w-full flex justify-between text-[8px] text-text-subdued pt-1 border-t border-slate-100">
                            <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>24:00</span>
                        </div>
                    </div>
                    <div className="flex justify-center gap-3 mt-1 text-[9px] font-bold">
                        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-amber-500 rounded-sm"></div>Solar</div>
                        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-sm"></div>Battery</div>
                        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-sm"></div>Load</div>
                        <div className="flex items-center gap-1"><div className="w-2 h-2 bg-red-500 rounded-sm"></div>Grid</div>
                    </div>
                </div>

                {/* Data Transfer Chart */}
                <div className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-text-default uppercase">DATA TRANSFER (24H)</span>
                        <span className="text-[10px] text-text-subdued bg-slate-50 px-2 py-0.5 rounded">24H ∨</span>
                    </div>
                    <span className="text-[10px] text-text-subdued">GB</span>
                    <div className="h-32 w-full mt-2 relative overflow-hidden rounded-b-md">
                        <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="h-full w-full">
                            <defs>
                                <linearGradient id="purpleGrad" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3"/>
                                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0"/>
                                </linearGradient>
                            </defs>
                            <path d="M0,45 L15,30 L30,40 L45,20 L60,35 L75,10 L90,25 L100,5 L100,50 L0,50 Z" fill="url(#purpleGrad)" />
                            <path d="M0,45 L15,30 L30,40 L45,20 L60,35 L75,10 L90,25 L100,5" fill="none" stroke="#a855f7" strokeWidth="1.5" />
                        </svg>
                        <div className="absolute bottom-0 w-full flex justify-between text-[8px] text-text-subdued pt-1 border-t border-slate-100">
                            <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>24:00</span>
                        </div>
                    </div>
                </div>

                {/* Network Health Chart */}
                <div className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-text-default uppercase">NETWORK HEALTH</span>
                        <span className="text-[10px] text-text-subdued bg-slate-50 px-2 py-0.5 rounded">24H ∨</span>
                    </div>
                    <span className="text-[10px] text-text-subdued">%</span>
                    <div className="h-32 w-full mt-2 relative flex items-end justify-between pb-4 px-2">
                         <div className="w-4 bg-green-500 rounded-t h-[90%]"></div>
                         <div className="w-4 bg-green-500 rounded-t h-[95%]"></div>
                         <div className="w-4 bg-green-500 rounded-t h-[100%]"></div>
                         <div className="w-4 bg-green-500 rounded-t h-[85%]"></div>
                         <div className="w-4 bg-green-500 rounded-t h-[92%]"></div>
                         <div className="absolute bottom-0 w-full left-0 flex justify-between text-[8px] text-text-subdued pt-1 border-t border-slate-100 px-1">
                            <span>SITE 1</span><span>SITE 2</span><span>SITE 3</span><span>SITE 4</span><span>SITE 5</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const rightAlerts = (
        <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-widest text-primary uppercase">ALERTS & STATUS</span>
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                {alerts.map((alert, i) => {
                    const Icon = alert.icon;
                    return (
                        <div key={i} className="flex gap-3 pb-3 border-b border-slate-50 last:border-0 last:pb-0">
                            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${alert.bg} ${alert.color}`}>
                                <Icon size={20} />
                            </div>
                            <div className="flex flex-col w-full">
                                <span className="text-[11px] font-bold text-text-default">{alert.title}</span>
                                <span className="text-[10px] text-text-subdued">{alert.desc}</span>
                                <span className="text-[9px] text-text-subdued text-right -mt-4">{alert.time}</span>
                            </div>
                        </div>
                    );
                })}
                <div className="flex items-center gap-1 mt-2 cursor-pointer group">
                    <span className="text-[11px] font-bold text-primary">View all alerts</span>
                    <ChevronRight size={14} className="text-primary transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </div>
    );

    const mobileRecentActivity = (
        <div className="flex flex-col gap-4 mt-6">
            <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">RECENT ACTIVITY</span>
                <span className="text-[10px] font-bold text-primary">View all</span>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm dark:bg-slate-900 dark:border-slate-800">
                
                <div className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                    <Cloud className="text-green-500 shrink-0" size={20} />
                    <div className="flex flex-col flex-1">
                        <span className="text-[11px] font-bold text-text-default">Data uploaded</span>
                        <span className="text-[10px] text-text-subdued">report_q2.pdf (3.2 MB)</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] text-text-default">Liège (Bjorn)</span>
                        <span className="text-[9px] text-text-subdued">2 min ago</span>
                    </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                    <RefreshCw className="text-blue-500 shrink-0" size={20} />
                    <div className="flex flex-col flex-1">
                        <span className="text-[11px] font-bold text-text-default">File synced</span>
                        <span className="text-[10px] text-text-subdued">project_k.docx (18 MB)</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] text-text-default">Arlon</span>
                        <span className="text-[9px] text-text-subdued">5 min ago</span>
                    </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                    <Download className="text-green-500 shrink-0" size={20} />
                    <div className="flex flex-col flex-1">
                        <span className="text-[11px] font-bold text-text-default">Backup downloaded</span>
                        <span className="text-[10px] text-text-subdued">backup.zip (1.1 GB)</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-[10px] text-text-default">Verviers (Labo)</span>
                        <span className="text-[9px] text-text-subdued">12 min ago</span>
                    </div>
                </div>

            </div>
        </div>
    );

    const footerBoxes = (
        <div className="mt-6 flex w-full flex-col gap-6 border-t border-slate-100 pt-6 lg:mt-8 lg:flex-row lg:items-stretch lg:gap-8">
            <div className="flex flex-1 items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-blue-50 text-primary dark:bg-blue-900/30">
                    <Globe size={20} />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
                        CONNECTED ANYWHERE
                    </span>
                    <span className="text-[11px] leading-relaxed font-medium text-text-subdued">
                        Multiple technologies. Intelligent routing.<br />Seamless connectivity.
                    </span>
                </div>
            </div>

            <div className="hidden w-px bg-slate-200 lg:block" />
            <div className="block h-px w-full bg-slate-100 lg:hidden" />

            <div className="flex flex-1 items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-blue-50 text-primary dark:bg-blue-900/30">
                    <Shield size={20} fill="currentColor" className="text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-bold tracking-widest text-primary uppercase">
                        SECURE BY DESIGN
                    </span>
                    <span className="text-[11px] leading-relaxed font-medium text-text-subdued">
                        Encrypted. Private. Protected.<br />Your data, always safe.
                    </span>
                </div>
            </div>

            {/* Marquee area */}
            <div className="hidden flex-[1.5] items-center justify-end border-l border-slate-200 pl-8 lg:flex">
                <span className="text-right text-[10px] font-bold tracking-[0.2em] text-slate-400">
                    OFFICES &nbsp;&nbsp;&nbsp; INDUSTRY &nbsp;&nbsp;&nbsp; <span className="text-text-default">HEALTHCARE</span> &nbsp;&nbsp;&nbsp; PRIVATE &nbsp;&nbsp;&nbsp; OFFICES &nbsp;&nbsp;&nbsp; INFRASTRUCTURE
                </span>
            </div>
        </div>
    );

    const desktopLayout = (
        <div className="flex w-full flex-col gap-8 px-6 py-10 lg:p-10 lg:pb-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_3.5fr_1fr] lg:gap-10">
                
                {/* Left Column */}
                {leftContent}

                {/* Middle Dashboard */}
                <div className="flex flex-col gap-8">
                    {systemOverview}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {energyFlow}
                        {connectivityMap}
                    </div>
                    {realTimeInsights}
                </div>

                {/* Right Column */}
                <div className="flex flex-col">
                    {rightAlerts}
                </div>
            </div>
            {footerBoxes}
        </div>
    );

    const mobilePage1 = (
        <div className="flex w-full flex-col px-6 py-6">
            <div className="mb-6 flex items-center justify-between">
                 <span className="text-[11px] font-bold tracking-widest text-primary uppercase">OXOVOLT - LIVE SYSTEM MONITORING</span>
            </div>
            {leftContent}
            <div className="mt-8 flex flex-col gap-8">
                {systemOverview}
                {energyFlow}
                {connectivityMap}
            </div>
        </div>
    );

    const mobilePage2 = (
        <div className="flex w-full flex-col px-6 py-6">
            <div className="mb-6 flex items-center justify-between">
                 <span className="text-[11px] font-bold tracking-widest text-primary uppercase">OXOVOLT - LIVE SYSTEM MONITORING</span>
            </div>
            <div className="flex flex-col gap-8">
                {realTimeInsights}
                {mobileRecentActivity}
            </div>
            <div className="mt-8">
                {footerBoxes}
            </div>
        </div>
    );

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container size={isSmallView ? 'full' : 'cover'}>
                    <Modal.Dialog
                        className={cn(
                            'mx-auto w-full bg-slate-50 p-0 shadow-2xl dark:bg-background',
                            isSmallView
                                ? 'flex h-[100dvh] flex-col overflow-hidden rounded-none'
                                : 'max-h-[95vh] max-w-[1700px] lg:rounded-[32px] lg:p-0',
                        )}
                    >
                        <Modal.CloseTrigger className="top-4 right-4 z-50 rounded-full bg-white p-2 text-text-subdued shadow-md transition-colors hover:bg-slate-100 sm:top-6 sm:right-6 lg:top-8 lg:right-8" />

                        {isSmallView && (
                            <Modal.Header className="absolute z-50 grid shrink-0 grid-cols-[1fr_84px_44px_84px_1fr] items-center px-4 pt-6 pb-4 w-full">
                                <div />
                                <div className="flex justify-start">
                                    {NAV_BUTTONS && (
                                        <button
                                            onClick={() => paginate(-1)}
                                            disabled={page === 0}
                                            className={cn(
                                                'flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-md transition-opacity',
                                                page === 0 ? 'opacity-0' : 'opacity-100'
                                            )}
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                    )}
                                </div>

                                <div className="flex flex-col items-center justify-center">
                                    <div className="flex items-center gap-1.5">
                                        <div className={`h-1.5 w-1.5 rounded-full transition-colors ${page === 0 ? 'bg-primary' : 'bg-slate-300'}`} />
                                        <div className={`h-1.5 w-1.5 rounded-full transition-colors ${page === 1 ? 'bg-primary' : 'bg-slate-300'}`} />
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    {NAV_BUTTONS && (
                                        <button
                                            onClick={() => paginate(1)}
                                            disabled={page === 1}
                                            className={cn(
                                                'flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-md transition-opacity',
                                                page === 1 ? 'opacity-0' : 'opacity-100'
                                            )}
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    )}
                                </div>
                                <div />
                            </Modal.Header>
                        )}

                        <Modal.Body
                            className={cn(
                                'mt-0 p-0',
                                isSmallView
                                    ? 'relative min-h-0 flex-1'
                                    : 'overflow-x-hidden overflow-y-auto rounded-[32px]',
                            )}
                        >
                            {isSmallView ? (
                                <AnimatePresence initial={false} custom={direction}>
                                    <motion.div
                                        key={page}
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            x: { type: 'spring', stiffness: 300, damping: 30 },
                                            opacity: { duration: 0.2 },
                                        }}
                                        drag={ENABLE_FINGER ? 'x' : false}
                                        dragConstraints={{ left: 0, right: 0 }}
                                        dragElastic={1}
                                        onDragEnd={(_, { offset, velocity }) => {
                                            const swipe = swipePower(offset.x, velocity.x);
                                            if (swipe < -swipeConfidenceThreshold) {
                                                paginate(1);
                                            } else if (swipe > swipeConfidenceThreshold) {
                                                paginate(-1);
                                            }
                                        }}
                                        className="absolute inset-0 flex w-full touch-pan-y flex-col overflow-x-hidden overflow-y-auto bg-slate-50 dark:bg-background pt-16"
                                    >
                                        <div className="flex min-h-full flex-col pb-6">
                                            {page === 0 ? mobilePage1 : mobilePage2}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            ) : (
                                desktopLayout
                            )}
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
