import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

const services = [
  {
    title: "Water Heaters",
    description:
      "We can provide regular maintenance, repairs, and replacements for residential and commercial water heaters.",
  },
  {
    title: "Commercial Boilers",
    description:
      "With a team of certified technicians and decades of industry experience, we provide expert maintenance, repair, and installation for commerical boilers.",
  },
  {
    title: "Pool Heaters",
    description:
      "Whether you need a new heater, routine maintenance, emergency repairs, or a complete system upgrade, our certified technicians will ensure your pool heater operates efficiently and reliably.",
  },
  {
    title: "Slab Leaks",
    description:
      "Our Slab Leak Detection and Repair service uses advanced technology to quickly locate leaks beneath your concrete slab. Our expert technicians then provide fast, effective repairs, minimizing disruption to your home or business.",
  },
  {
    title: "Storage & Expansion Tanks",
    description:
      "We provide installation, maintenance and repair for commercial and residential storage and expansion tanks!",
  },
  {
    title: "Sewer Pipe Video Inspections",
    description:
      "Using state-of-the-art video technology, our technicians can quickly and accurately diagnose blockages, cracks, or other issues within your sewer lines.",
  },
  {
    title: "Reroute Leaking Water Pipes",
    description:
      "Our team of certified technicians will work to reroute leaking pipes through walls and floors.",
  },
  {
    title: "Pump Repairs",
    description:
      "Whether it's a minor issue or a major breakdown, we diagnose and fix problems with precision, using high-quality parts and the latest techniques.",
  },
  {
    title: "Leak Detection",
    description:
      "Any type of leak should be taken care of as soon as possible so that the issue doesn’t get worse and become even more costly.",
  },
  {
    title: "Lift Stations",
    description:
      "We specialize in expert lift station plumbing services designed to ensure reliable and efficient wastewater management.",
  },
  {
    title: "Hydro-Jetting",
    description:
      "Our high-pressure water jetting technology blasts away stubborn clogs, grease, and debris, ensuring your pipes flow smoothly and efficiently.",
  },
  {
    title: "Sewer Cleaning & Repair",
    description:
      "Whether it's a minor issue or a major breakdown, we diagnose and fix problems with precision, using high-quality parts and the latest techniques.",
  },
  {
    title: "Water Booster Pump",
    description:
      "Our experienced technicians handle everything from installation and maintenance to repair and optimization of booster pumps.",
  },
  {
    title: "A/C Riser Valves",
    description:
      "Crucial components that manage refrigerant flow and pressure in your air conditioning system. We provide precise solutions to enhance efficiency and prevent costly breakdowns.",
  },
  {
    title: "Copper Pipe Freezing",
    description:
      "Expert copper pipe freezing services to facilitate safe and efficient repairs or replacements without draining your entire system.",
  },
  {
    title: "Cast Iron Pipe Replacement",
    description:
      "Careful removal of old cast iron pipes and installation of modern, durable alternatives that enhance performance and longevity.",
  },
  {
    title: "Smart Water Valves",
    description:
      "Smart water valves monitor for leaks, detect unusual water usage, and can automatically shut off water to prevent costly damage. We install and set up your smart valve for peace of mind.",
  },
  {
    title: "Backflow",
    description:
      "Certified backflow testing, repairs, and installation to keep your home or business safe and compliant while protecting your clean water supply.",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="bg-white">
        <Container className="py-14">
          <SectionHeading
            eyebrow="SERVICES"
            title="Commercial & Residential Services"
          >
            Founded on the principles of trust, integrity, and customer satisfaction,
            we pride ourselves on our ability to not only meet but exceed our clients’
            expectations.
          </SectionHeading>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-brand bg-brand-background p-6 ring-1 ring-brand-accent/10"
              >
                <div className="text-base font-extrabold text-brand-primary">
                  {s.title}
                </div>
                <p className="mt-2 text-sm leading-7 text-brand-accent/80">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

