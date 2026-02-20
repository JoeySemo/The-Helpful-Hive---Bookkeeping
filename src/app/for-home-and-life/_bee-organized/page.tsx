import Image from 'next/image';
import Link from 'next/link';
import FlyingBees from '@/components/FlyingBees';

export const metadata = {
    title: "Bee Organized | The Helpful Hive",
    description: "From chaotic clutter to a sweet, structured hive. Organization and decluttering services.",
};

export default function BeeOrganizedPage() {
    const services = [
        { name: "Closet & Pantry Organization", description: "Everything in its perfect place", icon: "👗" },
        { name: "Laundry Room & Mudroom Systems", description: "Functional flow for busy families", icon: "🧺" },
        { name: "Home Office Setup", description: "A workspace that works for you", icon: "🖥️" },
        { name: "Storage Bin Labeling", description: "Know exactly where things belong", icon: "🏷️" },
        { name: "Garage or Basement Reset", description: "Reclaim your forgotten spaces", icon: "🏗️" },
        { name: "Digital File Organization", description: "Tame your digital clutter too", icon: "📁" },
    ];

    return (
        <div className="min-h-screen bg-[#FFF8E7]">
            {/* Hero Section - Split Layout */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A2C1D4]/15 via-[#FFF8E7] to-[#A2C1D4]/10" />

                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-bo" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#A2C1D4" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-bo)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="inline-block px-4 py-2 bg-[#A2C1D4]/25 rounded-full mb-6 backdrop-blur-sm">
                                <span className="text-[#3C3C3C] font-[family-name:var(--font-montserrat)] text-sm font-medium">
                                    Organization & Decluttering
                                </span>
                            </div>

                            <h1 className="font-[family-name:var(--font-lora)] text-5xl md:text-7xl font-bold text-[#3C3C3C] mb-4">
                                Bee Organized
                            </h1>

                            <p className="font-[family-name:var(--font-allura)] text-3xl md:text-4xl text-[#A2C1D4] mb-6">
                                From chaotic clutter to a sweet, structured hive.
                            </p>

                            <p className="font-[family-name:var(--font-montserrat)] text-lg text-[#525252] mb-8 leading-relaxed max-w-lg">
                                Find your calm in the chaos. We transform cluttered spaces into organized havens that make daily life easier and more enjoyable.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Get Organized
                            </Link>
                        </div>

                        <div className="order-1 md:order-2 flex justify-center">
                            <FlyingBees accentColor="#A2C1D4" bees={[
                                { src: '/bee-6-bins.png', alt: 'Storage Bins Bee', flyClass: 'animate-fly-4', size: 'w-10 h-10 md:w-14 md:h-14' },
                                { src: '/bee-9-label.png', alt: 'Label Tag Bee', flyClass: 'animate-fly-2', size: 'w-12 h-12 md:w-16 md:h-16' },
                            ]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tagline Banner */}
            <section className="py-8 px-4 bg-[#A2C1D4]/10 border-y border-[#A2C1D4]/20">
                <p className="font-[family-name:var(--font-lora)] text-xl md:text-2xl text-[#3C3C3C] text-center font-medium italic max-w-3xl mx-auto">
                    &ldquo;From chaotic clutter to a sweet, <span className="text-[#A2C1D4]">structured hive</span>&rdquo;
                </p>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-3">
                            Our Organization Services
                        </h2>
                        <p className="font-[family-name:var(--font-montserrat)] text-[#525252]">
                            Transforming spaces into systems that simplify your life
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-6 border border-[#A2C1D4]/20 hover:border-[#A2C1D4] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="font-[family-name:var(--font-lora)] text-lg font-semibold text-[#3C3C3C] mb-2">
                                    {service.name}
                                </h3>
                                <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-[#3C3C3C] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-cta-bo" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#A2C1D4" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-cta-bo)" />
                    </svg>
                </div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to transform your <span className="text-[#E2C16B]">spaces</span>?
                    </h2>
                    <p className="font-[family-name:var(--font-montserrat)] text-white/70 mb-8 text-lg">
                        Let us bring order to your home and peace to your mind.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Get Organized
                        </Link>
                        <a
                            href="tel:+13145267240"
                            className="inline-block px-8 py-4 bg-transparent border-2 border-white/30 text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-white/10 transition-all"
                        >
                            <span className="block">(314) 526-7240</span>
                            <span className="block text-sm font-normal mt-0.5 opacity-90">Call or Text</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
