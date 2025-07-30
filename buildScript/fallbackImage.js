// -----------------------------------
// vite-plugin-webp-and-pathだとjpgやpngがwebpにされて元拡張子が消えてしまうため、
// vite-plugin-webp-and-pathとvite-plugin-imageminを切り替えて元拡張子を残すようにする
//.envのVITE_FALLBACK_IMAGEを切り替える
// -----------------------------------
import fs from 'fs';

const filePath = './.env';
const key = 'VITE_FALLBACK_IMAGE';
const value = process.argv[2] === 'true' ? 'true' : 'false';

const envContent = fs.readFileSync(filePath, 'utf8').split('\n');
const updatedContent = envContent.map(line => {
  if (line.startsWith(key + '=')) {
    return `${key}=${value}`;
  }
  return line;
});

fs.writeFileSync(filePath, updatedContent.join('\n'), 'utf8');
console.log(`Set ${key}=${value} in .env`);
