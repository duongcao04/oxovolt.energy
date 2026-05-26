import { useEffect, useState } from 'react'
import { ResponsiveContainer } from '../../components/layout'
import { Button } from '../../components/ui'

export const ComingSoonPage = () => {
    // Logic đếm ngược đơn giản
    const [timeLeft, setTimeLeft] = useState({
        days: 14,
        hours: 23,
        mins: 59,
        secs: 59,
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => ({
                ...prev,
                secs: prev.secs > 0 ? prev.secs - 1 : 59,
            }))
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <main className="min-h-screen w-full bg-[#0A0A0A] text-white flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Effects: Tia sáng xanh đặc trưng của Oxovolt */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0066FF] opacity-10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#0066FF] opacity-5 blur-[100px] rounded-full" />

            {/* Grid Pattern chìm */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <ResponsiveContainer className="relative z-10 flex flex-col items-center text-center">
                {/* Badge Promotion */}
                <div className="mb-8 animate-fade-in">
                    <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
                        Next Generation Infrastructure
                    </span>
                </div>

                {/* Headline mạnh mẽ */}
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
                    The Power of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                        Continuity
                    </span>
                </h1>

                <p className="text-text-subdued text-sm sm:text-lg max-w-xl mx-auto mb-12 font-medium leading-relaxed">
                    Our engineering team is currently integrating this feature
                    into the Oxovolt Energy environment. Stay tuned for advanced
                    infrastructure updates.
                </p>

                {/* Countdown Timer - Thiết kế dạng thẻ kỹ thuật */}
                <div className="flex gap-4 sm:gap-8 mb-16">
                    <CountdownBlock value={timeLeft.days} label="Days" />
                    <CountdownBlock value={timeLeft.hours} label="Hours" />
                    <CountdownBlock value={timeLeft.mins} label="Mins" />
                    <CountdownBlock value={timeLeft.secs} label="Secs" />
                </div>

                <div className="w-full max-w-lg">
                    <Button variant="outlinedBox">Go to Home Page</Button>
                </div>
            </ResponsiveContainer>
        </main>
    )
}

const CountdownBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
        <div className="text-3xl sm:text-5xl font-black tabular-nums mb-2">
            {value.toString().padStart(2, '0')}
        </div>
        <div className="text-[9px] font-black text-blue-500 uppercase tracking-[0.2em]">
            {label}
        </div>
    </div>
)
