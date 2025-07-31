<?php
// カスタムタクソノミー設定
add_action('init', function () {
  register_post_type('qa', [
    'label' => 'よくある質問',  //管理画面表示名
    'public' => true,
    'supports' => ['thumbnail', 'title', 'editor', 'excerpt', 'page-attributes'],  //表示する内容
    'has_archive' => false,  //アーカイブページの作成
    'hierarchical' => false,  //階層構造（親子関係）の設定ができる　supportsにpage-attributesが必要
    'show_in_rest' => true, //ブロックエディターに対応
  ]);
  register_taxonomy('qa_category', 'qa', [
    'label' => 'ジャンル',  //管理画面表示名
    'hierarchical' => true,  //階層構造（親子関係）の設定ができる 管理画面でチェックボックス形式で出せる
    'show_in_rest' => true, //ブロックエディターに対応
  ]);
});

// 投稿一覧にタクソノミーを表示
add_filter('manage_qa_posts_columns', function ($columns) {
  $columns['qa_category'] = 'ジャンル';
  return $columns;
});

add_action('manage_qa_posts_custom_column', function ($column, $post_id) {
  if ($column == 'qa_category') {
      $terms = get_the_terms($post_id, 'qa_category');
      if (!empty($terms)) {
          $out = [];
          foreach ($terms as $term) {
              $out[] = $term->name;
          }
          echo join(', ', $out);
      } else {
          echo 'なし';
      }
  }
}, 10, 2);

// 管理画面の投稿一覧を新しい順に並び替え
function modify_qa_admin_order($query) {
  // 管理画面のreportタイプの一覧画面の場合のみ
  if (is_admin() && $query->is_main_query() && $query->get('post_type') === 'qa') {
      $query->set('orderby', 'date');
      $query->set('order', 'DESC');
  }
}
add_action('pre_get_posts', 'modify_qa_admin_order');


//ACFの項目を一覧画面に表示
// function add_posts_columns( $columns ) {
//   $columns['year'] = '西暦';
//   return $columns;
// }
// function custom_posts_column( $column_name, $post_id ) {
//   if ( $column_name == 'year' ) {
//     $year = get_post_meta( $post_id, 'year', true );
//     echo ( $year ) ? $year : '－';
//   }
// }
// add_filter( 'manage_history_posts_columns', 'add_posts_columns' );
// add_action( 'manage_history_posts_custom_column', 'custom_posts_column', 10, 2 );