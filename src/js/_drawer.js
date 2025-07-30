// ----------------------
//ハンバーガーメニュー
// ----------------------
const header = document.querySelector('.js-header');
const hamburger = document.querySelector('.js-hamburger');
const spHeaderMenu = document.querySelector('.js-drawer-menu');
const drawerMenuItems = document.querySelectorAll('.js-drawer-menu__item');

function toggleDrawer(isOpen) {
  const expanded = isOpen ? 'false' : 'true';
  const hidden = isOpen ? 'true' : 'false';
  hamburger.setAttribute('aria-expanded', expanded);
  spHeaderMenu.setAttribute('aria-hidden', hidden);
  header.classList.toggle('is_active', !isOpen);
}

hamburger.addEventListener('click', function () {
  const isOpen = this.getAttribute('aria-expanded') === 'true';
  toggleDrawer(isOpen);
});

drawerMenuItems.forEach((item) => {
  item.addEventListener('click', () => toggleDrawer(true));
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    toggleDrawer(true);
  }
});
