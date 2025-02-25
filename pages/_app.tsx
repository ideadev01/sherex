import { IntlProvider } from "next-intl";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const { locale = 'en' } = useRouter();

  useEffect(() => {
    document.documentElement.lang = locale || 'en';
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  return (
    <>
      <Head>
        <title>Sherex</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="Description of your site" />
      </Head>
      <IntlProvider locale={locale} messages={pageProps.messages}>
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
}
