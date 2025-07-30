module.exports = () => ({
  plugins: [
    require("autoprefixer")({}), // ベンダープレフィックスを自動的に追加
    require("postcss-sort-media-queries")({
      sort: "mobile-first", // メディアクエリをモバイルファーストの順序でソート
    }),
    /*require('postcss-clip-path-polyfill')(),*/ // クリップパスのポリフィルを追加
    require("postcss-url")({
      url: "inline", // URLをインラインに変換
      maxSize: 150, // インラインにする画像ファイルの容量上限（150KB）
    }),
  ],
});