import Document, {
  DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript,
} from 'next/document';

class CustomizedDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang='ja'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomizedDocument;
