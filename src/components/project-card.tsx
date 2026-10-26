import Image from "next/image";
import type { Locale, Project } from "@/content/types";
import { getContent } from "@/content";

export default function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const content = getContent(locale);

  return (
    <article className="group flex flex-col border-t border-border pt-5">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          {project.year} / {project.type}
        </p>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          {project.slug}
        </span>
      </div>

      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 block overflow-hidden border border-border bg-card"
        aria-label={`${project.name} — ${content.work.metaLabels.demo}`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={720}
          height={480}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </a>

      <h3 className="mt-5 font-display text-2xl tracking-tight">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em]">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-border pb-1 transition-colors hover:border-primary hover:text-primary"
        >
          {content.work.metaLabels.demo} ↗
        </a>
        <a
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-border pb-1 transition-colors hover:border-primary hover:text-primary"
        >
          {content.work.metaLabels.code} ↗
        </a>
      </div>
    </article>
  );
}
