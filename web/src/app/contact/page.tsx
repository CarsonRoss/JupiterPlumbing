import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/siteContent";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="bg-white">
        <Container className="py-14">
          <SectionHeading eyebrow="CONTACT" title="Get in Touch">
            Need plumbing assistance? We&apos;re here to help. Please fill out the form,
            and our team will get back to you as soon as possible.
          </SectionHeading>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="rounded-brand bg-brand-background p-6 ring-1 ring-brand-accent/10">
              <div className="text-sm font-extrabold tracking-wide text-brand-primary">
                Contact Us
              </div>
              <div className="mt-4 space-y-2 text-sm text-brand-accent/85">
                <div>
                  <span className="font-semibold">Email:</span>{" "}
                  <a className="underline" href={site.email.href}>
                    {site.email.display}
                  </a>
                </div>
                <div>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a className="underline" href={site.phone.href}>
                    {site.phone.display}
                  </a>
                </div>
                <div className="pt-2">
                  <div className="font-semibold">Office Address</div>
                  {site.address.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-brand bg-brand-background p-6 ring-1 ring-brand-accent/10">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

