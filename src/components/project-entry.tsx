import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Locale, Project } from "@/content/types";
import { getContent } from "@/content";

export default function ProjectEntry({
  project,
  index,
  locale,
  priority = false,
}: {
  project: Project;
  index: string;
  locale: Locale;
  priority?: boolean;
}) {
  const content = getContent(locale);

  return (
    <article className="border-t border-border">
      <Link
        href={`/work/${project.slug}`}
        className="group grid gap-8 py-10 md:grid-cols-12 md:items-center md:py-14"
      >
        <div className="md:col-span-5">
          <p className="label-mono">{index}</p>
          <h3 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
            {project.name}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            {project.tagline}
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <span className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-1 text-sm text-foreground transition-colors group-hover:text-primary">
            {content.work.readLabel}
            <span aria-hidden>→</span>
          </span>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="overflow-hidden border border-border bg-card">
            <Image
              src={project.image}
              alt={project.imageAlt}
              width={960}
              height={640}
              priority={priority}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.015]"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
