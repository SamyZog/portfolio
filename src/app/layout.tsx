import "@/css/globals.css";

import { GoogleTagManager } from "@next/third-parties/google";
import { IconChevronsRight } from "@tabler/icons-react";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import Script from "next/script";
import type { PropsWithChildren } from "react";

import { FontToggle } from "@/components/font-toggle";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { Logo } from "@/components/logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/sheet";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { font } from "@/constants/fonts";
import { paths } from "@/constants/paths";
import { getUserLocale } from "@/i18n/locale";
import seo from "@/i18n/seo.json";
import { LocaleProvider } from "@/providers/locale-provider";
import { ThemeProvider } from "@/providers/theme-provider";

import { NavMenu } from "../components/nav-menu";

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
      <body
        className={`${font.className} antialiased min-h-screen overflow-x-hidden`}
      >
        <LocaleProvider locale={locale}>
          <ThemeProvider>
            <main className="realtive flex items-baseline max-w-4xl mx-auto gap-10 py-10 px-5">
              <aside className="sticky top-10 md:block hidden">
                <NavMenu fontSize={fontSize} />
              </aside>

              <section className="flex-1 relative">
                <Sheet key={locale}>
                  <SheetTrigger className="fixed top-0 left-0 bg-background p-1 md:hidden">
                    <IconChevronsRight />
                  </SheetTrigger>
                  <SheetContent side="left" className="!w-auto pt-5">
                    <SheetHeader>
                      <SheetDescription>
                        <NavMenu fontSize={fontSize} />
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>

                <div className="md:hidden">
                  <div className="flex justify-between">
                    <FontToggle fontSize={fontSize} />

                    <div className="flex items-center">
                      <ThemeSwitcher />
                      <LocaleSwitcher />
                    </div>
                  </div>

                  <Link href={paths.home} className="size-10 md:hidden">
                    <Logo className="size-20 mb-5 mx-auto" />
                  </Link>
                </div>

                {children}
              </section>
            </main>
          </ThemeProvider>
        </LocaleProvider>
      </body>
      <GoogleTagManager gtmId="G-NLE3S9XNBJ" />
      <Script src="/metrics/yaMetrika.js" />
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://mc.yandex.ru/watch/103213439"
            style={{
              position: "absolute",
              left: "-9999px",
            }}
            alt=""
          />
        </div>
      </noscript>
    </html>
  );
};

export default RootLayout;
