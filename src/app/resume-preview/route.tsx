import { renderToStream } from "@react-pdf/renderer";
import { type NextRequest, NextResponse } from "next/server";

import { Resume } from "@/components/resume";
import { type Locale, locales } from "@/i18n/config";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("lang") as Locale;

  const loc = locales.includes(query) ? query : "en";

  const stream = await renderToStream(<Resume locale={loc} />);

  return new NextResponse(stream as unknown as ReadableStream);
};
