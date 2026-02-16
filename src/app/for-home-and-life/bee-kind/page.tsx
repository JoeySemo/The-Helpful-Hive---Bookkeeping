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
                            <p className="font-[family-name:var(--font-lora)] italic text-3xl md:text-5xl text-[#98B4AC] mb-8 leading-snug">
                                Tending to your pets and plants so you can Bee Kind to your peace of mind while you're away from the hive.
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


            {/* Services List */}
            <section className="py-14 md:py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-2">
                            Our Services
                        </h2>
                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">
                            Reliable care for your home and pets
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-2xl border-2 border-[#98B4AC]/20 hover:border-[#98B4AC] transition-all hover:shadow-lg text-center">
                            <div className="text-4xl mb-4">🐾</div>
                            <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-[#3C3C3C] mb-3">Pet Care</h3>
                            <p className="text-sm text-[#525252] font-[family-name:var(--font-montserrat)]">
                                Dog walking, potty breaks, and feeding tailored to your pet's routine.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-[#98B4AC]/20 hover:border-[#98B4AC] transition-all hover:shadow-lg text-center">
                            <div className="text-4xl mb-4">🐱</div>
                            <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-[#3C3C3C] mb-3">Litter Refresh</h3>
                            <p className="text-sm text-[#525252] font-[family-name:var(--font-montserrat)]">
                                Regular maintenance and deep cleaning to keep your home fresh.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl border-2 border-[#98B4AC]/20 hover:border-[#98B4AC] transition-all hover:shadow-lg text-center">
                            <div className="text-4xl mb-4">🏡</div>
                            <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-[#3C3C3C] mb-3">Vacation Checks</h3>
                            <p className="text-sm text-[#525252] font-[family-name:var(--font-montserrat)]">
                                Home security checks, mail retrieval, and plant watering while you're away.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visit Info Banner - Moved from top */}
            <section className="py-8 px-4 bg-[#98B4AC]/15 border-y border-[#98B4AC]/20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
                    <div className="relative w-12 h-12 flex-shrink-0">
                        <Image src="/bee-1-petfood.png" alt="Bee Kind Bee" fill className="object-contain" />
                    </div>
                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#3C3C3C] text-center md:text-left font-medium">
                        All visits include a digital &ldquo;Hive Update&rdquo; (text/photo) sent immediately after the visit.
                    </p>
                </div>
            </section >

            {/* Overnight Section */}
            < section className="py-14 md:py-16 px-6 bg-white" >
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
            </section >

            {/* Bee Done Add-on Callout */}


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
                    <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold !text-[#E2C16B] mb-4">
                        Ready to give your pets the kindness they deserve?
                    </h2>
                    <p className="font-[family-name:var(--font-montserrat)] text-white/70 mb-8 text-lg">
                        Book a visit and let us shower your furry friends with love.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-[#E2C16B] text-[#3C3C3C] font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#d4b35f] transition-all hover:shadow-lg hover:-translate-y-0.5"
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
        </div >
    );
}
