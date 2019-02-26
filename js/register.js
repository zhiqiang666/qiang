function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}

// 密码强度
var pwd=document.getElementById("password");
var strengthLevel=document.getElementById("strengthLevel");
pwd.onkeyup=function(){
    strengthLevel.className="strengthLv"+(this.value.length>=6?getLvl(this.value):0);
}
function getLvl(pwd){
    var lvl = 0;
    if(/[0-9]/.test(pwd)){
        lvl++;
    }
    if(/[a-zA-Z]/.test(pwd)){
        lvl++;
    }
    if(/[^0-9a-zA-z]/.test(pwd)){
        lvl++;
    }
    return lvl;
}
//注册
$("#btnReg").onclick = function(){
    //1、创建对象
    let xhr =new XMLHttpRequest();

    //2、设置请求参数
    xhr.open("post","php/register.php",true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText=="1"){
                console.log("失败");
            }else{
                location.href="login.html";
            }
        }
    }
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    let str = `textphone=${$("#textphone").value}&username=${$("#textname").value}&password=${$("#password").value}&email=${$("#textemail").value}`;
    xhr.send(str);
}

$("#textphone").onblur = function(){
    let xhr = new XMLHttpRequest();
    xhr.open("get","login0.php?phone="+this.value,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText=="0"){
                $("#phone_span").innerHTML="用户名已被注册";
                $("#phone_span").style.color = "red";
            }else{
                $("#phone_span").innerHTML="用户名正确";
            }
        }
    }
    xhr.send();
}
