// ----------------------
// スライダー修正治療の流れ
// ----------------------
document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.js-flow-swiper')) {
    const swiper1 = new Swiper('.js-flow-swiper', {
      width: 300,
      spaceBetween: 40, // スライド間の余白（px）
      speed: 300, // スライドアニメーションのスピード（ミリ秒）
      watchSlidesProgress: true, // スライドの進行状況を監視する
      grabCursor: true, // PCでマウスカーソルを「掴む」マークにする
      mousewheel: {
        //横スクロール有効
        forceToAxis: true,
        sensitivity: 3
      },
      breakpoints: {
        // ブレークポイント
        768: {
          // 画面幅768px以上で適用
          width: 406,
          spaceBetween: 70 // スライド間の余白（px）
        }
      }
    });
  }
});

// ----------------------
// スライダー ドラッグでスクロール
// ----------------------
document.addEventListener('DOMContentLoaded', function () {
  const cardsList = document.querySelectorAll('.js-cards');
  cardsList.forEach((cards) => {
    let isDown = false;
    let startX;
    let scrollLeft;

    cards.addEventListener('mousedown', (e) => {
      isDown = true;
      cards.classList.add('active');
      startX = e.pageX - cards.offsetLeft;
      scrollLeft = cards.scrollLeft;
    });

    cards.addEventListener('mouseleave', () => {
      isDown = false;
      cards.classList.remove('active');
    });

    cards.addEventListener('mouseup', () => {
      isDown = false;
      cards.classList.remove('active');
    });

    cards.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - cards.offsetLeft;
      const walk = (x - startX) * 3; // スクロールの速度を調整
      cards.scrollLeft = scrollLeft - walk;
    });
  });
});
