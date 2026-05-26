import {
    StackedCarousel,
    type CarouselData,
} from '@/components/ui'
import { Modal } from '@heroui/react'

type LoopXcellSeriesModalProps = {
    isOpen: boolean
    onOpenChange: (state: boolean) => void
    carouselData: CarouselData
}
export const LoopXcellSeriesModal = ({
    isOpen,
    onOpenChange,
    carouselData,
}: LoopXcellSeriesModalProps) => {
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container size={'cover'}>
                    <Modal.Dialog>
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon /> {/* Optional: Icon */}
                            <Modal.Heading />
                        </Modal.Header>
                        <Modal.Body>
                            <StackedCarousel carousels={carouselData} />
                        </Modal.Body>
                        <Modal.Footer />
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    )
}
