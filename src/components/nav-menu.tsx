import Link from "next/link";

import { paths } from "@/constants/paths";
import type { WithLocale } from "@/types/helpers";

import { FontToggle } from "./font-toggle";
import { LocaleSwitcher } from "./locale-switcher";
import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { Separator } from "./separator";
import { SocialLinks } from "./social-links";
import { ThemeSwitcher } from "./theme-switcher";

export const NavMenu = ({
  fontSize,
  locale,
}: { fontSize: string } & WithLocale) => {
  return (
    <aside className="sticky top-10 md:block hidden">
      <nav className="w-20">
        <div className="flex justify-center w-full">
          <Link href={paths.home} className="size-10" aria-label="logo">
            <Logo />
          </Link>
        </div>

        <NavLinks locale={locale} />

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
            <LocaleSwitcher locale={locale} />
          </div>
        </div>
      </nav>
    </aside>
  );
};
