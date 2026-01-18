'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ConciergePage() {
    const services = [
        {
            title: 'Bee Done',
            tagline: 'Household Chores & Cleaning Tasks',
            icon: '🧽',
            price: '$30',
            priceUnit: 'per hour',
            popular: true,
            items: ['Bathroom Deep Clean', 'Kitchen Deep Clean', 'Window Washing', 'Laundry Services']
        },
        {
            title: 'Bee Kind',
            tagline: 'Pet Care & Home Visits',
            icon: '🐾',
            price: '$20',
            priceUnit: 'per visit',
            items: ['Dog Walking', 'Potty Breaks', 'Feeding & Water', 'Vacation Check-ins']
        },
        {
            title: 'Bee Organized',
            tagline: 'Organization, Decluttering & Lifestyle Systems',
            icon: '🧺',
            price: '$35',
            priceUnit: 'per hour',
            items: ['Closet Organization', 'Pantry Systems', 'Home Office Setup', 'Garage Reset']
        },
        {
            title: 'Bee Efficient',
            tagline: 'Errands, Admin, and Office Help',
            icon: '💼',
            price: '$30',
            priceUnit: 'per hour',
            items: ['Errand Running', 'Appointment Scheduling', 'Data Entry', 'Event Coordination']
        },
        {
            title: 'Bee Connected',
            tagline: 'Seasonal & Community Services',
            icon: '🌸',
            price: '$35',
            priceUnit: 'per hour',
            items: ['Holiday Decorating', 'Donation Drop-offs', 'Event Support', 'Volunteer Help']
        }
    ];

    const howItWorks = [
        {
            step: '1',
            title: 'Schedule a Consultation',
            description: "Reach out to discuss your home management needs. We'll learn about your property and lifestyle to create a customized plan."
        },
        {
            step: '2',
            title: 'Receive Your Custom Plan',
            description: "We'll create a tailored service package that addresses your specific needs, from regular maintenance to on-demand concierge services."
        },
        {
            step: '3',
            title: 'Enjoy Peace of Mind',
            description: "Relax knowing your home is in expert hands. Receive regular updates and enjoy a home that's always ready and welcoming."
        }
    ];

    const testimonials = [
        {
            name: 'Sarah M.',
            role: 'Seasonal Homeowner',
            quote: "The Helpful Hive has been a lifesaver for managing our vacation home. I never worry about anything when we're away."
        },
        {
            name: 'Michael R.',
            role: 'Business Traveler',
            quote: "As someone who travels constantly, having someone I trust to handle errands and check on my home is invaluable."
        },
        {
            name: 'The Johnson Family',
            role: 'Busy Parents',
            quote: "Between work and kids, we never had time for the little things. Now our home runs like clockwork thanks to The Helpful Hive!"
        }
    ];

    return (
        <main style={{ minHeight: 'calc(100vh - 96px)' }}>
            {/* Hero Section */}
            <div style={{
                background: '#E2C16B',
                padding: '4rem 2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4rem',
                flexWrap: 'wrap'
            }}>
                <div style={{ maxWidth: '500px' }}>
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: 400,
                        color: '#1f2937',
                        marginBottom: '0.5rem',
                        fontFamily: 'Georgia, serif',
                        fontStyle: 'italic',
                        lineHeight: 1.2
                    }}>
                        Your Home,<br />
                        <span style={{ fontStyle: 'italic' }}>Perfectly Managed</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#374151', fontStyle: 'italic', marginBottom: '1rem' }}>
                        Sweet solutions for busy homes, pets, and people.
                    </p>
                    <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '0.5rem' }}>
                        Because even the busiest bees need a little help.
                    </p>
                    <p style={{ fontSize: '1rem', color: '#4b5563', marginBottom: '2rem' }}>
                        We handle the details of home management so you can focus on what matters most.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link href="/contact" style={{
                            padding: '0.875rem 1.75rem',
                            backgroundColor: '#3C3C3C',
                            color: 'white',
                            fontWeight: 600,
                            borderRadius: '9999px',
                            textDecoration: 'none',
                            fontSize: '0.95rem'
                        }}>
                            Schedule a Consultation
                        </Link>
                        <Link href="/concierge/services" style={{
                            padding: '0.875rem 1.75rem',
                            backgroundColor: 'transparent',
                            border: '2px solid #3C3C3C',
                            color: '#3C3C3C',
                            fontWeight: 600,
                            borderRadius: '9999px',
                            textDecoration: 'none',
                            fontSize: '0.95rem'
                        }}>
                            Explore Services
                        </Link>
                    </div>
                </div>
                <div style={{
                    backgroundColor: '#f5f5dc',
                    padding: '2rem',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image
                        src="/concierge-logo.jpg"
                        alt="The Helpful Hive"
                        width={280}
                        height={280}
                        style={{ objectFit: 'contain', borderRadius: '50%' }}
                    />
                </div>
            </div>

            {/* Service Ecosystem */}
            <div style={{ backgroundColor: '#f8f9fa', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.25rem', fontWeight: 400, color: '#1f2937', marginBottom: '0.5rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                            Our Service Ecosystem
                        </h2>
                        <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>
                            Sweet solutions for busy homes, pets, and people. Every service is part of The Helpful Hive.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
                        {services.map((service, index) => (
                            <div key={index} style={{
                                backgroundColor: 'white',
                                padding: '2.5rem',
                                borderRadius: '1rem',
                                border: '1px solid #e5e7eb',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                position: 'relative'
                            }}>
                                {service.popular && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '-12px',
                                        left: '32px',
                                        backgroundColor: '#a67c00', // Darker gold for better contrast
                                        color: 'white',
                                        padding: '0.25rem 1rem',
                                        borderRadius: '12px',
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                        Most Popular
                                    </div>
                                )}

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <div style={{ fontSize: '3rem' }}>{service.icon}</div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#a67c00' }}>
                                            {service.price}
                                        </div>
                                        <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                                            {service.priceUnit}
                                        </div>
                                    </div>
                                </div>

                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {service.title}
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: '#E2C16B', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                                    {service.tagline}
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {service.items.map((item, i) => (
                                        <li key={i} style={{ fontSize: '1.05rem', color: '#6b7280', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <span style={{ color: '#E2C16B' }}>✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <p style={{ fontSize: '1.1rem', color: '#6b7280', fontStyle: 'italic', marginBottom: '1rem' }}>
                            "You relax — we'll handle the Honey-Do's."
                        </p>
                        <Link href="/concierge/services" style={{
                            display: 'inline-block',
                            padding: '0.75rem 1.5rem',
                            backgroundColor: '#E2C16B',
                            color: 'white',
                            fontWeight: 600,
                            borderRadius: '9999px',
                            textDecoration: 'none'
                        }}>
                            View All Services & Pricing
                        </Link>
                    </div>
                </div>
            </div>

            {/* How It Works */}
            <div style={{ backgroundColor: 'white', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '70rem', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 400, color: '#1f2937', marginBottom: '0.5rem', textAlign: 'center', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                        How It Works
                    </h2>
                    <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: '3rem' }}>
                        Getting started with The Helpful Hive is simple. We make home management effortless from day one.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        {howItWorks.map((step, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    backgroundColor: '#E2C16B',
                                    color: 'white',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1rem',
                                    fontSize: '1.25rem',
                                    fontWeight: 700
                                }}>
                                    {step.step}
                                </div>
                                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.5rem' }}>
                                    {step.title}
                                </h3>
                                <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Meet Your Concierge */}
            <div style={{ backgroundColor: '#f8f9fa', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '60rem', margin: '0 auto', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid #E2C16B',
                        flexShrink: 0
                    }}>
                        <Image
                            src="/queen-bee.jpg"
                            alt="The Queen Bee"
                            width={200}
                            height={200}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        />
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <p style={{ fontSize: '0.9rem', color: '#E2C16B', fontWeight: 600, marginBottom: '0.5rem' }}>Our Queen Bee</p>
                        <h2 style={{ fontSize: '2rem', fontWeight: 400, color: '#1f2937', marginBottom: '1rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                            Meet Your Home Concierge
                        </h2>
                        <p style={{ color: '#4b5563', marginBottom: '1rem', lineHeight: 1.7 }}>
                            Hi there! I'm the founder of The Helpful Hive, and I understand firsthand how overwhelming home management can be. As a wife, mom, and busy professional, I know that keeping a home running smoothly takes more than just time—it takes coordination, attention to detail, and a network of trusted service providers.
                        </p>
                        <p style={{ color: '#4b5563', marginBottom: '1rem', lineHeight: 1.7 }}>
                            That's why I created The Helpful Hive. My mission is to help busy families, seasonal residents, and anyone who needs a helping hand with their home.
                        </p>
                        <p style={{ color: '#E2C16B', fontStyle: 'italic', fontWeight: 500 }}>
                            Because even the busiest bees need a little help.
                        </p>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div style={{ backgroundColor: 'white', padding: '4rem 2rem' }}>
                <div style={{ maxWidth: '70rem', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 400, color: '#1f2937', marginBottom: '0.5rem', textAlign: 'center', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                        What Our Clients Say
                    </h2>
                    <p style={{ color: '#6b7280', textAlign: 'center', marginBottom: '3rem' }}>
                        Don't just take our word for it—hear from homeowners who've experienced the difference.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} style={{
                                backgroundColor: '#f8f9fa',
                                padding: '1.5rem',
                                borderRadius: '0.75rem',
                                border: '1px solid #e5e7eb'
                            }}>
                                <p style={{ color: '#4b5563', fontStyle: 'italic', marginBottom: '1rem', lineHeight: 1.6 }}>
                                    "{testimonial.quote}"
                                </p>
                                <p style={{ fontWeight: 600, color: '#1f2937', marginBottom: '0.1rem' }}>{testimonial.name}</p>
                                <p style={{ fontSize: '0.85rem', color: '#6b7280' }}>{testimonial.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div style={{
                background: 'linear-gradient(135deg, #3C3C3C 0%, #2d2d2d 100%)',
                padding: '4rem 2rem',
                textAlign: 'center'
            }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 400, color: 'white', marginBottom: '0.75rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                    Get in Touch
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                    Ready to experience stress-free home management? Reach out today for a free consultation.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/contact" style={{
                        padding: '0.875rem 2rem',
                        backgroundColor: '#E2C16B',
                        color: 'white',
                        fontWeight: 600,
                        borderRadius: '9999px',
                        textDecoration: 'none'
                    }}>
                        Schedule a Consultation
                    </Link>
                    <a href="tel:+13145267240" style={{
                        padding: '0.875rem 2rem',
                        border: '2px solid white',
                        color: 'white',
                        fontWeight: 600,
                        borderRadius: '9999px',
                        textDecoration: 'none'
                    }}>
                        Call (314) 526-7240
                    </a>
                </div>
            </div>

            {/* Footer Info */}
            <div style={{ backgroundColor: '#f8f9fa', padding: '1.5rem 2rem', textAlign: 'center' }}>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', margin: 0 }}>
                    Serving Wentzville, Lake St. Louis, O'Fallon, and surrounding St. Charles County areas.
                </p>
            </div>
        </main>
    );
}
