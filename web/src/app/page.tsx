import { ClientsPreview } from "@/components/ClientsPreview";
import { ContactCta } from "@/components/ContactCta";
import { HomeBubbles } from "@/components/HomeBubbles";
import { HomeGalleryFour } from "@/components/HomeGalleryFour";
import { HomeTopHero } from "@/components/HomeTopHero";
import { PageShell } from "@/components/PageShell";
import { ServiceListPreview } from "@/components/ServiceListPreview";
import { TestimonialsPreview } from "@/components/TestimonialsPreview";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <PageShell showHeader={false}>
      <HomeTopHero />
      <HomeBubbles />
      <WhyChooseUs />
      <HomeGalleryFour />
      <ServiceListPreview />
      <ClientsPreview />
      <TestimonialsPreview />
      <ContactCta />
    </PageShell>
  );
}
