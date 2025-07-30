// -----------------------------------
// build時にテーマファイルをLocalにコピーする
// -----------------------------------
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const themeName = process.env.VITE_WORDPRESS_THEME_NAME;
const themePath = process.env.VITE_WORDPRESS_THEME_PATH;

const src = path.resolve(__dirname, '../', themeName);
const dest = path.resolve(themePath,  themeName);

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  fs.readdirSync(src).forEach((item) => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

copyDir(src, dest);
console.log(`Copied ${src} to ${dest}`);