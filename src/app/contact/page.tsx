'use client';

import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import React, { useState } from "react";

export default function ContactPage() {
    const contactMethods = [
        {
            icon: Phone,
            title: 'Phone',
            value: (
                <>
                    <span className="block font-medium">(314) 526-7240</span>
                    <span className="block text-sm opacity-80 mt-0.5">Call or Text</span>
                </>
            ),
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

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        sessionType: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Construct mailto link
        const subject = encodeURIComponent(`New Inquiry from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n` +
            `Service Area: ${formData.sessionType}\n\n` +
            `Message:\n${formData.message}`
        );
        window.location.href = `mailto:hellohelpfulhive@gmail.com?subject=${subject}&body=${body}`;
    };

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

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-5xl lg:text-6xl font-medium text-neutral-900 mb-6">
                        Ready to <span className="text-gradient-honey">Bee Done?</span>
                    </h1>
                    <p className="text-neutral-600 text-lg md:text-xl max-w-2xl mx-auto">
                        Ready to simplify your life or business? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">

                    {/* Left Column: Contact Methods & Socials */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="grid gap-4">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;
                                const cardContent = (
                                    <div className={`bg-white rounded-2xl p-6 text-center h-full flex flex-col justify-center transition-all duration-300 ${method.clickable ? 'hover:shadow-card-hover hover:-translate-y-1 cursor-pointer' : ''
                                        } border border-neutral-200/50`}>
                                        <div className="w-12 h-12 rounded-xl bg-honey-100 flex items-center justify-center mx-auto mb-3">
                                            <Icon className="w-6 h-6 text-honey-600" />
                                        </div>
                                        <h3 className="font-display text-lg font-medium text-neutral-900 mb-1">
                                            {method.title}
                                        </h3>
                                        <div className="text-neutral-600 break-words">
                                            {method.value}
                                        </div>
                                    </div>
                                );

                                return method.clickable ? (
                                    <a key={index} href={method.href!} className="block h-full">
                                        {cardContent}
                                    </a>
                                ) : (
                                    <div key={index} className="h-full">
                                        {cardContent}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Social Links Box */}
                        <div className="bg-white rounded-2xl p-6 text-center border border-neutral-200/50 flex flex-col justify-center shadow-sm">
                            <h3 className="font-display text-lg font-medium text-neutral-900 mb-4">Connect With Us</h3>
                            <div className="flex justify-center gap-6">
                                <a
                                    href="https://www.facebook.com/thehelpfulhive"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={28} strokeWidth={2} />
                                </a>
                                <a
                                    href="https://www.instagram.com/thehelpfulhiveco/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#E1306C]/10 text-[#E1306C] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888]"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={28} strokeWidth={2} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-neutral-200/60">
                        <h2 className="font-[family-name:var(--font-lora)] text-4xl font-bold text-neutral-900 mb-8">Send a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-1.5">
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Your Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Smith"
                                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-honey-500 focus:border-honey-500 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email Address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-honey-500 focus:border-honey-500 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="(555) 555-5555"
                                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-honey-500 focus:border-honey-500 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="sessionType" className="block text-sm font-medium text-neutral-700">Service Area *</label>
                                <select
                                    id="sessionType"
                                    name="sessionType"
                                    required
                                    value={formData.sessionType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-honey-500 focus:border-honey-500 outline-none transition-all bg-white"
                                >
                                    <option value="" disabled>Select a service area</option>
                                    <option value="Home & Life (Bee Done/Bee Kind)">Home & Life (Bee Done/Bee Kind)</option>
                                    <option value="Business & Bookkeeping">Business & Bookkeeping</option>
                                    <option value="Administrative Care">Administrative Care</option>
                                    <option value="Concierge Packages">Concierge Packages</option>
                                    <option value="Other / General Inquiry">Other / General Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us how we can help..."
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-honey-500 focus:border-honey-500 outline-none transition-all resize-y"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 px-6 bg-[#A18870] hover:bg-[#8D745E] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-xl transition-all shadow-sm hover:shadow-md text-lg mt-2"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}
