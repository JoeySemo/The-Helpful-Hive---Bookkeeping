import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/concierge/ui/button"

export function Hero() {
    return (
        <section className="relative bg-accent py-20 lg:py-32 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight text-balance">
                            Your Home, <span className="text-primary">Perfectly Managed</span>
                        </h1>
                        <p className="mt-6 text-xl md:text-2xl text-primary font-serif italic">
                            Sweet solutions for busy homes, pets, and people.
                        </p>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Because even the busiest bees need a little help. We handle the details of home management so you can
                            focus on what matters most.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                                <Link href="#contact">Schedule a Consultation</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                                <Link href="#services">Explore Services</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <Image
                            src="/owner.jpg"
                            alt="The Helpful Hive - Home Concierge Services"
                            width={600}
                            height={300}
                            className="rounded-lg shadow-xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
