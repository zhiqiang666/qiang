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
//动态创建
function ajaxTool(obj){
    let defaultObj = {
        "method":"get",
        "url":"#",
        "param":"",
        "isAsync":true,
        "func":null
    }
    for(let key in defaultObj){
        if(!obj[key]){
            obj[key]=defaultObj[key];
        }
    }
    let xhr = new XMLHttpRequest();
    let urlAndParam = obj.url;
    if(obj.method.toLowerCase()=="get"){
        urlAndParam+="?"+obj.param;
    }
    xhr.open(obj.method,urlAndParam,obj.isAsync);
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            obj.func&&obj.func(xhr.responseText);
        }
    }
    if(obj.method.toLowerCase()=="post"){
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xhr.send(param);
    }else{
        xhr.send();
    }
}
function showDate(str){
    let objs = JSON.parse(str);
    let htmlStr = "";
    for(let i in objs){
        htmlStr += `
                <div class="section-list-show">
                            <div class="section-list-details">
                                <a href="goodsdetails.html?goodsId=${objs[i].goodsId}" class="list-top"><img src="${objs[i].goodsImg}" alt=""></a>
                                <a href="">
                                <span class="list-top-sim">找相似</span>
                                    <p class="list-content">${objs[i].goodsDesc}</p>
                                    <div class="list-content-price">
                                        <span>￥${objs[i].goodsPrice}</span>
                                        <span>￥${objs[i].beiyong1}</span>
                                        <span><img src="https://s18.mogucdn.com/p2/160908/upload_27g4f1ch6akie83hacb676j622b9l_32x30.png" alt="">${objs[i].beiyong2}</span>
                                    </div>
                                </a>
                            </div>
                        </div>`;
    }
    document.getElementById("list-show").innerHTML = htmlStr;
}
window.onload=function(){
    ajaxTool({
        "url":"php/getGoodsList.php",
        "func":showDate
    });
}