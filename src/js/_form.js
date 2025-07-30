// -----------------------
// お問い合わせフォーム確認画面(ContactForm7用)
// -----------------------

// input[text],input[textAre]入力項目と確認用項目のペアを作成
// クラス名はinputタグに付与する
let fields = [
  // タイトル入力欄・確認欄
  {
    input: document.querySelector(".js_inputTitle"),
    confirm: document.querySelector(".js_confirmTitle"),
  },
  // 名前入力欄・確認欄
  {
    input: document.querySelector(".js_inputName"),
    confirm: document.querySelector(".js_confirmName"),
  },
  // ふりがな入力欄・確認欄
  {
    input: document.querySelector(".js_inputRuby"),
    confirm: document.querySelector(".js_confirmRuby"),
  },
  // メール入力欄・確認欄
  {
    input: document.querySelector(".js_inputEmail"),
    confirm: document.querySelector(".js_confirmMail"),
  },
  // メール確認入力欄・確認欄
  {
    input: document.querySelector(".js_inputEmailConfirm"),
    confirm: document.querySelector(".js_confirmMailConfirm"),
  },
  // 会社入力欄・確認欄
  {
    input: document.querySelector(".js_inputCompany"),
    confirm: document.querySelector(".js_confirmCompany"),
  },
  // 部門入力欄・確認欄
  {
    input: document.querySelector(".js_inputDepartment"),
    confirm: document.querySelector(".js_confirmDepartment"),
  },
  // TEL入力欄・確認欄
  {
    input: document.querySelector(".js_inputTel"),
    confirm: document.querySelector(".js_confirmTel"),
  },
  // 郵便番号入力欄・確認欄
  {
    input: document.querySelector(".js_inputZip"),
    confirm: document.querySelector(".js_confirmZip"),
  },
  // 住所入力欄・確認欄
  {
    input: document.querySelector(".js_inputAddress"),
    confirm: document.querySelector(".js_confirmAddress"),
  },
   // お問い合わせ入力欄・確認欄
  {
    input: document.querySelector(".js_inputTextArea"),
    confirm: document.querySelector(".js_confirmTextArea"),
  },
];

// その他入力項目の各要素の取得
// 確認画面時に指定位置まで移動
let confirmTop = document.querySelector(".js_confirmTop");
//入力項目 確認時は非表示する箇所
let inputArea = document.querySelectorAll(".js_inputArea");
// ラジオボタン入力項目の各要素の取得（radioの親要素に付与）
let radioButtons = document.querySelectorAll(
  '.js_inputRadio input[type="radio"]'
);
// チェックボックス入力項目の各要素の取得（checkboxの親要素に付与）
let checkboxes = document.querySelectorAll(
  '.js_inputCheck input[type="checkbox"]'
);
// セレクトの各要素の取得
let inputSelect = document.querySelector(".js_inputSelect");
// 確認ボタンの取得
let btnConfirm = document.querySelector(".js_btnConfirm");
// 必須入力項目の取得（送信ボタン活性化に必要）
// let requiredInputs = document.querySelectorAll(".js_inputRequired");
// プライバシーポリシー同意チェックの取得
let inputAgree = document.querySelector(
  '.formAgree__item'
);

// その他確認表示用の各要素の取得
// js_confirmAreaはCSSでdisplay:noneをつけておく
let confirmArea = document.querySelectorAll(".js_confirmArea");
let confirmRadio = document.querySelector(".js_confirmRadio");
let confirmCheck = document.querySelector(".js_confirmCheck");
let confirmSelect = document.querySelector(".js_confirmSelect");
let confirmAgree = document.querySelector(".js_confirmAgree");
let btnRemove = document.querySelector(".js_confirmRemove");

// input[text],input[textAre]入力項目と確認用要素の値を同期して表示
if (fields && fields.length > 0) {
  fields.forEach(function (field) {
    if (field.input && field.confirm) {
      field.input.addEventListener("input", function () {
        if (field.input.type === "textarea") {
          field.confirm.innerHTML = field.input.value.replace(/\n/g, "<br>");
        } else {
          field.confirm.textContent = field.input.value;
        }
      });
    }
  });
}

// ラジオボタン選択した要素を確認用項目に表示
if (radioButtons.length > 0) {
  function updateConfirmRadio() {
    const selectedRadio = [...radioButtons].find((radio) => radio.checked);
    confirmRadio.textContent = selectedRadio ? selectedRadio.value : "";
  }

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", updateConfirmRadio);
  });

  updateConfirmRadio();
}

// チェックボックス選択した要素を確認用項目に表示
if (checkboxes.length > 0) {
  function updateConfirmCheck() {
    let selectedValues = Array.from(checkboxes)
      .filter(function (checkbox) {
        return checkbox.checked;
      })
      .map(function (checkbox) {
        return checkbox.nextElementSibling.textContent;
      });

    confirmCheck.textContent = selectedValues.join(", ");
  }

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", updateConfirmCheck);
  });

  updateConfirmCheck();
}

// セレクトボックス選択した要素を確認用項目に表示
if (inputSelect) {
  inputSelect.addEventListener("change", function () {
    let selectedOption = inputSelect.options[inputSelect.selectedIndex];
    confirmSelect.textContent = selectedOption.text;
  });
}


// プライバシーポリシー同意チェックの変更を監視して確認項目にテキストを挿入
if (inputAgree) {
  btnConfirm.disabled = true;
  inputAgree.addEventListener("change", function () {
    if (inputAgree.checked) {
      // confirmAgree.textContent = "プライバシーポリシーに同意します";
      btnConfirm.disabled = false; // チェックが入ったらボタンを活性化
    } else {
      // confirmAgree.textContent = "";
      btnConfirm.disabled = true; // チェックが外れたらボタンを非活性化
    }
  });
}


// 必須項目すべて入力で確認ボタン活性化（ContactForm7用）
// const requiredContainers = document.querySelectorAll(
//   ".wpcf7-validates-as-required"
// );

// const isCheckboxGroupFilled = (container) => {
//   const checkboxes = container.querySelectorAll('input[type="checkbox"]');
//   if (checkboxes.length === 0) return true; // チェックボックスがなければ常にtrue
//   return Array.from(checkboxes).some((checkbox) => checkbox.checked);
// };

// const checkFields = () => {
//   let isAllFilled = Array.from(requiredContainers).every((container) => {
//     if (container.querySelector("input, select, textarea")) {
//       return (
//         container.querySelector("input, select, textarea").value !== "" &&
//         isCheckboxGroupFilled(container)
//       );
//     }
//     return isCheckboxGroupFilled(container);
//   });

//   btnConfirm.disabled = !isAllFilled;
// };

// if (requiredContainers.length > 0) {
//   btnConfirm.disabled = true;
//   requiredContainers.forEach((container) => {
//     const inputs = container.querySelectorAll("input, select, textarea");
//     inputs.forEach((input) => {
//       input.addEventListener("input", checkFields);
//     });
//   });
// }


// 確認ボタンクリック時のオーバーレイ要素を作成
function createOverlay() {
  let overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(255, 255, 255, 1)";
  overlay.style.display = "none";
  overlay.style.transition = "opacity .5s";
  overlay.style.zIndex = "100";
  document.body.appendChild(overlay);
  return overlay;
}
let overlay = createOverlay();

// 確認ボタンクリックで確認画面を表示
if (btnConfirm) {
  btnConfirm.addEventListener("click", function () {
    confirmArea.forEach(function (area) {
      area.style.display = "flex";
    });
    inputArea.forEach(function (area) {
      area.style.display = "none";
    });
    overlay.style.display = "block";
    overlay.style.opacity = "1";
    // const contactTopText = document.querySelector(".p-subContact__headingText");
    // contactTopText.style.display = "none";

    setTimeout(function () {
      overlay.style.opacity = "0";
      setTimeout(function () {
        overlay.style.display = "none";
      }, 500);
    }, 500);

    const headerHeight = 200;
    const topPosition = confirmTop.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({
      top: topPosition,
      // behavior: 'smooth'
    });
  });
}

// 戻るボタンクリックで入力画面を表示
if (btnRemove) {
  btnRemove.addEventListener("click", function () {
    confirmArea.forEach(function (area) {
      area.style.display = "none";
    });
    inputArea.forEach(function (area) {
      area.style.display = "block";
    });
    overlay.style.display = "block";
    overlay.style.opacity = "1";

    setTimeout(function () {
      overlay.style.opacity = "0";
      setTimeout(function () {
        overlay.style.display = "none";
      }, 500);
    }, 500);

    const headerHeight = 200;
    const topPosition = confirmTop.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    window.scrollTo({
      top: topPosition,
      // behavior: 'smooth'
    });
  });
}

// 送信ボタンクリックでサンクス画面へ遷移
document.addEventListener(
  "wpcf7mailsent",
  function (event) {
    location = "./thanks/";
  },
  false
);

// 郵便番号入力欄にinputmode numericを追加（スマホ 数字キーボードをデフォルト表示させる）
if (document.querySelector('.js_inputZip')) {
  const zipNumber = document.querySelector('.js_inputZip');
  zipNumber.setAttribute('inputmode', 'numeric');
}