import {
    FlipHorizontal,
    FlipVertical,
    Maximize,
    RotateCcw,
    RotateCw,
    X,
    ZoomIn,
    ZoomOut,
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../lib/utils'

interface ImagePreviewerProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    wrapperClassName?: string
}

const MAX_Z_INDEX = 2147483647

export function ImagePreviewer({
    src,
    alt,
    className,
    wrapperClassName,
    ...props
}: ImagePreviewerProps) {
    // Tự quản lý state bật/tắt
    const [isOpen, setIsOpen] = useState(false)
    const triggerRef = useRef<HTMLDivElement>(null)
    const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)

    const [scale, setScale] = useState(1)
    const [rotate, setRotate] = useState(0)
    const [flipX, setFlipX] = useState(1)
    const [flipY, setFlipY] = useState(1)

    useEffect(() => {
        if (isOpen && triggerRef.current) {
            const heroModal = triggerRef.current.closest(
                '[data-slot="modal-container"]',
            ) as HTMLElement
            setPortalTarget(heroModal || document.body)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handleZoomIn = () => setScale((s) => Math.min(s + 0.5, 5))
    const handleZoomOut = () => setScale((s) => Math.max(s - 0.5, 0.5))
    const handleRotateCw = () => setRotate((r) => r + 90)
    const handleRotateCcw = () => setRotate((r) => r - 90)
    const handleFlipX = () => setFlipX((f) => f * -1)
    const handleFlipY = () => setFlipY((f) => f * -1)
    const handleReset = () => {
        setScale(1)
        setRotate(0)
        setFlipX(1)
        setFlipY(1)
    }

    const handleWheel = (e: React.WheelEvent) => {
        e.stopPropagation()
        const zoomIn = e.deltaY < 0
        if (zoomIn) setScale((s) => Math.min(s + 0.2, 5))
        else setScale((s) => Math.max(s - 0.2, 0.5))
    }

    const renderPreview = () => {
        if (typeof document === 'undefined' || !portalTarget) return null

        return createPortal(
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ zIndex: MAX_Z_INDEX }}
                        className="fixed inset-0 bg-black/95 flex items-center justify-center select-none touch-none"
                        onWheel={handleWheel}
                        onClick={() => {
                            handleReset()
                            setIsOpen(false)
                        }}
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                handleReset()
                                setIsOpen(false)
                            }}
                            className="absolute top-6 right-6 p-3 rounded-full bg-background/10 hover:bg-background/20 text-white z-[60] cursor-pointer"
                        >
                            <X size={24} />
                        </button>

                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                            <motion.img
                                src={src}
                                alt={alt}
                                drag={scale > 1}
                                dragConstraints={{
                                    left: -500,
                                    right: 500,
                                    top: -500,
                                    bottom: 500,
                                }}
                                dragElastic={0.1}
                                className="max-w-[90vw] max-h-[90vh] object-contain cursor-grab active:cursor-grabbing"
                                style={{
                                    scale,
                                    rotate,
                                    scaleX: flipX,
                                    scaleY: flipY,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 30,
                                }}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>

                        <div
                            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-zinc-900/80 backdrop-blur-md p-3 rounded-full border border-white/10 text-white z-[60] shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ToolbarButton
                                icon={<ZoomIn size={20} />}
                                onClick={handleZoomIn}
                                tooltip="Zoom In"
                            />
                            <ToolbarButton
                                icon={<ZoomOut size={20} />}
                                onClick={handleZoomOut}
                                tooltip="Zoom Out"
                            />
                            <div className="w-px h-6 bg-background/20 mx-2" />
                            <ToolbarButton
                                icon={<RotateCcw size={20} />}
                                onClick={handleRotateCcw}
                                tooltip="Rotate Left"
                            />
                            <ToolbarButton
                                icon={<RotateCw size={20} />}
                                onClick={handleRotateCw}
                                tooltip="Rotate Right"
                            />
                            <div className="w-px h-6 bg-background/20 mx-2" />
                            <ToolbarButton
                                icon={<FlipHorizontal size={20} />}
                                onClick={handleFlipX}
                                tooltip="Flip Horizontal"
                            />
                            <ToolbarButton
                                icon={<FlipVertical size={20} />}
                                onClick={handleFlipY}
                                tooltip="Flip Vertical"
                            />
                            <div className="w-px h-6 bg-background/20 mx-2" />
                            <ToolbarButton
                                icon={<Maximize size={20} />}
                                onClick={handleReset}
                                tooltip="Reset"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>,
            portalTarget,
        )
    }

    return (
        <>
            <div
                ref={triggerRef}
                className={cn(
                    'relative cursor-zoom-in group',
                    wrapperClassName,
                )}
                // ĐÃ GẮN LẠI ONCLICK Ở ĐÂY CHUẨN XÁC
                onClick={() => {
                    handleReset()
                    setIsOpen(true)
                }}
            >
                <img src={src} alt={alt} className={className} {...props} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center rounded-inherit pointer-events-none">
                    <ZoomIn
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md"
                        size={32}
                    />
                </div>
            </div>
            {renderPreview()}
        </>
    )
}

function ToolbarButton({
    icon,
    onClick,
    tooltip,
}: {
    icon: React.ReactNode
    onClick: () => void
    tooltip: string
}) {
    return (
        <button
            onClick={onClick}
            title={tooltip}
            className="p-2.5 rounded-full hover:bg-background/20 transition-colors text-zinc-300 hover:text-white cursor-pointer"
        >
            {icon}
        </button>
    )
}
