'use client';

import Link from 'next/link';
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
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="honeycomb" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#honeycomb)" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          {/* Bee illustration */}
          <div className="text-5xl mb-6 animate-in">🐝</div>

          {/* Tagline */}
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-medium text-[#3C3C3C] mb-4 animate-in-delay-1">
            Even the busiest bees
            <br />
            <span className="text-gradient-honey">need a little help.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[#3C3C3C]/70 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-in-delay-2">
            Your full hive of home, pet, lifestyle, and bookkeeping services.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in-delay-3">
            <Link
              href="/for-home-and-life"
              className="px-8 py-4 bg-[#E2C16B] text-[#3C3C3C] font-semibold rounded-full hover:bg-[#d4b35f] transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Help at Home
            </Link>
            <Link
              href="/for-business-and-money"
              className="px-8 py-4 bg-[#3C3C3C] text-white font-semibold rounded-full hover:bg-[#2d2d2d] transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Help with Your Books
            </Link>
          </div>
        </div>
      </section>

      {/* Two Pillars Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Home & Life Pillar */}
            <div className="bg-[#FFF8E7] rounded-3xl p-8 border-2 border-[#E2C16B]/30 hover:border-[#E2C16B] transition-all hover:shadow-xl group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#E2C16B] flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                  "</div>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-[#3C3C3C]">
                    {homePillar.title}
                  </h2>
                </div>
              </div>
              <p className="text-[#3C3C3C]/70 mb-6">{homePillar.subtitle}</p>

              <div className="space-y-4 mb-8">
                {homePillar.services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-[#E2C16B] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-[#3C3C3C]">{service.name}</p>
                        <p className="text-sm text-[#3C3C3C]/60">{service.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                href={homePillar.href}
                className="inline-flex items-center gap-2 text-[#E2C16B] font-semibold group-hover:gap-4 transition-all"
              >
                {homePillar.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Business & Money Pillar */}
            <div className="bg-[#BFC8A1]/20 rounded-3xl p-8 border-2 border-[#BFC8A1]/30 hover:border-[#BFC8A1] transition-all hover:shadow-xl group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#BFC8A1] flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-[#3C3C3C]">
                    {bookkeepingPillar.title}
                  </h2>
                </div>
              </div>
              <p className="text-[#3C3C3C]/70 mb-6">{bookkeepingPillar.subtitle}</p>

              <div className="space-y-4 mb-8">
                {bookkeepingPillar.services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-[#BFC8A1] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-[#3C3C3C]">{service.name}</p>
                        <p className="text-sm text-[#3C3C3C]/60">{service.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                href={bookkeepingPillar.href}
                className="inline-flex items-center gap-2 text-[#3C3C3C] font-semibold group-hover:gap-4 transition-all"
              >
                {bookkeepingPillar.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bee Categories Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-[#FFF8E7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-medium text-[#3C3C3C] mb-3">
              Our Service Ecosystem
            </h2>
            <p className="text-[#3C3C3C]/70">
              Everything we do is part of The Helpful Hive
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {beeCategories.map((bee, index) => (
              <Link key={index} href={bee.href} className="group">
                <div className="bg-white rounded-2xl p-5 text-center border border-[#E2C16B]/20 hover:border-[#E2C16B] hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="text-3xl mb-3">{bee.icon}</div>
                  <h3 className="font-display font-semibold text-[#3C3C3C] mb-1">
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
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#3C3C3C]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-4xl font-medium text-white mb-4">
            Ready to let us help?
          </h2>
          <p className="text-white/70 mb-8 text-lg">
            Whether it's your home, your pets, or your books—we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#E2C16B] text-[#3C3C3C] font-semibold rounded-full hover:bg-[#d4b35f] transition-all"
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
