import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { img } from "@/lib/images";
import { facilities } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

// Editorial bento placement (lg). Different sizes → not six identical cards.
const spanClasses = [
  "lg:col-span-4 lg:row-span-2", // Restaurant (large feature)
  "lg:col-span-2 lg:row-span-2", // Private Balcony (tall)
  "lg:col-span-2 lg:row-span-1", // Minibar
  "lg:col-span-2 lg:row-span-1", // Outdoor Dining
  "lg:col-span-2 lg:row-span-2", // Bonfire (tall)
  "lg:col-span-4 lg:row-span-1", // Comfortable Rooms (wide feature)
];

export function Facilities() {
  return (
    <section className="section bg-background">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Our Facilities"
          title="Everything You Need for a Perfect Stay"
          subtitle="Thoughtfully designed spaces and experiences to make your stay comfortable, memorable, and relaxing."
        />

        <div className="mt-14 grid auto-rows-[240px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {facilities.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 0.05}
              className={[
                "group relative overflow-hidden rounded-xl bg-card shadow-card",
                spanClasses[i] ?? "",
              ].join(" ")}
            >
              <Link href={f.href} className="relative block h-full w-full">
                <Image
                  src={img(f.image, 1200)}
                  alt={f.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/85 via-background-dark/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-[0.65rem] uppercase tracking-[0.25em] text-gold-light">
                    {f.category}
                  </span>
                  <h3 className="mt-2 text-2xl text-white">{f.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
                    {f.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Explore
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
