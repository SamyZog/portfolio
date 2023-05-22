/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable react/no-danger */
import {
  Html, Head, Main, NextScript,
} from 'next/document';
import Script from 'next/script';

const Document = () => (
  <Html lang="en">
    <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-5CG35LVJ7D" />
      <script dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-5CG35LVJ7D');
      `,
      }}
      />

      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#1e1b4b" />
      <meta name="apple-mobile-web-app-title" content="SamZog" />
      <meta name="application-name" content="SamZog" />
      <meta name="msapplication-TileColor" content="#1e1b4b" />
      <meta name="theme-color" content="#1e1b4b" />

      <meta name="yandex-verification" content="7d180a4548605c30" />

      <meta name="robots" content="index,follow" />

      <link rel="canonical" href="https://samzog.dev/" />

      <meta property="og:title" content="Samy Zogeyb | Software Engineer" />
      <meta property="og:description" content="Software Engineer, Front-End Developer" />
      <meta property="og:url" content="https://samzog.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-logo.png" />
      <meta property="og:image:alt" content="Samy Zogeyb Logo" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Samy Zogeyb's Portfolio" />

    </Head>
    <body>
      <Script src="/checkMode.js" strategy="beforeInteractive" />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
