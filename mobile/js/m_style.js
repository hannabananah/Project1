$(function(){
    $('#lang_btn').click(function(){
        $('#lang_btn').siblings('ul').slideToggle();
        $('#lang_wrap>ul').addClass('on');
    });

    $('#main_site_wrap .main_site_btn').click(function(){
        $('.main_site_btn').siblings('ul').slideToggle();
        $('#main_site_wrap>ul').addClass('on');
    });

    /* menu_btn */
    $('#open_mn').click(function(){
        $('.mo_gnb').css('display','block');
        $('#shadow_device').css('display','block')
    })

    /* mo_gnb class 삭제 item none */
    var th1_a=$('#mo_tm .th1 a')
    function outAll(){
        th1_a.removeClass('ov');
        $('#mo_tm .th1 .item').slideUp();
    }
    //mo_tm
    $('#mo_tm .th1 a').click(function(e){
        e.preventDefault();
        outAll();
        $(this).addClass('ov').siblings('.item').slideToggle();
    });
    $('#shadow_device').click(function(e){
        $(this).css('display','none');
        $('.mo_gnb').css('display','none')
    })


    /* slider */
    /* $(document).ready(function(){
        $('#main_visual .slick-slider .slick-track').css('width',$(window).width());
        $('#main_visual .slick-slider .slick-track .slick-slide').css('width',$(window).width());
        $(window).resize(function(){
            $('#main_visual .slick-slider .slick-track').css('width',$(window).width());
            $('#main_visual .slick-slider .slick-track .slick-slide').css('width',$(window).width());
        })
    }) */
    var visual=$('#main_visual .slick-list .slick-track>.slick-slide');
    var current=0;
    var leftBtn=$('#main_visual .slick-slider .slick-prev');
    var rightBtn=$('#main_visual .slick-slider .slick-next');
    var slickDots=$('#main_visual .slick-dots>li');
    var imgAni=visual.find('.images_fade');

    timer();
    function timer(){
        setInterval(function(){
            var prev=visual.eq(current);
            var prevBtn=slickDots.eq(current);
            move(prev,0,"-100%");
            prevBtn.removeClass('slick-active');
            current++;
            if(current==visual.length){
                current=0;
            }
            var next=visual.eq(current);
            var nextBtn=slickDots.eq(current);
            move(next,"100%",0);
            nextBtn.addClass('slick-active');
        },7000)
    }
    function move(target,start,end){
        target.css('left',start).stop().animate({left:end}, 500);
    }
    /* slick prev,next btn */
    rightBtn.click(function(){
        var prev=visual.eq(current);
        var prevBtn=slickDots.eq(current);
        move(prev,0,"-100%");
        prevBtn.removeClass('slick-active');
        current++;
        if(current == visual.length){
            current=0;
        }
        var next=visual.eq(current);
        var nextBtn=slickDots.eq(current);
        move(next,"100%",0);
        nextBtn.addClass('slick-active');
    })
    leftBtn.click(function(){
        var prev=visual.eq(current);
        var prevBtn=slickDots.eq(current);
        move(prev,0,"100%");
        prevBtn.removeClass('slick-active');
        current--;
        if(current == -visual.length){
            current=0;
        }
        var next=visual.eq(current);
        var nextBtn=slickDots.eq(current);
        move(next,"-100%",0);
        nextBtn.addClass('slick-active');
    })
    slickDots.click(function(){
        var tg=$(this);
        var i=tg.index();
        slickDots.removeClass('slick-active');
        tg.addClass('slick-active');
        move1(i);
    })
    function move1(i){
        if(current==i) return;
        var currentEl=visual.eq(current);
        var nextEl= visual.eq(i);
        currentEl.css('left',"0").stop().animate({left:"-100%"}, 500);
        nextEl.css('left',"100%").stop().animate({left:"0"}, 500);
        current=i;
    }

    /* section2 category item */
    $('#section2 .category .item').mouseover(function(){
        $(this).addClass('on');
    })
    $('#section2 .category .item').mouseout(function(){
        $(this).removeClass('on');
    })


    var sec2_slide=$('#section2 .travel-slider-box .travel-slider .slick-slide'),
    sec2_slide_ac=$('#section2 .travel-slider-box .travel-slider .slick-slide.slick-active');

    /* section2 slick-dots */
    var sec2_btn=$('#section2 .travel-slider-box .slick-dots li');
    sec2_btn.click(function(){
        sec2_btn.removeClass('slick-active');
        $(this).addClass('slick-active');
    })

    sec2_slide.css({width: '387px',position:'relative',left:'0px',top:'0px','z-index':'998',opacity:'0'});
    sec2_slide.find('.item').css({width: '100%', display:'inline-block'});
    sec2_slide.eq(1).css({left:'-387px'});
    sec2_slide.eq(2).css({left:'-774px'});
    sec2_slide.eq(3).css({left:'-1161px'});
    sec2_slide_ac.css({'z-index':'999',opacity: '1'});

    sec2_btn.eq(0).click(function(){
        sec2_slide.removeClass('slick-active').css({'z-index':'998',opacity: '0'});
        sec2_slide.eq(0).addClass('slick-active').css({'z-index':'999',opacity: '1'});
        map_action.removeClass('slick-active');
        map_action.eq(0).addClass('slick-active');

    })
    sec2_btn.eq(1).click(function(){
        sec2_slide.removeClass('slick-active').css({'z-index':'998',opacity: '0'});
        sec2_slide.eq(1).addClass('slick-active').css({'z-index':'999',opacity: '1'});
        map_action.removeClass('slick-active');
        map_action.eq(1).addClass('slick-active');
    })
    sec2_btn.eq(2).click(function(){
        sec2_slide.removeClass('slick-active').css({'z-index':'998',opacity: '0'});
        sec2_slide.eq(2).addClass('slick-active').css({'z-index':'999',opacity: '1'});
        map_action.removeClass('slick-active');
        map_action.eq(2).addClass('slick-active');
    })
    sec2_btn.eq(3).click(function(){
        sec2_slide.removeClass('slick-active').css({'z-index':'998',opacity: '0'});
        sec2_slide.eq(3).addClass('slick-active').css({'z-index':'999',opacity: '1'});
        map_action.removeClass('slick-active');
        map_action.eq(3).addClass('slick-active');
    })

    /* section4 small-posts */
    $('#section4 .small-posts').css({'opacity':'1', 'transform':'matrix(1, 0, 0, 1, 0, 0'})


    /* footer */
    $('#site_wrap div').css({display:'none','z-index':'99999'});
    $('#site_wrap .siteBtn1').click(function(){
            $('#site_wrap .f_site01').css({display:'block'}).addClass('on')
    });
    $('#site_wrap .siteBtn2').click(function(){
        $('#site_wrap .f_site02').css({display:'block'}).addClass('on');
    });
    $('#site_wrap .f_site01 button').click(function(){
        $('#site_wrap .f_site01').css({display:'none'}).removeClass('on');
    });
    $('#site_wrap .f_site02 button').click(function(){
        $('#site_wrap .f_site02').css({display:'none'}).removeClass('on');
    });
    
    /* footer slide */
    var setIntervalId;
    var cnt=[0,0,0,0];
    var slideW=140;
    var c=0;
    cnt[c]=0;
    function footerSlideFn(){
        $('#ban_ul').eq(c).stop().animate({
            left:-(slideW*cnt[c])
        },500,
        function(){
            if(cnt[c]>5){cnt[c]=0}
            if(cnt[c]<0){cnt[c]=5}
            $('#ban_ul').eq(c).stop().animate({left:-slideW*cnt[c]},0);
        })
    }
    function nextCountFn(){
        cnt[c]++;
        footerSlideFn();
    }
    function prevCountFn(){
        cnt[c]--;
        footerSlideFn();
    }


    /* f_slider btn */
    $('#footer .f_top .f_banner .next').on({click:function(){
        if(!$('#ban_wrap .bx-wrapper').eq(c).is(':animated')){
            nextCountFn();
        }
    }})
    $('#footer .f_top .f_banner .prev').on({click:function(){
        if(!$('#ban_wrap .bx-wrapper').eq(c).is(':animated')){
            prevCountFn();
        }
    }})
    $('#b_stop').click(function(){
        $('#b_stop').css({display:'none'});
        $('#b_play').css({display:'inline-block'});
    })
    $('#b_play').click(function(){
        $('#b_stop').css({display:'inline-block'});
        $('#b_play').css({display:'none'});
    })




});