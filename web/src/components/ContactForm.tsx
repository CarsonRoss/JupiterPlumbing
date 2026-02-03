"use client";

import { useMemo, useState } from "react";

import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/content/siteContent";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Website contact request from ${name || "Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );
    return `${site.email.href}?subject=${subject}&body=${body}`;
  }, [email, message, name]);

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
    >
      <label className="grid gap-1">
        <span className="text-xs font-bold tracking-wide text-brand-accent/80">
          Name *
        </span>
        <input
          className="h-11 rounded-brand bg-white px-3 text-sm text-black ring-1 ring-brand-accent/20 focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label className="grid gap-1">
        <span className="text-xs font-bold tracking-wide text-brand-accent/80">
          Email Address *
        </span>
        <input
          type="email"
          className="h-11 rounded-brand bg-white px-3 text-sm text-black ring-1 ring-brand-accent/20 focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label className="grid gap-1">
        <span className="text-xs font-bold tracking-wide text-brand-accent/80">
          Message *
        </span>
        <textarea
          className="min-h-32 resize-y rounded-brand bg-white px-3 py-2 text-sm text-black ring-1 ring-brand-accent/20 focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-brand bg-brand-primary px-5 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
        >
          Send Message
        </button>
        <ButtonLink href={site.phone.href} variant="ghost" className="px-0">
          Or call {site.phone.display} →
        </ButtonLink>
      </div>
      <p className="text-xs leading-6 text-brand-accent/70">
        This form opens your email client to send a message to{" "}
        <a className="font-semibold underline" href={site.email.href}>
          {site.email.display}
        </a>
        .
      </p>
    </form>
  );
}

