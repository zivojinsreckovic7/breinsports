import { Container, SectionHeading } from "@/components/ui";
import { iconMap } from "@/components/icons";
import { plan } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Plan() {
  return (
    <section
      id="plan"
      className="relative border-y border-steel/10 bg-midnight-deep py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="General Plan"
            title="Three pillars. One trajectory."
            intro="Every Breinsport project advances along the same path — building the ground beneath athletes, the academies around them, and the teams they grow into."
          />
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting trajectory line (desktop) */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-action/40 to-transparent lg:block"
            aria-hidden="true"
          />

          <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {plan.map((pillar, i) => {
              const Icon = iconMap[pillar.icon];
              return (
                <Reveal as="li" key={pillar.no} delay={i * 120} className="relative">
                  <div className="flex items-center gap-4">
                    <span className="relative z-10 inline-flex h-14 w-14 flex-none items-center justify-center rounded-2xl border border-action/30 bg-midnight text-action-bright shadow-lg shadow-black/30">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="display text-5xl text-steel/15">{pillar.no}</span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-arctic">{pillar.title}</h3>
                  <p className="mt-3 text-pretty leading-relaxed text-steel/65">
                    {pillar.summary}
                  </p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
