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
            data:{"name":name,"S_Num":num,"Phone_Num":phone,"gender":sex,"email":email,"Department":type},
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
function checkP() {
    var ch = $(".phone").val()
    var n;
    //숫자
    if (ch >= 48 && ch <= 57 )
        n = 1;


    else if ((ch>=65 && ch<=90) || (ch>=97 && ch<=122))
        n = 2;

    else if ((ch>=33 && ch<=47) || (ch>=58 && ch<=64)
        || (ch>=91 && ch<=96) || (ch>=123 && ch<=126))
        n = 3;
    else if ((ch >= 12592) || (ch <= 12687))
         n = 4
    else
        n =  0;


    if(n !=  1){
        $(".phone").val(" ")
    }
}

function checkS() {
    var sc = $(".num").val()
    var scn;
    //숫자
    if (sc >= 48 && sc <= 57 )
        scn = 1;


    else if ((sc>=65 && sc<=90) || (sc>=97 && sc<=122))
        scn = 2;

    else if ((sc>=33 && sc<=47) || (sc>=58 && sc<=64)
        || (sc>=91 && sc<=96) || (sc>=123 && sc<=126))
        scn = 3;
    else if ((sc >= 12592) || (sc <= 12687))
        scn = 4
    else
        scn =  0;


    if(sc !=  1){
        $(".num").val(" ")
    }
}

function checkN() {
    var na = $(".name").val()
    var d;
    //숫자
    if (na >= 48 && na <= 57 )
        d = 1;



    else if ((na>=65 && na<=90) || (na>=97 && na<=122))
        d = 2

    else if ((na>=33 && na<=47) || (na>=58 && na<=64)
        || (na>=91 && na<=96) || (na>=123 && na<=126))
        d = 3;
    else if ((na >= 12592) || (na <= 12687))
        d = 4
    else
        d =  2;


    if(d !=  2){
        $(".name").val(" ")
    }
}


setInterval(checkN,5000);
setInterval(checkP,5000);
setInterval(checkS,5000)


