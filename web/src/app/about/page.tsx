import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ButtonLink";

const values = [
  "The client is why we exist",
  "Take no short cuts",
  "Maintain accurate records",
  "Leave work area clean",
  "Be trustful",
];

const areas = [
  "Jupiter, Florida",
  "Juno, Florida",
  "Tequesta, Florida",
  "Hobe Sound, Florida",
  "North Palm Beach, Florida",
  "Palm Beach Gardens, Florida",
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="bg-white">
        <Container className="py-14">
          <SectionHeading eyebrow="ABOUT US" title="Family owned and operated since 1962!">
            Founded in 1962, Jupiter Plumbing has consistently delivered exceptional
            service, combining decades of experience with time-honored traditions.
            Our team of certified professionals are dedicated to tackling everything
            from minor leaks to major installations with precision and care.
          </SectionHeading>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="rounded-brand bg-brand-background p-6 ring-1 ring-brand-accent/10">
              <div className="text-sm font-extrabold tracking-wide text-brand-primary">
                Why us?
              </div>
              <p className="mt-3 text-sm leading-7 text-brand-accent/80">
                At Jupiter Plumbing our mission is simple: to provide efficient,
                cost-effective plumbing solutions while ensuring a seamless customer
                experience from start to finish.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-brand-accent/85">
                {values.map((v) => (
                  <li key={v} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-accent/70" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-brand bg-brand-background p-6 ring-1 ring-brand-accent/10">
              <div className="text-sm font-extrabold tracking-wide text-brand-primary">
                Areas we cover
              </div>
              <p className="mt-3 text-sm leading-7 text-brand-accent/80">
                Whether you need emergency repairs, routine maintenance, or a complete
                plumbing overhaul, you can count on Jupiter Plumbing to get the job
                done right the first time.
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {areas.map((a) => (
                  <div
                    key={a}
                    className="rounded-brand bg-white px-3 py-2 text-sm font-semibold text-brand-accent ring-1 ring-brand-accent/10"
                  >
                    {a}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <ButtonLink href="/contact" variant="primary">
                  Contact Us
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

