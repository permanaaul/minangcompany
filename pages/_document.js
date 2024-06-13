// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Tag <meta>, <title>, CSS eksternal, dan lainnya */}
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Deskripsi aplikasi Next.js Anda" />
          <link rel="stylesheet" href="/styles/global.css" />
          {/* Contoh penambahan font eksternal */}
          <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          {/* Tag <title> */}
          <title>My Next.js App</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
