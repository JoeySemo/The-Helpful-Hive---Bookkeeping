'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import BookServiceModal from './BookServiceModal';

interface BookServiceContextType {
    openBookService: () => void;
}

const BookServiceContext = createContext<BookServiceContextType>({
    openBookService: () => {},
});

export function useBookService() {
    return useContext(BookServiceContext);
}

export default function BookServiceProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openBookService = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeBookService = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <BookServiceContext.Provider value={{ openBookService }}>
            {children}
            <BookServiceModal isOpen={isOpen} onClose={closeBookService} />
        </BookServiceContext.Provider>
    );
}
