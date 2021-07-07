$(document).ready(function () {
    $('.dark_btn').on('click', function () {
        $('#wrap').addClass('dark');
        $(this).prev().css('display', 'block');
        $(this).css('display', 'none');
        $('.gnb_logo').children().find('img').attr({src: 'assets/images/logo/logo_white.png'});
        $('.search').children().find('img').attr({src: 'assets/images/button/search_white.png'});
    });
    $('.light_btn').on('click', function () {
        $('#wrap').removeClass('dark');
        $(this).next().css('display', 'block');
        $(this).css('display', 'none');
        $('.gnb_logo').children().find('img').attr({src: 'assets/images/logo/logo.png'});
        $('.search').children().find('img').attr({src: 'assets/images/button/search.png'});
    });
    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop();
        // console.log(scrollY);

        if (scrollY >= 20) $('#header').addClass('on');
        else $('#header').removeClass('on');

        if (scrollY >= 100) $('.top_btn').css('display', 'block');
        else $('.top_btn').css('display', 'none');

        $('.top_btn').on('click', function () {
            $('html, body').stop().animate({scrollTop: 0}, 1000);
        });
    });

    $('.util .menu_open_btn').on('click', function () {
        $('.gnb_wrap').addClass('on');
        $('#header').removeClass('on').children('.logo').css('display', 'none');
    });

    $('.menu_close_btn').on('click', function () {
        $('.gnb_wrap').removeClass('on');
        $('#header').children('.logo').css('display', 'block');

        if (scrollY >= 20) $('#header').addClass('on');
    });

    $('#gnb > ul > li > a').on('click', function () {
          const liHei = $(this).next().children().outerHeight(true);
          const liSize = $(this).next().children().length;
          const ulHei = liHei * liSize;
          console.log(liHei, liSize, ulHei);

          // 초기화 추가 설정: 미리 열려진 다른 메뉴 닫아주기
          $(this).parent().siblings().removeClass('on').children('ul').stop().animate({maxHeight: 0}, function () {
            $(this).css({visibility: 'hidden'});
          });

          if ($(this).parent().hasClass('on')) { //현재 클릭해서 열려져 있는 경우
            $(this).parent().removeClass('on').children('ul').stop().animate({maxHeight: 0}, function () {
              $(this).css({visibility: 'hidden'});
            });
            
            /* $(this).next().stop().animate({maxHeight: 0}, function () {
              $(this).css({visibility: 'hidden'});
            }).parent().removeClass('on'); */
          } else { //열려져 있지 않은 경우: ul -> visibility -> animate() -> 부모li.on
            $(this).next().css({visibility: 'visible'}).stop().animate({maxHeight: ulHei}).parent().addClass('on');
          }
        return false;
      });

      $('#search').on({
        focus: function(){
          $(this).prev().css('left', -9999);
        },
        blur: function(){
          if ($(this).val() === '') $(this).prev().css('left', 20);
        }
      });

      /* $('#cnt1 .swiper-container'). */
});