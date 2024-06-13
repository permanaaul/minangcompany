// src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Preload LCP images */}
        <link rel="preload" href="/images/kotapadang.jpg" as="image" />
        <link rel="preload" href="/images/kotapadangdua.jpg" as="image" />
        {/* Preload CSS */}
        <link rel="preload" href="/css/styles.css" as="style" />
        <link rel="stylesheet" href="/css/styles.css" />
        {/* Add other preloads as needed */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
