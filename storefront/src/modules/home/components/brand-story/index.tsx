import { Heading, Text } from "@medusajs/ui"
import Image from "next/image"
import { getAssetUrl } from "@lib/util/assets"

const BrandStory = () => {
  return (
    <div className="py-24 bg-white">
      <div className="content-container">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <Text className="text-brand-gold uppercase tracking-[0.3em] font-medium text-sm mb-6">
              Heritage & Excellence
            </Text>
            <Heading level="h1" className="text-4xl md:text-5xl text-brand-brown font-serif leading-tight mb-8">
              The Art of Luxury <br /> Since 1985
            </Heading>
            <Text className="text-ui-fg-subtle text-lg font-light leading-relaxed max-w-3xl mx-auto">
              For over three decades, Ceylonspizee Global has been the trusted name in premium Oudh oils 
              and authentic Ceylon spices. Our journey began with a simple mission: to share the extraordinary 
              treasures of Ceylon with the world.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Text className="text-brand-gold text-2xl font-serif">35+</Text>
              </div>
              <Heading level="h3" className="text-xl text-brand-brown font-serif mb-2">Years of Excellence</Heading>
              <Text className="text-ui-fg-subtle font-light">Decades of mastering the art of luxury sourcing</Text>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Text className="text-brand-gold text-2xl font-serif">50+</Text>
              </div>
              <Heading level="h3" className="text-xl text-brand-brown font-serif mb-2">Premium Products</Heading>
              <Text className="text-ui-fg-subtle font-light">Carefully curated selection of the finest treasures</Text>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Text className="text-brand-gold text-2xl font-serif">25+</Text>
              </div>
              <Heading level="h3" className="text-xl text-brand-brown font-serif mb-2">Countries Served</Heading>
              <Text className="text-ui-fg-subtle font-light">Bringing Ceylon's luxury to the global connoisseur</Text>
            </div>
          </div>

          <div className="relative aspect-[16/9] bg-brand-neutral/30 rounded-lg overflow-hidden mb-12">
            <Image
              src={getAssetUrl("/commitment-to-quality.webp")}
              alt="Ceylonspizee Brand Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-12">
              <div className="text-white max-w-2xl">
                <Text className="font-serif italic text-2xl mb-4">
                  "We don't just sell products; we share stories, heritage, and the essence of luxury itself."
                </Text>
                <Text className="text-sm uppercase tracking-wider">
                  - Founder, Ceylonspizee Global
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandStory
