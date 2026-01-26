'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export default function HomeAndLifePage() {
    const services = [
        {
            title: 'Bee Done',
            tagline: 'Household Chores & Cleaning Tasks',
            icon: '🧽',
            price: '$30',
            priceUnit: 'per hour',
            popular: true,
            items: ['Bathroom Deep Clean', 'Kitchen Deep Clean', 'Window Washing', 'Laundry Services'],
            href: '/concierge/services/bee-done'
        },
        {
            title: 'Bee Kind',
            tagline: 'Pet Care & Home Visits',
            icon: '🐾',
            price: '$20',
            priceUnit: 'per visit',
            items: ['Dog Walking', 'Potty Breaks', 'Feeding & Water', 'Vacation Check-ins'],
            href: '/concierge/services/bee-kind'
        },
        {
            title: 'Bee Organized',
            tagline: 'Organization, Decluttering & Lifestyle Systems',
            icon: '🧺',
            price: '$35',
            priceUnit: 'per hour',
            items: ['Closet Organization', 'Pantry Systems', 'Home Office Setup', 'Garage Reset'],
            href: '/concierge/services/bee-organized'
        },
        {
            title: 'Bee Efficient',
            tagline: 'Errands, Admin, and Office Help',
            icon: '💼',
            price: '$30',
            priceUnit: 'per hour',
            items: ['Errand Running', 'Appointment Scheduling', 'Data Entry', 'Event Coordination'],
            href: '/concierge/services/bee-efficient'
        },
        {
            title: 'Bee Connected',
            tagline: 'Seasonal & Community Services',
            icon: '🌸',
            price: '$35',
            priceUnit: 'per hour',
            items: ['Holiday Decorating', 'Donation Drop-offs', 'Event Support', 'Volunteer Help'],
            href: '/concierge/services/bee-connected'
        }
    ];

    return (
        <main className="min-h-screen bg-[#FFF8E7]">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
                {/* Honeycomb background */}
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb)" />
                    </svg>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-1.5 bg-[#E2C16B]/20 rounded-full text-[#E2C16B] font-semibold text-sm mb-4">
                                Home & Life Services
                            </div>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-[#3C3C3C] mb-6">
                                Your Home,
                                <br />
                                <span className="text-[#E2C16B]">Perfectly Managed</span>
                            </h1>
                            <p className="text-[#3C3C3C]/80 text-lg mb-8 leading-relaxed">
                                Sweet solutions for busy homes, pets, and people. We handle the details so you can focus on what matters most.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#E2C16B] text-[#3C3C3C] font-semibold rounded-full hover:bg-[#d4b35f] transition-all"
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
                        <div className="flex justify-center md:justify-end">
                            {/* Placeholder for visual or illustration */}
                            <div className="w-full max-w-md aspect-square bg-white rounded-3xl p-8 border-2 border-[#E2C16B]/30 shadow-card rotate-3 flex items-center justify-center">
                                <span className="text-8xl">🏠</span>
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
                        <h2 className="font-display text-3xl md:text-4xl text-[#3C3C3C] mb-4">The Bee Ecosystem</h2>
                        <p className="text-[#3C3C3C]/70">Every service is designed to make your life sweeter</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <Link key={index} href={service.href} className="group h-full">
                                <div className={`h-full bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${service.popular ? 'border-[#E2C16B] shadow-lg relative overflow-hidden' : 'border-[#E2C16B]/20'}`}>

                                    {service.popular && (
                                        <div className="absolute top-0 right-0 bg-[#E2C16B] text-[#3C3C3C] text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-5xl">{service.icon}</span>
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

            {/* Meet Your Concierge */}
            <section className="py-20 px-4 md:px-8 bg-white/50">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h2 className="font-display text-3xl text-[#3C3C3C] mb-6">Meet Your Home Concierge</h2>
                        <p className="text-[#3C3C3C]/80 mb-6 leading-relaxed">
                            Hi there! I'm the founder of The Helpful Hive. As a wife, mom, and busy professional, I know that keeping a home running smoothly takes coordination, attention to detail, and a network of trusted service providers.
                        </p>
                        <p className="text-[#3C3C3C]/80 leading-relaxed font-medium">
                            That's why I created The Helpful Hive—to help busy families with their home management needs.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative w-64 h-64">
                            <div className="absolute inset-0 bg-[#E2C16B] rounded-full opacity-20 blur-2xl transform scale-110"></div>
                            <Image
                                src="/queen-bee.jpg"
                                alt="Founder"
                                fill
                                className="object-cover rounded-full border-4 border-[#E2C16B] relative z-10 shadow-float"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-[#3C3C3C]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-4">
                        Ready to sweeten your life?
                    </h2>
                    <p className="text-white/70 mb-8 text-lg">
                        Let us handle the chores while you enjoy the honey.
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

        </main>
    );
}
