import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "About | The Helpful Hive",
    description: "Learn about The Helpful Hive — sweet solutions for busy homes, pets, and small businesses in the Wentzville, MO area.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-cream-white">
            {/* Hero Section - No Logo */}
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

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-6xl font-bold text-charcoal-gray mb-4">
                        About <span className="text-warm-honey">The Helpful Hive</span>
                    </h1>

                    <p className="font-[family-name:var(--font-lora)] italic text-2xl md:text-3xl text-terra-cotta-dark mb-8">
                        Because even the busiest bees need a little help.
                    </p>

                    <p className="font-[family-name:var(--font-montserrat)] text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                        The Helpful Hive is a multi-service business designed for the modern &ldquo;busy bee.&rdquo; We help local families and professionals reclaim their time by catching the tasks that fall off their to-do lists.
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
                                <Image src="/amanda-headshot.jpg" alt="Amanda — The Queen Bee" fill className="object-cover" />
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="md:col-span-3">
                            <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-warm-honey-dark mb-2">
                                Meet the Queen Bee
                            </h2>
                            <p className="font-[family-name:var(--font-allura)] text-xl text-terra-cotta-dark mb-4">Amanda</p>

                            <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 leading-relaxed mb-4">
                                My name is Amanda, and I run The Helpful Hive. After leaving the corporate world, I realized that in our fast-paced lives, it&apos;s often the miscellaneous chores that prevent us from truly enjoying our homes. I spent 20 years in healthcare administration and billing—a career rooted in high-level organization and precision. That background gave me a deep-seated love for detail and a professional eye for efficiency.
                            </p>
                            <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 leading-relaxed">
                                Today, I bring that same level of professional scrutiny and genuine heart to every errand, chore, and pet-sitting visit. Through my current service wings, <strong>Bee Done</strong> (home chores and errands) and <strong>Bee Kind</strong> (pet and house sitting), I handle the daily clutter of life so your hive can stay focused on what matters most.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rooted in Wentzville */}
            <section className="py-12 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-warm-honey-dark mb-4">
                        Rooted in Wentzville
                    </h2>
                    <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 text-lg leading-relaxed max-w-3xl mx-auto">
                        My family moved to Wentzville in 2019, and I quickly fell in love with this community. I&apos;ve spent years serving as a &ldquo;chaos coordinator&rdquo; for local school board campaigns, PTA events, and my daughters&apos; basketball teams. I am known as the person who finds the solution when things get complicated, and I am proud to bring that problem-solving spirit to my neighbors.
                    </p>
                </div>
            </section>

            {/* Life in My Hive */}
            <section className="py-16 md:py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-10 items-center">
                        <div className="md:col-span-3 order-2 md:order-1">
                            <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-warm-honey-dark mb-3">
                                Life in My Hive
                            </h2>
                            <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 leading-relaxed mb-4">
                                When I&apos;m not color-coding a bookshelf or building a complex spreadsheet, you&apos;ll find me with my husband, Joe, and our two daughters, Harleigh and Scarlett. Our home is a full hive with two Puggles (Cassian and Lucy) and two cats (Taco and Randy).
                            </p>
                            <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 leading-relaxed">
                                I&apos;m an avid reader, and Book Club Day is easily my favorite day of the month! My favorite way to start a morning is with coffee and a color-coded to-do list. I&apos;m a firm believer that there is so much beauty in the chaos. Even though, in my house, there is quite a lot of chaos.
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

            {/* My Mission */}
            <section className="py-12 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-warm-honey-dark mb-4">
                        My Mission
                    </h2>
                    <p className="font-[family-name:var(--font-montserrat)] text-neutral-600 text-lg leading-relaxed max-w-3xl mx-auto">
                        If I can give you one thing, it is the <strong>gift of time</strong> to focus on your own passions and to provide the &ldquo;sigh of relief&rdquo; every busy household deserves. I treat your home, your pets, and your time with the same meticulous care and devotion I give my own, so you can stop doing it all and start living it all.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 md:py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-charcoal-gray mb-3">
                            Why The Helpful Hive?
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="text-4xl mb-4">🌱</div>
                            <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-charcoal-gray mb-2">Community Roots</h3>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-neutral-600 leading-relaxed">
                                Based in Wentzville, MO, we&apos;re proud to serve the families and small businesses in our local community.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-charcoal-gray mb-2">Trust &amp; Reliability</h3>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-neutral-600 leading-relaxed">
                                We show up on time, every time. You&apos;ll receive a text/photo update once your service is completed.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="text-4xl mb-4">✨</div>
                            <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-charcoal-gray mb-2">Custom Care</h3>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-neutral-600 leading-relaxed">
                                No two hives are the same. Every service is tailored to your specific household routine.
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
                    <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-4xl font-bold mb-6 text-warm-honey">
                        Ready to see how we can work together?
                    </h2>
                    <p className="text-white/80 mb-10 text-xl font-light">
                        Schedule a 15-minute Buzz Call today and let&apos;s get to work!
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-warm-honey text-charcoal-gray font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#d4b35f] transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Schedule a Buzz Call
                    </Link>
                </div>
            </section>
        </div>
    );
}
