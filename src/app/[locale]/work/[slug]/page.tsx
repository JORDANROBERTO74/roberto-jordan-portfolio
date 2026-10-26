import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getCaseStudies, getContent, getProject } from "@/content";
import type { Locale } from "@/content/types";
import { routing } from "@/i18n/routing";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getCaseStudies(locale).map((project) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const project = getProject(locale as Locale, slug);

  if (!project) return {};

  return pageMetadata({
    locale: locale as Locale,
    path: `/work/${slug}`,
    title: project.name,
    description: project.tagline,
  });
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const typedLocale = locale as Locale;
  setRequestLocale(locale);

  const project = getProject(typedLocale, slug);

  if (!project?.caseStudy) {
    notFound();
  }

  const content = getContent(typedLocale);
  const work = content.work;
  const studies = getCaseStudies(typedLocale);
  const currentIndex = studies.findIndex((item) => item.slug === slug);
  const next = studies[(currentIndex + 1) % studies.length];
  const section = project.caseStudy;

  const meta = [
    { label: work.metaLabels.role, value: work.role },
    { label: work.metaLabels.year, value: project.year },
    { label: work.metaLabels.type, value: project.type },
  ];

  const sections = [
    { label: work.sections.context, body: section.context },
    { label: work.sections.challenge, body: section.challenge },
    { label: work.sections.approach, body: section.approach },
    { label: work.sections.build, body: section.build },
    { label: work.sections.outcome, body: section.outcome },
  ];

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-12 md:py-20">
          <Link
            href="/portfolio"
            className="label-mono inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <span aria-hidden>←</span>
            {work.backLabel}
          </Link>

          <p className="label-mono mt-12">{work.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-[-0.02em]">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {project.tagline}
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-12">
            <dl className="grid gap-6 sm:grid-cols-3 md:col-span-8">
              {meta.map((item) => (
                <div key={item.label} className="border-t border-border pt-3">
                  <dt className="label-mono">{item.label}</dt>
                  <dd className="mt-2 text-sm">{item.value}</dd>
                </div>
              ))}
              <div className="border-t border-border pt-3 sm:col-span-3">
                <dt className="label-mono">{work.metaLabels.stack}</dt>
                <dd className="mt-2 text-sm">{project.stack.join(", ")}</dd>
              </div>
            </dl>

            <div className="flex flex-col gap-3 md:col-span-4 md:items-end md:justify-end">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center bg-primary px-6 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                {work.metaLabels.demo} ↗
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center border border-border px-6 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors hover:border-foreground"
              >
                {work.metaLabels.code} ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-page py-10 md:py-14">
        <div className="border border-border bg-card">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1440}
            height={900}
            priority
            sizes="100vw"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      <section className="container-page pb-16 md:pb-24">
        {sections.map((item) => (
          <div
            key={item.label}
            className="grid gap-4 border-t border-border py-8 md:grid-cols-12 md:gap-8 md:py-10"
          >
            <h2 className="label-mono md:col-span-3">{item.label}</h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:col-span-8 md:text-lg">
              {item.body}
            </p>
          </div>
        ))}

        <div className="grid gap-4 border-y border-border py-8 md:grid-cols-12 md:gap-8">
          <h2 className="label-mono md:col-span-3">
            {work.sections.scopeNote}
          </h2>
          <p className="max-w-2xl border-l-2 border-primary pl-5 text-sm leading-relaxed text-muted-foreground md:col-span-8">
            {section.scopeNote}
          </p>
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24">
        <Link
          href={`/work/${next.slug}`}
          className="group grid gap-4 border-t border-border pt-8 md:grid-cols-12 md:items-end"
        >
          <div className="md:col-span-8">
            <p className="label-mono">{work.nextLabel}</p>
            <p className="mt-3 font-display text-3xl tracking-tight transition-colors group-hover:text-primary md:text-4xl">
              {next.name}
            </p>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              {next.tagline}
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <span aria-hidden className="font-display text-4xl">
              →
            </span>
          </div>
        </Link>
      </section>

      <section className="border-t border-border bg-foreground text-background">
        <div className="container-page grid gap-8 py-16 md:grid-cols-12 md:items-end md:py-20">
          <div className="md:col-span-8">
            <h2 className="max-w-2xl font-display text-3xl tracking-tight md:text-4xl">
              {work.contact.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-background/70">
              {work.contact.body}
            </p>
          </div>
          <div className="flex md:col-span-4 md:justify-end">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center bg-primary px-6 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-background hover:text-foreground"
            >
              {work.contact.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
