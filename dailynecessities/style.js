// 検索フォーム
const searchIcon = document.getElementById('search-icon');
const searchForm = document.getElementById('search-form');
const closeSearch = document.getElementById('close-search');
const overlay = document.getElementById('search_overlay');

function toggleSearchForm() {
  if (searchForm.classList.contains('active')) {
    searchForm.classList.remove('active');
    setTimeout(() => { searchForm.style.display = 'none'; }, 500); 
    overlay.style.display = 'none';
  } else {
    searchForm.style.display = 'block'; 
    overlay.style.display = 'block';
    setTimeout(() => { searchForm.classList.add('active'); }, 10); 
  }
}

searchIcon.addEventListener('click', toggleSearchForm);
closeSearch.addEventListener('click', toggleSearchForm);
overlay.addEventListener('click', toggleSearchForm);

searchForm.addEventListener('click', function(event) {
  event.stopPropagation(); 
});

// ハンバーガーメニュー
$(document).ready(function() {
  $(".openbtn").click(function () {
      $(this).toggleClass('active');
      $("#g-nav").toggleClass('panelactive');
      $(".menu_overlay").fadeToggle(); 
      $(".menu_overlay").css('display', 'block'); 
      
      // bodyのスクロールをトグルする
      if ($('body').hasClass('noscroll')) {
          enableScroll();
          $('body').removeClass('noscroll');
      } else {
          disableScroll();
          $('body').addClass('noscroll');
      }
  });
  $("#g-nav a, .menu_overlay").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
    $(".menu_overlay").fadeOut();
  });
});

// スクロールを無効
function disableScroll() {
  // スクロール位置を取得
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // スクロールを固定する（スクロールイベント時に元の位置に戻す）
  window.onscroll = function() {
      window.scrollTo(scrollLeft, scrollTop);
  };
}

// スクロールを再び有効
function enableScroll() {
  window.onscroll = null;
}


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

// スライダー
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


// news,storyアニメーション
document.addEventListener("DOMContentLoaded", function() {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if(entry.isIntersecting) {
        // setTimeoutを使用して時間差フェードインを適用
        setTimeout(() => {
          entry.target.classList.add('fade-in');
        }, 150 * index); // 200msごとに遅延させる

        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.1});

  // 各ニュースカードを監視対象に追加
  document.querySelectorAll('.news_card').forEach((card) => {
    observer.observe(card);
  });
  // 各ニュースカードを監視対象に追加
  document.querySelectorAll('.story_card').forEach((card) => {
    observer.observe(card);
  });
});

