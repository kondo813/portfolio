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

