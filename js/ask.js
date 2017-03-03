/**
 * Created by janghunlee on 2017. 3. 2..
 */


$(document).ready(function(){
    $.ajax({
        method:"POST",
        url:"https://iwin247.kr/ask",
        success:function(data){
            var name;
            var stNum;
            var pNum;
            var email;
            var sex;
            var depar;


            name = data["name"];
            stNum = data["Student_Num"];
            pNum = data["Phone_Num"];
            email = data["email"];
            sex = data["gender"];
            depar = data["Department"];

            $(".name-text").text(name);
            $(".email").text(email);
            $(".phone").text(pNum);
        },
        error:function(){
            alert("server error")
        }
    })
})

$(".send").click(function(){
    var self = $(".self").val();
    var dong = $(".dong").val();
    var master = $(".master").val();

    var rd = $(".rd").is(":checked")



    if(rd == true) {
        if (self != "" && dong != "" && master != "" && name != "" && phone != "" && email != "" && num != "" && sex != "" && depar != "") {
            $.ajax({
                method:"POST",
                url:"https://iwin247.kr/apply",
                data:{"name":name,"Student_Num":stNum,"Phone_Num":pNum,"email":email,"gender":gender,"Department":depar,"introduce":self,"why_edcan":dong,"what_can_u_do":master,"portfolio":"false"},
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
    var file = null;

    var rd = $(".rd").is(":checked")



    if(rd == true) {
        if (self != "" && dong != "" && master != "" && name != "" && phone != "" && email != "" && num != "" && sex != "" && depar != "") {
            $.ajax({
                method:"POST",
                url:"https://iwin247.kr/apply",
                data:{"name":name,"Student_Num":stNum,"Phone_Num":pNum,"email":email,"gender":sex,"Department":depar,"introduce":self,"why_edcan":dong,"what_can_u_do":master,"portfolio":"true"},
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