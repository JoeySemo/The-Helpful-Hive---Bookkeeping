'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function HomeCarePage() {
    // Services data integrated directly into the view below

    return (
        <main className="min-h-screen bg-[#FFF8E7]">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
                {/* Honeycomb background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb)" />
                    </svg>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 animate-fade-up">
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-[#3C3C3C] mb-6">
                                Your Home,
                                <br />
                                <span className="text-[#E2C16B]">Perfectly Managed</span>
                            </h1>
                            <p className="text-[#3C3C3C]/80 text-lg mb-8 leading-relaxed">
                                Where Every Home Gets Buzzed Back Into Shape
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/about"
                                    className="px-8 py-4 bg-[#E2C16B] text-[#3C3C3C] font-semibold rounded-full hover:bg-[#d4b35f] transition-all hover:shadow-lg"
                                >
                                    Schedule a Consultation
                                </Link>
                                <a
                                    href="#services"
                                    className="px-8 py-4 bg-transparent border-2 border-[#E2C16B] text-[#3C3C3C] font-semibold rounded-full hover:bg-[#E2C16B] hover:text-[#3C3C3C] transition-all"
                                >
                                    Explore Services
                                </a>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center md:justify-end">
                            {/* Animated Logo Placement */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
                                <div className="absolute inset-0 bg-[#E2C16B] rounded-full opacity-10 blur-3xl transform scale-110"></div>
                                <div className="relative w-full h-full bg-white rounded-full p-4 border-4 border-[#E2C16B] shadow-2xl flex items-center justify-center overflow-hidden">
                                    <Image
                                        src="/logo-circular.jpg"
                                        alt="Home Care Services Logo"
                                        fill
                                        className="object-contain hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tagline Banner */}
            <section className="py-12 px-4 bg-white border-y border-[#E2C16B]/20">
                <p className="font-display text-2xl md:text-3xl text-[#3C3C3C] text-center font-medium max-w-3xl mx-auto">
                    "You Relax — We'll Handle the <span className="text-[#E2C16B] italic">Honey-Do's</span>"
                </p>
            </section>

            {/* Services Grid */}
            <div id="services" className="py-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-[#3C3C3C] mb-4">Home Care Services</h2>
                        <p className="text-[#3C3C3C]/70">We Swarm Your Chores So You Don’t Have To</p>
                    </div>

                    <div className="space-y-16 max-w-4xl mx-auto">

                        {/* Bee Done Card */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-[#E2C16B]/20 shadow-xl">
                            {/* Header: Icon & Price */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                                <div className="flex items-center gap-6">
                                    <span className="text-6xl">🧽</span>
                                    <div>
                                        <h3 className="font-display text-3xl font-bold text-[#3C3C3C]">Bee Done</h3>
                                        <p className="text-[#E2C16B] font-medium text-lg">Household Chores & Cleaning Tasks</p>
                                    </div>
                                </div>
                                <div className="text-left md:text-right bg-[#FFF8E7] px-6 py-3 rounded-2xl border border-[#E2C16B]/30">
                                    <div className="font-display text-3xl font-bold text-[#E2C16B]">$30</div>
                                    <div className="text-[#3C3C3C]/60 text-sm font-medium">per hour</div>
                                </div>
                            </div>

                            <hr className="border-[#E2C16B]/20 mb-10" />

                            <div className="grid md:grid-cols-2 gap-12">
                                {/* What's Included */}
                                <div>
                                    <h4 className="font-display text-xl font-bold text-[#3C3C3C] mb-6 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#E2C16B]"></span>
                                        What's Included
                                    </h4>
                                    <ul className="space-y-4">
                                        {[
                                            { title: 'Bathroom Deep Clean', desc: 'Thorough scrubbing of all surfaces' },
                                            { title: 'Kitchen Deep Clean', desc: 'Appliances, counters, cabinets, floors' },
                                            { title: 'Window Washing', desc: 'Interior and exterior window cleaning' },
                                            { title: 'Laundry Services', desc: 'Wash, dry, fold, and put away' },
                                            { title: 'General Cleaning', desc: 'Dusting, vacuuming, and mopping' },
                                            { title: 'Move-In/Out Cleaning', desc: 'Complete deep clean for transitions' }
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-[#E2C16B] mt-1 flex-shrink-0" />
                                                <div>
                                                    <span className="font-semibold text-[#3C3C3C] block">{item.title}</span>
                                                    <span className="text-[#3C3C3C]/70 text-sm">{item.desc}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Key Benefits */}
                                <div>
                                    <h4 className="font-display text-xl font-bold text-[#3C3C3C] mb-6 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#E2C16B]"></span>
                                        Key Benefits
                                    </h4>
                                    <div className="bg-[#FFF8E7]/50 rounded-2xl p-6 border border-[#E2C16B]/10">
                                        <ul className="space-y-4">
                                            {[
                                                "Save time for what matters most",
                                                "Professional-grade cleaning supplies",
                                                "Reliable, trustworthy service",
                                                "Flexible scheduling options"
                                            ].map((benefit, i) => (
                                                <li key={i} className="flex items-center gap-3 text-[#3C3C3C]/90">
                                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#E2C16B] shadow-sm flex-shrink-0">
                                                        <Check className="w-4 h-4" />
                                                    </div>
                                                    <span className="font-medium">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bee Organized Card */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-[#E2C16B]/20 shadow-xl">
                            {/* Header: Icon & Price */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                                <div className="flex items-center gap-6">
                                    <span className="text-6xl">🧺</span>
                                    <div>
                                        <h3 className="font-display text-3xl font-bold text-[#3C3C3C]">Bee Organized</h3>
                                        <p className="text-[#E2C16B] font-medium text-lg">Organization, Decluttering & Lifestyle Systems</p>
                                    </div>
                                </div>
                                <div className="text-left md:text-right bg-[#FFF8E7] px-6 py-3 rounded-2xl border border-[#E2C16B]/30">
                                    <div className="font-display text-3xl font-bold text-[#E2C16B]">$35</div>
                                    <div className="text-[#3C3C3C]/60 text-sm font-medium">per hour</div>
                                </div>
                            </div>

                            <hr className="border-[#E2C16B]/20 mb-10" />

                            <div className="grid md:grid-cols-2 gap-12">
                                {/* What's Included */}
                                <div>
                                    <h4 className="font-display text-xl font-bold text-[#3C3C3C] mb-6 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#E2C16B]"></span>
                                        What's Included
                                    </h4>
                                    <ul className="space-y-4">
                                        {[
                                            { title: 'Closet Organization', desc: 'Custom systems for wardrobes' },
                                            { title: 'Pantry Systems', desc: 'Efficient food storage and labeling' },
                                            { title: 'Home Office Setup', desc: 'Productive workspace design' },
                                            { title: 'Garage Reset', desc: 'Transform clutter into storage' },
                                            { title: 'Decluttering Services', desc: 'Sort, donate, and dispose responsibly' },
                                            { title: 'Lifestyle Systems', desc: 'Routines for lasting organization' }
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-[#E2C16B] mt-1 flex-shrink-0" />
                                                <div>
                                                    <span className="font-semibold text-[#3C3C3C] block">{item.title}</span>
                                                    <span className="text-[#3C3C3C]/70 text-sm">{item.desc}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Key Benefits */}
                                <div>
                                    <h4 className="font-display text-xl font-bold text-[#3C3C3C] mb-6 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#E2C16B]"></span>
                                        Key Benefits
                                    </h4>
                                    <div className="bg-[#FFF8E7]/50 rounded-2xl p-6 border border-[#E2C16B]/10">
                                        <ul className="space-y-4">
                                            {[
                                                "Find what you need when you need it",
                                                "Reduce stress and mental clutter",
                                                "Create more usable space",
                                                "Maintain organization long-term"
                                            ].map((benefit, i) => (
                                                <li key={i} className="flex items-center gap-3 text-[#3C3C3C]/90">
                                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#E2C16B] shadow-sm flex-shrink-0">
                                                        <Check className="w-4 h-4" />
                                                    </div>
                                                    <span className="font-medium">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8 bg-[#3C3C3C]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-display text-3xl md:text-5xl font-medium mb-6">
                        <span className="text-gradient-honey">Ready For A Spotless Home?</span>
                    </h2>
                    <p className="text-white/70 mb-10 text-xl font-light">
                        Let Us Handle The Cleaning While You Enjoy Your Space.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/about"
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

        </main>
    );
}
