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

   $(".name-text").text(decodeURIComponent(data[1]));
   $(".phone").text(decodeURIComponent(data[4]))
   $(".email").text(decodeURIComponent(data[6]));
})

$(".send").click(function(){
    var self = $(".self").val();
    var dong = $(".dong").val();
    var master = $(".master").val();

    var name = decodeURIComponent(data[1]);
    var phone = decodeURIComponent(data[4]);
    var email = decodeURIComponent(data[6]);
    var num = decodeURIComponent(data[3]);

    var gender = decodeURIComponent(data[2]);
    var depar = decodeURIComponent(data[5]);

    var rd = $(".rd").is(":checked")



    if(rd == true) {
        if (self != "" && dong != "" && master != "" && name != "" && phone != "" && email != "" && num != "" && gender != "" && depar != "") {
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

    var name = decodeURIComponent(data[1]);
    var phone = decodeURIComponent(data[4]);
    var email = decodeURIComponent(data[6]);
    var num = decodeURIComponent(data[3]);

    var gender = decodeURIComponent(data[2]);
    var depar = decodeURIComponent(data[5]);

    var file = null;

    var rd = $(".rd").is(":checked")



    if(rd == true) {
        if (self != "" && dong != "" && master != "" && name != "" && phone != "" && email != "" && num != "" && gender != "" && depar != "") {
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