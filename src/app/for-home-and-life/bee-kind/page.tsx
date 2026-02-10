import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "Bee Kind | The Helpful Hive",
    description: "Sweetening the day for your pets and plants while you're away from the hive.",
};

export default function BeeKindPage() {
    const services = [
        { name: "Dog Walking", description: "15 or 30 minute walks to keep tails wagging", icon: "🐕" },
        { name: "Potty Breaks & Let-Outs", description: "Quick relief visits during long days", icon: "🚪" },
        { name: "Feeding & Water Refresh", description: "Meals and fresh water on schedule", icon: "🥣" },
        { name: "Cat Litter Refresh", description: "Clean and comfortable for your feline friends", icon: "🐱" },
        { name: "Vacation Home Check-Ins", description: "Peace of mind while you're away", icon: "🏠" },
        { name: "Plant Watering & Bird Feeding", description: "Care for all your living things", icon: "🌿" },
    ];

    return (
        <div className="min-h-screen bg-[#FFF8E7]">
            {/* Hero Section - Split Layout */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#98B4AC]/15 via-[#FFF8E7] to-[#98B4AC]/10" />

                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-bk" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#98B4AC" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-bk)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="inline-block px-4 py-2 bg-[#98B4AC]/25 rounded-full mb-6 backdrop-blur-sm">
                                <span className="text-[#3C3C3C] font-[family-name:var(--font-montserrat)] text-sm font-medium">
                                    Pet Care & Home Visits
                                </span>
                            </div>

                            <h1 className="font-[family-name:var(--font-lora)] text-5xl md:text-7xl font-bold text-[#3C3C3C] mb-4">
                                Bee Kind
                            </h1>

                            <p className="font-[family-name:var(--font-allura)] text-3xl md:text-4xl text-[#98B4AC] mb-6">
                                Sweetening the day for your pets and plants.
                            </p>

                            <p className="font-[family-name:var(--font-montserrat)] text-lg text-[#525252] mb-8 leading-relaxed max-w-lg">
                                Your pets will thank you — paws down. We provide loving care for your furry friends and green companions while you&apos;re away from the hive.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Book a Visit
                            </Link>
                        </div>

                        {/* Right - Logo + Bee Cluster */}
                        <div className="order-1 md:order-2 flex justify-center">
                            <div className="relative w-72 h-72 md:w-96 md:h-96">
                                <div className="absolute inset-4 bg-[#98B4AC]/15 rounded-full blur-2xl" />

                                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mt-8 md:mt-12">
                                    <div className="w-full h-full rounded-full border-4 border-[#98B4AC]/50 shadow-2xl overflow-hidden bg-white animate-float">
                                        <Image src="/logo-circular.jpg" alt="The Helpful Hive" fill className="object-cover" priority />
                                    </div>
                                </div>

                                {/* Orbiting Bees */}
                                <div className="absolute -top-2 left-1/4 w-20 h-20 md:w-24 md:h-24 animate-float" style={{ animationDelay: '0s' }}>
                                    <Image src="/bee-1-petfood.png" alt="Pet Food Bee" fill className="object-contain drop-shadow-lg" />
                                </div>
                                <div className="absolute top-1/3 -right-4 md:-right-8 w-[72px] h-[72px] md:w-[88px] md:h-[88px] animate-float" style={{ animationDelay: '1s' }}>
                                    <Image src="/bee-3-wateringcan.png" alt="Watering Can Bee" fill className="object-contain drop-shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tagline Banner */}
            <section className="py-8 px-4 bg-[#98B4AC]/10 border-y border-[#98B4AC]/20">
                <p className="font-[family-name:var(--font-lora)] text-xl md:text-2xl text-[#3C3C3C] text-center font-medium italic max-w-3xl mx-auto">
                    &ldquo;Sweetening the day for your pets and plants while you&apos;re away from the <span className="text-[#98B4AC]">hive</span>&rdquo;
                </p>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-3">
                            Our Pet & Plant Care Services
                        </h2>
                        <p className="font-[family-name:var(--font-montserrat)] text-[#525252]">
                            Loving care for every member of your household
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-6 border border-[#98B4AC]/20 hover:border-[#98B4AC] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                        <pattern id="honeycomb-cta-bk" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#98B4AC" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-cta-bk)" />
                    </svg>
                </div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to give your pets the <span className="text-[#98B4AC]">kindness</span> they deserve?
                    </h2>
                    <p className="font-[family-name:var(--font-montserrat)] text-white/70 mb-8 text-lg">
                        Book a visit and let us shower your furry friends with love.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Book a Visit
                        </Link>
                        <a
                            href="tel:+13145267240"
                            className="inline-block px-8 py-4 bg-transparent border-2 border-white/30 text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-white/10 transition-all"
                        >
                            Call (314) 526-7240
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
