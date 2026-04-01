'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface BuzzCallModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CONTACT_OPTIONS = ['Call', 'Text', 'Email'];
const REFERRAL_OPTIONS = ['Word of Mouth', 'Social Media', 'Google Search', 'Facebook', 'Instagram', 'Nextdoor', 'Other'];

export default function BuzzCallModal({ isOpen, onClose }: BuzzCallModalProps) {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        contactMethod: '',
        referralSource: '',
        hiveNeeds: '',
        timeline: '',
    });

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setSubmitted(false);
                setFormData({
                    name: '', email: '', phone: '', contactMethod: '',
                    referralSource: '', hiveNeeds: '', timeline: '',
                });
            }, 300);
        }
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const payload = new FormData();
            payload.append('name', formData.name);
            payload.append('email', formData.email);
            payload.append('phone', formData.phone);
            payload.append('_subject', `New Inquiry — ${formData.name}`);
            payload.append('Preferred Contact Method', formData.contactMethod);
            payload.append('How did you hear about us', formData.referralSource);
            payload.append('Hive Needs', formData.hiveNeeds);
            payload.append('How soon to start', formData.timeline);
            payload.append('_template', 'table');
            payload.append('_captcha', 'false');

            const response = await fetch('https://formsubmit.co/ajax/hellohelpfulhive@gmail.com', {
                method: 'POST',
                body: payload,
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                // Fallback to mailto if API fails
                const lines = [
                    `Name: ${formData.name}`,
                    `Email: ${formData.email}`,
                    `Phone: ${formData.phone}`,
                    `Preferred Contact: ${formData.contactMethod}`,
                    `How they heard about us: ${formData.referralSource}`,
                    ``,
                    `Hive Needs:`,
                    formData.hiveNeeds,
                    ``,
                    `Timeline: ${formData.timeline}`,
                ];
                const subject = encodeURIComponent(`New Inquiry — ${formData.name}`);
                const body = encodeURIComponent(lines.join('\n'));
                window.location.href = `mailto:hellohelpfulhive@gmail.com?subject=${subject}&body=${body}`;
                setSubmitted(true);
            }
        } catch {
            // Fallback to mailto on network error
            const lines = [
                `Name: ${formData.name}`,
                `Email: ${formData.email}`,
                `Phone: ${formData.phone}`,
                `Preferred Contact: ${formData.contactMethod}`,
                `How they heard about us: ${formData.referralSource}`,
                ``,
                `Hive Needs:`,
                formData.hiveNeeds,
                ``,
                `Timeline: ${formData.timeline}`,
            ];
            const subject = encodeURIComponent(`New Inquiry — ${formData.name}`);
            const body = encodeURIComponent(lines.join('\n'));
            window.location.href = `mailto:hellohelpfulhive@gmail.com?subject=${subject}&body=${body}`;
            setSubmitted(true);
        } finally {
            setSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-modal-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-600 transition-colors z-10"
                    aria-label="Close"
                >
                    <X size={24} />
                </button>

                {submitted ? (
                    /* Success State */
                    <div className="p-10 md:p-14 text-center">
                        <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-charcoal-gray mb-4">
                            Thanks for reaching out!
                        </h2>
                        <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 max-w-md mx-auto leading-relaxed mb-2">
                            Your message has been delivered to the Hive. I&apos;ll review your details and contact you shortly.
                        </p>
                        <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 italic mt-4">
                            Talk soon,<br />Amanda
                        </p>
                        <button
                            type="button"
                            onClick={onClose}
                            className="mt-8 px-8 py-3 bg-terra-cotta text-cream-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-terra-cotta-dark transition-all"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    /* Form */
                    <form onSubmit={handleSubmit} className="p-8 md:p-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-charcoal-gray mb-2">
                                Contacting the Queen Bee
                            </h2>
                            <p className="font-[family-name:var(--font-lora)] italic text-neutral-500 text-sm">
                                Let&apos;s chat about your hive&apos;s needs and how I can help you reclaim your time.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* --- Your Info --- */}
                            <fieldset>
                                <legend className="font-[family-name:var(--font-lora)] text-lg font-bold text-charcoal-gray mb-4">Your Info</legend>
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <label htmlFor="bc-name" className="block text-sm font-medium text-neutral-700">Name *</label>
                                        <input type="text" id="bc-name" name="name" required value={formData.name} onChange={handleChange}
                                            placeholder="First and Last"
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-warm-honey focus:border-warm-honey outline-none transition-all text-sm" />
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label htmlFor="bc-email" className="block text-sm font-medium text-neutral-700">Email Address *</label>
                                            <input type="email" id="bc-email" name="email" required value={formData.email} onChange={handleChange}
                                                placeholder="you@email.com"
                                                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-warm-honey focus:border-warm-honey outline-none transition-all text-sm" />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="bc-phone" className="block text-sm font-medium text-neutral-700">Phone Number *</label>
                                            <input type="tel" id="bc-phone" name="phone" required value={formData.phone} onChange={handleChange}
                                                placeholder="(555) 555-5555"
                                                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-warm-honey focus:border-warm-honey outline-none transition-all text-sm" />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label htmlFor="bc-contact" className="block text-sm font-medium text-neutral-700">Preferred Contact Method *</label>
                                            <select id="bc-contact" name="contactMethod" required value={formData.contactMethod} onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-warm-honey focus:border-warm-honey outline-none transition-all bg-white text-sm">
                                                <option value="" disabled>Select...</option>
                                                {CONTACT_OPTIONS.map(opt => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="bc-referral" className="block text-sm font-medium text-neutral-700">How did you hear about us?</label>
                                            <select id="bc-referral" name="referralSource" value={formData.referralSource} onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-warm-honey focus:border-warm-honey outline-none transition-all bg-white text-sm">
                                                <option value="" disabled>Select...</option>
                                                {REFERRAL_OPTIONS.map(opt => (
                                                    <option key={opt} value={opt}>{opt}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <hr className="border-neutral-200" />

                            {/* --- Tell Us More --- */}
                            <fieldset>
                                <legend className="font-[family-name:var(--font-lora)] text-lg font-bold text-charcoal-gray mb-4">Tell Us More</legend>
                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <label htmlFor="bc-needs" className="block text-sm font-medium text-neutral-700">Tell me a little bit about your hive needs. *</label>
                                        <textarea id="bc-needs" name="hiveNeeds" required value={formData.hiveNeeds} onChange={handleChange}
                                            placeholder={'"I need help with weekly grocery runs" or "Looking for a reliable pet sitter for vacation.", etc.'}
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-warm-honey focus:border-warm-honey outline-none transition-all text-sm resize-y" />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="bc-timeline" className="block text-sm font-medium text-neutral-700">How soon are you looking to start? *</label>
                                        <input type="text" id="bc-timeline" name="timeline" required value={formData.timeline} onChange={handleChange}
                                            placeholder={'"Weekly, starting next week." or "Our next vacation is in May.", etc.'}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-warm-honey focus:border-warm-honey outline-none transition-all text-sm" />
                                    </div>
                                </div>
                            </fieldset>

                            {/* Submit */}
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="px-12 py-3 bg-terra-cotta text-cream-white font-[family-name:var(--font-montserrat)] font-bold rounded-full hover:bg-terra-cotta-dark transition-all hover:shadow-lg text-base disabled:opacity-60"
                                >
                                    {submitting ? 'Sending...' : "Let\u2019s Chat"}
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
