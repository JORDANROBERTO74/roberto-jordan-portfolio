import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getContent } from "@/content";
import type { Locale } from "@/content/types";
import SectionHeading from "@/components/section-heading";
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
    path: "/about",
    title: content.about.eyebrow,
    description: content.about.lead,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  setRequestLocale(locale);

  const about = getContent(typedLocale).about;

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="label-mono">{about.eyebrow}</p>
            <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-[-0.02em] text-balance">
              {about.title}
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {about.lead}
            </p>
          </div>

          <dl className="self-end border-t border-border lg:col-span-3 lg:col-start-10">
            {about.facts.map((fact) => (
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
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label-mono">{about.bioLabel}</p>
          </div>
          <div className="md:col-span-8">
            {about.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mb-5 max-w-2xl text-base leading-relaxed text-muted-foreground last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-foreground text-background">
        <div className="container-page py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-background/60">
                {about.process.label}
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
                {about.process.title}
              </h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/70">
                {about.process.lead}
              </p>
            </div>
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 md:col-span-8">
              {about.process.items.map((item) => (
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
          label={about.capabilities.label}
          title={about.capabilities.title}
          lead={about.capabilities.lead}
        />
        <dl className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {about.capabilities.groups.map((group) => (
            <div key={group.name} className="border-t border-border pt-4">
              <dt className="label-mono">{group.name}</dt>
              <dd className="mt-4 flex flex-col gap-1.5 text-sm">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-border bg-foreground text-background">
        <div className="container-page grid gap-8 py-20 md:grid-cols-12 md:items-end md:py-24">
          <div className="md:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-background/60">
              {about.contact.label}
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1] tracking-tight text-balance">
              {about.contact.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-background/70 md:text-base">
              {about.contact.body}
            </p>
          </div>
          <div className="flex md:col-span-4 md:justify-end">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center bg-primary px-7 font-mono text-[11px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-background hover:text-foreground"
            >
              {about.contact.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
