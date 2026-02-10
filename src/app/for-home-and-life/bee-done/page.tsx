import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "Bee Done | The Helpful Hive",
    description: "Taking the sting out of your 'honey-do' list. Home chores, errands, and cleaning services.",
};

export default function BeeDonePage() {
    const services = [
        { name: "Bathroom Deep Clean", description: "Thorough sanitizing and sparkling finishes", icon: "🛁" },
        { name: "Kitchen Deep Clean", description: "Appliances, counters, and everything in between", icon: "🍳" },
        { name: "Interior Window Washing", description: "Crystal clear views throughout your home", icon: "🪟" },
        { name: "Baseboards & Trim", description: "The details that make a difference", icon: "✨" },
        { name: "Dusting & Light Cleaning", description: "Surface cleaning to keep things fresh", icon: "🧹" },
        { name: "Laundry Services", description: "Wash, dry, fold, and iron", icon: "👕" },
        { name: "Dishes & Light Tidying", description: "Quick refreshes for busy days", icon: "🍽️" },
        { name: "Hourly Custom Tasks", description: "You tell us what needs doing", icon: "⏰" },
    ];

    return (
        <div className="min-h-screen bg-[#FFF8E7]">
            {/* Hero Section - Split Layout */}
            <section className="relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#BFC8A1]/15 via-[#FFF8E7] to-[#BFC8A1]/10" />

                {/* Honeycomb subtle pattern */}
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
                        {/* Left Content */}
                        <div className="order-2 md:order-1">
                            <div className="inline-block px-4 py-2 bg-[#BFC8A1]/25 rounded-full mb-6 backdrop-blur-sm">
                                <span className="text-[#3C3C3C] font-[family-name:var(--font-montserrat)] text-sm font-medium">
                                    Home Chores, Errands & Cleaning
                                </span>
                            </div>

                            <h1 className="font-[family-name:var(--font-lora)] text-5xl md:text-7xl font-bold text-[#3C3C3C] mb-4">
                                Bee Done
                            </h1>

                            <p className="font-[family-name:var(--font-allura)] text-3xl md:text-4xl text-[#BFC8A1] mb-6">
                                Taking the sting out of your &apos;honey-do&apos; list.
                            </p>

                            <p className="font-[family-name:var(--font-montserrat)] text-lg text-[#525252] mb-8 leading-relaxed max-w-lg">
                                You relax — we&apos;ll handle the honey-dos. From deep cleaning to daily tidying, we take care of the chores so you can focus on what matters most.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Book a Cleaning
                            </Link>
                        </div>

                        {/* Right - Logo + Bee Cluster */}
                        <div className="order-1 md:order-2 flex justify-center">
                            <div className="relative w-72 h-72 md:w-96 md:h-96">
                                {/* Glowing background ring */}
                                <div className="absolute inset-4 bg-[#BFC8A1]/15 rounded-full blur-2xl" />

                                {/* Logo Circle */}
                                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mt-8 md:mt-12">
                                    <div className="w-full h-full rounded-full border-4 border-[#BFC8A1]/50 shadow-2xl overflow-hidden bg-white animate-float">
                                        <Image
                                            src="/logo-circular.jpg"
                                            alt="The Helpful Hive"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Orbiting Bees */}
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-20 md:w-24 md:h-24 animate-float" style={{ animationDelay: '0s' }}>
                                    <Image src="/bee-2-broom.png" alt="Broom Bee" fill className="object-contain drop-shadow-lg" />
                                </div>
                                <div className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 w-18 h-18 md:w-22 md:h-22 animate-float" style={{ animationDelay: '0.7s' }}>
                                    <div className="w-[72px] h-[72px] md:w-[88px] md:h-[88px] relative">
                                        <Image src="/bee-4-spraybottle.png" alt="Spray Bottle Bee" fill className="object-contain drop-shadow-lg" />
                                    </div>
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
            <section className="py-8 px-4 bg-[#BFC8A1]/10 border-y border-[#BFC8A1]/20">
                <p className="font-[family-name:var(--font-lora)] text-xl md:text-2xl text-[#3C3C3C] text-center font-medium italic max-w-3xl mx-auto">
                    &ldquo;You relax — we&apos;ll handle the <span className="text-[#BFC8A1]">honey-do&apos;s</span>&rdquo;
                </p>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-3">
                            Our Cleaning Services
                        </h2>
                        <p className="font-[family-name:var(--font-montserrat)] text-[#525252]">
                            Every task completed with care and attention to detail
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-6 border border-[#BFC8A1]/20 hover:border-[#BFC8A1] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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

            {/* CTA Section with Charcoal Background */}
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
                        Let us take care of the cleaning so you can enjoy your home.
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
