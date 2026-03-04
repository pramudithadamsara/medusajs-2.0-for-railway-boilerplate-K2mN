import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { getAssetUrl } from "@lib/util/assets"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative bg-brand-neutral overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={getAssetUrl("/hero-background-video.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-6 small:p-32 gap-8 max-w-[800px] mx-auto transition-opacity duration-700">
        <div className="flex flex-col gap-4 animate-fade-in-top">
          <Text className="text-white drop-shadow-md uppercase tracking-[0.3em] font-medium text-sm">
            The Essence of Luxury
          </Text>
          <Heading
            level="h1"
            className="text-5xl md:text-7xl text-white drop-shadow-lg font-serif leading-tight"
          >
            Oudh Oil & <br /> Ceylon Spices
          </Heading>
          <Text className="text-white/90 drop-shadow-md text-lg md:text-xl max-w-[600px] mx-auto mt-4 font-light leading-relaxed">
            Experience the rarest Oudh oils and the finest exotic spices, masterfully sourced from the heart of Ceylon.
          </Text>
        </div>

        <div className="animate-fade-in-top delay-200">
          <LocalizedClientLink href="/store">
            <Button size="large" className="bg-brand-gold border-brand-gold text-brand-brown hover:bg-white hover:text-brand-brown transition-all duration-300 px-8 py-6 rounded-none font-semibold">
              Explore Collection
            </Button>
          </LocalizedClientLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
