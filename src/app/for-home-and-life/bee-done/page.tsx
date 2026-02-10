import Image from 'next/image';
import Link from 'next/link';

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
                                You relax — we&apos;ll handle the honey-dos. From deep cleaning to daily tidying and quick errands, we take care of the chores so you can focus on what matters most.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Book a Service
                            </Link>
                        </div>

                        <div className="order-1 md:order-2 flex justify-center">
                            <div className="relative w-72 h-72 md:w-96 md:h-96">
                                <div className="absolute inset-4 bg-[#BFC8A1]/15 rounded-full blur-2xl" />
                                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mt-8 md:mt-12">
                                    <div className="w-full h-full rounded-full border-4 border-[#BFC8A1]/50 shadow-2xl overflow-hidden bg-white animate-float">
                                        <Image src="/official-logo-circular.jpg" alt="The Helpful Hive" fill className="object-cover" priority />
                                    </div>
                                </div>
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 animate-float">
                                    <Image src="/bee-2-broom.png" alt="Broom Bee" fill className="object-contain drop-shadow-lg" />
                                </div>
                                <div className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 w-[72px] h-[72px] md:w-[88px] md:h-[88px] animate-float" style={{ animationDelay: '0.7s' }}>
                                    <Image src="/bee-4-spraybottle.png" alt="Spray Bottle Bee" fill className="object-contain drop-shadow-lg" />
                                </div>
                                <div className="absolute bottom-0 left-4 md:left-0 w-16 h-16 md:w-20 md:h-20 animate-float" style={{ animationDelay: '1.4s' }}>
                                    <Image src="/bee-5-clipboard.png" alt="Clipboard Bee" fill className="object-contain drop-shadow-lg" />
                                </div>
                            </div>
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

            {/* === The Worker Bee === */}
            <section className="py-14 md:py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl border-2 border-[#BFC8A1]/30 overflow-hidden shadow-sm">
                        {/* Header */}
                        <div className="bg-[#BFC8A1]/15 px-8 py-6 border-b border-[#BFC8A1]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image src="/bee-2-broom.png" alt="Worker Bee" fill className="object-contain" />
                                </div>
                                <div>
                                    <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C]">
                                        The Worker Bee
                                    </h2>
                                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">Hourly Services</p>
                                </div>
                            </div>
                            <div className="bg-[#BFC8A1] text-white px-5 py-2.5 rounded-full font-[family-name:var(--font-montserrat)] font-bold text-lg self-start sm:self-auto">
                                $40/hour
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-8">
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] mb-6">
                                1-hour minimum · Best for unpredictable tasks where you want a dedicated professional to handle the details.
                            </p>

                            <div className="space-y-5">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FFF8E7] border border-[#BFC8A1]/15">
                                    <span className="text-2xl mt-0.5">🛒</span>
                                    <div>
                                        <h3 className="font-[family-name:var(--font-lora)] text-lg font-semibold text-[#3C3C3C]">
                                            Grocery & Personal Shopping
                                        </h3>
                                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">
                                            I shop your specific list, select the freshest produce, and can even put everything away for you.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FFF8E7] border border-[#BFC8A1]/15">
                                    <span className="text-2xl mt-0.5">📋</span>
                                    <div>
                                        <h3 className="font-[family-name:var(--font-lora)] text-lg font-semibold text-[#3C3C3C]">
                                            The &ldquo;Honey-Do&rdquo; List
                                        </h3>
                                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">
                                            A custom mix of cleaning, organizing, or household admin. Customized to your busy household needs.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#FFF8E7] border border-[#BFC8A1]/15">
                                    <span className="text-2xl mt-0.5">🏠</span>
                                    <div>
                                        <h3 className="font-[family-name:var(--font-lora)] text-lg font-semibold text-[#3C3C3C]">
                                            The Waiting Bee
                                        </h3>
                                        <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">
                                            I&apos;ll stay at your home for the cable, repair, or furniture delivery window so you don&apos;t have to miss work.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* === Quick Errand Menu === */}
            <section className="py-14 md:py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-3xl border-2 border-[#BFC8A1]/30 overflow-hidden bg-[#FFF8E7]">
                        <div className="bg-[#BFC8A1]/15 px-8 py-6 border-b border-[#BFC8A1]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image src="/bee-5-clipboard.png" alt="Errand Bee" fill className="object-contain" />
                                </div>
                                <div>
                                    <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C]">
                                        The Quick Errand Menu
                                    </h2>
                                </div>
                            </div>
                            <div className="bg-[#BFC8A1] text-white px-5 py-2.5 rounded-full font-[family-name:var(--font-montserrat)] font-bold text-lg self-start sm:self-auto">
                                $15/stop
                            </div>
                        </div>

                        <div className="p-8">
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] mb-6">
                                A flat rate for pre-paid or pre-labeled errands within Wentzville. Perfect as an add-on to any visit!
                            </p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                    { icon: '📦', name: 'The Return Run', desc: 'Dropping off pre-labeled Amazon, UPS, or FedEx packages.' },
                                    { icon: '🛒', name: 'Grocery Pickup', desc: 'You order and pay online; I handle the curbside pickup and delivery to your counter.' },
                                    { icon: '👔', name: 'Dry Cleaning', desc: 'Dropping off or picking up your professional wear.' },
                                    { icon: '💊', name: 'The Pharmacy Trip', desc: 'Picking up pre-paid prescriptions.' },
                                    { icon: '📬', name: 'Post Office', desc: 'Dropping off mail, buying stamps, or shipping prepared packages.' },
                                ].map((errand, i) => (
                                    <div key={i} className="bg-white rounded-xl p-4 border border-[#BFC8A1]/20 hover:border-[#BFC8A1] hover:shadow-md transition-all">
                                        <span className="text-2xl mb-2 block">{errand.icon}</span>
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
                                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">Chore Add-Ons</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] mb-6">
                                Consistent, flat-rate pricing for the most common household needs.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { name: 'The Laundry Cycle', price: '$15/load', desc: 'Wash, dry, and professional fold.' },
                                    { name: 'The Dish Reset', price: '$10', desc: 'Unload the clean, load the dirty, and start the machine. (Hand-washing billed at hourly rate.)' },
                                    { name: 'The Fresh Fridge and Pantry', price: '$35', desc: 'Toss expired items and a quick wipe of the shelves/drawers.' },
                                    { name: 'Kitchen or Bathroom Refresh', price: '$30', desc: 'Surface-level shine (counters, mirrors, and floors).' },
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
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#BFC8A1" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-cta-bd)" />
                    </svg>
                </div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to <span className="text-[#BFC8A1]">Bee Done</span> with your to-do list?
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
