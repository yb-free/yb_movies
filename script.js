// ページ内スクロール
$('a[href^="#"]').click(function () {
  const speed = 500;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
});

// headerが消える
let startPos = 0, winScrollTop = 0;
// scrollイベントを設定
window.addEventListener('scroll', function () {
  winScrollTop = this.scrollY;
  if (winScrollTop >= startPos) {
    // 下にスクロールされたとき
    if (winScrollTop >= 300) {
      // 下に200pxスクロールされたら隠す
      document.getElementById('header').classList.add('hide');
    }
  } else {
    // 上にスクロールされた時
    document.getElementById('header').classList.remove('hide');
  }
  startPos = winScrollTop;
});

// Pタグのマウスオーバーのアニメーション
$('h2').hover(function() {
  $(this).stop().animate({zIndex:1},{
    duration:800,
    step:function(now){
      $(this).css({transform:'rotateX(' + (now * 720) + 'deg)'});
    },
    complete:function(){
      $(this).css('zIndex', 0);
    }
  })
}, function() {
  $(this).css({transform:'rotateX(0deg)'});
});

// ハンバーガーメニュー
$(function() {
  $('.hamburger').click(function() {
    $(this).toggleClass('activ');

    if ($(this).hasClass('activ')) {
      $('.globalMenuSp').addClass('activ');
    } else {
      $('.globalMenuSp').removeClass('activ');
    }
  });
});

// AOSスクロール
AOS.init({
  duration: 3000,
  once: false,
  mirror: true,
});




