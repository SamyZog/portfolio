"use client";

import {
  createContext,
  memo,
  type PropsWithChildren,
  useContext,
  useMemo,
} from "react";

import type { Locale } from "@/i18n/config";

import translations from "../i18n/translations.json";

const localeContext = createContext<{
  locale: Locale;
  translations: (typeof translations)["en"];
}>({
  locale: "en",
  translations: {} as (typeof translations)["en"],
});

const { Provider } = localeContext;

const LocaleProviderComponent = ({
  children,
  locale = "en",
}: PropsWithChildren & {
  locale: Locale;
}) => {
  const value = useMemo(() => {
    return {
      locale,
      translations: translations[locale],
    };
  }, [locale]);

  return <Provider value={value}>{children}</Provider>;
};

export const LocaleProvider = memo(LocaleProviderComponent);

// TODO - make selectors for each page
export const useTranslation = () => useContext(localeContext);
