"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { paths } from "@/constants/paths";
import text from "@/i18n/translations.json";
import type { WithLocale } from "@/types/helpers";

import { Button } from "./button";

export const NavLinks = ({ locale }: WithLocale) => {
  const pathName = usePathname();
  const translations = text[locale];

  return (
    <ol className="grid gap-1 mt-10">
      <li className="w-full">
        <Button
          asChild
          variant={pathName === paths.home ? "secondary" : "ghost"}
          className="flex items-center gap-2 w-full"
        >
          <Link href={paths.home}>{translations["nav-links"]["about-me"]}</Link>
        </Button>
      </li>

      <li>
        <Button
          asChild
          variant={pathName === paths.resume ? "secondary" : "ghost"}
        >
          <Link href={paths.resume} className="flex items-center gap-2">
            {translations["nav-links"].resume}
          </Link>
        </Button>
      </li>
    </ol>
  );
};
