'use client';

import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#3C3C3C] text-white">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14">
                {/* Main 3 Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Left: Circle Logo */}
                    <div className="flex justify-center md:justify-start">
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#E2C16B]/40">
                            <Image
                                src="/official-logo-circular.jpg"
                                alt="The Helpful Hive"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Center: Service Area */}
                    <div className="text-center">
                        <h3 className="font-display font-semibold !text-[#E2C16B] mb-1 text-sm uppercase tracking-wider">Service Area</h3>
                        <p className="text-white/80 text-sm">Wentzville, MO</p>
                    </div>

                    {/* Right: Payment Methods */}
                    <div className="text-center md:text-right">
                        <h3 className="font-display font-semibold !text-[#E2C16B] mb-1 text-sm uppercase tracking-wider">Payment Methods</h3>
                        <p className="text-white/80 text-sm">We proudly accept Venmo and Cash.</p>
                    </div>
                </div>

                {/* Bottom: Copyright + Social Icons */}
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <p className="text-xs text-white/60">
                        © {currentYear} The Helpful Hive
                    </p>
                    <div className="flex gap-3">
                        <a
                            href="https://www.facebook.com/thehelpfulhive"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-[#E2C16B] hover:text-white transition-all transform hover:scale-110"
                            aria-label="Facebook"
                        >
                            <Facebook size={14} />
                        </a>
                        <a
                            href="https://www.instagram.com/thehelpfulhiveco/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-[#E2C16B] hover:text-white transition-all transform hover:scale-110"
                            aria-label="Instagram"
                        >
                            <Instagram size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
