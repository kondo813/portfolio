// ハンバーガーメニュー
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

function animateListItems() {
  var fade = ['.list-01', '.list-02', '.list-03', '.list-04', '.list-05', '.list-06'];
  fade.forEach(function (val, i) {
      setTimeout(function () {
          var listItem = document.querySelector(val);
          listItem.style.opacity = '1';
          listItem.style.transform = 'translateY(0)';
      }, 180 * i);
  });
}




'use strict'
window.onload = function () {
  const swiper = new Swiper('.mySwiper', {
    spaceBetween: 10,
    slidesPerView: 2,
    watchSlidesProgress: true,
  })
  const swiper2 = new Swiper('.mySwiper2', {
    loop: true,
    speed: 300,
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: swiper,
    },
    on: {
      slideChange: function () {
        if (this.realIndex > 0) {
          this.params.autoplay.delay = 4700
        }
      },
    },
  })
}

// 1099以下でスライダー画像変更
document.addEventListener('DOMContentLoaded', function() {
  var carouselSlide = document.getElementById('carouselSlide');

  function updateBackground() {
    var imageUrl = (window.innerWidth <= 1099) ? 'img/slider1-1.png' : 'img/slider1.png';
    carouselSlide.style.backgroundImage = 'url(' + imageUrl + ')';
  }

  window.addEventListener('resize', updateBackground);
  updateBackground(); // 初回の背景更新
});


// 検索フォーム
const searchIcon = document.getElementById('search-icon');
const searchForm = document.getElementById('search-form');
const closeSearch = document.getElementById('close-search');
const overlay = document.getElementById('overlay');

function toggleSearchForm() {
  if (searchForm.classList.contains('active')) {
    searchForm.classList.remove('active');
    setTimeout(() => { searchForm.style.display = 'none'; }, 500); // Wait for animation to finish
    overlay.style.display = 'none';
  } else {
    searchForm.style.display = 'block'; // Display block before sliding down
    overlay.style.display = 'block';
    setTimeout(() => { searchForm.classList.add('active'); }, 10); // Delay to allow display change to take effect
  }
}

searchIcon.addEventListener('click', toggleSearchForm);
closeSearch.addEventListener('click', toggleSearchForm);
overlay.addEventListener('click', toggleSearchForm);

searchForm.addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent click inside the search form from closing it
});