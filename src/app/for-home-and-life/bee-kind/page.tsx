import Image from 'next/image';
import Link from 'next/link';
import FlyingBees from '@/components/FlyingBees';

export const metadata = {
    title: "Bee Kind | The Helpful Hive",
    description: "Sweetening the day for your pets and plants while you're away from the hive.",
};

export default function BeeKindPage() {
    const visits = [
        {
            name: 'The Home Hive Check',
            price: '$25',
            description: 'Ideal for travelers. Mail & package retrieval, trash bin in/out, plant watering, light rotation, and a perimeter security walk-through.',
            icon: '🏠',
        },
        {
            name: 'The Paws and Claws Visit',
            price: '$30',
            description: 'Ideal for busy pet parents. Fresh food and water, potty break or litter box scoop, and 15 minutes of dedicated playtime or a short neighborhood walk.',
            icon: '🐾',
        },
        {
            name: 'The Hive Hybrid',
            price: '$45',
            description: 'The perfect all-in-one solution for the busy traveler. This visit combines a full Home Hive Check (mail, trash, plants, and security) with a Paws and Claws session (feeding, waste cleanup, and play).',
            icon: '🐝',
            popular: true,
        },
        {
            name: 'The Golden Companion Visit',
            price: '$40',
            description: 'Ideal for local families. A friendly face-to-face wellness check. Includes light meal prep or snack, medication reminders, and a companion chat to brighten their day.',
            icon: '💛',
        },
    ];

    return (
        <div className="min-h-screen bg-[#FFF8E7]">
            {/* Hero Section */}
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
                                    The &ldquo;Bee Kind&rdquo; Service Menu
                                </span>
                            </div>
                            <h1 className="font-[family-name:var(--font-lora)] text-5xl md:text-7xl font-bold text-[#3C3C3C] mb-4">
                                Bee Kind
                            </h1>
                            <p className="font-[family-name:var(--font-allura)] text-3xl md:text-4xl text-[#98B4AC] mb-6">
                                Sweetening the day for your pets and plants.
                            </p>
                            <p className="font-[family-name:var(--font-montserrat)] text-lg text-[#525252] mb-8 leading-relaxed max-w-lg">
                                Sweetening the day for your pets and plants while you&apos;re away from the hive. All visits are approximately 45 minutes and include a digital &ldquo;Hive Update&rdquo; (text/photo) sent immediately after the visit.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Book a Visit
                            </Link>
                        </div>

                        <div className="order-1 md:order-2 flex justify-center">
                            <FlyingBees accentColor="#98B4AC" bees={[
                                { src: '/bee-1-petfood.png', alt: 'Pet Food Bee', flyClass: 'animate-fly-1', size: 'w-12 h-12 md:w-16 md:h-16' },
                                { src: '/bee-3-wateringcan.png', alt: 'Watering Can Bee', flyClass: 'animate-fly-7', size: 'w-12 h-12 md:w-16 md:h-16' },
                            ]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Visit Info Banner */}
            <section className="py-5 px-4 bg-[#98B4AC]/15 border-y border-[#98B4AC]/20">
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#3C3C3C] text-center font-medium max-w-3xl mx-auto">
                    🐝 All visits are approximately <strong>45 minutes</strong> and include a digital &ldquo;Hive Update&rdquo; (text/photo) sent immediately after the visit.
                </p>
            </section>

            {/* Visit Packages */}
            <section className="py-14 md:py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-2">
                            Visit Packages
                        </h2>
                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">
                            Choose the visit that fits your needs
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {visits.map((visit, i) => (
                            <div
                                key={i}
                                className={`group bg-white rounded-2xl overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative ${visit.popular ? 'border-[#98B4AC]' : 'border-[#98B4AC]/20 hover:border-[#98B4AC]'}`}
                            >
                                {visit.popular && (
                                    <div className="absolute top-0 right-0 bg-[#98B4AC] text-white text-xs font-[family-name:var(--font-montserrat)] font-bold px-3 py-1 rounded-bl-xl">
                                        MOST POPULAR
                                    </div>
                                )}

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-3xl">{visit.icon}</span>
                                        <span className="bg-[#98B4AC] text-white text-lg px-4 py-1.5 rounded-full font-[family-name:var(--font-montserrat)] font-bold">
                                            {visit.price}
                                        </span>
                                    </div>
                                    <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-[#3C3C3C] mb-2">
                                        {visit.name}
                                    </h3>
                                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] leading-relaxed">
                                        {visit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Overnight Section */}
            <section className="py-14 md:py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-3xl border-2 border-[#98B4AC] overflow-hidden bg-[#FFF8E7] relative">
                        <div className="bg-[#98B4AC]/15 px-8 py-6 border-b border-[#98B4AC]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image src="/bee-1-petfood.png" alt="Overnight Bee" fill className="object-contain" />
                                </div>
                                <div>
                                    <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C]">
                                        Overnight Home and Pet Sitting
                                    </h2>
                                </div>
                            </div>
                            <div className="bg-[#98B4AC] text-white px-5 py-2.5 rounded-full font-[family-name:var(--font-montserrat)] font-bold text-lg self-start sm:self-auto">
                                $125
                            </div>
                        </div>

                        <div className="p-8">
                            <p className="font-[family-name:var(--font-montserrat)] text-[#525252] leading-relaxed mb-4">
                                Maximum peace of mind with a consistent presence. This premium service includes a <strong>10-hour overnight stay</strong> in your home. We maintain your pet&apos;s familiar bedtime and morning routines while providing the &ldquo;lived-in&rdquo; look that keeps your property secure.
                            </p>
                            <p className="font-[family-name:var(--font-montserrat)] text-[#525252] leading-relaxed">
                                Includes evening/morning feedings and a complimentary Home Hive Check.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bee Done Add-on Callout */}
            <section className="py-6 px-6 bg-[#BFC8A1]/15 border-y border-[#BFC8A1]/20">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#3C3C3C]">
                        <strong>Make it a <span className="italic">Bee Done</span> Day!</strong> Already have a check-in scheduled? Add any of our professional chore services (from laundry to light tidying) to your visit for a flat add-on rate.
                    </p>
                </div>
            </section>

            {/* Pricing Note */}
            <section className="py-6 px-6">
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] text-center italic max-w-3xl mx-auto">
                    Prices listed are estimates. Final pricing depends on the job details and will be confirmed before we start. Extra fees may apply for holidays, rush requests, or add-on tasks.
                </p>
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
                        Ready to give your pets the <span className="text-[#E2C16B]">kindness</span> they deserve?
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
