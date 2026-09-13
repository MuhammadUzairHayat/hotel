"use client";

import { useState } from "react";
import Image from "next/image";
import { img } from "@/lib/images";
import { Lightbox, type LightboxImage } from "@/components/ui/Lightbox";

// Asymmetrical editorial layout: large feature + supporting + wide bottom.
const patterns = [
  "col-span-2 row-span-1 sm:col-span-2 sm:row-span-2",
  "col-span-2 row-span-1 sm:col-span-2 sm:row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1 sm:col-span-4 sm:row-span-1",
];

export function EditorialGallery({ images }: { images: LightboxImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[190px] sm:grid-cols-4">
        {images.map((image, i) => (
          <button
            key={image.src + i}
            onClick={() => setActive(i)}
            className={[
              "group relative overflow-hidden rounded-xl shadow-card",
              patterns[i % patterns.length],
            ].join(" ")}
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={img(image.src, 1200)}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background-dark/0 transition group-hover:bg-background-dark/15" />
          </button>
        ))}
      </div>

      <Lightbox
        images={images}
        index={active}
        onClose={() => setActive(null)}
        onNavigate={setActive}
      />
    </>
  );
}
