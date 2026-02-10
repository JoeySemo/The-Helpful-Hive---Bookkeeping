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
    { name: 'Bee Done', desc: 'Tasks and projects, completed efficiently', icon: '🧽', href: '/for-home-and-life/bee-done', color: '#BFC8A1' },
    { name: 'Bee Kind', desc: 'Compassionate care for people and pets', icon: '🐾', href: '/for-home-and-life/bee-kind', color: '#98B4AC' },
    { name: 'Bee Organized', desc: 'Clear space, clear mind', icon: '🧺', href: '/for-home-and-life/bee-organized', color: '#A2C1D4' },
    { name: 'Bee Connected', desc: 'Building community and support', icon: '🌸', href: '/for-home-and-life/bee-connected', color: '#7B6B8D' },
    { name: 'Bee Balanced', desc: 'Bookkeeping for small businesses', icon: '💼', href: '/for-business-and-money', color: '#4A5D66' },
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

            {/* Flying Bees - 11 total */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              {/* Bee 1: Pet Food */}
              <div className="absolute animate-fly-1 w-12 h-12 md:w-16 md:h-16">
                <Image src="/bee-1-petfood.png" alt="Bee with pet food" fill className="object-contain" />
              </div>
              {/* Bee 2: Broom */}
              <div className="absolute animate-fly-2 w-10 h-10 md:w-14 md:h-14">
                <Image src="/bee-2-broom.png" alt="Bee with broom" fill className="object-contain" />
              </div>
              {/* Bee 3: Watering Can */}
              <div className="absolute animate-fly-3 w-12 h-12 md:w-16 md:h-16">
                <Image src="/bee-3-wateringcan.png" alt="Bee with watering can" fill className="object-contain" />
              </div>
              {/* Bee 4: Spray Bottle */}
              <div className="absolute animate-fly-4 w-11 h-11 md:w-15 md:h-15">
                <Image src="/bee-4-spraybottle.png" alt="Bee with spray bottle" fill className="object-contain" />
              </div>
              {/* Bee 5: Clipboard */}
              <div className="absolute animate-fly-5 w-11 h-11 md:w-15 md:h-15">
                <Image src="/bee-5-clipboard.png" alt="Bee with clipboard" fill className="object-contain" />
              </div>
              {/* Bee 6: Storage Bins */}
              <div className="absolute animate-fly-6 w-10 h-10 md:w-14 md:h-14">
                <Image src="/bee-6-bins.png" alt="Bee with storage bins" fill className="object-contain" />
              </div>
              {/* Bee 7: Megaphone */}
              <div className="absolute animate-fly-7 w-11 h-11 md:w-15 md:h-15">
                <Image src="/bee-7-megaphone.png" alt="Bee with megaphone" fill className="object-contain" />
              </div>
              {/* Bee 8: Calendar */}
              <div className="absolute animate-fly-8 w-10 h-10 md:w-14 md:h-14">
                <Image src="/bee-8-calendar.png" alt="Bee with calendar" fill className="object-contain" />
              </div>
              {/* Bee 9: Label Tag */}
              <div className="absolute animate-fly-9 w-12 h-12 md:w-16 md:h-16">
                <Image src="/bee-9-label.png" alt="Bee with label" fill className="object-contain" />
              </div>
              {/* Bee 10: Briefcase */}
              <div className="absolute animate-fly-10 w-10 h-10 md:w-14 md:h-14">
                <Image src="/bee-10-briefcase.png" alt="Bee with briefcase" fill className="object-contain" />
              </div>
              {/* Bee 11: Calculator */}
              <div className="absolute animate-fly-11 w-11 h-11 md:w-15 md:h-15">
                <Image src="/bee-11-calculator.png" alt="Bee with calculator" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Tagline */}
          <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-6xl font-medium text-[#3C3C3C] mb-4 animate-fade-up delay-100">
            Because Even The Busiest Bees
            <br />
            <span className="text-gradient-honey">Need a Little Help.</span>
          </h1>
          <p className="font-[family-name:var(--font-montserrat)] text-lg md:text-xl text-[#525252] mb-8 max-w-2xl mx-auto">
            The Helpful Hive offers a full suite of services to help your home and business hum.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center animate-fade-up delay-300">
            <Link
              href="/for-home-and-life"
              className="px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-1"
            >
              For Home & Life
            </Link>
            <Link
              href="/for-business-and-money"
              className="px-8 py-4 bg-[#4A5D66] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#3a4b53] transition-all hover:shadow-lg hover:-translate-y-1"
            >
              For Business & Money
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-[#3C3C3C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-medium mb-6">
            <span className="text-gradient-honey">Ready To Let Us Help?</span>
          </h2>
          <p className="text-white/70 mb-10 text-xl font-light">
            Whether It's Your Home, Your Pets, Or Your Books—We've Got You Covered.
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
