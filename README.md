## ファイルの特徴
- EJS兼WordPress用vite環境ファイル
- EJSの場合はsrcのejs,scss,jsを編集、distにコンパイルされる
- WordPressの場合はsrcのscss.jsを編集、wpテーマにコンパイルされる。phpはwpテーマを直接編集
- WordPressはdocker及びwp-envを使用する前提で調整しています。docker以外の場合はフォルダ構成を変更する必要があります。
- GitHubActions自動デプロイ対応

## ファイル構成   
∟ dist ・・・本番用（ejs）  
　∟ assets  
　　∟ css  
　　∟ images  
　　∟ js  
　∟ index.html

∟ src ・・・開発用  
　∟ index.html  
　∟ common ・・・EJS共通ファイル  
　∟ parts ・・・EJSパーツファイル  
　∟ images  
　∟ js  
　∟ sass  
　　∟ base ・・・リセット系    
　　∟ utility ・・・共通SCSS  
　　∟ object ・・・FLOCSS対応  
　　∟ styles.scss ・・・インクルード用SCSS  
∟ wp ・・・WordPressテンプレートファイル   
∟ public ・・・viteで加工不要のファイル（画像など）  
∟ buildScript ・・・build時実行用補助ファイル(テーマコピー、画像フォールバック等)
∟ .env ・・・開発用設定ファイル  
∟ vite.config.js ・・・vite設定ファイル  
∟ postcss.config.cjs ・・・postcss設定ファイル  
∟ .wp-env.json ・・・docker・WordPress設定用  
∟ wp-setting.sh ・・・wp初期設定用  
∟ package.json ・・・npmパッケージ管理用  
∟ .github ・・・GitHub Actions用ymlファイル  
∟ copy-theme.js ・・・テーマコピー用ファイル(Local or Studio by WordPress使用時)

## このコーディングファイルの使い方

## 使用環境
- Node.js バージョン14系以上
- npm バージョン8以上
- バージョン確認方法：※ターミナル上でコマンドを入力すること
  - `node -v`
  - `npm -v`

## 使い方および操作方法  
### 前提  
- .envで各種設定を行います
```
# WordPress使用時はtrue
VITE_WORDPRESS=true 

# WordPressローカルポートを指定
VITE_WORDPRESS_PORT=10078 

# WordPress thmeNameを指定 ルートのフォルダ名も合わせること
VITE_WORDPRESS_THEME_NAME=themeName 

# WordPress ローカル環境のパスを設定 (Local or Studio by WordPress使用時)
# VITE_WORDPRESS_THEME_PATH=/Users/kounosatoshi/Local Sites/projectName/app/public/wp-content/themes/ 

# 画像フォールバック用 基本触らない
VITE_FALLBACK_IMAGE=false
```  
- ビルドした際はjpgやpngをwebpに変換する仕様となります。 

### EJSの場合
1. .envで`VITE_WORDPRESS=false`に設定
2. ターミナルを開く
3. `npm i`をターミナルへ入力
4. `npm run dev`で開発ブラウザが起動します
5. `npm run build`でファイルを書き出す  

以下仕様に合わせて使い分けてください
- `npm run build-format`でファイルを書き出しHTMLの整形とcssにパラメーターを付与
- `npm run build-fallback`でファイルを書き出し、再度webpに変換せずに画像を書き出します。フォールバックをつけたい場合はこちらを使用
- `npm run build-fallback-format`で上記全てを実行  

### WordPressの場合（Local or Studio by WordPress使用）
1. .envに`VITE_WORDPRESS=true`に設定、`VITE_WORDPRESS_THEME_PATH`にLocal orのテーマのパスを設定、`VITE_WORDPRESS_THEME_NAME`にテーマ名を設定、`VITE_WORDPRESS_PORT`にLocalのポート番号を設定
2. ターミナルを開く
3. `npm i`をターミナルへ入力
4. `npm run dev-local`で開発ブラウザが起動し、Localのテーマファイルと同期します。
5. `npm run build-local`でファイルを書き出し、テーマファイルをLocalにコピーする  or  `npm run restart-local`でファイルを書き出し、テーマファイルをLocalにコピー、開発ブラウザ再起動

### WordPressの場合（docker、wp-env使用）
1. .wp-env.json：WordPressの設定を確認（WordPressVer. PHPVer. ポートNo. プラグイン）
2. .envに`VITE_WORDPRESS=true`に設定、`VITE_WORDPRESS_THEME_NAME`にテーマ名を設定、`VITE_WORDPRESS_PORT`にLocalのポート番号を設定
3. wp/wp-content/themes/直下のフォルダを`WordPressThemeName`で設定した名前に変更（style.css内記載のテーマ名も変更）  
4. `npm i`をターミナルへ入力しパッケージをダウンロード　
```
npm i
```
5. ターミナルを開きWordPressコンテナを起動 （Dockerがは起動しておくこと） 
```
npm run wp-env start
```

6. WordPress初期設定用wp-setting.shを起動させる
```
chmod +x ./wp-setting.sh
```  
```
./wp-setting.sh
```

7. `npm run dev`で開発ブラウザが起動します
8. WordPressの管理画面（/wp-admin）に入り、テーマを開発中のものに変更（初期ユーザー名`admin`、初期パス`password`）  

上記手順1,2,3,6については初期設定となるので最初にプロジェクトファイルを作成する時のみ行ってください。  
2回目以降や初期設定が終わっているものをgitで共有された場合は4,5,7を実行すれば良い（npm i, npm run wp-env start, npm run dev）

- `npm run build`でscss,js,画像がビルドされます  

以下仕様に合わせて使い分けてください
- `npm run build-fallback`でファイルを書き出し、再度webpに変換せずに画像を書き出します。フォールバックをつけたい場合はこちらを使用  
 

#### 注意点 
- `functions/script.php`の`define('WORDPRESS_DEV', true);`をtrueで開発サーバー、falseで本番環境のcss、jsを読み込むようにしているのでデプロイ時には必ずfalseにしたフォイルをアップしてください。  
- 画像はpublicフォルダ内のものはWordPress側では認識されません。画像ファイルを追加した場合は`npm run build`を実行しWordPress本体に画像をコンパイルしてください。

#### コマンド
- WordPressコンテナを起動  
```
npm run wp-env start
```
- WordPressコンテナを停止  
```
npm run wp-env stop
```
- wp-env.jsonの内容を更新したときの再起動 
```
npm run wp-env start --update
```
- wp-env、dockerのWordPressを削除 
```
npm run wp-env destroy
```

## データベース更新するときの手順
__1人での開発の場合は任意のタイミングで手順3と4を行えばOK__
1. チームメンバーがデータベースを触っていないことを確認
2. データベースを更新
3. データベースをエクスポート
```
npm run wp-env run cli wp db export sql/wpenv.sql
```
4. Gitにあげる
5. チームメンバーに更新したことを伝える
6. チームメンバーはデータベースを更新されたデータベースをインポートする
```
npm run wp-env run cli wp db import sql/wpenv.sql
```

## 画像出力について

- 画像効率化の観点よりテンプレートを組んでいますので、以下の様式を使用してください。 （レスポンシブ、webp 対応）

EJS

```
<%- include(baseMeta.path +'common/_picture', 
  { 
    baseMeta:baseMeta, 
    img:'common/image1', 
    spImg:'true', 
    spImgName:'_sp', 
    file:'.jpg',  
    alt:'ダミー画像', 
    webp:'true',
    pcWidth : '800',
    pcHeight : '800',
    spWidth : '300',
    spHeight : '300',
    async:'true', 
    lazy:'true', 
  }
) %>
```

WordPress

```
<?php
    $args = [
      'pictureImg' => 'common/image',
      'spImg' => 'true',
      'spImgName' => '',
      'alt' => '',
      'file' => '.jpg',
      'webp' => 'true',
      'pcWidth' => '850',
      'pcHeight' => '567',
      'spWidth' => '390',
      'spHeight' => '260',
      'async' => 'true',
      'lazy' => 'true',
    ];
    get_template_part('tmp/picture', null, $args);
?>
```
# vite_ejs_wp_env_template
