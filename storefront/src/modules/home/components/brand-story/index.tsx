import { Heading, Text } from "@medusajs/ui"

const BrandStory = () => {
    return (
        <div className="py-24 bg-white">
            <div className="content-container flex flex-col items-center text-center gap-12">
                <div className="max-w-[800px] flex flex-col gap-6 animate-fade-in-top">
                    <Text className="text-brand-gold uppercase tracking-[0.3em] font-medium text-sm">
                        Our Heritage
                    </Text>
                    <Heading
                        level="h2"
                        className="text-4xl md:text-5xl text-brand-brown font-serif"
                    >
                        Essence of Oudh & <br /> Finest Ceylon Spices
                    </Heading>
                    <div className="w-20 h-px bg-brand-gold mx-auto my-4" />
                    <Text className="text-ui-fg-subtle text-lg font-light leading-loose">
                        At Ceylonspizee Global, we bridge the worlds of exquisite fragrance and culinary excellence. Our legacy is built on sourcing the rarest Oudh oils and the world-renowned spices of Ceylon, bringing the soul of nature's treasures to the global stage. We are dedicated to purity, sustainability, and the true essence of luxury.
                    </Text>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mt-12">
                    <div className="flex flex-col gap-4 p-8 border border-brand-neutral hover:border-brand-gold/20 transition-colors duration-300">
                        <Heading level="h3" className="text-xl text-brand-brown font-serif">Pure Excellence</Heading>
                        <Text className="text-ui-fg-subtle font-light">100% pure Oudh oil, free from any synthetic additives or dilutions.</Text>
                    </div>
                    <div className="flex flex-col gap-4 p-8 border border-brand-neutral hover:border-brand-gold/20 transition-colors duration-300">
                        <Heading level="h3" className="text-xl text-brand-brown font-serif">Sustainably Sourced</Heading>
                        <Text className="text-ui-fg-subtle font-light">We ensure our Oudh is harvested with respect for the environment and local communities.</Text>
                    </div>
                    <div className="flex flex-col gap-4 p-8 border border-brand-neutral hover:border-brand-gold/20 transition-colors duration-300">
                        <Heading level="h3" className="text-xl text-brand-brown font-serif">Masterfully Crafted</Heading>
                        <Text className="text-ui-fg-subtle font-light">Traditional distillation methods combined with modern quality control.</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandStory
