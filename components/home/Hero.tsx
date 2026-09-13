"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { img, images } from "@/lib/images";
import { site } from "@/lib/site";

const HERO_VIDEO =
  "https://videos.pexels.com/video-files/3networks/3networks.mp4";
// Reliable mountain nature clip (falls back to poster image if unavailable)
const FALLBACK_VIDEO =
  "https://cdn.pixabay.com/video/2020/09/08/49375-459436780_large.mp4";

export function Hero() {
  return (
    <section className="relative h-svh min-h-[640px] w-full overflow-hidden">
      {/* Background video with cinematic poster fallback */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={img(images.heroPoster, 2000)}
      >
        <source src={FALLBACK_VIDEO} type="video/mp4" />
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-background-dark/35 to-background-dark/75" />

      {/* Subtle premium 3D-style decorative elements */}
      <Decor />

      {/* Content */}
      <div className="container-lux relative flex h-full flex-col items-center justify-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow eyebrow-light"
        >
          Welcome to {site.name}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-4xl text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Where Luxury Meets Nature
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          Experience peaceful stays, breathtaking views, exceptional
          hospitality, and unforgettable moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link href="/contact" className="btn-primary">
            Enquire Now
          </Link>
          <Link href="/amenities" className="btn-ghost-light">
            Explore Amenities
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-11 w-7 items-start justify-center rounded-full border border-white/40 p-1.5">
          <span className="h-2 w-1 animate-scroll-hint rounded-full bg-white/80" />
        </div>
        <ChevronDown className="mx-auto mt-1 h-4 w-4 text-white/50" />
      </div>
    </section>
  );
}

/** Soft, premium orbs — sophisticated depth rather than random shapes. */
function Decor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-float-slow absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="animate-float-slower absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
      <div className="animate-float-slow absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
      {/* thin gold ring for editorial detail */}
      <div className="absolute right-[12%] top-[18%] hidden h-40 w-40 rounded-full border border-gold/25 lg:block" />
    </div>
  );
}
