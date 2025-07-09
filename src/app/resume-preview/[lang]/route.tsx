import { renderToStream } from "@react-pdf/renderer";
import type { NextRequest } from "next/server";

import { Resume } from "@/components/resume";
import { locales } from "@/i18n/config";
import type { Locale } from "@/types/helpers";

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

  const stream = await renderToStream(<Resume locale={loc} />);

  return new Response(stream as unknown as ReadableStream, {
    headers: {
      "Content-Type": "application/pdf",
    },
  });
};
