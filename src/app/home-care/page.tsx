'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function HomeCarePage() {
    const services = [
        {
            title: 'Bee Done',
            tagline: 'Household Chores & Cleaning Tasks',
            icon: '🧽',
            price: '$30',
            priceUnit: 'per hour',
            items: ['Bathroom Deep Clean', 'Kitchen Deep Clean', 'Window Washing', 'Laundry Services'],
            href: '/concierge/services/bee-done'
        },
        {
            title: 'Bee Organized',
            tagline: 'Organization, Decluttering & Lifestyle Systems',
            icon: '🧺',
            price: '$35',
            priceUnit: 'per hour',
            items: ['Closet Organization', 'Pantry Systems', 'Home Office Setup', 'Garage Reset'],
            href: '/concierge/services/bee-organized'
        }
    ];

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
                                Cleaning, Organizing, and Keeping Your Home Sparkling.
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
                        <p className="text-[#3C3C3C]/70">A Clean and Organized Home, Every Time</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {services.map((service, index) => (
                            <Link key={index} href={service.href} className="group h-full">
                                <div className="h-full bg-white rounded-3xl p-8 border-2 border-[#E2C16B]/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300 inline-block">{service.icon}</span>
                                        <div className="text-right">
                                            <div className="font-display text-2xl font-bold text-[#E2C16B]">{service.price}</div>
                                            <div className="text-[#3C3C3C]/60 text-sm">{service.priceUnit}</div>
                                        </div>
                                    </div>

                                    <h3 className="font-display text-xl font-bold text-[#3C3C3C] mb-2">{service.title}</h3>
                                    <p className="text-[#E2C16B] font-medium text-sm mb-6">{service.tagline}</p>

                                    <ul className="space-y-3">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-[#3C3C3C]/80 text-sm">
                                                <Check className="w-4 h-4 text-[#E2C16B] mt-0.5 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                        ))}
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
