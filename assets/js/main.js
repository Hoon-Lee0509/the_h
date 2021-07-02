$(document).ready(function () {
        let timer = 0;
        const $acco = $('.accordion');
        $acco.children().attr({tabIndex: 0});
  
        $(window).on('resize', function () {
          clearTimeout();
          timer = setTimeout(function () {
            if ($(this).width() >= 769) {
              $acco.removeClass('m').addClass('pc');
              $acco.children().eq(3).addClass('on');
            } else if ($(this).width() >= 320) {
              $acco.removeClass('pc').addClass('m');
            }
          }, 100);
          timer = setTimeout(function () {
            if ($(this).width() >= 771 && $(this).width() <= 1079) {
              $('.wwfp').children().attr({src: 'assets/images/06_viewmore/viewmore01_tab.png'});
              $('.recruit').children().attr({src: 'assets/images/06_viewmore/viewmore02_tab.png'});
              $('.members').children().attr({src: 'assets/images/06_viewmore/viewmore03_tab.png'});
            } else {
              $('.wwfp').children().attr({src: 'assets/images/06_viewmore/viewmore01.png'});
              $('.recruit').children().attr({src: 'assets/images/06_viewmore/viewmore02.png'});
              $('.members').children().attr({src: 'assets/images/06_viewmore/viewmore03.png'});
            }
          }, 100);
        });
        $(window).trigger('resize');
  
        $('.accordion li').attr({tabIndex: 0});
  
        $acco.children().on('click focus', function () {
          $(this).addClass('on').siblings().removeClass('on');
        });
  
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