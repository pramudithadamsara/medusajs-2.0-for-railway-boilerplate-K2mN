import { Metadata } from "next"
import { Heading, Text } from "@medusajs/ui"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import BrandStory from "@modules/home/components/brand-story"
import AboutSection from "@modules/home/components/about-section"
import { getCollectionsList } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Ceylonspizee Store - Oudh Oil & Ceylon Spices",
  description:
    "Explore premium Oudh oils and exotic Ceylon spices. Sustainably sourced and masterfully crafted by Ceylonspizee Global.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await getCollectionsList()

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <BrandStory />
      <AboutSection />
    </>
  )
}
