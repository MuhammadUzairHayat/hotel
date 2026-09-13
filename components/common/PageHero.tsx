import Image from "next/image";
import { img } from "@/lib/images";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  imageId: string;
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function PageHero({ imageId, eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src={img(imageId, 2000)}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/70 via-background-dark/40 to-background-dark/70" />

      <div className="container-lux relative flex h-full flex-col items-center justify-center pt-20 text-center">
        <Reveal>
          <span className="eyebrow eyebrow-light">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-4 max-w-4xl text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
