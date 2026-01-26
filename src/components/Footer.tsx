'use client';

import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#3C3C3C] text-white">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
                {/* Contact Information - Spread Evenly */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
                    {/* Phone */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#E2C16B]/20 mb-4">
                            <Phone size={24} className="text-[#E2C16B]" />
                        </div>
                        <h3 className="font-display font-semibold text-white mb-2">Phone</h3>
                        <a
                            href="tel:+13145267240"
                            className="text-sm text-white/70 hover:text-[#E2C16B] transition-colors"
                        >
                            (314) 526-7240
                        </a>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#E2C16B]/20 mb-4">
                            <Mail size={24} className="text-[#E2C16B]" />
                        </div>
                        <h3 className="font-display font-semibold text-white mb-2">Email</h3>
                        <a
                            href="mailto:hellohelpfulhive@gmail.com"
                            className="text-sm text-white/70 hover:text-[#E2C16B] transition-colors"
                        >
                            hellohelpfulhive@gmail.com
                        </a>
                    </div>

                    {/* Location */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#E2C16B]/20 mb-4">
                            <MapPin size={24} className="text-[#E2C16B]" />
                        </div>
                        <h3 className="font-display font-semibold text-white mb-2">Location</h3>
                        <p className="text-sm text-white/70">
                            Wentzville, MO
                        </p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-10">
                    <a
                        href="https://www.facebook.com/thehelpfulhive"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-[#E2C16B] hover:text-white transition-all transform hover:scale-110"
                        aria-label="Facebook"
                    >
                        <Facebook size={18} />
                    </a>
                    <a
                        href="https://www.instagram.com/thehelpfulhiveco/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-[#E2C16B] hover:text-white transition-all transform hover:scale-110"
                        aria-label="Instagram"
                    >
                        <Instagram size={18} />
                    </a>
                </div>

                {/* Copyright */}
                <div className="mt-10 pt-8 border-t border-white/10 text-center">
                    <p className="text-xs text-white/40">
                        © {currentYear} The Helpful Hive. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
