"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { memo, type PropsWithChildren } from "react";

const ThemeProviderComponent = ({ children }: PropsWithChildren) => {
  return (
    <NextThemeProvider disableTransitionOnChange attribute="class">
      {children}
    </NextThemeProvider>
  );
};

export const ThemeProvider = memo(ThemeProviderComponent);
