"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/concierge/ui/button"
import { Input } from "@/components/concierge/ui/input"
import { Textarea } from "@/components/concierge/ui/textarea"
import { Label } from "@/components/concierge/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/concierge/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log("Form submitted:", formData)
        alert("Thank you for your message! We'll be in touch soon.")
        setFormData({ name: "", email: "", phone: "", message: "" })
    }

    return (
        <section id="contact" className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Get in Touch</h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Ready to experience stress-free home management? Reach out today for a free consultation.
                    </p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <Card className="border-border">
                        <CardHeader>
                            <CardTitle className="font-serif">Send Us a Message</CardTitle>
                            <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="(555) 123-4567"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your home management needs..."
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-serif font-semibold text-foreground mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Email</p>
                                        <a
                                            href="mailto:hello@thehelpfulhive.com"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            hello@thehelpfulhive.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Phone</p>
                                        <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                                            (555) 123-4567
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                                        <MapPin className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Service Area</p>
                                        <p className="text-muted-foreground">Serving the greater Colorado area</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-accent rounded-lg p-6">
                            <h4 className="font-serif font-semibold text-foreground mb-2">Free Consultation</h4>
                            <p className="text-muted-foreground leading-relaxed">
                                Not sure where to start? Schedule a free consultation and we'll help you determine which services are
                                right for your home and lifestyle.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
