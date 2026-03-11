'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const beeCategories = [
    {
      name: "Bee Done",
      tagline: "Chores & Errands",
      desc: "Home resets, laundry & dishes, and errand dashes.",
      bee: "/bee-5-clipboard.png",
      href: "/for-home-and-life/bee-done",
      active: true,
      color: "#5D684B",
      bgColor: "bg-[#BFC8A1]/20",
      patternColor: "#BFC8A1",
    },
    {
      name: "Bee Kind",
      tagline: "Pet & House Sitting",
      desc: "Tending to your pets and plants while you're away from the hive.",
      bee: "/bee-1-petfood.png",
      href: "/for-home-and-life/bee-kind",
      active: true,
      color: "#506A62",
      bgColor: "bg-[#98B4AC]/20",
      patternColor: "#98B4AC",
    },
    {
      name: 'Bee Organized',
      desc: 'Clearing the clutter and creating structure.',
      bee: '/bee-6-bins.png',
      href: '#',
      color: 'var(--sky-blue)',
      active: false
    },
    {
      name: 'Bee Connected',
      desc: 'Networking and community support.',
      bee: '/bee-7-megaphone.png',
      href: '#',
      color: 'var(--elderberry)',
      active: false
    },
    {
      name: 'Bee Balanced',
      desc: 'Harmony for your business and books.',
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
            <h1 className="font-[family-name:var(--font-lora)] italic text-2xl md:text-3xl lg:text-4xl font-medium text-charcoal-gray mb-8 animate-fade-up delay-100 relative z-10 bg-cream-white/80 md:bg-transparent rounded-2xl px-4 py-2">
              Because even the busiest bees need a little help.
            </h1>
          </div>
        </div>
      </section>

      {/* CTA Buttons Section */}
      <section className="py-10 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-warm-honey text-charcoal-gray font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#d4b35f] transition-all hover:shadow-lg hover:-translate-y-1 text-center"
          >
            New to the Hive? Start with a 15-minute Buzz Call
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-charcoal-gray text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#2a2a2a] transition-all hover:shadow-lg hover:-translate-y-1 text-center"
          >
            Book a Service
          </Link>
        </div>
      </section>

      {/* Explore the Hive Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto" id="services">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-5xl font-bold text-charcoal-gray mb-4">
            Explore the Hive
          </h2>
          <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 max-w-2xl mx-auto">
            <strong>The Helpful Hive</strong> offers a full suite of services to help your home and business hum. Whether you need to <strong>Bee Done</strong> with your to-do list or <strong>Bee Kind</strong> to your home and pets, we make life a little sweeter.
          </p>
        </div>

        {/* Active Services */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {beeCategories.filter(s => s.active).map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`group relative overflow-hidden rounded-3xl border-2 border-neutral-300 hover:border-warm-honey transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${service.bgColor || 'bg-white'}`}
            >
              {/* Background honeycomb pattern */}
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

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-8">
                {/* Bee Image */}
                <div className="w-36 h-36 md:w-44 md:h-44 relative flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={service.bee}
                    alt={service.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h3 className="font-[family-name:var(--font-lora)] text-3xl font-bold text-charcoal-gray mb-2">
                    {service.name}
                  </h3>
                  <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 mb-4 leading-relaxed">
                    {service.desc}
                  </p>
                  <div
                    className="px-8 py-3 rounded-full text-white font-[family-name:var(--font-montserrat)] font-semibold text-base transition-all shadow-sm group-hover:shadow-md"
                    style={{ backgroundColor: service.color }}
                  >
                    {service.tagline || "View Services"}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Coming Soon Services */}
        <div className="grid md:grid-cols-3 gap-6">
          {beeCategories.filter(s => !s.active).map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl bg-gray-50 border-2 border-dashed border-gray-200 p-6 flex flex-col items-center text-center opacity-80"
            >
              <div className="absolute top-3 right-3 bg-gray-200 text-gray-700 text-xs font-bold px-2 py-1 rounded">
                COMING SOON
              </div>
              <div className="w-16 h-16 relative mb-3 grayscale opacity-60">
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

      {/* Why The Helpful Hive? Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-charcoal-gray mb-3">
              Why The Helpful Hive?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-charcoal-gray mb-3">Community Roots</h3>
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-neutral-600 leading-relaxed">
                Based in Wentzville, MO, we&apos;re proud to serve the families and small businesses in our local community.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-charcoal-gray mb-3">Trust &amp; Reliability</h3>
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-neutral-600 leading-relaxed">
                We show up on time, every time. You&apos;ll receive a text/photo update once your service is completed.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-charcoal-gray mb-3">Custom Care</h3>
              <p className="font-[family-name:var(--font-montserrat)] text-sm text-neutral-600 leading-relaxed">
                No two hives are the same. Every service is tailored to your specific household routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Queen Bee Section */}
      <section className="py-16 md:py-20 px-4 md:px-8 bg-cream-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            {/* Photo */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 rounded-2xl border-4 border-warm-honey shadow-xl z-10 pointer-events-none" />
                <Image src="/amanda-headshot.jpg" alt="Amanda — The Queen Bee" fill className="object-cover" />
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-3 text-center md:text-left">
              <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-warm-honey-dark mb-4">
                Meet the Queen Bee
              </h2>
              <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 leading-relaxed mb-6">
                Hi, I&apos;m Amanda! As a business owner, mom of two, and manager of a full hive (including two Puggles and two cats), I know how quickly the &ldquo;to-do&rdquo; list can take over. I started The Helpful Hive to help you reclaim your time.
              </p>
              <Link
                href="/about"
                className="inline-block px-8 py-4 bg-warm-honey text-charcoal-gray font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#d4b35f] transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
