"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("header.languageButton");

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em]"
    >
      {routing.locales.map((item, index) => (
        <span key={item} className="flex items-center gap-1.5">
          {index > 0 && (
            <span aria-hidden className="text-border">
              /
            </span>
          )}
          <Link
            href={pathname}
            locale={item}
            aria-current={locale === item ? "true" : undefined}
            className={
              locale === item
                ? "text-foreground"
                : "text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            {item}
          </Link>
        </span>
      ))}
    </div>
  );
}
