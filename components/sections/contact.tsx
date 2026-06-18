import { Container } from "@/components/ui";
import { ArrowUpRight, Mail, Globe } from "@/components/icons";
import { contact } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-action/30 bg-gradient-to-br from-breinrock via-breinrock-bright to-action px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
            {/* Texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_80%_at_50%_0%,#000,transparent)]"
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" aria-hidden="true" />

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="eyebrow text-white/75">Get in touch</span>
              <h2 className="display mt-5 text-balance text-4xl text-white sm:text-5xl">
                Let&apos;s build the future of sport — together.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/85">
                Whether you represent a club, a city or an institution, Breinsport
                partners with those ready to invest in lasting sporting infrastructure
                and the talent that fills it.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${contact.email}`}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-breinrock shadow-xl shadow-black/20 transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
                >
                  <Mail className="h-4 w-4" />
                  {contact.email}
                </a>
                <a
                  href={contact.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
                >
                  <Globe className="h-4 w-4" />
                  {contact.website}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
