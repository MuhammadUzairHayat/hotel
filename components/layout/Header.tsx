"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Home has a full-screen hero, so the header starts transparent there.
  const overlayHero = pathname === "/";
  const solid = scrolled || !overlayHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const linkColor = solid ? "text-foreground/80" : "text-white/90";

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-background/90 py-4 shadow-soft backdrop-blur-md"
          : "bg-transparent py-6",
      ].join(" ")}
    >
      <div className="container-lux flex items-center justify-between">
        <Link href="/" className="group flex flex-col leading-none">
          <span
            className={[
              "font-display text-xl tracking-tight transition-colors sm:text-2xl",
              solid ? "text-foreground" : "text-white",
            ].join(" ")}
          >
            {site.name}
          </span>
          <span
            className={[
              "mt-0.5 text-[0.6rem] uppercase tracking-[0.35em] transition-colors",
              solid ? "text-primary" : "text-gold-light",
            ].join(" ")}
          >
            Hotel · Swat Valley
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "relative text-sm font-medium tracking-wide transition-colors hover:text-primary",
                  active ? "text-primary" : linkColor,
                ].join(" ")}
              >
                {item.label}
                {active ? (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-primary" />
                ) : null}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary">
            Enquire Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={[
            "lg:hidden",
            solid ? "text-foreground" : "text-white",
          ].join(" ")}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-background/98 backdrop-blur-md lg:hidden"
          >
            <div className="container-lux flex flex-col gap-1 py-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-3 text-base font-medium text-foreground/80 transition hover:bg-card-soft hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary mt-3">
                Enquire Now
              </Link>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
