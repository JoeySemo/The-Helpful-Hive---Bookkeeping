'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function FooterWrapper() {
    const pathname = usePathname();
    const compactPages = ['/', '/for-home-and-life', '/for-business-and-money'];
    const isCompact = compactPages.includes(pathname);

    return <Footer compact={isCompact} />;
}
