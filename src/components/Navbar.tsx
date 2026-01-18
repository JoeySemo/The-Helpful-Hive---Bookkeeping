"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Determine context
  const isBookkeeping = pathname?.startsWith('/bookkeeping');
  const isConcierge = pathname?.startsWith('/concierge');
  const isHome = !isBookkeeping && !isConcierge;

  return (
    <nav
      style={{
        backgroundColor: 'rgba(255,255,255,0.95)',
        height: '96px',
        display: 'block',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid #f3f4f6',
        width: '100%',
        maxWidth: '100vw',
        overflow: 'hidden'
      }}
    >
      <div style={{ width: '100%', paddingLeft: '0', paddingRight: '1.5rem', height: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', flexWrap: 'nowrap' }}>

          {/* Logo Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <div style={{ position: 'relative', height: '110px', width: '480px' }}>
                <Image
                  src="/official-logo-horizontal.png"
                  alt="The Helpful Hive"
                  fill
                  style={{ objectFit: 'contain', objectPosition: 'left' }}
                />
              </div>
            </Link>

            {/* Slogan - Only for Home, next to logo */}
            {isHome && (
              <span style={{ color: '#E2C16B', fontFamily: 'serif', fontStyle: 'italic', fontSize: '2.25rem', display: 'block', paddingLeft: '0.75rem', borderLeft: '2px solid #e2e8f0', whiteSpace: 'nowrap' }}>
                Even the Busiest Bees Need a Little Help
              </span>
            )}
          </div>

          {/* Navigation Links - Dynamic based on Context */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexShrink: 0 }}>

            {/* Context: Home Portal */}
            {isHome && (
              <>
                <Link href="/bookkeeping" style={{ color: '#4b5563', fontWeight: 500, fontSize: '1.15rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  Professional Bookkeeping
                </Link>
                <Link href="/concierge" style={{ color: '#4b5563', fontWeight: 500, fontSize: '1.15rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  Personal Concierge
                </Link>
              </>
            )}

            {/* Context: Bookkeeping */}
            {isBookkeeping && (
              <>
                <Link href="/bookkeeping" style={{ color: '#f59e0b', fontWeight: 700, fontSize: '1.15rem', borderBottom: '2px solid #f59e0b', textDecoration: 'none' }}>
                  Bookkeeping
                </Link>
                <Link href="/" style={{ color: '#9ca3af', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none' }}>
                  Back to Portal
                </Link>
              </>
            )}

            {/* Context: Concierge */}
            {isConcierge && (
              <>
                <Link href="/concierge" style={{ color: '#a8b78b', fontWeight: 700, fontSize: '1.15rem', borderBottom: '2px solid #a8b78b', textDecoration: 'none' }}>
                  Concierge
                </Link>
                <Link href="/" style={{ color: '#9ca3af', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none' }}>
                  Back to Portal
                </Link>
              </>
            )}

            {/* Shared CTA */}
            <Link
              href="/contact"
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '9999px',
                fontWeight: 700,
                color: 'white',
                fontSize: '1rem',
                backgroundColor: isBookkeeping ? '#f59e0b' : isConcierge ? '#a8b78b' : '#1f2937',
                textDecoration: 'none',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                whiteSpace: 'nowrap'
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
