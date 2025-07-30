<?php

/**
 * 初期設定
 */

/**
 * WordPress標準機能
 *
 * @codex https://wpdocs.osdn.jp/%E9%96%A2%E6%95%B0%E3%83%AA%E3%83%95%E3%82%A1%E3%83%AC%E3%83%B3%E3%82%B9/add_theme_support
 */
function my_setup()
{
	add_theme_support('post-thumbnails'); // アイキャッチ画像を有効化
	add_theme_support('automatic-feed-links'); // 投稿とコメントのRSSフィードのリンクを有効化
	add_theme_support('title-tag'); // titleタグ自動生成
	add_theme_support('html5', array( // HTML5による出力
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	));
}
add_action('after_setup_theme', 'my_setup');
