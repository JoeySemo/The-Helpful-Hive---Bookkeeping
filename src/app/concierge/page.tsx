'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Check, Sparkles } from 'lucide-react';

export default function ConciergePage() {
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

    const howItWorks = [
        {
            step: '1',
            title: 'Schedule a Consultation',
            description: "Reach out to discuss your home management needs. We'll create a customized plan."
        },
        {
            step: '2',
            title: 'Receive Your Custom Plan',
            description: "We'll tailor a service package that addresses your specific needs."
        },
        {
            step: '3',
            title: 'Enjoy Peace of Mind',
            description: "Relax knowing your home is in expert hands with regular updates."
        }
    ];

    return (
        <main className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 px-4 md:px-8 bg-gradient-warm overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="font-display text-3xl md:text-5xl font-medium text-neutral-900 mb-4">
                                Your Home,
                                <br />
                                <span className="text-gradient-honey">Perfectly Managed</span>
                            </h1>
                            <p className="text-neutral-600 text-lg mb-3">
                                Sweet solutions for busy homes, pets, and people.
                            </p>
                            <p className="text-neutral-500 mb-8">
                                We handle the details of home management so you can focus on what matters most.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/about"
                                    className="px-6 py-3 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-all"
                                >
                                    Schedule a Consultation
                                </Link>
                                <Link
                                    href="/concierge/services"
                                    className="px-6 py-3 bg-transparent border border-neutral-300 text-neutral-700 font-medium rounded-full hover:border-honey-500 hover:text-honey-600 transition-all"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80">
                                <Image
                                    src="/concierge-logo.jpg"
                                    alt="The Helpful Hive Concierge"
                                    fill
                                    className="object-cover rounded-3xl shadow-float"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tagline Banner */}
            <section className="py-8 px-4 bg-white border-b border-neutral-100">
                <p className="font-display text-xl md:text-2xl text-neutral-900 text-center font-medium">
                    You Relax — We'll Handle the Honey-Do's
                </p>
            </section>

            {/* Services Section */}
            <section className="py-16 md:py-24 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-2xl md:text-3xl font-medium text-neutral-900 mb-3">
                            Our Service Ecosystem
                        </h2>
                        <p className="text-neutral-500">
                            Every service is part of The Helpful Hive
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <Link key={index} href={service.href} className="group">
                                <div className={`relative bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 h-full ${service.popular ? 'border-honey-400 shadow-lg' : 'border-neutral-200'
                                    }`}>
                                    {service.popular && (
                                        <div className="absolute -top-3 left-6">
                                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-honey-500 text-white text-xs font-medium rounded-full">
                                                <Sparkles className="w-3 h-3" />
                                                Most Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-4xl">{service.icon}</span>
                                        <div className="text-right">
                                            <span className="font-display text-2xl font-semibold text-honey-600">
                                                {service.price}
                                            </span>
                                            <span className="text-neutral-500 text-sm block">
                                                {service.priceUnit}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="font-display text-xl font-medium text-neutral-900 mb-1">
                                        {service.title}
                                    </h3>
                                    <p className="text-honey-600 text-sm mb-4">
                                        {service.tagline}
                                    </p>

                                    <ul className="space-y-2">
                                        {service.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-neutral-600 text-sm">
                                                <Check className="w-4 h-4 text-honey-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="font-display text-2xl md:text-3xl font-medium text-neutral-900 text-center mb-4">
                        How It Works
                    </h2>
                    <p className="text-neutral-500 text-center mb-12">
                        Getting started is simple. We make home management effortless from day one.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {howItWorks.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-12 h-12 rounded-full bg-honey-500 text-white font-display font-semibold text-lg flex items-center justify-center mx-auto mb-4">
                                    {step.step}
                                </div>
                                <h3 className="font-display font-medium text-neutral-900 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-neutral-500 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet Your Concierge */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-neutral-100">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
                        <div className="flex justify-center md:justify-start">
                            <div className="relative w-40 h-40 md:w-48 md:h-48">
                                <Image
                                    src="/queen-bee.jpg"
                                    alt="The Queen Bee"
                                    fill
                                    className="object-cover rounded-full border-4 border-honey-400"
                                />
                            </div>
                        </div>
                        <div>
                            <p className="text-honey-600 font-medium mb-1">Our Queen Bee</p>
                            <h2 className="font-display text-2xl md:text-3xl font-medium text-neutral-900 mb-4">
                                Meet Your Home Concierge
                            </h2>
                            <p className="text-neutral-600 mb-4 leading-relaxed">
                                Hi there! I'm the founder of The Helpful Hive. As a wife, mom, and busy professional, I know that keeping a home running smoothly takes coordination, attention to detail, and a network of trusted service providers.
                            </p>
                            <p className="text-neutral-600 leading-relaxed">
                                That's why I created The Helpful Hive—to help busy families with their home management needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-neutral-900">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-neutral-400 mb-8">
                        Ready to experience stress-free home management? Reach out today for a free consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/about"
                            className="px-8 py-3 bg-honey-500 text-white font-medium rounded-full hover:bg-honey-600 transition-all"
                        >
                            Schedule a Consultation
                        </Link>
                        <a
                            href="tel:+13145267240"
                            className="px-8 py-3 bg-transparent border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all"
                        >
                            Call (314) 526-7240
                        </a>
                    </div>
                </div>
            </section>

            {/* Service Area */}
            <section className="py-6 px-4 bg-neutral-100 text-center">
                <p className="text-neutral-500 text-sm">
                    Serving Wentzville, Lake St. Louis, O'Fallon, and surrounding St. Charles County areas.
                </p>
            </section>
        </main>
    );
}
