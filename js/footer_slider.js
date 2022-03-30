$(function () {
    /* ---------- 좌우 컨트롤 ---------- */
    $(".control_slider").bxSlider({
        prevText: '<i class="fa-solid fa-circle-arrow-left"></i>',
        nextText: '<i class="fa-solid fa-circle-arrow-right"></i>',
        auto: true,
        autoControls:true,
        stopAutoOnclick:true,
        pager:false,
        minSlides:4,
        maxSlides:4,
        moveSlides: 1,
        slideWidth: 125,
        startText:'<i class="fa-regular fa-circle-play"></i>',
        stopText:'<i class="fa-regular fa-circle-pause"></i>',
        speed:1000,
    });
});
