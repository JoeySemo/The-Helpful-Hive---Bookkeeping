'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import { Geist } from "next/font/google";

const geist = Geist({ subsets: ['latin'] });

// Bee/Honeycomb SVG Icon
const BeeIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8L38 14L32 20L26 14L32 8Z" fill="#E2C16B" stroke="#3C3C3C" strokeWidth="2" />
    <ellipse cx="32" cy="28" rx="8" ry="10" fill="#E2C16B" stroke="#3C3C3C" strokeWidth="2" />
    <path d="M24 26H40M24 30H40" stroke="#3C3C3C" strokeWidth="2" />
    <path d="M40 28L46 24M40 32L46 36M24 28L18 24M24 32L18 36" stroke="#3C3C3C" strokeWidth="2" />
  </svg>
);

// Home/Flower SVG Icon
const HomeIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 10L54 28H48V52H38V40H26V52H16V28H10L32 10Z" fill="#BFC8A1" stroke="#3C3C3C" strokeWidth="2" />
    <rect x="28" y="44" width="8" height="8" fill="#3C3C3C" />
  </svg>
);

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 950);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={geist.className}>
      {/* Tagline */}
      <div style={{
        textAlign: 'center',
        padding: isMobile ? '1.5rem 1rem 0.5rem' : '2rem 2rem 1rem',
        fontSize: isMobile ? '1rem' : '1.25rem',
        fontStyle: 'italic',
        color: '#6b7280',
        fontFamily: 'Georgia, serif'
      }}>
        Even the Busiest Bees Need a Little Help
      </div>

      {/* Business/Bookkeeping Section */}
      <div style={{
        position: 'relative',
        minHeight: isMobile ? '85vh' : 'calc(50vh - 48px)',
        overflow: 'hidden',
        backgroundColor: '#FFF8E7'
      }}>
        {/* Background Image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom right, rgba(255, 248, 231, 0.92), rgba(255, 255, 255, 0.88))',
            zIndex: 10
          }}></div>
          <Image
            src="/modern-office.png"
            alt="Modern Office"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.4,
              filter: 'blur(2px)'
            }}
            priority
          />
        </div>

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 20,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: isMobile ? '3rem 2rem' : '4rem 3rem',
          gap: isMobile ? '1.5rem' : '2rem'
        }}>
          <BeeIcon />

          <h2 style={{
            fontSize: isMobile ? '2.5rem' : '3.5rem',
            fontWeight: 700,
            color: '#3C3C3C',
            margin: 0,
            lineHeight: 1.2
          }}>
            Professional Bookkeeping
          </h2>

          <p style={{
            fontSize: isMobile ? '1.25rem' : '1.5rem',
            fontStyle: 'italic',
            color: '#3C3C3C',
            margin: 0,
            fontFamily: 'Georgia, serif'
          }}>
            For Your Business
          </p>

          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.3rem',
            color: '#4b5563',
            maxWidth: '600px',
            margin: 0
          }}>
            Take the Sting Out of Business Finances
          </p>

          <Link
            href="/bookkeeping"
            style={{
              display: 'inline-block',
              padding: isMobile ? '1rem 2.5rem' : '1.2rem 3rem',
              backgroundColor: '#E2C16B',
              color: '#3C3C3C',
              fontSize: isMobile ? '1.1rem' : '1.25rem',
              fontWeight: 600,
              borderRadius: '9999px',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(226, 193, 107, 0.4)',
              transition: 'all 0.3s ease',
              border: '2px solid transparent'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d4b35f';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(226, 193, 107, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#E2C16B';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(226, 193, 107, 0.4)';
            }}
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* Home/Concierge Section */}
      <div style={{
        position: 'relative',
        minHeight: isMobile ? '85vh' : 'calc(50vh - 48px)',
        overflow: 'hidden',
        backgroundColor: 'rgba(191, 200, 161, 0.15)'
      }}>
        {/* Background Image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom left, rgba(191, 200, 161, 0.25), rgba(255, 255, 255, 0.88))',
            zIndex: 10
          }}></div>
          <Image
            src="/cozy-home.png"
            alt="Cozy Home"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.35,
              filter: 'blur(2px)'
            }}
            priority
          />
        </div>

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 20,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: isMobile ? '3rem 2rem' : '4rem 3rem',
          gap: isMobile ? '1.5rem' : '2rem'
        }}>
          <HomeIcon />

          <h2 style={{
            fontSize: isMobile ? '2.5rem' : '3.5rem',
            fontWeight: 700,
            color: '#3C3C3C',
            margin: 0,
            lineHeight: 1.2
          }}>
            Personal Concierge
          </h2>

          <p style={{
            fontSize: isMobile ? '1.25rem' : '1.5rem',
            fontStyle: 'italic',
            color: '#3C3C3C',
            margin: 0,
            fontFamily: 'Georgia, serif'
          }}>
            For Your Home
          </p>

          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.3rem',
            color: '#4b5563',
            maxWidth: '600px',
            margin: 0
          }}>
            Sweet Solutions for Busy Homes, Pets, and People
          </p>

          <Link
            href="/concierge"
            style={{
              display: 'inline-block',
              padding: isMobile ? '1rem 2.5rem' : '1.2rem 3rem',
              backgroundColor: 'white',
              color: '#3C3C3C',
              fontSize: isMobile ? '1.1rem' : '1.25rem',
              fontWeight: 600,
              borderRadius: '9999px',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(191, 200, 161, 0.4)',
              transition: 'all 0.3s ease',
              border: '2px solid #BFC8A1'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#BFC8A1';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(191, 200, 161, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#3C3C3C';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(191, 200, 161, 0.4)';
            }}
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
