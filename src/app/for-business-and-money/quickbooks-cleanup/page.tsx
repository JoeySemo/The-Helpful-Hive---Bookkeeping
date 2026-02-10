import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "QuickBooks Cleanup | The Helpful Hive",
    description: "Get your QuickBooks back on track — error correction, chart of accounts cleanup, historical catch-up, and training.",
};

export default function QuickBooksCleanupPage() {
    return (
        <div className="min-h-screen bg-[#FFF8E7]">
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C17A5B]/15 via-[#FFF8E7] to-[#C17A5B]/10" />
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-qb" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#C17A5B" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-qb)" />
                    </svg>
                </div>
                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="inline-block px-4 py-2 bg-[#C17A5B]/15 rounded-full mb-6 backdrop-blur-sm">
                                <span className="text-[#3C3C3C] font-[family-name:var(--font-montserrat)] text-sm font-medium">Bee Balanced &middot; Cleanup Services</span>
                            </div>
                            <h1 className="font-[family-name:var(--font-lora)] text-5xl md:text-7xl font-bold text-[#3C3C3C] mb-4">QuickBooks Cleanup</h1>
                            <p className="font-[family-name:var(--font-allura)] text-3xl md:text-4xl text-[#C17A5B] mb-6">Get your books back on track.</p>
                            <p className="font-[family-name:var(--font-montserrat)] text-lg text-[#525252] mb-8 leading-relaxed max-w-lg">
                                Whether it&apos;s months of backlog or years of disorganized records, we&apos;ll fix errors, reconcile accounts, and set you up for clean books going forward.
                            </p>
                            <Link href="/contact" className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5">
                                Get a Quote
                            </Link>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center">
                            <div className="relative w-72 h-72 md:w-96 md:h-96">
                                <div className="absolute inset-4 bg-[#C17A5B]/15 rounded-full blur-2xl" />
                                <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mt-8 md:mt-12">
                                    <div className="w-full h-full rounded-full border-4 border-[#C17A5B]/50 shadow-2xl overflow-hidden bg-white animate-float">
                                        <Image src="/official-logo-circular.jpg" alt="The Helpful Hive" fill className="object-cover" priority />
                                    </div>
                                </div>
                                <div className="absolute -top-8 left-1/4 w-20 h-20 md:w-24 md:h-24 animate-float">
                                    <Image src="/bee-5-clipboard.png" alt="Clipboard Bee" fill className="object-contain drop-shadow-lg" />
                                </div>
                                <div className="absolute top-1/2 -right-10 md:-right-14 -translate-y-1/2 w-[72px] h-[72px] md:w-[88px] md:h-[88px] animate-float" style={{ animationDelay: '0.7s' }}>
                                    <Image src="/bee-11-calculator.png" alt="Calculator Bee" fill className="object-contain drop-shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 px-4 bg-[#C17A5B]/10 border-y border-[#C17A5B]/20">
                <p className="font-[family-name:var(--font-lora)] text-lg md:text-xl text-[#3C3C3C] text-center font-medium italic max-w-3xl mx-auto">
                    &ldquo;A fresh start for your <span className="text-[#C17A5B]">financial records</span>&rdquo;
                </p>
            </section>

            <section className="py-14 md:py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl border-2 border-[#C17A5B]/30 overflow-hidden shadow-sm">
                        <div className="bg-[#C17A5B]/15 px-8 py-6 border-b border-[#C17A5B]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image src="/bee-5-clipboard.png" alt="Cleanup Bee" fill className="object-contain" />
                                </div>
                                <div>
                                    <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C]">What&apos;s Included</h2>
                                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">One-Time Cleanup Project</p>
                                </div>
                            </div>
                            <div className="bg-[#C17A5B] text-white px-5 py-2.5 rounded-full font-[family-name:var(--font-montserrat)] font-bold text-lg self-start sm:self-auto">$500+</div>
                        </div>
                        <div className="p-8">
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] mb-6">Pricing varies based on scope and complexity. We provide a detailed quote after an initial assessment.</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: '🔧', name: 'Error Correction', desc: 'Fix mistakes, duplicates, and discrepancies.' },
                                    { icon: '📂', name: 'Chart of Accounts', desc: 'Reorganize for clarity and proper reporting.' },
                                    { icon: '📅', name: 'Historical Catch-Up', desc: 'Reconcile months or years of backlog data.' },
                                    { icon: '🔍', name: 'Transaction Review', desc: 'Review and correct every transaction.' },
                                    { icon: '⚙️', name: 'System Optimization', desc: 'Set up QuickBooks for efficient ongoing use.' },
                                    { icon: '🎓', name: 'Training Included', desc: 'Train your team on best practices.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#FFF8E7] border border-[#C17A5B]/15">
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

            <section className="py-14 md:py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-[#3C3C3C] text-center mb-10">Our Process</h2>
                    <div className="grid sm:grid-cols-5 gap-4">
                        {[
                            { step: '1', title: 'Assessment', desc: 'Audit your QB file for issues.' },
                            { step: '2', title: 'Planning', desc: 'Create cleanup plan & timeline.' },
                            { step: '3', title: 'Correction', desc: 'Fix errors, reconcile accounts.' },
                            { step: '4', title: 'Organization', desc: 'Reorganize chart of accounts.' },
                            { step: '5', title: 'Handoff', desc: 'Train your team on best practices.' },
                        ].map((item, i) => (
                            <div key={i} className="text-center p-5 rounded-2xl bg-[#FFF8E7] border border-[#C17A5B]/15">
                                <div className="w-10 h-10 bg-[#C17A5B] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-[family-name:var(--font-montserrat)] font-bold">{item.step}</div>
                                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C] mb-1">{item.title}</h3>
                                <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#525252]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl border-2 border-[#C17A5B]/30 overflow-hidden shadow-sm p-8">
                        <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C] mb-4">Who This Is For</h2>
                        <p className="font-[family-name:var(--font-montserrat)] text-[#525252] mb-6">Best for businesses with disorganized QuickBooks files, months of unreconciled data, or chart of accounts confusion.</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {['Accurate financial reporting', 'Reliable data for tax prep', 'Reduced time searching for info', 'Better organized accounting'].map((b, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF8E7] border border-[#C17A5B]/15">
                                    <span className="text-[#C17A5B] text-lg">✓</span>
                                    <span className="font-[family-name:var(--font-montserrat)] text-sm text-[#3C3C3C]">{b}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-[#3C3C3C] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-cta-qb" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#C17A5B" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-cta-qb)" />
                    </svg>
                </div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-white mb-4">Ready for a <span className="text-[#E2C16B]">fresh start</span>?</h2>
                    <p className="font-[family-name:var(--font-montserrat)] text-white/70 mb-8 text-lg">Let us clean up your QuickBooks so you can move forward with confidence.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5">Get a Free Assessment</Link>
                        <a href="tel:+13145267240" className="inline-block px-8 py-4 bg-transparent border-2 border-white/30 text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-white/10 transition-all">Call (314) 526-7240</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
