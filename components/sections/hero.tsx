import Image from "next/image";
import { Container } from "@/components/ui";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { heroStats, markets } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background imagery */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/brand/network-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-70"
        />
        {/* Tonal overlays for contrast + brand grading */}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-midnight/55 to-midnight" />
        <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_15%_20%,transparent,rgba(6,21,35,0.85))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-midnight to-transparent" />
      </div>

      <Container className="flex min-h-dvh flex-col justify-center pb-16 pt-32 sm:pt-36">
        <div className="max-w-3xl">
          <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-steel/15 bg-white/[0.04] px-4 py-2 text-steel/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-action-bright" aria-hidden="true" />
            Breinrock <span className="text-steel/40">×</span> Ultimate Sports
          </span>

          <h1 className="display mt-7 text-balance text-5xl text-arctic sm:text-6xl lg:text-7xl">
            Where capital
            <br />
            builds champions.
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-steel/80">
            Breinsport unites an AI-driven neo-bank with elite youth development —
            rebuilding sports infrastructure and forging the next generation of
            athletes across five continents.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#concept"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-action px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-action/25 transition-colors hover:bg-action-bright"
            >
              Explore the vision
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-steel/20 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-arctic backdrop-blur-sm transition-colors hover:border-steel/40 hover:bg-white/[0.07]"
            >
              Ongoing projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Markets */}
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-steel/60">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-steel/45">
              Markets
            </span>
            {markets.map((m, i) => (
              <span key={m} className="flex items-center gap-3">
                {i > 0 ? (
                  <span className="h-1 w-1 rounded-full bg-steel/30" aria-hidden="true" />
                ) : null}
                <span className="font-medium text-steel/80">{m}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-steel/12 bg-steel/12 sm:mt-20">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-midnight/70 px-5 py-6 backdrop-blur-sm">
              <dt className="display tabular text-3xl text-arctic sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-steel/55 sm:text-sm sm:tracking-normal sm:normal-case">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* Document provenance, echoing the source overview deck */}
      <span className="pointer-events-none absolute right-6 top-24 hidden text-[0.7rem] font-medium uppercase tracking-[0.2em] text-steel/35 lg:block">
        Overview · Dec 2025 · v1.0
      </span>
    </section>
  );
}
