<?php 

//-----------------------------------------------------
// 【確認用メールアドレス】contact-form7用、確認用メールアドレスの入力欄の設定
//  入力用の名前はemail、確認用はemail_confirmを含める名前にするとすること（your-emailでもOK）
//-----------------------------------------------------
add_filter( 'wpcf7_validate_email', 'wpcf7_validate_email_filter_confrim', 11, 2 );
add_filter( 'wpcf7_validate_email*', 'wpcf7_validate_email_filter_confrim', 11, 2 );
function wpcf7_validate_email_filter_confrim( $result, $tag ) {
    $type = $tag['type'];
    $name = $tag['name'];
    if ( 'email' == $type || 'email*' == $type ) {
        if (preg_match('/(.*)_confirm$/', $name, $matches)){//確認用メールアドレスのラベル（名前）にメールアドレスのラべル＋_confirmを設定
            $target_name = $matches[1];
                $posted_value = trim( (string) $_POST[$name] ); 
                $posted_target_value = trim( (string) $_POST[$target_name] );
            if ($posted_value != $posted_target_value) {
                $result->invalidate( $tag,"メールアドレスが一致していません");
            }
        }
    }
    return $result;
}