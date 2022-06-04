/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Header from "components/layout/Header";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Script src="/setColorScheme.js" strategy="beforeInteractive" />
    <Header
      alert={pageProps?.topLevelAlert}
      navLinks={pageProps?.navLinks}
      signature={pageProps?.signature}
      socialLinks={pageProps?.socialLinks}
    />
    <Component {...pageProps} />
  </>
);

export default MyApp;
