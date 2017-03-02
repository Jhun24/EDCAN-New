/**
 * Created by janghunlee on 2017. 2. 27..
 */

$(".footer").hover(
    function(){

        $(this).css({
            "backgroundColor":"rgba(0,0,0,0.5)"
        })
    },
    function(){
        $(this).css({
            "background-color":"transparent"
        })
    }
)

$(".apply").click(function(){
    location.href="explain"
})

$(".main").click(function(){
    location.href="https://edcan.kr"
})