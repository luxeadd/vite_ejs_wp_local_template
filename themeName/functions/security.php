<?php

/**
 * セキュリティ設定
 */

//urlに?author=1を付与して検索された時に管理者IDがわからないようにする
function disable_author_archive()
{
	if (preg_match('#/author/.+#', $_SERVER['REQUEST_URI'])) {
		wp_redirect(esc_url(home_url('/404.php')));
		exit;
	}
}
add_action('init', 'disable_author_archive');