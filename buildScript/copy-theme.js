// -----------------------------------
// build時にテーマファイルをLocalにコピーする
// -----------------------------------
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { globSync } from 'glob';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const themeName = process.env.VITE_WORDPRESS_THEME_NAME;
const themePath = process.env.VITE_WORDPRESS_THEME_PATH;

// watch-theme.jsと同じパターンを使用
const patterns = [
  '**/*.php',
  'style.css',
  'dist/assets/**/*'
];

// コピー関数
function copyFile(src, dest) {
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const stat = fs.statSync(src);
  if (stat.isFile()) {
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${path.relative(process.cwd(), src)}`);
  }
}

// メイン処理
const baseDir = path.resolve(__dirname, '../');
const destDir = path.resolve(themePath, themeName);

patterns.forEach(pattern => {
  const files = globSync(pattern, { 
    cwd: baseDir,
    dot: false, // 隠しファイルを除外
    follow: true // シンボリックリンクをフォロー
  });
  
  files.forEach(file => {
    const srcPath = path.join(baseDir, file);
    const destPath = path.join(destDir, file);
    copyFile(srcPath, destPath);
  });
});

console.log(`\nAll files copied to ${destDir}`);