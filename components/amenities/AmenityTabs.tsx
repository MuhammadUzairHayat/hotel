"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { amenityTabs } from "@/lib/content";
import { EditorialGallery } from "./EditorialGallery";
import { MenuModal } from "./MenuModal";

export function AmenityTabs({ initialTab }: { initialTab?: string }) {
  const startIndex = Math.max(
    0,
    amenityTabs.findIndex((t) => t.id === initialTab)
  );
  const [active, setActive] = useState(startIndex);
  const [menuOpen, setMenuOpen] = useState(false);

  const tab = amenityTabs[active];

  return (
    <section className="section bg-background">
      <div className="container-lux">
        {/* Tab navigation (horizontal scroll on mobile) */}
        <div className="no-scrollbar -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div className="flex min-w-max gap-2 border-b border-border pb-px sm:justify-center">
            {amenityTabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={[
                  "relative whitespace-nowrap rounded-t-md px-5 py-3 text-sm font-medium transition-colors",
                  i === active
                    ? "text-foreground"
                    : "text-foreground-muted hover:text-foreground",
                ].join(" ")}
              >
                {t.label}
                {i === active ? (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary"
                  />
                ) : null}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12"
          >
            <div className="mx-auto max-w-3xl text-center">
              <span className="eyebrow">Experience</span>
              <h2 className="mt-3 text-3xl text-foreground sm:text-4xl lg:text-5xl">
                {tab.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground-muted">
                {tab.intro}
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {tab.id === "restaurant" ? (
                  <button
                    onClick={() => setMenuOpen(true)}
                    className="btn-primary"
                  >
                    View Menu
                  </button>
                ) : null}
                {tab.cta && tab.cta.href.startsWith("/") ? (
                  <Link href={tab.cta.href} className="btn-secondary">
                    {tab.cta.label}
                  </Link>
                ) : null}
              </div>
            </div>

            <div className="mt-12">
              <EditorialGallery images={tab.gallery} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <MenuModal open={menuOpen} onClose={() => setMenuOpen(false)} />
    </section>
  );
}
