'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function FooterWrapper() {
    const pathname = usePathname();

    if (pathname === '/contact') {
        return null;
    }

    const compactPages = ['/', '/pet-care', '/home-care', '/administrative-care', '/for-business-and-money'];
    const isCompact = compactPages.includes(pathname);

    return <Footer compact={isCompact} />;
}
