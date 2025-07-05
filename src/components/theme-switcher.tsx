"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { memo } from "react";

import { Button } from "./button";

const ThemeSwitcherComponent = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
    >
      {resolvedTheme === "dark" ? <IconSun /> : <IconMoon />}
    </Button>
  );
};

export const ThemeSwitcher = memo(ThemeSwitcherComponent);
