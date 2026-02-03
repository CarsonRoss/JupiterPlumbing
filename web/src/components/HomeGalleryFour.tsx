import Image from "next/image";

import { Container } from "@/components/Container";
import { home } from "@/content/siteContent";

function GalleryTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-[28px] bg-white shadow-[0_18px_42px_rgba(0,0,0,0.14)] ring-1 ring-black/10">
      <div className="relative aspect-[4/3] w-full">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}

export function HomeGalleryFour() {
  return (
    <section className="bg-white">
      <Container className="py-14">
        <div className="mx-auto max-w-[1120px]">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {home.gallery.items.map((img) => (
              <GalleryTile key={img.src} src={img.src} alt={img.alt} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

