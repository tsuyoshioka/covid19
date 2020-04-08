# 千歳市 新型コロナウイルスまとめサイト

[![千歳市 新型コロナウイルスまとめサイト](https://user-images.githubusercontent.com/41953811/78782196-f77ead00-79e4-11ea-8d6b-d93fd00c202f.png)](https://stopcovid19-chitose.netlify.com/)

## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。


## 開発者向け情報

### 環境構築の手順

- 必要となるNode.jsのバージョン: 10.19.0以上

**yarn を使う場合**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```


**アクセシビリティチェック（vue-axe）を無効にする方法**

- 開発用ローカルサーバが重い場合、以下のようにアクセシビリティチェックを無効にして起動することができます。

```bash
# serve with hot reload at localhost:3000
$ yarn dev-no-axe
```


**docker compose を使う場合**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

**Vagrant を使う場合**
```bash
# serve with hot reload at localhost:3000
$ vagrant up
```

### `Cannot find module ****` と怒られた時

**yarn を使う場合**
```bash
$ yarn install
```

**docker compose を使う場合**
```bash
$ docker-compose run --rm app yarn install
```


### 本番環境/その他の判定

`process.env.GENERATE_ENV` の値が、本番の場合は`'production'`に、それ以外の場合は `'development'` になっています。  
テスト環境のみで実行したい処理がある場合はこちらの値をご利用ください。

### ステージング・本番環境への反映

`development` ブランチがアップデートされると、自動的に `dev-pages` ブランチにHTML類がbuildされます。そして、開発用サイト https://stopcovid19-chitose.netlify.com/ が更新されます。


