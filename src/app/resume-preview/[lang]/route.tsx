import { type NextRequest, NextResponse } from "next/server";

import { Resume } from "@/components/resume";
import { locales } from "@/i18n/config";
import type { Locale } from "@/types/helpers";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return locales.map((locale) => ({
    lang: locale,
  }));
}

export const GET = async (
  _: NextRequest,
  { params }: { params: Promise<{ lang: Locale }> },
) => {
  const query = (await params).lang;

  const loc = locales.includes(query) ? query : "en";

  const pdfRenderer = await import("@react-pdf/renderer");

  const renderToStream = pdfRenderer.renderToStream;

  const stream = await renderToStream(<Resume locale={loc} />);

  return new NextResponse(stream as unknown as ReadableStream);
};
