'use client';

import Image from 'next/image';

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


                </div>
            </section>
        </div>
    );
}
