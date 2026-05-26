import {
    StackedCarousel,
    type CarouselData,
} from '@/components/ui'
import { useDevice } from '@/hooks'
import { Modal } from '@heroui/react'

type KemeleoSeriesModalProps = {
    isOpen: boolean
    onOpenChange: (state: boolean) => void
    carouselData: CarouselData
}
export const KemeleoSeriesModal = ({
    isOpen,
    onOpenChange,
    carouselData,
}: KemeleoSeriesModalProps) => {
    const { isSmallView } = useDevice()
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <Modal.Backdrop>
                <Modal.Container size={isSmallView ? 'full' : 'cover'}>
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
