import document, { Head, Main, Html, NextScript } from 'next/document';
class MyDocument extends document {
  render() {
    return (
      <Html lang='zh'>
        <Head />
        <body>
          {/* <div>document header</div> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;