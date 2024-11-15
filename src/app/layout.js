import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <title>Abstract</title>
        <meta name="description" content="" />
        <meta name="author" content="" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <Script src="/js/modernizr.js"></Script>
        <Script src="/js/pace.min.js"></Script>
      </Head>
      <body className={inter.className}>
        {children}
        <Script src="/js/jquery-2.1.3.min.js"></Script>
        <Script src="/js/plugins.js"></Script>
        <Script src="/js/main.js"></Script>
      </body>
    </html>
  );
}
