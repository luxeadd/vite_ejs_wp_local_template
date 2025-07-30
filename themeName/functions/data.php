<?php

/**
 * 構造化データ
 */

// JSON-LD（構造化データ）
function add_json_ld_schema()
{
    if (is_single()) {
        global $post;

        // アイキャッチ画像の取得
        $thumbnail_id = get_post_thumbnail_id();
        $thumbnail_info = wp_get_attachment_image_src($thumbnail_id, 'full');

        // 抜粋の取得（空なら本文の30単語を取得）
        $description = get_the_excerpt() ?: wp_trim_words(get_the_content(), 30, '...');

        $json_ld = [
            "@context" => "https://schema.org",
            "@type" => "Article",
            "headline" => get_the_title(),
            "author" => [
                "@type" => "Person",
                "name" => get_the_author()
            ],
            "publisher" => [
                "@type" => "Organization",
                "name" => get_bloginfo('name'),
                "logo" => [
                    "@type" => "ImageObject",
                    "url" => get_theme_mod('custom_logo') ? wp_get_attachment_image_url(get_theme_mod('custom_logo'), 'full') : (get_site_icon_url() ?: get_template_directory_uri() . '/assets/img/logo.png')
                ]
            ],
            "datePublished" => get_the_date('c'),
            "dateModified" => get_the_modified_date('c'),
            "mainEntityOfPage" => [
                "@type" => "WebPage",
                "@id" => get_permalink()
            ],
            "description" => $description
        ];

        // アイキャッチ画像が設定されている場合のみ追加
        if ($thumbnail_info) {
            $json_ld["image"] = [
                "@type" => "ImageObject",
                "url" => $thumbnail_info[0],
                "width" => $thumbnail_info[1],
                "height" => $thumbnail_info[2]
            ];
        }

        echo '<script type="application/ld+json">' . json_encode($json_ld, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT) . '</script>';
    }
}
add_action('wp_head', 'add_json_ld_schema');
