import { useCallback, useState } from 'react';

export function useModalHash(hash: string) {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = useCallback(() => {
        setIsOpen(true);
        window.history.pushState({}, '', `${window.location.pathname}#${hash}`);
    }, [hash]);

    const onClose = useCallback(() => {
        setIsOpen(false);
        if (window.location.hash === `#${hash}`) {
            const scrollY = window.scrollY;
            window.history.pushState({}, '', window.location.pathname);
            // Some browsers scroll to top when removing the hash — restore position.
            requestAnimationFrame(() => {
                window.scrollTo({ top: scrollY, behavior: 'instant' });
            });
        }
    }, [hash]);

    const onOpenChange = useCallback(
        (open?: boolean) => {
            if (typeof open === 'boolean') {
                open ? onOpen() : onClose();
            } else {
                isOpen ? onClose() : onOpen();
            }
        },
        [isOpen, onOpen, onClose],
    );

    return { isOpen, onOpen, onClose, onOpenChange };
}
