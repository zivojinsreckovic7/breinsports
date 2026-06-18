import { Container, SectionHeading } from "@/components/ui";
import { MapPin, Phone } from "@/components/icons";
import { offices } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { WorldNetworkMap } from "@/components/world-network-map";

export function Network() {
  return (
    <section
      id="network"
      className="relative border-t border-steel/10 bg-midnight-deep py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Global network"
            title="Five offices. Five markets. One mission."
            intro="From our Limassol headquarters to Dubai, London, Toronto and Prague, Breinsport operates where finance and elite sport intersect — moving capital and talent across borders."
          />
        </Reveal>

        {/* World map */}
        <Reveal delay={80}>
          <figure className="relative mt-12 overflow-hidden rounded-3xl border border-steel/12 bg-black/40">
            <div className="relative aspect-[2/1] w-full sm:aspect-[985/420]">
              <WorldNetworkMap />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight-deep/80 via-transparent to-midnight-deep/30" />
            <figcaption className="absolute bottom-4 left-5 text-xs font-medium uppercase tracking-[0.18em] text-steel/60">
              Global presence · 3 continents
            </figcaption>
          </figure>
        </Reveal>

        {/* Offices */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office, i) => (
            <Reveal key={office.city} delay={i * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-steel/12 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-action/40 hover:bg-white/[0.05]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-5 w-5 text-action-bright" />
                    <h3 className="text-lg font-bold text-arctic">{office.city}</h3>
                  </div>
                  {office.hq ? (
                    <span className="rounded-full bg-action/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-action-bright ring-1 ring-inset ring-action/25">
                      HQ
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-steel/50">
                  {office.country}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-steel/65">
                  {office.address}
                </p>
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-steel/75 transition-colors hover:text-action-bright"
                >
                  <Phone className="h-4 w-4" />
                  <span className="tabular">{office.phone}</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
