<?php 

/**
 * 各ページリンク設定
 */

// 各ページリンク設置
function get_my_urls()
{
	return array(
		'top' => esc_url(home_url("/")),
		'about' => esc_url(home_url("/about/")),
		'solution' => esc_url(home_url("/solution/")),
		'sustainability' => esc_url(home_url("/sustainability/")),
		'news' => esc_url(home_url("/news/")),
		'contact' => esc_url(home_url("/contact/")),
		'privacy' => esc_url(home_url("/privacy/")),
		'recruit' => "https://ownedmaker.com/santel/top/",
	);
}

// 企業情報ページリンク設置
function get_about_url()
{
	return array(
		// 代表挨拶
		'message' => esc_url(home_url("/about/#message")),
		// ブランドロゴ
		'logo' => esc_url(home_url("/about/#logo")),
		// 役員紹介
		'officer' => esc_url(home_url("/about/#officer")),
		// 会社概要
		'company' => esc_url(home_url("/about/#company")),
		// 企業紹介スライド
		'companyInfo' => esc_url(home_url("/about/#companyInfo")),
		// 組織体制
		'organization' => esc_url(home_url("/about/#organization")),
		// 沿革
		'history' => esc_url(home_url("/about/#history")),
	);
}

// 事業紹介ページ各サイトへのリンク設置
function get_solutionBlank_url()
{
	return array(
		// 建設事業
		'construction' => '',
		// 特殊洗浄事業
		'cleaning' => '',
		// 不動産事業
		'estate' => '',
		// 運送事業
		'transportation' => '',
		// 飲食事業
		'food' => '',
		// ITプラットフォーム運営・地域連携創出事業
		'platform' => '',
	);
}