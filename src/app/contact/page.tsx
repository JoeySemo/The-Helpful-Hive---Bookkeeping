'use client';

import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
    const contactMethods = [
        {
            icon: Phone,
            title: 'Phone',
            value: '(314) 526-7240',
            href: 'tel:+13145267240',
            clickable: true
        },
        {
            icon: Mail,
            title: 'Email',
            value: 'hellohelpfulhive@gmail.com',
            href: 'mailto:hellohelpfulhive@gmail.com',
            clickable: true
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'Wentzville, MO',
            href: null,
            clickable: false
        }
    ];

    return (
        <main className="min-h-[calc(100vh-80px)] bg-gradient-warm py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
            {/* Honeycomb Background */}
            <div className="absolute inset-0 opacity-[0.091] pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="honeycomb-contact" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#honeycomb-contact)" />
                </svg>
            </div>
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="font-[family-name:var(--font-lora)] text-3xl md:text-5xl font-medium text-neutral-900 mb-4">
                        Meet the <span className="text-gradient-honey">Queen Bee</span>
                    </h1>

                    {/* Photo */}
                    <div className="relative w-40 h-40 md:w-56 md:h-56 mx-auto mb-6">
                        <Image
                            src="/amanda-headshot.jpg"
                            alt="The Queen Bee"
                            fill
                            className="object-cover rounded-full border-4 border-honey-400 shadow-float"
                        />
                    </div>

                    <p className="text-neutral-600 text-lg max-w-xl mx-auto">
                        Ready to simplify your life or business? We'd love to hear from you.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {contactMethods.map((method, index) => {
                        const Icon = method.icon;
                        const cardContent = (
                            <div className={`bg-white rounded-2xl p-6 md:p-8 text-center transition-all duration-300 ${method.clickable ? 'hover:shadow-card-hover hover:-translate-y-1 cursor-pointer' : ''
                                } border border-neutral-200/50`}>
                                <div className="w-14 h-14 rounded-xl bg-honey-100 flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-7 h-7 text-honey-600" />
                                </div>
                                <h3 className="font-display text-lg font-medium text-neutral-900 mb-2">
                                    {method.title}
                                </h3>
                                <p className="text-neutral-600 break-words">
                                    {method.value}
                                </p>
                            </div>
                        );

                        return method.clickable ? (
                            <a key={index} href={method.href!} className="block">
                                {cardContent}
                            </a>
                        ) : (
                            <div key={index}>
                                {cardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
