import { AnimatePresence, motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useDevice } from '../../hooks';
import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { Image } from 'antd';
import lodash from 'lodash';

export type CarouselItem = {
    id: string | number;
    title: string;
    description?: string;
    image?: string;
};

export type CarouselData = CarouselItem[];

const SWIPE_THRESHOLD = 50;

export function StackedCarousel({
    carousels,
    imageProps,
    wrapperClassName,
    containerClassName,
}: {
    carousels: CarouselData;
    imageProps?: React.ImgHTMLAttributes<HTMLImageElement>;
    wrapperClassName?: string;
    containerClassName?: string;
}) {
    const { onClick: customOnClick, ...restImageProps } = imageProps || {};
    const { isSmallView } = useDevice();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        if (currentIndex >= carousels.length - 1) return;
        setDirection(1);
        setCurrentIndex((prev) => prev + 1);
    };

    const handlePrev = () => {
        if (currentIndex <= 0) return;
        setDirection(-1);
        setCurrentIndex((prev) => prev - 1);
    };

    // Chỉ kiểm tra drag xa bao nhiêu để đổi Slide.
    // Framer Motion sẽ tự ĐÌNH CHỈ onClick của CustomImage nếu có hành động drag xảy ra!
    const handleDragEnd = (
        _: MouseEvent | TouchEvent | PointerEvent,
        info: { offset: { x: number } },
    ) => {
        if (info.offset.x < -SWIPE_THRESHOLD) {
            handleNext();
        } else if (info.offset.x > SWIPE_THRESHOLD) {
            handlePrev();
        }
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: { zIndex: 10, x: 0, opacity: 1 },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }),
    };

    const activeItem = carousels[currentIndex];

    const imagePreviews = carousels
        .filter((it) => !lodash.isEmpty(it.image))
        .map((it) => it.image) as string[];

    return (
        <div className="text-text-default flex size-full items-center justify-center p-8 font-sans">
            <div className="flex w-full max-w-5xl flex-col items-center gap-12 md:flex-row md:gap-24">
                {/* Left Column: Image Stack */}
                <Image.PreviewGroup
                    items={imagePreviews}
                    preview={{
                        current: currentIndex,
                        onChange: (current) => {
                            setDirection(current > currentIndex ? 1 : -1);
                            setCurrentIndex(current);
                        },
                        getContainer: () =>
                            document.querySelector(
                                '[data-slot="modal-dialog"]',
                            ) || document.body,
                        rootClassName: 'solid-black-preview',
                    }}
                >
                    <div
                        className={cn(
                            'relative w-full shrink-0',
                            containerClassName || 'aspect-square max-w-100',
                        )}
                    >
                        <div className="pointer-events-none absolute inset-0 scale-95 -rotate-6 transform rounded-2xl bg-[#2a2a2a] opacity-60 transition-transform duration-500" />
                        <div className="pointer-events-none absolute inset-0 scale-95 rotate-3 transform rounded-2xl bg-[#3a3a3a] opacity-80 transition-transform duration-500" />

                        <div
                            className={cn(
                                'relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-black shadow-2xl',
                                wrapperClassName,
                            )}
                        >
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 30,
                                        opacity: { duration: 0.2 },
                                    }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={0.2}
                                    onDragEnd={handleDragEnd}
                                    className="absolute inset-0 flex h-full w-full cursor-grab items-center justify-center active:cursor-grabbing"
                                >
                                    <Image
                                        src={activeItem.image}
                                        alt={activeItem.title}
                                        wrapperClassName="w-full h-full flex items-center justify-center cursor-zoom-in"
                                        className={cn(
                                            'pointer-events-auto size-full! object-contain object-center!',
                                            imageProps?.className,
                                        )}
                                        draggable={false}
                                        preview={{
                                            getContainer: () =>
                                                document.querySelector(
                                                    '[data-slot="modal-dialog"]',
                                                ) || document.body,
                                        }}
                                        onClick={
                                            customOnClick as React.MouseEventHandler<HTMLDivElement>
                                        }
                                        {...restImageProps}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Swipe hint dots */}
                        {carousels.length > 1 && (
                            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-1.5">
                                {carousels.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => {
                                            setDirection(
                                                i > currentIndex ? 1 : -1,
                                            );
                                            setCurrentIndex(i);
                                        }}
                                        className={cn(
                                            'cursor-pointer rounded-full transition-all duration-300',
                                            i === currentIndex
                                                ? 'h-1.5 w-4 bg-background'
                                                : 'h-1.5 w-1.5 bg-gray-600 hover:bg-gray-400',
                                        )}
                                        aria-label={`Go to slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </Image.PreviewGroup>

                {/* Right Column: Content & Controls */}
                <div className="flex min-w-[300px] flex-1 flex-col">
                    <motion.div
                        key={`counter-${currentIndex}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 text-sm font-medium tracking-widest text-text-subdued"
                    >
                        {currentIndex + 1} / {carousels.length}
                    </motion.div>

                    <div className="min-h-[160px]">
                        <motion.h2
                            key={`title-${currentIndex}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mb-6 text-4xl font-bold md:text-5xl"
                        >
                            {activeItem.title}
                        </motion.h2>

                        <motion.p
                            key={`desc-${currentIndex}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="max-w-md text-lg leading-relaxed text-text-subdued"
                        >
                            {activeItem.description}
                        </motion.p>
                    </div>

                    {!isSmallView && (
                        <div className="mt-8 flex gap-4">
                            <button
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                className={cn(
                                    'rounded-full border border-gray-600 p-3 transition-all duration-300 ease-in-out focus:outline-none',
                                    currentIndex === 0
                                        ? 'cursor-not-allowed text-text-subdued opacity-50'
                                        : 'text-text-default hover:bg-background-hovered cursor-pointer hover:text-white',
                                )}
                            >
                                <ArrowLeft size={20} />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentIndex === carousels.length - 1}
                                className={cn(
                                    'rounded-full border border-gray-600 p-3 transition-all duration-300 ease-in-out focus:outline-none',
                                    currentIndex === carousels.length - 1
                                        ? 'cursor-not-allowed text-text-subdued opacity-50'
                                        : 'text-text-default hover:bg-background-hovered cursor-pointer hover:text-white',
                                )}
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
