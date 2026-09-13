import Link from "next/link";
import Image from "next/image";
import { img, images } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

export function ExperienceSplit() {
  return (
    <section className="section bg-background-soft">
      <div className="container-lux">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side with a small overlapping accent image */}
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-luxury sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src={img(images.lobby, 1400)}
                alt="Warm, elegant hotel interior"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden aspect-square w-44 overflow-hidden rounded-xl border-4 border-background-soft shadow-luxury sm:block lg:w-52">
              <Image
                src={img(images.natureView, 600)}
                alt="Mountain view from the hotel"
                fill
                sizes="220px"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* Content side */}
          <div>
            <Reveal>
              <span className="eyebrow">The Experience</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl">
                More Than Just a Stay
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-foreground-muted">
                At Swat Rezidor, every moment is designed around comfort and
                calm. Wake to breathtaking mountain views, enjoy carefully
                prepared meals in beautiful surroundings, and unwind in rooms
                created for genuine rest.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-base leading-relaxed text-foreground-muted">
                From peaceful private balconies to warm bonfire nights and
                outdoor dining under open skies, our personalized service turns
                a simple visit into an unforgettable experience.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Link href="/amenities" className="btn-secondary mt-9">
                Discover Our Amenities
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
