'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface BookServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SERVICE_OPTIONS = [
    { id: 'bee-done-chores', label: 'Bee Done: Home Chores', category: 'bee-done', desc: 'Laundry, dishes, kitchen reset' },
    { id: 'bee-done-errands', label: 'Bee Done: Errands', category: 'bee-done', desc: 'Grocery shopping, returns, post office' },
    { id: 'bee-kind-pet', label: 'Bee Kind: Pet Sitting', category: 'bee-kind', desc: 'Feeding, walks, playtime' },
    { id: 'bee-kind-house', label: 'Bee Kind: House Sitting', category: 'bee-kind', desc: 'Mail, plants, security checks' },
];

const FREQUENCY_OPTIONS = [
    'One-time visit',
    'Weekly support',
    'Bi-weekly support',
    'Vacation / Specific date range',
];

const HOME_ACCESS_OPTIONS = [
    'Yes, I will be home',
    'No, I will not be home',
    'I have a keypad / hide-a-key',
];

export default function BookServiceModal({ isOpen, onClose }: BookServiceModalProps) {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        contactMethod: '',
        services: [] as string[],
        // Bee Done: Home Chores
        choreTypes: [] as string[],
        homeSize: '',
        // Bee Done: Errands
        errandTypes: [] as string[],
        errandLocations: '',
        // Bee Kind: Pet Sitting
        petInfo: '',
        numberOfPets: '',
        petCareNotes: '',
        // Bee Kind: House Sitting
        houseSittingDetails: '',
        travelDates: '',
        // General
        preferredDate: '',
        frequency: '',
        buzzDetails: '',
        homeAccess: '',
        specialInstructions: '',
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
                    name: '', email: '', phone: '', address: '', contactMethod: '',
                    services: [], choreTypes: [], homeSize: '', errandTypes: [], errandLocations: '',
                    petInfo: '', numberOfPets: '', petCareNotes: '',
                    houseSittingDetails: '', travelDates: '', preferredDate: '',
                    frequency: '', buzzDetails: '', homeAccess: '', specialInstructions: '',
                });
            }, 300);
        }
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleServiceToggle = (serviceId: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(serviceId)
                ? prev.services.filter(s => s !== serviceId)
                : [...prev.services, serviceId],
        }));
    };

    const hasHomeChores = formData.services.includes('bee-done-chores');
    const hasErrands = formData.services.includes('bee-done-errands');
    const hasPetSitting = formData.services.includes('bee-kind-pet');
    const hasHouseSitting = formData.services.includes('bee-kind-house');

    const handleChoreToggle = (chore: string) => {
        setFormData(prev => ({
            ...prev,
            choreTypes: prev.choreTypes.includes(chore)
                ? prev.choreTypes.filter(c => c !== chore)
                : [...prev.choreTypes, chore],
        }));
    };

    const handleErrandToggle = (errand: string) => {
        setFormData(prev => ({
            ...prev,
            errandTypes: prev.errandTypes.includes(errand)
                ? prev.errandTypes.filter(e => e !== errand)
                : [...prev.errandTypes, errand],
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const selectedServices = SERVICE_OPTIONS
            .filter(s => formData.services.includes(s.id))
            .map(s => s.label)
            .join(', ');

        const lines = [
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            `Phone: ${formData.phone}`,
            `Address: ${formData.address}`,
            `Preferred Contact: ${formData.contactMethod}`,
            ``,
            `Services: ${selectedServices}`,
        ];

        if (hasHomeChores && formData.choreTypes.length > 0) {
            lines.push(`Chores Needed: ${formData.choreTypes.join(', ')}`);
        }
        if (hasHomeChores && formData.homeSize) {
            lines.push(`Home Size: ${formData.homeSize}`);
        }
        if (hasErrands && formData.errandTypes.length > 0) {
            lines.push(`Errand Types: ${formData.errandTypes.join(', ')}`);
        }
        if (hasErrands && formData.errandLocations) {
            lines.push(`Store/Location Details: ${formData.errandLocations}`);
        }
        if (hasPetSitting && formData.petInfo) {
            lines.push(`Pet Info: ${formData.petInfo}`);
        }
        if (hasPetSitting && formData.numberOfPets) {
            lines.push(`Number of Pets: ${formData.numberOfPets}`);
        }
        if (hasPetSitting && formData.petCareNotes) {
            lines.push(`Special Pet Care Notes: ${formData.petCareNotes}`);
        }
        if (hasHouseSitting && formData.houseSittingDetails) {
            lines.push(`House Sitting Details: ${formData.houseSittingDetails}`);
        }
        if (hasHouseSitting && formData.travelDates) {
            lines.push(`Travel Dates: ${formData.travelDates}`);
        }

        lines.push(
            ``,
            `Preferred Date: ${formData.preferredDate}`,
            `Frequency: ${formData.frequency}`,
            ``,
            `About the "Buzz":`,
            formData.buzzDetails,
            ``,
            `Home Access: ${formData.homeAccess}`,
        );

        if (formData.specialInstructions) {
            lines.push(`Special Instructions: ${formData.specialInstructions}`);
        }

        const subject = encodeURIComponent(`Book a Service — ${formData.name}`);
        const body = encodeURIComponent(lines.join('\n'));
        window.location.href = `mailto:hellohelpfulhive@gmail.com?subject=${subject}&body=${body}`;

        setSubmitted(true);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Book a Service"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative w-full max-w-2xl max-h-[90vh] mx-4 bg-white rounded-3xl shadow-2xl overflow-y-auto animate-modal-in">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                    aria-label="Close"
                >
                    <X size={20} className="text-neutral-600" />
                </button>

                {submitted ? (
                    /* Success State */
                    <div className="p-10 md:p-14 text-center">
                        <div className="text-6xl mb-6">
                            <Image src="/bee-plain.png" alt="The Helpful Hive Bee" width={80} height={80} className="mx-auto" />
                        </div>
                        <h2 className="font-[family-name:var(--font-lora)] text-3xl font-bold text-charcoal-gray mb-4">
                            Request Received!
                        </h2>
                        <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 leading-relaxed mb-8">
                            Thanks for trusting The Helpful Hive with your to-do list! I am reviewing your request and will reach out within 24 hours to confirm my availability and provide a customized quote. Let&apos;s get those wings resting!
                        </p>
                        <button
                            onClick={onClose}
                            className="px-8 py-3 bg-[#3C3C3C] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#2a2a2a] transition-all"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    /* Form */
                    <div className="p-8 md:p-10">
                        <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-charcoal-gray mb-2">
                            Book a Service
                        </h2>
                        <p className="font-[family-name:var(--font-montserrat)] text-neutral-500 text-sm mb-8 leading-relaxed">
                            Ready to clear your to-do list? Fill out the details below, and I&apos;ll be in touch to confirm your booking and finalize the plan for your hive.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* --- General Information --- */}
                            <fieldset>
                                <legend className="font-[family-name:var(--font-lora)] text-lg font-bold text-charcoal-gray mb-4">Your Information</legend>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label htmlFor="bs-name" className="block text-sm font-medium text-neutral-700">Name *</label>
                                        <input type="text" id="bs-name" name="name" required value={formData.name} onChange={handleChange}
                                            placeholder="First & Last"
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all text-sm" />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="bs-email" className="block text-sm font-medium text-neutral-700">Email *</label>
                                        <input type="email" id="bs-email" name="email" required value={formData.email} onChange={handleChange}
                                            placeholder="you@example.com"
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all text-sm" />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="bs-phone" className="block text-sm font-medium text-neutral-700">Phone *</label>
                                        <input type="tel" id="bs-phone" name="phone" required value={formData.phone} onChange={handleChange}
                                            placeholder="(555) 555-5555"
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all text-sm" />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="bs-contact" className="block text-sm font-medium text-neutral-700">Preferred Contact *</label>
                                        <select id="bs-contact" name="contactMethod" required value={formData.contactMethod} onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all bg-white text-sm">
                                            <option value="" disabled>Select...</option>
                                            <option value="Email">Email</option>
                                            <option value="Text">Text</option>
                                            <option value="Phone Call">Phone Call</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mt-4 space-y-1">
                                    <label htmlFor="bs-address" className="block text-sm font-medium text-neutral-700">
                                        Physical Address *
                                        <span className="text-xs text-neutral-400 font-normal ml-1">Essential for mapping out your errands/visits in Wentzville</span>
                                    </label>
                                    <input type="text" id="bs-address" name="address" required value={formData.address} onChange={handleChange}
                                        placeholder="123 Main St, Wentzville, MO"
                                        className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all text-sm" />
                                </div>
                            </fieldset>

                            <hr className="border-neutral-200" />

                            {/* --- Service Selection --- */}
                            <fieldset>
                                <legend className="font-[family-name:var(--font-lora)] text-lg font-bold text-charcoal-gray mb-4">Which service(s) are you interested in?</legend>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {SERVICE_OPTIONS.map(service => (
                                        <label
                                            key={service.id}
                                            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                                formData.services.includes(service.id)
                                                    ? 'border-[#E2C16B] bg-[#FFF8E7] shadow-sm'
                                                    : 'border-neutral-200 hover:border-neutral-300 bg-white'
                                            }`}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={formData.services.includes(service.id)}
                                                onChange={() => handleServiceToggle(service.id)}
                                                className="mt-0.5 w-4 h-4 accent-[#E2C16B] rounded"
                                            />
                                            <div>
                                                <div className="font-[family-name:var(--font-montserrat)] font-semibold text-sm text-charcoal-gray">{service.label}</div>
                                                <div className="text-xs text-neutral-500 mt-0.5">{service.desc}</div>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </fieldset>

                            {/* --- Conditional: Home Chores --- */}
                            {hasHomeChores && (
                                <div className="bg-[#FFF8E7] rounded-xl p-4 border border-[#E2C16B]/30 space-y-4 animate-fade-in">
                                    <div>
                                        <p className="text-sm font-medium text-charcoal-gray mb-3">🧹 Which chores do you need help with?</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            {['Laundry (wash/dry/fold)', 'Dishes & Kitchen Reset', 'General Tidying', 'Bathroom Refresh', 'Vacuuming / Sweeping', 'Trash & Recycling'].map(chore => (
                                                <label key={chore} className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-all text-sm ${
                                                    formData.choreTypes.includes(chore) ? 'border-[#E2C16B] bg-white shadow-sm' : 'border-transparent bg-white/50 hover:bg-white'
                                                }`}>
                                                    <input type="checkbox" checked={formData.choreTypes.includes(chore)} onChange={() => handleChoreToggle(chore)}
                                                        className="w-3.5 h-3.5 accent-[#E2C16B] rounded" />
                                                    <span className="text-[#525252]">{chore}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="bs-homesize" className="block text-sm font-medium text-charcoal-gray">Approximate Home Size</label>
                                        <select id="bs-homesize" name="homeSize" value={formData.homeSize} onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all bg-white text-sm">
                                            <option value="" disabled>Select...</option>
                                            <option value="Apartment / Studio">Apartment / Studio</option>
                                            <option value="1-2 Bedrooms">1–2 Bedrooms</option>
                                            <option value="3-4 Bedrooms">3–4 Bedrooms</option>
                                            <option value="5+ Bedrooms">5+ Bedrooms</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            {/* --- Conditional: Errands --- */}
                            {hasErrands && (
                                <div className="bg-[#FFF8E7] rounded-xl p-4 border border-[#E2C16B]/30 space-y-4 animate-fade-in">
                                    <div>
                                        <p className="text-sm font-medium text-charcoal-gray mb-3">🚗 What type of errands do you need?</p>
                                        <div className="grid grid-cols-2 gap-2">
                                            {['Grocery / Retail Pickup', 'Returns (Amazon, UPS, FedEx)', 'Dry Cleaning', 'Pharmacy Pickup', 'Post Office', 'Other'].map(errand => (
                                                <label key={errand} className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-all text-sm ${
                                                    formData.errandTypes.includes(errand) ? 'border-[#E2C16B] bg-white shadow-sm' : 'border-transparent bg-white/50 hover:bg-white'
                                                }`}>
                                                    <input type="checkbox" checked={formData.errandTypes.includes(errand)} onChange={() => handleErrandToggle(errand)}
                                                        className="w-3.5 h-3.5 accent-[#E2C16B] rounded" />
                                                    <span className="text-[#525252]">{errand}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="bs-errand-loc" className="block text-sm font-medium text-charcoal-gray">Store / Location Details</label>
                                        <input type="text" id="bs-errand-loc" name="errandLocations" value={formData.errandLocations} onChange={handleChange}
                                            placeholder={'e.g. "Walmart on Pearce, CVS on Hwy 40"'}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all text-sm bg-white" />
                                    </div>
                                </div>
                            )}

                            {/* --- Conditional: Pet Info (enhanced) --- */}
                            {hasPetSitting && (
                                <div className="bg-[#FFF8E7] rounded-xl p-4 border border-[#E2C16B]/30 space-y-4 animate-fade-in">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label htmlFor="bs-pet" className="block text-sm font-medium text-charcoal-gray">
                                                🐾 Pet&apos;s Name and Breed *
                                            </label>
                                            <input type="text" id="bs-pet" name="petInfo" required value={formData.petInfo} onChange={handleChange}
                                                placeholder={'e.g. "Cassian — Puggle, Lucy — Puggle"'}
                                                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all text-sm bg-white" />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="bs-numpets" className="block text-sm font-medium text-charcoal-gray">Number of Pets</label>
                                            <select id="bs-numpets" name="numberOfPets" value={formData.numberOfPets} onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all bg-white text-sm">
                                                <option value="" disabled>Select...</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4+">4+</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="bs-petcare" className="block text-sm font-medium text-charcoal-gray">Special Care Instructions</label>
                                        <textarea id="bs-petcare" name="petCareNotes" value={formData.petCareNotes} onChange={handleChange}
                                            placeholder={'Medications, dietary needs, walking schedule, favorite toys...'}
                                            rows={2}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all text-sm bg-white resize-y" />
                                    </div>
                                </div>
                            )}

                            {/* --- Conditional: House Sitting (enhanced) --- */}
                            {hasHouseSitting && (
                                <div className="bg-[#FFF8E7] rounded-xl p-4 border border-[#E2C16B]/30 space-y-4 animate-fade-in">
                                    <div className="space-y-1">
                                        <label htmlFor="bs-travel" className="block text-sm font-medium text-charcoal-gray">
                                            ✈️ Travel Dates
                                        </label>
                                        <input type="text" id="bs-travel" name="travelDates" value={formData.travelDates} onChange={handleChange}
                                            placeholder={'e.g. "March 20 – March 27"'}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all text-sm bg-white" />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="bs-house" className="block text-sm font-medium text-charcoal-gray">
                                            🏠 What needs attention while you&apos;re away?
                                        </label>
                                        <textarea id="bs-house" name="houseSittingDetails" value={formData.houseSittingDetails} onChange={handleChange}
                                            placeholder="Mail pickup, plant watering schedule, security check preferences, thermostat settings..."
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all text-sm bg-white resize-y" />
                                    </div>
                                </div>
                            )}

                            <hr className="border-neutral-200" />

                            {/* --- Scheduling --- */}
                            <fieldset>
                                <legend className="font-[family-name:var(--font-lora)] text-lg font-bold text-charcoal-gray mb-4">Scheduling</legend>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label htmlFor="bs-frequency" className="block text-sm font-medium text-neutral-700">Frequency *</label>
                                        <select id="bs-frequency" name="frequency" required value={formData.frequency} onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all bg-white text-sm">
                                            <option value="" disabled>Select...</option>
                                            {FREQUENCY_OPTIONS.map(opt => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="bs-date" className="block text-sm font-medium text-neutral-700">Preferred Date</label>
                                        <input type="date" id="bs-date" name="preferredDate" value={formData.preferredDate} onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all bg-white text-sm" />
                                    </div>
                                </div>
                            </fieldset>

                            <hr className="border-neutral-200" />

                            {/* --- Details --- */}
                            <fieldset>
                                <legend className="font-[family-name:var(--font-lora)] text-lg font-bold text-charcoal-gray mb-4">Details &amp; Instructions</legend>

                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <label htmlFor="bs-buzz" className="block text-sm font-medium text-neutral-700">
                                            Tell me about the &ldquo;Buzz&rdquo; *
                                        </label>
                                        <textarea id="bs-buzz" name="buzzDetails" required value={formData.buzzDetails} onChange={handleChange}
                                            placeholder={'e.g. "Need 3 loads of laundry folded," "Drop off donations at Goodwill," or "Feed Cassian and Lucy twice a day while I\'m in Chicago."'}
                                            rows={4}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all text-sm resize-y" />
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="bs-access" className="block text-sm font-medium text-neutral-700">Home Access</label>
                                        <select id="bs-access" name="homeAccess" value={formData.homeAccess} onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all bg-white text-sm">
                                            <option value="" disabled>Will you be home during the service?</option>
                                            {HOME_ACCESS_OPTIONS.map(opt => (
                                                <option key={opt} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="bs-special" className="block text-sm font-medium text-neutral-700">
                                            Special Instructions <span className="text-neutral-400 font-normal">(optional)</span>
                                        </label>
                                        <textarea id="bs-special" name="specialInstructions" value={formData.specialInstructions} onChange={handleChange}
                                            placeholder='Gate codes, "Don&#39;t let the cat out," parking info...'
                                            rows={2}
                                            className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:ring-2 focus:ring-[#E2C16B] focus:border-[#E2C16B] outline-none transition-all text-sm resize-y" />
                                    </div>
                                </div>
                            </fieldset>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full py-4 px-6 bg-[#3C3C3C] hover:bg-[#2a2a2a] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-xl transition-all shadow-sm hover:shadow-md text-lg"
                            >
                                Submit Request
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
