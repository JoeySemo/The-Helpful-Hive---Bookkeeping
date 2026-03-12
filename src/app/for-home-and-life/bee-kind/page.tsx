import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "Bee Kind | The Helpful Hive",
    description: "Tending to your pets and plants so you can Bee Kind to your peace of mind while you're away from the hive.",
};

export default function BeeKindPage() {
    return (
        <div className="min-h-screen bg-cream-white">
            {/* Hero Section - Text Only (mirrors Bee Done) */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-seafoam-teal/15 via-cream-white to-seafoam-teal/10" />
                <div className="absolute inset-0 opacity-[0.0625] pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-bk" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#98B4AC" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-bk)" />
                    </svg>
                </div>

                <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 lg:py-20 relative z-10 text-center">
                    <h1 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-charcoal-gray mb-6">
                        &ldquo;Bee Kind&rdquo; Service Menu
                    </h1>

                    <p className="font-[family-name:var(--font-lora)] italic text-xl md:text-2xl text-seafoam-teal-dark mb-6 leading-relaxed">
                        Explore our &ldquo;Bee Kind&rdquo; services below.
                    </p>

                    <div className="font-[family-name:var(--font-montserrat)] text-neutral-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                        <p className="mb-4">
                            Every hive is different. While we offer a structured menu, we specialize in customizing our services to fit your unique needs.
                        </p>
                        <p>
                            If you already know exactly what you need to get your hive in order, <strong>Book a Service</strong> now. Not sure where to start? <strong>Schedule a 15-minute Buzz Call</strong> so I can learn more about your needs, and together we&apos;ll build a custom package that suits you perfectly.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[#3C3C3C] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#2a2a2a] transition-all hover:shadow-lg hover:-translate-y-1 text-center"
                        >
                            Book a Service
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-warm-honey text-charcoal-gray font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#d4b35f] transition-all hover:shadow-lg hover:-translate-y-1 text-center"
                        >
                            Schedule a 15-minute Buzz Call
                        </Link>
                    </div>
                </div>
            </section>



            {/* === The Bee Kind Service Menu === */}
            <section className="py-14 md:py-20 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* === Visit Services === */}
                    <div className="mb-20">
                        <div className="bg-white rounded-3xl border-2 border-seafoam-teal/30 overflow-hidden shadow-sm">
                            <div className="bg-seafoam-teal/15 px-8 py-6 border-b border-seafoam-teal/20 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                                        <pattern id="honeycomb-visits" width="10" height="10" patternUnits="userSpaceOnUse">
                                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#98B4AC" strokeWidth="0.5" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill="url(#honeycomb-visits)" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="relative w-24 h-24 flex-shrink-0">
                                        <Image src="/bee-1-petfood.png" alt="Pet Care Bee" fill className="object-contain" />
                                    </div>
                                    <div>
                                        <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C]">
                                            Visit Services
                                        </h2>
                                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">Reliable care for your home and pets while you&apos;re away.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        {
                                            name: 'The Home Hive Check',
                                            price: '$25/visit',
                                            desc: 'Ideal for travelers. Approximately 30 minute home visit. Mail & package retrieval, trash bin in/out, plant watering, light rotation, and a perimeter security walk-through.',
                                            icon: '/bee_pet_care.png',
                                        },
                                        {
                                            name: 'The Paws and Claws Visit',
                                            price: '$30/visit',
                                            desc: 'Ideal for busy pet parents. Approximately 45 minute home visit. Fresh food and water, potty break and/or litter box scoop, and 15 minutes of dedicated playtime or short neighborhood walk.',
                                            icon: '/bee_litter_refresh.png',
                                        },
                                        {
                                            name: 'The Hive Hybrid',
                                            price: '$45/visit',
                                            desc: 'The perfect all-in-one solution for the busy traveler. Combines a full Home Hive Check (mail, trash, plants, and security) with a Paws and Claws session (feeding, waste cleanup, and play).',
                                            icon: '/bee-1-petfood.png',
                                            popular: true,
                                        },
                                    ].map((service, i) => (
                                        <div key={i} className={`group rounded-xl p-5 border-2 ${service.popular ? 'border-seafoam-teal shadow-md' : 'border-seafoam-teal/15'} hover:border-seafoam-teal hover:shadow-md transition-all bg-[#FFF8E7] relative`}>
                                            {service.popular && (
                                                <div className="absolute top-3 right-3 bg-[#506A62] text-white text-xs font-bold px-2 py-1 rounded">POPULAR</div>
                                            )}
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative w-16 h-16 flex-shrink-0">
                                                        <Image src={service.icon} alt={`${service.name} icon`} fill className="object-contain" />
                                                    </div>
                                                    <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C]">{service.name}</h3>
                                                </div>
                                                <span className="bg-[#506A62] text-white text-sm px-3 py-1 rounded-full font-[family-name:var(--font-montserrat)] font-bold">{service.price}</span>
                                            </div>
                                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">
                                                {service.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Visit info note */}
                                <div className="mt-6 bg-seafoam-teal/10 rounded-xl p-4 flex items-center gap-3">
                                    <span className="text-xl">📱</span>
                                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-charcoal-gray font-medium">
                                        All visits include a digital &ldquo;Hive Update&rdquo; (text/photo) sent immediately after the visit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* === Overnight Home and Pet Sitting === */}
                    <div className="mb-20">
                        <div className="bg-white rounded-3xl border-2 border-[#3C3C3C] overflow-hidden shadow-lg relative">
                            <div className="absolute top-0 right-0 bg-[#3C3C3C] text-warm-honey px-4 py-1 rounded-bl-xl text-sm font-bold">PREMIUM</div>
                            <div className="p-8 flex flex-col">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-20 h-20 flex-shrink-0">
                                            <Image src="/bee-1-petfood.png" alt="Overnight Bee" fill className="object-contain" />
                                        </div>
                                        <div>
                                            <h2 className="font-[family-name:var(--font-lora)] text-3xl font-bold text-charcoal-gray">
                                                Overnight Home &amp; Pet Sitting
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="text-2xl font-bold text-terra-cotta-dark">$125 <span className="text-sm font-normal text-gray-500">/ night</span></div>
                                </div>

                                <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 leading-relaxed mb-4">
                                    Maximum peace of mind with a consistent presence. This premium service includes a <strong>10-hour overnight stay</strong> in your home. Amanda maintains your pet&apos;s familiar bedtime and morning routines while providing the &ldquo;lived-in&rdquo; look that keeps your property secure.
                                </p>
                                <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 leading-relaxed">
                                    Includes evening/morning feedings and a complimentary Home Hive Check.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* === Hive Add-Ons === */}
                    <div className="mb-20">
                        <div className="bg-white rounded-3xl border-2 border-seafoam-teal/30 overflow-hidden shadow-sm">
                            <div className="bg-seafoam-teal/15 px-8 py-6 border-b border-seafoam-teal/20 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                                        <pattern id="honeycomb-addons" width="10" height="10" patternUnits="userSpaceOnUse">
                                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#98B4AC" strokeWidth="0.5" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill="url(#honeycomb-addons)" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="relative w-24 h-24 flex-shrink-0">
                                        <Image src="/bee-3-wateringcan.png" alt="Add-On Bee" fill className="object-contain" />
                                    </div>
                                    <div>
                                        <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C]">
                                            Hive Add-Ons
                                        </h2>
                                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">Enhance any visit with additional services.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="group rounded-xl p-5 border-2 border-seafoam-teal/15 hover:border-seafoam-teal hover:shadow-md transition-all bg-[#FFF8E7]">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-2xl">🐝</span>
                                            <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C]">Make it a &ldquo;Bee Done&rdquo; Day!</h3>
                                        </div>
                                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">
                                            Already have a check-in scheduled? Add any professional chore services (from laundry to light tidying) to your visit for a flat add-on rate.
                                        </p>
                                    </div>
                                    <div className="group rounded-xl p-5 border-2 border-seafoam-teal/15 hover:border-seafoam-teal hover:shadow-md transition-all bg-[#FFF8E7]">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">⏱️</span>
                                                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C]">The Worker Bee Rate</h3>
                                            </div>
                                            <span className="bg-[#506A62] text-white text-sm px-3 py-1 rounded-full font-[family-name:var(--font-montserrat)] font-bold">$40/hr</span>
                                        </div>
                                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">
                                            Reserved for deep cleaning litter boxes, extensive plant care, or more complex pet needs that exceed the standard 45-minute visit.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Note */}
            <section className="py-6 px-6 bg-seafoam-teal/10 border-y border-seafoam-teal/20">
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] text-center italic max-w-3xl mx-auto">
                    Prices listed are estimates. Final pricing depends on the job details and will be confirmed before we start. Extra fees may apply for holidays, rush requests, or add-on tasks.
                </p>
            </section>

            {/* Pre-Footer CTA Section */}
            <section className="py-14 px-6 bg-white">
                <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-[#3C3C3C] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#2a2a2a] transition-all hover:shadow-lg hover:-translate-y-1 text-center"
                    >
                        Book a Service
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-warm-honey text-charcoal-gray font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#d4b35f] transition-all hover:shadow-lg hover:-translate-y-1 text-center"
                    >
                        Schedule a 15-minute Buzz Call
                    </Link>
                    <Link
                        href="/for-home-and-life/bee-done"
                        className="px-8 py-4 bg-terra-cotta text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-terra-cotta-dark transition-all hover:shadow-lg hover:-translate-y-1 text-center"
                    >
                        View the &ldquo;Bee Done&rdquo; Service Menu
                    </Link>
                </div>
            </section>
        </div>
    );
}
