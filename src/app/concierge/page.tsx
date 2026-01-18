"use client"

import { Hero } from "@/components/concierge/hero"
import { Services } from "@/components/concierge/services"
import { HowItWorks } from "@/components/concierge/how-it-works"
import { About } from "@/components/concierge/about"
import { Testimonials } from "@/components/concierge/testimonials"
import { Contact } from "@/components/concierge/contact"

export default function ConciergePage() {
    return (
        <main className="concierge-scope min-h-screen">
            <Hero />
            <Services />
            <HowItWorks />
            <About />
            <Testimonials />
            <Contact />
        </main>
    )
}
