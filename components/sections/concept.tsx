import { Container, SectionHeading } from "@/components/ui";
import { Check, ShieldLock, Academy } from "@/components/icons";
import { ventures } from "@/lib/content";
import { Reveal } from "@/components/reveal";

const ventureIcon = {
  breinrock: ShieldLock,
  "ultimate-sports": Academy,
} as const;

export function Concept() {
  return (
    <section id="concept" className="relative py-24 sm:py-32">
      <div className="grid-veil pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The Concept"
            title="A joint venture engineered for the long game."
            intro="Breinsport is the union of two specialists — one moves capital, the other develops talent. Together they turn financial discipline into sporting legacy."
          />
        </Reveal>

        {/* Equation strip */}
        <Reveal delay={80}>
          <div className="mt-12 flex flex-wrap items-center gap-3 text-sm font-semibold">
            <span className="rounded-full border border-steel/15 bg-white/[0.04] px-4 py-2 text-arctic">
              Breinrock
            </span>
            <span className="text-action-bright" aria-hidden="true">
              ×
            </span>
            <span className="rounded-full border border-steel/15 bg-white/[0.04] px-4 py-2 text-arctic">
              Ultimate Sports
            </span>
            <span className="text-steel/40" aria-hidden="true">
              =
            </span>
            <span className="wordmark rounded-full bg-action px-5 py-2 text-base font-medium text-white shadow-lg shadow-action/20">
              Breinsport
            </span>
          </div>
        </Reveal>

        {/* Venture cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {ventures.map((v, i) => {
            const Icon = ventureIcon[v.id];
            return (
              <Reveal key={v.id} delay={i * 120}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-steel/12 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-action/40 sm:p-10">
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-action/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-0" />
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-steel/15 bg-midnight-deep text-action-bright">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="eyebrow text-steel/45">{v.tag}</span>
                  </div>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-action-bright">
                    {v.role}
                  </p>
                  <h3 className="wordmark mt-2 text-3xl text-arctic">{v.name}</h3>
                  <p className="mt-4 text-pretty leading-relaxed text-steel/70">
                    {v.description}
                  </p>

                  <ul className="mt-8 space-y-3 border-t border-steel/10 pt-7">
                    {v.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-steel/85">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-action-bright" />
                        <span>{point}</span>
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
