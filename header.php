<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/website#">
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="format-detection" content="telephone=no" />

  <!-- ogp -->
  <?php if (is_home() || is_front_page()) : ?>
    <meta property="og:title" content="<?php bloginfo('name'); ?>">
  <?php else : ?>
    <meta property="og:title" content="<?php the_title(); ?>">
  <?php endif; ?>
  <?php if (is_home() || is_front_page() || is_page()) : ?>
    <meta property="og:type" content="website">
  <?php else : ?>
    <meta property="og:type" content="article">
  <?php endif; ?>
  <meta property="og:url" content="<?php echo get_the_permalink(); ?>">
  <?php if (has_post_thumbnail()) : ?>
    <meta property="og:image" content="<?php the_post_thumbnail_url(); ?>">
  <?php else : ?>
    <meta property="og:image" content="<?php echo get_template_directory_uri() ?>/dist/assets/images/ogp/ogp.jpg">
  <?php endif; ?>
  <meta property="og:site_name" content="<?php bloginfo('name'); ?>">
  <meta property="og:locale" content="ja_JP">
  <meta name="twitter:card" content="summary">
  <!-- /ogp -->

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> id="top">
  <?php wp_body_open(); ?>

  <?php $urls = get_my_urls(); ?>
  <header class="l-header p-header js-header" data-fixed-header>
    <div class="p-header__inner">
      <!-- ヘッダーロゴ -->
      <?php if (is_front_page()) : ?>
        <h1 class="p-header__logo">
          <a href="<?php echo $urls['top']; ?>">
            <img class="logo" src="<?php echo my_image_path(); ?>common/logo_black.svg" alt="">
          </a>
        </h1>
      <?php else : ?>
        <div class="p-header__logo">
          <a href="<?php echo $urls['top']; ?>">
            <img class="logo" src="<?php echo my_image_path(); ?>common/logo_black.svg" alt="">
          </a>
        </div>
      <?php endif; ?>
      <!-- ドロワーアイコン  -->
      <div class="p-header__drawerBtn">
        <button type="button" class="c-hamburger js-hamburger" aria-controls="drawer_menu" aria-expanded="false" aria-label="メニューを開閉する">
          <span class="c-hamburger__line"></span>
        </button>
      </div>
      <!-- pcーメニュー -->
      <nav class="p-header__pc-menu p-header-menu ">
        <ul class="p-header-menu__items">
          <li class="p-header-menu__item p-header-menu__item--subMenu">企業情報
            <ul class="p-header-menu__subItems">
              <li class="p-header-menu__subItem"><a href="<?php echo $urls['about']; ?>">私たちについて</a></li>
              <li class="p-header-menu__subItem"><a href="<?php echo $abutUrls['company']; ?>">会社概要</a></li>
              <li class="p-header-menu__subItem"><a href="<?php echo $abutUrls['message']; ?>">代表挨拶</a></li>
              <li class="p-header-menu__subItem"><a href="<?php echo $abutUrls['organization']; ?>">組織体制</a></li>
              <li class="p-header-menu__subItem"><a href="<?php echo $abutUrls['officer']; ?>">役員</a></li>
              <li class="p-header-menu__subItem"><a href="<?php echo $abutUrls['history']; ?>">沿革</a></li>
            </ul>
          </li>
          <li class="p-header-menu__item"><a href="<?php echo $urls['solution']; ?>">事業</a></li>
          <li class="p-header-menu__item"><a href="<?php echo $urls['sustainability']; ?>">サステナビリティ</a></li>
          <li class="p-header-menu__item"><a href="<?php echo $urls['news']; ?>">お知らせ</a></li>
          <li class="p-header-menu__item"><a href="<?php echo $urls['recruit']; ?>" target="_blank">採用情報</a></li>
          <li class="p-header-menu__btn"><a href="<?php echo $urls['contact']; ?>" class="c-btn c-btn--mail">お問い合わせ</a></li>
        </ul>
      </nav>
      <!-- ドロワーメニュー -->
      <nav class="p-header__drawer-menu  p-drawer-menu js-drawer-menu" id="drawer_menu" aria-hidden="true">
        <ul class="p-drawer-menu__items">
          <li class="p-drawer-menu__item  "><a href="<?php echo $urls['about']; ?>">企業情報</a></li>
          <li class="p-drawer-menu__item"><a href="<?php echo $urls['solution']; ?>">事業紹介</a></li>
          <li class="p-drawer-menu__item"><a href="<?php echo $urls['sustainability']; ?>">サステナビリティ</a></li>
          <li class="p-drawer-menu__item"><a href="<?php echo $urls['news']; ?>">お知らせ</a></li>
          <li class="p-drawer-menu__item"><a href="<?php echo $urls['recruit']; ?>" target="_blank">採用情報</a></li>
          <li class="p-drawer-menu__item"><a href="<?php echo $urls['contact']; ?>">お問い合わせ</a></li>
        </ul>
      </nav>
    </div>
  </header>