import type { ReactNode } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function PageShell({
  children,
  showHeader = true,
}: {
  children: ReactNode;
  showHeader?: boolean;
}) {
  return (
    <div className="min-h-screen bg-brand-background">
      {showHeader ? <SiteHeader /> : null}
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

