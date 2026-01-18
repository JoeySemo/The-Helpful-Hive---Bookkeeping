import Link from 'next/link';

export default function BookkeepingPage() {
    const services = [
        {
            title: 'Monthly Bookkeeping',
            price: '$400',
            period: '/month',
            description: 'Complete monthly financial management',
            features: ['Bank reconciliation', 'AP/AR management', 'Financial statements', 'Unlimited support'],
            href: '/bookkeeping/services/monthly-bookkeeping'
        },
        {
            title: 'Full-Service Payroll',
            price: '$500',
            period: '/month',
            description: 'Hassle-free payroll processing',
            features: ['Direct deposit & checks', 'Tax filing & compliance', 'W-2 & 1099 preparation', 'Quarterly reporting'],
            href: '/bookkeeping/services/payroll'
        },
        {
            title: 'QuickBooks Cleanup',
            price: '$500 - $2,500',
            period: ' per project',
            description: 'Get your books back on track',
            features: ['Error correction', 'Chart of accounts organization', 'Historical data catch-up', 'Training included'],
            href: '/bookkeeping/services/quickbooks-cleanup'
        },
        {
            title: 'CFO & Advisory',
            price: '$750',
            period: '/month',
            description: 'Strategic financial guidance',
            features: ['Cash flow management', 'Budgeting & forecasting', 'Strategic planning', 'Growth consulting'],
            href: '/bookkeeping/services/cfo-advisory'
        }
    ];

    const whyChoose = [
        { title: 'Expert Team', description: 'Certified professionals with years of industry experience' },
        { title: 'Personalized Service', description: 'Tailored solutions that fit your specific business needs' },
        { title: 'Affordable Solutions', description: 'Transparent pricing with no hidden fees' },
        { title: 'Local Focus', description: 'Serving St. Louis and surrounding counties with care' }
    ];

    return (
        <main style={{ minHeight: 'calc(100vh - 96px)', backgroundColor: '#f8f9fa' }}>
            {/* Hero Section */}
            <div style={{
                background: '#E2C16B',
                padding: '4rem 2rem',
                textAlign: 'center'
            }}>
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: 400,
                    color: '#1f2937',
                    marginBottom: '1rem',
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic'
                }}>
                    Taking the Sting Out of Business Finances
                </h1>
                <p style={{ fontSize: '1.25rem', color: '#374151', maxWidth: '100%', margin: '0 auto 0.75rem auto', whiteSpace: 'nowrap' }}>
                    Expert bookkeeping and financial management for small businesses in St. Louis and surrounding counties.
                </p>
                <p style={{ fontSize: '1.25rem', color: '#374151', maxWidth: '700px', margin: '0 auto' }}>
                    Let us handle your finances while you focus on growth.
                </p>
            </div>

            {/* Transparent Pricing Section */}
            <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '3rem 2rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 400, color: '#1f2937', marginBottom: '0.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                        Transparent Pricing
                    </h2>
                    <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
                        Competitive rates designed to help your business thrive
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1.5rem'
                }}>
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            style={{ textDecoration: 'none' }}
                        >
                            <div style={{
                                backgroundColor: 'white',
                                padding: '2rem',
                                borderRadius: '0.75rem',
                                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                                border: '1px solid #e5e7eb',
                                height: '100%',
                                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                                cursor: 'pointer'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    <span style={{ color: '#E2C16B', fontSize: '1.25rem' }}>★</span>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1f2937', margin: 0 }}>
                                        {service.title}
                                    </h3>
                                </div>
                                <div style={{ marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '2rem', fontWeight: 700, color: '#1f2937' }}>{service.price}</span>
                                    <span style={{ color: '#6b7280', fontSize: '1rem' }}>{service.period}</span>
                                </div>
                                <p style={{ color: '#6b7280', marginBottom: '1rem', fontSize: '0.95rem' }}>
                                    {service.description}
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#4b5563', fontSize: '0.9rem' }}>
                                    {service.features.map((feature, i) => (
                                        <li key={i} style={{ marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ color: '#3C3C3C' }}>✓</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>

            {/* Special Rates Card */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                backgroundColor: 'white',
                padding: '1.25rem 2rem',
                borderRadius: '9999px',
                maxWidth: '600px',
                margin: '-2rem auto 4rem auto',
                position: 'relative',
                zIndex: 10,
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#FFF8E7',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #E2C16B',
                    flexShrink: 0
                }}>
                    <span style={{ fontSize: '1.5rem' }}>🍯</span>
                </div>
                <div>
                    <p style={{ fontWeight: 600, color: '#1f2937', margin: 0, fontSize: '1rem' }}>
                        Special introductory rates for new clients.
                    </p>
                    <p style={{ color: '#6b7280', margin: 0, fontSize: '0.9rem' }}>
                        Contact us for a free consultation and custom quote.
                    </p>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div style={{ backgroundColor: 'white', padding: '3rem 2rem' }}>
                <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 400,
                        color: '#1f2937',
                        marginBottom: '2rem',
                        textAlign: 'center',
                        fontFamily: 'Georgia, serif',
                        fontStyle: 'italic'
                    }}>
                        Why Choose The Helpful Hive?
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                        {whyChoose.map((item, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {item.title}
                                </h3>
                                <p style={{ color: '#6b7280', fontSize: '0.95rem', margin: 0 }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div style={{
                background: 'linear-gradient(135deg, #3C3C3C 0%, #2d2d2d 100%)',
                padding: '3rem 2rem',
                textAlign: 'center'
            }}>
                <h2 style={{
                    fontSize: '2rem',
                    fontWeight: 400,
                    color: 'white',
                    marginBottom: '1rem',
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic'
                }}>
                    Ready to Organize Your Finances?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                    Contact us today for a free consultation and let The Helpful Hive take the sting out of your business finances.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link
                        href="/contact"
                        style={{
                            display: 'inline-block',
                            padding: '0.875rem 2rem',
                            backgroundColor: '#E2C16B',
                            color: 'white',
                            fontSize: '1rem',
                            fontWeight: 600,
                            borderRadius: '9999px',
                            textDecoration: 'none'
                        }}
                    >
                        Schedule Free Consultation
                    </Link>
                    <a
                        href="tel:+13145267240"
                        style={{
                            display: 'inline-block',
                            padding: '0.875rem 2rem',
                            backgroundColor: 'transparent',
                            border: '2px solid white',
                            color: 'white',
                            fontSize: '1rem',
                            fontWeight: 600,
                            borderRadius: '9999px',
                            textDecoration: 'none'
                        }}
                    >
                        Call (314) 526-7240
                    </a>
                </div>
            </div>

            {/* Footer Info */}
            <div style={{ backgroundColor: '#f8f9fa', padding: '1.5rem 2rem', textAlign: 'center' }}>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>
                    Servicing St. Louis, St. Charles, Lincoln, and Warren County Missouri. Remote services also available.
                </p>
            </div>
        </main>
    );
}
