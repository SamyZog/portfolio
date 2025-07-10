import "@/css/globals.css";

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";
import type { PropsWithChildren } from "react";

import { MobileNavMenu } from "@/components/mobile-nav-menu";
import { font } from "@/constants/fonts";
import { getUserLocale } from "@/i18n/locale";
import seo from "@/i18n/seo.json";
import { ThemeProvider } from "@/providers/theme-provider";

import { NavMenu } from "../components/nav-menu";

const Metrics = dynamic(
  () => import("@/components/metrics").then((mod) => mod.Metrics),
  { ssr: !!false },
);

export const generateMetadata = async (): Promise<Metadata> => {
  const locale = await getUserLocale();

  const data = seo[locale].home;

  return {
    title: {
      default: data.title,
      template: `%s | ${data.title}`,
    },
    description: data.description,
    manifest: "/manifest.json",
    icons: {
      icon: {
        url: "/icon0.svg",
        type: "image/svg+xml",
        rel: "icon",
        sizes: "any",
      },
      apple: {
        url: "/apple-icon.png",
        rel: "apple-touch-icon",
        type: "image/png",
      },
      other: [
        {
          url: "/favicon.ico",
          rel: "icon",
          sizes: "48x48",
        },
      ],
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "ru_RU",
      emails: "samyzogeyb@gmail.com",
      description: data.ogDescription,
      title: data.title,
      images: [
        {
          alt: "Samy Zogeyb Logo",
          url: "/open_graph.png",
          height: "630",
          width: "1200",
        },
      ],
    },
  };
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  const locale = await getUserLocale();
  const fontSize = (await cookies()).get("font-size")?.value ?? "14px";

  return (
    <html lang={locale} suppressHydrationWarning style={{ fontSize }}>
      <Metrics />

      <body
        className={`${font.className} antialiased min-h-screen overflow-x-hidden`}
      >
        <ThemeProvider>
          <MobileNavMenu fontSize={fontSize} locale={locale} />

          <main className="realtive flex items-baseline max-w-4xl mx-auto gap-10 py-10 px-5">
            <NavMenu fontSize={fontSize} locale={locale} />

            <section className="flex-1 relative">{children}</section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
