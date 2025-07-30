<?php

//pagination表示を01、02、03、...とする
function news_paginate_number($format)
{
  $number = intval($format);
  if (intval($number / 10) > 0) {
    return $format;
  }
  return '0' . $format;
}

// ページネーションの記述を以下のようにすること以下のように表示させること
// add_filter('number_format_i18n', 'news_paginate_number');
// the_posts_pagination($args);
// remove_filter('number_format_i18n', 'news_paginate_number');