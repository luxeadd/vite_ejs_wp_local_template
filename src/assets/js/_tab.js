// ----------------------
// タブ制御
// ----------------------
document.addEventListener('DOMContentLoaded', function () {
  // 最初のタブターゲットにis-activeを付与しておく
  const firstTarget = document.querySelector('.js-tab-panel');
  if (firstTarget) {
    firstTarget.classList.add('is_active');
  }
});
// タブをすべて取得
const tabs = document.querySelectorAll('.js-tab');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // すべてのタブターゲットを取得
    const targets = document.querySelectorAll('.js-tab-panel');

    // すべてのタブからis-activeクラスを外す
    tabs.forEach((t) => t.classList.remove('is_active'));

    // クリックされたタブにis-activeクラスを付与
    tab.classList.add('is_active');

    // すべてのタブターゲットからis-activeクラスを外す
    targets.forEach((target) => {
      target.classList.remove('is_active');
    });

    // クリックされたタブの順番と同じタブターゲットにis-activeクラスを付与
    targets[index].classList.add('is_active');
  });
});
