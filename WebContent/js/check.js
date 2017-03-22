
$(document).ready(function() { 
            var cur_year=new Date().getFullYear();
            var obj=document.getElementById("year");         
            for (var i = 1980; i <= 2008; i++)     {                
                opt = document.createElement("option");
                opt.value = i;
                opt.text=i;
                obj.appendChild(opt);
            }
});

$(document).ready( function() { 
    var cur_year=new Date().getFullYear();
    var obj=document.getElementById("month");         
    for (var i = 1; i <= 12; i++)     {                
        opt = document.createElement("option");
        opt.value = i;
        opt.text=i;
        obj.appendChild(opt);
    }
});

$(document).ready( function() { 
    var cur_year=new Date().getFullYear();
    var obj=document.getElementById("day");         
    for (var i = 1; i <= 31; i++)     {                
        opt = document.createElement("option");
        opt.value = i;
        opt.text=i;
        obj.appendChild(opt);
    }
});
function chkValidEmail() {      
    var email = document.getElementsByName('myemail')[0].value;
    console.log(email);
    var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
        if(exptext.test(email)==false){
        	document.getElementById("result1").innerText = "잘못된 이메일 형식입니다."
        }else if(email==""){
        	document.getElementById("result1").innerText = "준비중"
        }else{
        	document.getElementById("result1").innerText = "OK"
        	console.log("체크")
            chkEmail();
        }
}


function passleng(){
	 var password = document.getElementsByName('passwd1')[0].value;
	 console.log(password.length)
	 if(password.length <6 ){
			document.getElementById("result2").innerText = "너무 짧습니다."
	 } else {
			document.getElementById("result2").innerText = "OK"
	 }
}
function passConfirm(){
	 var password1 = document.getElementsByName('passwd1')[0].value;
	 var password = document.getElementsByName('passwd')[0].value;
	 if(password == password1){
			document.getElementById("result3").innerText = "비밀번호가 일치"
		 } else {
			document.getElementById("result3").innerText = "비밀번호 불일치"
		 }
}


function chkEmail(){
    var chk=false;
    if(document.getElementsByName('myemail')[0].value != ''){
        var userEmail = $("#userEmail").val();
        $.ajax({ 
               url: "emailChk.or", 
               type: "POST",
               data: {"userEmail" : userEmail},
               dataType:"text",
               cache: false,
               success: function(result){
                   if(result!="0") {
                       alert("The email is duplicated.");
                       return;
                   }else{
                       submitOn();
                   }
               }
        });
    }
}
