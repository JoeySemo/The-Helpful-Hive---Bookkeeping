import Image from 'next/image';
import Link from 'next/link';
import FlyingBees from '@/components/FlyingBees';

export const metadata = {
    title: "Bee Done | The Helpful Hive",
    description: "Taking the sting out of your 'honey-do' list. Hourly cleaning, quick errands, and a-la-carte chore services.",
};

export default function BeeDonePage() {
    return (
        <div className="min-h-screen bg-[#FFF8E7]">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#BFC8A1]/15 via-[#FFF8E7] to-[#BFC8A1]/10" />
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-bd" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#BFC8A1" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-bd)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="inline-block px-4 py-2 bg-[#BFC8A1]/25 rounded-full mb-6 backdrop-blur-sm">
                                <span className="text-[#3C3C3C] font-[family-name:var(--font-montserrat)] text-sm font-medium">
                                    The &ldquo;Bee Done&rdquo; Service Menu
                                </span>
                            </div>
                            <h1 className="font-[family-name:var(--font-lora)] text-5xl md:text-7xl font-bold text-[#3C3C3C] mb-4">
                                Bee Done
                            </h1>
                            <p className="font-[family-name:var(--font-allura)] text-3xl md:text-4xl text-[#BFC8A1] mb-6">
                                Taking the sting out of your &apos;honey-do&apos; list.
                            </p>
                            <p className="font-[family-name:var(--font-montserrat)] text-lg text-[#525252] mb-8 leading-relaxed max-w-lg">
                                Taking the sting out of home chores and errands so you can <strong>Bee Done</strong> with your to-do list.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Book a Service
                            </Link>
                        </div>

                        <div className="order-1 md:order-2 flex justify-center">
                            <FlyingBees accentColor="#BFC8A1" bees={[
                                { src: '/bee-2-broom.png', alt: 'Broom Bee', flyClass: 'animate-fly-1', size: 'w-12 h-12 md:w-16 md:h-16' },
                                { src: '/bee-4-spraybottle.png', alt: 'Spray Bottle Bee', flyClass: 'animate-fly-5', size: 'w-11 h-11 md:w-15 md:h-15' },
                                { src: '/bee-5-clipboard.png', alt: 'Clipboard Bee', flyClass: 'animate-fly-9', size: 'w-12 h-12 md:w-16 md:h-16' },
                            ]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tagline Banner */}
            <section className="py-6 px-4 bg-[#BFC8A1]/10 border-y border-[#BFC8A1]/20">
                <p className="font-[family-name:var(--font-lora)] text-lg md:text-xl text-[#3C3C3C] text-center font-medium italic max-w-3xl mx-auto">
                    &ldquo;You relax — we&apos;ll handle the <span className="text-[#BFC8A1]">honey-do&apos;s</span>&rdquo;
                </p>
            </section>

            {/* === New Bundles Section === */}
            <section className="py-14 md:py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* The Monday Reset */}
                        <div className="bg-white rounded-3xl border-2 border-[#3C3C3C] overflow-hidden shadow-lg relative">
                            <div className="absolute top-0 right-0 bg-[#3C3C3C] text-[#E2C16B] px-4 py-1 rounded-bl-xl text-sm font-bold">POPULAR</div>
                            <div className="p-8">
                                <h2 className="font-[family-name:var(--font-lora)] text-3xl font-bold text-[#3C3C3C] mb-2">
                                    The Monday Reset
                                </h2>
                                <div className="text-2xl font-bold text-[#C17A5B] mb-4">$55 <span className="text-sm font-normal text-gray-400 line-through">($65 Value)</span></div>
                                <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] mb-6">
                                    Don't let a "weekend hangover" of chores ruin your Monday focus. While you're at work, I'll erase the evidence of your busy weekend.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start gap-3 text-sm text-[#525252]">
                                        <span className="text-[#E2C16B] text-xl">✓</span> 2 Laundry Assists
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-[#525252]">
                                        <span className="text-[#E2C16B] text-xl">✓</span> 1 Dish Reset
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-[#525252]">
                                        <span className="text-[#E2C16B] text-xl">✓</span> 1 Fresh Fridge & Pantry
                                    </li>
                                </ul>
                                <Link href="/contact" className="block w-full text-center py-3 bg-[#3C3C3C] text-white font-bold rounded-xl hover:bg-[#525252] transition-all">
                                    Book Bundle
                                </Link>
                            </div>
                        </div>

                        {/* The Whole Hive Reset */}
                        <div className="bg-white rounded-3xl border-2 border-[#3C3C3C] overflow-hidden shadow-lg relative">
                            <div className="absolute top-0 right-0 bg-[#3C3C3C] text-[#E2C16B] px-4 py-1 rounded-bl-xl text-sm font-bold">BEST VALUE</div>
                            <div className="p-8">
                                <h2 className="font-[family-name:var(--font-lora)] text-3xl font-bold text-[#3C3C3C] mb-2">
                                    The Whole Hive Reset
                                </h2>
                                <div className="text-2xl font-bold text-[#C17A5B] mb-4">$125 <span className="text-sm font-normal text-gray-400 line-through">($140 Value)</span></div>
                                <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] mb-6">
                                    The ultimate "Main Floor" refresh. I focus on the rooms you use the most so the heart of your home stays clean and inviting.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-start gap-3 text-sm text-[#525252]">
                                        <span className="text-[#E2C16B] text-xl">✓</span> 1 Kitchen Shine
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-[#525252]">
                                        <span className="text-[#E2C16B] text-xl">✓</span> 1 Dish Reset
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-[#525252]">
                                        <span className="text-[#E2C16B] text-xl">✓</span> 1 Fridge & Pantry Refresh
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-[#525252]">
                                        <span className="text-[#E2C16B] text-xl">✓</span> 1 Guest Bath Shine
                                    </li>
                                    <li className="flex items-start gap-3 text-sm text-[#525252]">
                                        <span className="text-[#E2C16B] text-xl">✓</span> 1 Clean Path (Floors)
                                    </li>
                                </ul>
                                <Link href="/contact" className="block w-full text-center py-3 bg-[#3C3C3C] text-white font-bold rounded-xl hover:bg-[#525252] transition-all">
                                    Book Bundle
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* === The Busy Bee Dash === */}
            <section className="py-14 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-3xl border-2 border-[#BFC8A1]/30 overflow-hidden bg-[#FFF8E7]">
                        <div className="bg-[#BFC8A1]/15 px-8 py-6 border-b border-[#BFC8A1]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image src="/bee-5-clipboard.png" alt="Errand Bee" fill className="object-contain" />
                                </div>
                                <div>
                                    <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C]">
                                        The Busy Bee Dash
                                    </h2>
                                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">Quick Errands</p>
                                </div>
                            </div>
                            <div className="bg-[#BFC8A1] text-white px-5 py-2.5 rounded-full font-[family-name:var(--font-montserrat)] font-bold text-lg self-start sm:self-auto">
                                $15 <span className="text-sm font-normal">flat rate</span>
                            </div>
                        </div>

                        <div className="p-8">
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] mb-6">
                                Fresh and local, delivered to your door.
                            </p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { name: 'The Return Run', desc: 'Dropping off pre-labeled Amazon, UPS, or FedEx packages.' },
                                    { name: 'Grocery Pickup', desc: 'Curbside pickup of your prepaid order and delivery to your counter.' },
                                    { name: 'Dry Cleaning', desc: 'Dropping off or picking up your professional wear.' },
                                    { name: 'The Pharmacy Trip', desc: 'Picking up pre-paid prescriptions.' },
                                    { name: 'Post Office', desc: 'Dropping off mail or shipping prepared packages.' },
                                ].map((errand, i) => (
                                    <div key={i} className="bg-white rounded-xl p-4 border border-[#BFC8A1]/20 hover:border-[#BFC8A1] hover:shadow-md transition-all">
                                        <div className="w-8 h-8 mb-2 relative">
                                            <Image src="/bee-12-paper-airplane.png" alt="Bee Icon" fill className="object-contain opacity-60" />
                                        </div>
                                        <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C] mb-1">{errand.name}</h3>
                                        <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#525252]">{errand.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* === A-La-Carte Hive === */}
            <section className="py-14 md:py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl border-2 border-[#BFC8A1]/30 overflow-hidden shadow-sm">
                        <div className="bg-[#BFC8A1]/15 px-8 py-6 border-b border-[#BFC8A1]/20">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image src="/bee-4-spraybottle.png" alt="Chore Bee" fill className="object-contain" />
                                </div>
                                <div>
                                    <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C]">
                                        The A-La-Carte Hive
                                    </h2>
                                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">Quick, flat-rate solutions for your most common household needs.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { name: 'The Laundry Cycle (Complete)', price: '$15/load', desc: 'Wash, dry, and fold/hang.' },
                                    { name: 'The Laundry Assist', price: '$10/load', desc: 'Client starts wash, I switch & fold.' },
                                    { name: 'The Dish Reset', price: '$10/load', desc: 'Unload clean, load dirty, and start cycle.' },
                                    { name: 'The Fresh Fridge & Pantry', price: '$35', desc: 'Toss expired items and wipe shelves/drawers.' },
                                    { name: 'The Surface Shine', price: '$35', desc: 'Counters, mirrors, cabinet fronts, exterior appliances, and floors.' },
                                    { name: 'The Clean Path', price: '$20', desc: 'Vacuum and mop of main-level traffic lanes and living area.' },
                                ].map((addon, i) => (
                                    <div key={i} className="group rounded-xl p-5 border-2 border-[#BFC8A1]/15 hover:border-[#BFC8A1] hover:shadow-md transition-all bg-[#FFF8E7]">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C]">{addon.name}</h3>
                                            <span className="bg-[#BFC8A1] text-white text-sm px-3 py-1 rounded-full font-[family-name:var(--font-montserrat)] font-bold">{addon.price}</span>
                                        </div>
                                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">{addon.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* === The Worker Bee (Hourly) === */}
            <section className="py-14 px-6 bg-[#BFC8A1]/5">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-3xl border border-[#BFC8A1]/20 shadow-sm mb-8">
                        <div className="flex-1">
                            <h2 className="font-[family-name:var(--font-lora)] text-3xl font-bold text-[#3C3C3C] mb-2">
                                The Worker Bee
                            </h2>
                            <p className="font-[family-name:var(--font-montserrat)] text-[#525252] mb-4">
                                The ultimate solution for your home to-do list. For all those "get to it eventually" tasks and errands you don't have time for or you're trying to avoid.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-[#525252]">✓ Baseboard cleaning & interior windows</li>
                                <li className="flex items-center gap-2 text-sm text-[#525252]">✓ Dusting & organizational projects</li>
                                <li className="flex items-center gap-2 text-sm text-[#525252]">✓ Appointment scheduling & litter box refresh</li>
                                <li className="flex items-center gap-2 text-sm text-[#525252]">✓ Plant watering & light bulb changing</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 bg-[#FFF8E7] rounded-2xl min-w-[200px] border border-[#BFC8A1]/30">
                            <span className="text-3xl font-bold text-[#3C3C3C]">$40</span>
                            <span className="text-sm text-[#525252] uppercase tracking-wide">Per Hour</span>
                            <span className="text-xs text-[#525252] mt-2 italic">1-hour minimum</span>
                        </div>
                    </div>


                    {/* Additional Services Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* The Grocery Bee */}
                        <div className="bg-white p-8 rounded-3xl border border-[#BFC8A1]/20 shadow-sm flex flex-col">
                            <h2 className="font-[family-name:var(--font-lora)] text-2xl font-bold text-[#3C3C3C] mb-2">
                                The Grocery Bee
                            </h2>
                            <div className="text-xl font-bold text-[#C17A5B] mb-2">$35 <span className="text-sm font-normal text-gray-500">/ hour</span></div>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] mb-4 flex-grow">
                                Take back your weekend and let me handle the aisles. I carefully select the freshest produce and check expiration dates.
                            </p>
                            <div className="text-xs text-[#525252] bg-[#BFC8A1]/10 p-3 rounded-lg">
                                <strong>Produce-Plus Upgrade:</strong> Hand-selection for existing pickup orders (+$15 Flat Fee).
                            </div>
                        </div>

                        {/* The Waiting Bee */}
                        <div className="bg-white p-8 rounded-3xl border border-[#BFC8A1]/20 shadow-sm flex flex-col">
                            <h2 className="font-[family-name:var(--font-lora)] text-2xl font-bold text-[#3C3C3C] mb-2">
                                The Waiting Bee
                            </h2>
                            <div className="text-xl font-bold text-[#C17A5B] mb-2">$30 <span className="text-sm font-normal text-gray-500">/ hour</span></div>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] mb-4 flex-grow">
                                Stop planning your life around a four-hour "arrival window." I'll stay on-site for the cable tech, furniture delivery, or repair person.
                            </p>
                            <div className="text-xs text-[#525252] bg-[#BFC8A1]/10 p-3 rounded-lg">
                                <strong>Efficiency Upgrade:</strong> Have the "Bee" tackle your honey-do list while they wait ($40/hr).
                            </div>
                        </div>

                        {/* The Outdoor Hive */}
                        <div className="bg-white p-8 rounded-3xl border border-[#BFC8A1]/20 shadow-sm flex flex-col">
                            <h2 className="font-[family-name:var(--font-lora)] text-2xl font-bold text-[#3C3C3C] mb-2">
                                The Outdoor Hive
                            </h2>
                            <div className="text-xl font-bold text-[#3C3C3C] mb-2">Starts @ $45</div>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] mb-4 flex-grow">
                                Keeping your yard and garden as welcoming as your home. Weeding, planting, watering, and light yard maintenance.
                            </p>
                            <Link href="/contact" className="mt-auto block w-full text-center py-2 border border-[#BFC8A1] text-[#BFC8A1] font-bold rounded-lg hover:bg-[#BFC8A1] hover:text-white transition-all text-sm">
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Note */}
            <section className="py-6 px-6 bg-[#BFC8A1]/10 border-y border-[#BFC8A1]/20">
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] text-center italic max-w-3xl mx-auto">
                    Prices listed are estimates. Final pricing depends on the job details and will be confirmed before we start. Extra fees may apply for holidays, rush requests, or add-on tasks.
                </p>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-[#3C3C3C] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-cta-bd" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-cta-bd)" />
                    </svg>
                </div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to <span className="text-[#E2C16B]">Bee Done</span> with your to-do list?
                    </h2>
                    <p className="font-[family-name:var(--font-montserrat)] text-white/70 mb-8 text-lg">
                        Let us take care of the cleaning and errands so you can enjoy your home.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Book a Service
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
