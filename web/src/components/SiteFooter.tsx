import { Container } from "@/components/Container";
import { site } from "@/content/siteContent";

function formatDayRange(days: string[]) {
  if (days.length === 1) return days[0];
  const start = days[0];
  const end = days[days.length - 1];
  return `${start}–${end}`;
}

function groupHours(
  hours: Array<{ day: string; hours: string }>,
): Array<{ label: string; hours: string }> {
  const dayAbbrev: Record<string, string> = {
    Monday: "Mon",
    Tuesday: "Tue",
    Wednesday: "Wed",
    Thursday: "Thu",
    Friday: "Fri",
    Saturday: "Sat",
    Sunday: "Sun",
  };

  // Group consecutive days by identical hours
  const result: Array<{ label: string; hours: string }> = [];
  let current: { hours: string; days: string[] } | null = null;

  for (const row of hours) {
    const day = dayAbbrev[row.day] ?? row.day;
    if (!current) {
      current = { hours: row.hours, days: [day] };
      continue;
    }

    if (row.hours === current.hours) {
      current.days.push(day);
      continue;
    }

    result.push({ label: formatDayRange(current.days), hours: current.hours });
    current = { hours: row.hours, days: [day] };
  }

  if (current) {
    result.push({ label: formatDayRange(current.days), hours: current.hours });
  }

  return result;
}

export function SiteFooter() {
  const grouped = groupHours(site.hours);

  return (
    <footer className="border-t border-white/15 bg-[var(--hero-topbar)] text-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="text-lg font-extrabold tracking-wide text-white drop-shadow-sm">
              {site.name}
            </div>
            <div className="mt-4 space-y-2 text-sm text-white/90">
              <a className="block font-semibold hover:underline" href={site.phone.href}>
                {site.phone.display}
              </a>
              <a className="block font-semibold hover:underline" href={site.email.href}>
                {site.email.display}
              </a>
              <div className="pt-1 text-white/90">
                {site.address.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-bold tracking-wide text-white/95">
              Hours of Operation
            </div>
            <div className="mt-4 space-y-2 text-sm text-white/90">
              <div className="rounded-brand bg-white/20 px-3 py-2 text-white/95 ring-1 ring-white/15">
                {site.afterHoursNote}
              </div>
              <div className="rounded-brand bg-white/10 p-4 ring-1 ring-white/15">
                <ul className="space-y-2">
                  {grouped.map((row) => (
                    <li key={row.label} className="flex justify-between gap-3">
                      <span className="font-semibold">{row.label}</span>
                      <span className="text-white/90">{row.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-xs text-white/80">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}

