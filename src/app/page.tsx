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
              Help at Home
            </Link>
            <Link
              href="/for-business-and-money"
              className="px-8 py-4 bg-[#3C3C3C] text-white font-semibold rounded-full hover:bg-[#2d2d2d] transition-all hover:shadow-lg hover:-translate-y-1"
            >
              Help with Your Books
            </Link>
          </div>
        </div>
      </section>

      {/* Two Pillars Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white relative">
        {/* Decorative background visual */}
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#FFF8E7] to-white pointer-events-none" />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Home & Life Pillar */}
            <div className="bg-[#FFF8E7] rounded-[2.5rem] p-8 md:p-12 border-2 border-[#E2C16B]/30 hover:border-[#E2C16B] transition-all duration-500 hover:shadow-2xl group flex flex-col h-full animate-fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#E2C16B] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#3C3C3C]">
                    {homePillar.title}
                  </h2>
                </div>
              </div>
              <p className="text-[#3C3C3C]/70 mb-8 text-lg">{homePillar.subtitle}</p>

              <div className="space-y-6 mb-10 flex-grow">
                {homePillar.services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white/60 rounded-xl hover:bg-white transition-colors">
                      <Icon className="w-6 h-6 text-[#E2C16B] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#3C3C3C] text-lg">{service.name}</p>
                        <p className="text-sm text-[#3C3C3C]/60 leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                href={homePillar.href}
                className="inline-flex items-center justify-between w-full px-6 py-4 bg-[#E2C16B]/10 text-[#E2C16B] font-bold rounded-xl group-hover:bg-[#E2C16B] group-hover:text-[#3C3C3C] transition-all"
              >
                {homePillar.cta}
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Business & Money Pillar */}
            <div className="bg-[#BFC8A1]/20 rounded-[2.5rem] p-8 md:p-12 border-2 border-[#BFC8A1]/30 hover:border-[#BFC8A1] transition-all duration-500 hover:shadow-2xl group flex flex-col h-full animate-fade-up delay-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#BFC8A1] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-[#3C3C3C]">
                    {bookkeepingPillar.title}
                  </h2>
                </div>
              </div>
              <p className="text-[#3C3C3C]/70 mb-8 text-lg">{bookkeepingPillar.subtitle}</p>

              <div className="space-y-6 mb-10 flex-grow">
                {bookkeepingPillar.services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white/60 rounded-xl hover:bg-white transition-colors">
                      <Icon className="w-6 h-6 text-[#BFC8A1] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#3C3C3C] text-lg">{service.name}</p>
                        <p className="text-sm text-[#3C3C3C]/60 leading-relaxed">{service.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                href={bookkeepingPillar.href}
                className="inline-flex items-center justify-between w-full px-6 py-4 bg-[#BFC8A1]/20 text-[#3C3C3C] font-bold rounded-xl group-hover:bg-[#BFC8A1] transition-all"
              >
                {bookkeepingPillar.cta}
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bee Categories Section */}
      <section className="py-16 px-4 md:px-8 bg-[#FFF8E7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-[#3C3C3C] mb-4">
              Our Service Ecosystem
            </h2>
            <p className="text-[#3C3C3C]/70 max-w-2xl mx-auto">
              Everything we do is part of The Helpful Hive—working together to make your life simpler.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {beeCategories.map((bee, index) => (
              <Link key={index} href={bee.href} className="group">
                <div className="bg-white rounded-3xl p-6 text-center border-2 border-[#E2C16B]/10 hover:border-[#E2C16B] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col items-center justify-center">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{bee.icon}</div>
                  <h3 className="font-display font-bold text-[#3C3C3C] mb-2">
                    {bee.name}
                  </h3>
                  <p className="text-xs text-[#3C3C3C]/60 leading-relaxed">
                    {bee.desc}
                  </p>
                </div>
              </Link>
            ))}
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
