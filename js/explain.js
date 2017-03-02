/**
 * Created by janghunlee on 2017. 3. 2..
 */

var margin = 0;

var clickNum  = 0;

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