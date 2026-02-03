import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import { ButtonLink } from "@/components/ButtonLink";
import { nav, site } from "@/content/siteContent";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-accent/10 bg-brand-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link className="flex items-center gap-3" href="/">
          <Image
            src="https://jupiterplumbing.com/wp-content/uploads/2024/08/1-2.png"
            alt="Jupiter Plumbing logo"
            width={150}
            height={62}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold tracking-wide text-brand-accent md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              className="hover:text-brand-primary"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden text-sm font-semibold text-brand-accent md:inline-flex"
            href={site.phone.href}
          >
            {site.phone.display}
          </a>
          <ButtonLink href={site.phone.href} variant="primary">
            Call Us
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}

