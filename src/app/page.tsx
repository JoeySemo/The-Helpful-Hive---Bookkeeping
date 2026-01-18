'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { Geist } from "next/font/google";

const geist = Geist({ subsets: ['latin'] });

export default function HomePage() {
  const [businessHover, setBusinessHover] = useState(false);
  const [homeHover, setHomeHover] = useState(false);

  return (
    <div
      className={geist.className}
      style={{ display: 'flex', flexDirection: 'row', height: 'calc(100vh - 96px)', overflow: 'hidden' }}
    >

      {/* Business/Bookkeeping Section - Cream */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#FFF8E7',
          borderRight: '1px solid rgba(191, 200, 161, 0.3)',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setBusinessHover(true)}
        onMouseLeave={() => setBusinessHover(false)}
      >
        {/* Background Illustration with Animation */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom right, #FFF8E7, white)',
              opacity: businessHover ? 0.7 : 0.85,
              zIndex: 10,
              transition: 'opacity 0.7s ease-in-out'
            }}
          ></div>
          <Image
            src="/modern-office.png"
            alt="Modern Office"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: businessHover ? 1.0 : 0.8,
              transform: businessHover ? 'scale(1.1)' : 'scale(1.05)',
              filter: businessHover ? 'grayscale(0%)' : 'grayscale(50%)',
              transition: 'all 1s ease-in-out'
            }}
          />
        </div>

        <div style={{ position: 'relative', zIndex: 20, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '3rem' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 400, color: '#3C3C3C', marginBottom: '1rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            For Your Business
          </h2>
          <p style={{ fontSize: businessHover ? '4rem' : '3.5rem', color: '#E2C16B', marginBottom: '2rem', fontWeight: 400, transition: 'font-size 0.3s ease-in-out', whiteSpace: 'nowrap' }}>
            Professional Bookkeeping
          </p>
          <Link
            href="/bookkeeping"
            style={{
              color: '#3C3C3C',
              fontWeight: 500,
              fontSize: '3.5rem',
              textDecoration: 'none'
            }}
          >
            Take the Sting Out of Business Finances
          </Link>
        </div>
      </div>



      {/* Home/Concierge Section - Sage */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'rgba(191, 200, 161, 0.15)',
          cursor: 'pointer'
        }}
        onMouseEnter={() => setHomeHover(true)}
        onMouseLeave={() => setHomeHover(false)}
      >
        {/* Background Illustration with Animation */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom left, rgba(191, 200, 161, 0.2), white)',
              opacity: homeHover ? 0.65 : 0.85,
              zIndex: 10,
              transition: 'opacity 0.7s ease-in-out'
            }}
          ></div>
          <Image
            src="/cozy-home.png"
            alt="Cozy Home"
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: homeHover ? 0.7 : 0.45,
              transform: homeHover ? 'scale(1.1)' : 'scale(1.05)',
              filter: homeHover ? 'grayscale(0%)' : 'grayscale(50%)',
              transition: 'all 1s ease-in-out'
            }}
          />
        </div>

        <div style={{ position: 'relative', zIndex: 20, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '3rem' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 400, color: '#3C3C3C', marginBottom: '1rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
            For Your Home
          </h2>
          <p style={{ fontSize: homeHover ? '4rem' : '3.5rem', color: '#E2C16B', marginBottom: '2rem', fontWeight: 400, transition: 'font-size 0.3s ease-in-out', whiteSpace: 'nowrap' }}>
            Personal Concierge
          </p>
          <Link
            href="/concierge"
            style={{
              color: '#3C3C3C',
              fontWeight: 500,
              fontSize: '3.5rem',
              textDecoration: 'none'
            }}
          >
            Sweet solutions for Busy Homes, Pets, and People
          </Link>
        </div>
      </div>
    </div>
  );
}
