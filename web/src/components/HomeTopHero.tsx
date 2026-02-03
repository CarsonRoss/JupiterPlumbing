import Image from "next/image";
import Link from "next/link";

import { site } from "@/content/siteContent";

const HERO = {
  nav: [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/services", label: "SERVICES" },
    { href: "/coverage", label: "COVERAGE" },
    { href: "/contact", label: "CONTACT" },
  ],
} as const;

function formatPhoneForHeader(phoneDisplay: string) {
  const digits = phoneDisplay.replace(/\D/g, "");
  if (digits.length === 10) {
    return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  return phoneDisplay;
}

function HeroNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-xs font-semibold tracking-[0.22em] text-white/90 hover:text-white"
    >
      {label}
    </Link>
  );
}

function HeroPillButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: "phone" | "arrow";
}) {
  const className =
    "inline-flex h-11 items-center gap-2 rounded-full bg-[var(--hero-button)] px-5 text-xs font-extrabold tracking-[0.18em] text-white shadow-sm ring-1 ring-white/10 hover:bg-[var(--hero-button-hover)]";

  const contents = (
    <>
      <span className="grid h-7 w-7 place-items-center rounded-full bg-white">
        {icon === "phone" ? (
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-[var(--hero-bubble-icon)]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01z" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-[var(--hero-bubble-icon)]"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M13.172 12 8.222 7.05l1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
          </svg>
        )}
      </span>
      <span>{label}</span>
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {contents}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {contents}
    </a>
  );
}

export function HomeTopHero() {
  return (
    <section className="w-full">
      <div className="bg-[var(--hero-topbar)]">
        <div className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between px-6">
          <div className="text-sm font-extrabold tracking-[0.18em] text-white">
            JUPITER PLUMBING
          </div>

          <nav className="hidden items-center gap-10 md:flex">
            {HERO.nav.map((item) => (
              <HeroNavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <a
            href={site.phone.href}
            className="text-xs font-extrabold tracking-[0.18em] text-white"
          >
            {formatPhoneForHeader(site.phone.display)}
          </a>
        </div>
      </div>

      <div className="relative w-full bg-[var(--hero-page-bg)]">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="relative h-[520px] w-full overflow-hidden">
            <div className="flex h-full w-full">
              {/* Left: photo (ends slightly past half the canvas) */}
              <div className="relative h-full w-[54%] shrink-0">
                <Image
                  src="/images/hero-truck.png"
                  alt="Jupiter Plumbing truck"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Right: background */}
              <div className="relative h-full flex-1 bg-[var(--hero-page-bg)]">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[rgba(243,244,247,0.8)] to-[rgba(243,244,247,1)]" />
              </div>
            </div>

            {/* Bubble */}
            <div className="absolute right-6 top-1/2 w-[92%] max-w-[560px] -translate-y-1/2 rounded-[22px] bg-[var(--hero-bubble)] px-8 py-10 text-white shadow-[0_16px_50px_rgba(0,0,0,0.22)] ring-1 ring-white/10 md:right-10 md:px-14 md:py-14">
              <h1 className="text-4xl font-extrabold italic leading-[1.05] tracking-tight md:text-[44px]">
                Commercial &amp; Residential
                <br />
                Plumbing Contractor
              </h1>
              <p className="mt-6 max-w-[420px] text-sm leading-6 text-white/90">
                Founded in 1962, Jupiter Plumbing has consistently delivered exceptional
                service, combining decades of experience with time-honored traditions.
                Our team of certified professionals are dedicated to tackling everything
                from minor leaks to major installations!
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <HeroPillButton href={site.phone.href} label="CALL US" icon="phone" />
                <HeroPillButton href="/services" label="LEARN MORE" icon="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

