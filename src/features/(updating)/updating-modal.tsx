import { Button, Modal } from '@heroui/react'
import { RocketIcon } from 'lucide-react'
import { envConfig } from '../../config'

export const UpdatingModal = ({
    isOpen,
    onOpenChange,
}: {
    isOpen: boolean
    onOpenChange: (state: boolean) => void
}) => {
    return (
        <Modal.Backdrop isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Container size="lg">
                <Modal.Dialog>
                    <Modal.CloseTrigger />
                    <Modal.Header>
                        <Modal.Icon className="bg-default text-foreground">
                            <RocketIcon className="size-5" />
                        </Modal.Icon>
                        <Modal.Heading>Updating Infrastructure</Modal.Heading>
                    </Modal.Header>
                    <Modal.Body>
                        <ComingSoonContent />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="w-full" slot="close">
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal.Container>
        </Modal.Backdrop>
    )
}
const ComingSoonContent = () => {
    return (
        <div className="flex flex-col items-center text-center py-10 px-6">
            {/* 1. Animated Technical Graphic */}
            <div className="mb-10">
                <ConstructionGraphic />
            </div>

            {/* 2. Headline & Status Eyebrow */}
            <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-blue-50 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4 rounded-sm border border-blue-100">
                    In Development
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-text-default mb-3 uppercase">
                    Expanding the <br />
                    <span className="text-primary">Continuity Ecosystem</span>
                </h2>
                <p className="text-sm text-text-subdued max-w-sm mx-auto leading-relaxed">
                    Our engineering team is currently integrating this feature
                    into the {envConfig.APP_TITLE} environment. Stay tuned for
                    advanced infrastructure updates.
                </p>
            </div>

            {/* 3. Progress / Roadmap Visual */}
            <div className="w-full max-w-xs space-y-6">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-text-subdued">
                        <span>Phase: Optimization</span>
                        <span>Est. 2026</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[60%] animate-pulse" />
                    </div>
                </div>
            </div>
        </div>
    )
}
const ConstructionGraphic = () => (
    <svg
        width="140"
        height="140"
        viewBox="0 0 140 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Background Grid */}
        <path
            d="M20 40H120M20 70H120M20 100H120M40 20V120M70 20V120M100 20V120"
            stroke="#E5E7EB"
            strokeWidth="1"
            strokeDasharray="4 4"
        />

        {/* Floating "Building Blocks" */}
        <rect
            x="55"
            y="55"
            width="30"
            height="30"
            rx="2"
            fill="white"
            stroke="#0066FF"
            strokeWidth="2"
            className="animate-bounce"
        />

        {/* Blue Technical Accents */}
        <rect x="35" y="85" width="10" height="10" rx="1" fill="#0066FF">
            <animate
                attributeName="opacity"
                values="0.2;1;0.2"
                dur="2s"
                repeatCount="indefinite"
            />
        </rect>
        <rect x="95" y="45" width="10" height="10" rx="1" fill="#0066FF">
            <animate
                attributeName="opacity"
                values="1;0.2;1"
                dur="2s"
                repeatCount="indefinite"
            />
        </rect>

        {/* Connecting Line */}
        <path
            d="M45 90H55M85 70H95"
            stroke="#0066FF"
            strokeWidth="2"
            strokeLinecap="round"
        />

        {/* Large 'X' Watermark behind */}
        <path
            d="M30 30L110 110M110 30L30 110"
            stroke="#0066FF"
            strokeOpacity="0.05"
            strokeWidth="8"
        />
    </svg>
)
