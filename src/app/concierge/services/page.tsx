import Link from 'next/link';

export default function ConciergeServicesPage() {
    const badges = [
        { title: '2-Hour Minimum', description: 'For all hourly services' },
        { title: 'Free Travel', description: 'Within 10 miles of Wentzville' },
        { title: 'Fully Insured', description: 'Bonded & background-checked' },
        { title: 'Satisfaction Guaranteed', description: 'Your happiness is our priority' }
    ];

    const serviceCategories = [
        {
            title: 'Bee Done',
            subtitle: '(Household Chores & Cleaning Tasks)',
            tagline: '"Because you deserve to Bee Done with the dirty work."',
            icon: '🧽',
            items: [
                'Bathroom Deep Clean',
                'Kitchen Deep Clean',
                'Window Washing (interior)',
                'Baseboards & Trim',
                'Dusting / Light Cleaning',
                'Laundry (wash, dry, fold, iron)',
                'Dishes / Light Tidying',
                'Hourly “Custom Task” option'
            ],
            footer: '"You relax — we’ll handle the Honey-Do’s."'
        },
        {
            title: 'Bee Kind',
            subtitle: '(Pet Care & Home Visits)',
            tagline: '"Where tails wag and homes stay happy."',
            icon: '🐾',
            items: [
                'Dog Walking (15 or 30 minutes)',
                'Potty Breaks & Let Outs',
                'Feeding & Water Refresh',
                'Cat Litter Refresh',
                'Vacation Home Check-ins',
                'Plant Watering Add-on'
            ],
            footer: '"Your pets will thank you — paws down."'
        },
        {
            title: 'Bee Organized',
            subtitle: '(Organization, Decluttering & Lifestyle Systems)',
            tagline: '"Bringing order to the buzz."',
            icon: '🧺',
            items: [
                'Closet / Pantry Organization',
                'Laundry Room / Mudroom Systems',
                'Home Office Setup',
                'Digital File Organization (basic admin)',
                'Storage Bin Labeling',
                'Garage or Basement Reset'
            ],
            footer: '"Find your calm in the chaos."'
        },
        {
            title: 'Bee Efficient',
            subtitle: '(Errands, Admin, and Office Help)',
            tagline: '"Helping busy families and small businesses get it done."',
            icon: '💼',
            items: [
                'Errand Running (post office, returns, pickup/dropoff)',
                'Appointment Scheduling',
                'Waiting-in-Line or Delivery Stand-In',
                'Data Entry / Office Tasks',
                'Event Setup or Coordination',
                'Marketing Assistance (social posts, flyers, email templates)'
            ],
            footer: '"We handle the busy work, so you don’t have to."'
        },
        {
            title: 'Bee Connected',
            subtitle: '(Seasonal & Community Services)',
            tagline: '"Supporting the heart of the Crossroads community."',
            icon: '🌸',
            items: [
                'Holiday Decorating / Undecorating',
                'Event or Party Assistance',
                'Realtor Home Prep Support',
                'Donation Pickups / Drop-offs',
                'Community Volunteer Help (for local orgs / PTA projects)'
            ],
            footer: '"Rooted in the Crossroads, ready to help."'
        }
    ];

    return (
        <main style={{ minHeight: 'calc(100vh - 96px)', backgroundColor: '#f8f9fa' }}>
            {/* Hero Section */}
            <div style={{
                background: '#E2C16B',
                padding: '3rem 2rem',
                textAlign: 'center'
            }}>
                <Link href="/concierge" style={{ color: '#1f2937', textDecoration: 'none', fontSize: '1.25rem', marginBottom: '1rem', display: 'inline-block', fontWeight: 500 }}>
                    ← Back to Home Concierge
                </Link>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 400,
                    color: '#1f2937',
                    marginBottom: '0.5rem',
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic'
                }}>
                    Services & Pricing
                </h1>
                <p style={{ fontSize: '1.15rem', color: '#374151', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                    Sweet solutions for busy homes, pets, and people.
                </p>
                <p style={{ fontSize: '1rem', color: '#4b5563' }}>
                    Transparent, competitive pricing for all your home concierge needs.
                </p>
            </div>

            {/* Trust Badges */}
            <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                    {badges.map((badge, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            padding: '1.25rem',
                            borderRadius: '0.75rem',
                            textAlign: 'center',
                            border: '1px solid #e5e7eb'
                        }}>
                            <p style={{ fontWeight: 600, color: '#1f2937', marginBottom: '0.25rem' }}>{badge.title}</p>
                            <p style={{ fontSize: '0.85rem', color: '#6b7280', margin: 0 }}>{badge.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Service Categories */}
            <div style={{ maxWidth: '70rem', margin: '0 auto', padding: '0 2rem 3rem' }}>
                {serviceCategories.map((category, index) => (
                    <div key={index} style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '0.75rem',
                        border: '1px solid #e5e7eb',
                        marginBottom: '1.5rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                            <div style={{ flex: 1 }}>
                                <h2 style={{ fontSize: '1.35rem', fontWeight: 600, color: '#1f2937', margin: 0 }}>
                                    {category.title}
                                </h2>
                                <p style={{ fontSize: '1rem', color: '#6b7280', margin: 0, fontWeight: 500 }}>
                                    {category.subtitle}
                                </p>
                            </div>
                        </div>
                        <p style={{ fontSize: '1rem', color: '#E2C16B', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                            {category.tagline}
                        </p>

                        <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#6b7280', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            What's Included:
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            {category.items.map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ color: '#E2C16B' }}>•</span>
                                    <span style={{ color: '#4b5563', fontSize: '0.95rem' }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        <p style={{ fontSize: '0.95rem', color: '#6b7280', fontStyle: 'italic', margin: 0 }}>
                            {category.footer}
                        </p>
                    </div>
                ))}
            </div>

            {/* Travel Zone */}
            <div style={{ backgroundColor: 'white', padding: '2.5rem 2rem' }}>
                <div style={{ maxWidth: '60rem', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 400, color: '#1f2937', marginBottom: '1rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                        Service Area
                    </h2>
                    <p style={{ color: '#6b7280', marginBottom: '0.5rem' }}>
                        We proudly serve Wentzville, Lake St. Louis, O'Fallon, and surrounding St. Charles County areas.
                    </p>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                        Free travel within 10 miles of Wentzville. Additional travel fees may apply for locations beyond this area.
                    </p>
                </div>
            </div>

            {/* CTA Section */}
            <div style={{
                background: 'linear-gradient(135deg, #3C3C3C 0%, #2d2d2d 100%)',
                padding: '3rem 2rem',
                textAlign: 'center'
            }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 400, color: 'white', marginBottom: '0.75rem', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                    Ready to Get Started?
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
                    Contact us today for a free consultation and let us create a customized home management plan for you.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/about" style={{
                        padding: '0.75rem 1.75rem',
                        backgroundColor: '#E2C16B',
                        color: 'white',
                        fontWeight: 600,
                        borderRadius: '9999px',
                        textDecoration: 'none'
                    }}>
                        Schedule a Consultation
                    </Link>
                    <a href="tel:+13145267240" style={{
                        padding: '0.75rem 1.75rem',
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
        </main>
    );
}
