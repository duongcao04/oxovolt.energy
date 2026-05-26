import { Button, Modal } from '@heroui/react';
import { useVersionCheck } from '../../hooks';
import { Rocket } from 'lucide-react';

export function UpdateVersionModal() {
    const { applyUpdate } = useVersionCheck();
    return (
        <Modal>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[360px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-default text-foreground">
                                <Rocket className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>System Update</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body>
                            <p>A new version of the interface is available.</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button
                                className="w-full"
                                slot="close"
                                onPress={applyUpdate} // Use the function from the hook here
                            >
                                Update Now
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
