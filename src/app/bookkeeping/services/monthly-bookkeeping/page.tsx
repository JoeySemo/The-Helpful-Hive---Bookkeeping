import Link from 'next/link';

export default function MonthlyBookkeepingPage() {
    const included = [
        { title: 'Bank Reconciliation', description: 'Monthly reconciliation of all accounts' },
        { title: 'AP/AR Management', description: 'Track invoices and payments' },
        { title: 'Financial Statements', description: 'Monthly P&L and balance sheet' },
        { title: 'Transaction Categorization', description: 'Properly categorize all transactions' },
        { title: 'Expense Tracking', description: 'Monitor and categorize expenses' },
        { title: 'Monthly Reporting', description: 'Clear reports for decision-making' }
    ];

    const process = [
        { step: '1', title: 'Data Gathering', description: 'We collect bank statements, invoices, and receipts' },
        { step: '2', title: 'Reconciliation', description: 'Bank accounts and records are reconciled for accuracy' },
        { step: '3', title: 'Categorization', description: 'Transactions are properly categorized for reporting' },
        { step: '4', title: 'Statement Prep', description: 'Financial statements are generated monthly' },
        { step: '5', title: 'Review & Analysis', description: 'We analyze trends and provide insights for growth' }
    ];

    const benefits = [
        'Always know your true financial position',
        'Prepare for taxes with organized records',
        'Make informed business decisions',
        'Reduce audit risk with accurate records'
    ];

    return (
        <main style={{ minHeight: 'calc(100vh - 96px)', backgroundColor: '#f8f9fa' }}>
            {/* Hero */}
            <div style={{
                background: '#E2C16B',
                padding: '3rem 2rem',
                textAlign: 'center'
            }}>
                <Link href="/bookkeeping" style={{ color: '#1f2937', textDecoration: 'none', fontSize: '1.25rem', marginBottom: '1rem', display: 'inline-block', fontWeight: 500 }}>
                    ← Back to Services
                </Link>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 400,
                    color: '#1f2937',
                    marginBottom: '0.75rem',
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic'
                }}>
                    Professional Bookkeeping for Growing Businesses
                </h1>
                <p style={{ fontSize: '1.15rem', color: '#374151', maxWidth: '600px', margin: '0 auto' }}>
                    Maintain accurate financial records with our comprehensive bookkeeping services.
                </p>
            </div>

            <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '3rem 2rem' }}>
                {/* What's Included */}
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 400, color: '#1f2937', marginBottom: '1.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                        What's Included
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
                        {included.map((item, i) => (
                            <div key={i} style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
                                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.25rem' }}>{item.title}</h3>
                                <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Our Process */}
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 400, color: '#1f2937', marginBottom: '1.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                        Our Process
                    </h2>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {process.map((item, i) => (
                            <div key={i} style={{ flex: 1, backgroundColor: 'white', padding: '1.25rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                                <div style={{ width: '32px', height: '32px', backgroundColor: '#E2C16B', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem', fontWeight: 600 }}>
                                    {item.step}
                                </div>
                                <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.25rem' }}>{item.title}</h3>
                                <p style={{ color: '#6b7280', fontSize: '0.85rem', margin: 0 }}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Key Benefits */}
                <section style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 400, color: '#1f2937', marginBottom: '1.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                        Key Benefits
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                        {benefits.map((benefit, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'white', padding: '1rem', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
                                <span style={{ color: '#E2C16B', fontSize: '1.25rem' }}>✓</span>
                                <span style={{ color: '#374151' }}>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing & Fit */}
                <section style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '0.75rem', border: '1px solid #e5e7eb', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 400, color: '#1f2937', marginBottom: '1rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                        Pricing & Fit
                    </h2>
                    <div style={{ marginBottom: '1rem' }}>
                        <span style={{ fontSize: '2.25rem', fontWeight: 700, color: '#1f2937' }}>Starting at $400</span>
                        <span style={{ color: '#6b7280', fontSize: '1.25rem' }}>/month</span>
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.5rem' }}>Who This Is For</h3>
                    <p style={{ color: '#6b7280', margin: 0 }}>
                        Ideal for small business owners who want accurate financial records without the time investment.
                    </p>
                </section>

                {/* CTA */}
                <section style={{
                    background: 'linear-gradient(135deg, #3C3C3C 0%, #2d2d2d 100%)',
                    padding: '2.5rem',
                    borderRadius: '0.75rem',
                    textAlign: 'center'
                }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 400, color: 'white', marginBottom: '0.75rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                        Ready to Get Started?
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
                        Schedule your free consultation with The Helpful Hive today.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/contact" style={{ padding: '0.75rem 1.75rem', backgroundColor: '#E2C16B', color: 'white', fontWeight: 600, borderRadius: '9999px', textDecoration: 'none' }}>
                            Schedule Free Consultation
                        </Link>
                        <a href="tel:+13145267240" style={{ padding: '0.75rem 1.75rem', border: '2px solid white', color: 'white', fontWeight: 600, borderRadius: '9999px', textDecoration: 'none' }}>
                            Call (314) 526-7240
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}
