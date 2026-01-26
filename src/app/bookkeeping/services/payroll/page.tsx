import Link from 'next/link';

export default function PayrollPage() {
    const included = [
        { title: 'Direct Deposit & Checks', description: 'Flexible payment options for employees' },
        { title: 'Tax Filing', description: 'Federal and state tax submissions' },
        { title: 'W-2 & 1099 Prep', description: 'Year-end tax document preparation' },
        { title: 'Payroll Tax Deposits', description: 'Timely tax deposit management' },
        { title: 'Employee Deductions', description: 'Benefits, garnishments, and more' },
        { title: 'Compliance & Reporting', description: 'Stay compliant with regulations' }
    ];

    const process = [
        { step: '1', title: 'Initial Setup', description: 'We gather your employee information and payroll preferences' },
        { step: '2', title: 'Data Collection', description: 'Hours, salaries, and deductions are compiled' },
        { step: '3', title: 'Processing', description: 'We process payroll and calculate taxes accurately' },
        { step: '4', title: 'Distribution', description: 'Payments are issued via direct deposit or check' },
        { step: '5', title: 'Reporting', description: 'Tax filings and reports are submitted on time' }
    ];

    const benefits = [
        'Save 5-10 hours per month on payroll tasks',
        'Reduce errors and tax compliance risks',
        'Improve employee satisfaction with accurate, timely payments',
        'Stay compliant with federal and state regulations'
    ];

    return (
        <main className="min-h-screen bg-[#f8f9fa]">
            {/* Hero */}
            <div className="bg-[#E2C16B] py-12 px-8 text-center">
                <Link
                    href="/for-business-and-money"
                    className="inline-block text-[#1f2937] text-xl font-medium mb-4 hover:translate-x-[-4px] transition-transform"
                >
                    ← Back to Bookkeeping
                </Link>
                <h1 className="font-display text-4xl md:text-5xl font-normal text-[#1f2937] mb-3 italic">
                    Simplify Your Payroll with Expert Processing
                </h1>
                <p className="text-lg text-[#374151] max-w-2xl mx-auto">
                    Let us handle your payroll so you can focus on growing your business.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
                {/* What's Included */}
                <section className="mb-12">
                    <h2 className="font-display text-3xl font-normal text-[#1f2937] mb-6 italic">
                        What's Included
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {included.map((item, i) => (
                            <div key={i} className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                                <h3 className="text-base font-semibold text-[#1f2937] mb-1">{item.title}</h3>
                                <p className="text-sm text-gray-500 m-0">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Process */}
                <section className="mb-12">
                    <h2 className="font-display text-3xl font-normal text-[#1f2937] mb-6 italic">
                        Our Process
                    </h2>
                    <div className="flex flex-col md:flex-row gap-4">
                        {process.map((item, i) => (
                            <div key={i} className="flex-1 bg-white p-5 rounded-lg border border-gray-200 text-center shadow-sm">
                                <div className="w-8 h-8 bg-[#E2C16B] text-white rounded-full flex items-center justify-center mx-auto mb-3 font-semibold">
                                    {item.step}
                                </div>
                                <h3 className="text-[0.95rem] font-semibold text-[#1f2937] mb-1">{item.title}</h3>
                                <p className="text-[0.85rem] text-gray-500 m-0">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="mb-12">
                    <h2 className="font-display text-3xl font-normal text-[#1f2937] mb-6 italic">
                        Key Benefits
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                <span className="text-[#E2C16B] text-xl">✓</span>
                                <span className="text-[#374151]">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing & Fit */}
                <section className="bg-white p-8 rounded-xl border border-gray-200 mb-12 shadow-md">
                    <h2 className="font-display text-3xl font-normal text-[#1f2937] mb-4 italic">
                        Pricing & Fit
                    </h2>
                    <div className="mb-4">
                        <span className="text-4xl font-bold text-[#1f2937]">Starting at $500</span>
                        <span className="text-gray-500 text-xl">/month</span>
                    </div>
                    <h3 className="text-base font-semibold text-[#1f2937] mb-2">Who This Is For</h3>
                    <p className="text-gray-500 m-0">
                        Perfect for businesses with 1-50 employees who want to eliminate payroll headaches and ensure compliance.
                    </p>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-br from-[#3C3C3C] to-[#2d2d2d] p-10 rounded-xl text-center shadow-lg">
                    <h2 className="font-display text-3xl font-normal text-white mb-3 italic">
                        Ready to Get Started?
                    </h2>
                    <p className="text-white/80 mb-6 text-lg">
                        Schedule your free consultation with The Helpful Hive today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                        <Link
                            href="/about"
                            className="px-7 py-3 bg-[#E2C16B] text-white font-semibold rounded-full hover:bg-[#d4b35f] transition-colors"
                        >
                            Schedule Free Consultation
                        </Link>
                        <a
                            href="tel:+13145267240"
                            className="px-7 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                        >
                            Call (314) 526-7240
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}
