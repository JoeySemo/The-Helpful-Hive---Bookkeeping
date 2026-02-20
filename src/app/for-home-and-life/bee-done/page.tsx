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
                <div className="absolute inset-0 bg-gradient-to-br from-soft-sage/15 via-cream-white to-soft-sage/10" />
                <div className="absolute inset-0 opacity-[0.125] pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-bd" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#BFC8A1" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-bd)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-8 md:py-12 lg:py-16 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h1 className="font-[family-name:var(--font-lora)] text-[1.75rem] sm:text-4xl md:text-5xl xl:text-6xl font-bold text-charcoal-gray mb-6 lg:whitespace-nowrap">
                                &ldquo;Bee Done&rdquo; Service Menu
                            </h1>
                            <ul className="font-[family-name:var(--font-lora)] text-lg sm:text-xl md:text-2xl font-semibold text-charcoal-gray mb-8 leading-relaxed">
                                <li>Home Resets</li>
                                <li>Laundry</li>
                                <li>Dishes</li>
                                <li>Errand Dashes</li>
                            </ul>
                            <p className="font-[family-name:var(--font-lora)] italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-soft-sage-dark mb-8 leading-normal">
                                Taking the Sting out of Chores so you can Bee Done with your To-Do list.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-terra-cotta text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
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



            {/* === The Bee Done Service Menu === */}
            <section className="py-14 md:py-20 px-6">
                <div className="max-w-6xl mx-auto">



                    {/* === The A-La-Carte Hive === */}
                    <div className="mb-20">
                        <div className="bg-white rounded-3xl border-2 border-[#BFC8A1]/30 overflow-hidden shadow-sm">
                            <div className="bg-[#BFC8A1]/15 px-8 py-6 border-b border-[#BFC8A1]/20 relative overflow-hidden">
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
                                        { name: 'The Dish Reset', price: '$10/load', desc: 'We unload the clean, load the dirty, and start the cycle. (Hand-washing billed at hourly rate).', icon: '/bee_alacarte_dish.png' },
                                        { name: 'The Fresh Fridge & Pantry', price: '$35', desc: 'We toss expired items and give shelves/drawers a fresh wipe.', icon: '/bee_alacarte_fridge.png' },
                                        { name: 'The Surface Shine (Kitchen or Bathroom)', price: '$35', desc: 'A surface-level shine including counters, mirrors, cabinet fronts, exterior appliances, and floors.', icon: '/bee-4-spraybottle.png' },
                                        { name: 'The Clean Path', price: '$20', desc: 'Vacuum and mop of the main-level "traffic lanes" and living area.', icon: '/bee_alacarte_path.png' },
                                        { name: 'The Laundry Cycle', price: '$15/load', desc: 'Complete Cycle: Wash, dry, and fold (or hang).', note: '*Only available when paired with another service.', icon: '/bee_alacarte_cycle.png' },
                                        { name: 'The Laundry Assist', price: '$10/load', desc: 'You start the wash, I switch & fold. Or I wash & dry and leave it warm in the dryer.', note: '*Only available when paired with another service.', icon: '/bee_alacarte_assist.png' },
                                    ].map((addon, i) => (
                                        <div key={i} className="group rounded-xl p-5 border-2 border-[#BFC8A1]/15 hover:border-[#BFC8A1] hover:shadow-md transition-all bg-[#FFF8E7]">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative w-16 h-16 flex-shrink-0">
                                                        <Image src={addon.icon} alt={`${addon.name} icon`} fill className="object-contain" />
                                                    </div>
                                                    <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C]">{addon.name}</h3>
                                                </div>
                                                <span className="bg-[#5D684B] text-white text-sm px-3 py-1 rounded-full font-[family-name:var(--font-montserrat)] font-bold">{addon.price}</span>
                                            </div>
                                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">
                                                {addon.desc}
                                                {addon.note && (
                                                    <span className="block mt-1 text-xs italic opacity-80">{addon.note}</span>
                                                )}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* === Bundles === */}
                    <div className="grid md:grid-cols-2 gap-8 mb-20">
                        {/* The Monday Reset */}
                        <div className="bg-white rounded-3xl border-2 border-charcoal-gray overflow-hidden shadow-lg relative">
                            <div className="absolute top-0 right-0 bg-charcoal-gray text-warm-honey px-4 py-1 rounded-bl-xl text-sm font-bold">POPULAR</div>
                            <div className="p-8 flex flex-col h-full">
                                <h2 className="font-[family-name:var(--font-lora)] text-3xl font-bold text-charcoal-gray mb-2">
                                    The Monday Reset
                                </h2>
                                <div className="text-2xl font-bold text-terra-cotta-dark mb-4">$55 <span className="text-sm font-normal text-gray-500 line-through">($65 Value)</span></div>
                                <p className="font-[family-name:var(--font-montserrat)] text-sm text-neutral-600 mb-6">
                                    Don't let a "weekend hangover" of chores ruin your Monday focus. While you're at work, I'll erase the evidence of your busy weekend.
                                </p>
                                <div className="mb-6 flex-grow">
                                    <h4 className="font-bold text-charcoal-gray mb-2 text-sm uppercase tracking-wide">What's Included:</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-sm text-neutral-600">
                                            <span className="text-warm-honey text-xl">✓</span> <span><strong>2 Laundry Assists:</strong> You start the first wash, I handle the rest! (2nd load left in dryer).</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-[#525252]">
                                            <span className="text-[#E2C16B] text-xl">✓</span> <span><strong>1 Dish Reset:</strong> Empty sink, dishwasher running.</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-[#525252]">
                                            <span className="text-[#E2C16B] text-xl">✓</span> <span><strong>1 Fresh Fridge & Pantry:</strong> Toss expired food, wipe shelves.</span>
                                        </li>
                                    </ul>
                                </div>
                                <Link href="/contact" className="block w-full text-center py-3 bg-[#3C3C3C] text-white font-bold rounded-xl hover:bg-[#525252] transition-all">
                                    Book Bundle
                                </Link>
                            </div>
                        </div>

                        {/* The Whole Hive Reset */}
                        <div className="bg-white rounded-3xl border-2 border-charcoal-gray overflow-hidden shadow-lg relative">
                            <div className="absolute top-0 right-0 bg-charcoal-gray text-warm-honey px-4 py-1 rounded-bl-xl text-sm font-bold">BEST VALUE</div>
                            <div className="p-8 flex flex-col h-full">
                                <h2 className="font-[family-name:var(--font-lora)] text-3xl font-bold text-charcoal-gray mb-2">
                                    The Whole Hive Reset
                                </h2>
                                <div className="text-2xl font-bold text-terra-cotta-dark mb-4">$125 <span className="text-sm font-normal text-gray-500 line-through">($140 Value)</span></div>
                                <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] mb-6">
                                    The ultimate "Main Floor" refresh. I focus on the rooms you use the most so the heart of your home stays clean and inviting.
                                </p>
                                <div className="mb-6 flex-grow">
                                    <h4 className="font-bold text-[#3C3C3C] mb-2 text-sm uppercase tracking-wide">What's Included:</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-sm text-[#525252]">
                                            <span className="text-[#E2C16B] text-xl">✓</span> <span><strong>1 Kitchen Shine:</strong> Counters, appliances, cabinets.</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-[#525252]">
                                            <span className="text-[#E2C16B] text-xl">✓</span> <span><strong>1 Dish Reset:</strong> Unload, load, start.</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-[#525252]">
                                            <span className="text-[#E2C16B] text-xl">✓</span> <span><strong>1 Fridge & Pantry Refresh:</strong> Toss old food, wipe.</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-[#525252]">
                                            <span className="text-[#E2C16B] text-xl">✓</span> <span><strong>1 Guest Bath Shine:</strong> Surfaces, mirrors, toilet.</span>
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-[#525252]">
                                            <span className="text-[#E2C16B] text-xl">✓</span> <span><strong>1 Clean Path:</strong> Vacuum & mop main living area.</span>
                                        </li>
                                    </ul>
                                </div>
                                <Link href="/contact" className="block w-full text-center py-3 bg-[#3C3C3C] text-white font-bold rounded-xl hover:bg-[#525252] transition-all">
                                    Book Bundle
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* === The Busy Bee Dash === */}
                    <div className="mb-20">
                        <div className="bg-white rounded-3xl border-2 border-[#BFC8A1]/30 overflow-hidden shadow-sm">
                            <div className="bg-[#BFC8A1]/15 px-8 py-6 border-b border-[#BFC8A1]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                                        <pattern id="honeycomb-busybee" width="10" height="10" patternUnits="userSpaceOnUse">
                                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#BFC8A1" strokeWidth="0.5" />
                                        </pattern>
                                        <rect width="100%" height="100%" fill="url(#honeycomb-busybee)" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="relative w-24 h-24 flex-shrink-0">
                                        <Image src="/bee-5-clipboard.png" alt="Errand Bee" fill className="object-contain" />
                                    </div>
                                    <div>
                                        <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C]">
                                            The Busy Bee Dash
                                        </h2>
                                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">Fast door-to-door errands within Wentzville.</p>
                                    </div>
                                </div>
                                <div className="bg-soft-sage-dark text-black px-5 py-2.5 rounded-full font-[family-name:var(--font-montserrat)] font-bold text-lg self-start sm:self-auto relative z-10">
                                    $15 <span className="text-sm font-normal">flat rate</span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                    {[
                                        { name: 'Returns', desc: 'Dropping off pre-labeled Amazon, UPS, or FedEx packages.', icon: '/bee_returns_box.png' },
                                        { name: 'Grocery/Retail Pickups', desc: 'Curbside pickup & delivery of pre-ordered items.', icon: '/bee_grocery_bag.png' },
                                        { name: 'Dry Cleaning', desc: 'Seamless drop-off or pickup.', icon: '/bee_dry_cleaning.png' },
                                        { name: 'Pharmacy', desc: 'Secure pickup of pre-paid prescriptions.', icon: '/bee_pharmacy_pill.png' },
                                        { name: 'Post Office', desc: 'Handling mail, stamps, or prepared packages.', icon: '/bee_post_office_mail.png' },
                                    ].map((errand, i) => (
                                        <div key={i} className="group rounded-xl p-5 border-2 border-[#BFC8A1]/15 hover:border-[#BFC8A1] hover:shadow-md transition-all bg-[#FFF8E7]">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative w-16 h-16 flex-shrink-0">
                                                        <Image src={errand.icon} alt={`${errand.name} icon`} fill className="object-contain" />
                                                    </div>
                                                    <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C]">{errand.name}</h3>
                                                </div>
                                            </div>
                                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">
                                                {errand.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-[#BFC8A1]/10 p-4 rounded-xl text-center">
                                    <p className="text-[#3C3C3C] font-bold mb-1">*The Busy Bee Bundle: Buy 5 “Dashes” for $65 (Save $10)</p>
                                    <p className="text-[#525252] text-xs italic">Note: For "Dash" services, all orders must be placed/paid with vendor prior to pickup.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* === Hourly Services (Worker, Grocery, Waiting) === */}
                    <div className="grid md:grid-cols-3 gap-6 mb-20">
                        {/* The Worker Bee */}
                        <div className="bg-white p-8 rounded-3xl border border-[#BFC8A1]/20 shadow-sm flex flex-col">
                            <h2 className="font-[family-name:var(--font-lora)] text-2xl font-bold text-[#3C3C3C] mb-2">
                                The Worker Bee
                            </h2>
                            <div className="text-xl font-bold text-terra-cotta-dark mb-2">$40 <span className="text-sm font-normal text-gray-500">/ hour</span></div>
                            <span className="text-xs text-[#525252] italic mb-4">1-hour minimum</span>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] mb-4 flex-grow">
                                The ultimate solution for your home to-do list. Provide your "honey-do" list and I'll work through it efficiently.
                            </p>
                            <div className="text-xs text-[#525252] mb-4">
                                <strong>Examples:</strong> Baseboards, interior windows, dusting, organizing, scheduling, plants.
                            </div>
                            <div className="text-xs text-[#525252] bg-[#BFC8A1]/10 p-3 rounded-lg">
                                <strong>*The "Ultimate Hive" Half-Day:</strong> 4 hours of dedicated service for $145 (Save $15).
                            </div>
                        </div>

                        {/* The Grocery Bee */}
                        <div className="bg-white p-8 rounded-3xl border border-[#BFC8A1]/20 shadow-sm flex flex-col">
                            <h2 className="font-[family-name:var(--font-lora)] text-2xl font-bold text-[#3C3C3C] mb-2">
                                The Grocery Bee
                            </h2>
                            <div className="text-xl font-bold text-terra-cotta-dark mb-2">$35 <span className="text-sm font-normal text-gray-500">/ hour</span></div>
                            <span className="text-xs text-[#525252] italic mb-4">1-hour minimum</span>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] mb-4 flex-grow">
                                I don't just "grab items", I select freshest produce and check dates. Includes shopping, delivery, and optional put-away.
                            </p>
                            <div className="text-xs text-[#525252] bg-[#BFC8A1]/10 p-3 rounded-lg">
                                <strong>*The "Produce-Plus" Upgrade:</strong> ($15 Flat + Hourly) I grab your curbside order then hand-select your produce/meat inside.
                            </div>
                        </div>

                        {/* The Waiting Bee */}
                        <div className="bg-white p-8 rounded-3xl border border-[#BFC8A1]/20 shadow-sm flex flex-col">
                            <h2 className="font-[family-name:var(--font-lora)] text-2xl font-bold text-[#3C3C3C] mb-2">
                                The Waiting Bee
                            </h2>
                            <div className="text-xl font-bold text-terra-cotta-dark mb-2">$30 <span className="text-sm font-normal text-gray-500">/ hour</span></div>
                            <span className="text-xs text-[#525252] italic mb-4">1-hour minimum</span>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] mb-4 flex-grow">
                                I'll stay on-site for the cable tech or delivery so you don't miss work. Real-time updates provided.
                            </p>
                            <div className="text-xs text-[#525252] bg-[#BFC8A1]/10 p-3 rounded-lg">
                                <strong>*Efficiency Upgrade:</strong> Upgrade to $40/hr "Worker Bee" rate to have me tackle chores while I wait!
                            </div>
                        </div>
                    </div>

                    {/* === The Outdoor Hive === */}
                    <div className="bg-white rounded-3xl border-2 border-[#BFC8A1]/30 overflow-hidden shadow-sm">
                        <div className="bg-[#BFC8A1]/15 px-8 py-6 border-b border-[#BFC8A1]/20 relative overflow-hidden">
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
                                    <Image src="/bee-new-2.png" alt="Outdoor Bee" fill className="object-contain" />
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
                                    { name: 'The Pet Waste Yard Reset', price: '$35', desc: 'Thorough sweep of neglected yards to make them safe for kids and paws.', icon: '/bee_outdoor_scoop.png' },
                                    { name: 'The Weekly Hive Scoop', price: '$25/visit', desc: 'Weekly scheduled waste removal.', icon: '/bee_outdoor_bag.png' },
                                    { name: 'The Twice-a-Week Scoop', price: '$20/visit', desc: 'Discounted rate for two visits per week.', icon: '/bee_outdoor_two_bags.png' },
                                    { name: 'Seasonal Garden & Yard', price: '$40/hr', desc: 'Light weeding, watering, raking. Can be added to visit or booked as Worker Bee session.', icon: '/bee_outdoor_watering.png' },
                                ].map((service, i) => (
                                    <div key={i} className="group rounded-xl p-5 border-2 border-[#BFC8A1]/15 hover:border-[#BFC8A1] hover:shadow-md transition-all bg-[#FFF8E7]">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="relative w-16 h-16 flex-shrink-0">
                                                    <Image src={service.icon} alt={`${service.name} icon`} fill className="object-contain" />
                                                </div>
                                                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C]">{service.name}</h3>
                                            </div>
                                            <span className="bg-[#5D684B] text-white text-sm px-3 py-1 rounded-full font-[family-name:var(--font-montserrat)] font-bold">{service.price}</span>
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
                    <h2 className="font-display text-3xl md:text-5xl font-medium mb-6">
                        <span className="text-gradient-honey">Ready to Bee Done with your to-do list?</span>
                    </h2>
                    <p className="text-white/80 mb-10 text-xl font-light">
                        Let us take care of the cleaning and errands so you can enjoy your home.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-warm-honey text-charcoal-gray font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#d4b35f] transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Book a Service
                        </Link>
                        <a
                            href="tel:+13145267240"
                            className="inline-block px-8 py-4 bg-transparent border-2 border-white/60 text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-white/10 transition-all"
                        >
                            Call (314) 526-7240
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
