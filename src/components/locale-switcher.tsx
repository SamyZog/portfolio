"use client";

import { memo } from "react";

import { setUserLocale } from "@/i18n/locale";
import { useTranslation } from "@/providers/locale-provider";

import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const LocaleSwitcherComponent = () => {
  const { locale } = useTranslation();

  const displayedLocale = locale === "en" ? "en" : "ру";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{displayedLocale}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent loop collisionPadding={20} className="min-w-10">
        <DropdownMenuItem onClick={() => setUserLocale("ru")}>
          русский
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setUserLocale("en")}>
          english
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const LocaleSwitcher = memo(LocaleSwitcherComponent);
