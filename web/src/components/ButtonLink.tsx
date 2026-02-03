import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center rounded-brand px-5 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-accent focus-visible:outline-brand-accent",
  secondary:
    "bg-white text-brand-accent ring-1 ring-brand-accent/20 hover:bg-brand-background focus-visible:outline-brand-accent",
  ghost:
    "text-brand-accent hover:bg-brand-background/60 focus-visible:outline-brand-accent",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  external?: boolean;
}) {
  const merged = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a className={merged} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={merged} href={href}>
      {children}
    </Link>
  );
}

