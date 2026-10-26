"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getContent } from "@/content";
import type { Locale } from "@/content/types";

export default function NotFound() {
  const locale = useLocale() as Locale;
  const content = getContent(locale).notFound;

  return (
    <section className="container-page flex min-h-[60vh] flex-col justify-center py-20">
      <p className="label-mono">404</p>
      <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-[-0.02em] text-balance">
        {content.title}
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
        {content.body}
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex h-11 w-fit items-center justify-center bg-primary px-6 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
      >
        {content.cta}
      </Link>
    </section>
  );
}
