import { useState, useCallback, useId } from 'react';

export interface UseDisclosureProps {
    defaultIsOpen?: boolean;
    id?: string;
}

export function useDisclosure(props: UseDisclosureProps = {}) {
    const { defaultIsOpen = false, id: customId } = props;

    const [isOpen, setIsOpen] = useState(defaultIsOpen);

    // React's useId generates a unique, SSR-safe ID.
    const generatedId = useId();
    const id = customId ?? generatedId;

    // Wrapped in useCallback to prevent unnecessary re-renders in child components
    const onOpen = useCallback(() => setIsOpen(true), []);
    const onClose = useCallback(() => setIsOpen(false), []);

    // Acts as a toggle, or allows forcefully setting a specific boolean state
    const onOpenChange = useCallback((open?: boolean) => {
        if (typeof open === 'boolean') {
            setIsOpen(open);
        } else {
            setIsOpen((prev) => !prev);
        }
    }, []);

    return {
        isOpen,
        onOpen,
        onClose,
        onOpenChange,
        id,
    };
}

export type DisclosureResultProps = ReturnType<typeof useDisclosure>;
