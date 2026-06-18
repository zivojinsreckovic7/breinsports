import { Container } from "@/components/ui";
import { Mail, Globe } from "@/components/icons";
import { contact, nav, markets } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-steel/10 bg-midnight-deep">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#top"
              className="wordmark text-2xl font-medium text-arctic transition-opacity hover:opacity-80"
            >
              Brein<span className="text-steel/70">sport</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-steel/60">
              A joint venture between Breinrock and Ultimate Sports — investing in
              sports infrastructure, academies and elite teams worldwide.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-steel/45">
              {markets.map((m, i) => (
                <span key={m} className="flex items-center gap-2.5">
                  {i > 0 ? (
                    <span className="h-1 w-1 rounded-full bg-steel/30" aria-hidden="true" />
                  ) : null}
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-steel/45">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-steel/70 transition-colors hover:text-arctic"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-steel/45">
              Contact
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-steel/70 transition-colors hover:text-action-bright"
                >
                  <Mail className="h-4 w-4 flex-none" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-steel/70 transition-colors hover:text-action-bright"
                >
                  <Globe className="h-4 w-4 flex-none" />
                  {contact.website}
                </a>
              </li>
              <li className="pt-1 text-sm leading-relaxed text-steel/55">
                Harmony House, Office 11
                <br />
                4 Thekla Lysioti, 3030 Limassol, Cyprus
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-steel/10 pt-8 text-xs text-steel/45 sm:flex-row sm:items-center">
          <p>© {year} Breinsport. A Breinrock × Ultimate Sports joint venture.</p>
          <p>All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
