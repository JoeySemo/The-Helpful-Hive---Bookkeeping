import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "Bee Connected | The Helpful Hive",
    description: "Uniting teams and events to keep the hive humming together. Coordination and community support.",
};

export default function BeeConnectedPage() {
    const services = [
        { name: "Realtor Assistance", description: "Sign placement, home prep for showings, and marketing support", icon: "🏡" },
        { name: "Marketing Assistance", description: "Social posts, flyers, and email templates", icon: "📣" },
        { name: "Event & Fundraiser Coordination", description: "Planning and setup for memorable occasions", icon: "🎉" },
        { name: "Team & Volunteer Management", description: "Scheduling, communications, and recruitment", icon: "👥" },
        { name: "Holiday Decorating", description: "Festive setups and seasonal transitions", icon: "🎄" },
        { name: "Community Volunteer Support", description: "Help for local organizations and projects", icon: "💛" },
    ];

    return (
        <div className="min-h-screen bg-[#FFF8E7]">
            {/* Hero Section - Split Layout */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7B6B8D]/15 via-[#FFF8E7] to-[#7B6B8D]/10" />

                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-bc" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#7B6B8D" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-bc)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="inline-block px-4 py-2 bg-[#7B6B8D]/25 rounded-full mb-6 backdrop-blur-sm">
                                <span className="text-[#3C3C3C] font-[family-name:var(--font-montserrat)] text-sm font-medium">
                                    Coordination & Community Support
                                </span>
                            </div>

                            <h1 className="font-[family-name:var(--font-lora)] text-5xl md:text-7xl font-bold text-[#3C3C3C] mb-4">
                                Bee Connected
                            </h1>

                            <p className="font-[family-name:var(--font-allura)] text-3xl md:text-4xl text-[#7B6B8D] mb-6">
                                Uniting teams and events to keep the hive humming.
                            </p>

                            <p className="font-[family-name:var(--font-montserrat)] text-lg text-[#525252] mb-8 leading-relaxed max-w-lg">
                                Rooted in the Crossroads, ready to help. We support your events, teams, and community initiatives with hands-on coordination and care.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Get Connected
                            </Link>
                        </div>

                        {/* Right - Logo + Bee Cluster */}
                        <div className="order-1 md:order-2 flex justify-center">
                            <div className="relative w-72 h-72 md:w-96 md:h-96">
                                <div className="absolute inset-4 bg-[#7B6B8D]/15 rounded-full blur-2xl" />

                                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mt-8 md:mt-12">
                                    <div className="w-full h-full rounded-full border-4 border-[#7B6B8D]/50 shadow-2xl overflow-hidden bg-white animate-float">
                                        <Image src="/logo-circular.jpg" alt="The Helpful Hive" fill className="object-cover" priority />
                                    </div>
                                </div>

                                {/* Orbiting Bees */}
                                <div className="absolute -top-2 left-1/4 w-20 h-20 md:w-24 md:h-24 animate-float" style={{ animationDelay: '0s' }}>
                                    <Image src="/bee-7-megaphone.png" alt="Megaphone Bee" fill className="object-contain drop-shadow-lg" />
                                </div>
                                <div className="absolute top-1/3 -right-4 md:-right-8 w-[72px] h-[72px] md:w-[88px] md:h-[88px] animate-float" style={{ animationDelay: '1s' }}>
                                    <Image src="/bee-8-calendar.png" alt="Calendar Bee" fill className="object-contain drop-shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tagline Banner */}
            <section className="py-8 px-4 bg-[#7B6B8D]/10 border-y border-[#7B6B8D]/20">
                <p className="font-[family-name:var(--font-lora)] text-xl md:text-2xl text-[#3C3C3C] text-center font-medium italic max-w-3xl mx-auto">
                    &ldquo;Uniting teams and events to keep the hive <span className="text-[#7B6B8D]">humming together</span>&rdquo;
                </p>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-3">
                            Our Coordination Services
                        </h2>
                        <p className="font-[family-name:var(--font-montserrat)] text-[#525252]">
                            Building connections and bringing communities together
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-6 border border-[#7B6B8D]/20 hover:border-[#7B6B8D] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
                        <pattern id="honeycomb-cta-bc" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#7B6B8D" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-cta-bc)" />
                    </svg>
                </div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to strengthen your <span className="text-[#7B6B8D]">connections</span>?
                    </h2>
                    <p className="font-[family-name:var(--font-montserrat)] text-white/70 mb-8 text-lg">
                        Let us help coordinate your next event or support your team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Get Connected
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
