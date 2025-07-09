import { memo } from "react";

import { setUserLocale } from "@/i18n/locale";
import type { WithLocale } from "@/types/helpers";

import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const LocaleSwitcherComponent = ({ locale }: WithLocale) => {
  const displayedLocale = locale === "en" ? "en" : "ру";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{displayedLocale}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent loop collisionPadding={20} className="min-w-10">
        <DropdownMenuRadioGroup
          onValueChange={setUserLocale as (v: string) => void}
        >
          <DropdownMenuRadioItem className="pl-2" value="ru">
            русский
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem className="pl-2" value="en">
            english
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const LocaleSwitcher = memo(LocaleSwitcherComponent);
