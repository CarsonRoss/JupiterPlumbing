import Image from "next/image";

import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { home } from "@/content/siteContent";

type BubbleTone = "light" | "dark";

function BubbleCard({
  title,
  description,
  tone,
}: {
  title: string;
  description: string;
  tone: BubbleTone;
}) {
  const base =
    "relative flex flex-col items-center justify-between overflow-hidden rounded-[34px] px-8 py-9 text-center shadow-[0_18px_42px_rgba(0,0,0,0.14)] ring-1 ring-black/5";

  const styles =
    tone === "light"
      ? "bg-white text-[#00235B] backdrop-blur-sm"
      : "bg-[var(--hero-bubble)] text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.25)]";

  const titleStyles =
    tone === "light"
      ? "text-[28px] font-extrabold leading-tight text-[#00235B]"
      : "text-[28px] font-extrabold leading-tight text-white";

  const bodyStyles =
    tone === "light"
      ? "text-sm leading-6 text-[#00235B]/80"
      : "text-sm leading-6 text-white/95";

  return (
    <div className={`${base} ${styles}`}>
      <div className={titleStyles}>{title}</div>
      <div className="mt-4 max-w-[280px]">
        <p className={bodyStyles}>{description}</p>
      </div>
    </div>
  );
}

export function HomeBubbles() {
  const items = home.highlights;
  const topRow = items.slice(0, 3);
  const bottomRow = items.slice(3, 5);

  return (
    <section className="relative overflow-hidden bg-[var(--hero-page-bg)]">
      <div className="absolute inset-0">
        <Image
          src={home.hero.image.src}
          alt=""
          fill
          className="object-cover opacity-45"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(243,244,247,0.92)] via-[rgba(243,244,247,0.78)] to-[rgba(243,244,247,0.94)]" />
      </div>

      <Container className="relative py-16">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-6 md:grid-cols-3">
            {topRow.map((item) => (
              <BubbleCard
                key={item.title}
                title={item.title}
                description={item.description}
                tone="light"
              />
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 md:px-24">
            {bottomRow.map((item) => (
              <BubbleCard
                key={item.title}
                title={item.title}
                description={item.description}
                tone="dark"
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <ButtonLink
              href="/services"
              variant="primary"
              className="rounded-full bg-[var(--hero-button)] px-10 shadow-[0_16px_32px_rgba(0,0,0,0.18)] ring-1 ring-white/30 hover:bg-[var(--hero-button-hover)]"
            >
              LEARN MORE
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

