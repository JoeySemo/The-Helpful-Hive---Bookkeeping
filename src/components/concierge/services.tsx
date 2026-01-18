import Link from "next/link"
import { Sparkles, Heart, ClipboardList, ShoppingBag, Users, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/concierge/ui/card"
import { Button } from "@/components/concierge/ui/button"
import { Badge } from "@/components/concierge/ui/badge"

const services = [
    {
        icon: Sparkles,
        title: "Bee Done",
        subtitle: "Household Chores & Cleaning",
        tagline: "Because you deserve to Bee Done with the dirty work.",
        price: "$30",
        unit: "per hour",
        description:
            "Bathroom deep cleans, kitchen cleaning, window washing, baseboards, laundry, dishes, and custom hourly tasks.",
        popular: true,
    },
    {
        icon: Heart,
        title: "Bee Kind",
        subtitle: "Pet Care & Home Visits",
        tagline: "Where tails wag and homes stay happy.",
        price: "$20",
        unit: "per visit",
        description: "Dog walking, potty breaks, feeding, cat litter refresh, vacation home check-ins, and plant watering.",
        popular: false,
    },
    {
        icon: ClipboardList,
        title: "Bee Organized",
        subtitle: "Organization & Decluttering",
        tagline: "Bringing order to the buzz.",
        price: "$35",
        unit: "per hour",
        description:
            "Closet and pantry organization, mudroom systems, home office setup, storage labeling, and garage resets.",
        popular: false,
    },
    {
        icon: ShoppingBag,
        title: "Bee Efficient",
        subtitle: "Errands & Life Admin",
        tagline: "Your to-do list just got a whole lot shorter.",
        price: "$30",
        unit: "per hour",
        description:
            "Grocery shopping, prescription pickup, returns and exchanges, appointment coordination, and admin tasks.",
        popular: false,
    },
    {
        icon: Users,
        title: "Bee Connected",
        subtitle: "Seasonal & Community",
        tagline: "Helping hands for life's big (and little) moments.",
        price: "$35",
        unit: "per hour",
        description: "Holiday decorating, donation pickups, realtor prep, event hosting support, and community projects.",
        popular: false,
    },
]

export function Services() {
    return (
        <section id="services" className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Our Service Ecosystem</h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Sweet solutions for busy homes, pets, and people. Every service is part of The Helpful Hive, organized into
                        themed categories to make your life easier.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="border-border hover:border-primary/50 transition-colors group relative">
                            {service.popular && (
                                <Badge className="absolute -top-3 left-4 bg-primary text-primary-foreground">Most Popular</Badge>
                            )}
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-right">
                                        <span className="text-2xl font-bold text-primary">{service.price}</span>
                                        <span className="block text-sm text-muted-foreground">{service.unit}</span>
                                    </div>
                                </div>
                                <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                                <p className="text-sm text-primary font-medium">{service.subtitle}</p>
                                <p className="text-xs text-muted-foreground italic mt-1">{service.tagline}</p>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 bg-accent rounded-lg p-6 md:p-8">
                    <div className="text-center mb-6">
                        <p className="text-lg font-serif text-foreground italic">"You relax — we'll handle the Honey-Do's."</p>
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Pricing Notes</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-start gap-2">
                            <span className="text-primary font-bold">*</span>
                            <span>2-hour minimum for all hourly services</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary font-bold">*</span>
                            <span>Free travel within 10 miles of Wentzville</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary font-bold">*</span>
                            <span>10-20 miles: +$10 travel fee</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary font-bold">*</span>
                            <span>20-30 miles: +$20 travel fee</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary font-bold">*</span>
                            <span>Fully insured and background-checked</span>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-primary font-bold">*</span>
                            <span>Satisfaction guaranteed</span>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Button asChild variant="outline" size="lg" className="bg-transparent">
                        <Link href="/services" className="flex items-center gap-2">
                            View All Services & Pricing <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
