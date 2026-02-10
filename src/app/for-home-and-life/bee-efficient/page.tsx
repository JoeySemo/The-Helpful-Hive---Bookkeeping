import Image from 'next/image';
import Link from 'next/link';
import FlyingBees from '@/components/FlyingBees';

export const metadata = {
    title: "Bee Efficient | The Helpful Hive",
    description: "Helping busy families and small businesses get it done. Errands, admin tasks, and back-office support.",
};

export default function BeeEfficientPage() {
    return (
        <div className="min-h-screen bg-[#FFF8E7]">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4A574]/15 via-[#FFF8E7] to-[#D4A574]/10" />
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-be" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#D4A574" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-be)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="inline-block px-4 py-2 bg-[#D4A574]/25 rounded-full mb-6 backdrop-blur-sm">
                                <span className="text-[#3C3C3C] font-[family-name:var(--font-montserrat)] text-sm font-medium">
                                    The &ldquo;Bee Efficient&rdquo; Service Menu
                                </span>
                            </div>
                            <h1 className="font-[family-name:var(--font-lora)] text-5xl md:text-7xl font-bold text-[#3C3C3C] mb-4">
                                Bee Efficient
                            </h1>
                            <p className="font-[family-name:var(--font-allura)] text-3xl md:text-4xl text-[#D4A574] mb-6">
                                We handle the busy work, so you don&apos;t have to.
                            </p>
                            <p className="font-[family-name:var(--font-montserrat)] text-lg text-[#525252] mb-8 leading-relaxed max-w-lg">
                                From errand running and appointment scheduling to data entry and marketing assistance — we help busy families and small businesses get it all done.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Book a Service
                            </Link>
                        </div>

                        <div className="order-1 md:order-2 flex justify-center">
                            <FlyingBees accentColor="#D4A574" bees={[
                                { src: '/bee-10-briefcase.png', alt: 'Briefcase Bee', flyClass: 'animate-fly-2', size: 'w-10 h-10 md:w-14 md:h-14' },
                                { src: '/bee-5-clipboard.png', alt: 'Clipboard Bee', flyClass: 'animate-fly-6', size: 'w-11 h-11 md:w-15 md:h-15' },
                                { src: '/bee-8-calendar.png', alt: 'Calendar Bee', flyClass: 'animate-fly-10', size: 'w-10 h-10 md:w-14 md:h-14' },
                            ]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tagline Banner */}
            <section className="py-6 px-4 bg-[#D4A574]/10 border-y border-[#D4A574]/20">
                <p className="font-[family-name:var(--font-lora)] text-lg md:text-xl text-[#3C3C3C] text-center font-medium italic max-w-3xl mx-auto">
                    &ldquo;Helping busy families and small businesses <span className="text-[#D4A574]">get it done</span>&rdquo;
                </p>
            </section>

            {/* Errands & Admin Services */}
            <section className="py-14 md:py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl border-2 border-[#D4A574]/30 overflow-hidden shadow-sm">
                        <div className="bg-[#D4A574]/15 px-8 py-6 border-b border-[#D4A574]/20">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image src="/bee-10-briefcase.png" alt="Admin Bee" fill className="object-contain" />
                                </div>
                                <div>
                                    <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C]">
                                        Errands & Admin
                                    </h2>
                                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">We run the errands so you can run your life</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: '📬', name: 'Errand Running', desc: 'Post office, returns, pickup/drop-off — we handle it all.' },
                                    { icon: '📅', name: 'Appointment Scheduling', desc: 'We manage your calendar so nothing falls through the cracks.' },
                                    { icon: '🚪', name: 'Waiting-in-Line', desc: 'We stand in for delivery, repair, or service windows so you don\'t miss work.' },
                                    { icon: '💻', name: 'Data Entry & Office Tasks', desc: 'Spreadsheets, filing, digital organization — the admin you\'ve been putting off.' },
                                    { icon: '🎉', name: 'Event Setup & Coordination', desc: 'From setup to cleanup, we help your events run smoothly.' },
                                    { icon: '📱', name: 'Marketing Assistance', desc: 'Social posts, flyers, email templates — we keep your brand buzzing.' },
                                ].map((service, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#FFF8E7] border border-[#D4A574]/15 hover:border-[#D4A574] hover:shadow-md transition-all">
                                        <span className="text-2xl mt-0.5">{service.icon}</span>
                                        <div>
                                            <h3 className="font-[family-name:var(--font-lora)] text-lg font-semibold text-[#3C3C3C]">{service.name}</h3>
                                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">{service.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bookkeeping & Money Admin */}
            <section className="py-14 md:py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-3xl border-2 border-[#D4A574]/30 overflow-hidden bg-[#FFF8E7]">
                        <div className="bg-[#D4A574]/15 px-8 py-6 border-b border-[#D4A574]/20">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image src="/bee-11-calculator.png" alt="Calculator Bee" fill className="object-contain" />
                                </div>
                                <div>
                                    <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C]">
                                        Bookkeeping & Money Admin
                                    </h2>
                                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">The same calm, judgment-free help — for your books</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: '📒', name: 'Monthly Bookkeeping', desc: 'Transaction categorization, reconciliations, and basic reports for small businesses.' },
                                    { icon: '🏠', name: 'Personal Finance Organizing', desc: 'Household finances organizing and categorization for clarity.' },
                                    { icon: '🧾', name: 'Receipt & Expense Tracking', desc: 'Workflows to track receipts and expenses so nothing gets lost.' },
                                    { icon: '📄', name: 'Invoicing & A/R Follow-up', desc: 'Simple invoicing and accounts receivable follow-up.' },
                                    { icon: '🧹', name: 'Bookkeeping Clean-up', desc: 'One-time projects to untangle messy books and get you caught up.' },
                                ].map((service, i) => (
                                    <div key={i} className="bg-white rounded-xl p-4 border border-[#D4A574]/20 hover:border-[#D4A574] hover:shadow-md transition-all">
                                        <span className="text-2xl mb-2 block">{service.icon}</span>
                                        <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C] mb-1">{service.name}</h3>
                                        <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#525252]">{service.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Note */}
            <section className="py-6 px-6 bg-[#D4A574]/10 border-y border-[#D4A574]/20">
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] text-center italic max-w-3xl mx-auto">
                    Pricing varies by task and scope. Contact us for a custom quote tailored to your needs.
                </p>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-[#3C3C3C] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-cta-be" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#D4A574" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-cta-be)" />
                    </svg>
                </div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to <span className="text-[#D4A574]">Bee Efficient</span>?
                    </h2>
                    <p className="font-[family-name:var(--font-montserrat)] text-white/70 mb-8 text-lg">
                        Let us handle the busy work so you can focus on what matters most.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Get a Quote
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
