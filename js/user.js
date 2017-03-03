/**
 * Created by janghunlee on 2017. 2. 27..
 */
var sex = "";
var type = "";


$(".check-box").click(function() {
    var text = $(this).text();

    if (text == "남자") {
        $(this).addClass("boy");
        $(".check-box").removeClass("girl");
        sex = "b";
    }

    else if (text == "여자") {
        $(this).addClass("girl");
        $(".check-box").removeClass("boy");
        sex= "g";
    }

    else if (text == "소프트웨어과") {
        $(this).addClass("soft");
        $(".check-box").removeClass("multi");
        type="s";
    }

    else if (text == "멀티미디어과") {
        $(this).addClass("multi");
        $(".check-box").removeClass("soft");
        type="m";
    }
})

$(".end-box").click(function(){
    var name = $(".name").val();
    var num = $(".num").val();
    var phone = $(".phone").val();
    var email = $(".email").val();

    if(name != null && num != null && phone != null && email != null){
        location.href="ask?"+name+"?"+sex+"?"+num+"?"+phone+"?"+type+"?"+email;
    }
    else{
        alert("전부 기입해주세요")
    }

})