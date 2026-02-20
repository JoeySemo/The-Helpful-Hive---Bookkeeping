import Image from 'next/image';
import Link from 'next/link';
import FlyingBees from '@/components/FlyingBees';

export const metadata = {
    title: "Monthly Bookkeeping | The Helpful Hive",
    description: "Complete monthly financial management — bank reconciliation, AP/AR, financial statements, and unlimited support.",
};

export default function MonthlyBookkeepingPage() {
    return (
        <div className="min-h-screen bg-[#FFF8E7]">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A5D66]/15 via-[#FFF8E7] to-[#4A5D66]/10" />
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-mb" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#4A5D66" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-mb)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="inline-block px-4 py-2 bg-[#4A5D66]/15 rounded-full mb-6 backdrop-blur-sm">
                                <span className="text-[#3C3C3C] font-[family-name:var(--font-montserrat)] text-sm font-medium">
                                    Bee Balanced &middot; Bookkeeping Services
                                </span>
                            </div>
                            <h1 className="font-[family-name:var(--font-lora)] text-5xl md:text-7xl font-bold text-[#3C3C3C] mb-4">
                                Monthly Bookkeeping
                            </h1>
                            <p className="font-[family-name:var(--font-allura)] text-3xl md:text-4xl text-[#4A5D66] mb-6">
                                Accurate records, zero headaches.
                            </p>
                            <p className="font-[family-name:var(--font-montserrat)] text-lg text-[#525252] mb-8 leading-relaxed max-w-lg">
                                Complete monthly financial management so you always know exactly where your business stands. We handle the numbers while you focus on growth.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Get Started
                            </Link>
                        </div>

                        <div className="order-1 md:order-2 flex justify-center">
                            <FlyingBees accentColor="#4A5D66" bees={[
                                { src: '/bee-11-calculator.png', alt: 'Calculator Bee', flyClass: 'animate-fly-1', size: 'w-12 h-12 md:w-16 md:h-16' },
                                { src: '/bee-10-briefcase.png', alt: 'Briefcase Bee', flyClass: 'animate-fly-7', size: 'w-11 h-11 md:w-15 md:h-15' },
                            ]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tagline Banner */}
            <section className="py-6 px-4 bg-[#4A5D66]/10 border-y border-[#4A5D66]/20">
                <p className="font-[family-name:var(--font-lora)] text-lg md:text-xl text-[#3C3C3C] text-center font-medium italic max-w-3xl mx-auto">
                    &ldquo;We handle the <span className="text-[#4A5D66]">numbers</span> so you can focus on your business&rdquo;
                </p>
            </section>

            {/* What's Included */}
            <section className="py-14 md:py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl border-2 border-[#4A5D66]/30 overflow-hidden shadow-sm">
                        <div className="bg-[#4A5D66]/15 px-8 py-6 border-b border-[#4A5D66]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image src="/bee-11-calculator.png" alt="Bookkeeping Bee" fill className="object-contain" />
                                </div>
                                <div>
                                    <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C]">
                                        What&apos;s Included
                                    </h2>
                                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">Full-Service Monthly Package</p>
                                </div>
                            </div>
                            <div className="bg-[#4A5D66] text-white px-5 py-2.5 rounded-full font-[family-name:var(--font-montserrat)] font-bold text-lg self-start sm:self-auto">
                                $400/month
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: '🏦', name: 'Bank Reconciliation', desc: 'Monthly reconciliation of all accounts to ensure accuracy.' },
                                    { icon: '📋', name: 'AP/AR Management', desc: 'Track invoices, payments, and outstanding balances.' },
                                    { icon: '📊', name: 'Financial Statements', desc: 'Monthly P&L, balance sheet, and cash flow reports.' },
                                    { icon: '🏷️', name: 'Transaction Categorization', desc: 'Properly categorize every transaction for clean records.' },
                                    { icon: '💳', name: 'Expense Tracking', desc: 'Monitor and categorize all business expenses.' },
                                    { icon: '📈', name: 'Monthly Reporting', desc: 'Clear, actionable reports for better decision-making.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#FFF8E7] border border-[#4A5D66]/15">
                                        <span className="text-2xl mt-0.5">{item.icon}</span>
                                        <div>
                                            <h3 className="font-[family-name:var(--font-lora)] text-lg font-semibold text-[#3C3C3C]">{item.name}</h3>
                                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-14 md:py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-[#3C3C3C] text-center mb-10">
                        Our Process
                    </h2>
                    <div className="grid sm:grid-cols-5 gap-4">
                        {[
                            { step: '1', title: 'Data Gathering', desc: 'We collect bank statements, invoices, and receipts.' },
                            { step: '2', title: 'Reconciliation', desc: 'Accounts are reconciled for accuracy.' },
                            { step: '3', title: 'Categorization', desc: 'Transactions are properly categorized.' },
                            { step: '4', title: 'Statement Prep', desc: 'Financial statements generated monthly.' },
                            { step: '5', title: 'Review', desc: 'We analyze trends and provide insights.' },
                        ].map((item, i) => (
                            <div key={i} className="text-center p-5 rounded-2xl bg-[#FFF8E7] border border-[#4A5D66]/15">
                                <div className="w-10 h-10 bg-[#4A5D66] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-[family-name:var(--font-montserrat)] font-bold">
                                    {item.step}
                                </div>
                                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C] mb-1">{item.title}</h3>
                                <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#525252]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who This Is For */}
            <section className="py-14 md:py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl border-2 border-[#4A5D66]/30 overflow-hidden shadow-sm p-8">
                        <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C] mb-4">
                            Who This Is For
                        </h2>
                        <p className="font-[family-name:var(--font-montserrat)] text-[#525252] mb-6">
                            Ideal for small business owners who want accurate financial records without the time investment.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {[
                                'Always know your true financial position',
                                'Prepare for taxes with organized records',
                                'Make informed business decisions',
                                'Reduce audit risk with accurate records',
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF8E7] border border-[#4A5D66]/15">
                                    <span className="text-[#4A5D66] text-lg">✓</span>
                                    <span className="font-[family-name:var(--font-montserrat)] text-sm text-[#3C3C3C]">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Note */}
            <section className="py-6 px-6 bg-[#4A5D66]/10 border-y border-[#4A5D66]/20">
                <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] text-center italic max-w-3xl mx-auto">
                    Pricing may vary based on business size and complexity. Contact us for a personalized quote.
                </p>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-[#3C3C3C] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-cta-mb" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#4A5D66" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-cta-mb)" />
                    </svg>
                </div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to get your books <span className="text-[#E2C16B]">in order</span>?
                    </h2>
                    <p className="font-[family-name:var(--font-montserrat)] text-white/70 mb-8 text-lg">
                        Schedule a free consultation and let us show you how stress-free bookkeeping can be.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Schedule a Consultation
                        </Link>
                        <a
                            href="tel:+13145267240"
                            className="inline-block px-8 py-4 bg-transparent border-2 border-white/30 text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-white/10 transition-all"
                        >
                            <span className="block leading-tight">(314) 526-7240</span>
                            <span className="block text-sm font-normal mt-0.5 opacity-90 leading-tight tracking-normal">Call or Text</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
