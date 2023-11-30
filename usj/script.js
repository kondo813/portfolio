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
    $('nav').removeClass('open');
    $('header').removeClass('open');
    $('main').removeClass('open');
    $('footer').removeClass('open');
    document.documentElement.style.overflow = 'scroll';
    document.body.style.overflow = 'scroll';
  } else {
    $(this).addClass('active');
    $('nav').addClass('open');
    $('header').addClass('open');
    $('main').addClass('open');
    $('footer').addClass('open');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  }
});
$('.overlay').on('click',function(){
  // document.documentElement.style.overflow = 'visible';
  // document.body.style.overflow = 'visible';
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.menu-trigger').removeClass('active');
    // $('.wrap').removeClass('open');
    $('nav').removeClass('open'); 
    $('.header').removeClass('open');
    $('.main').removeClass('open');
    $('.footer').removeClass('open');   
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

document.getElementById('mobile-menu').addEventListener('click', function() {
  var navList = document.querySelector('.nav-list');
  navList.classList.toggle('show');
});

document.getElementById('close-menu').addEventListener('click', function() {
  var navList = document.querySelector('.nav-list');
  navList.classList.remove('show');
});

function hoverFunction(element, isHovered) {
  var relatedImg1 = element.classList.contains('mainmenu_img1') ? element : element.previousElementSibling;
  var relatedImg2 = element.classList.contains('mainmenu_img2') ? element : element.nextElementSibling;

  if (isHovered) {
    relatedImg1.style.display = 'none';
    relatedImg2.style.display = 'inline-block';
  } else {
    relatedImg1.style.display = 'inline-block';
    relatedImg2.style.display = 'none';
  }
}