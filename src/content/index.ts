import type { Content, Locale, Project } from "./types";
import { en } from "./en";
import { es } from "./es";

const contentByLocale: Record<Locale, Content> = { en, es };

export function getContent(locale: Locale): Content {
  return contentByLocale[locale];
}

export function getCaseStudies(locale: Locale): Project[] {
  return getContent(locale).projects.filter((project) => project.caseStudy);
}

export function getArchiveProjects(locale: Locale): Project[] {
  return getContent(locale).projects.filter((project) => !project.caseStudy);
}

export function getProject(locale: Locale, slug: string): Project | undefined {
  return getContent(locale).projects.find((project) => project.slug === slug);
}
