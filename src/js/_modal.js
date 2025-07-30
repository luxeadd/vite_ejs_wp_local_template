// ----------------------
// モーダル制御
// ----------------------
document.addEventListener('DOMContentLoaded', () => {
  // ボタンのdata-modal-openと一致するモーダルを開く
  const modalTriggers = document.querySelectorAll('[data-modal-open]');
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal-open');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.showModal();
      }
    });
  });
  // モーダル内の閉じるボタンをクリックしたらモーダルを閉じる
  const closeButtons = document.querySelectorAll('[data-modal-close]');
  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const modal = button.closest('dialog');
      if (modal) {
        modal.close();
      }
    });
  });
  // モーダル背景をクリックしたらモーダルを閉じる
  const modalDialog = document.querySelectorAll('.js-modalDialog');
  modalDialog.forEach((dialog) => {
    dialog.addEventListener('click', (event) => {
      if (event.target.closest('.js-modalContainer') === null) {
        dialog.close();
      }
    });
  });
});
