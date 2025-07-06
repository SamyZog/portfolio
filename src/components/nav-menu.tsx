"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { paths } from "@/constants/paths";
import { useTranslation } from "@/providers/locale-provider";

import { Button } from "./button";
import { FontToggle } from "./font-toggle";
import { LocaleSwitcher } from "./locale-switcher";
import { Logo } from "./logo";
import { Separator } from "./separator";
import { SocialLinks } from "./social-links";
import { ThemeSwitcher } from "./theme-switcher";

export const NavMenu = ({ fontSize }: { fontSize: string }) => {
  const pathName = usePathname();
  const { translations } = useTranslation();

  return (
    <nav className="w-20">
      <div className="flex justify-center w-full">
        <Link href={paths.home} className="size-10" aria-label="logo">
          <Logo />
        </Link>
      </div>

      <ol className="grid gap-1 mt-10">
        <li className="w-full">
          <Button
            asChild
            variant={pathName === paths.home ? "secondary" : "ghost"}
            className="flex items-center gap-2 w-full"
          >
            <Link href={paths.home}>
              {translations["nav-links"]["about-me"]}
            </Link>
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

      <Separator className="my-5" />

      <div className="flex justify-center">
        <div className="inline-grid grid-cols-2 gap-2">
          <SocialLinks />
        </div>
      </div>

      <Separator className="my-5" />

      <div className="md:block hidden">
        <div className="mb-5">
          <FontToggle fontSize={fontSize} />
        </div>

        <div className="flex items-center justify-between w-full">
          <ThemeSwitcher />
          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
};
