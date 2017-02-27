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