"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { paths } from "@/constants/paths";
import text from "@/i18n/translations.json";
import type { WithLocale } from "@/types/helpers";

import { Button } from "./button";
import { Logo } from "./logo";

export const MobileNavLinks = ({ locale }: WithLocale) => {
  const pathName = usePathname();
  const translations = text[locale];

  return (
    <ol className="flex gap-2 flex-row justify-start items-center">
      <Link href={paths.home}>
        <Logo className="size-10 mx-auto" aria-label="logo" />
      </Link>

      <li className="ml-4">
        <Button
          asChild
          variant={pathName === paths.home ? "secondary" : "outline"}
        >
          <Link href={paths.home}>{translations["nav-links"]["about-me"]}</Link>
        </Button>
      </li>

      <li>
        <Button
          asChild
          variant={pathName === paths.resume ? "secondary" : "outline"}
        >
          <Link href={paths.resume} className="flex items-center gap-2">
            {translations["nav-links"].resume}
          </Link>
        </Button>
      </li>
    </ol>
  );
};
