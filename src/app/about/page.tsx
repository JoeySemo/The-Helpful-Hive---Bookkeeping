import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "About | The Helpful Hive",
    description: "Learn about The Helpful Hive — sweet solutions for busy homes, pets, and small businesses in the Wentzville, MO area.",
};

export default function AboutPage() {


    return (
        <div className="min-h-screen bg-cream-white">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-honey/10 via-cream-white to-terra-cotta/5" />

                <div className="absolute inset-0 opacity-[0.065] pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-about" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-about)" />
                    </svg>
                </div>

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-6xl font-bold text-charcoal-gray mb-4">
                                About <span className="text-warm-honey">The Helpful Hive</span>
                            </h1>

                            <p className="font-[family-name:var(--font-allura)] text-2xl md:text-3xl text-terra-cotta-dark mb-6">
                                Because even the busiest bees need a little help.
                            </p>

                            <p className="font-[family-name:var(--font-montserrat)] text-lg text-neutral-600 leading-relaxed mb-6">
                                The Helpful Hive is a multi-service business designed for the modern "busy bee." We help local families and professionals reclaim their time by catching the tasks that fall off their to-do lists.
                            </p>

                            <p className="font-[family-name:var(--font-montserrat)] text-lg text-neutral-600 leading-relaxed">
                                Through our specialized service wings—covering everything from home chores and pet care to professional bookkeeping—we handle the tasks that clutter your schedule so your hive can stay focused on what matters most.
                            </p>
                        </div>

                        {/* Right - Logo */}
                        <div className="flex justify-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80">
                                <div className="absolute inset-4 bg-warm-honey/10 rounded-full blur-2xl" />
                                <div className="relative w-full h-full rounded-full border-4 border-warm-honey/40 shadow-2xl overflow-hidden bg-white animate-float">
                                    <Image src="/official-logo-circular.jpg" alt="The Helpful Hive" fill className="object-cover" priority />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-12 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-warm-honey-dark mb-4">
                        Our Mission
                    </h2>
                    <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 text-lg leading-relaxed max-w-3xl mx-auto">
                        If we can give you one thing, it is the <strong>gift of time</strong> to focus on your own passions and the peace of mind that comes with a "sigh of relief." We treat every home and business we step into with the same care and attention we give our own.
                    </p>
                </div>
            </section>

            {/* Meet the Queen Bee */}
            <section className="py-16 md:py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-10 items-center">
                        {/* Photo */}
                        <div className="md:col-span-2 flex justify-center">
                            <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 rounded-2xl border-4 border-warm-honey shadow-xl z-10 pointer-events-none" />
                                <Image src="/amanda-headshot.jpg" alt="Amanda Knittel — The Queen Bee" fill className="object-cover" />
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="md:col-span-3">
                            <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-warm-honey-dark mb-2">
                                Meet the Queen Bee
                            </h2>
                            <p className="font-[family-name:var(--font-allura)] text-xl text-terra-cotta-dark mb-4">Amanda Knittel</p>

                            <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 leading-relaxed mb-4">
                                My name is Amanda, and I run The Helpful Hive. My journey started with a realization after leaving the corporate world: in our fast-paced lives, the "miscellaneous" chores are often what prevent us from truly enjoying our homes. In today's world, we could all use a House Manager.
                            </p>
                            <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 leading-relaxed mb-4">
                                I also realized I have a unique advantage: a genuine joy for numbers and data. Most small business owners and solopreneurs want to focus on the passion that started their journey; not the bookkeeping or pricing analysis at the bottom of the list.
                            </p>
                            <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-warm-honey-dark mt-6 mb-2">
                                A Career Built on Precision
                            </h3>
                            <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 leading-relaxed">
                                My background is rooted in numbers and organization. With a 20-year career spanning billing and collection, healthcare administration, and small business bookkeeping, I have a deep-seated love for data and a keen attention to detail. Whether I am managing the books for your business (Bee Balanced) or organizing a chaotic pantry (Bee Organized), I bring the same level of professional scrutiny and care to every task.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Life in the Hive (Family) */}
            <section className="py-12 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-10 items-center">
                        <div className="md:col-span-3 order-2 md:order-1">
                            <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-warm-honey-dark mb-3">
                                Life in the Hive
                            </h2>
                            <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 leading-relaxed mb-4">
                                When I'm not color-coding a bookshelf or building a complex spreadsheet, you'll find me with my husband, Joe, and our two daughters, Harleigh and Scarlett.
                            </p>
                            <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 leading-relaxed">
                                Our home is a full hive with two Puggles (Cassian and Lucy) and two cats (Taco and Randy). I'm an avid reader, and "Book Club Day" is easily my favorite day of the month!
                            </p>
                        </div>
                        <div className="md:col-span-2 flex justify-center order-1 md:order-2">
                            <div className="relative w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 rounded-2xl border-4 border-terra-cotta/40 shadow-xl z-10 pointer-events-none" />
                                <Image src="/knittel-family.jpg" alt="The Knittel Family" fill className="object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Values */}
            <section className="py-16 md:py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-charcoal-gray mb-3">
                            What We Believe
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl mb-4">🏡</div>
                            <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-charcoal-gray mb-2">Family First</h3>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] leading-relaxed">
                                Everything we do is rooted in helping families thrive — at home, at work, and in the community.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-charcoal-gray mb-2">Trust & Reliability</h3>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-neutral-600 leading-relaxed">
                                We show up on time, every time. Your home and business are in good hands with The Helpful Hive.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">🌱</div>
                            <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-charcoal-gray mb-2">Community Roots</h3>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-neutral-600 leading-relaxed">
                                Based in Wentzville, MO, we&apos;re proud to serve the families and small businesses in our local community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-[#3C3C3C] relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <pattern id="honeycomb-about-cta" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M5 0L10 2.5V7.5L5 10L0 7.5V2.5Z" fill="none" stroke="#E2C16B" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#honeycomb-about-cta)" />
                    </svg>
                </div>
                <div className="max-w-3xl mx-auto text-center relative z-10">
                    <h2 className="font-display text-3xl md:text-5xl font-medium mb-6">
                        <span className="text-gradient-honey">Ready to sweeten your life?</span>
                    </h2>
                    <p className="text-white/80 mb-10 text-xl font-light">
                        We&apos;d love to hear from you. Let&apos;s find the right services for your family or business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/contact"
                            className="flex items-center justify-center px-8 h-[72px] bg-warm-honey text-charcoal-gray font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#d4b35f] transition-all hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                        >
                            Book a Visit
                        </Link>
                        <a
                            href="tel:+13145267240"
                            className="flex flex-col items-center justify-center px-8 h-[72px] bg-transparent border-2 border-white/60 text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-white/10 transition-all whitespace-nowrap"
                        >
                            <span className="block leading-tight">(314) 526-7240</span>
                            <span className="block text-sm font-normal mt-0.5 opacity-90 leading-tight tracking-normal">Call or Text</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
