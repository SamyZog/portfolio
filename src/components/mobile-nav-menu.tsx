import type { WithLocale } from "@/types/helpers";

import { FontToggle } from "./font-toggle";
import { LocaleSwitcher } from "./locale-switcher";
import { MobileNavLinks } from "./mobile-nav-links";
import { SocialLinks } from "./social-links";
import { ThemeSwitcher } from "./theme-switcher";

export const MobileNavMenu = ({
  fontSize,
  locale,
}: { fontSize: string } & WithLocale) => {
  return (
    <header className="md:hidden p-5">
      <nav>
        <div className="flex items-center gap-2">
          <div className="ml-auto flex items-center justify-self-end">
            <ThemeSwitcher />
            <LocaleSwitcher locale={locale} />
          </div>
          <FontToggle fontSize={fontSize} />
        </div>

        <div className="flex items-center gap-4 mt-4 mb-8">
          <SocialLinks />
        </div>

        <MobileNavLinks locale={locale} />
      </nav>
    </header>
  );
};
