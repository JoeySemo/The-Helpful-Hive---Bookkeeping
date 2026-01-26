import Link from 'next/link';

export default function BeeOrganizedPage() {
    const included = [
        { title: 'Closet Organization', description: 'Custom systems for wardrobes and storage' },
        { title: 'Pantry Systems', description: 'Efficient food storage and labeling' },
        { title: 'Home Office Setup', description: 'Productive workspace design' },
        { title: 'Garage Reset', description: 'Transform cluttered space into functional storage' },
        { title: 'Decluttering Services', description: 'Sort, donate, and dispose responsibly' },
        { title: 'Lifestyle Systems', description: 'Routines and habits for lasting organization' }
    ];

    const benefits = [
        'Find what you need when you need it',
        'Reduce stress and mental clutter',
        'Create more usable space',
        'Maintain organization long-term'
    ];

    return (
        <main style={{ minHeight: 'calc(100vh - 96px)', backgroundColor: '#f8f9fa' }}>
            {/* Hero */}
            <div style={{
                background: '#E2C16B',
                padding: '3rem 2rem',
                textAlign: 'center'
            }}>
                <Link href="/for-home-and-life" style={{ color: '#1f2937', textDecoration: 'none', fontSize: '1.25rem', marginBottom: '1rem', display: 'inline-block', fontWeight: 500 }}>
                    ← Back to Home Concierge
                </Link>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 400,
                    color: '#1f2937',
                    marginBottom: '0.75rem',
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic'
                }}>
                    🧺 Bee Organized
                </h1>
                <p style={{ fontSize: '1.25rem', color: '#374151', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                    Organization, Decluttering & Lifestyle Systems
                </p>
                <p style={{ fontSize: '1.15rem', color: '#374151', maxWidth: '600px', margin: '0 auto' }}>
                    Transform chaos into calm with custom organization solutions.
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

                {/* Pricing */}
                <section style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '0.75rem', border: '1px solid #e5e7eb', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 400, color: '#1f2937', marginBottom: '1rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                        Pricing
                    </h2>
                    <div style={{ marginBottom: '1rem' }}>
                        <span style={{ fontSize: '2.25rem', fontWeight: 700, color: '#1f2937' }}>$35</span>
                        <span style={{ color: '#6b7280', fontSize: '1.25rem' }}>/hour</span>
                    </div>
                    <p style={{ color: '#6b7280', margin: 0 }}>
                        Ideal for anyone ready to reclaim their space and simplify their life.
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
