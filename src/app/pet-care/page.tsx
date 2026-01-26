'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function PetCarePage() {
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
                                Compassionate
                                <br />
                                <span className="text-[#E2C16B]">Pet Care</span>
                            </h1>
                            <p className="text-[#3C3C3C]/80 text-lg mb-8 leading-relaxed">
                                Guarding Your Hive, Loving Your Pets
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
                                        alt="Pet Care Services Logo"
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
                    "Pet Care That is the <span className="text-[#E2C16B] italic">Bee's Knees</span>"
                </p>
            </section>

            {/* Services Grid */}
            <div id="services" className="py-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-[#3C3C3C] mb-4">Pet Care Services</h2>

                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-[#E2C16B]/20 shadow-xl">

                            {/* Header: Icon & Price */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                                <div className="flex items-center gap-6">
                                    <span className="text-6xl">🐾</span>
                                    <div>
                                        <h3 className="font-display text-3xl font-bold text-[#3C3C3C]">Bee Kind</h3>
                                        <p className="text-[#E2C16B] font-medium text-lg">Pet Care & Home Visits</p>
                                    </div>
                                </div>
                                <div className="text-left md:text-right bg-[#FFF8E7] px-6 py-3 rounded-2xl border border-[#E2C16B]/30">
                                    <div className="font-display text-3xl font-bold text-[#E2C16B]">$20</div>
                                    <div className="text-[#3C3C3C]/60 text-sm font-medium">and up</div>
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
                                            { title: 'Dog Walking', desc: '30-60 minute walks tailored to your pet' },
                                            { title: 'Potty Breaks', desc: 'Quick visits for bathroom needs' },
                                            { title: 'Feeding & Water', desc: 'Meal prep and fresh water refills' },
                                            { title: 'Vacation Check-ins', desc: "Daily visits while you're away" },
                                            { title: 'Pet Sitting', desc: 'In-home care for extended stays' },
                                            { title: 'Basic Grooming', desc: 'Brushing and simple care tasks' }
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
                                                "Peace of mind while you're away",
                                                "Consistent routine for your pets",
                                                "Bonded and insured care",
                                                "Daily updates with photos"
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
                        <span className="text-gradient-honey">Ready To Give Your Pets The Best?</span>
                    </h2>
                    <p className="text-white/70 mb-10 text-xl font-light">
                        Let Us Care For Your Furry Friends While You're Away.
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
