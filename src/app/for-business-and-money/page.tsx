'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Check, Users, Lightbulb, DollarSign, MapPin } from 'lucide-react';

export default function BusinessAndMoneyPage() {
    const services = [
        {
            title: 'Monthly Bookkeeping',
            price: '$400',
            period: '/month',
            description: 'Complete monthly financial management',
            features: ['Bank reconciliation', 'AP/AR management', 'Financial statements', 'Unlimited support'],
            href: '/bookkeeping/services/monthly-bookkeeping',
            popular: false
        },
        {
            title: 'Full-Service Payroll',
            price: '$500',
            period: '/month',
            description: 'Hassle-free payroll processing',
            features: ['Direct deposit & checks', 'Tax filing & compliance', 'W-2 & 1099 preparation', 'Quarterly reporting'],
            href: '/bookkeeping/services/payroll',
            popular: true
        },
        {
            title: 'QuickBooks Cleanup',
            price: '$500+',
            period: 'project',
            description: 'Get your books back on track',
            features: ['Error correction', 'Chart of accounts organization', 'Historical data catch-up', 'Training included'],
            href: '/bookkeeping/services/quickbooks-cleanup',
            popular: false
        },
        {
            title: 'CFO & Advisory',
            price: '$750',
            period: '/month',
            description: 'Strategic financial guidance',
            features: ['Cash flow management', 'Budgeting & forecasting', 'Strategic planning', 'Growth consulting'],
            href: '/bookkeeping/services/cfo-advisory',
            popular: false
        }
    ];

    return (
        <main className="min-h-screen bg-[#FFF8E7]">
            {/* Hero Section - Sage Theme */}
            <section className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
                {/* Honeycomb background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#BFC8A1" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb)" />
                    </svg>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 animate-fade-up">
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-[#3C3C3C] mb-6">
                                Taking the Sting Out of
                                <br />
                                <span className="text-[#7A8C57]">Business Finances</span>
                            </h1>
                            <p className="text-[#3C3C3C]/80 text-lg mb-8 leading-relaxed">
                                Expert bookkeeping and financial management for small businesses.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#BFC8A1] text-[#3C3C3C] font-semibold rounded-full hover:bg-[#aab68b] transition-all hover:shadow-md"
                                >
                                    Get a Quote
                                </Link>
                                <a
                                    href="#pricing"
                                    className="px-8 py-4 bg-transparent border-2 border-[#BFC8A1] text-[#3C3C3C] font-semibold rounded-full hover:bg-[#BFC8A1] hover:text-[#3C3C3C] transition-all"
                                >
                                    View Pricing
                                </a>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center md:justify-end">
                            {/* Animated Logo Placement */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
                                <div className="absolute inset-0 bg-[#BFC8A1] rounded-full opacity-10 blur-3xl transform scale-110"></div>
                                <div className="relative w-full h-full bg-white rounded-full p-4 border-4 border-[#BFC8A1] shadow-2xl flex items-center justify-center overflow-hidden">
                                    <Image
                                        src="/logo-circular.jpg"
                                        alt="Business Services Logo"
                                        fill
                                        className="object-contain hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Grid */}
            <div id="pricing" className="py-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-3xl md:text-4xl text-[#3C3C3C] mb-4">Transparent Pricing</h2>
                        <p className="text-[#3C3C3C]/70">Competitive rates designed to help your business thrive</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <Link key={index} href={service.href} className="group h-full">
                                <div className={`h-full bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${service.popular ? 'border-[#BFC8A1] shadow-lg relative overflow-hidden' : 'border-[#BFC8A1]/20'}`}>

                                    {service.popular && (
                                        <div className="absolute top-0 right-0 bg-[#BFC8A1] text-[#3C3C3C] text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                                            Most Popular
                                        </div>
                                    )}

                                    <div className="mb-6">
                                        <div className="flex justify-between items-baseline mb-2">
                                            <h3 className="font-display text-2xl font-bold text-[#3C3C3C]">{service.title}</h3>
                                        </div>
                                        <p className="text-[#3C3C3C]/60 text-sm">{service.description}</p>
                                    </div>

                                    <div className="mb-6 pb-6 border-b border-[#BFC8A1]/20">
                                        <span className="text-4xl font-display font-bold text-[#7A8C57]">{service.price}</span>
                                        <span className="text-[#3C3C3C]/60 font-medium ml-1">{service.period}</span>
                                    </div>

                                    <ul className="space-y-4">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-[#3C3C3C]/80 text-sm">
                                                <Check className="w-5 h-5 text-[#BFC8A1] mt-0.5 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Sage Tip */}
                    <div className="mt-12 bg-[#BFC8A1]/10 rounded-2xl p-6 border border-[#BFC8A1]/30 text-center max-w-3xl mx-auto">
                        <p className="text-[#3C3C3C] font-medium">🍃 Special introductory rates available for new clients.</p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <section className="py-20 px-4 md:px-8 bg-white/50">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-display text-3xl font-medium text-[#3C3C3C] text-center mb-12">Why Choose The Helpful Hive?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-[#BFC8A1]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#7A8C57] transform group-hover:rotate-12 transition-transform">
                                <Users size={32} />
                            </div>
                            <h3 className="font-semibold text-[#3C3C3C]">Expert Team</h3>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-[#BFC8A1]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#7A8C57] transform group-hover:rotate-12 transition-transform">
                                <Lightbulb size={32} />
                            </div>
                            <h3 className="font-semibold text-[#3C3C3C]">Personalized</h3>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-[#BFC8A1]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#7A8C57] transform group-hover:rotate-12 transition-transform">
                                <DollarSign size={32} />
                            </div>
                            <h3 className="font-semibold text-[#3C3C3C]">Affordable</h3>
                        </div>
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-[#BFC8A1]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#7A8C57] transform group-hover:rotate-12 transition-transform">
                                <MapPin size={32} />
                            </div>
                            <h3 className="font-semibold text-[#3C3C3C]">Local Focus</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-[#3C3C3C]">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-4">
                        Ready to Organize Your Finances?
                    </h2>
                    <p className="text-white/70 mb-8 text-lg">
                        Contact us today for a free consultation and let The Helpful Hive take the sting out of your business finances.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[#BFC8A1] text-[#3C3C3C] font-semibold rounded-full hover:bg-[#aab68b] transition-all"
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
