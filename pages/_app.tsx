import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []); // Empty dependency array to ensure it runs once on mount
  return (
    <>
      <Head>
        <title>Sherex</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="Description of your site" />
      </Head>
      <Component {...pageProps} />
    </>)
}
