$(document).ready(function () {
    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop();
        // console.log(scrollY);

        if (scrollY >= 20) $('#header').addClass('on');
        else $('#header').removeClass('on');
    });

    $('.util .menu_open_btn').on('click', function () {
        $('.gnb_wrap').addClass('on');
        $('.gnb_wrap').siblings().css('display', none)
    });

    $('.menu_close_btn').on('click', function () {
        $('.gnb_wrap').removeClass('on');
    });
});