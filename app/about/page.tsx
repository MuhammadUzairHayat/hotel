import type { Metadata } from "next";
import Image from "next/image";
import {
  MapPin,
  BedDouble,
  HeartHandshake,
  UtensilsCrossed,
  Sparkles,
  Leaf,
} from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { CtaSection } from "@/components/common/CtaSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { img, images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story of Swat Hotel — a place created for comfort, connection, and unforgettable experiences in the heart of Swat Valley.",
};

const benefits = [
  { icon: MapPin, title: "Beautiful Location", text: "Set amid the peaks and greenery of Swat Valley." },
  { icon: BedDouble, title: "Comfortable Rooms", text: "Elegant interiors designed for genuine rest." },
  { icon: HeartHandshake, title: "Exceptional Hospitality", text: "Warm, personalized service at every moment." },
  { icon: UtensilsCrossed, title: "Delicious Dining", text: "Carefully prepared meals in beautiful surroundings." },
  { icon: Sparkles, title: "Memorable Experiences", text: "Bonfire nights, outdoor dining, and more." },
  { icon: Leaf, title: "Peaceful Environment", text: "A calm retreat to disconnect and unwind." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        imageId={images.aboutStory}
        eyebrow="About Us"
        title="Our Story"
        subtitle="A place created for comfort, connection, and unforgettable experiences."
      />

      {/* Who We Are */}
      <section className="section bg-background">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-luxury">
              <Image
                src={img(images.exterior, 1400)}
                alt="Swat Hotel exterior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Who We Are"
              title="A Retreat Rooted in the Valley"
              align="left"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-foreground-muted">
                Swat Hotel was born from a simple vision: to create a
                place where the beauty of the mountains meets the warmth of
                genuine hospitality. Nestled in Swat Valley, our hotel is a
                calm, luxurious retreat for those seeking rest, connection, and
                a deeper sense of place.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-base leading-relaxed text-foreground-muted">
                Every corner is designed with intention — from the natural
                materials in our rooms to the quiet spaces where guests can
                pause and breathe. We believe luxury is felt in the details.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Hospitality */}
      <section className="section bg-background-soft">
        <div className="container-lux grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our Hospitality"
              title="Care in Every Detail"
              align="left"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-foreground-muted">
                Welcoming guests is at the heart of everything we do. From the
                moment you arrive, our team is dedicated to making you feel at
                home — attentive without being intrusive, warm without ever
                feeling rehearsed.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-base leading-relaxed text-foreground-muted">
                Impeccable cleanliness, thoughtful personalized service, and a
                genuine attention to detail define the Swat Hotel experience.
                Your comfort is our constant priority.
              </p>
            </Reveal>
          </div>
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-luxury">
              <Image
                src={img(images.hospitality, 1400)}
                alt="Warm hospitality at Swat Hotel"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Location */}
      <section className="section bg-background">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Our Location"
            title="Surrounded by Natural Beauty"
            subtitle="Framed by mountains, rivers, and open skies, our location is as much a part of your stay as the hotel itself."
          />
          <Reveal className="mt-12">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-luxury">
              <Image
                src={img(images.location, 2000)}
                alt="The natural landscape surrounding Swat Hotel"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-foreground-muted">
              Swat Valley is known for its lush greenery, snow-dusted peaks, and
              serene rivers. From peaceful walks to scenic viewpoints and local
              attractions, there is always something to discover — or simply
              enjoy the quiet from your balcony.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Stay With Us */}
      <section className="section bg-background-soft">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Why Stay With Us?"
            title="Reasons Guests Return"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal
                key={b.title}
                delay={(i % 3) * 0.05}
                className="rounded-xl bg-card p-8 shadow-card"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {b.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        imageId={images.exteriorNight}
        eyebrow="Come Experience It Yourself"
        title="Come Experience It Yourself"
        text="We'd love to welcome you to Swat Hotel. Your mountain retreat is waiting."
        buttonLabel="Make an Enquiry"
        buttonHref="/contact"
      />
    </>
  );
}
