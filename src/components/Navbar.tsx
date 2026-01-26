"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

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
    { href: '/for-home-and-life', label: 'For Home & Life' },
    { href: '/for-business-and-money', label: 'For Business & Money' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2C16B]/20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-32 md:h-12 md:w-40">
              <Image
                src="/official-logo-horizontal.png"
                alt="The Helpful Hive"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${pathname === link.href
                      ? 'text-[#E2C16B]'
                      : 'text-[#3C3C3C] hover:text-[#E2C16B]'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-[#3C3C3C] text-white text-sm font-medium rounded-full hover:bg-[#2d2d2d] transition-all hover:shadow-lg"
              >
                Book a Service
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
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-[#E2C16B]/20 shadow-lg p-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium ${pathname === link.href
                      ? 'bg-[#FFF8E7] text-[#E2C16B]'
                      : 'text-[#3C3C3C] hover:bg-[#FFF8E7]'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 bg-[#3C3C3C] text-white text-sm font-medium rounded-lg text-center mt-2"
              >
                Book a Service
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
