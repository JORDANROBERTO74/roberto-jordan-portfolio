import { setRequestLocale } from "next-intl/server";
import { getContent } from "@/content";
import type { Locale } from "@/content/types";
import { pageMetadata } from "@/lib/metadata";
import ContactForm from "@/components/contact-form";
import { socialMedias } from "@/components/common/socialMedias";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const content = getContent(locale as Locale);

  return pageMetadata({
    locale: locale as Locale,
    path: "/contact",
    title: content.contact.eyebrow,
    description: content.contact.lead,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  setRequestLocale(locale);

  const contact = getContent(typedLocale).contact;
  const email = socialMedias
    .find((item) => item.url.startsWith("mailto:"))
    ?.url.replace("mailto:", "");

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="label-mono">{contact.eyebrow}</p>
            <h1 className="mt-8 max-w-4xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-[-0.02em] text-balance">
              {contact.title}
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {contact.lead}
            </p>
          </div>

          <div className="self-end lg:col-span-3 lg:col-start-10">
            <p className="label-mono">{contact.emailLabel}</p>
            <a
              href={`mailto:${email}`}
              className="mt-3 block border-b border-primary pb-1 text-sm transition-colors hover:text-primary"
            >
              {email}
            </a>
            <p className="label-mono mt-8">{contact.socialLabel}</p>
            <div className="mt-3 flex flex-col gap-2">
              {socialMedias
                .filter((item) => !item.url.startsWith("mailto:"))
                .map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit text-sm transition-colors hover:text-primary"
                  >
                    {item.name} ↗
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              {contact.formTitle}
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {contact.note}
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
