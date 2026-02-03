import Image from "next/image";

import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

const reviews = [
  {
    title: "Outstanding service!",
    body:
      "Service was great! The plumber was extremely helpful and courteous. He fixed my issue quickly and was very respectful of my time constraints with another appointment. I appreciate the help!",
    name: "Donna Behrens",
    role: "Homeowner",
  },
  {
    title: "Thanks you guys",
    body:
      "Called for someone to come out to take a look at leak under my sidewalk next to my house/front door. Two gentleman came out on time, quickly diagnosed the problem, and gave me information about the fix.",
    name: "Donna Behrens",
    role: "Homeowner",
  },
  {
    title: "Did an Exceptional Job",
    body:
      "Service was great! The plumber was extremely helpful and courteous. He fixed my issue quickly and was very respectful of my time constraints with another appointment. I appreciate the help!",
    name: "Donna Behrens",
    role: "Homeowner",
  },
  {
    title: "Excellent Service!",
    body:
      "Plumbers were very professional, seemed to be very knowledgeable, worked like crazy the entire time they were here, and left my house cleaner then they found it! Always happy with our service.",
    name: "Donna Behrens",
    role: "Homeowner",
  },
];

const videoThumbs = [
  "https://jupiterplumbing.com/wp-content/uploads/2021/04/testimonials_video_1-small.jpg",
  "https://jupiterplumbing.com/wp-content/uploads/2021/04/testimonials_video_2-small.jpg",
  "https://jupiterplumbing.com/wp-content/uploads/2021/04/testimonials_video_3-small.jpg",
  "https://jupiterplumbing.com/wp-content/uploads/2021/04/testimonials_video_4-small.jpg",
];

export default function TestimonialsPage() {
  return (
    <PageShell>
      <section className="bg-white">
        <Container className="py-14">
          <SectionHeading eyebrow="TESTIMONIALS" title="Reviews from our customers">
            Hear what our happy customers have to say about us. Our plumbing contractors
            are experienced, reliable, and professional.
          </SectionHeading>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {reviews.map((r) => (
              <div
                key={r.title}
                className="rounded-brand bg-brand-background p-6 ring-1 ring-brand-accent/10"
              >
                <div className="text-base font-extrabold text-brand-primary">
                  {r.title}
                </div>
                <p className="mt-3 text-sm leading-7 text-brand-accent/80">
                  “{r.body}”
                </p>
                <div className="mt-4 text-sm font-semibold text-brand-accent">
                  - {r.name}, <span className="text-brand-accent/70">{r.role}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <SectionHeading eyebrow="VIDEO" title="Video reviews" />
            <p className="mt-3 max-w-2xl text-sm leading-7 text-brand-accent/80">
              Check out testimonials videos and five-star reviews to see what our
              current customers say, then give us a call.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {videoThumbs.map((src) => (
                <a
                  key={src}
                  href="https://jp.novitasocial.com/-content/uploads/video.mp4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-brand ring-1 ring-brand-accent/10"
                >
                  <Image
                    src={src}
                    alt="Testimonial video thumbnail"
                    width={600}
                    height={340}
                    className="h-40 w-full object-cover transition-transform group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-xs font-extrabold tracking-wide text-white">
                    Watch →
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10">
              <ButtonLink href="tel:+15617464038" variant="primary">
                Get Service Now
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

