<?php get_header(); ?>
<main>
  <?php $urls = get_my_urls(); ?>
  <div class="l-page l-page--sub">
    <div class="p-subContact">
      <div class="l-inner">
        <div class="p-subContact__head">
          <div class="c-secTitle">
            <h2 class="c-secTitle__main">404</h2>
          </div>
        </div>
        <div class="p-subContact__body">
          <div class="p-subContact__headingText">
            <p class="c-text">ページが見つかりません。</p>
            <p class="c-text">お探しのページは移行または削除された可能性があります。</p>
          </div>
        </div>
        <div class="p-subContact__body">
          <div class="p-subContact__toTop">
          <?php $urls = get_my_urls(); ?>
            <a href="<?php echo $urls['top']; ?>" class="c-btn c-btn--angle c-btn--lg">トップページへ戻る</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
<?php get_footer(); ?>