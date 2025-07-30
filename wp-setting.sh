# 日本語化
npm run wp-env run cli wp language core install ja --activate
npm run wp-env run cli wp option update WPLANG ja

# タイムゾーンと日時表記
npm run wp-env run cli wp option update timezone_string 'Asia/Tokyo'
npm run wp-env run cli wp option update date_format 'Y-m-d'
npm run wp-env run cli wp option update time_format 'H:i'

# キャッチフレーズの設定 (空にする)
npm run wp-env run cli wp option update blogdescription ''

# 不要な初期プラグインを削除
npm run wp-env run cli wp plugin delete hello.php
npm run wp-env run cli wp plugin delete akismet

# パーマリンク設定
npm run wp-env run cli wp option update permalink_structure /%post_id%/

# 初期投稿・固定ページの削除
npm run wp-env run cli wp post delete 1 2 3  --force

# 初期テーマの削除
npm run wp-env run cli wp theme delete twentyeleven
npm run wp-env run cli wp theme delete twentyfifteen
npm run wp-env run cli wp theme delete twentyfourteen
npm run wp-env run cli wp theme delete twentynineteen
npm run wp-env run cli wp theme delete twentyseventeen
npm run wp-env run cli wp theme delete twentysixteen
npm run wp-env run cli wp theme delete twentyten
npm run wp-env run cli wp theme delete twentythirteen
npm run wp-env run cli wp theme delete twentytwelve
npm run wp-env run cli wp theme delete twentytwenty
npm run wp-env run cli wp theme delete twentytwentyfour
npm run wp-env run cli wp theme delete twentytwentyone
npm run wp-env run cli wp theme delete twentytwentythree
npm run wp-env run cli wp theme delete twentytwentytwo

# 翻訳の更新
npm run wp-env run cli wp core language update
