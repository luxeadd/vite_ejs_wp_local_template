// -----------------------------------
//cssにキャッシュ対策のパラメーター付与 
//※直接htmlで記述するとvite-plugin-sass-glob-importが動作しないため、本ファイルで記述
// -----------------------------------

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirnameと__filenameをESモジュールで使用するための設定
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 日付と時刻を取得
const now = new Date();
const year = now.getFullYear();
const month = ('0' + (now.getMonth() + 1)).slice(-2);
const day = ('0' + now.getDate()).slice(-2);
const hours = ('0' + now.getHours()).slice(-2);
const minutes = ('0' + now.getMinutes()).slice(-2);
const seconds = ('0' + now.getSeconds()).slice(-2);
const dateTimeStr = `${year}${month}${day}${hours}${minutes}${seconds}`;

// HTMLファイルを再帰的に探索して処理する関数
function processHtmlFiles(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error('ディレクトリの読み込みに失敗しました:', err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('ファイルの情報取得に失敗しました:', err);
          return;
        }

        if (stats.isDirectory()) {
          // ディレクトリの場合は再帰的に処理
          processHtmlFiles(filePath);
        } else if (stats.isFile() && path.extname(file) === '.html') {
          // HTMLファイルの場合はリンクタグを置換
          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error('ファイルの読み込みに失敗しました:', err);
              return;
            }

            // リンクタグを置換
            const result = data.replace(
              /css\/style.css/,
              `css/style.css?${dateTimeStr}`
            );

            // HTMLファイルを書き換える
            fs.writeFile(filePath, result, 'utf8', (err) => {
              if (err) {
                console.error('cssパラメーターの書き込みに失敗しました:', err);
                return;
              }
              console.log(`cssパラメーターが正常に更新されました: ${filePath}`);
            });
          });
        }
      });
    });
  });
}

// distディレクトリから処理を開始
processHtmlFiles(path.join(__dirname, '../dist'));