import type { Metadata } from "next";
import type { Locale } from "@/content/types";

const siteUrl = "https://robertojordan.vercel.app";

export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}): Metadata {
  const localizedPath = `/${locale}${path}`;
  const fullTitle =
    locale === "es"
      ? `${title} — Roberto Jordán`
      : `${title} — Roberto Jordán`;

  return {
    title,
    description,
    alternates: {
      canonical: localizedPath,
      languages: {
        en: `/en${path}`,
        es: `/es${path}`,
        "x-default": `/en${path}`,
      },
    },
    openGraph: {
      type: "website",
      siteName: "Roberto Jordán",
      title: fullTitle,
      description,
      url: localizedPath,
      locale: locale === "es" ? "es_BO" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export { siteUrl };
