<?php 

/**
 * 管理画面設定
 */

//タグ一覧を投稿管理画面に表示
function re_register_post_tag_taxonomy()
{
	$tag_slug_args = get_taxonomy('post_tag');
	$tag_slug_args->hierarchical = true;
	$tag_slug_args->meta_box_cb = 'post_categories_meta_box';
	register_taxonomy('post_tag', 'post', (array) $tag_slug_args);
}
add_action('init', 're_register_post_tag_taxonomy', 1);


// 投稿一覧にアイキャッチ画像を表示
function add_thumbnail_column($columns) {
	$columns['thumbnail'] = 'アイキャッチ画像';
	return $columns;
}
add_filter('manage_posts_columns', 'add_thumbnail_column');

function display_thumbnail_column($column, $post_id) {
	if ($column === 'thumbnail') {
			$thumbnail = get_the_post_thumbnail($post_id, array(50, 50));
			echo $thumbnail ? $thumbnail : 'なし';
	}
}
add_action('manage_posts_custom_column', 'display_thumbnail_column', 10, 2);


//投稿の名前変更
function Change_menulabel()
{
	global $menu;
	global $submenu;
	$name = 'お知らせ';
	$menu[5][0] = $name;
	$submenu['edit.php'][5][0] = $name . '一覧';
	$submenu['edit.php'][10][0] = '新しい' . $name;
}
function Change_objectlabel()
{
	global $wp_post_types;
	$name = 'お知らせ';
	$labels = &$wp_post_types['post']->labels;
	$labels->name = $name;
	$labels->singular_name = $name;
	$labels->add_new = _x('追加', $name);
	$labels->add_new_item = $name . 'の新規追加';
	$labels->edit_item = $name . 'の編集';
	$labels->new_item = '新規' . $name;
	$labels->view_item = $name . 'を表示';
	$labels->search_items = $name . 'を検索';
	$labels->not_found = $name . 'が見つかりませんでした';
	$labels->not_found_in_trash = 'ゴミ箱に' . $name . 'は見つかりませんでした';
}
add_action('init', 'Change_objectlabel');
add_action('admin_menu', 'Change_menulabel');


//管理画面メニュー順番
function my_custom_menu_order($menu_order) {
	if (!$menu_order) return true;
	return array(
			'index.php', //ダッシュボード
			'upload.php', //メディア 
			'edit.php', //投稿
			'separator1', //セパレータ１
			// 'edit.php?post_type=artist-list', //カスタムポスト
			// 'edit.php?post_type=event', //カスタムポスト
			// 'edit.php?post_type=works', //カスタムポスト
			// 'edit.php?post_type=goods', //カスタムポスト
			// 'edit.php?post_type=gallery', //カスタムポスト
			// 'edit.php?post_type=works-test', //カスタムポスト
			// 'separator2', //セパレータ２
			'edit.php?post_type=page', //固定ページ
			'edit-comments.php', //コメント
			'separator-last', //最後のセパレータ
			'themes.php', //外観
			'users.php', //ユーザー
			'tools.php', //ツール
			'options-general.php', //設定
			'plugins.php', //プラグイン
	);
}
add_filter('custom_menu_order', 'my_custom_menu_order'); 
add_filter('menu_order', 'my_custom_menu_order');


// サイドメニューのサブメニューを非表示
// function remove_submenus() {
//   // 投稿
//   remove_submenu_page( 'edit.php', 'edit-tags.php?taxonomy=post_tag' ); 
// }
// add_action( 'admin_menu', 'remove_submenus', 999 );