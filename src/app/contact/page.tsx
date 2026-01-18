import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    return (
        <main style={{
            minHeight: 'calc(100vh - 96px)',
            background: 'linear-gradient(135deg, #FFF8E7 0%, rgba(191, 200, 161, 0.2) 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '3rem 2rem'
        }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1 style={{
                    fontSize: '3.5rem',
                    fontWeight: 400,
                    color: '#3C3C3C',
                    marginBottom: '1rem',
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic'
                }}>
                    Meet the Queen Bee
                </h1>

                {/* Queen Bee Photo */}
                <div style={{
                    position: 'relative',
                    width: '280px',
                    height: '280px',
                    margin: '0 auto 1.5rem auto',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                    border: '4px solid #E2C16B'
                }}>
                    <Image
                        src="/queen-bee.jpg"
                        alt="The Queen Bee"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                <p style={{ fontSize: '1.5rem', color: '#E2C16B', fontWeight: 400 }}>
                    Ready to simplify your life or business? We'd love to hear from you.
                </p>
            </div>

            {/* Contact Info Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem',
                maxWidth: '900px',
                width: '100%'
            }}>
                {/* Phone */}
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                    <Phone style={{ width: '48px', height: '48px', color: '#E2C16B', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#3C3C3C', marginBottom: '0.5rem' }}>Phone</h3>
                    <p style={{ fontSize: '1.15rem', color: '#6b7280' }}>(314) 526-7240</p>
                </div>

                {/* Email */}
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                    <Mail style={{ width: '48px', height: '48px', color: '#E2C16B', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#3C3C3C', marginBottom: '0.5rem' }}>Email</h3>
                    <p style={{ fontSize: '1.15rem', color: '#6b7280' }}>hellohelpfulhive@gmail.com</p>
                </div>

                {/* Location */}
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                    <MapPin style={{ width: '48px', height: '48px', color: '#E2C16B', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#3C3C3C', marginBottom: '0.5rem' }}>Location</h3>
                    <p style={{ fontSize: '1.15rem', color: '#6b7280' }}>Wentzville, MO</p>
                </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <a
                    href="mailto:hellohelpfulhive@gmail.com"
                    style={{
                        display: 'inline-block',
                        padding: '1rem 2.5rem',
                        backgroundColor: '#3C3C3C',
                        color: 'white',
                        fontSize: '1.25rem',
                        fontWeight: 600,
                        borderRadius: '9999px',
                        textDecoration: 'none',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                >
                    Send Us an Email
                </a>
            </div>
        </main>
    );
}
