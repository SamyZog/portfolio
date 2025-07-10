import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export const Metrics = () => {
  return (
    <>
      <GoogleTagManager gtmId="G-NLE3S9XNBJ" />
      <Script src="/metrics/yaMetrika.js" strategy="afterInteractive" />
    </>
  );
};
