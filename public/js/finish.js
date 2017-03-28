/**
 * Created by janghunlee on 2017. 3. 2..
 */

var time = 0;

var date = new Date();

// var day = date.getDay();

var day = 15 - date.getDate();

var hour = 12 -date.getHours();
var min = 60 -date.getMinutes();
var sec = 60 - date.getSeconds();

console.log(day)
console.log(hour)
setInterval(check,1000);

setInterval(animation,1000);

function animation(){
    time++;
    if(time == 4){
        $(".thanks").animate({"margin-top":"-50%"},1000);

    }
    else if(time == 5){
        $(".thanks").css({"display":"none"});
    }
}

function check(){
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
                else{
                    $(".timer").text(day+"일 "+hour+":"+min+":"+sec+" 남았습니다");
                }
            }
            else{
                $(".timer").text(day+"일 "+hour+":"+min+":"+sec+" 남았습니다");
            }

        }
        else{
            $(".timer").text(day+"일 "+hour+":"+min+":"+sec+" 남았습니다");
        }
}