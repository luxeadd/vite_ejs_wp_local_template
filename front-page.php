<?php get_header(); ?>
<main>
  <div class="siteWrapper">

    <?php
    $args = [
      'pictureImg' => 'common/image1',
      'spImg' => 'true',
      'spImgName' => '',
      'alt' => '',
      'file' => '.jpg',
      'webp' => 'true',
      'pcWidth' => '420',
      'pcHeight' => '420',
      'spWidth' => '150',
      'spHeight' => '150',
      'async' => 'true',
      'lazy' => 'true',
    ];
    get_template_part('parts/picture', null, $args);
    ?>
    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
    <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
    <p>テス</p>


  </div>
</main>
<?php get_footer(); ?>