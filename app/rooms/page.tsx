import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { RoomShowcase } from "@/components/rooms/RoomShowcase";
import { CtaSection } from "@/components/common/CtaSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { rooms } from "@/lib/rooms";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Our Rooms",
  description:
    "Discover thoughtfully designed rooms at Swat Rezidor Hotel where modern comfort meets the peaceful beauty of Swat Valley.",
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        imageId={images.roomSuite}
        eyebrow="Our Rooms"
        title="Comfort Designed Around You"
        subtitle="Discover thoughtfully designed rooms where modern comfort meets the peaceful beauty of Swat Valley."
      />

      <section className="section bg-background">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Room Types"
            title="Stay Your Way"
            subtitle="Choose the room that suits your stay and experience comfort, privacy, and warm hospitality at Swat Rezidor Hotel."
          />

          <div className="mt-16 space-y-24 lg:space-y-32">
            {rooms.map((room, i) => (
              <RoomShowcase key={room.slug} room={room} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        imageId={images.landscapeWide}
        eyebrow="Swat Valley Awaits"
        title="Find Your Perfect Stay"
        text="Whether you're visiting for a peaceful getaway, a family holiday, or an unforgettable escape into the mountains, Swat Rezidor Hotel welcomes you."
        buttonLabel="Make an Enquiry"
        buttonHref="/contact"
      />
    </>
  );
}
