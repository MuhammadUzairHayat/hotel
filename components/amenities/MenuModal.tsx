"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { menu } from "@/lib/content";

export function MenuModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-background-dark/70 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Restaurant menu"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="my-8 w-full max-w-3xl rounded-2xl bg-background p-6 shadow-luxury sm:p-10"
          >
            <div className="flex items-start justify-between border-b border-border pb-6">
              <div>
                <span className="eyebrow">Swat Rezidor Restaurant</span>
                <h3 className="mt-2 text-3xl text-foreground">Our Menu</h3>
                <p className="mt-1 text-sm text-foreground-muted">
                  Prices in PKR. Seasonal dishes may vary.
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-full border border-border p-2 text-foreground-muted transition hover:border-primary hover:text-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 grid gap-10 sm:grid-cols-2">
              {menu.map((cat) => (
                <div key={cat.name}>
                  <h4 className="mb-4 text-lg text-primary">{cat.name}</h4>
                  <ul className="space-y-4">
                    {cat.items.map((item) => (
                      <li key={item.name}>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-sm font-medium text-foreground">
                            {item.name}
                          </span>
                          <span className="flex-1 border-b border-dashed border-border" />
                          <span className="text-sm font-medium text-foreground-muted">
                            {item.price}
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-foreground-muted">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
