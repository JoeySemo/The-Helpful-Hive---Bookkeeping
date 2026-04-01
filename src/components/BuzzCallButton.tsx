'use client';

import React from 'react';
import { useBuzzCall } from './BuzzCallProvider';

interface BuzzCallButtonProps {
    className?: string;
    children?: React.ReactNode;
}

export default function BuzzCallButton({ className, children }: BuzzCallButtonProps) {
    const { openBuzzCall } = useBuzzCall();

    return (
        <button
            type="button"
            onClick={openBuzzCall}
            className={className}
        >
            {children || "Let\u2019s Chat"}
        </button>
    );
}
