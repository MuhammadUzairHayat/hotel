"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { reviews } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > index || (index === reviews.length - 1 && next === 0) ? 1 : -1);
    setIndex((next + reviews.length) % reviews.length);
  };

  const review = reviews[index];

  return (
    <section className="section bg-background">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Guests Say"
          subtitle="Real words from guests who came to rest and left with memories."
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote className="mx-auto mb-6 h-10 w-10 text-primary/30" />

          <div className="relative min-h-[220px] overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-foreground">
                      {review.name}
                    </p>
                    <p className="text-xs text-foreground-muted">
                      {review.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() => go(index - 1)}
              aria-label="Previous review"
              className="rounded-full border border-border p-2.5 text-foreground-muted transition hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={[
                    "h-2 rounded-full transition-all",
                    i === index ? "w-6 bg-primary" : "w-2 bg-border",
                  ].join(" ")}
                />
              ))}
            </div>
            <button
              onClick={() => go(index + 1)}
              aria-label="Next review"
              className="rounded-full border border-border p-2.5 text-foreground-muted transition hover:border-primary hover:text-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
