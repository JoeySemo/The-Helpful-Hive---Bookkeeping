'use client';

import Link from 'next/link';
import { Check, Star, Users, Lightbulb, DollarSign, MapPin } from 'lucide-react';

export default function BookkeepingPage() {
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
            price: '$500 - $2,500',
            period: '',
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

    const whyChoose = [
        { icon: Users, title: 'Expert Team', description: 'Certified professionals with years of industry experience' },
        { icon: Lightbulb, title: 'Personalized Service', description: 'Tailored solutions that fit your specific business needs' },
        { icon: DollarSign, title: 'Affordable Solutions', description: 'Transparent pricing with no hidden fees' },
        { icon: MapPin, title: 'Local Focus', description: 'Serving St. Louis and surrounding counties with care' }
    ];

    return (
        <main className="min-h-screen bg-neutral-50">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 px-4 md:px-8 bg-gradient-warm">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="font-display text-3xl md:text-5xl font-medium text-neutral-900 mb-4">
                        Taking the Sting Out of
                        <br />
                        <span className="text-gradient-honey">Business Finances</span>
                    </h1>
                    <p className="text-neutral-600 text-lg md:text-xl max-w-2xl mx-auto">
                        Expert bookkeeping and financial management for small businesses in St. Louis and surrounding counties.
                    </p>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 md:py-24 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-2xl md:text-3xl font-medium text-neutral-900 mb-3">
                            Transparent Pricing
                        </h2>
                        <p className="text-neutral-500">
                            Competitive rates designed to help your business thrive
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {services.map((service, index) => (
                            <Link key={index} href={service.href} className="group">
                                <div className={`relative bg-white rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 h-full ${service.popular ? 'border-honey-400 shadow-lg' : 'border-neutral-200'
                                    }`}>
                                    {service.popular && (
                                        <div className="absolute -top-3 left-6">
                                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-honey-500 text-white text-xs font-medium rounded-full">
                                                <Star className="w-3 h-3" />
                                                Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="mb-4">
                                        <h3 className="font-display text-xl font-medium text-neutral-900 mb-1">
                                            {service.title}
                                        </h3>
                                        <p className="text-neutral-500 text-sm">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <span className="font-display text-3xl font-semibold text-neutral-900">
                                            {service.price}
                                        </span>
                                        <span className="text-neutral-500 text-sm">
                                            {service.period}
                                        </span>
                                    </div>

                                    <ul className="space-y-3">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-neutral-600 text-sm">
                                                <Check className="w-5 h-5 text-honey-500 flex-shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Special Rates Banner */}
                    <div className="mt-10 bg-white rounded-2xl p-6 md:p-8 border border-honey-200 max-w-2xl mx-auto text-center">
                        <p className="text-neutral-900 font-medium mb-1">
                            🍯 Special introductory rates for new clients
                        </p>
                        <p className="text-neutral-500 text-sm">
                            Contact us for a free consultation and custom quote
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-display text-2xl md:text-3xl font-medium text-neutral-900 text-center mb-12">
                        Why Choose The Helpful Hive?
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                        {whyChoose.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-12 h-12 rounded-xl bg-honey-100 flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-6 h-6 text-honey-600" />
                                    </div>
                                    <h3 className="font-display font-medium text-neutral-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-neutral-500 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-neutral-900">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-display text-2xl md:text-3xl font-medium text-white mb-4">
                        Ready to Organize Your Finances?
                    </h2>
                    <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                        Contact us today for a free consultation and let The Helpful Hive take the sting out of your business finances.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/about"
                            className="px-8 py-3 bg-honey-500 text-white font-medium rounded-full hover:bg-honey-600 transition-all"
                        >
                            Schedule Free Consultation
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
                    Servicing St. Louis, St. Charles, Lincoln, and Warren County Missouri. Remote services also available.
                </p>
            </section>
        </main>
    );
}
