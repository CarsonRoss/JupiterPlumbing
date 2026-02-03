import Image from "next/image";

import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

const logos = [
  { alt: "The Club at Admirals Cove", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/1-2.png" },
  { alt: "Chatsworth at PGA National", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/2-2.png" },
  { alt: "Courtyard by Marriott", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/3-1.png" },
  { alt: "Devonshire at PGA National", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/4-1.png" },
  { alt: "Hilton Singer Island", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/5-1.png" },
  { alt: "Jupiter Medical Center", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/6-1.png" },
  { alt: "Hutchinson Shores Resort and Spa", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/7-1.png" },
  { alt: "Jupiter Rehabilitation Center", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/8-1.png" },
  { alt: "Jonathan's Landing", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/9-1.png" },
  { alt: "Jupiter Beach Resort Club", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/10-1.png" },
  { alt: "Guanabanas", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/11-1.png" },
  { alt: "Sandy Pines", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/12-1.png" },
  { alt: "The Lucie", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/13-1.png" },
  { alt: "Trump National Golf Club Jupiter", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/14-1.png" },
  { alt: "Marriott Resort", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/15-1.png" },
  { alt: "Town of Juno Beach", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/16.png" },
  { alt: "Town of Jupiter", src: "https://jupiterplumbing.com/wp-content/uploads/2024/09/17.png" },
  { alt: "Wyndham Grand", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/18.png" },
  { alt: "Homewood Suites", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/19.png" },
  { alt: "Best Western Hotel", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/20.png" },
  { alt: "Jupiter Tequesta Church of Christ", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/21.png" },
  { alt: "First United Methodist Church", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/22.png" },
  { alt: "Presbyterian Church", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/23.png" },
  { alt: "St. Peter Catholic Church", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/24.png" },
  { alt: "Temple Beth Am", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/25.png" },
  { alt: "Jupiter Christian School", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/26.png" },
  { alt: "Aria Senior Living", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/27.png" },
  { alt: "Mangrove Bay Senior Community", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/28.png" },
  { alt: "Luxe at Jupiter", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/29.png" },
  { alt: "Your Life of Palm Beach Gardens", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/30.png" },
  { alt: "Palm Beach Memory Care", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/31.png" },
  { alt: "Ballen Isles", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/32.png" },
  { alt: "Palm Beach Sports Club", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/33.png" },
  { alt: "Lost Tree Village", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/34.png" },
  { alt: "The Loxahatchee Club", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/35.png" },
  { alt: "The Bear's Club", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/36.png" },
  { alt: "Turtle Creek Club", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/37.png" },
  { alt: "Gemini Condos", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/38.png" },
  { alt: "1000 North", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/39.png" },
  { alt: "Dune Dog Cafe", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/40.png" },
  { alt: "J. Alexander's Restaurant", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/41.png" },
  { alt: "Tommy Bahama Marlin Bar", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/42.png" },
  { alt: "Jupiter Hills", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/43.png" },
  { alt: "Dive Bar", src: "https://jupiterplumbing.com/wp-content/uploads/2024/10/44.png" },
];

export default function OurClientsPage() {
  return (
    <PageShell>
      <section className="bg-white">
        <Container className="py-14">
          <SectionHeading eyebrow="OUR CLIENTS" title="Trusted by local businesses">
            A sample of organizations we’re proud to serve.
          </SectionHeading>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((logo) => (
              <div
                key={logo.src}
                className="flex items-center justify-center rounded-brand bg-brand-background p-4 ring-1 ring-brand-accent/10"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={240}
                  height={140}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

