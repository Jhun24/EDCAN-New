/**
 * Created by janghunlee on 2017. 3. 2..
 */

var data;

$(".send").click(function() {
    // location.href = "finish"
})

$(document).ready(function(){
    var url = location.href;

    data = url.split("?");

   $(".name-text").text(data[1]);
   $(".phone").text(data[4])
   $(".email").text(data[6]);
})

$(".send").click(function(){
    var self = $(".self").val();
    var dong = $(".dong").val();
    var master = $(".master").val();

    var name = data[1];
    var phone = data[4];
    var email = data[6];
    var num = data[3];

    var gender = data[2];
    var depar = data[5];

    var file = null;

    var rd = $(".rd").is(":checked")



    if(rd == true) {
        if (self != null && dong != null && master != null && name != null && phone != null && email != null && num != null && gender != null && depar != null) {
            $.ajax({
                method:"POST",
                url:"http://apply.edcan.xyz/apply",
                data:{"name":name,"Student_Num":num,"Phone_Num":phone,"email":email,"gender":gender,"Department":depar,"introduce":self,"why_edcan":dong,"what_can_u_do":master,"portfolio":"false"},
                success:function(data){
                    location.href="finish"
                },
                error:function(){
                    alert("server error")
                }
            })
        }
        else {
            alert("전부 기입해주세요요")

        }
    }
    else{
        alert("지원서 제출에 동의해주세요")
    }
})


$(".preview").click(function(){
    var self = $(".self").val();
    var dong = $(".dong").val();
    var master = $(".master").val();

    var name = data[1];
    var phone = data[4];
    var email = data[6];
    var num = data[3];

    var gender = data[2];
    var depar = data[5];

    var file = null;

    var rd = $(".rd").is(":checked")



    if(rd == true) {
        if (self != null && dong != null && master != null && name != null && phone != null && email != null && num != null && gender != null && depar != null) {
            $.ajax({
                method:"POST",
                url:"http://apply.edcan.xyz/apply",
                data:{"name":name,"Student_Num":num,"Phone_Num":phone,"email":email,"gender":gender,"Department":depar,"introduce":self,"why_edcan":dong,"what_can_u_do":master,"portfolio":"true"},
                success:function(data){
                    location.href="http://iwin247.kr:8087"
                },
                error:function(){
                    alert("server error")
                }
            })
        }
        else {
            alert("전부 기입해주세요")

        }
    }
    else{
        alert("지원서 제출에 동의해주세요")
    }
})