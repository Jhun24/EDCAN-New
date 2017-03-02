/**
 * Created by janghunlee on 2017. 3. 2..
 */

var margin = 0;

var clickNum  = 0;

var date = new Date();

var day = 15 - date.getDate()+1;

var hour = 12 -date.getHours();
var min = 60 -date.getMinutes();
var sec = 60 - date.getSeconds();

function time(){
    sec--;
    if(hour < 0){
        hour = 23;
        day--;
    }

    if(sec == 0){
        min --;
        sec = 60;
        if(min == 0){
            hour --;
            min = 59;

            if(hour == 0){
                day --;
                hour = 23;
            }
            else{
                $(".big").text(day+"일 "+hour+":"+min+":"+sec);
            }
        }
        else{
            $(".big").text(day+"일 "+hour+":"+min+":"+sec);
        }

    }
    else{
        $(".big").text(day+"일 "+hour+":"+min+":"+sec);
    }


}

setInterval(time,900);
setInterval(responsive,1000);

$(".left-btn").click(function(){
    if(clickNum == 0){

    }
    else{
        clickNum--;
        margin = margin + 100;
        $(".img-slide").animate({"margin-left":margin+"%"},1000);
    }
})

$(".right-btn").click(function(){
    if(clickNum == 4){

    }
    else{
        clickNum++;
        margin = margin - 100;
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