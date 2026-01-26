'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#3C3C3C] text-white">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="relative w-28 h-28 mb-6 bg-white rounded-full p-2 border-4 border-[#E2C16B] shadow-lg animate-float">
                            <Image
                                src="/logo-circular.jpg"
                                alt="The Helpful Hive"
                                fill
                                className="object-contain rounded-full"
                            />
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed">
                            Sweet solutions for busy homes, pets, people, and businesses.
                        </p>
                    </div>

                    {/* For Home & Life */}
                    <div>
                        <h3 className="font-display font-semibold text-[#E2C16B] mb-4">For Home & Life</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/concierge/services/bee-done" className="text-sm text-white/70 hover:text-[#E2C16B] transition-colors">
                                    Bee Done
                                </Link>
                            </li>
                            <li>
                                <Link href="/concierge/services/bee-kind" className="text-sm text-white/70 hover:text-[#E2C16B] transition-colors">
                                    Bee Kind
                                </Link>
                            </li>
                            <li>
                                <Link href="/concierge/services/bee-organized" className="text-sm text-white/70 hover:text-[#E2C16B] transition-colors">
                                    Bee Organized
                                </Link>
                            </li>
                            <li>
                                <Link href="/concierge/services/bee-efficient" className="text-sm text-white/70 hover:text-[#E2C16B] transition-colors">
                                    Bee Efficient
                                </Link>
                            </li>
                            <li>
                                <Link href="/concierge/services/bee-connected" className="text-sm text-white/70 hover:text-[#E2C16B] transition-colors">
                                    Bee Connected
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* For Business & Money */}
                    <div>
                        <h3 className="font-display font-semibold text-[#BFC8A1] mb-4">For Business & Money</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/bookkeeping" className="text-sm text-white/70 hover:text-[#BFC8A1] transition-colors">
                                    Small Business Bookkeeping
                                </Link>
                            </li>
                            <li>
                                <Link href="/bookkeeping" className="text-sm text-white/70 hover:text-[#BFC8A1] transition-colors">
                                    Money Organization
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-display font-semibold text-white mb-4">Contact</h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="tel:+13145267240"
                                    className="flex items-center gap-3 text-sm text-white/70 hover:text-[#E2C16B] transition-colors"
                                >
                                    <Phone size={18} />
                                    (314) 526-7240
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:hellohelpfulhive@gmail.com"
                                    className="flex items-center gap-3 text-sm text-white/70 hover:text-[#E2C16B] transition-colors"
                                >
                                    <Mail size={18} />
                                    hellohelpfulhive@gmail.com
                                </a>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
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
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 pt-8 border-t border-white/10 text-center">
                    <p className="text-xs text-white/40">
                        © {currentYear} The Helpful Hive. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
