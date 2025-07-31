// ----------------------
// スムーススクロール
// ----------------------
// ※固定ヘッダーの場合はheaderタグにdata-fixed-header付与すること
// ※スムーススクロールが不要なアンカーリンクにはdata-smooth-scroll="disabled"を付与すること
function initializeSmoothScroll() {
  var anchorLinks = document.querySelectorAll('a[href*="#"]');

  if (anchorLinks.length === 0) return;
  anchorLinks.forEach(function (anchorLink) {
    anchorLink.addEventListener('click', handleClick, false);
  });
}

// ヘッダーが固定配置されているかどうかを判定
function isHeaderFixed(header) {
  var position = window.getComputedStyle(header).position;
  var isFixed = position === 'fixed' || position === 'sticky';
  return isFixed;
}

// 固定配置のヘッダーのブロックサイズを取得
function getHeaderBlockSize() {
  var header = document.querySelector('[data-fixed-header]');
  var headerBlockSize = header && isHeaderFixed(header) ? window.getComputedStyle(header).blockSize : '0';
  return headerBlockSize;
}

console.log('ヘッダーの高さ' + getHeaderBlockSize());

function scrollToTarget(element) {
  var headerBlockSize = getHeaderBlockSize();
  // 固定配置のヘッダーのブロックサイズを`scrollMarginBlockStart`に設定
  element.style.scrollMarginBlockStart = headerBlockSize;
  // ユーザーが視差効果を減らす設定をしているかどうかを判定
  var isPrefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // 視差効果を減らす設定がされている場合は 'instant'、そうでない場合は 'smooth' にスクロール動作を設定
  var scrollBehavior = isPrefersReduced ? 'instant' : 'smooth';
  // 縦書きの場合は左スクロール、横書きの場合は上スクロールを実行
  element.scrollIntoView({ behavior: scrollBehavior, inline: 'end' });
}

function focusTarget(element) {
  // ターゲット要素にフォーカスを設定
  element.focus({ preventScroll: true });
  // アクティブな要素がターゲット要素でない場合
  if (document.activeElement !== element) {
    // ターゲット要素のtabindexを一時的に-1に設定
    element.setAttribute('tabindex', '-1');
    // 再度フォーカスを設定
    element.focus({ preventScroll: true });
  }
}

function handleClick(event) {
  // クリックされたボタンが左ボタンでない場合は処理を中断
  if (event.button !== 0) return;
  // クリックされたリンク要素を取得
  var currentLink = event.currentTarget;
  var hash = currentLink.hash;
  // スムーススクロールを無効にする条件をチェックし、スムーススクロールを無効にする場合は処理を中断
  // 中断する条件↓
  // クリックされたマウスのボタンが左ボタン(event.button === 0)でない場合
  // クリックされたa要素またはhash(リンクのハッシュ部分)が存在しない場合
  // クリックされたa要素のrole属性がtabである場合
  // クリックされたa要素のrole属性がbuttonである場合
  // クリックされたa要素にdata-smooth-scroll="disabled"が指定されている場合
  if (!currentLink || !hash || currentLink.getAttribute('role') === 'tab' || currentLink.getAttribute('role') === 'button' || currentLink.getAttribute('data-smooth-scroll') === 'disabled') return;

  var target = document.getElementById(decodeURIComponent(hash.slice(1))) || (hash === '#top' && document.body);

  if (target) {
    event.preventDefault();
    scrollToTarget(target);
    focusTarget(target);
    if (!(hash === '#top')) {
      history.pushState({}, '', hash);
    }
  }
}

function initializePopoverMenu(popoverElement) {
  var anchorLinks = popoverElement.querySelectorAll('a');

  if (anchorLinks.length > 0) {
    anchorLinks.forEach(function (link) {
      link.addEventListener(
        'click',
        function (event) {
          handleHashlinkClick(event, popoverElement);
        },
        false
      );
      link.addEventListener(
        'blur',
        function (event) {
          handleFocusableElementsBlur(event, popoverElement);
        },
        false
      );
    });
  }
}

function handleHashlinkClick(event, popover) {
  popover.hidePopover();
}

function handleFocusableElementsBlur(event, popover) {
  var target = event.relatedTarget;

  if (!popover.contains(target)) {
    popover.hidePopover();
  }
}

var drawer = document.getElementById('drawer');

document.addEventListener('DOMContentLoaded', function () {
  initializeSmoothScroll();

  if (drawer) {
    initializePopoverMenu(drawer);
  }
});
