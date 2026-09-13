import { Hero } from "@/components/home/Hero";
import { EnquiryPanel } from "@/components/home/EnquiryPanel";
import { Facilities } from "@/components/home/Facilities";
import { ExperienceSplit } from "@/components/home/ExperienceSplit";
import { Reviews } from "@/components/home/Reviews";
import { CtaSection } from "@/components/common/CtaSection";
import { images } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EnquiryPanel />
      <Facilities />
      <ExperienceSplit />
      <Reviews />
      <CtaSection
        imageId={images.mountainDusk}
        eyebrow="Your Escape Awaits"
        title="Your Perfect Stay Awaits"
        text="Come experience comfort, nature, and unforgettable hospitality."
        buttonLabel="Make an Enquiry"
        buttonHref="/contact"
      />
    </>
  );
}
