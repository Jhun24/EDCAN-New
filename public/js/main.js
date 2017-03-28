/**
 * Created by janghunlee on 2017. 2. 27..
 */
var filter = "win16|win32|win64|mac|macintel";
/*$(".apply").click(function(){
    location.href="explain"
})*/


$(document).ready(function(){
		
if(filter.indexOf(navigator.platform.toLowerCase()) == -1){
	document.body.style.height = (document.documentElement.clientHeight + 5)+ 'px';
	$(".apply").click(function(){location.href="explain"});
	$(".main").click(function(){location.href="http://edcan.kr"});
}
else{
//	$(".apply").click(function(){
//	location.href="explain"
//	})
//	$(".main").click(function(){
//	location.href="http://edcan.kr"
//	})

}

})
