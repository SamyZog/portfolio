"use server";

import { cookies } from "next/headers";

import { defaultLocale, type Locale } from "./config";
import translations from "./translations.json";

const LCOALE_COOKIE_NAME = "NEXT_LOCALE";

export const getUserLocale = async () => {
  return ((await cookies()).get(LCOALE_COOKIE_NAME)?.value ||
    defaultLocale) as Locale;
};

export const setUserLocale = async (locale: Locale) => {
  (await cookies()).set(LCOALE_COOKIE_NAME, locale);
};

export const toggleLocale = async () => {
  const currentLocale = await getUserLocale();

  setUserLocale(currentLocale === "en" ? "ru" : "en");
};

export const getTranslations = async () => {
  const locale = await getUserLocale();

  return {
    translations: translations[locale],
    locale,
  };
};
