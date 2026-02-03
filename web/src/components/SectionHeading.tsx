import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <div className="text-xs font-extrabold tracking-[0.2em] text-brand-accent/70">
          {eyebrow}
        </div>
      ) : null}
      <div className="mt-2 text-3xl font-extrabold tracking-tight text-brand-primary">
        {title}
      </div>
      {children ? (
        <div className="mt-3 text-sm leading-7 text-brand-accent/80">
          {children}
        </div>
      ) : null}
    </div>
  );
}

