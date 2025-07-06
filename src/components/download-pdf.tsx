"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { IconDownload } from "@tabler/icons-react";
import { type PropsWithChildren } from "react";

import type { Locale } from "@/i18n/config";

import { Button } from "./button";
import { Resume } from "./resume";

export const DownloadPDF = ({
  locale,
  children,
}: PropsWithChildren & { locale: Locale }) => {
  const fileName =
    locale === "en" ? "Resume_Samy_Zogeyb" : "Резюме_Сами_Зогейб";

  return (
    <Button asChild>
      <PDFDownloadLink
        document={<Resume locale={locale} />}
        fileName={fileName}
      >
        {children}

        <IconDownload className="size-3" />
      </PDFDownloadLink>
    </Button>
  );
};
