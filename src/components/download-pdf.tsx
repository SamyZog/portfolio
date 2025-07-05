"use client";

import { IconDownload } from "@tabler/icons-react";
import dynamic from "next/dynamic";
import { type PropsWithChildren } from "react";

import type { Locale } from "@/i18n/config";

import { Button } from "./button";
import { Resume } from "./resume";
import { Skeleton } from "./skeleton";

const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
  {
    ssr: false,
    loading: () => <Skeleton className="h-7 w-32" />,
  },
);

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
