import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Sherex</title>
        <link rel="icon" href="/favicon.svg" />
        <meta name="description" content="Description of your site" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
