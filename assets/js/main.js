$(document).ready(function () {
    $(document).ready(function () {
        let timer = 0;
        const $acco = $('.accordion');
        $acco.children().attr({tabIndex: 0});
  
        // resize 이벤트의 성능이 느려지는 것을 보완하기 위해 setTimeout()으로 추가 설정
        $(window).on('resize', function () {
          clearTimeout();
          timer = setTimeout(function () {
            if ($(this).width() >= 769) {
              $acco.removeClass('m').addClass('pc');
              $acco.children().eq(3).addClass('on');
            }
            else if ($(this).width() >= 320) {
              $acco.removeClass('pc').addClass('m');
            }
          }, 100);
        });
        $(window).trigger('resize');
  
        $('.accordion li').attr({tabIndex: 0});
  
        $acco.children().on('click focus', function () {
          $(this).addClass('on').siblings().removeClass('on');
        });	//mouseenter, focusin이벤트 종료
  
        // $acco.on('mouseleave', function () {
        //   if ($acco.hasClass('pc')) {
        //     out('pc');
        //   } else if ($acco.hasClass('m')) {
        //     out('m');
        //   }
        // });
  
        $acco.find('.list1, .list4').on('keydown', function (e) {
          if ($acco.hasClass('pc')) {
            if ($(this).hasClass('list1') && (e.shiftKey && e.keyCode === 9)) out('pc');
            else if ($(this).hasClass('list4') && (!e.shiftKey && e.keyCode === 9)) out('pc');
          } else if ($acco.hasClass('m')) {
            if ($(this).hasClass('list1') && (e.shiftKey && e.keyCode === 9)) out('m');
            else if ($(this).hasClass('list4') && (!e.shiftKey && e.keyCode === 9)) out('m');
           }
        });
        
        function out(device)	 {
          console.log(device);
          $acco.children().removeClass('on');
          if (device === 'pc') {
            $acco.children().eq(2).addClass('on');
          }
        }
  
          });
});