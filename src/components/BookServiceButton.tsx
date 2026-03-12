'use client';

import React from 'react';
import { useBookService } from './BookServiceProvider';

interface BookServiceButtonProps {
    className?: string;
    children?: React.ReactNode;
}

export default function BookServiceButton({ className, children }: BookServiceButtonProps) {
    const { openBookService } = useBookService();

    return (
        <button
            type="button"
            onClick={openBookService}
            className={className}
        >
            {children || 'Book a Service'}
        </button>
    );
}
