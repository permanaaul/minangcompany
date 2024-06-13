// src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Preload LCP image */}
        <link
          rel="preload"
          href="/images/kotapadang.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="/images/kotapadangdua.jpg"
          as="image"
        />
        {/* Add other preloads as needed */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
