/**
 * Created by janghunlee on 2017. 2. 27..
 */
var sex = "";
var type = "";

var date = new Date();
var day = 15 - date.getDate();

var hour = 12 - date.getHours();
var min = 60 - date.getMinutes();
var sec = 60 - date.getSeconds();

setInterval(time,1000);

function time(){
    sec--;
    if(hour < 0){
        hour = 23+hour;
        day--;
    }

    if(sec == 0){
        min --;
        sec = 59;
        if(min == 0){
            hour --;
            min = 59;

            if(hour == 0){
                day --;
                hour = 23;
   		        
	 }
        }
    }

    if(0 > day){
    	alert("모집기간이 끝났습니다");
   }
}

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
	$(".check-box").removeClass("tech");
        type="소프트웨어과";
    }

    else if (text == "멀티미디어과") {
        $(this).addClass("multi");
        $(".check-box").removeClass("soft");
	$(".check-box").removeClass("tech");
        type="멀티미디어과";
    }
    else if(text == "테크노경영과"){
    	$(this).addClass("tech")
	$(".check-box").removeClass("soft")
	$(".check-box").removeClass("multi");
	type="테크노경영과";
    }
})

$(".end-box").click(function(){
    var name = $(".name").val();
    var num = $(".num").val();
    var phone = $(".phone").val();
    var email = $(".email").val();
    let checkType = 0;    
console.log(checkP() + " " + checkS() + " " + checkN());    
if(checkP() !=  4){
	alert("전화번호를 정확히 기입해주세요")
	$(".phone").val(null);
	checkType++;
 }
if(checkS() != 4){
	alert("학번을 정확히 기입해주세요")
	$(".num").val(null);
	checkType++;
} 
if(checkN() != 0){
	alert("이름을 정확히 기입해주세요")
	$(".name").val(null)
	checkType++;
}
	
    if(checkType != 0){
	
	}
else{
    if( name != "" && num != "" && phone != "" && email != ""){
        $.ajax({
            method:"POST",
            url:"https://iwin247.kr/user",
            data:{"name":name,"Student_Num":num,"Phone_Num":phone,"gender":sex,"email":email,"Department":type},
            success:function(data){
                location.href="ask"
            },
            error:function(){
                alert("server error")
            }
        })
    }
    else{
        alert("전부 기입해주세요")
    }
}
})
function checkP() {
    var ch = $(".phone").val()
    var n;
    //숫자
    if (ch >= 48 && ch <= 57 )
       return 1;


    else if ((ch>=65 && ch<=90) || (ch>=97 && ch<=122))
        return 2;

    else if ((ch>=33 && ch<=47) || (ch>=58 && ch<=64)
        || (ch>=91 && ch<=96) || (ch>=123 && ch<=126))
       return 3;
    else if ((ch >= 12592) || (ch <= 12687))
         return 4
    else
       return 0;
}

function checkS() {
    var sc = $(".num").val()
    var scn;
    //숫자
    if (sc >= 48 && sc <= 57 )
        return 1;


    else if ((sc>=65 && sc<=90) || (sc>=97 && sc<=122))
        return 2;

    else if ((sc>=33 && sc<=47) || (sc>=58 && sc<=64)
        || (sc>=91 && sc<=96) || (sc>=123 && sc<=126))
        return 3;
    else if ((sc >= 12592) || (sc <= 12687))
        return 4
    else
        return 0;
}

function checkN() {
    var na = $(".name").val()
    var d;
    //숫자
    if (na >= 48 && na <= 57 )
        return 1 
    else if ((na>=65 && na<=90) || (na>=97 && na<=122))
        return 2 

    else if ((na>=33 && na<=47) || (na>=58 && na<=64)
        || (na>=91 && na<=96) || (na>=123 && na<=126))
        return 3
    else if ((na >= 12592) || (na <= 12687))
        return 4
    else
       	return 0
}


