// ----------------------
// ページトップ表示切り替え
// ----------------------
let jsPageTopBtn = document.querySelector('.js-page-top');
if (jsPageTopBtn) {
  function getScrolled() {
    return window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop;
  }
  window.onscroll = function () {
    getScrolled() > 1000 ? jsPageTopBtn.classList.add('is-active') : jsPageTopBtn.classList.remove('is-active');
  };
}

// ----------------------
// ペッダー表示切り替え
// ----------------------
let jsHeader = document.querySelector('.js-header');
let jsHeaderTarget = document.querySelector('.js-headerTarget');
if (jsHeader) {
  function getScrolled() {
    return window.pageYOffset !== undefined ? window.pageYOffset : document.documentElement.scrollTop;
    jsHeaderTarget.offsetTop;
  }
  window.onscroll = function () {
    getScrolled() > jsHeaderTarget.offsetTop ? jsHeader.classList.add('is-active') : jsHeader.classList.remove('is-active');
  };
}