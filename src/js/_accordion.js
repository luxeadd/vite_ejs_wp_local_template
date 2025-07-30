// ----------------------
// アコーディオン aria-expanded
// ----------------------
// ボタン要素にaria-expandedを設定、展開する要素にaria-hiddenを設定
// css；展開する要素に以下を設定
// grid-template-rows: 0fr;
// transition: 250ms grid-template-rows ease, 250ms padding-block ease;
// &[aria-hidden="false"] {
//   grid-template-rows: 1fr;
// }
// > div {
//   overflow: hidden;
// }
if (document.querySelector('.js-accordion__btn')) {
  document.querySelectorAll('.js-accordion__btn').forEach(function (button) {
    button.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
      // var body = this.previousElementSibling;//上の要素を展開
      var body = this.nextElementSibling;//下の要素を展開
      if (body) {
        body.setAttribute('aria-hidden', expanded);
      }
    });
  });
}

// ----------------------
// アコーディオン
// ----------------------
if (document.querySelector('.js_accordion')) {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.js_accordion').forEach(function (el) {
      const summary = el.querySelector('.js_accordion_summary');
      const answer = el.querySelector('.js_accordion_body');
      
      summary.addEventListener('click', (event) => {
        // デフォルトの挙動を無効化
        event.preventDefault();
        // detailsのopen属性を判定
        if (el.getAttribute('open') !== null) {
          // アコーディオンを閉じるときの処理
          closeAccordion(el, answer);
        } else {
          // open属性を付与
          el.setAttribute('open', 'true');
          // アコーディオンを開くときの処理
          const openingAnim = answer.animate(openingAnimation(answer), animTiming);
        }
      });
      // 閉じるボタンが別にある時の処理
      // const close = el.querySelector(".js_accordion__close");
      // if (close) {
      //   close.addEventListener('click', () => {
      //     // アコーディオンを閉じる処理
      //     closeAccordion(el, answer);
      //   });
      // }
    });
  });

  // アコーディオンを閉じる処理を共通化
  function closeAccordion(el, answer) {
    const closingAnim = answer.animate(closingAnimation(answer), animTiming);
    closingAnim.onfinish = () => {
      // アニメーションの完了後にopen属性を取り除く
      el.removeAttribute('open');
    };
  }

  // アニメーションの時間とイージング
  const animTiming = {
    duration: 300,
    easing: 'ease-in-out'
  };

  // アコーディオンを閉じるときのキーフレーム
  const closingAnimation = (answer) => [
    {
      height: answer.offsetHeight + 'px',
      opacity: 1
    },
    {
      height: 0,
      opacity: 0
    }
  ];

  // アコーディオンを開くときのキーフレーム
  const openingAnimation = (answer) => [
    {
      height: 0,
      opacity: 0
    },
    {
      height: answer.offsetHeight + 'px',
      opacity: 1
    }
  ];
}
