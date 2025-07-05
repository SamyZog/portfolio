"use server";

import { renderToStream } from "@react-pdf/renderer";

import { PDFResume } from "@/app/resume-download/resume-pdf";

export const renderResume = async () => {
  const res = await renderToStream(<PDFResume />);

  console.log(res);
};
