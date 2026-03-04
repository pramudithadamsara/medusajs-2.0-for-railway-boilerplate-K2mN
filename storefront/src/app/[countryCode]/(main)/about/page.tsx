import { Metadata } from "next"
import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"

export const metadata: Metadata = {
    title: "About Us - Oudh Oil & Ceylon Spices | Ceylonspizee Store",
    description: "Learn about our journey and commitment to providing the world's finest Oudh oils and exotic spices.",
}

export default function AboutPage() {
    return (
        <div className="py-24 bg-brand-neutral/30">
            <div className="content-container flex flex-col gap-24">
                {/* Hero Section */}
                <div className="max-w-[800px] flex flex-col gap-8 animate-fade-in-top">
                    <Text className="text-brand-gold uppercase tracking-[0.3em] font-medium text-sm">
                        Our Story
                    </Text>
                    <Heading level="h1" className="text-5xl md:text-6xl text-brand-brown font-serif leading-tight">
                        Essence of Oudh <br /> & Ceylon Spices
                    </Heading>
                    <Text className="text-ui-fg-subtle text-xl font-light leading-relaxed">
                        Ceylonspizee Global (Pvt) Ltd was born from a passion for the extraordinary. Based in the heart of Colombo, Sri Lanka, we have dedicated ourselves to sourcing the most exquisite Oudh oils and the world's most prized spices, directly from the lush landscapes of Ceylon.
                    </Text>
                </div>

                {/* Vision/Mission Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <div className="flex flex-col gap-8">
                        <Heading level="h2" className="text-3xl text-brand-brown font-serif">A Commitment to Heritage</Heading>
                        <Text className="text-ui-fg-subtle text-lg font-light leading-loose">
                            Every drop of Oudh oil and every grain of spice that bears the Ceylonspizee name is a testament to our uncompromising standards. We work directly with sustainable plantations and local farmers, ensuring that our practices respect both the environment and the ancient traditions of Ceylon's trade.
                        </Text>
                        <Text className="text-ui-fg-subtle text-lg font-light leading-loose">
                            From the deep, resinous notes of our Oudh to the vibrant, aromatic profile of our spices, we bring you the true spirit of luxury and authenticity.
                        </Text>
                    </div>
                    <div className="relative aspect-[4/5] bg-brand-brown/5 border border-brand-brown/10 overflow-hidden group">
                        <Image
                            src="/commitment-to-quality.webp"
                            alt="Ceylonspizee Commitment to Quality"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-12">
                            <Text className="text-white font-serif italic text-2xl text-center drop-shadow-lg">
                                "Luxury is in each detail."
                            </Text>
                        </div>
                    </div>
                </div>

                {/* Quality Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col gap-4">
                        <Heading level="h3" className="text-xl text-brand-brown font-serif">Unrivaled Purity</Heading>
                        <Text className="text-ui-fg-subtle font-light">Laboratory-grade testing for our Oudh and spices to ensure 100% authenticity.</Text>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Heading level="h3" className="text-xl text-brand-brown font-serif">Ethical Sourcing</Heading>
                        <Text className="text-ui-fg-subtle font-light">Supporting local farming communities and sustainable harvesting practices.</Text>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Heading level="h3" className="text-xl text-brand-brown font-serif">Global Legacy</Heading>
                        <Text className="text-ui-fg-subtle font-light">Bringing the heritage of Ceylon's finest treasures to the global connoisseur.</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}
