import Image from "next/image"

export function About() {
    return (
        <section id="about" className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative">
                            <Image
                                src="/owner.jpg"
                                alt="Meet our Queen Bee"
                                width={400}
                                height={400}
                                className="rounded-2xl shadow-lg"
                            />
                            <div className="absolute -bottom-4 -right-4 bg-accent rounded-lg px-6 py-3 shadow-lg">
                                <p className="font-serif font-semibold text-foreground">Our Queen Bee</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Meet Your Home Concierge</h2>
                        <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Hi there! I'm the founder of The Helpful Hive, and I understand firsthand how overwhelming home
                                management can be. As a wife, mom, and busy professional, I know that keeping a home running smoothly
                                takes more than just time—it takes coordination, attention to detail, and a network of trusted service
                                providers.
                            </p>
                            <p>
                                That's why I created The Helpful Hive. My mission is to help busy families, seasonal residents, and
                                anyone who needs a helping hand with their home. Whether you're traveling for work, enjoying a vacation,
                                or simply need extra support, I'm here to ensure your home is always cared for.
                            </p>
                            <p className="font-medium text-foreground">Because even the busiest bees need a little help.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
