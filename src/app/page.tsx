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
      desc: "Taking the sting out of home chores and errands so you can Bee Done with your to-do list.",
      icon: '🧽',
      color: "#BFC8A1", // Soft Sage
      bee: "/bee-clean.png", // Bee Done logo
      href: "/for-home-and-life/bee-done",
      active: true
    },
    {
      name: "Bee Kind",
      desc: "Tending to your pets and plants so you can Bee Kind to your peace of mind while you're away from the hive.",
      icon: '🐾',
      color: "#98B4AC", // Seafoam Teal
      bee: "/bee-1-petfood.png", // Bee Kind logo
      href: "/for-home-and-life/bee-kind",
      active: true
    },
    {
      name: 'Bee Organized',
      desc: 'Clearing the clutter and creating structure. (Coming Soon)',
      icon: '📦',
      bee: '/bee-6-bins.png',
      href: '#',
      color: '#A2C1D4',
      active: false
    },
    {
      name: 'Bee Connected',
      desc: 'Networking and community support. (Coming Soon)',
      icon: '🤝',
      bee: '/bee-7-megaphone.png',
      href: '#',
      color: '#7B6B8D',
      active: false
    },
    {
      name: 'Bee Balanced',
      desc: 'Harmony for your business and books. (Coming Soon)',
      icon: '💼',
      bee: '/bee-11-calculator.png',
      href: '#',
      color: '#4A5D66',
      active: false
    },
  ];

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center p-8 md:p-20 overflow-hidden bg-[#FFF8E7]">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E2C16B]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C17A5B]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center z-10">
          {/* Animated Logo */}
          {/* Animated Logo Container */}
          <div className="relative w-56 h-56 md:w-80 md:h-80 mx-auto mb-10">
            {/* Main Logo */}
            <div className="relative w-full h-full animate-float z-10">
              <Image
                src="/official-logo-circular.jpg"
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
          <h1 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-medium text-[#3C3C3C] mb-8 animate-fade-up delay-100 max-w-4xl mx-auto leading-relaxed">
            The Helpful Hive offers a full suite of services to help your home and business hum. Whether you need to <span className="text-[#BFC8A1] font-bold">Bee Done</span> with your to-do list, <span className="text-[#98B4AC] font-bold">Bee Kind</span> to your pets, <span className="text-[#A2C1D4] font-bold">Bee Organized</span>, <span className="text-[#7B6B8D] font-bold">Bee Connected</span>, or <span className="text-[#4A5D66] font-bold">Bee Balanced</span> with your books, we make life a little sweeter.
          </h1>

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
          <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-5xl font-bold text-[#3C3C3C] mb-4">
            Our Services
          </h2>
          <p className="font-[family-name:var(--font-montserrat)] text-[#525252] max-w-2xl mx-auto">
            Choose a service below to get started.
          </p>
        </div>

        {/* Active Services (Top Row - 2 cols) */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {beeCategories.filter(s => s.active).map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative overflow-hidden rounded-3xl bg-white border-2 border-[#E2C16B]/20 hover:border-[#E2C16B] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 p-8 flex flex-col items-center text-center"
            >
              <div
                className="w-24 h-24 relative mb-4 group-hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={service.bee}
                  alt={service.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-[family-name:var(--font-lora)] text-2xl font-bold text-[#E2C16B] mb-2">
                {service.name}
              </h3>
              <p className="font-[family-name:var(--font-montserrat)] text-[#525252] mb-4">
                {service.desc}
              </p>
              <div className="mt-auto px-6 py-2 rounded-full text-white font-semibold text-sm transition-colors" style={{ backgroundColor: service.color }}>
                View Services
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
              <div className="absolute top-3 right-3 bg-gray-200 text-gray-500 text-xs font-bold px-2 py-1 rounded">
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
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-gray-400">
                {service.desc}
              </p>
            </div>
          ))}
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
