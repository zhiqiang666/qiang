$(function(){
    $(".section_right").click(function(){
        // $(".section_left").attr("class","phonelogin");
        $(".user_login").addClass("add_font_black");
        $(".phone_login").addClass("add_font_red");
        $(".section_login_userpass").hide();
        $(".add_phone_login").fadeIn();
    });
    $(".section_left").click(function(){
        $(".user_login").removeClass("add_font_black");
        $(".phone_login").removeClass("add_font_red");
        // $(".section_login_userpass").show();
        $(".add_phone_login").hide();
        $(".section_login_userpass").fadeIn();
    });
    $(".section_login_submit").click(function(){
        $.get("login.php",{phone:$("#username").val(),password:$("#password").val()},function(data){
            if(data==1){
                saveCookie("userphone",$("#username").val(),7);
                // saveCookie("password",$("#password").val(),7)
                alert("登录成功！");
                location.href="index.html";
            }else if(data==0){
                alert("登录失败！");
            }else{
                alert(data);
            }
        });
    });
})
function saveCookie(key,value,dayCount){
	var d = new Date();
	d.setDate(d.getDate()+dayCount);
	document.cookie = key+'='+escape(value)+';expires='+d.toGMTString();
}