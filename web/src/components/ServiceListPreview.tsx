import { Container } from "@/components/Container";
import { home } from "@/content/siteContent";
import type React from "react";
import {
  Database,
  Droplets,
  Flame,
  Route,
  ThermometerSun,
  Video,
  Waves,
  Wrench,
} from "lucide-react";

type ServiceKey =
  | "Water Heaters"
  | "Commercial Boilers"
  | "Pool Heaters"
  | "Slab Leaks"
  | "Storage & Expansion Tanks"
  | "Sewer Pipe Video Inspections"
  | "Reroute Leaking Water Pipes"
  | "Pump Repairs";

const ICONS: Record<ServiceKey, React.ComponentType<{ className?: string }>> = {
  "Water Heaters": ThermometerSun,
  "Commercial Boilers": Flame,
  "Pool Heaters": Waves,
  "Slab Leaks": Droplets,
  "Storage & Expansion Tanks": Database,
  "Sewer Pipe Video Inspections": Video,
  "Reroute Leaking Water Pipes": Route,
  "Pump Repairs": Wrench,
};

const GRID_ITEMS: Array<{ title: ServiceKey; tone: "light" | "dark" }> = [
  { title: "Water Heaters", tone: "light" },
  { title: "Storage & Expansion Tanks", tone: "dark" },
  { title: "Commercial Boilers", tone: "light" },
  { title: "Sewer Pipe Video Inspections", tone: "dark" },
  { title: "Pool Heaters", tone: "light" },
  { title: "Reroute Leaking Water Pipes", tone: "dark" },
  { title: "Slab Leaks", tone: "light" },
  { title: "Pump Repairs", tone: "dark" },
];

function ServiceCard({
  title,
  description,
  tone,
}: {
  title: ServiceKey;
  description: string;
  tone: "light" | "dark";
}) {
  const Icon = ICONS[title];

  const surface =
    tone === "dark"
      ? "bg-brand-primary text-white ring-white/10"
      : "bg-white text-[#00235B] ring-black/10";

  const bodyColor = tone === "dark" ? "text-white/80" : "text-[#00235B]/70";
  const iconColor = tone === "dark" ? "text-white" : "text-brand-primary";

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-[24px] p-6 ring-1 transition-all duration-200",
        "min-h-[170px]",
        "shadow-[0_18px_44px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_56px_rgba(0,0,0,0.12)]",
        surface,
      ].join(" ")}
    >
      <div className="flex items-start gap-4">
        <Icon
          className={[
            "mt-0.5 h-7 w-7 shrink-0 transition-transform duration-200",
            "group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
            iconColor,
          ].join(" ")}
        />

        <div className="min-w-0">
          <div className="text-base font-extrabold tracking-tight">{title}</div>
          <p className={["mt-1 text-sm leading-6", bodyColor].join(" ")}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ServiceListPreview() {
  const byTitle = new Map(
    home.serviceList.items.map((i) => [i.title as ServiceKey, i.description] as const),
  );

  return (
    <section className="bg-brand-background">
      {/* Header bar like the reference */}
      <div className="bg-[var(--hero-topbar)]">
        <Container className="py-7">
          <h2 className="text-4xl font-extrabold italic tracking-tight text-white drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]">
            {home.serviceList.title}
          </h2>
        </Container>
      </div>

      <Container className="py-12">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {GRID_ITEMS.map((slot) => (
            <ServiceCard
              key={slot.title}
              title={slot.title}
              description={byTitle.get(slot.title) ?? ""}
              tone={slot.tone}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

