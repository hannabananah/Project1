$(function () {
  /* menu btn */
  $("#site2_btn1").click(function () {
    $("#site2_btn1").siblings("ul").slideToggle();
    $(this).addClass("on");
  });
  $("#site2_btn2").click(function () {
    $("#site2_btn2").siblings("ul").slideToggle();
    $(this).addClass("on");
  });

  /* menu list btn */
  $("#tm .th1").mouseover(function () {
    $("#nav").addClass("action");
    $(".no_touch").css("display", "block");
  });
  $("#tm .th1").mouseout(function () {
    $("#nav").removeClass("action");
    $(".no_touch").css("display", "none");
  });

  /* gnb height */
  $("#tm .th1:nth-child(1)").mouseover(function () {
    $("#animate").css("height", "465px");
  });
  $("#tm .th1:nth-child(2)").mouseover(function () {
    $("#animate").css("height", "420px");
  });
  $("#tm .th1:nth-child(3)").mouseover(function () {
    $("#animate").css("height", "510px");
  });
  $("#tm .th1:nth-child(4)").mouseover(function () {
    $("#animate").css("height", "650px");
  });
  $("#tm .th1:nth-child(5)").mouseover(function () {
    $("#animate").css("height", "390px");
  });
  $("#tm .th1:nth-child(6)").mouseover(function () {
    $("#animate").css("height", "720px");
  });
  $("#animate").mouseout(function () {
    $("#animate").css("height", "88px");
  });

  /* footer */
  $("#site_wrap .btn01").click(function () {
    $(".f_site01").slideToggle();
    $(this).addClass("on");
  });
  $("#site_wrap .btn01").click(function () {
    $(".f_site01").siblings("ul").slideToggle();
    $(this).addClass("on");
  });
  $("#site_wrap .btn02").click(function () {
    $(".f_site02").slideToggle();
    $(this).addClass("on");
  });
  $("#site_wrap .btn02").click(function () {
    $(".f_site02").siblings("ul").slideToggle();
    $(this).addClass("on");
  });

  /* footer slide */
  var setIntervalId;
  var cnt = [0, 0, 0, 0];
  var slideW = 140;
  var c = 0;
  cnt[c] = 0;

  function footerSlideFn() {
    $("#ban_ul")
      .eq(c)
      .stop()
      .animate(
        {
          left: -(slideW * cnt[c]),
        },
        500,
        function () {
          if (cnt[c] > 5) {
            cnt[c] = 0;
          }
          if (cnt[c] < 0) {
            cnt[c] = 5;
          }
          $("#ban_ul")
            .eq(c)
            .stop()
            .animate({ left: -slideW * cnt[c] }, 0);
        }
      );
  }

  function nextCountFn() {
    cnt[c]++;
    footerSlideFn();
  }

  function prevCountFn() {
    cnt[c]--;
    footerSlideFn();
  }
});
