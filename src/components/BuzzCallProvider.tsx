'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import BuzzCallModal from './BuzzCallModal';

interface BuzzCallContextType {
    openBuzzCall: () => void;
}

const BuzzCallContext = createContext<BuzzCallContextType>({
    openBuzzCall: () => {},
});

export function useBuzzCall() {
    return useContext(BuzzCallContext);
}

export default function BuzzCallProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openBuzzCall = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeBuzzCall = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <BuzzCallContext.Provider value={{ openBuzzCall }}>
            {children}
            <BuzzCallModal isOpen={isOpen} onClose={closeBuzzCall} />
        </BuzzCallContext.Provider>
    );
}
