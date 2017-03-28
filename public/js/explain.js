/**
 * Created by janghunlee on 2017. 3. 2..
 */

var margin = 0;

var clickNum  = 0;

var date = new Date();

var day = 15 - date.getDate();

var hour = 12 -date.getHours();
var min = 60 -date.getMinutes();
var sec = 60 - date.getSeconds();

var filter = "win16|win32|win64|macintel|mac";

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

    if(navigator.platform){

        if(-1 !=  filter.indexOf(navigator.platform.toLowerCase())){
            var w = window.innerWidth;
            if(w < 1000){
                $(".explain-header").css({"font-size":"20px"})
                $(".explain-info").css({"font-size":"15px"})
                $(".big").css({"font-size":"20px"})
                $(".logo-text").css({"font-size":"30px"})

            }
        }else{
	  	
		
        }
    }
	if(day < 0){
		alert("모집기간이 끝났습니다");
	}
    $(".big").text(day+"일 "+hour+":"+min+":"+sec);

}

setInterval(time,900);
setInterval(responsive,100);
setInterval(animation,3000);

$(".left-btn").click(function(){
    if(clickNum == 0){
        clickNum = 4;
        margin = -80;
        $(".img-slide").animate({"margin-left":margin+"%"},1000);
    }
    else{
        clickNum--;
        margin = margin +20;
        $(".img-slide").animate({"margin-left":margin+"%"},1000);
    }
})

$(".right-btn").click(function(){
    if(clickNum == 4){
        clickNum = 0;
        margin = 0;
        $(".img-slide").animate({"margin-left":margin+"%"},1000);

    }
    else{
        clickNum++;
        margin = margin -20;
        $(".img-slide").animate({"margin-left":margin+"%"},1000);
    }
})


function responsive(){
    var width = window.innerWidth;
    if(width < 1000){
        $(".img-atelier").addClass("atelier");
        $(".img-edlabs").addClass("edlabs");
        $(".img-edresearch").addClass("edresearch");
        $(".img-pixel").addClass("pixel");
        $(".img-tech-io").addClass("techio");
    }
    else{
        $(".img-atelier").removeClass("atelier");
        $(".img-edlabs").removeClass("edlabs");
        $(".img-edresearch").removeClass("edresearch");
        $(".img-pixel").removeClass("pixel");
        $(".img-tech-io").removeClass("techio");
    }
}

function animation(){
    if(clickNum == 4){
        clickNum = 0;
        margin = 0;
        $(".img-slide").animate({"margin-left":margin+"%"},1000);

    }
    else{
        clickNum++;
        if(-1 != filter.indexOf(navigator.platform.toLowerCase())){
	if(window.innerWidth > 1000){
	

	margin = margin - 20;
        $(".img-slide").animate({"margin-left":margin+"%"},1000);
   	}
	else{
	let trash = margin % 100;
	margin = margin - trash - 100;
	$(".img-slide").animate({"margin-left":margin+"%"},1000);	
	}
	}
	else{
	
	margin = margin-100;
	$(".img-slide").animate({"margin-left":margin+"%"},1000);
	}
	}
}

$(".explain-logo").click(function(){
    location.href="access"

})
