import { Metadata } from "next"
import { Heading, Text, Button } from "@medusajs/ui"

export const metadata: Metadata = {
    title: "Contact Us - Oudh Oil & Ceylon Spices | Ceylonspizee Store",
    description: "Get in touch with Ceylonspizee Global for inquiries about our premium Oudh and spice products.",
}

export default function ContactPage() {
    return (
        <div className="py-24 bg-white">
            <div className="content-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    {/* Contact Information */}
                    <div className="flex flex-col gap-12 animate-fade-in-top">
                        <div className="flex flex-col gap-4">
                            <Text className="text-brand-gold uppercase tracking-[0.3em] font-medium text-sm">
                                Get in Touch
                            </Text>
                            <Heading level="h1" className="text-5xl md:text-6xl text-brand-brown font-serif">
                                Connect With Us
                            </Heading>
                        </div>

                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-2">
                                <Text className="text-brand-gold uppercase tracking-widest text-xs font-semibold">Address</Text>
                                <Text className="text-ui-fg-base text-lg font-light">
                                    Ceylonspizee Global (Pvt) Ltd.<br />
                                    Colombo, Sri Lanka
                                </Text>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Text className="text-brand-gold uppercase tracking-widest text-xs font-semibold">Email</Text>
                                <Text className="text-ui-fg-base text-lg font-light">
                                    <a href="mailto:info@ceylonspizee.com" className="hover:text-brand-gold transition-colors">info@ceylonspizee.com</a>
                                </Text>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Text className="text-brand-gold uppercase tracking-widest text-xs font-semibold">Mobile / WhatsApp</Text>
                                <Text className="text-ui-fg-base text-lg font-light">
                                    <a href="tel:+94701363641" className="hover:text-brand-gold transition-colors">+94 70136 3641</a>
                                </Text>
                            </div>
                        </div>
                    </div>

                    {/* Minimalist Contact Form Placeholder / CTA */}
                    <div className="bg-brand-neutral/50 p-12 flex flex-col justify-center gap-8 border border-brand-neutral">
                        <Heading level="h2" className="text-3xl text-brand-brown font-serif">Inquiries</Heading>
                        <Text className="text-ui-fg-subtle text-lg font-light leading-relaxed">
                            For wholesale inquiries, custom orders, or any questions regarding our Oudh collection, please reach out to us via email or WhatsApp. Our specialists are ready to assist you.
                        </Text>
                        <div className="flex flex-col gap-4 mt-4">
                            <a href="https://wa.me/94701363641" target="_blank" rel="noopener noreferrer">
                                <Button size="large" className="w-full bg-brand-brown border-brand-brown hover:bg-white hover:text-brand-brown transition-all duration-300 rounded-none">
                                    Chat on WhatsApp
                                </Button>
                            </a>
                            <a href="mailto:info@ceylonspizee.com">
                                <Button variant="secondary" size="large" className="w-full border-brand-brown text-brand-brown hover:bg-brand-brown hover:text-white transition-all duration-300 rounded-none">
                                    Send an Email
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
