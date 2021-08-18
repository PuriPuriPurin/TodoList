import Head from 'next/head';

const CommonHead = (): JSX.Element => {
  const title = 'Todo List';
  const url = 'https://puripuripurin.github.io/TodoList';
  return (
    <Head>
      <title key='title'>{title}</title>
      {/* レスポンシブ対応（できてるの？） */}
      <meta name='viewport' content='width=device-width,initial-scale=1.0' />
      {/* 拡大をできなくする場合 */}
      {/* <meta
        name='viewport'
        content='width=device-width,initial-scale=1.0,user-scalable=no'
      /> */}

      {/* 文字コード指定（日本語サイトで必須） */}
      <meta charSet='utf-8' />
      {/* favicon の設定 */}
      <link rel='icon' href='/TodoList/favicon.ico' />
      {/* 検索結果に表示される説明文 */}
      {/* <meta name='description' key='description' content='説明。' /> */}

      <meta name='description' content='プログラム初学者がよく作りがちなよくあるTodoリストです。' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:site_name' content={title} />
      <meta property='og:description' content='プログラム初学者がよく作りがちなよくあるTodoリストです。' />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={`${url}/ogp.png`} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
    </Head>
  );
};

export default CommonHead;
