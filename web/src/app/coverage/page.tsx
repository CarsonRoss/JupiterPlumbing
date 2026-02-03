import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ButtonLink";

const areas = [
  "Jupiter, Florida",
  "Hobe Sound, Florida",
  "Juno, Florida",
  "North Palm Beach, Florida",
  "Tequesta, Florida",
  "Palm Beach Gardens, Florida",
];

export default function CoveragePage() {
  return (
    <PageShell>
      <section className="bg-white">
        <Container className="py-14">
          <SectionHeading eyebrow="SERVICE AREA" title="Plumbing services done right">
            At Jupiter Plumbing, we’re proud to be the trusted plumbing company for
            homeowners and businesses across Jupiter, Hobe Sound, Juno, North Palm
            Beach, Tequesta and Palm Beach Gardens. Whether you’re dealing with a
            leaky faucet, clogged drain, broken water heater, or need emergency
            plumbing repairs, our licensed plumbers are here to help—fast, affordable,
            and done right the first time.
          </SectionHeading>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <div
                key={a}
                className="rounded-brand bg-brand-background px-4 py-3 text-sm font-semibold text-brand-accent ring-1 ring-brand-accent/10"
              >
                {a}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <ButtonLink href="/contact" variant="primary">
              Contact Us
            </ButtonLink>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

