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
        sex = "남자";
    }

    else if (text == "여자") {
        $(this).addClass("girl");
        $(".check-box").removeClass("boy");
        sex= "여자";
    }

    else if (text == "소프트웨어과") {
        $(this).addClass("soft");
        $(".check-box").removeClass("multi");
        type="소프트웨어과";
    }

    else if (text == "멀티미디어과") {
        $(this).addClass("multi");
        $(".check-box").removeClass("soft");
        type="멀티미디어과";
    }
})

$(".end-box").click(function(){
    var name = $(".name").val();
    var num = $(".num").val();
    var phone = $(".phone").val();
    var email = $(".email").val();

    if(name != "" && num != "" && phone != "" && email != ""){
        $.ajax({
            method:"POST",
            url:"https://iwin247.kr/user",
            data:{"name":name,"School_Num":num,"Phone_Num":phone,"gender":sex,"email":email,"Department":type},
            success:function(data){
                location.href="ask.html"
            },
            error:function(){
                alert("server error")
            }
        })
    }
    else{
        alert("전부 기입해주세요")
    }

})