import chokidar from 'chokidar';
import { exec } from 'child_process';
import dotenv from 'dotenv';
import { globSync } from 'glob';
import path from 'path';

dotenv.config();

const themeName = process.env.VITE_WORDPRESS_THEME_NAME;
const themePath = process.env.VITE_WORDPRESS_THEME_PATH;

// デバウンス用の変数
let timer = null;
const DEBOUNCE_TIME = 500; // 0.5秒

// パターンを定義
const patterns = [
  '**/*.php',
  'style.css',
  'dist/assets/**/*'
];

// 同期処理
function sync() {
  const baseDir = process.cwd();
  const files = patterns.flatMap(pattern => 
    globSync(pattern, { 
      cwd: baseDir,
      dot: false,
      follow: true 
    })
  );

  // 検出したファイルをrsyncの引数として使用
  const fileArgs = files.join(' ');
  const cmd = `rsync -av --delete ${fileArgs} "${themePath}/${themeName}/"`;

  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`エラー: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
    console.log(stdout);
  });
}

// デバウンス処理を行う同期関数
function debouncedSync(path) {
  if (timer) clearTimeout(timer);
  timer = setTimeout(() => {
    console.log(`File ${path} has triggered sync`);
    sync();
  }, DEBOUNCE_TIME);
}

// 初期同期を実行
sync();
console.log('初期同期を実行しました。');

// 監視設定
const watcher = chokidar.watch(patterns, { 
  ignoreInitial: true,
  persistent: true
});

// ファイル変更時のイベントハンドラー
watcher
  .on('add', path => {
    console.log(`File ${path} has been added`);
    debouncedSync(path);
  })
  .on('change', path => {
    console.log(`File ${path} has been changed`);
    debouncedSync(path);
  })
  .on('unlink', path => {
    console.log(`File ${path} has been removed`);
    debouncedSync(path);
  });

console.log('ファイルの監視を開始しました。');