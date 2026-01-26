'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#FFF8E7]">
            {/* Hero Section */}
            <section className="py-16 md:py-24 px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Title */}
                    <h1 className="font-display text-4xl md:text-6xl font-medium text-[#3C3C3C] mb-2">
                        Meet the <span className="text-gradient-honey">Queen Bee</span>
                    </h1>

                    {/* Profile Image */}
                    <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto my-10">
                        <div className="absolute inset-0 rounded-full border-4 border-[#E2C16B] shadow-xl overflow-hidden">
                            <Image
                                src="/queen-bee.jpg"
                                alt="Jessica - The Queen Bee"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-[#3C3C3C]/70 text-lg md:text-xl max-w-2xl mx-auto mb-16">
                        Ready to simplify your life or business? We'd love to hear from you.
                    </p>
                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {/* Phone */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E2C16B]/20 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#E2C16B]/20 mx-auto mb-4">
                                <Phone size={28} className="text-[#E2C16B]" />
                            </div>
                            <h3 className="font-display font-semibold text-[#3C3C3C] mb-2">Phone</h3>
                            <a
                                href="tel:+13145267240"
                                className="text-[#3C3C3C]/70 hover:text-[#E2C16B] transition-colors"
                            >
                                (314) 526-7240
                            </a>
                        </div>

                        {/* Email */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E2C16B]/20 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#E2C16B]/20 mx-auto mb-4">
                                <Mail size={28} className="text-[#E2C16B]" />
                            </div>
                            <h3 className="font-display font-semibold text-[#3C3C3C] mb-2">Email</h3>
                            <a
                                href="mailto:hellohelpfulhive@gmail.com"
                                className="text-[#3C3C3C]/70 hover:text-[#E2C16B] transition-colors"
                            >
                                hellohelpfulhive@gmail.com
                            </a>
                        </div>

                        {/* Location */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E2C16B]/20 hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#E2C16B]/20 mx-auto mb-4">
                                <MapPin size={28} className="text-[#E2C16B]" />
                            </div>
                            <h3 className="font-display font-semibold text-[#3C3C3C] mb-2">Location</h3>
                            <p className="text-[#3C3C3C]/70">
                                Wentzville, MO
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
