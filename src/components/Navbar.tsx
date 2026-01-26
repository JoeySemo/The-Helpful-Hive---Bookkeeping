"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isHome = pathname === '/';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/pet-care', label: 'Pet Care' },
    { href: '/home-care', label: 'Home Care' },
    { href: '/administrative-care', label: 'Administrative Care' },
    { href: '/for-business-and-money', label: 'Bookkeeping' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2C16B]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Horizontal Version */}
          <Link href="/" className="flex items-center gap-2 group h-full py-1">
            <span className="font-display text-xl md:text-2xl font-semibold text-[#3C3C3C] group-hover:text-[#E2C16B] transition-colors">
              The Helpful Hive
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm md:text-base font-medium transition-colors ${pathname === link.href
                    ? 'text-[#E2C16B]'
                    : 'text-[#3C3C3C] hover:text-[#E2C16B]'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/about"
                className="px-6 py-3 bg-[#3C3C3C] text-white text-sm font-medium rounded-full hover:bg-[#2d2d2d] transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-[#3C3C3C]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white border-b border-[#E2C16B]/20 shadow-lg p-4 animate-fade-up">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium ${pathname === link.href
                    ? 'bg-[#FFF8E7] text-[#E2C16B]'
                    : 'text-[#3C3C3C] hover:bg-[#FFF8E7]'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 bg-[#3C3C3C] text-white text-base font-medium rounded-lg text-center mt-2 shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
