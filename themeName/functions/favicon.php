<?php

/**
 * ファビコンリクエストを無効化する関数。
 * 
 * この関数は、WordPressがデフォルトで処理する favicon.ico へのリクエストを
 * 明確に無効化し、サーバー負荷を軽減します。
 */
function cancel_default_favicon_request() {
  // 明示的に 404 ステータスコードを送信
  header("HTTP/1.1 404 Not Found");
  exit; // スクリプトの実行を停止
}
// do_faviconico フックに関数を登録
add_action('do_faviconico', 'cancel_default_favicon_request');
