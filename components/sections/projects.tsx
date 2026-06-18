import { Container, SectionHeading } from "@/components/ui";
import { iconMap, ArrowUpRight } from "@/components/icons";
import { projects } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Ongoing projects"
            title="A portfolio already in play."
            intro="Breinsport is not a concept on paper. Our capital and methodology are live across professional football and basketball — competing at the highest tiers today."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon];
            return (
              <Reveal key={project.name} delay={i * 110}>
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-steel/12 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-8 transition-colors duration-300 hover:border-action/40">
                  <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/3 translate-x-1/3 rounded-full bg-action/10 blur-2xl" />
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-steel/15 bg-midnight-deep text-action-bright">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="rounded-full border border-steel/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-steel/60">
                        {project.discipline}
                      </span>
                    </div>

                    <h3 className="mt-7 text-2xl font-bold leading-tight text-arctic">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-action-bright">
                      {project.tier}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-steel/10 pt-5">
                    <span className="text-sm text-steel/55">{project.country}</span>
                    <ArrowUpRight className="h-5 w-5 text-steel/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-action-bright" />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
