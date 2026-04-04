import Image from 'next/image';
import Link from 'next/link';
import BuzzCallButton from '@/components/BuzzCallButton';

export const metadata = {
    title: "Bee Kind | The Helpful Hive",
    description: "Tending to your pets and plants so you can Bee Kind to your peace of mind while you're away from the hive.",
};

export default function BeeKindPage() {
    return (
        <div className="min-h-screen bg-cream-white">
            {/* Hero Section - Simplified */}
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

                <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 lg:py-20 relative z-10 text-center">
                    <h1 className="font-[family-name:var(--font-lora)] text-3xl sm:text-4xl md:text-[2.75rem] xl:text-5xl text-charcoal-gray mb-4 whitespace-nowrap">
                        <strong>Bee Kind</strong> to your home and pets!
                    </h1>

                    <p className="font-[family-name:var(--font-lora)] italic text-xl md:text-2xl text-seafoam-teal-dark leading-relaxed">
                        Explore our &ldquo;Bee Kind&rdquo; services below.
                    </p>
                </div>
            </section>

            {/* Pre-footer moved up - Every hive is unique */}
            <section className="py-10 px-6 bg-[#3C3C3C] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-prefooter-bk" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-prefooter-bk)" />
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

            {/* === The Bee Kind Service Menu === */}
            <section className="py-8 md:py-10 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* === Check-In Services === */}
                    <div className="mb-8">
                        <div className="bg-white rounded-3xl border-2 border-[#98B4AC]/20 overflow-hidden shadow-sm">
                            <div className="bg-[#98B4AC]/10 px-8 py-6 border-b border-[#98B4AC]/15 relative overflow-hidden">
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
                                            Check-In Services
                                        </h2>
                                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">Reliable care for your home and pets while you&apos;re away.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {/* Premium Pet Check-In */}
                                    <div className="group rounded-xl p-5 border-2 border-[#98B4AC]/15 hover:border-[#98B4AC] hover:shadow-md transition-all bg-[#FFF8E7]">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="relative w-16 h-16 flex-shrink-0">
                                                    <Image src="/bee-1-petfood.png" alt="Premium Pet Check-In" fill className="object-contain" />
                                                </div>
                                                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C] text-sm sm:text-base whitespace-nowrap">Premium Pet Check-In</h3>
                                            </div>
                                            <span className="bg-[#506A62] text-white text-sm px-3 py-1 rounded-full font-[family-name:var(--font-montserrat)] font-bold whitespace-nowrap">$25/visit</span>
                                        </div>
                                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] italic mb-2">Ideal for busy pet parents</p>
                                        <ul className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] space-y-1">
                                            <li>• Approximately 40 minute visit</li>
                                            <li>• Potty break and/or litter box scoop</li>
                                            <li>• Crate relief</li>
                                            <li>• Potty accident cleanup</li>
                                            <li>• Food and water refresh</li>
                                            <li>• Dedicated playtime or a short walk</li>
                                        </ul>
                                    </div>

                                    {/* Standard Pet Check-In */}
                                    <div className="group rounded-xl p-5 border-2 border-[#98B4AC]/15 hover:border-[#98B4AC] hover:shadow-md transition-all bg-[#FFF8E7]">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="relative w-16 h-16 flex-shrink-0">
                                                    <Image src="/bee-1-petfood.png" alt="Standard Pet Check-In" fill className="object-contain" />
                                                </div>
                                                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C] text-sm sm:text-base whitespace-nowrap">Standard Pet Check-In</h3>
                                            </div>
                                            <span className="bg-[#506A62] text-white text-sm px-3 py-1 rounded-full font-[family-name:var(--font-montserrat)] font-bold whitespace-nowrap">$20/visit</span>
                                        </div>
                                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] italic mb-2">Ideal for busy pet parents</p>
                                        <ul className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] space-y-1">
                                            <li>• Approximately 30 minute visit</li>
                                            <li>• Potty break and/or litter box scoop</li>
                                            <li>• Crate relief</li>
                                            <li>• Potty accident cleanup</li>
                                            <li>• Food and water refresh</li>
                                        </ul>
                                        <div className="flex justify-end mt-3">
                                            <span className="font-[family-name:var(--font-montserrat)] text-xs text-[#506A62] font-semibold italic">Cat Only Rate $17/visit</span>
                                        </div>
                                    </div>

                                    {/* The Home Hive Check */}
                                    <div className="group rounded-xl p-5 border-2 border-[#98B4AC]/15 hover:border-[#98B4AC] hover:shadow-md transition-all bg-[#FFF8E7]">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="relative w-16 h-16 flex-shrink-0">
                                                    <Image src="/bee-1-petfood.png" alt="Home Hive Check" fill className="object-contain" />
                                                </div>
                                                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C] text-sm sm:text-base whitespace-nowrap">The Home Hive Check</h3>
                                            </div>
                                            <span className="bg-[#506A62] text-white text-sm px-3 py-1 rounded-full font-[family-name:var(--font-montserrat)] font-bold whitespace-nowrap">$15/visit</span>
                                        </div>
                                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] italic mb-2">Ideal for travelers</p>
                                        <ul className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] space-y-1">
                                            <li>• Approximately 20 minute visit</li>
                                            <li>• Mail and package retrieval</li>
                                            <li>• Trash bin in/out</li>
                                            <li>• Lights rotation (for security)</li>
                                            <li>• Security and wellness walk-through</li>
                                        </ul>
                                        <div className="flex justify-end mt-3">
                                            <span className="font-[family-name:var(--font-montserrat)] text-xs text-[#506A62] font-semibold italic">3 visits for $40</span>
                                        </div>
                                    </div>

                                    {/* The Hive Hybrid */}
                                    <div className="group rounded-xl p-5 border-2 border-[#98B4AC]/15 hover:border-[#98B4AC] hover:shadow-md transition-all bg-[#FFF8E7]">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-3">
                                                <div className="relative w-16 h-16 flex-shrink-0">
                                                    <Image src="/bee-1-petfood.png" alt="Hive Hybrid" fill className="object-contain" />
                                                </div>
                                                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C] text-sm sm:text-base whitespace-nowrap">The Hive Hybrid</h3>
                                            </div>
                                            <span className="bg-[#506A62] text-white text-sm px-3 py-1 rounded-full font-[family-name:var(--font-montserrat)] font-bold whitespace-nowrap">$35/visit</span>
                                        </div>
                                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] italic mb-2">The perfect all-in-one solution for traveling pet parents</p>
                                        <ul className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] space-y-1">
                                            <li>• Approximately 60 minute visit</li>
                                            <li>• Includes a Home Hive Check and a Premium Pet Check-In</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Visit info note */}
                                <div className="mt-6 bg-[#98B4AC]/10 rounded-xl p-4 flex items-center gap-3">
                                    <span className="text-xl">📱</span>
                                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-charcoal-gray font-medium">
                                        All visits include a digital &ldquo;Hive Update&rdquo; (text/photo) sent immediately after the visit.
                                    </p>
                                </div>

                                {/* Multi-pet note */}
                                <div className="mt-4 bg-[#98B4AC]/10 rounded-xl p-4">
                                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] text-center">
                                        Rates are based on a single-dog or two-cat household.
                                    </p>
                                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] text-center mt-1">
                                        <strong>Add-a-Cat: $3</strong> <span className="hidden sm:inline">&nbsp;|&nbsp;</span> <br className="sm:hidden" /><strong>Add-a-Dog: $5</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* === Overnight Home and Pet Sitting === */}
                    <div className="mb-8">
                        <div className="bg-white rounded-3xl border-2 border-[#98B4AC]/20 overflow-hidden shadow-sm relative">
                            <div className="absolute top-3 right-3 bg-[#506A62] text-white text-xs font-bold px-3 py-1 rounded z-10">Premium</div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative w-16 h-16 flex-shrink-0">
                                        <Image src="/bee-1-petfood.png" alt="Overnight Bee" fill className="object-contain" />
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        <h2 className="font-[family-name:var(--font-lora)] text-lg sm:text-2xl md:text-3xl font-bold text-charcoal-gray whitespace-nowrap">
                                            Overnight Home &amp; Pet Sitting
                                        </h2>
                                        <p className="font-[family-name:var(--font-lora)] italic text-sm text-[#525252]">A consistent presence for your home and pets.</p>
                                    </div>
                                    <div className="text-right flex-shrink-0">
                                        <span className="font-[family-name:var(--font-lora)] text-xl font-bold text-[#3C3C3C] whitespace-nowrap">$95 <span className="text-sm font-normal">/ night</span></span>
                                    </div>
                                </div>

                                <p className="font-[family-name:var(--font-montserrat)] text-sm text-neutral-600 leading-relaxed mb-4">
                                    This premium service includes a <strong>10-hour overnight stay</strong> in your home. Amanda maintains your pet&apos;s familiar bedtime and morning routines including evening and morning feedings and potty breaks.
                                </p>

                                {/* Hive Hybrid Overnight Upgrade bar */}
                                <div className="bg-[#98B4AC]/15 rounded-xl p-4 flex items-center justify-between relative overflow-hidden">
                                    <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
                                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                                            <pattern id="honeycomb-overnight-upgrade" width="10" height="10" patternUnits="userSpaceOnUse">
                                                <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#98B4AC" strokeWidth="0.5" />
                                            </pattern>
                                            <rect width="100%" height="100%" fill="url(#honeycomb-overnight-upgrade)" />
                                        </svg>
                                    </div>
                                    <div className="relative z-10 flex-grow">
                                        <p className="font-[family-name:var(--font-lora)] font-bold text-[#3C3C3C] text-sm">The Hive Hybrid Overnight Upgrade</p>
                                        <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#525252]">Our elite all-in-one solution that pairs a premium overnight stay with our full Home Hive Check services for total home and pet protection.</p>
                                    </div>
                                    <div className="relative z-10 text-right ml-4 flex-shrink-0">
                                        <span className="font-[family-name:var(--font-lora)] font-bold text-[#3C3C3C] whitespace-nowrap">$105 <span className="text-xs font-normal">/ night</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* === Make it a "Bee Done" Day! === */}
                    <div className="mb-8">
                        <div className="bg-white rounded-3xl border-2 border-[#98B4AC]/20 overflow-hidden shadow-sm">
                            <div className="p-8">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-16 h-16 flex-shrink-0">
                                            <Image src="/bee-5-clipboard.png" alt="Bee Done Bee" fill className="object-contain" />
                                        </div>
                                        <div>
                                            <h2 className="font-[family-name:var(--font-lora)] text-lg sm:text-2xl md:text-3xl font-bold text-charcoal-gray whitespace-nowrap">
                                                Make it a &ldquo;Bee Done&rdquo; Day!
                                            </h2>
                                            <p className="font-[family-name:var(--font-lora)] italic text-sm text-[#525252]">Enhance your check-in service.</p>
                                        </div>
                                    </div>
                                    <Link
                                        href="/for-home-and-life/bee-done"
                                        className="px-6 py-2 bg-terra-cotta text-cream-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-terra-cotta-dark transition-all hover:shadow-lg text-center text-sm"
                                    >
                                        &ldquo;Bee Done&rdquo; Service Menu
                                    </Link>
                                </div>

                                <p className="font-[family-name:var(--font-montserrat)] text-sm text-neutral-600 leading-relaxed">
                                    Maximize my time at your home by adding a few extra to-dos to your scheduled check-in or overnight stay. Since I&apos;m already there caring for your pets or home, let me cross a few more things off your list; like running a load of laundry or grabbing your grocery pickup on my way over. Check out our &ldquo;Bee Done&rdquo; service menu to learn more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Note */}
            <section className="py-6 px-6 bg-[#98B4AC]/5 border-y border-[#98B4AC]/15">
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] text-center italic max-w-3xl mx-auto">
                    Prices listed are estimates. Final pricing depends on the job details and will be confirmed before we start. Extra fees may apply for holidays, rush requests, or add-on tasks.
                </p>
            </section>

            {/* Page-specific pre-footer: Ready to learn more or book a service? */}
            <section className="py-4 px-6 bg-[#3C3C3C] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-bottom-bk" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-bottom-bk)" />
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
