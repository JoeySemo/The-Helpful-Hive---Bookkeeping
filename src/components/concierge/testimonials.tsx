import { Card, CardContent } from "@/components/concierge/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
    {
        quote:
            "The Helpful Hive has been a game-changer for us. As seasonal residents, knowing our home is being looked after gives us incredible peace of mind. Their attention to detail is exceptional.",
        author: "Sarah M.",
        location: "Seasonal Homeowner",
    },
    {
        quote:
            "I travel frequently for work and used to stress about my home constantly. Now I know everything is handled professionally. The regular updates and photos are such a nice touch.",
        author: "Michael R.",
        location: "Business Traveler",
    },
    {
        quote:
            "From coordinating repairs to stocking the fridge before we arrive, The Helpful Hive anticipates our needs perfectly. It's like having a personal assistant for our home.",
        author: "The Johnson Family",
        location: "Vacation Home Owners",
    },
]

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 lg:py-28 bg-accent">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">What Our Clients Say</h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Don't just take our word for it—hear from homeowners who've experienced the difference.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-background border-border">
                            <CardContent className="pt-6">
                                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                                <blockquote className="text-muted-foreground leading-relaxed mb-6">"{testimonial.quote}"</blockquote>
                                <div className="border-t border-border pt-4">
                                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
