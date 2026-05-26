import { useCallback, useEffect, useState } from 'react';

export function useModalHash(hash: string) {
    const [isOpen, setIsOpen] = useState(
        () => typeof window !== 'undefined' && window.location.hash === `#${hash}`,
    );

    useEffect(() => {
        const handlePopState = () => {
            setIsOpen(window.location.hash === `#${hash}`);
        };
        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [hash]);

    const onOpen = useCallback(() => {
        setIsOpen(true);
        window.history.pushState({}, '', `${window.location.pathname}#${hash}`);
    }, [hash]);

    const onClose = useCallback(() => {
        setIsOpen(false);
        if (window.location.hash === `#${hash}`) {
            window.history.pushState({}, '', window.location.pathname);
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
