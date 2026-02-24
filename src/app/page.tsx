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
    {
      name: "Bee Done",
      desc: "Home resets, laundry & dishes, and errand dashes.",
      icon: '🧽',
      bee: "/bee-5-clipboard.png", // Bee holding clipboard
      href: "/for-home-and-life/bee-done",
      active: true,
      color: "#5D684B", // Darker sage for better contrast with white text
      bgColor: "bg-[#BFC8A1]/20", // Light sage background
      patternColor: "#BFC8A1", // Sage pattern stroke
      actionText: "Chores & Errands"
    },
    {
      name: "Bee Kind",
      desc: "Tending to your pets and plants while you're away from the hive.",
      icon: '🐾',
      bee: "/bee-1-petfood.png", // Bee holding pet food bag
      href: "/for-home-and-life/bee-kind",
      active: true,
      color: "#506A62", // Darker teal for better contrast with white text
      bgColor: "bg-[#98B4AC]/20", // Light teal background
      patternColor: "#98B4AC", // Teal pattern stroke
      actionText: "Pet & House Sitting"
    },
    {
      name: 'Bee Organized',
      desc: 'Clearing the clutter and creating structure.',
      icon: '📦',
      bee: '/bee-6-bins.png',
      href: '#',
      color: 'var(--sky-blue)',
      active: false
    },
    {
      name: 'Bee Connected',
      desc: 'Networking and community support.',
      icon: '🤝',
      bee: '/bee-7-megaphone.png',
      href: '#',
      color: 'var(--elderberry)',
      active: false
    },
    {
      name: 'Bee Balanced',
      desc: 'Harmony for your business and books.',
      icon: '💼',
      bee: '/bee-11-calculator.png',
      href: '#',
      color: 'var(--slate-blue)',
      active: false
    },
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative min-h-[45vh] flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden bg-cream-white">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Hexagonal Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="honeycomb-home" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#honeycomb-home)" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-warm-honey/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-terra-cotta/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          {/* Animated Logo */}
          {/* Animated Logo Container */}
          <div className="relative w-full max-w-[320px] md:max-w-[500px] aspect-[1024/426] mx-auto mb-10">
            {/* Main Logo */}
            <div className="relative w-full h-full animate-float z-10 drop-shadow-xl">
              <Image
                src="/primary-logo-transparent.png"
                alt="The Helpful Hive"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Flying Bees - origin pinned to honeycomb center */}
            <div className="absolute pointer-events-none z-0" style={{ left: '55%', top: '33%' }}>
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

          {/* Tagline Container */}
          <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center">
            <h1 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl lg:text-4xl font-medium text-charcoal-gray mb-8 animate-fade-up delay-100 relative z-10 bg-cream-white/80 md:bg-transparent rounded-2xl px-4 py-2">
              Because even the busiest bees need a little help.
            </h1>
          </div>

          {/* Dual CTAs - Removed per user request */}
          {/* <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center animate-fade-up delay-300">
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
          </div> */}
        </div>
      </section>

      {/* Service Menu Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto" id="services">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-5xl font-bold text-charcoal-gray mb-4">
            Our Services
          </h2>
          <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 max-w-2xl mx-auto">
            Choose a service below to get started.
          </p>
        </div>

        {/* Active Services (Top Row - 2 cols) */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {beeCategories.filter(s => s.active).map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`group relative overflow-hidden rounded-3xl border-2 border-black hover:border-warm-honey transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-6 md:p-8 flex flex-col items-center text-center transform scale-90 md:scale-95 ${service.bgColor || 'bg-white'}`}
            >
              {/* background pattern */}
              {service.patternColor && (
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id={`honeycomb-card-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M10 0L20 5V15L10 20L0 15V5Z" fill="none" stroke={service.patternColor} strokeWidth="1" />
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#honeycomb-card-${index})`} />
                  </svg>
                </div>
              )}

              <h3 className="font-[family-name:var(--font-lora)] text-3xl font-bold text-charcoal-gray mb-4 z-10">
                {service.name}
              </h3>
              <div
                className="w-40 h-40 md:w-44 md:h-44 relative mb-6 group-hover:scale-110 transition-transform duration-300 z-10"
              >
                <Image
                  src={service.bee}
                  alt={service.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-auto px-10 py-3 rounded-full text-white font-semibold text-base md:text-lg transition-colors z-10 shadow-sm border-2 border-black" style={{ backgroundColor: service.patternColor ? service.color : service.color }}>
                {service.actionText || "View Services"}
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Services (Bottom Row - 3 cols) */}
        <div className="grid md:grid-cols-3 gap-6">
          {beeCategories.filter(s => !s.active).map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl bg-gray-50 border-2 border-dashed border-gray-200 p-6 flex flex-col items-center text-center opacity-80"
            >
              <div className="absolute top-3 right-3 bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded">
                COMING SOON
              </div>
              <div
                className="w-16 h-16 relative mb-3 grayscale opacity-60"
              >
                <Image
                  src={service.bee}
                  alt={service.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-gray-500 mb-1">
                {service.name}
              </h3>
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-500">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-[#3C3C3C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="honeycomb-home-cta" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#honeycomb-home-cta)" />
          </svg>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-medium mb-6">
            <span className="text-gradient-honey">Ready To Let Us Help?</span>
          </h2>
          <p className="text-white/80 mb-10 text-xl font-light">
            Whether It's Your Home, Your Pets, Or Your Books—We've Got You Covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="flex items-center justify-center px-8 h-[72px] bg-warm-honey text-charcoal-gray font-semibold rounded-full hover:bg-[#d4b35f] transition-all transform hover:scale-105 whitespace-nowrap"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+13145267240"
              className="flex flex-col items-center justify-center px-8 h-[72px] bg-transparent border-2 border-white/60 text-white font-semibold rounded-full hover:bg-white/10 transition-all whitespace-nowrap"
            >
              <span className="block leading-tight">(314) 526-7240</span>
              <span className="block text-sm font-normal mt-0.5 opacity-90 leading-tight tracking-normal">Call or Text</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
