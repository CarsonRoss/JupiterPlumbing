import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import { home } from "@/content/siteContent";

export function WhyChooseUs() {
  const eyebrowClass =
    "text-xs uppercase tracking-[0.35em] text-black/60";
  const titleClass =
    "mt-4 text-5xl font-light leading-[0.95] tracking-tight text-black md:text-6xl";
  const bodyClass = "mt-5 max-w-[520px] text-sm leading-6 text-black/70";
  const buttonClass =
    "inline-flex h-9 items-center justify-center rounded-md bg-[var(--hero-button)] px-5 text-[11px] font-extrabold tracking-[0.18em] text-white shadow-sm ring-1 ring-black/10 hover:bg-[var(--hero-button-hover)]";

  return (
    <section className="bg-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 md:items-center">
        {/* Image (left) */}
        <div className="relative overflow-hidden rounded-[28px] ring-1 ring-black/10">
          <Image
            src={home.whyChooseUs.image.src}
            alt={home.whyChooseUs.image.alt}
            width={1200}
            height={900}
            className="h-[340px] w-full object-cover sm:h-[420px]"
          />
        </div>

        {/* Copy (right) */}
        <div>
          <div className={eyebrowClass}>{home.whyChooseUs.eyebrow}</div>
          <h2 className={titleClass}>
            FAMILY OWNED
            <br />
            &amp; OPERATED
            <br />
            SINCE 1962!
          </h2>
          <p className={bodyClass}>{home.whyChooseUs.body}</p>
          <div className="mt-7">
            <Link href={home.whyChooseUs.cta.href} className={buttonClass}>
              DISCOVER MORE
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

