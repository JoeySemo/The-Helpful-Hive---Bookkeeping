import { Phone, ClipboardList, CheckCircle } from "lucide-react"

const steps = [
    {
        icon: Phone,
        step: "01",
        title: "Schedule a Consultation",
        description:
            "Reach out to discuss your home management needs. We'll learn about your property and lifestyle to create a customized plan.",
    },
    {
        icon: ClipboardList,
        step: "02",
        title: "Receive Your Custom Plan",
        description:
            "We'll create a tailored service package that addresses your specific needs, from regular maintenance to on-demand concierge services.",
    },
    {
        icon: CheckCircle,
        step: "03",
        title: "Enjoy Peace of Mind",
        description:
            "Relax knowing your home is in expert hands. Receive regular updates and enjoy a home that's always ready and welcoming.",
    },
]

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 lg:py-28 bg-accent">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">How It Works</h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Getting started with The Helpful Hive is simple. We make home management effortless from day one.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div className="relative inline-block">
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                                    <step.icon className="h-10 w-10 text-primary" />
                                </div>
                                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                                    {step.step}
                                </span>
                            </div>
                            <h3 className="mt-6 text-xl font-serif font-semibold text-foreground">{step.title}</h3>
                            <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
