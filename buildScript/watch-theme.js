// -----------------------------------
// dev時にテーマファイルの変更を監視し、変更があったらLocalに同期する
// -----------------------------------
import chokidar from 'chokidar';
import { exec } from 'child_process';
import dotenv from 'dotenv';

dotenv.config();

const themePath = process.env.VITE_WORDPRESS_THEME_PATH;
const themeName = process.env.VITE_WORDPRESS_THEME_NAME;

let timer = null;
const DEBOUNCE_TIME = 500; // 0.5秒

const watcher = chokidar.watch(`${themeName}/**/*`, { ignoreInitial: true });

function sync() {
  const cmd = `rsync -av --delete ${themeName}/ "${themePath}/"`;
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`エラー: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
    console.log(stdout);
  });
}

watcher.on('all', (event, filePath) => {
  // 変更・削除イベントが発生したら、少し待ってからrsyncを実行
  if (timer) clearTimeout(timer);
  timer = setTimeout(sync, DEBOUNCE_TIME);
});

console.log('PHPテンプレートの自動同期を開始しました。');