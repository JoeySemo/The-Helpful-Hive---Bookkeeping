'use client';

import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function ContactPage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <main style={{
            minHeight: 'calc(100vh - 96px)',
            background: 'linear-gradient(135deg, #FFF8E7 0%, rgba(191, 200, 161, 0.2) 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '2rem 1rem' : '3rem 2rem'
        }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '1.5rem' : '2rem' }}>
                <h1 style={{
                    fontSize: isMobile ? '2rem' : '3.5rem',
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
                    width: isMobile ? '180px' : '280px',
                    height: isMobile ? '180px' : '280px',
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

                <p style={{
                    fontSize: isMobile ? '1.1rem' : '1.5rem',
                    color: '#3C3C3C',
                    fontWeight: 500,
                    padding: isMobile ? '0 0.5rem' : 0
                }}>
                    Ready to simplify your life or business? We'd love to hear from you.
                </p>
            </div>

            {/* Contact Info Cards */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: isMobile ? '1rem' : '2rem',
                maxWidth: '900px',
                width: '100%'
            }}>
                {/* Phone */}
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '1rem',
                    padding: isMobile ? '1.5rem' : '2rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                    <Phone style={{ width: isMobile ? '36px' : '48px', height: isMobile ? '36px' : '48px', color: '#E2C16B', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 600, color: '#3C3C3C', marginBottom: '0.5rem' }}>Phone</h3>
                    <a href="tel:+13145267240" style={{ fontSize: isMobile ? '1rem' : '1.15rem', color: '#6b7280', textDecoration: 'none' }}>(314) 526-7240</a>
                </div>

                {/* Email */}
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '1rem',
                    padding: isMobile ? '1.5rem' : '2rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                    <Mail style={{ width: isMobile ? '36px' : '48px', height: isMobile ? '36px' : '48px', color: '#E2C16B', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 600, color: '#3C3C3C', marginBottom: '0.5rem' }}>Email</h3>
                    <p style={{ fontSize: isMobile ? '0.9rem' : '1.15rem', color: '#6b7280', whiteSpace: 'nowrap' }}>hellohelpfulhive@gmail.com</p>
                </div>

                {/* Location */}
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '1rem',
                    padding: isMobile ? '1.5rem' : '2rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                    <MapPin style={{ width: isMobile ? '36px' : '48px', height: isMobile ? '36px' : '48px', color: '#E2C16B', marginBottom: '1rem' }} />
                    <h3 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: 600, color: '#3C3C3C', marginBottom: '0.5rem' }}>Location</h3>
                    <p style={{ fontSize: isMobile ? '1rem' : '1.15rem', color: '#6b7280' }}>Wentzville, MO</p>
                </div>
            </div>

            {/* CTA */}
            <div style={{ marginTop: isMobile ? '2rem' : '3rem', textAlign: 'center' }}>
                <a
                    href="mailto:hellohelpfulhive@gmail.com"
                    style={{
                        display: 'inline-block',
                        padding: isMobile ? '0.875rem 2rem' : '1rem 2.5rem',
                        backgroundColor: '#3C3C3C',
                        color: 'white',
                        fontSize: isMobile ? '1rem' : '1.25rem',
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

