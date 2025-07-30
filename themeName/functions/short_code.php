<?php

/**
 * ショートコード
 */

function theme_path_shortcode()
{
  return get_template_directory_uri();
}
add_shortcode('theme_path', 'theme_path_shortcode');
// [theme_path]

function home_url_shortcode() {
	return home_url();
}
add_shortcode('home_url', 'home_url_shortcode');
// [home_url]

function top_link_shortcode()
{
  return esc_url(home_url("/"));
}
add_shortcode('top_link', 'top_link_shortcode');
// [top_link]

function message_link_shortcode()
{
  return esc_url(home_url("/message/"));
}
add_shortcode('message_link', 'message_link_shortcode');
// [message_link]

function report_archive_link_shortcode()
{
  return esc_url(get_post_type_archive_link('report'));
}
add_shortcode('report_link', 'report_archive_link_shortcode');
// [report_link]

// <source>タグでsrcsetにショートコードを使用できるようにする
function my_wp_kses_allowed_html( $tags, $context ) {
	$tags['source']['srcset'] = true;
	return $tags;
}
add_filter('wp_kses_allowed_html', 'my_wp_kses_allowed_html', 10, 2);