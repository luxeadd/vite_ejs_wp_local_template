import { defineConfig } from 'vite';
import { globSync } from 'glob'; //各ファイルの名前を取得し一括で登録
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import viteSassGlobImports from 'vite-plugin-sass-glob-import'; // SCSSのインポートを自動化する ワイルドカード使用
import { ViteEjsPlugin } from 'vite-plugin-ejs'; // ejs使用
import liveReload from 'vite-plugin-live-reload'; //ライブリロード
import VitePluginWebpAndPath from 'vite-plugin-webp-and-path'; //webp画像変換
import viteImagemin from 'vite-plugin-imagemin'; //画像圧縮
import dotenv from 'dotenv';
dotenv.config();

// .envから設定を取得
const wordpress = process.env.VITE_WORDPRESS === 'true';
const WordPressPort = process.env.VITE_WORDPRESS_PORT;
const WordPressThemeName = process.env.VITE_WORDPRESS_THEME_NAME;
const fallbackImage = process.env.VITE_FALLBACK_IMAGE === 'true';
const WordPressThemePath = process.env.VITE_WORDPRESS_THEME_PATH;

/** 各ファイルの名称、path情報を配列に格納する設定 */
const inputJsArray = globSync('./src/**/*.js', {
  ignore: ['src/js/**/_*.js']
}).map((file) => {
  return [path.relative('src/js', file.slice(0, file.length - path.extname(file).length)), fileURLToPath(new URL(file, import.meta.url))];
});
const inputHtmlArray = globSync(['src/**/*.html'], {
  ignore: ['node_modules/**']
}).map((file) => {
  return [path.relative('src', file.slice(0, file.length - path.extname(file).length)), fileURLToPath(new URL(file, import.meta.url))];
});
const inputScssArray = globSync('./src/**/*.scss', {
  ignore: ['src/sass/**/_*.scss']
}).map((file) => {
  return [path.relative('src/sass', file.slice(0, file.length - path.extname(file).length)), fileURLToPath(new URL(file, import.meta.url))];
});

/** 各ファイル情報の配列をまとめて、Objectに設定 wordpressの場合はhtmlファイルを含めない*/
const inputObj = wordpress
  ? Object.fromEntries(inputJsArray.concat(inputScssArray))
  : Object.fromEntries(inputJsArray.concat(inputHtmlArray, inputScssArray));

/** Viteの設定 */
export default defineConfig({
  base: './', //相対パスに設定
  root: './src', //開発ディレクトリ設定
  publicDir: '../src/images', //publicディレクトリ設定

  build: {
    outDir: wordpress ? `../${WordPressThemeName}` : '../dist', //出力場所の指定
    emptyOutDir: fallbackImage || wordpress ? false : true, // fallbackImageがtrueの場合はディレクトリを削除しない
    sourcemap: false, //jsのソースマップの設定
    minify: false, //圧縮を無効化
    polyfillModulePreload: false, //ModulePreload_polyfillの有無
    rollupOptions: {
      input: inputObj, //Globで該当ファイル名取得してObjectにしたもの
      output: {
        //出力時に名前を動的にせずに取得したファイル名で固定
        entryFileNames: `assets/js/[name].js`, //JSの出力設定
        chunkFileNames: `assets/js/modules/[name].js`, //共通使用のModule　JSのの出力設定
        assetFileNames: (assetInfo) => {
          if (/\.( gif|jpeg|jpg|png|svg|webp| )$/.test(assetInfo.name)) {
            return 'assets/images/[name].[ext]'; //画像アセットの出力設定
          }
          if (/\.css$/.test(assetInfo.name)) {
            return 'assets/css/[name].[ext]'; //CSSアセットの出力設定
          }
          return 'assets/[name].[ext]'; //その他のファイルの出力設定
        }
      }
    }
  },

  css: {
    //ソースマップの指定
    devSourcemap: true
  },

  server: {
    port: 3200, // 他の設定と被らないように3200に固定
    strictPort: true, //ポートがすでに使用されている場合に他のポートを使用しない
    host: true, //IPアドレスで表示
    open: wordpress ? `http://localhost:${WordPressPort}` : '/', //起動時に自動でブラウザで開くページを指定
    watch: {
      usePolling: true, // ファイル変更をポーリングで監視
    },
  },

  plugins: [
    viteSassGlobImports(), // SCSSのインポートを自動化する（ワイルドカード使用可能）
    liveReload(['parts/*.ejs', 'common/*.ejs', `../${WordPressThemeName}/**/*`]), //指定したファイルでもライブリロード可能にする
    ViteEjsPlugin({
      fallbackImage: fallbackImage
    }),
    fallbackImage
      ? //画像圧縮
        viteImagemin({
          gifsicle: {
            optimizationLevel: 7,
            interlaced: false
          },
          optipng: {
            optimizationLevel: 7
          },
          mozjpeg: {
            quality: 20
          },
          pngquant: {
            quality: [0.8, 0.9],
            speed: 4
          },
          svgo: {
            plugins: [
              {
                name: 'removeViewBox'
              },
              {
                name: 'removeEmptyAttrs',
                active: false
              }
            ]
          }
        })
      : //webp画像変換
        VitePluginWebpAndPath({
          targetDir: wordpress ? `./${WordPressThemeName}` : './dist',
          imgExtensions: 'jpg,png',
          textExtensions: 'html,css,ejs,js',
          quality: 80,
          preserveOriginal: true // 元の画像を残す
        }),
  ],
});

