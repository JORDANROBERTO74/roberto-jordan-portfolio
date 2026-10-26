import { setRequestLocale } from "next-intl/server";
import { getArchiveProjects, getCaseStudies, getContent } from "@/content";
import type { Locale } from "@/content/types";
import ProjectEntry from "@/components/project-entry";
import ProjectCard from "@/components/project-card";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getContent(locale as Locale);

  return pageMetadata({
    locale: locale as Locale,
    path: "/portfolio",
    title: content.portfolio.eyebrow,
    description: content.portfolio.lead,
  });
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  setRequestLocale(locale);

  const content = getContent(typedLocale);
  const portfolio = content.portfolio;
  const caseStudies = getCaseStudies(typedLocale);
  const archive = getArchiveProjects(typedLocale);

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page py-16 md:py-24">
          <p className="label-mono">{portfolio.eyebrow}</p>
          <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.96] tracking-[-0.02em] text-balance">
            {portfolio.title}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {portfolio.lead}
          </p>
        </div>
      </section>

      <section className="container-page pb-16 pt-12 md:pb-24 md:pt-16">
        <p className="label-mono">{portfolio.selectedLabel}</p>
        <div className="mt-8">
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
      </section>

      <section className="border-t border-border">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="label-mono">{portfolio.archiveLabel}</p>
              <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
                {portfolio.archiveTitle}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9 md:text-base">
              {portfolio.archiveLead}
            </p>
          </div>

          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {archive.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={typedLocale}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
