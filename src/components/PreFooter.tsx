'use client';

import BookServiceButton from '@/components/BookServiceButton';
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
                <p className="font-[family-name:var(--font-montserrat)] text-[#E2C16B]/90 text-base md:text-lg leading-relaxed mb-6">
                    Every hive is different. While we offer a structured menu, we specialize in customizing our services to fit your unique needs.
                </p>
                <p className="font-[family-name:var(--font-montserrat)] text-[#E2C16B]/90 text-base md:text-lg leading-relaxed mb-8">
                    If you already know exactly what you need to get your hive in order, <strong>Book a Service</strong> now. Not sure where to start? Schedule a <strong>15-minute Buzz Call</strong> so I can learn more about your needs, and together we&apos;ll build a custom package that suits you perfectly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <BookServiceButton
                        className="inline-block px-8 py-3 bg-warm-honey text-charcoal-gray font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#d4b35f] transition-all hover:shadow-lg hover:-translate-y-0.5"
                    />
                    <BuzzCallButton
                        className="inline-block px-8 py-3 border-2 border-warm-honey text-warm-honey font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-warm-honey hover:text-charcoal-gray transition-all hover:shadow-lg hover:-translate-y-0.5"
                    />
                </div>
            </div>
        </section>
    );
}
