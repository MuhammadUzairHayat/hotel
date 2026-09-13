import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Ruler, BedDouble, Users, Tag, Check } from "lucide-react";
import { getRoom, rooms } from "@/lib/rooms";
import { RoomGallery } from "@/components/rooms/RoomGallery";
import { EnquiryForm } from "@/components/common/EnquiryForm";
import { Reveal } from "@/components/ui/Reveal";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/rooms/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) return { title: "Room Not Found" };
  return {
    title: room.name,
    description: room.description,
  };
}

export default async function RoomDetailPage({
  params,
}: PageProps<"/rooms/[slug]">) {
  const { slug } = await params;
  const room = getRoom(slug);
  if (!room) notFound();

  const specs = [
    { icon: Tag, label: "Price", value: `${room.price} ${room.priceNote}` },
    { icon: Ruler, label: "Size", value: room.size },
    { icon: BedDouble, label: "Bed", value: room.bed },
    { icon: Users, label: "Guests", value: room.guests },
  ];

  return (
    <article className="pt-28 lg:pt-32">
      <div className="container-lux">
        <Link
          href="/rooms"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted transition hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all rooms
        </Link>

        <div className="mt-6">
          <span className="eyebrow">Our Rooms</span>
          <h1 className="mt-3 text-4xl text-foreground sm:text-5xl">
            {room.name}
          </h1>
        </div>
      </div>

      {/* Gallery */}
      <section className="mt-10">
        <div className="container-lux">
          <RoomGallery images={room.gallery} roomName={room.name} />
        </div>
      </section>

      {/* Details + enquiry */}
      <section className="section pt-16 lg:pt-20">
        <div className="container-lux grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          {/* Left: description + amenities */}
          <div>
            {/* Specs */}
            <div className="grid grid-cols-2 gap-5 rounded-2xl bg-card-soft p-6 sm:grid-cols-4">
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

            <Reveal className="mt-10">
              <h2 className="text-2xl text-foreground sm:text-3xl">
                About This Room
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground-muted">
                {room.description}
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground-muted">
                {room.longDescription}
              </p>
            </Reveal>

            <Reveal className="mt-10">
              <h2 className="text-2xl text-foreground sm:text-3xl">Amenities</h2>
              <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {room.amenities.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-2.5 text-sm text-foreground-muted"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right: enquiry form (sticky on desktop) */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl bg-card p-6 shadow-luxury sm:p-8">
              <span className="eyebrow">Reserve</span>
              <h2 className="mt-2 text-2xl text-foreground">
                Enquire About {room.name}
              </h2>
              <p className="mt-2 text-sm text-foreground-muted">
                Share your details and our team will be in touch to confirm
                availability.
              </p>
              <div className="mt-6">
                <EnquiryForm variant="full" defaultRoomType={room.name} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
