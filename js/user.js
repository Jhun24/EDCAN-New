/**
 * Created by janghunlee on 2017. 2. 27..
 */

$(".check-box").click(function() {
    var text = $(this).text();

    if (text == "남자") {
        $(this).addClass("boy");
        $(".check-box").removeClass("girl");
    }

    else if (text == "여자") {
        $(this).addClass("girl");
        $(".check-box").removeClass("boy");
    }

    else if (text == "소프트웨어과") {
        $(this).addClass("soft");
        $(".check-box").removeClass("multi");
    }

    else if (text == "멀티미디어과") {
        $(this).addClass("multi");
        $(".check-box").removeClass("soft");
    }
})