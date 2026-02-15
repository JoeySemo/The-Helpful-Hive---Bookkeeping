import Image from 'next/image';
import Link from 'next/link';
import FlyingBees from '@/components/FlyingBees';

export const metadata = {
    title: "CFO & Advisory | The Helpful Hive",
    description: "Strategic financial guidance — cash flow management, budgeting, forecasting, and growth strategy for your business.",
};

export default function CFOAdvisoryPage() {
    return (
        <div className="min-h-screen bg-[#FFF8E7]">
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#98B4AC]/15 via-[#FFF8E7] to-[#98B4AC]/10" />
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-cfo" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#98B4AC" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-cfo)" />
                    </svg>
                </div>
                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="inline-block px-4 py-2 bg-[#98B4AC]/15 rounded-full mb-6 backdrop-blur-sm">
                                <span className="text-[#3C3C3C] font-[family-name:var(--font-montserrat)] text-sm font-medium">Bee Balanced &middot; Advisory Services</span>
                            </div>
                            <h1 className="font-[family-name:var(--font-lora)] text-5xl md:text-7xl font-bold text-[#3C3C3C] mb-4">CFO & Advisory</h1>
                            <p className="font-[family-name:var(--font-allura)] text-3xl md:text-4xl text-[#98B4AC] mb-6">Strategic guidance for growing businesses.</p>
                            <p className="font-[family-name:var(--font-montserrat)] text-lg text-[#525252] mb-8 leading-relaxed max-w-lg">
                                Get expert financial advice to guide your business decisions, optimize profitability, and plan for sustainable growth.
                            </p>
                            <Link href="/contact" className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5">
                                Schedule a Consultation
                            </Link>
                        </div>
                        <div className="order-1 md:order-2 flex justify-center">
                            <FlyingBees accentColor="#98B4AC" bees={[
                                { src: '/bee-10-briefcase.png', alt: 'Briefcase Bee', flyClass: 'animate-fly-2', size: 'w-12 h-12 md:w-16 md:h-16' },
                                { src: '/bee-11-calculator.png', alt: 'Calculator Bee', flyClass: 'animate-fly-8', size: 'w-11 h-11 md:w-15 md:h-15' },
                            ]} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 px-4 bg-[#98B4AC]/10 border-y border-[#98B4AC]/20">
                <p className="font-[family-name:var(--font-lora)] text-lg md:text-xl text-[#3C3C3C] text-center font-medium italic max-w-3xl mx-auto">
                    &ldquo;The strategic partner your <span className="text-[#98B4AC]">business deserves</span>&rdquo;
                </p>
            </section>

            <section className="py-14 md:py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl border-2 border-[#98B4AC]/30 overflow-hidden shadow-sm">
                        <div className="bg-[#98B4AC]/15 px-8 py-6 border-b border-[#98B4AC]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image src="/bee-10-briefcase.png" alt="Advisory Bee" fill className="object-contain" />
                                </div>
                                <div>
                                    <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C]">What&apos;s Included</h2>
                                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">Monthly Advisory Package</p>
                                </div>
                            </div>
                            <div className="bg-[#98B4AC] text-white px-5 py-2.5 rounded-full font-[family-name:var(--font-montserrat)] font-bold text-lg self-start sm:self-auto">$750/month</div>
                        </div>
                        <div className="p-8">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: '💵', name: 'Cash Flow Management', desc: 'Optimize working capital and forecast cash needs.' },
                                    { icon: '📋', name: 'Budgeting & Forecasting', desc: 'Plan for growth with data-driven projections.' },
                                    { icon: '🎯', name: 'Strategic Planning', desc: 'Develop long-term financial strategy aligned with goals.' },
                                    { icon: '📊', name: 'Financial Analysis', desc: 'Deep dive into your numbers for actionable insights.' },
                                    { icon: '📈', name: 'Performance Metrics', desc: 'Track KPIs that actually matter for your business.' },
                                    { icon: '🚀', name: 'Growth Strategy', desc: 'Scale your business efficiently and sustainably.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#FFF8E7] border border-[#98B4AC]/15">
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
                            { step: '1', title: 'Discovery', desc: 'Understand your goals and challenges.' },
                            { step: '2', title: 'Analysis', desc: 'Review performance, find opportunities.' },
                            { step: '3', title: 'Planning', desc: 'Develop budgets and growth strategies.' },
                            { step: '4', title: 'Implementation', desc: 'Advise on executing financial plans.' },
                            { step: '5', title: 'Monitoring', desc: 'Track progress and adjust as needed.' },
                        ].map((item, i) => (
                            <div key={i} className="text-center p-5 rounded-2xl bg-[#FFF8E7] border border-[#98B4AC]/15">
                                <div className="w-10 h-10 bg-[#98B4AC] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-[family-name:var(--font-montserrat)] font-bold">{item.step}</div>
                                <h3 className="font-[family-name:var(--font-lora)] font-semibold text-[#3C3C3C] mb-1">{item.title}</h3>
                                <p className="font-[family-name:var(--font-montserrat)] text-xs text-[#525252]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl border-2 border-[#98B4AC]/30 overflow-hidden shadow-sm p-8">
                        <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C] mb-4">Who This Is For</h2>
                        <p className="font-[family-name:var(--font-montserrat)] text-[#525252] mb-6">Perfect for growing businesses that want strategic financial guidance to scale efficiently.</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {['Understand profitability and cash flow', 'Plan for growth with confidence', 'Make data-driven decisions', 'Optimize working capital'].map((b, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF8E7] border border-[#98B4AC]/15">
                                    <span className="text-[#98B4AC] text-lg">✓</span>
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
                        <pattern id="honeycomb-cta-cfo" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#98B4AC" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-cta-cfo)" />
                    </svg>
                </div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-white mb-4">Ready to <span className="text-[#E2C16B]">grow strategically</span>?</h2>
                    <p className="font-[family-name:var(--font-montserrat)] text-white/70 mb-8 text-lg">Get expert financial guidance to take your business to the next level.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5">Schedule a Consultation</Link>
                        <a href="tel:+13145267240" className="inline-block px-8 py-4 bg-transparent border-2 border-white/30 text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-white/10 transition-all">Call (314) 526-7240</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
