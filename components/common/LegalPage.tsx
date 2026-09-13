import { site } from "@/lib/site";

type Section = { heading: string; body: string };

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: Section[];
}) {
  return (
    <article className="pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div className="container-lux max-w-3xl">
        <span className="eyebrow">{site.fullName}</span>
        <h1 className="mt-3 text-4xl text-foreground sm:text-5xl">{title}</h1>
        <p className="mt-6 text-base leading-relaxed text-foreground-muted">
          {intro}
        </p>
        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl text-foreground sm:text-2xl">
                {s.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground-muted">
                {s.body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
