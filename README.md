これは [Next.js](https://nextjs.org/) のプロジェクトのテンプレートで、 [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) で出力されたファイルを編集し、最小限の構成にしたものになります。
また、開発向けの設定を追加し、日本語向けに少しだけチューニングを行なっております。

## 追加設定内容
* Sass 対応
* ESLint 設定を追加。（主にairbnbをベースとしたルール。一部ルール変更あり。）
* 日本語ページで必要なメタデータなどの設定を追加

## インストール方法

このリポジトリはテンプレートとなっているので、新しくリポジトリを作成する際にこのテンプレートを指定してください。

作成したリポジトリを clone し、以下のコマンドを実行してください。
実行には node.js が必要です。また yarn コマンドは node.js をインストール後に npm コマンドでインストールすることで使用することができます。

```bash
npm install
# or
yarn install
```

## 開発用サーバの実行方法

以下のコマンドを叩くことで開発用サーバが動作します。

```bash
npm run dev
# or
yarn dev
```

[http://localhost:3000](http://localhost:3000) にて結果が確認できます。

また、サーバ起動中にファイルを編集すると、自動でページに更新が入り、最新の結果を確認できます。

WebAPI については簡素化のため、このリポジトリには含めていません。

## Next.js について詳しく学ぶなら

以下のページを参考にしてください。（ジェネレータで出力された Readme のコピペ）

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
