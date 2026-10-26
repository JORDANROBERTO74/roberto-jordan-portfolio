import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getContent } from "@/content";
import type { Locale } from "@/content/types";
import { socialMedias } from "@/components/common/socialMedias";

type MenuItem = { name: string; href: string };

export default async function Footer({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "footer" });
  const content = getContent(locale);
  const items = t.raw("menu.items") as MenuItem[];

  return (
    <footer className="border-t border-border">
      <div className="container-page grid gap-12 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl tracking-tight">
            Roberto Jordán
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {content.footer.note}
          </p>
        </div>

        <nav
          aria-label={t("menu.label")}
          className="flex flex-col gap-3 md:col-span-3"
        >
          <p className="label-mono">{t("menu.label")}</p>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="w-fit text-sm transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 md:col-span-4">
          <p className="label-mono">{content.contact.socialLabel}</p>
          <div className="flex flex-col gap-3">
            {socialMedias.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target={item.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  item.url.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="flex w-fit items-center gap-2 text-sm transition-colors hover:text-primary"
              >
                <span className="[&>svg]:h-4 [&>svg]:w-4">{item.icon}</span>
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:col-span-12 md:flex-row">
          <p>{t("copyright")}</p>
          <p className="font-mono uppercase tracking-[0.16em]">
            Santa Cruz de la Sierra, Bolivia
          </p>
        </div>
      </div>
    </footer>
  );
}
