# Lang Tweet

外国語の単語と日本語をセットでツイッター投稿ができる Chrome 拡張機能。

コード上で以下のテンプレを設定しているため、毎回テンプレを用意する必要がありません。

![Screen Shot 2022-01-26 at 8 06 39](https://user-images.githubusercontent.com/50049575/151074746-bdd00cbb-1af8-440a-b466-7caa238ee565.png)

## Browser settings (Without develop)

1. 任意のディレクトリで以下コマンドを実行

```
git clone https://github.com/Yuji5117/lang-tweet-extention.git

```

または、zip 形式でリポジトリをダウンロード（git 不要）

2. Chrome で chrome://extensions/ を検索窓に貼り付けて検索

3. 画面右上の「デベロッパーモード」を ON

4. 画面左上の「パッケージ化されていない拡張機能を読み込む」を押下

5. 手順 ① で取得したリポジトリの、build ディレクトリを指定する

6. 読み込んだ拡張機能を有効にする

7. 画面右上から拡張機能一覧ポップアップを表示し、本拡張機能をピン留めする

![crhome](https://user-images.githubusercontent.com/50049575/151073364-73155c62-5f0d-4cab-8343-e7d45f099966.png)

## How to use

1. 任意の外国語と日本語を入力する

2. 「TWEET」をクリック

![Screen Shot 2022-01-26 at 7 50 06](https://user-images.githubusercontent.com/50049575/151073660-aa167f7f-5686-4856-b78e-4053a31238b8.png)

## Develop Setup

```
$ git clone https://github.com/Yuji5117/lang-tweet-extention.git
$ cd lang-tweet-extention
$ yarn
$ yarn start
```
