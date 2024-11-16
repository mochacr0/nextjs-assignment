import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </Head>
      <body className={inter.className}>
        <Header />

        {children}

        <Footer />

        <Preloader />
        <Script src="/js/modernizr.js" strategy="beforeInteractive"></Script>
        <Script src="/js/pace.min.js" strategy="beforeInteractive"></Script>
        <Script src="/js/jquery-2.1.3.min.js"></Script>
        <Script src="/js/plugins.js"></Script>
        <Script
          src="https://maps.googleapis.com/maps/api/js?v=3.13&sensor=false"
          async
        />
        <Script src="/js/main.js"></Script>
      </body>
    </html>
  );
}
