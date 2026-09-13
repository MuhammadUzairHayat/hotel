import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: Props) {
  const isCenter = align === "center";
  return (
    <div
      className={[
        isCenter ? "mx-auto text-center" : "text-left",
        isCenter ? "max-w-2xl" : "",
        className,
      ].join(" ")}
    >
      {eyebrow ? (
        <Reveal>
          <span className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          className={[
            "mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl",
            light ? "text-white" : "text-foreground",
          ].join(" ")}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.1}>
          <p
            className={[
              "mt-5 text-base leading-relaxed",
              isCenter ? "mx-auto max-w-2xl" : "max-w-2xl",
              light ? "text-white/70" : "text-foreground-muted",
            ].join(" ")}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
