import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', marginTop: 'auto' }}>
            <div style={{ maxWidth: '100%', margin: '0', padding: '3rem 1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '320px repeat(3, 1fr)', gap: '2rem', alignItems: 'start' }}>
                    {/* Brand Column with Circular Logo */}
                    <div>
                        <div style={{ position: 'relative', width: '320px', height: '320px', marginBottom: '1rem' }}>
                            <Image
                                src="/official-logo-circular.jpg"
                                alt="The Helpful Hive"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 style={{ fontWeight: 600, color: '#1f2937', marginBottom: '1rem', fontSize: '1.25rem' }}>Services</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1.15rem', listStyle: 'none', padding: 0, margin: 0 }}>
                            <li>
                                <Link href="/bookkeeping" style={{ color: '#6b7280', textDecoration: 'none' }}>
                                    Bookkeeping & Payroll
                                </Link>
                            </li>
                            <li>
                                <Link href="/concierge" style={{ color: '#6b7280', textDecoration: 'none' }}>
                                    Home Concierge
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 style={{ fontWeight: 600, color: '#1f2937', marginBottom: '1rem', fontSize: '1.25rem' }}>Contact</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1.15rem', color: '#6b7280', listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ fontWeight: 500 }}>Phone:</span> (314) 526-7240
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ fontWeight: 500 }}>Email:</span>
                                <a href="mailto:hellohelpfulhive@gmail.com" style={{ color: '#6b7280', textDecoration: 'none' }}>
                                    hellohelpfulhive@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Column */}
                    <div>
                        <h3 style={{ fontWeight: 600, color: '#1f2937', marginBottom: '1rem', fontSize: '1.25rem' }}>Follow Us</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1.15rem' }}>
                            <a
                                href="https://www.facebook.com/thehelpfulhive"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#6b7280', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                Facebook
                            </a>
                            <a
                                href="https://www.instagram.com/thehelpfulhiveco/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#6b7280', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid rgba(107, 114, 128, 0.1)', textAlign: 'center', fontSize: '0.75rem', color: 'rgba(107, 114, 128, 0.5)' }}>
                    &copy; {new Date().getFullYear()} The Helpful Hive. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
