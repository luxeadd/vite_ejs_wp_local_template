<?php get_header(); ?>
<main>
  <?php $urls = get_my_urls(); ?>
  <div class="l-page l-page--sub">
    <div class="p-subContact">
      <div class="l-inner">
        <div class="p-subContact__head">
          <div class="c-secTitle">
            <h2 class="c-secTitle__main">お問い合わせ</h2>
            <p class="c-secTitle__sub">contact</p>
          </div>
        </div>
        <div class="p-subContact__body">
          <div class="p-subContact__headingText">
            <p class="c-text">送信が完了しました</p>
            <p class="c-text">お問い合わせありがとうございます。内容を確認の上、近日中にご連絡いたします。</p>
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