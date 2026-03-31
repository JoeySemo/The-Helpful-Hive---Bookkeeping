'use client';

import BuzzCallButton from '@/components/BuzzCallButton';

export default function PreFooter() {
    return (
        <section className="py-10 px-6 bg-[#3C3C3C] relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="honeycomb-prefooter" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#honeycomb-prefooter)" />
                </svg>
            </div>
            <div className="max-w-3xl mx-auto text-center relative z-10">
                <p className="font-[family-name:var(--font-montserrat)] text-[#E2C16B]/90 text-base md:text-lg leading-relaxed mb-8">
                    <strong>Every hive is unique.</strong> Because your needs are one-of-a-kind, I specialize in custom-built solutions rather than one-size-fits-all packages. I&apos;d love to hear about your hive so we can create a plan that fits you perfectly.
                </p>
                <BuzzCallButton
                    className="inline-block px-8 py-3 bg-terra-cotta text-cream-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-terra-cotta-dark transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                    Let&apos;s Chat
                </BuzzCallButton>
            </div>
        </section>
    );
}
