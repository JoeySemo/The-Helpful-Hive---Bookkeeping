'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Home, Calculator, Sparkles, Heart, FolderOpen, Briefcase, Users } from 'lucide-react';

export default function HomePage() {
  const homePillar = {
    title: 'For Your Home & Life',
    subtitle: 'Sweet solutions for busy homes, pets, and people',
    services: [
      { icon: Sparkles, name: 'Cleaning Services', desc: 'Sparkling clean for your peace of mind' },
      { icon: Heart, name: 'Pet Care', desc: 'Walking, sitting, and lots of love' },
      { icon: FolderOpen, name: 'Organizing & Lifestyle', desc: 'De-cluttering and managing your daily tasks' },
    ],
    cta: 'Explore Home Services',
    href: '/for-home-and-life',
    color: 'honey'
  };

  const bookkeepingPillar = {
    title: 'For Your Business & Money',
    subtitle: 'Clarity and calm for your finances',
    services: [
      { icon: Calculator, name: 'Bookkeeping', desc: 'Accurate records for small businesses' },
      { icon: Briefcase, name: 'Financial Management', desc: 'Budgeting, invoicing, and tracking' },
      { icon: Users, name: 'Efficiency & Planning', desc: 'Streamlining operations and goals' },
    ],
    cta: 'Explore Business Services',
    href: '/for-business-and-money',
    color: 'sage'
  };

  const beeCategories = [
    { name: 'Bee Done', desc: 'Tasks and projects, completed efficiently', icon: '🧽', href: '/concierge/services/bee-done' },
    { name: 'Bee Kind', desc: 'Compassionate care for people and pets', icon: '🐾', href: '/concierge/services/bee-kind' },
    { name: 'Bee Organized', desc: 'Clear space, clear mind', icon: '🧺', href: '/concierge/services/bee-organized' },
    { name: 'Bee Efficient', desc: 'Saving you time and resources', icon: '💼', href: '/concierge/services/bee-efficient' },
    { name: 'Bee Connected', desc: 'Building community and support', icon: '🌸', href: '/concierge/services/bee-connected' },
  ];

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
        {/* Honeycomb pattern background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="honeycomb" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#honeycomb)" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          {/* Animated Logo */}
          {/* Animated Logo Container */}
          <div className="relative w-56 h-56 md:w-80 md:h-80 mx-auto mb-10">
            {/* Main Logo */}
            <div className="relative w-full h-full animate-float z-10">
              <Image
                src="/logo-circular.jpg"
                alt="The Helpful Hive"
                fill
                className="object-contain rounded-full border-4 border-[#E2C16B] shadow-2xl"
                priority
              />
            </div>

            {/* Flying Bees */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              {/* Bee 1: Standard */}
              <div className="absolute animate-fly-1 w-12 h-12 md:w-16 md:h-16">
                <Image src="/bee-svg-1.svg" alt="Bee 1" fill className="object-contain transform scale-x-[-1]" />
              </div>
              {/* Bee 2: Mirrored */}
              <div className="absolute animate-fly-2 w-10 h-10 md:w-14 md:h-14">
                <Image src="/bee-svg-2.svg" alt="Bee 2" fill className="object-contain transform scale-x-[-1]" />
              </div>
              {/* Bee 3: Rotated */}
              <div className="absolute animate-fly-3 w-12 h-12 md:w-16 md:h-16">
                <Image src="/bee-svg-3.svg" alt="Bee 3" fill className="object-contain transform scale-x-[-1]" />
              </div>
              {/* Bee 4: Mirrored + Rotated */}
              <div className="absolute animate-fly-4 w-11 h-11 md:w-15 md:h-15">
                <Image src="/bee-svg-4.svg" alt="Bee 4" fill className="object-contain transform scale-x-[-1]" />
              </div>
              {/* Bee 5: Small */}
              <div className="absolute animate-fly-5 w-11 h-11 md:w-15 md:h-15">
                <Image src="/bee-svg-5.svg" alt="Bee 5" fill className="object-contain" />
              </div>
              {/* Bee 6: Small Mirrored */}
              <div className="absolute animate-fly-6 w-10 h-10 md:w-14 md:h-14">
                <Image src="/bee-svg-6.svg" alt="Bee 6" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Tagline */}
          <h1 className="font-display text-4xl md:text-6xl font-medium text-[#3C3C3C] mb-6 animate-fade-up delay-100">
            Even the busiest bees
            <br />
            <span className="text-gradient-honey">need a little help.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[#3C3C3C]/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Your full hive of home, pet, lifestyle, and bookkeeping services.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Link
              href="/for-home-and-life"
              className="px-8 py-4 bg-[#E2C16B] text-[#3C3C3C] font-semibold rounded-full hover:bg-[#d4b35f] transition-all hover:shadow-lg hover:-translate-y-1"
            >
              Home Concierge
            </Link>
            <Link
              href="/for-business-and-money"
              className="px-8 py-4 bg-[#3C3C3C] text-white font-semibold rounded-full hover:bg-[#2d2d2d] transition-all hover:shadow-lg hover:-translate-y-1"
            >
              Bookkeeping
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-[#3C3C3C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-medium text-white mb-6">
            Ready to let us help?
          </h2>
          <p className="text-white/70 mb-10 text-xl font-light">
            Whether it's your home, your pets, or your books—we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#E2C16B] text-[#3C3C3C] font-semibold rounded-full hover:bg-[#d4b35f] transition-all transform hover:scale-105"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+13145267240"
              className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
            >
              Call (314) 526-7240
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
