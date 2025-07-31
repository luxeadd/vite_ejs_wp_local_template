<picture>
  <?php if ($args['spImg'] !== '') : ?>
    <?php if ($args['webp'] === 'true') : ?>
      <source srcset="<?php echo my_image_path() . $args['pictureImg'] . $args['spImgName'] ?>.webp" <?php if ($args['spWidth'] !== '') : ?>width="<?php echo $args['spWidth'] ?>" <?php endif; ?> <?php if ($args['spHeight'] !== '') : ?>height="<?php echo $args['spHeight'] ?>" <?php endif; ?> media="(max-width:767px)" type="image/webp">
    <?php endif; ?>
    <source srcset="<?php echo my_image_path() . $args['pictureImg'] . $args['spImgName'] . $args['file'] ?>" <?php if ($args['spWidth'] !== '') : ?>width="<?php echo $args['spWidth'] ?>" <?php endif; ?> <?php if ($args['spHeight'] !== '') : ?>height="<?php echo $args['spHeight'] ?>" <?php endif; ?> media="(max-width:767px)">
  <?php endif; ?>
  <?php if ($args['webp'] === 'true') : ?>
    <source srcset="<?php echo my_image_path() . $args['pictureImg'] ?>.webp" <?php if ($args['pcWidth'] !== '') : ?>width="<?php echo $args['pcWidth'] ?>" <?php endif; ?> <?php if ($args['pcHeight'] !== '') : ?>height="<?php echo $args['pcHeight'] ?>" <?php endif; ?> type="image/webp">
  <?php endif; ?>
  <img src="<?php echo my_image_path() . $args['pictureImg'] . $args['file'] ?>" alt="<?php echo $args['alt'] ?>" <?php if ($args['pcWidth'] !== '') : ?>width="<?php echo $args['pcWidth'] ?>" <?php endif; ?> <?php if ($args['pcHeight'] !== '') : ?>height="<?php echo $args['pcHeight'] ?>" <?php endif; ?> <?php if ($args['async'] === 'true') : ?>decoding="async" <?php endif; ?> <?php if ($args['lazy'] === 'true') : ?>loading="lazy" <?php endif; ?>>
</picture>