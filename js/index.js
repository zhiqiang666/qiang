// 顶部居顶
$(function(){
    $(".roll_top").hide();
    $(window).scroll(function(){
        if($(document).scrollTop()>=200){
            $(".roll_top").addClass("fixnav").slideDown();
        }else{
            $(".roll_top").hide();
        }
    })
})
//二级菜单效果
$(function(){
    $(".nav_about").hover(function(){
        // $(".two_about").css("display","block");
        $(".two_about").fadeIn("slow");
        // $(".two_about").slideDown("100");
    },function(){
        $(".two_about").css("display","none");
    });
})
//获得cookie
$(function(){
    let i = getCookie("userphone");
    if(i==null){
        $(".login-detalis").html("<a href=login.html>登录</a>");
    }else{
    $(".login-detalis").html("<a href=gaoxiao.html>"+i+"</a>");
    }
})

function getCookie(key){
    var str = unescape(document.cookie);
    var arr = str.split(";");
    for(let i in arr){
        if(arr[i].indexOf(key+"=")==0){
            return arr[i].split("=")[1];
        }
    }
    return null;
}
// ----------------------------------------------------下拉加载更多-------------------------------------------------------
// 获得滚动条当前的位置
function getScrollTop() {
        var scrollTop = 0;
        if(document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if(document.body) {
            scrollTop = document.body.scrollTop;
        }
        return( scrollTop);
}
//获得当前可视范围的高度
function getClientHeight(){
    var clientHeight = 0;
    if(document.body.clientHeight && document.documentElement.clientHeight){
        clientHeight = Math.min(document.body.clientHeight,document.documentElement.clientHeight);
    }else{
        clientHeight = Math.max(document.body.clientHeight,document.documentElement.clientHeight);
    }
    return(clientHeight);
}
//获取文档完整的高度
function getScrollHeight(){
    return( Math.max(document.body.scrollHeight,document.documentElement.scrollHeight));
}
//滚动事件触发
window.onscroll = function() {
                 if(getScrollTop() + getClientHeight() >= getScrollHeight()-100) {
                     var s = document.getElementById("more_item");
                     s.style.display="block";
                     var s = document.getElementById("more_item2");
                     s.style.display="block";
                     var s = document.getElementById("more_item3");
                     s.style.display="block";
                 }
             }