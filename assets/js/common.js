$(document).ready(function () {
    $('.dark_btn').on('click', function () {
        $('#wrap').addClass('dark');
        $(this).prev().css('display', 'block');
        $(this).css('display', 'none');
    });
    $('.light_btn').on('click', function () {
        $('#wrap').removeClass('dark');
        $(this).next().css('display', 'block');
        $(this).css('display', 'none');
    });
    $(window).on('scroll', function () {
        const scrollY = $(this).scrollTop();
        // console.log(scrollY);

        if (scrollY >= 20) $('#header').addClass('on');
        else $('#header').removeClass('on');

        if (scrollY >= 100) $('.top_btn').css('display', 'block');
        else $('.top_btn').css('display', 'none');

        $('.top_btn').on('click', function () {
            $(window).scrollTop(0);
        });
    });

    $('.util .menu_open_btn').on('click', function () {
        $('.gnb_wrap').addClass('on');
        $('#header').removeClass('on').children('.logo').css('display', 'none');
    });

    $('.menu_close_btn').on('click', function () {
        $('.gnb_wrap').removeClass('on');
        $('#header').addClass('on').children('.logo').css('display', 'block');
    });

});