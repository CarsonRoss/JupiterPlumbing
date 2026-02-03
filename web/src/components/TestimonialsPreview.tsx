import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { home } from "@/content/siteContent";

export function TestimonialsPreview() {
  return (
    <section className="bg-white">
      <Container className="py-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-xs font-extrabold tracking-[0.2em] text-black/50">
              TESTIMONIALS
            </div>
            <div className="mt-2 text-5xl font-extrabold tracking-tight text-black">
              {home.testimonials.title}
            </div>
          </div>
          <div>
            <ButtonLink
              href={home.testimonials.cta.href}
              variant="ghost"
              className="px-0 text-black hover:text-black"
              external
            >
              {home.testimonials.cta.label} →
            </ButtonLink>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {home.testimonials.items.map((t) => (
            <div
              key={t.name}
              className="rounded-[22px] bg-white p-8 ring-1 ring-black/10 shadow-[0_18px_44px_rgba(0,0,0,0.06)]"
            >
              <div className="text-sm font-bold text-black">{t.name}</div>
              {t.title ? (
                <div className="mt-1 text-xs font-semibold text-black/50">
                  {t.title}
                </div>
              ) : null}
              <p className="mt-5 text-sm leading-7 text-black/70">
                “{t.body}”
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

