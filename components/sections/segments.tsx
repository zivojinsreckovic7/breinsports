import { Container, SectionHeading } from "@/components/ui";
import { iconMap, ArrowRight } from "@/components/icons";
import { segments } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Segments() {
  return (
    <section id="segments" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How we operate"
            title="Three segments, fully integrated."
            intro="Investment funds the foundations, education shapes the athlete, and sport proves the result — one continuous system rather than three separate bets."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {segments.map((seg, i) => {
            const Icon = iconMap[seg.icon];
            return (
              <Reveal key={seg.id} delay={i * 110}>
                <article className="group relative flex h-full flex-col rounded-3xl border border-steel/12 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-action/40 hover:bg-white/[0.05]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-action/12 text-action-bright ring-1 ring-inset ring-action/20">
                    <Icon className="h-6 w-6" />
                  </span>

                  <h3 className="mt-7 text-xl font-bold text-arctic">{seg.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel/65">{seg.blurb}</p>

                  <ul className="mt-7 space-y-3 border-t border-steel/10 pt-6">
                    {seg.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-steel/85"
                      >
                        <ArrowRight className="h-4 w-4 flex-none text-action-bright/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
