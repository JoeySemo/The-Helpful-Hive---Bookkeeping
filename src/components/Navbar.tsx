"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useBuzzCall } from '@/components/BuzzCallProvider';

function LetsChatNavBtn({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) {
    const { openBuzzCall } = useBuzzCall();
    return (
        <button
            type="button"
            onClick={() => { openBuzzCall(); onClick?.(); }}
            className={mobile
                ? "px-4 py-3 bg-terra-cotta text-cream-white text-base font-medium font-[family-name:var(--font-montserrat)] rounded-lg text-center mt-2 shadow-md"
                : "px-6 py-3 bg-terra-cotta text-cream-white text-sm font-medium font-[family-name:var(--font-montserrat)] rounded-full hover:bg-terra-cotta-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
            }
        >
            Let&apos;s Chat
        </button>
    );
}

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

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF8E7]/95 backdrop-blur-md border-b border-[#E2C16B]/20">
      <div className="w-full pl-0 pr-4 md:pr-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group h-full py-2">
            <div className="relative h-20 md:h-24 w-72 md:w-80">
              <Image
                src="/wordmark-cream.png"
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
                className={`text-sm font-medium font-[family-name:var(--font-montserrat)] transition-colors ${pathname === '/' ? 'text-[#B8941E]' : 'text-[#3C3C3C] hover:text-[#B8941E]'}`}
              >
                Home
              </Link>

              {/* Active Services */}
              <Link
                href="/for-home-and-life/bee-done"
                className={`flex items-center gap-2 text-sm font-medium font-[family-name:var(--font-montserrat)] transition-colors ${pathname === '/for-home-and-life/bee-done' ? 'text-[#B8941E]' : 'text-[#3C3C3C] hover:text-[#B8941E]'}`}
              >
                <div className="relative w-6 h-6">
                  <Image src="/bee-2-broom.png" alt="Bee Done" fill className="object-contain" />
                </div>
                Bee Done
              </Link>

              <Link
                href="/for-home-and-life/bee-kind"
                className={`flex items-center gap-2 text-sm font-medium font-[family-name:var(--font-montserrat)] transition-colors ${pathname === '/for-home-and-life/bee-kind' ? 'text-[#B8941E]' : 'text-[#3C3C3C] hover:text-[#B8941E]'}`}
              >
                <div className="relative w-6 h-6">
                  <Image src="/bee-1-petfood.png" alt="Bee Kind" fill className="object-contain" />
                </div>
                Bee Kind
              </Link>

              {/* About */}
              <Link
                href="/about"
                className={`text-sm font-medium font-[family-name:var(--font-montserrat)] transition-colors ${pathname === '/about' ? 'text-[#B8941E]' : 'text-[#3C3C3C] hover:text-[#B8941E]'}`}
              >
                About
              </Link>

              {/* CTA Button */}
              <LetsChatNavBtn />
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
                className={`px-4 py-3 rounded-lg text-base font-medium font-[family-name:var(--font-montserrat)] ${pathname === '/' ? 'bg-[#FFF8E7] text-[#B8941E]' : 'text-[#3C3C3C] hover:bg-[#FFF8E7]'}`}
              >
                Home
              </Link>

              <Link
                href="/for-home-and-life/bee-done"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium font-[family-name:var(--font-montserrat)] ${pathname === '/for-home-and-life/bee-done' ? 'bg-[#FFF8E7] text-[#B8941E]' : 'text-[#3C3C3C] hover:bg-[#FFF8E7]'}`}
              >
                <div className="relative w-6 h-6">
                  <Image src="/bee-2-broom.png" alt="Bee Done" fill className="object-contain" />
                </div>
                Bee Done
              </Link>

              <Link
                href="/for-home-and-life/bee-kind"
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium font-[family-name:var(--font-montserrat)] ${pathname === '/for-home-and-life/bee-kind' ? 'bg-[#FFF8E7] text-[#B8941E]' : 'text-[#3C3C3C] hover:bg-[#FFF8E7]'}`}
              >
                <div className="relative w-6 h-6">
                  <Image src="/bee-1-petfood.png" alt="Bee Kind" fill className="object-contain" />
                </div>
                Bee Kind
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-medium font-[family-name:var(--font-montserrat)] ${pathname === '/about' ? 'bg-[#FFF8E7] text-[#B8941E]' : 'text-[#3C3C3C] hover:bg-[#FFF8E7]'}`}
              >
                About
              </Link>

              <LetsChatNavBtn mobile onClick={() => setIsMenuOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
