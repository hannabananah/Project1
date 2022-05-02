$(function () {
    $(".control_slider").bxSlider({
        prevText: '<i class="far fa-arrow-alt-circle-left"></i>',
        nextText: '<i class="far fa-arrow-alt-circle-right"></i>',
        startText:'<i class="far fa-play-circle"></i>',
        stopText:'<i class="far fa-pause-circle"></i>',
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
    $(".bx-stop").click(function() {
        $(".bx-stop").bxSlider({ display: 'none' });
        $(".bx-start").bxSlider({ display: 'inline-block' });
    });
    $(".bx-start").click(function() {
        $(".bx-stop").bxSlider({ display: 'inline-block' });
        $(".bx-start").bxSlider({ display: 'none' });
    });
});

