// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Preload gambar dengan media query untuk desktop */}
          <link
            rel="preload"
            href="/images/kotapadang.jpg"
            as="image"
            type="image/jpeg"
            media="(min-width: 1024px)"
          />
          <link
            rel="preload"
            href="/images/kotapadangdua.jpg"
            as="image"
            type="image/jpeg"
            media="(min-width: 1024px)"
          />
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
