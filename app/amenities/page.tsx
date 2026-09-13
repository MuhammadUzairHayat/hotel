import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { AmenityTabs } from "@/components/amenities/AmenityTabs";
import { CtaSection } from "@/components/common/CtaSection";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Amenities & Experiences",
  description:
    "Discover the experiences and comforts that make your stay at Swat Rezidor Hotel truly memorable — dining, private balconies, outdoor experiences, and bonfire nights.",
};

export default async function AmenitiesPage({
  searchParams,
}: PageProps<"/amenities">) {
  const params = await searchParams;
  const tab = typeof params.tab === "string" ? params.tab : undefined;

  return (
    <>
      <PageHero
        imageId={images.poolTerrace}
        eyebrow="Amenities & Experiences"
        title="Experience More"
        subtitle="Discover the experiences and comforts that make your stay truly memorable."
      />
      <AmenityTabs initialTab={tab} />
      <CtaSection
        imageId={images.valley}
        eyebrow="Ready When You Are"
        title="Your Perfect Stay Awaits"
        text="Come experience comfort, nature, and unforgettable hospitality."
        buttonLabel="Make an Enquiry"
        buttonHref="/contact"
      />
    </>
  );
}
