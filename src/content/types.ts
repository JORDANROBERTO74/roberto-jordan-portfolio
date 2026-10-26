export type Locale = "en" | "es";

export type CaseStudy = {
  context: string;
  challenge: string;
  approach: string;
  build: string;
  outcome: string;
  scopeNote: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  year: string;
  type: string;
  stack: string[];
  image: string;
  imageAlt: string;
  demo: string;
  code: string;
  caseStudy?: CaseStudy;
};

export type LabelledValue = { label: string; value: string };

export type SectionHeading = {
  label: string;
  title: string;
  lead: string;
};

export type ApproachItem = {
  index: string;
  title: string;
  body: string;
};

export type StackGroup = { name: string; items: string[] };

export type Content = {
  meta: { title: string; description: string };
  home: {
    eyebrow: string;
    title: string;
    lead: string;
    facts: LabelledValue[];
    primaryCta: string;
    secondaryCta: string;
    work: SectionHeading & { cta: string };
    approach: SectionHeading & { items: ApproachItem[] };
    stack: SectionHeading & { groups: StackGroup[] };
    about: SectionHeading & { body: string[]; cta: string };
    contact: { label: string; title: string; body: string; cta: string };
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string[];
    bioLabel: string;
    facts: LabelledValue[];
    process: SectionHeading & { items: ApproachItem[] };
    capabilities: SectionHeading & { groups: StackGroup[] };
    contact: { label: string; title: string; body: string; cta: string };
  };
  portfolio: {
    eyebrow: string;
    title: string;
    lead: string;
    selectedLabel: string;
    archiveLabel: string;
    archiveTitle: string;
    archiveLead: string;
  };
  work: {
    eyebrow: string;
    backLabel: string;
    readLabel: string;
    role: string;
    metaLabels: {
      role: string;
      year: string;
      type: string;
      stack: string;
      demo: string;
      code: string;
    };
    sections: {
      context: string;
      challenge: string;
      approach: string;
      build: string;
      outcome: string;
      scopeNote: string;
    };
    nextLabel: string;
    contact: { title: string; body: string; cta: string };
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    emailLabel: string;
    socialLabel: string;
    note: string;
    formTitle: string;
  };
  notFound: { title: string; body: string; cta: string };
  footer: { note: string };
  projects: Project[];
};
