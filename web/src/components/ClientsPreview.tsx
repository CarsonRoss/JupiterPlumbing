import Image from "next/image";

import { Container } from "@/components/Container";
import { home } from "@/content/siteContent";

export function ClientsPreview() {
  const logos = home.clients.logos;
  return (
    <section className="bg-white">
      <Container className="py-14">
        <div className="flex flex-col gap-3">
          <div className="text-xs font-extrabold tracking-[0.2em] text-black/50">
            TRUSTED BY
          </div>
          <div className="text-5xl font-extrabold tracking-tight text-black">
            {home.clients.title}
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden">
          {/* Soft edge fade like the reference */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-[200%] jp-clients-marquee">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={`${logo.src}-${idx}`}
                className="flex w-[260px] shrink-0 items-center justify-center px-4"
              >
                <div className="flex h-[110px] w-full items-center justify-center rounded-[18px] border border-[#dbe6ff] bg-white">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={220}
                    height={120}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

