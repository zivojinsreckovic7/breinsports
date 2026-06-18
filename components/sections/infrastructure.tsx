import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui";
import { Check } from "@/components/icons";
import { Reveal } from "@/components/reveal";

const upgrades = [
  "Modernised stands, seating and floodlit pitch",
  "On-site performance, medical and academy facilities",
  "Community-first matchday designed around the city",
];

export function Infrastructure() {
  return (
    <section
      id="infrastructure"
      className="relative border-t border-steel/10 bg-midnight-deep py-24 sm:py-32"
    >
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Infrastructure"
              title="From matchday ground to landmark arena."
              intro="Our first pillar is physical. Breinsport invests directly into sports fields and existing infrastructure — transforming community grounds into modern, revenue-generating arenas built to professional standard."
            />
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <ul className="space-y-4 lg:pb-2">
              {upgrades.map((u) => (
                <li key={u} className="flex items-start gap-3 text-sm text-steel/80 sm:text-base">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-action/15 text-action-bright">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Visual: vision render + current state */}
        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-8" delay={80}>
            <figure className="group relative overflow-hidden rounded-3xl border border-steel/12">
              <div className="relative aspect-[1299/617] w-full">
                <Image
                  src="/brand/stadium-render.png"
                  alt="Concept render of the renovated Breinsport-branded stadium at MNK Izola"
                  fill
                  sizes="(min-width: 1024px) 64vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight-deep/70 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                <span className="rounded-full bg-action px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                  The vision
                </span>
                <span className="text-xs font-medium text-arctic/80">
                  Concept render · MNK Izola
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-5 lg:col-span-4">
            {[
              { src: "/brand/stadium-aerial.png", label: "Today · aerial", alt: "Aerial view of the MNK Izola ground today" },
              { src: "/brand/stadium-ground.png", label: "Today · pitch", alt: "Pitch-level view of the MNK Izola ground today" },
            ].map((img, i) => (
              <Reveal key={img.src} delay={160 + i * 100}>
                <figure className="group relative overflow-hidden rounded-3xl border border-steel/12">
                  <div className="relative aspect-[16/9] w-full lg:aspect-auto lg:h-[8.7rem] xl:h-[10.3rem]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 32vw, 100vw"
                      className="object-cover grayscale-[0.15] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight-deep/60 to-transparent" />
                  <figcaption className="absolute bottom-3 left-4 text-xs font-medium uppercase tracking-wider text-arctic/85">
                    {img.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
