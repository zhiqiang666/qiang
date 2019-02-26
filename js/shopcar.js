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
//-------------------------------------原生轮播图
// 自动播放
// let timer = null;
// let currIndex = 0;
// function autoPlay(){
//     if(timer!=null){
//         return;
//     }
//     timer = setInterval(function(){
//         let outIndex = currIndex;
//         currIndex+=1;
//         if(currIndex>=2){
//             currIndex=0;
//         }
//         showImg(outIndex,currIndex);
//     },4000);
// }
// function fadeInout(domObjOut,timelong,domObjIn,func){
//     var startValue = 1;
// 	var endValue = 0;
// 	var direction = -1;
//     var timeSpace = 10;
//     var step =  Math.abs((startValue-endValue)/(timelong/timeSpace));
//     var value=startValue;
//     let timer = setInterval(function(){
//         value += direction*step;
//         if(direction>0?value>=endValue:value<=endValue){
//             value=endValue;
//             window.clearInterval(timer);
//             func&&func();
//         }
//         domObjOut.style.opacity = value;
//         domObjIn.style.opacity = (1-value);
//     },timeSpace);
// }
// function fadeInOut(domObjOut,timeLong,domObjIn,func){
// 	var startValue = 1;
// 	var endValue = 0;
// 	var direction = -1;
// 	var timeSpace = 10;
// 	//计算步数	步长= 距离/总步数;  总步数 = 时长/时间间隔
// 	var step = Math.abs((startValue-endValue)/(timeLong/timeSpace));
// 	var value = startValue;
// 	var timer = setInterval(function(){
// 		//数据处理 
// 		//改变值
// 		value = value + direction * step
// 		//边界处理
// 		if(direction>0 ? value>=endValue : value<=endValue){
// 			value = endValue;
// 			window.clearInterval(timer);
// 			// 逻辑短路
// 			func&&func();
// 		}
// 		// 改变外观
// 		domObjOut.style.opacity = value;
// 		domObjIn.style.opacity = (1-value);
// 	},timeSpace);
// }
// function showImg(outOrd,inOrd){
//     if(outOrd == inOrd){
//         return;
//     }
//     let imgDom = document.getElementById("banner_img").children;
//     fadeInout(imgDom[outOrd],1000,imgDom[inOrd]);
//     let liDom = document.getElementById("cirBox").children;
//     for(let i = 0;i<liDom.length;i++){
//         liDom[i].style.backgroundColor = "gray";
//     }
//      liDom[inOrd].style.backgroundColor = "pink";
// }
// function goImg(index){
//     let outIndex = currIndex;
//     currIndex = index;
//     if(currIndex>=2 || currIndex<0){
// 		currIndex = 0;
//     }
//     showImg(outIndex,currIndex);
// }
// function stopPlay(){
//     window.clearInterval(timer);
//     timer=null;
// }
// window.onload=function(){
//     autoPlay();
//     document.getElementById("banner_img").onmousemove=function(){
//         stopPlay();
//     }
//     document.getElementById("banner_img").onmouseout=function(){
//         autoPlay();
//     }
//     let liDom = document.getElementById("cirBox").children;
// 	for(var i = 0;i<liDom.length;i++){
// 		liDom[i].setAttribute("index",i);
// 		liDom[i].onclick = function(event){
// 			let evt = event || window.event;
// 			goImg(this.getAttribute("index"));
// 			evt.stopPropagation();
// 		}
// 	}
// }
// window.onblur=function(){
//     stopPlay();
// }
// window.onfocus=function(){
//     autoPlay();
// }

//-------------------------
function timer(){
    var sd = new Date();
    var now = sd.getTime();
    var str= "2019/2/28/ 00:00:00";
    var del = new Date(str);
    var yu = del.getTime();
    var time = yu - now;
    var h,m,s;
    if(time>0){
		h = Math.floor(time/1000/60/60);
		m = Math.floor(time/1000/60%60);
		s = Math.floor(time/1000%60);
    }
    $(".count-down span:nth-child(1)").html(h);
    $(".count-down span:nth-child(3)").html(m);
    $(".count-down span:nth-child(5)").html(s);
}
$(function(){
    setInterval(timer,1000);
})
// $(".right-btn").click(function(){
//     $(this).parent().find('.today-banner-2').css('left','0px');
// })
// $(".left-btn").click(function(){
//     $(this).parent().find('.today-banner-1').css('left','0px');
//     $(this).parent().find('.today-banner-2').css('left','-960px');
// })
// function autoMove(tag){.
// for(let i = 0;i<3;i++){
console.log($('.banner-lunbo').eq(0).length);
// }
    function autoMove(){
    function initMove(index){
        for(let i = 0;i<$('.banner-lunbo').length;i++){
            $('.banner-lunbo').eq(i).css('left','-960px');
            // $('.banner-lunbo').eq(i).animate({left:'960px'},'slow');
        }
        // $('.banner-lunbo').eq(index).css('left','0px');
        $('.banner-lunbo').eq(index).animate({left:'0px'},"slow");
    }
    initMove(0);
    var count = 1;
    function fMove(){
        if(count==$('.banner-lunbo').length){
            count=0;
        }
        initMove(count);
        count++;
    }
     var scollMove = setInterval(fMove,3000);
     $(".left-btn").click(function(){
         clearInterval(scollMove);
         if(count==0){
             count=$(".banner-lunbo").length;
         }
         count--;
         initMove(count);
         scollMove = setInterval(fMove,3000);
     });
     $('.right-btn').click(function(){
         clearInterval(scollMove);
         fMove();
         scollMove = setInterval(fMove,3000);
     })
}

$(function(){
    autoMove();  
})