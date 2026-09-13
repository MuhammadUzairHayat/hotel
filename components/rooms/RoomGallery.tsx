"use client";

import { useState } from "react";
import Image from "next/image";
import { img } from "@/lib/images";
import { Lightbox, type LightboxImage } from "@/components/ui/Lightbox";

export function RoomGallery({
  images: gallery,
  roomName,
}: {
  images: string[];
  roomName: string;
}) {
  const [active, setActive] = useState<number | null>(null);

  const items: LightboxImage[] = gallery.map((src, i) => ({
    src,
    alt: `${roomName} — view ${i + 1}`,
  }));

  const [featured, ...rest] = items;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Large featured image */}
        <button
          onClick={() => setActive(0)}
          className="group relative col-span-full aspect-[16/10] overflow-hidden rounded-2xl shadow-luxury sm:col-span-2"
          aria-label={`View ${featured.alt}`}
        >
          <Image
            src={img(featured.src, 1600)}
            alt={featured.alt}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 900px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </button>

        {/* Supporting images */}
        {rest.map((image, i) => (
          <button
            key={image.src + i}
            onClick={() => setActive(i + 1)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-card"
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={img(image.src, 900)}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, 450px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Lightbox
        images={items}
        index={active}
        onClose={() => setActive(null)}
        onNavigate={setActive}
      />
    </>
  );
}
