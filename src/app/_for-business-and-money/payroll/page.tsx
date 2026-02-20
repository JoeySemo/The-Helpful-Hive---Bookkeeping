import Image from 'next/image';
import Link from 'next/link';
import FlyingBees from '@/components/FlyingBees';

export const metadata = {
    title: "Full-Service Payroll | The Helpful Hive",
    description: "Hassle-free payroll processing — direct deposits, tax filings, W-2 & 1099 prep, and compliance reporting.",
};

export default function PayrollPage() {
    return (
        <div className="min-h-screen bg-[#FFF8E7]">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7B6B8D]/15 via-[#FFF8E7] to-[#7B6B8D]/10" />
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-pr" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#7B6B8D" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-pr)" />
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="inline-block px-4 py-2 bg-[#7B6B8D]/15 rounded-full mb-6 backdrop-blur-sm">
                                <span className="text-[#3C3C3C] font-[family-name:var(--font-montserrat)] text-sm font-medium">
                                    Bee Balanced &middot; Payroll Services
                                </span>
                            </div>
                            <h1 className="font-[family-name:var(--font-lora)] text-5xl md:text-7xl font-bold text-[#3C3C3C] mb-4">
                                Full-Service Payroll
                            </h1>
                            <p className="font-[family-name:var(--font-allura)] text-3xl md:text-4xl text-[#7B6B8D] mb-6">
                                Hassle-free payroll, every time.
                            </p>
                            <p className="font-[family-name:var(--font-montserrat)] text-lg text-[#525252] mb-8 leading-relaxed max-w-lg">
                                From direct deposits to tax filings, we handle every detail so your team gets paid accurately and on time — every single pay period.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                            >
                                Get Started
                            </Link>
                        </div>

                        <div className="order-1 md:order-2 flex justify-center">
                            <FlyingBees accentColor="#7B6B8D" bees={[
                                { src: '/bee-10-briefcase.png', alt: 'Briefcase Bee', flyClass: 'animate-fly-3', size: 'w-12 h-12 md:w-16 md:h-16' },
                                { src: '/bee-11-calculator.png', alt: 'Calculator Bee', flyClass: 'animate-fly-9', size: 'w-11 h-11 md:w-15 md:h-15' },
                            ]} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Tagline Banner */}
            <section className="py-6 px-4 bg-[#7B6B8D]/10 border-y border-[#7B6B8D]/20">
                <p className="font-[family-name:var(--font-lora)] text-lg md:text-xl text-[#3C3C3C] text-center font-medium italic max-w-3xl mx-auto">
                    &ldquo;Your team gets paid on time, <span className="text-[#7B6B8D]">every time</span>&rdquo;
                </p>
            </section>

            {/* What's Included */}
            <section className="py-14 md:py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl border-2 border-[#7B6B8D]/30 overflow-hidden shadow-sm">
                        <div className="bg-[#7B6B8D]/15 px-8 py-6 border-b border-[#7B6B8D]/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 flex-shrink-0">
                                    <Image src="/bee-10-briefcase.png" alt="Payroll Bee" fill className="object-contain" />
                                </div>
                                <div>
                                    <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C]">
                                        What&apos;s Included
                                    </h2>
                                    <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252]">Full-Service Payroll Package</p>
                                </div>
                            </div>
                            <div className="bg-[#7B6B8D] text-white px-5 py-2.5 rounded-full font-[family-name:var(--font-montserrat)] font-bold text-lg self-start sm:self-auto">
                                $500/month
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: '💰', name: 'Direct Deposit & Checks', desc: 'Flexible payment options for all your employees.' },
                                    { icon: '📝', name: 'Tax Filing & Compliance', desc: 'Federal and state tax submissions, handled for you.' },
                                    { icon: '📄', name: 'W-2 & 1099 Preparation', desc: 'Year-end tax documents prepared accurately and on time.' },
                                    { icon: '🏛️', name: 'Payroll Tax Deposits', desc: 'Timely tax deposit management to avoid penalties.' },
                                    { icon: '💼', name: 'Employee Deductions', desc: 'Benefits, garnishments, retirement contributions, and more.' },
                                    { icon: '📊', name: 'Quarterly Reporting', desc: 'Regular compliance reports to keep you audit-ready.' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#FFF8E7] border border-[#7B6B8D]/15">
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
                            { step: '1', title: 'Setup', desc: 'Gather employee info and payroll preferences.' },
                            { step: '2', title: 'Data Collection', desc: 'Hours, salaries, deductions compiled.' },
                            { step: '3', title: 'Processing', desc: 'Payroll processed and taxes calculated.' },
                            { step: '4', title: 'Distribution', desc: 'Payments issued via deposit or check.' },
                            { step: '5', title: 'Reporting', desc: 'Tax filings and reports submitted.' },
                        ].map((item, i) => (
                            <div key={i} className="text-center p-5 rounded-2xl bg-[#FFF8E7] border border-[#7B6B8D]/15">
                                <div className="w-10 h-10 bg-[#7B6B8D] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-[family-name:var(--font-montserrat)] font-bold">
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
                    <div className="bg-white rounded-3xl border-2 border-[#7B6B8D]/30 overflow-hidden shadow-sm p-8">
                        <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-[#3C3C3C] mb-4">
                            Who This Is For
                        </h2>
                        <p className="font-[family-name:var(--font-montserrat)] text-[#525252] mb-6">
                            Perfect for businesses with 1-50 employees who want to eliminate payroll headaches and ensure compliance.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {[
                                'Save 5-10 hours per month on payroll tasks',
                                'Reduce errors and tax compliance risks',
                                'Improve employee satisfaction',
                                'Stay compliant with all regulations',
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#FFF8E7] border border-[#7B6B8D]/15">
                                    <span className="text-[#7B6B8D] text-lg">✓</span>
                                    <span className="font-[family-name:var(--font-montserrat)] text-sm text-[#3C3C3C]">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-[#3C3C3C] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-cta-pr" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#7B6B8D" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-cta-pr)" />
                    </svg>
                </div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to simplify <span className="text-[#E2C16B]">payroll</span>?
                    </h2>
                    <p className="font-[family-name:var(--font-montserrat)] text-white/70 mb-8 text-lg">
                        Let us handle your payroll so you can focus on growing your business.
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
