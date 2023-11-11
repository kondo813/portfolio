// ヘッダー２メニュー
// トリガー要素を取得
const header2Triggers = document.querySelectorAll(".header2__trigger");

// 各トリガーにクリックイベントを追加
header2Triggers.forEach(header2Trigger => {
  header2Trigger.addEventListener("click", function (event) {
    // クリックされたトリガーの次の要素（サブメニュー）を取得
    const submenu = event.target.nextElementSibling;

    // サブメニューが表示中であれば非表示にし、非表示であれば表示する
    submenu.classList.toggle("open");

    // サブメニューの親要素からマウスが離れたとき、サブメニューを非表示にする
    header2Trigger.parentNode.addEventListener("mouseleave", function () {
      submenu.classList.remove("open");
    });
  });
});

$('.menu-trigger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('.wrap').removeClass('open');
    $('nav').removeClass('open');
    $('.overlay').removeClass('open');
  } else {
    $(this).addClass('active');
    $('.wrap').addClass('open');
    $('nav').addClass('open');
    $('.overlay').addClass('open');
  }
});
$('.overlay').on('click',function(){
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.menu-trigger').removeClass('active');
    $('.wrap').removeClass('open');
    $('nav').removeClass('open');      
  }
});

// 上部遷移ボタン
$(function() {
  // 変数にクラスを入れる
  var btn = $('.button');
  
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).on('load scroll', function(){
    if($(this).scrollTop() > 100) {
      btn.addClass('active');
    }else{
      btn.removeClass('active');
    }
  });

  //スクロールしてトップへ戻る
  btn.on('click',function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});

// ひっくり返るカード
$(function(){
  $('.picup_content').on('click',function(){
    $(this).toggleClass('flipped')
  });
});








