<!-- 入力フォーム -->
<div class="form js_confirmTop">
  <div class="form__contents">

    <div class="form__content st_center">
      <div class="form__head">
        <p class="form__title">何に関するお問い合わせですか？</p>
      </div>
      <div class="form__item">
        <span class="form__confirm js_confirmArea js_confirmTitle"></span>
        <input class="formText js_inputArea js_inputTitle" type="text">
      </div>
    </div>

    <div class="form__content st_center">
      <div class="form__head">
        <p class="form__title">お名前</p>
      </div>
      <div class="form__item">
        <span class="form__confirm js_confirmArea js_confirmName"></span>
        <input class="formText js_inputArea js_inputName" type="text">
      </div>
    </div>

    <div class="form__content st_center">
      <div class="form__head">
        <p class="form__title">フリガナ</p>
      </div>
      <div class="form__item">
        <span class="form__confirm js_confirmArea js_confirmRuby"></span>
        <input class="formText js_inputArea js_inputRuby" type="text">
      </div>
    </div>

    <div class="form__content st_center">
      <div class="form__head">
        <p class="form__title">メールアドレス</p>
      </div>
      <div class="form__item">
        <span class="form__confirm js_confirmArea js_confirmMail"></span>
        <input class="formText js_inputArea js_inputEmail" type="email">
      </div>
    </div>

    <div class="form__content st_center">
      <div class="form__head">
        <p class="form__title">メールアドレス（確認）</p>
      </div>
      <div class="form__item">
        <span class="form__confirm js_confirmArea js_confirmMailConfirm"></span>
        <input class="formText js_inputArea js_inputEmailConfirm" type="email">
      </div>
    </div>

    <div class="form__content st_center">
      <div class="form__head">
        <p class="form__title">会社名</p>
      </div>
      <div class="form__item">
        <span class="form__confirm js_confirmArea js_confirmCompany"></span>
        <input class="formText js_inputArea js_inputCompany" type="text">
      </div>
    </div>

    <div class="form__content st_center">
      <div class="form__head">
        <p class="form__title">部署名/役職</p>
      </div>
      <div class="form__item">
        <span class="form__confirm js_confirmArea js_confirmDepartment"></span>
        <input class="formText js_inputArea js_inputDepartment" type="text">
      </div>
    </div>

    <div class="form__content st_center">
      <div class="form__head">
        <p class="form__title">電話番号</p>
      </div>
      <div class="form__item">
        <span class="form__confirm js_confirmArea js_confirmTel"></span>
        <input class="formText js_inputArea js_inputTel" type="tel">
      </div>
    </div>

    <div class="form__content st_center">
      <div class="form__head">
        <p class="form__title">郵便番号</p>
      </div>
      <div class="form__item">
        <span class="form__confirm js_confirmArea js_confirmZip"></span>
        <input class="formText js_inputArea js_inputZip" type="text">
      </div>
    </div>

    <div class="form__content st_center">
      <div class="form__head">
        <p class="form__title">ご住所</p>
      </div>
      <div class="form__item">
        <span class="form__confirm js_confirmArea js_confirmAddress"></span>
        <input class="formText js_inputArea js_inputAddress" type="text">
      </div>
    </div>

    <div class="form__content st_center">
      <div class="form__head">
        <p class="form__title">ご連絡の方法</p>
      </div>
      <div class="form__item">
        <div class="formRadio js_inputRadio">
          <span class="form__confirm js_confirmArea js_confirmRadio"></span>
          <div class="js_inputArea">
            <label>
              <input type="radio" name="radio-name" value="電話"><span>電話</span>
            </label>
            <label>
              <input type="radio" name="radio-name" value="メール"><span>メール</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="form__content">
      <div class="form__head">
        <p class="form__title">お問い合わせ内容</p>
      </div>
      <div class="form__item">
        <span class="form__confirm js_confirmArea js_confirmTextArea"></span>
        <textarea class="formTextArea js_inputArea js_inputTextArea"></textarea>
      </div>
    </div>
    
    <div class="form__content st_center">
      <div class="form__head"></div>
      <div class="form__item">
        <div class="formAgree js_inputArea">
          <label for="">
            <input class="formAgree__item" type="checkbox" name="">
            <span>プライバシーポリシーに同意する</span>
          </label>
          <a href="./privacy" class="formAgree__link" target="_blank"></a>
        </div>
      </div>
    </div>
    
    <div class="form__content form__contentButton">
      <input class="formBtn js_btnConfirm js_inputArea" type="button" value="確認">
      <input class="formBtn is_confirm js_confirmArea js_confirmRemove" type="button" value="戻る">
      <input class="formBtn js_confirmArea" type="submit" value="送信">
    </div>

  </div>
</div>