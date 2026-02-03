import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { site } from "@/content/siteContent";

export function ContactCta() {
  return (
    <section className="bg-white">
      <Container className="py-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-extrabold tracking-[0.2em] text-black/50">
              GET IN TOUCH
            </div>
            <div className="mt-3 text-4xl font-extrabold tracking-tight text-black">
              Please call or email us to get in touch!
            </div>
            <div className="mt-5 space-y-2 text-sm text-black/70">
              <a className="block font-semibold hover:underline" href={site.email.href}>
                {site.email.display}
              </a>
              <a className="block font-semibold hover:underline" href={site.phone.href}>
                {site.phone.display}
              </a>
              <div className="pt-1">
                {site.address.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 md:justify-end">
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="rounded-md bg-white text-black ring-1 ring-black/15 hover:bg-white/90"
            >
              Contact Us
            </ButtonLink>
            <ButtonLink
              href={site.phone.href}
              variant="primary"
              className="rounded-md bg-[var(--hero-button)] text-white shadow-sm hover:bg-[var(--hero-button-hover)]"
            >
              Call Now
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

