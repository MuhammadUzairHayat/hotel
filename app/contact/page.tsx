import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Swat Rezidor Hotel for reservations, enquiries, or any questions about your stay in Swat Valley.",
};

const details = [
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phoneHref}` },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Address", value: site.address },
  { icon: Clock, label: "Reception", value: site.reception },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        imageId={images.exteriorNight}
        eyebrow="Contact Us"
        title="Get in Touch"
        subtitle="We'd love to welcome you. Contact us for reservations, enquiries, or any questions about your stay."
      />

      <section className="section bg-background">
        <div className="container-lux grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: contact information */}
          <div>
            <SectionHeading
              eyebrow="Reach Us"
              title="Contact Information"
              align="left"
            />
            <div className="mt-10 space-y-8">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 0.05}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-foreground-light">
                        {d.label}
                      </p>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="mt-1 block text-base text-foreground transition hover:text-primary"
                        >
                          {d.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-base leading-relaxed text-foreground">
                          {d.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <Reveal y={40}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20 lg:pb-28">
        <div className="container-lux">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-card">
              <iframe
                title="Swat Rezidor Hotel location map"
                src={site.mapEmbed}
                className="h-[360px] w-full border-0 sm:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mt-6 text-center">
            <a
              href={site.mapDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Directions
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
