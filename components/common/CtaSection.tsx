import Link from "next/link";
import Image from "next/image";
import { img } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  imageId: string;
  eyebrow?: string;
  title: string;
  text: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CtaSection({
  imageId,
  eyebrow,
  title,
  text,
  buttonLabel,
  buttonHref,
}: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[75vh] w-full">
        <Image
          src={img(imageId, 2000)}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/85 via-background-dark/45 to-background-dark/30" />

        <div className="container-lux relative flex min-h-[75vh] flex-col items-center justify-center py-24 text-center">
          {eyebrow ? (
            <Reveal>
              <span className="eyebrow eyebrow-light">{eyebrow}</span>
            </Reveal>
          ) : null}
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-3xl text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {text}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link href={buttonHref} className="btn-primary mt-9">
              {buttonLabel}
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
