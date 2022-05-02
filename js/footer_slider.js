$(function () {
    $(".control_slider").bxSlider({
        prevText: '<i class="far fa-arrow-alt-circle-left bx-prev"></i>',
        nextText: '<i class="far fa-arrow-alt-circle-right bx-next"></i>',
        startText:'<i class="far fa-play-circle bx-start"></i>',
        stopText:'<i class="far fa-pause-circle bx-stop"></i>',
        auto: true,
        autoControls:true,
        stopAutoOnclick:true,
        pager:false,
        minSlides:4,
        maxSlides:4,
        moveSlides: 1,
        slideWidth: 125,
        speed:600,
    });
});

