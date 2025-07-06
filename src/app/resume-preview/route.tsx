import { renderToStream } from "@react-pdf/renderer";
import { NextResponse } from "next/server";

import { Resume } from "@/components/resume";
import { getUserLocale } from "@/i18n/locale";

export const dynamic = "force-static";

export const GET = async () => {
  const locale = await getUserLocale();

  const stream = await renderToStream(<Resume locale={locale} />);

  return new NextResponse(stream as unknown as ReadableStream);
};
