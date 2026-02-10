"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeLifeOpen, setIsHomeLifeOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const homeLifeServices = [
    { href: '/for-home-and-life/bee-done', label: 'Bee Done', subtitle: 'Cleaning & Errands', color: '#BFC8A1' },
    { href: '/for-home-and-life/bee-kind', label: 'Bee Kind', subtitle: 'Pet & Plant Care', color: '#98B4AC' },
    { href: '/for-home-and-life/bee-organized', label: 'Bee Organized', subtitle: 'Organization', color: '#A2C1D4' },
    { href: '/for-home-and-life/bee-connected', label: 'Bee Connected', subtitle: 'Coordination', color: '#7B6B8D' },
  ];

  const isHomeLifeActive = pathname.startsWith('/for-home-and-life');
  const isBusinessActive = pathname.startsWith('/for-business-and-money') || pathname.startsWith('/bookkeeping');

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF8E7]/95 backdrop-blur-md border-b border-[#E2C16B]/20">
      <div className="max-w-7xl mx-auto pl-0 pr-4 md:pr-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group h-full py-2">
            <div className="relative h-20 md:h-24 w-72 md:w-80">
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
              <Link
                href="/"
                className={`text-sm font-medium font-[family-name:var(--font-montserrat)] transition-colors ${pathname === '/' ? 'text-[#E2C16B]' : 'text-[#3C3C3C] hover:text-[#E2C16B]'}`}
              >
                Home
              </Link>

              {/* For Home & Life Dropdown - CSS-only for instant response */}
              <div className="relative group/nav">
                <button
                  className={`flex items-center gap-1 text-sm font-medium font-[family-name:var(--font-montserrat)] transition-colors py-2 ${isHomeLifeActive ? 'text-[#E2C16B]' : 'text-[#3C3C3C] hover:text-[#E2C16B]'}`}
                >
                  For Home & Life
                  <ChevronDown size={16} className="transition-transform group-hover/nav:rotate-180" />
                </button>

                {/* Invisible bridge so cursor can travel from button to menu */}
                <div className="absolute top-full left-0 h-2 w-64 hidden group-hover/nav:block" />

                <div className="absolute top-full left-0 pt-2 w-64 invisible opacity-0 group-hover/nav:visible group-hover/nav:opacity-100 transition-[visibility,opacity] duration-75 z-50">
                  <div className="bg-white rounded-xl shadow-xl border border-[#E2C16B]/10 py-2">
                    {homeLifeServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-[#FFF8E7] transition-colors"
                      >
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: service.color }}
                        />
                        <div>
                          <div className="font-medium text-[#3C3C3C] font-[family-name:var(--font-montserrat)]">{service.label}</div>
                          <div className="text-xs text-[#737373]">{service.subtitle}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* For Business & Money */}
              <Link
                href="/for-business-and-money"
                className={`text-sm font-medium font-[family-name:var(--font-montserrat)] transition-colors ${isBusinessActive ? 'text-[#E2C16B]' : 'text-[#3C3C3C] hover:text-[#E2C16B]'}`}
              >
                For Business & Money
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={`text-sm font-medium font-[family-name:var(--font-montserrat)] transition-colors ${pathname === '/about' ? 'text-[#E2C16B]' : 'text-[#3C3C3C] hover:text-[#E2C16B]'}`}
              >
                About
              </Link>

              {/* CTA Button - Terra Cotta */}
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#C17A5B] text-white text-sm font-medium font-[family-name:var(--font-montserrat)] rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
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
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium font-[family-name:var(--font-montserrat)] ${pathname === '/' ? 'bg-[#FFF8E7] text-[#E2C16B]' : 'text-[#3C3C3C] hover:bg-[#FFF8E7]'}`}
              >
                Home
              </Link>

              {/* Home & Life Section */}
              <div className="px-4 py-2 text-xs uppercase tracking-wider text-[#737373] font-[family-name:var(--font-montserrat)]">
                For Home & Life
              </div>
              {homeLifeServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#FFF8E7] transition-colors"
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: service.color }}
                  />
                  <div>
                    <div className="font-medium text-[#3C3C3C] font-[family-name:var(--font-montserrat)]">{service.label}</div>
                    <div className="text-xs text-[#737373]">{service.subtitle}</div>
                  </div>
                </Link>
              ))}

              {/* Business & Money Section */}
              <div className="px-4 py-2 text-xs uppercase tracking-wider text-[#737373] font-[family-name:var(--font-montserrat)] mt-2">
                For Business & Money
              </div>
              <Link
                href="/for-business-and-money"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium font-[family-name:var(--font-montserrat)] ${isBusinessActive ? 'bg-[#FFF8E7] text-[#E2C16B]' : 'text-[#3C3C3C] hover:bg-[#FFF8E7]'}`}
              >
                Bee Balanced (Bookkeeping)
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium font-[family-name:var(--font-montserrat)] ${pathname === '/about' ? 'bg-[#FFF8E7] text-[#E2C16B]' : 'text-[#3C3C3C] hover:bg-[#FFF8E7]'}`}
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 bg-[#C17A5B] text-white text-base font-medium font-[family-name:var(--font-montserrat)] rounded-lg text-center mt-2 shadow-md"
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
