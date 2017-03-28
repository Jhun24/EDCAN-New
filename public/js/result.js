/**
 * Created by janghunlee on 2017. 2. 28..
 */


$(".list").click(function(){
    $(this).addClass("dataClick");
    $(".content-list").removeClass("none")

    $(".stat").removeClass("dataClick");
    $(".status").addClass("none");
});

$(".stat").click(function(){
    $(this).addClass("dataClick");
    $(".status").removeClass("none")
    $(".list").removeClass("dataClick");
    $(".content-list").addClass("none")
});

$(document).ready(function(){
    $.ajax({
        method:"POST",
        url:"https://iwin247.kr",
        data:{"pass":"h0t$ix"},
        success:function(data){
            console.log(data);


        },
        error:function(){
            alert("server error");
        }
    })
})