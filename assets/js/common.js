$(document).ready(function () {
    $('.util .menu_open_btn').on('click', function () {
        $('.gnb_wrap').addClass('on');
        $('.gnb_wrap').siblings().css('display', none)
    });

    $('.menu_close_btn').on('click', function () {
        $('.gnb_wrap').removeClass('on');
    });
});