import Link from "next/link";
import Image from "next/image";
import { Ruler, BedDouble, Users, Check, Tag } from "lucide-react";
import { img } from "@/lib/images";
import type { Room } from "@/lib/rooms";
import { Reveal } from "@/components/ui/Reveal";

export function RoomShowcase({ room, reverse }: { room: Room; reverse: boolean }) {
  const specs = [
    { icon: Tag, label: "Price", value: `${room.price} ${room.priceNote}` },
    { icon: Ruler, label: "Size", value: room.size },
    { icon: BedDouble, label: "Bed", value: room.bed },
    { icon: Users, label: "Guests", value: room.guests },
  ];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Image */}
      <Reveal
        className={reverse ? "lg:order-2" : "lg:order-1"}
        y={40}
      >
        <Link
          href={`/rooms/${room.slug}`}
          className="group relative block overflow-hidden rounded-2xl shadow-luxury"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={img(room.image, 1400)}
              alt={room.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <span className="absolute left-5 top-5 rounded-full bg-background/90 px-4 py-1.5 text-xs font-medium tracking-wide text-foreground backdrop-blur">
            {room.price} {room.priceNote}
          </span>
        </Link>
      </Reveal>

      {/* Content */}
      <div className={reverse ? "lg:order-1" : "lg:order-2"}>
        <Reveal>
          <span className="eyebrow">Room</span>
          <h3 className="mt-3 text-3xl text-foreground sm:text-4xl">
            {room.name}
          </h3>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mt-5 text-base leading-relaxed text-foreground-muted">
            {room.description}
          </p>
        </Reveal>

        {/* Specs row */}
        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-2 gap-5 border-y border-border py-6 sm:grid-cols-4">
            {specs.map((s) => (
              <div key={s.label} className="flex flex-col gap-1.5">
                <span className="flex items-center gap-1.5 text-[0.65rem] uppercase tracking-wider text-foreground-light">
                  <s.icon className="h-3.5 w-3.5 text-primary" />
                  {s.label}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Amenities */}
        <Reveal delay={0.15}>
          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
            {room.amenities.map((a) => (
              <li
                key={a}
                className="flex items-center gap-2 text-sm text-foreground-muted"
              >
                <Check className="h-4 w-4 shrink-0 text-primary" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Buttons */}
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/rooms/${room.slug}`} className="btn-primary">
              View Room
            </Link>
            <Link
              href={`/contact?room=${room.slug}`}
              className="btn-secondary"
            >
              Enquire Now
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
