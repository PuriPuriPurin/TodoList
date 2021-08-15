import Head from 'next/head';

const CommonHead = (): JSX.Element => (
  <Head>
    <title key='title'>Default Title</title>
    {/* レスポンシブ対応（できてるの？） */}
    <meta name='viewport' content='width=device-width,initial-scale=1.0' />
    {/* 拡大をできなくする場合 */}
    {/* <meta name='viewport' content='width=device-width,initial-scale=1.0,user-scalable=no' /> */}

    {/* 文字コード指定（日本語サイトで必須） */}
    <meta charSet='utf-8' />
    {/* favicon の設定 */}
    {/* <link rel='icon' href='/favicon.ico' /> */}
    {/* 検索結果に表示される説明文 */}
    {/* <meta name='description' key='description' content='説明。' /> */}
  </Head>
);

export default CommonHead;
