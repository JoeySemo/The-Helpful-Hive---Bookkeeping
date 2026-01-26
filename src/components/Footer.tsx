'use client';

import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
    compact?: boolean;
}

export default function Footer({ compact = false }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#3C3C3C] text-white">
            <div className={`max-w-6xl mx-auto px-4 md:px-8 ${compact ? 'py-6 md:py-8' : 'py-12 md:py-16'}`}>
                {/* Contact Information - Spread Evenly */}
                <div className={`grid grid-cols-1 md:grid-cols-3 ${compact ? 'gap-4 md:gap-6' : 'gap-10 md:gap-8'}`}>
                    {/* Phone */}
                    <div className="flex flex-col items-center text-center">
                        <div className={`${compact ? 'w-10 h-10 mb-2' : 'w-14 h-14 mb-4'} flex items-center justify-center rounded-full bg-[#E2C16B]/20`}>
                            <Phone size={compact ? 18 : 24} className="text-[#E2C16B]" />
                        </div>
                        <h3 className={`font-display font-semibold text-white ${compact ? 'text-sm mb-1' : 'mb-2'}`}>Phone</h3>
                        <a
                            href="tel:+13145267240"
                            className={`${compact ? 'text-xs' : 'text-sm'} text-white/70 hover:text-[#E2C16B] transition-colors`}
                        >
                            (314) 526-7240
                        </a>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center text-center">
                        <div className={`${compact ? 'w-10 h-10 mb-2' : 'w-14 h-14 mb-4'} flex items-center justify-center rounded-full bg-[#E2C16B]/20`}>
                            <Mail size={compact ? 18 : 24} className="text-[#E2C16B]" />
                        </div>
                        <h3 className={`font-display font-semibold text-white ${compact ? 'text-sm mb-1' : 'mb-2'}`}>Email</h3>
                        <a
                            href="mailto:hellohelpfulhive@gmail.com"
                            className={`${compact ? 'text-xs' : 'text-sm'} text-white/70 hover:text-[#E2C16B] transition-colors`}
                        >
                            hellohelpfulhive@gmail.com
                        </a>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-center text-center">
                        <div className={`${compact ? 'w-10 h-10 mb-2' : 'w-14 h-14 mb-4'} flex items-center justify-center rounded-full bg-[#E2C16B]/20`}>
                            <MapPin size={compact ? 18 : 24} className="text-[#E2C16B]" />
                        </div>
                        <h3 className={`font-display font-semibold text-white ${compact ? 'text-sm mb-1' : 'mb-2'}`}>Location</h3>
                        <p className={`${compact ? 'text-xs' : 'text-sm'} text-white/70`}>
                            Wentzville, MO
                        </p>
                    </div>
                </div>

                {/* Social Links */}
                <div className={`flex justify-center gap-4 ${compact ? 'mt-4' : 'mt-10'}`}>
                    <a
                        href="https://www.facebook.com/thehelpfulhive"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${compact ? 'w-8 h-8' : 'w-10 h-10'} flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-[#E2C16B] hover:text-white transition-all transform hover:scale-110`}
                        aria-label="Facebook"
                    >
                        <Facebook size={compact ? 14 : 18} />
                    </a>
                    <a
                        href="https://www.instagram.com/thehelpfulhiveco/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${compact ? 'w-8 h-8' : 'w-10 h-10'} flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-[#E2C16B] hover:text-white transition-all transform hover:scale-110`}
                        aria-label="Instagram"
                    >
                        <Instagram size={compact ? 14 : 18} />
                    </a>
                </div>

                {/* Copyright */}
                <div className={`${compact ? 'mt-4 pt-4' : 'mt-10 pt-8'} border-t border-white/10 text-center`}>
                    <p className="text-xs text-white/40">
                        © {currentYear} The Helpful Hive. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
