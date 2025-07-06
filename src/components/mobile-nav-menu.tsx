"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { paths } from "@/constants/paths";
import { useTranslation } from "@/providers/locale-provider";

import { Button } from "./button";
import { FontToggle } from "./font-toggle";
import { LocaleSwitcher } from "./locale-switcher";
import { Logo } from "./logo";
import { SocialLinks } from "./social-links";
import { ThemeSwitcher } from "./theme-switcher";

export const MobileNavMenu = ({ fontSize }: { fontSize: string }) => {
  const pathName = usePathname();
  const { translations } = useTranslation();

  return (
    <header className="md:hidden p-5">
      <nav className="pb-10">
        <div className="flex items-center gap-2">
          <div className="ml-auto flex items-center justify-self-end">
            <ThemeSwitcher />
            <LocaleSwitcher />
          </div>
          <FontToggle fontSize={fontSize} />
        </div>

        <div className="flex items-center gap-4 mt-4 mb-8">
          <SocialLinks />
        </div>

        <ol className="flex gap-2 flex-row justify-start items-center">
          <Link href={paths.home}>
            <Logo className="size-10 mx-auto" aria-label="logo" />
          </Link>

          <li className="ml-4">
            <Button
              asChild
              variant={pathName === paths.home ? "secondary" : "outline"}
            >
              <Link href={paths.home}>
                {translations["nav-links"]["about-me"]}
              </Link>
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
      </nav>
    </header>
  );
};
