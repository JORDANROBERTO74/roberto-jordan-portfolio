import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getCaseStudies, getContent } from "@/content";
import type { Locale } from "@/content/types";
import SectionHeading from "@/components/section-heading";
import ProjectEntry from "@/components/project-entry";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  setRequestLocale(locale);

  const content = getContent(typedLocale);
  const home = content.home;
  const caseStudies = getCaseStudies(typedLocale);

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <p className="label-mono">{home.eyebrow}</p>
            <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.94] tracking-[-0.02em] text-balance">
              {home.title}
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {home.lead}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="inline-flex h-11 items-center justify-center bg-primary px-6 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                {home.primaryCta}
              </Link>
              <Link
                href="/about"
                className="inline-flex h-11 items-center justify-center border border-border px-6 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:border-foreground"
              >
                {home.secondaryCta}
              </Link>
            </div>
          </div>

          <dl className="self-end border-t border-border lg:col-span-3 lg:col-start-10">
            {home.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-1 border-b border-border py-4"
              >
                <dt className="label-mono">{fact.label}</dt>
                <dd className="text-sm leading-snug">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <SectionHeading
          label={home.work.label}
          title={home.work.title}
          lead={home.work.lead}
        />

        <div className="mt-12">
          {caseStudies.map((project, index) => (
            <ProjectEntry
              key={project.slug}
              project={project}
              locale={typedLocale}
              index={`0${index + 1}`}
              priority={index === 0}
            />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border-b border-primary pb-1 text-sm transition-colors hover:text-primary"
          >
            {home.work.cta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-foreground text-background">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-background/60">
                {home.approach.label}
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
                {home.approach.title}
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
                {home.approach.lead}
              </p>
            </div>

            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 md:col-span-8">
              {home.approach.items.map((item) => (
                <div
                  key={item.index}
                  className="border-t border-background/20 pt-5"
                >
                  <span className="font-mono text-[11px] tracking-[0.16em] text-background/60">
                    {item.index}
                  </span>
                  <h3 className="mt-3 font-display text-2xl tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-background/70">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <SectionHeading
          label={home.stack.label}
          title={home.stack.title}
          lead={home.stack.lead}
        />

        <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {home.stack.groups.map((group) => (
            <div key={group.name} className="border-t border-border pt-4">
              <dt className="label-mono">{group.name}</dt>
              <dd className="mt-4 flex flex-col gap-1 text-sm">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-border">
        <div className="container-page grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="label-mono">{home.about.label}</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="max-w-2xl font-display text-4xl tracking-tight text-balance md:text-5xl">
              {home.about.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {home.about.lead}
            </p>
            {home.about.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm transition-colors hover:text-primary"
            >
              {home.about.cta}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="container-page grid gap-10 py-20 md:grid-cols-12 md:items-end md:py-28">
          <div className="md:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-background/60">
              {home.contact.label}
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-tight text-balance">
              {home.contact.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-background/70 md:text-base">
              {home.contact.body}
            </p>
          </div>
          <div className="flex md:col-span-4 md:justify-end">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center bg-primary px-7 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-background hover:text-foreground"
            >
              {home.contact.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
