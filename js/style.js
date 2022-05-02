$(function () {
  /* slider */
  $(document).ready(function () {
    $("#main_visual .slick-slider .slick-track").css(
      "width",
      $(window).width()
    );
    $("#main_visual .slick-slider .slick-track .slick-slide").css(
      "width",
      $(window).width()
    );
    $(window).resize(function () {
      $("#main_visual .slick-slider .slick-track").css(
        "width",
        $(window).width()
      );
      $("#main_visual .slick-slider .slick-track .slick-slide").css(
        "width",
        $(window).width()
      );
    });
  });
  var visual = $("#main_visual .slick-list .slick-track>.slick-slide");
  var current = 0;
  var leftBtn = $("#main_visual .slick-slider .slick-prev");
  var rightBtn = $("#main_visual .slick-slider .slick-next");
  var slickDots = $("#main_visual .slick-dots>li");
  var imgAni = visual.find(".images_fade");

  timer();

  function timer() {
    setInterval(function () {
      var prev = visual.eq(current);
      var prevBtn = slickDots.eq(current);
      move(prev, 0, "-100%");
      prevBtn.removeClass("slick-active");
      current++;
      if (current == visual.length) {
        current = 0;
      }
      var next = visual.eq(current);
      var nextBtn = slickDots.eq(current);
      move(next, "100%", 0);
      nextBtn.addClass("slick-active");
    }, 7000);
  }

  function move(target, start, end) {
    target.css("left", start).stop().animate({ left: end }, 500);
  }
  /* slick prev,next btn */
  rightBtn.click(function () {
    var prev = visual.eq(current);
    var prevBtn = slickDots.eq(current);
    move(prev, 0, "-100%");
    prevBtn.removeClass("slick-active");
    current++;
    if (current == visual.length) {
      current = 0;
    }
    var next = visual.eq(current);
    var nextBtn = slickDots.eq(current);
    move(next, "100%", 0);
    nextBtn.addClass("slick-active");
  });
  leftBtn.click(function () {
    var prev = visual.eq(current);
    var prevBtn = slickDots.eq(current);
    move(prev, 0, "100%");
    prevBtn.removeClass("slick-active");
    current--;
    if (current == -visual.length) {
      current = 0;
    }
    var next = visual.eq(current);
    var nextBtn = slickDots.eq(current);
    move(next, "-100%", 0);
    nextBtn.addClass("slick-active");
  });
  slickDots.click(function () {
    var tg = $(this);
    var i = tg.index();
    slickDots.removeClass("slick-active");
    tg.addClass("slick-active");
    move1(i);
  });

  function move1(i) {
    if (current == i) return;
    var currentEl = visual.eq(current);
    var nextEl = visual.eq(i);
    currentEl.css("left", "0").stop().animate({ left: "-100%" }, 500);
    nextEl.css("left", "100%").stop().animate({ left: "0" }, 500);
    current = i;
  }

  /* section2 category item */
  $("#section2 .category .item").mouseover(function () {
    $(this).addClass("on");
  });
  $("#section2 .category .item").mouseout(function () {
    $(this).removeClass("on");
  });

  /* section2 slick-dots */
  var sec2_btn = $("#section2 .travel-slider-box .slick-dots li");
  sec2_btn.click(function () {
    sec2_btn.removeClass("slick-active");
    $(this).addClass("slick-active");
  });

  /* section2 slick-track */
  var sec2_dots_ac = $(
      "#section2 .travel-slider-box .slick-dots li.slick-active"
    ),
    sec2_slide = $("#section2 .travel-slider-box .travel-slider .slick-slide"),
    sec2_slide_ac = $(
      "#section2 .travel-slider-box .travel-slider .slick-slide.slick-active"
    ),
    sec2_slide_tb01 = $("#travel-01 .tb .img"),
    sec2_slide_tb02 = $("#travel-02 .tb .img"),
    sec2_slide_tb03 = $("#travel-03 .tb .img"),
    sec2_slide_a = $(
      "#section2 .travel-slider-box .travel-slider .slick-slide ul li a"
    ),
    sec2_slide_a01 = $(
      "#section2 .travel-slider-box .travel-slider .slick-slide:nth-child(1) ul li a"
    ),
    sec2_slide_a02 = $(
      "#section2 .travel-slider-box .travel-slider .slick-slide:nth-child(2) ul li a"
    ),
    sec2_slide_a03 = $(
      "#section2 .travel-slider-box .travel-slider .slick-slide:nth-child(3) ul li a"
    ),
    map_action = $("#section2 .map_action div");

  sec2_slide.css({
    width: "747px",
    position: "relative",
    left: "0px",
    top: "0px",
    "z-index": "998",
    opacity: "0",
  });
  sec2_slide.eq(1).css({ left: "-747px" });
  sec2_slide.eq(2).css({ left: "-1494px" });
  sec2_slide.eq(3).css({ left: "-2241px" });
  sec2_slide_ac.css({ "z-index": "999", opacity: "1" });

  sec2_btn.eq(0).click(function () {
    sec2_slide
      .removeClass("slick-active")
      .css({ "z-index": "998", opacity: "0" });
    sec2_slide
      .eq(0)
      .addClass("slick-active")
      .css({ "z-index": "999", opacity: "1" });
    map_action.removeClass("slick-active");
    map_action.eq(0).addClass("slick-active");
  });
  sec2_btn.eq(1).click(function () {
    sec2_slide
      .removeClass("slick-active")
      .css({ "z-index": "998", opacity: "0" });
    sec2_slide
      .eq(1)
      .addClass("slick-active")
      .css({ "z-index": "999", opacity: "1" });
    map_action.removeClass("slick-active");
    map_action.eq(1).addClass("slick-active");
  });
  sec2_btn.eq(2).click(function () {
    sec2_slide
      .removeClass("slick-active")
      .css({ "z-index": "998", opacity: "0" });
    sec2_slide
      .eq(2)
      .addClass("slick-active")
      .css({ "z-index": "999", opacity: "1" });
    map_action.removeClass("slick-active");
    map_action.eq(2).addClass("slick-active");
  });
  sec2_btn.eq(3).click(function () {
    sec2_slide
      .removeClass("slick-active")
      .css({ "z-index": "998", opacity: "0" });
    sec2_slide
      .eq(3)
      .addClass("slick-active")
      .css({ "z-index": "999", opacity: "1" });
    map_action.removeClass("slick-active");
    map_action.eq(3).addClass("slick-active");
  });
  /* section2 slide travel img 01 */
  sec2_slide.each(function () {
    /* slide01 */
    sec2_slide_a01.eq(0).mouseover(function () {
      sec2_slide_tb01.css({
        "background-image": "url(../images/thumb/01/01.png)",
      });
    });
    sec2_slide_a01.eq(1).mouseover(function () {
      sec2_slide_tb01.css({
        "background-image": "url(../images/thumb/01/02.png)",
      });
    });
    sec2_slide_a01.eq(2).mouseover(function () {
      sec2_slide_tb01.css({
        "background-image": "url(../images/thumb/01/03.png)",
      });
    });
    sec2_slide_a01.eq(3).mouseover(function () {
      sec2_slide_tb01.css({
        "background-image": "url(../images/thumb/01/04.png)",
      });
    });
    sec2_slide_a01.eq(4).mouseover(function () {
      sec2_slide_tb01.css({
        "background-image": "url(../images/thumb/01/05.png)",
      });
    });
    sec2_slide_a01.eq(5).mouseover(function () {
      sec2_slide_tb01.css({
        "background-image": "url(../images/thumb/01/06.png)",
      });
    });
    sec2_slide_a01.eq(6).mouseover(function () {
      sec2_slide_tb01.css({
        "background-image": "url(../images/thumb/01/07.png)",
      });
    });
    sec2_slide_a01.eq(7).mouseover(function () {
      sec2_slide_tb01.css({
        "background-image": "url(../images/thumb/01/08.png)",
      });
    });
    sec2_slide_a01.eq(8).mouseover(function () {
      sec2_slide_tb01.css({
        "background-image": "url(../images/thumb/01/09.png)",
      });
    });
    sec2_slide_a01.eq(9).mouseover(function () {
      sec2_slide_tb01.css({
        "background-image": "url(../images/thumb/01/10.png)",
      });
    });
    sec2_slide_a01.eq(10).mouseover(function () {
      sec2_slide_tb01.css({
        "background-image": "url(../images/thumb/01/11.png)",
      });
    });
    sec2_slide_a01.eq(11).mouseover(function () {
      sec2_slide_tb01.css({
        "background-image": "url(../images/thumb/01/12.png)",
      });
    });

    /* slide02 */
    sec2_slide_a02.eq(0).mouseover(function () {
      sec2_slide_tb02.css({
        "background-image": "url(../images/thumb/02/01.png)",
      });
    });
    sec2_slide_a02.eq(1).mouseover(function () {
      sec2_slide_tb02.css({
        "background-image": "url(../images/thumb/02/02.png)",
      });
    });
    sec2_slide_a02.eq(2).mouseover(function () {
      sec2_slide_tb02.css({
        "background-image": "url(../images/thumb/02/03.png)",
      });
    });
    sec2_slide_a02.eq(3).mouseover(function () {
      sec2_slide_tb02.css({
        "background-image": "url(../images/thumb/02/04.png)",
      });
    });
    sec2_slide_a02.eq(4).mouseover(function () {
      sec2_slide_tb02.css({
        "background-image": "url(../images/thumb/02/05.png)",
      });
    });
    sec2_slide_a02.eq(5).mouseover(function () {
      sec2_slide_tb02.css({
        "background-image": "url(../images/thumb/02/06.png)",
      });
    });
    sec2_slide_a02.eq(6).mouseover(function () {
      sec2_slide_tb02.css({
        "background-image": "url(../images/thumb/02/07.png)",
      });
    });
    sec2_slide_a02.eq(7).mouseover(function () {
      sec2_slide_tb02.css({
        "background-image": "url(../images/thumb/02/08.png)",
      });
    });
    sec2_slide_a02.eq(8).mouseover(function () {
      sec2_slide_tb02.css({
        "background-image": "url(../images/thumb/02/09.png)",
      });
    });
    sec2_slide_a02.eq(9).mouseover(function () {
      sec2_slide_tb02.css({
        "background-image": "url(../images/thumb/02/10.png)",
      });
    });

    /* slide03 */
    sec2_slide_a03.eq(0).mouseover(function () {
      sec2_slide_tb03.css({
        "background-image": "url(../images/thumb/03/01.png)",
      });
    });
    sec2_slide_a03.eq(1).mouseover(function () {
      sec2_slide_tb03.css({
        "background-image": "url(../images/thumb/03/02.png)",
      });
    });
    sec2_slide_a03.eq(2).mouseover(function () {
      sec2_slide_tb03.css({
        "background-image": "url(../images/thumb/03/03.png)",
      });
    });
    sec2_slide_a03.eq(3).mouseover(function () {
      sec2_slide_tb03.css({
        "background-image": "url(../images/thumb/03/04.png)",
      });
    });
    sec2_slide_a03.eq(4).mouseover(function () {
      sec2_slide_tb03.css({
        "background-image": "url(../images/thumb/03/05.png)",
      });
    });
    sec2_slide_a03.eq(5).mouseover(function () {
      sec2_slide_tb03.css({
        "background-image": "url(../images/thumb/03/06.png)",
      });
    });
    sec2_slide_a03.eq(6).mouseover(function () {
      sec2_slide_tb03.css({
        "background-image": "url(../images/thumb/03/07.png)",
      });
    });
    sec2_slide_a03.eq(7).mouseover(function () {
      sec2_slide_tb03.css({
        "background-image": "url(../images/thumb/03/08.png)",
      });
    });
    sec2_slide_a03.eq(8).mouseover(function () {
      sec2_slide_tb03.css({
        "background-image": "url(../images/thumb/03/09.png)",
      });
    });
    sec2_slide_a03.eq(9).mouseover(function () {
      sec2_slide_tb03.css({
        "background-image": "url(../images/thumb/03/10.png)",
      });
    });
    sec2_slide_a03.eq(10).mouseover(function () {
      sec2_slide_tb03.css({
        "background-image": "url(../images/thumb/03/11.png)",
      });
    });
    sec2_slide_a03.eq(11).mouseover(function () {
      sec2_slide_tb03.css({
        "background-image": "url(../images/thumb/03/12.png)",
      });
    });
    sec2_slide_a03.eq(12).mouseover(function () {
      sec2_slide_tb03.css({
        "background-image": "url(../images/thumb/03/13.png)",
      });
    });
  });

  sec2_slide_a.mouseout(function () {
    sec2_slide_tb01.removeAttr("style");
    sec2_slide_tb02.removeAttr("style");
    sec2_slide_tb03.removeAttr("style");
  });

  /* section3 */
  $("#section3 .layout .col").mouseover(function () {
    $(this).addClass("on");
  });
  $("#section3 .layout .col").mouseout(function () {
    $(".col").removeClass("on");
  });

  /* section4 */
  var section4 = $("#section4 .left_box"),
    section4Content = section4.find(".post"),
    section4OST = section4.offset().top;
  $(window).scroll(function () {
    var currentSCT = $(this).scrollTop();
    if (currentSCT > section4OST - 100) {
      section4.addClass("active");
      if (currentSCT >= section4OST + 1500) {
        section4.removeClass("active");
        section4.css({
          paddingTop: "1600px",
          paddingBottom: "0px",
        });
      }
    } else {
      section4.removeClass("active");
      section4.css({
        paddingTop: "0px",
        paddingBottom: "0px",
      });
    }
  });
});
