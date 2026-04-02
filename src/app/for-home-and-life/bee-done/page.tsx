import Image from 'next/image';

import BuzzCallButton from '@/components/BuzzCallButton';

export const metadata = {
    title: "Bee Done | The Helpful Hive",
    description: "Taking the sting out of your 'honey-do' list. Hourly cleaning, quick errands, and a-la-carte chore services.",
};

export default function BeeDonePage() {
    return (
        <div className="min-h-screen bg-cream-white">
            {/* Hero Section - Text Only */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-soft-sage/15 via-cream-white to-soft-sage/10" />
                <div className="absolute inset-0 opacity-[0.0625] pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-bd" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#BFC8A1" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-bd)" />
                    </svg>
                </div>

                <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 lg:py-20 relative z-10 text-center">
                    <h1 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl md:text-[2.75rem] xl:text-5xl text-charcoal-gray mb-4 whitespace-nowrap">
                        <strong>Bee Done</strong> with your to-do list!
                    </h1>

                    <p className="font-[family-name:var(--font-lora)] italic text-xl md:text-2xl text-soft-sage-dark leading-relaxed">
                        Explore our &ldquo;Bee Done&rdquo; services below.
                    </p>
                </div>
            </section>

            {/* Every hive is unique - moved up from footer */}
            <section className="py-10 px-6 bg-[#3C3C3C] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-prefooter-bd" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-prefooter-bd)" />
                    </svg>
                </div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <p className="font-[family-name:var(--font-montserrat)] text-[#E2C16B]/90 text-base md:text-lg leading-relaxed mb-8">
                        <strong>Every hive is unique.</strong> Because your needs are one-of-a-kind, I specialize in custom-built solutions rather than one-size-fits-all packages. I&apos;d love to hear about your hive so we can create a plan that fits you perfectly.
                    </p>
                    <BuzzCallButton
                        className="inline-block px-8 py-3 bg-terra-cotta text-cream-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-terra-cotta-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Let&apos;s Chat
                    </BuzzCallButton>
                </div>
            </section>

            {/* === The Bee Done Service Menu === */}
            <section className="py-8 md:py-10 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* === 1. The Worker Bee === */}
                    <div className="mb-8">
                        <div className="bg-white rounded-3xl border-2 border-[#BFC8A1]/20 overflow-hidden shadow-sm relative">
                            <div className="absolute top-3 right-3 bg-[#6B7D5E] text-white text-xs font-bold px-3 py-1 rounded z-10">Customizable</div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative w-16 h-16 flex-shrink-0">
                                        <Image src="/bee-new-6.png" alt="Worker Bee" fill className="object-contain" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-charcoal-gray">
                                            The Worker Bee
                                        </h2>
                                        <p className="font-[family-name:var(--font-lora)] italic text-sm text-[#525252]">The ultimate solution for your &ldquo;honey-do&rdquo; list.</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-[family-name:var(--font-lora)] text-xl font-bold text-[#3C3C3C]">$40 <span className="text-sm font-normal">/ hour</span></span>
                                        <p className="text-xs text-[#525252] italic">1-hour minimum</p>
                                    </div>
                                </div>

                                <p className="font-[family-name:var(--font-montserrat)] text-sm text-neutral-600 leading-relaxed mb-3">
                                    For all those &ldquo;get to it eventually&rdquo; tasks and errands you don&apos;t have time for or you&apos;re trying to avoid. Provide your &ldquo;honey-do&rdquo; list and I&apos;ll work through it efficiently within your designated timeframe or until every item is checked off.
                                </p>

                                <div className="font-[family-name:var(--font-montserrat)] text-xs text-[#525252] mb-4">
                                    <strong>Task Examples:</strong> Baseboard cleaning, interior windows, dusting, organizational projects, appointment scheduling, litter box refresh, plant watering, and more. Everyone&apos;s hive is different, so we can work out a list that fits your needs.
                                </div>

                                {/* Ultimate Hive Half-Day bar */}
                                <div className="bg-[#BFC8A1]/15 rounded-xl p-4 flex items-center justify-between relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                                            <pattern id="honeycomb-ultimate" width="10" height="10" patternUnits="userSpaceOnUse">
                                                <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#BFC8A1" strokeWidth="0.5" />
                                            </pattern>
                                            <rect width="100%" height="100%" fill="url(#honeycomb-ultimate)" />
                                        </svg>
                                    </div>
                                    <div className="relative z-10">
                                        <p className="font-[family-name:var(--font-lora)] font-bold text-[#3C3C3C] text-sm">The &ldquo;Ultimate Hive&rdquo; Half-Day</p>
                                        <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#525252]">4 hours of dedicated service</p>
                                    </div>
                                    <div className="relative z-10 text-right">
                                        <span className="font-[family-name:var(--font-lora)] font-bold text-[#3C3C3C]">$145</span>
                                        <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#6B7D5E] font-semibold">Save $15</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* === 2. The A-La-Carte Hive === */}
                    <div className="mb-8">
                        <div className="bg-white rounded-3xl border-2 border-[#BFC8A1]/20 overflow-hidden shadow-sm">
                            <div className="bg-[#BFC8A1]/10 px-8 py-6 border-b border-[#BFC8A1]/15 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                                        <pattern id="honeycomb-alacarte" width="10" height="10" patternUnits="userSpaceOnUse">
                                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#BFC8A1" strokeWidth="0.5" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill="url(#honeycomb-alacarte)" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="relative w-24 h-24 flex-shrink-0">
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
                                        { name: 'The Surface Shine (Kitchen or Bathroom)', price: '$35/task', desc: 'A surface-level shine including counters, mirrors, cabinet fronts, exterior appliances, and floors.', icon: '/bee-4-spraybottle.png' },
                                        { name: 'The Fresh Fridge & Pantry', price: '$35/task', desc: 'A health-check for your kitchen: we toss expired items and give shelves and drawers a fresh wipe.', icon: '/bee_alacarte_fridge.png' },
                                        { name: 'The Clean Path', price: '$20/task', desc: 'Vacuum and mop of the main-level "traffic lanes" and living area.', icon: '/bee_alacarte_path.png' },
                                        { name: 'The Busy Bee Dash', price: '$15/task', desc: 'Fast door-to-door errands within Wentzville. Handles pre-paid/pre-labeled pickups and returns.', icon: '/bee_dash.svg' },
                                    ].map((item, i) => (
                                        <div key={i} className="group rounded-xl p-5 border-2 border-[#BFC8A1]/15 hover:border-[#BFC8A1] hover:shadow-md transition-all bg-[#FFF8E7]">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative w-16 h-16 flex-shrink-0">
                                                        <Image src={item.icon} alt={`${item.name} icon`} fill className="object-contain" />
                                                    </div>
                                                    <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C]">{item.name}</h3>
                                                </div>
                                                <span className="bg-[#6B7D5E] text-white text-sm px-3 py-1 rounded-full font-[family-name:var(--font-montserrat)] font-bold whitespace-nowrap">{item.price}</span>
                                            </div>
                                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* === 3. Add-On Services === */}
                    <div className="mb-8">
                        <div className="bg-white rounded-3xl border-2 border-[#BFC8A1]/20 overflow-hidden shadow-sm">
                            <div className="bg-[#BFC8A1]/10 px-8 py-6 border-b border-[#BFC8A1]/15 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                                        <pattern id="honeycomb-addons" width="10" height="10" patternUnits="userSpaceOnUse">
                                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#BFC8A1" strokeWidth="0.5" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill="url(#honeycomb-addons)" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="relative w-24 h-24 flex-shrink-0">
                                        <Image src="/bee_alacarte_cycle.png" alt="Add-On Bee" fill className="object-contain" />
                                    </div>
                                    <div>
                                        <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C]">
                                            Add-On Services
                                        </h2>
                                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">Pair these with any other service.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="grid sm:grid-cols-3 gap-4">
                                    {[
                                        { name: 'The Dishwasher Reset', price: '$10/load', desc: 'We unload the clean, load the dirty, and start the cycle.', icon: '/bee_alacarte_dish.png' },
                                        { name: 'The Laundry Cycle', price: '$15/load', desc: 'Complete Cycle: Wash, dry, and fold (or hang).', icon: '/bee_alacarte_cycle.png' },
                                        { name: 'The Laundry Assist', price: '$10/load', desc: 'You start the wash, I switch & fold. Or I wash & dry and leave it warm in the dryer.', icon: '/bee_alacarte_assist.png' },
                                    ].map((addon, i) => (
                                        <div key={i} className="group rounded-xl p-5 border-2 border-[#BFC8A1]/15 hover:border-[#BFC8A1] hover:shadow-md transition-all bg-[#FFF8E7]">
                                            <div className="flex flex-col items-center text-center mb-2">
                                                <div className="relative w-16 h-16 flex-shrink-0 mb-2">
                                                    <Image src={addon.icon} alt={`${addon.name} icon`} fill className="object-contain" />
                                                </div>
                                                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C]">{addon.name}</h3>
                                                <span className="bg-[#6B7D5E] text-white text-sm px-3 py-1 rounded-full font-[family-name:var(--font-montserrat)] font-bold mt-1">{addon.price}</span>
                                            </div>
                                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] text-center">
                                                {addon.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* === 4. The Outdoor Hive === */}
                    <div className="mb-8">
                        <div className="bg-white rounded-3xl border-2 border-[#BFC8A1]/20 overflow-hidden shadow-sm">
                            <div className="bg-[#BFC8A1]/10 px-8 py-6 border-b border-[#BFC8A1]/15 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                                        <pattern id="honeycomb-outdoor" width="10" height="10" patternUnits="userSpaceOnUse">
                                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#BFC8A1" strokeWidth="0.5" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill="url(#honeycomb-outdoor)" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="relative w-24 h-24 flex-shrink-0">
                                        <Image src="/bee_outdoor_watering.png" alt="Outdoor Bee" fill className="object-contain" />
                                    </div>
                                    <div>
                                        <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C]">
                                            The Outdoor Hive
                                        </h2>
                                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">Keeping your yard and garden as welcoming as your home.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { name: 'The Pet Waste Yard Reset', price: '$35/task', desc: "Perfect for when the yard has been neglected for a bit. I'll do a thorough sweep of the property so it's safe for kids and paws again.", icon: '/bee_outdoor_scoop.png' },
                                        { name: 'The Weekly Hive Scoop', price: '$25/visit', desc: "Consistency is key! I'll swing by once a week on a set day to handle the waste so you never have to think about it.", icon: '/bee_outdoor_bag.png' },
                                        { name: 'The Twice-a-Week Hive Scoop', price: '$20/visit', desc: 'For busy yards that need a little extra love. Book two visits per week and enjoy a discounted rate per visit.', icon: '/bee_outdoor_two_bags.png' },
                                        { name: 'Seasonal Garden & Yard Tasks', price: '$35/hour', desc: 'Need help with light weeding, watering the garden, or raking a few stray leaves? These tasks can be added to any visit or booked as a standalone "Worker Bee" session.', icon: '/bee_outdoor_watering.png' },
                                    ].map((service, i) => (
                                        <div key={i} className="group rounded-xl p-5 border-2 border-[#BFC8A1]/15 hover:border-[#BFC8A1] hover:shadow-md transition-all bg-[#FFF8E7]">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative w-16 h-16 flex-shrink-0">
                                                        <Image src={service.icon} alt={`${service.name} icon`} fill className="object-contain" />
                                                    </div>
                                                    <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C]">{service.name}</h3>
                                                </div>
                                                <span className="bg-[#5D684B] text-white text-sm px-3 py-1 rounded-full font-[family-name:var(--font-montserrat)] font-bold whitespace-nowrap">{service.price}</span>
                                            </div>
                                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">
                                                {service.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* === 5. The Grocery Bee === */}
                    <div className="mb-8">
                        <div className="bg-white rounded-3xl border-2 border-[#BFC8A1]/20 overflow-hidden shadow-sm">
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative w-16 h-16 flex-shrink-0">
                                        <Image src="/bee-2-broom.png" alt="Grocery Bee" fill className="object-contain" />
                                    </div>
                                    <div className="flex-grow">
                                        <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-charcoal-gray">
                                            The Grocery Bee
                                        </h2>
                                        <p className="font-[family-name:var(--font-lora)] italic text-sm text-[#525252]">Full-service grocery shopping, done with care.</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="font-[family-name:var(--font-lora)] text-xl font-bold text-[#3C3C3C]">$35 <span className="text-sm font-normal">/ hour</span></span>
                                        <p className="text-xs text-[#525252] italic">1-hour minimum</p>
                                    </div>
                                </div>

                                <p className="font-[family-name:var(--font-montserrat)] text-sm text-neutral-600 leading-relaxed mb-3">
                                    Take back your weekend and let me handle the aisles. I don&apos;t just &ldquo;grab the items&rdquo;, I carefully select the freshest produce, check expiration dates, and shop with the same care you would. <strong>The Full Service</strong> includes shopping your specific list, delivery, and optional pantry/fridge put-away.
                                </p>

                                {/* Produce-Plus Upgrade bar */}
                                <div className="bg-[#BFC8A1]/15 rounded-xl p-4 flex items-center justify-between relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                                            <pattern id="honeycomb-produce" width="10" height="10" patternUnits="userSpaceOnUse">
                                                <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#BFC8A1" strokeWidth="0.5" />
                                            </pattern>
                                            <rect width="100%" height="100%" fill="url(#honeycomb-produce)" />
                                        </svg>
                                    </div>
                                    <div className="relative z-10">
                                        <p className="font-[family-name:var(--font-lora)] font-bold text-[#3C3C3C] text-sm">The &ldquo;Produce-Plus&rdquo; Upgrade</p>
                                        <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#525252]">Already placed a grocery pickup order but don&apos;t trust them to pick your avocados? I&apos;ll grab your curbside order and head inside to hand-select your produce, meat, or specific &ldquo;must-see&rdquo; items.</p>
                                    </div>
                                    <div className="relative z-10 text-right ml-4 flex-shrink-0">
                                        <span className="font-[family-name:var(--font-lora)] font-bold text-[#3C3C3C] text-sm whitespace-nowrap">$15 Flat Fee</span>
                                        <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#525252] whitespace-nowrap">+ Hourly Rate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Pricing Note */}
            <section className="py-6 px-6 bg-[#BFC8A1]/5 border-y border-[#BFC8A1]/15">
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] text-center italic max-w-3xl mx-auto">
                    Prices listed are estimates. Final pricing depends on the job details and will be confirmed before we start. Extra fees may apply for holidays, rush requests, or add-on tasks.
                </p>
            </section>

            {/* Page-specific pre-footer: Ready to learn more or book a service? */}
            <section className="py-4 px-6 bg-[#3C3C3C] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-bottom-bd" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-bottom-bd)" />
                    </svg>
                </div>
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                    <p className="font-[family-name:var(--font-lora)] italic text-lg md:text-xl text-[#E2C16B]">
                        Ready to learn more or book a service?
                    </p>
                    <BuzzCallButton
                        className="inline-block px-8 py-3 bg-terra-cotta text-cream-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-terra-cotta-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Let&apos;s Chat
                    </BuzzCallButton>
                </div>
            </section>
        </div>
    );
}
