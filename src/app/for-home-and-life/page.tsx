'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import FlyingBees from '@/components/FlyingBees';

export default function HomeAndLifePage() {
    const services = [
        {
            title: 'Bee Done',
            tagline: 'Taking the sting out of home chores and errands so you can Bee Done with your to-do list.',
            description: 'From deep cleaning to daily tidying, we take care of the chores so you can focus on what matters most.',
            icon: '🧹',
            color: '#BFC8A1',
            bee: '/bee-2-broom.png',
            items: ['Home Resets', 'Laundry & Dishes', 'Errand Dashes', 'Custom Hourly Tasks'],
            href: '/for-home-and-life/bee-done',
            active: true
        },
        {
            title: 'Bee Kind',
            tagline: 'Tending to your pets and plants so you can Bee Kind to your peace of mind while you\'re away from the hive.',
            description: 'Loving care for your furry friends and green companions while you\'re away from the hive.',
            icon: '🐾',
            color: '#98B4AC',
            bee: '/bee-1-petfood.png',
            items: ['Pet Care', 'Plant Care', 'Home Watch', 'Vacation Checks'],
            href: '/for-home-and-life/bee-kind',
            active: true
        },
        {
            title: 'Bee Organized',
            tagline: 'Clearing the clutter and creating structure so you can Bee Organized in a home that finally hums.',
            description: 'Detailed organization for pantries, closets, garages, and home offices. (Coming Soon)',
            icon: '📦',
            color: '#A2C1D4',
            bee: '/bee-6-bins.png',
            items: ['Pantry & Closets', 'Garage Reset', 'Home Office', 'System Setup'],
            href: '#',
            active: false
        },
        {
            title: 'Bee Connected',
            tagline: 'Handling the details of your events and outreach so you can Bee Connected to the community.',
            description: 'Support for realtors, events, and community outreach. (Coming Soon)',
            icon: '🤝',
            color: '#7B6B8D',
            bee: '/bee-7-megaphone.png',
            items: ['Realtor Support', 'Event Coordination', 'Admin Help', 'Volunteer Management'],
            href: '#',
            active: false
        },
    ];

    return (
        <main className="min-h-screen bg-[#FFF8E7]">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E2C16B]/10 via-[#FFF8E7] to-[#C17A5B]/5" />
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-hl" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-hl)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h1 className="font-[family-name:var(--font-lora)] text-5xl md:text-7xl font-bold text-[#3C3C3C] mb-4">
                                For Home
                                <br />
                                <span className="text-[#E2C16B]">& Life</span>
                            </h1>
                            <p className="font-[family-name:var(--font-allura)] text-2xl md:text-3xl text-[#C17A5B] mb-4">
                                Sweet solutions for busy homes, pets, and people.
                            </p>
                            <p className="font-[family-name:var(--font-montserrat)] text-lg text-[#525252] mb-8 leading-relaxed max-w-lg">
                                A full hive of services to lighten your load — from cleaning and pet care to errands, organizing, and community support.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                                >
                                    Schedule a Consultation
                                </Link>
                                <a
                                    href="#services"
                                    className="px-8 py-4 bg-transparent border-2 border-[#E2C16B] text-[#3C3C3C] font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#E2C16B] hover:text-[#3C3C3C] transition-all"
                                >
                                    Explore Services
                                </a>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center">
                            <FlyingBees accentColor="#E2C16B" bees={[
                                { src: '/bee-2-broom.png', alt: 'Broom Bee', flyClass: 'animate-fly-1', size: 'w-12 h-12 md:w-16 md:h-16' },
                                { src: '/bee-1-petfood.png', alt: 'Pet Food Bee', flyClass: 'animate-fly-3', size: 'w-12 h-12 md:w-16 md:h-16' },
                                { src: '/bee-6-bins.png', alt: 'Storage Bins Bee', flyClass: 'animate-fly-5', size: 'w-10 h-10 md:w-14 md:h-14' },
                                { src: '/bee-10-briefcase.png', alt: 'Briefcase Bee', flyClass: 'animate-fly-8', size: 'w-10 h-10 md:w-14 md:h-14' },
                                { src: '/bee-7-megaphone.png', alt: 'Megaphone Bee', flyClass: 'animate-fly-11', size: 'w-11 h-11 md:w-15 md:h-15' },
                            ]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Compact Tagline Banner */}
            <section className="py-6 px-4 bg-white/60 border-y border-[#E2C16B]/15">
                <p className="font-[family-name:var(--font-lora)] text-lg md:text-xl text-[#3C3C3C] text-center font-medium italic max-w-2xl mx-auto">
                    &ldquo;You relax — we&apos;ll handle the <span className="text-[#E2C16B]">honey-do&apos;s</span>&rdquo;
                </p>
            </section>

            {/* Services Section */}
            <section id="services" className="py-14 md:py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-2">
                            Our Services
                        </h2>
                        <p className="font-[family-name:var(--font-montserrat)] text-[#525252] text-sm">
                            Every service designed to make your life a little sweeter
                        </p>
                    </div>

                    <div className="space-y-5">
                        {services.map((service, index) => (
                            <Link key={index} href={service.href} className="group block">
                                <div
                                    className="relative bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
                                    style={{ borderColor: `${service.color}30` }}
                                >
                                    {/* Accent stripe */}
                                    <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl" style={{ backgroundColor: service.color }} />

                                    <div className="flex flex-col md:flex-row items-stretch">
                                        {/* Bee Image Accent */}
                                        <div
                                            className="md:w-40 flex items-center justify-center py-6 md:py-0"
                                            style={{ backgroundColor: `${service.color}12` }}
                                        >
                                            <div className="relative w-20 h-20 md:w-24 md:h-24 group-hover:scale-110 transition-transform duration-300">
                                                <Image src={service.bee} alt={service.title} fill className="object-contain drop-shadow-md" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 py-6 px-6 md:px-8">
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="font-[family-name:var(--font-lora)] text-2xl font-bold text-[#3C3C3C]">
                                                    {service.title}
                                                </h3>
                                            </div>
                                            <p className="font-[family-name:var(--font-montserrat)] text-sm font-medium mb-2" style={{ color: service.color }}>
                                                {service.tagline}
                                            </p>
                                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] mb-3 max-w-xl">
                                                {service.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {service.items.map((item, i) => (
                                                    <span
                                                        key={i}
                                                        className="inline-block px-3 py-1 rounded-full text-xs font-[family-name:var(--font-montserrat)] font-medium"
                                                        style={{ backgroundColor: `${service.color}15`, color: '#3C3C3C' }}
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <div className="hidden md:flex items-center pr-8">
                                            <div
                                                className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                                                style={{ backgroundColor: `${service.color}20` }}
                                            >
                                                <ArrowRight size={18} style={{ color: service.color }} className="group-hover:translate-x-0.5 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6 bg-[#3C3C3C] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-cta-hl" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-cta-hl)" />
                    </svg>
                </div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to <span className="text-[#E2C16B]">sweeten</span> your day?
                    </h2>
                    <p className="font-[family-name:var(--font-montserrat)] text-white/70 mb-8 text-lg">
                        Whether it&apos;s your home, your pets, or your to-do list — we&apos;ve got you covered.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Schedule a Consultation
                        </Link>
                        <a
                            href="tel:+13145267240"
                            className="inline-block px-8 py-4 bg-transparent border-2 border-white/30 text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-white/10 transition-all"
                        >
                            <span className="block leading-tight">(314) 526-7240</span>
                            <span className="block text-sm font-normal mt-0.5 opacity-90 leading-tight tracking-normal">Call or Text</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
