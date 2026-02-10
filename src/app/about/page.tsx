import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "About | The Helpful Hive",
    description: "Learn about The Helpful Hive — sweet solutions for busy homes, pets, and small businesses in the Wentzville, MO area.",
};

export default function AboutPage() {
    const serviceCategories = [
        {
            name: 'Bee Done',
            tagline: 'Cleaning & Errands',
            color: '#BFC8A1',
            href: '/for-home-and-life/bee-done',
            items: ['Deep Cleaning', 'Laundry Services', 'Custom Hourly Tasks'],
        },
        {
            name: 'Bee Kind',
            tagline: 'Pet & Plant Care',
            color: '#98B4AC',
            href: '/for-home-and-life/bee-kind',
            items: ['Dog Walking', 'Feeding & Check-ins', 'Plant Watering'],
        },
        {
            name: 'Bee Organized',
            tagline: 'Organization & Decluttering',
            color: '#A2C1D4',
            href: '/for-home-and-life/bee-organized',
            items: ['Closet Systems', 'Home Office Setup', 'Garage Resets'],
        },
        {
            name: 'Bee Connected',
            tagline: 'Coordination & Community',
            color: '#7B6B8D',
            href: '/for-home-and-life/bee-connected',
            items: ['Event Coordination', 'Realtor Assistance', 'Volunteer Support'],
        },
        {
            name: 'Bee Balanced',
            tagline: 'Bookkeeping & Financials',
            color: '#4A5D66',
            href: '/for-business-and-money',
            items: ['Monthly Bookkeeping', 'QuickBooks Cleanup', 'Payroll Support'],
        },
    ];

    return (
        <div className="min-h-screen bg-[#FFF8E7]">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E2C16B]/10 via-[#FFF8E7] to-[#C17A5B]/5" />

                <div className="absolute inset-0 opacity-5 pointer-events-none">
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
                            <h1 className="font-[family-name:var(--font-lora)] text-4xl md:text-6xl font-bold text-[#3C3C3C] mb-4">
                                About <span className="text-[#E2C16B]">The Helpful Hive</span>
                            </h1>

                            <p className="font-[family-name:var(--font-allura)] text-2xl md:text-3xl text-[#C17A5B] mb-6">
                                Because even the busiest bees need a little help.
                            </p>

                            <p className="font-[family-name:var(--font-montserrat)] text-lg text-[#525252] leading-relaxed mb-6">
                                The Helpful Hive is a family-focused service business based in <strong>Wentzville, Missouri</strong>. We believe that when families are supported at home and in business, communities thrive.
                            </p>

                            <p className="font-[family-name:var(--font-montserrat)] text-lg text-[#525252] leading-relaxed">
                                From cleaning and pet care to bookkeeping and event coordination, we offer a full suite of services designed to lighten your load — so you can spend more time on what matters most.
                            </p>
                        </div>

                        {/* Right - Logo */}
                        <div className="flex justify-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80">
                                <div className="absolute inset-4 bg-[#E2C16B]/10 rounded-full blur-2xl" />
                                <div className="relative w-full h-full rounded-full border-4 border-[#E2C16B]/40 shadow-2xl overflow-hidden bg-white animate-float">
                                    <Image src="/logo-circular.jpg" alt="The Helpful Hive" fill className="object-cover" priority />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-12 px-6 bg-[#3C3C3C]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-[family-name:var(--font-lora)] text-2xl md:text-3xl font-bold text-white mb-4">
                        Our Mission
                    </h2>
                    <p className="font-[family-name:var(--font-montserrat)] text-white/80 text-lg leading-relaxed max-w-3xl mx-auto">
                        We&apos;re here to help families succeed — at home and in business. By taking the sting out of life&apos;s everyday to-dos, we give you more time, less stress, and a sweeter way to live.
                    </p>
                </div>
            </section>

            {/* Meet the Queen Bee */}
            <section className="py-16 md:py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-10 items-center">
                        {/* Photo */}
                        <div className="md:col-span-2 flex justify-center">
                            <div className="relative w-56 h-56 md:w-64 md:h-64">
                                <div className="w-full h-full rounded-full border-4 border-[#E2C16B] shadow-xl overflow-hidden">
                                    <Image src="/queen-bee.jpg" alt="Amanda — The Queen Bee" fill className="object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Bio */}
                        <div className="md:col-span-3">
                            <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-2">
                                Meet the <span className="text-[#E2C16B]">Queen Bee</span>
                            </h2>
                            <p className="font-[family-name:var(--font-allura)] text-xl text-[#C17A5B] mb-4">Amanda Knittel</p>

                            <p className="font-[family-name:var(--font-montserrat)] text-[#525252] leading-relaxed mb-4">
                                As a busy mom and lifelong organizer, I started The Helpful Hive because I know firsthand how overwhelming it can be to juggle everything. I wanted to build something that truly helps families — not just checks a box, but makes life genuinely easier.
                            </p>
                            <p className="font-[family-name:var(--font-montserrat)] text-[#525252] leading-relaxed">
                                Whether it&apos;s tackling your to-do list, caring for your pets while you&apos;re away, or keeping your books balanced, every service we offer comes from a place of care, reliability, and real understanding of what families need.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services Overview */}
            <section className="py-16 md:py-20 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-3">
                            The Bee Ecosystem
                        </h2>
                        <p className="font-[family-name:var(--font-montserrat)] text-[#525252] max-w-2xl mx-auto">
                            Five service categories designed to support every part of your life — from your home to your business.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
                        {serviceCategories.map((cat) => (
                            <Link
                                key={cat.name}
                                href={cat.href}
                                className="group bg-[#FFF8E7] rounded-2xl p-5 border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                style={{ borderColor: `${cat.color}30` }}
                            >
                                {/* Color dot */}
                                <div className="w-4 h-4 rounded-full mb-3" style={{ backgroundColor: cat.color }} />

                                <h3 className="font-[family-name:var(--font-lora)] text-lg font-bold text-[#3C3C3C] mb-1">
                                    {cat.name}
                                </h3>
                                <p className="font-[family-name:var(--font-montserrat)] text-xs font-medium mb-3" style={{ color: cat.color }}>
                                    {cat.tagline}
                                </p>
                                <ul className="space-y-1.5">
                                    {cat.items.map((item) => (
                                        <li key={item} className="font-[family-name:var(--font-montserrat)] text-xs text-[#525252] flex items-start gap-1.5">
                                            <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 md:py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-[#3C3C3C] mb-3">
                            What We Believe
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-4xl mb-4">🏡</div>
                            <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-[#3C3C3C] mb-2">Family First</h3>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] leading-relaxed">
                                Everything we do is rooted in helping families thrive — at home, at work, and in the community.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-[#3C3C3C] mb-2">Trust & Reliability</h3>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] leading-relaxed">
                                We show up on time, every time. Your home and business are in good hands with The Helpful Hive.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-4">🌱</div>
                            <h3 className="font-[family-name:var(--font-lora)] text-xl font-bold text-[#3C3C3C] mb-2">Community Roots</h3>
                            <p className="font-[family-name:var(--font-montserrat)] text-sm text-[#525252] leading-relaxed">
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
                    <h2 className="font-[family-name:var(--font-lora)] text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to <span className="text-[#E2C16B]">sweeten</span> your life?
                    </h2>
                    <p className="font-[family-name:var(--font-montserrat)] text-white/70 mb-8 text-lg">
                        We&apos;d love to hear from you. Let&apos;s find the right services for your family or business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-[#C17A5B] text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-[#a86a4d] transition-all hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Contact Us
                        </Link>
                        <a
                            href="tel:+13145267240"
                            className="inline-block px-8 py-4 bg-transparent border-2 border-white/30 text-white font-[family-name:var(--font-montserrat)] font-semibold rounded-full hover:bg-white/10 transition-all"
                        >
                            Call (314) 526-7240
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
