// ハンバーガーメニューの表示・非表示を切り替えるJavaScript
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.getElementById('toggleButton');
  const menu = document.getElementById('menu');

  toggleButton.addEventListener('click', function () {
      menu.classList.toggle('active');
  });
});




$('.menu-trigger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('main').removeClass('open');
    $('nav').removeClass('open');
  } else {
    $(this).addClass('active');
    $('main').addClass('open');
    $('nav').addClass('open');
  }
});
$('.overlay').on('click',function(){
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.menu-trigger').removeClass('active');
    $('main').removeClass('open');
    $('nav').removeClass('open');      
  }
});


// ひっくり返るカード
$(function(){
  $('.picup_content').on('click',function(){
    $(this).toggleClass('flipped')
  });
});


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

