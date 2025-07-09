"use client";

import { IconDownload } from "@tabler/icons-react";
import { type PropsWithChildren } from "react";

import type { WithLocale } from "@/types/helpers";

import { Button } from "./button";

export const DownloadPDF = ({
  locale,
  children,
}: PropsWithChildren & WithLocale) => {
  const fileName =
    locale === "en" ? "Resume Samy Zogeyb" : "Резюме Сами Зогейб";

  return (
    <Button
      onClick={async () => {
        const pdf = (await import("@react-pdf/renderer")).pdf;
        const Resume = (await import("./resume")).Resume;

        const blob = await pdf(<Resume locale={locale} />).toBlob();

        if (blob) {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = fileName;
          document.body.append(link);
          link.click();
          link.remove();
          // in case the Blob uses a lot of memory
          setTimeout(() => URL.revokeObjectURL(link.href), 7000);
        }
      }}
    >
      {children}
      <IconDownload className="size-3" />
    </Button>
  );
};
