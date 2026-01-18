import Link from 'next/link';

export default function CFOAdvisoryPage() {
    const included = [
        { title: 'Cash Flow Management', description: 'Optimize your working capital' },
        { title: 'Budgeting & Forecasting', description: 'Plan for growth with confidence' },
        { title: 'Strategic Planning', description: 'Long-term financial strategy' },
        { title: 'Financial Analysis', description: 'Deep dive into your numbers' },
        { title: 'Performance Metrics', description: 'Track KPIs that matter' },
        { title: 'Growth Strategy', description: 'Scale your business efficiently' }
    ];

    const process = [
        { step: '1', title: 'Discovery', description: 'Understand your business goals and challenges' },
        { step: '2', title: 'Analysis', description: 'Review financial performance and identify opportunities' },
        { step: '3', title: 'Planning', description: 'Develop budgets, forecasts, and growth strategies' },
        { step: '4', title: 'Implementation', description: 'Advise on execution of financial strategies' },
        { step: '5', title: 'Monitoring', description: 'Track progress and adjust strategies as needed' }
    ];

    const benefits = [
        'Understand your profitability and cash flow',
        'Plan for growth with confidence',
        'Make data-driven business decisions',
        'Optimize working capital and reduce waste'
    ];

    return (
        <main style={{ minHeight: 'calc(100vh - 96px)', backgroundColor: '#f8f9fa' }}>
            {/* Hero */}
            <div style={{
                background: '#E2C16B',
                padding: '3rem 2rem',
                textAlign: 'center'
            }}>
                <Link href="/bookkeeping" style={{ color: '#1f2937', textDecoration: 'none', fontSize: '0.95rem', marginBottom: '1rem', display: 'inline-block' }}>
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
                    Strategic Financial Guidance for Growth
                </h1>
                <p style={{ fontSize: '1.15rem', color: '#374151', maxWidth: '600px', margin: '0 auto' }}>
                    Get expert financial advice to guide your business decisions and optimize profitability.
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
                        <span style={{ fontSize: '2.25rem', fontWeight: 700, color: '#1f2937' }}>Starting at $750</span>
                        <span style={{ color: '#6b7280', fontSize: '1.25rem' }}>/month</span>
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.5rem' }}>Who This Is For</h3>
                    <p style={{ color: '#6b7280', margin: 0 }}>
                        Perfect for growing businesses that want strategic financial guidance to scale efficiently.
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
