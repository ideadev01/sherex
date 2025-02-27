import { appWithTranslation } from 'next-i18next';
import { useRouter } from "next/router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  const { locale = 'en' } = useRouter();

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="$SHRX is the Mother of All Memecoins" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta property="og:title" content="Sherex.io - The Mother Coin" />
        <meta property="og:description" content="Join the $SHRX revolution, the Mother of All Memecoins!" />
        <meta property="og:image" content="/images/icon.png" />
        <meta property="og:url" content="https://sherex.io" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Sherex.io - The Mother Coin" />
        <meta name="twitter:description" content="Join the $SHRX revolution, the Mother of All Memecoins!" />
        <meta name="twitter:image" content="/images/icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link rel="apple-touch-icon" href="/images/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Sherex - The mother of all meme coins</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
