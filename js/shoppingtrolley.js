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

$(function(){
    $("#car-all").on('click', function() {
        $("body input:checkbox").prop("checked", $(this).prop('checked'));
    });
    $("#all-pay-c").on('click', function() {
        $("body input:checkbox").prop("checked", $(this).prop('checked'));
    });
    if($('.goods-item-one input:checkbox').prop('checked',true)){
        $("body input:checkbox").prop("checked", false);
    }else{
        $("body input:checkbox").prop("checked", true);
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
$(function(){
    let i = getCookie("userphone");
    if(i==null){
        $(".login-detalis").html("<a href=login.html>登录</a>");
    }else{
    $(".login-detalis").html("<a href=gaoxiao.html>"+i+"</a>");
    }
});


var phone = getCookie("userphone");
// console.log(phone);
$(function(){
    $.ajax({
        type:'get',
        url:"php/getShoppingCart.php",
        dataType:'json',
        data:{vipName:phone},
        success:function(objs){
            let htmlStr = "";
            for(let i in objs){
                $(".all-goods").html(++i);
            }
            for(let i in objs){
                htmlStr +=`
                <div class="section-car-goods">
                    <ul class="goods-details">
                        <li class="goods-item-one"><input type="checkbox"></li>
                        <li class="goods-item-two">
                            <a href=""><img src="${objs[i].goodsImg}" alt=""> </a>
                            <a href="">${objs[i].goodsDesc}</a>
                            <p><span>老板热推畅销</span></p>
                        </li>
                        <li class="goods-item-there">
                            <p>颜色:白色衣摆字母款</p>
                            <p>尺码均码</p>
                        </li>
                        <li class="goods-item-four">
                            <p>${objs[i].goodsPrice}</p>
                            <p>${objs[i].beiyong3}</p>
                            <p>拼团价</p>
                        </li>
                        <li class="goods-item-five">
                            <div class="box-count">
                                <span class="count-reduce"></span>
                                <input type="text" value="1" class="count-input">
                                <span class="count-add"></span>
                                <div style="display: none;" class="hidden-goodsId">${objs[i].goodsId}</div>
                            </div>
                        </li>
                        <li class="goods-item-six">
                            <p>${objs[i].beiyong3}</p>
                        </li>
                        <li class="goods-item-seven"><a href="javascript:;">删除</a></li>
                    </ul>
                </div>
                    `;
            }
            $(".section-car-body").html(htmlStr);
            $(".goods-item-seven").click(function(){
                id = $(this).prev().prev().find("div").html();
                $.ajax({
                    type:'get',
                    url:'php/deleteGoods.php',
                    dataType:'json',
                    data:{vipName:phone,goodsId:$('.hidden-goodsId').html()},
                    success:function(data){
                        if(data==1){
                            alert("删除成功");
                        }else{
                            alert("删除失败");
                        }
                    }
                })
                $(this).parent().parent().remove();
            });
            var zong = 0;
            for(let i = 0;i<$('.section-car-goods').length;i++){
            let num = $('.section-car-goods ul li:nth-child(6)').eq(i).find('p').html();
            zong = parseInt(zong) + parseInt(num);
            }  
            $('#all-price').html(zong);

            $('.count-add').click(function(){
                let i = $(this).parent().find("input").val();
                ++i;
                let add = $(this).parent().find("input").val(i);
                //  let addPrice = $(this).parent().parent().next().find('p').html();
                let ad = $(this).parent().parent().prev().find('p:nth-child(2)').html();
                let sum = $(this).parent().find('input').val() * ad;
                 $(this).parent().parent().next().find('p').html(sum);
                    $('#all-price').html(zong+=parseInt(ad));
                    $.ajax({
                        type:'get',
                        url:'php/updateGoodsCount.php',
                        async:true,
                        dataType:'json',
                        data:{vipName:phone,goodsId:$('.hidden-goodsId').html(),goodsCount:$('.count-input').val()},
                        success:function(data){
                            if(data==1){
                                console.log('增加成功');
                            }else{
                                console.log("增加失败");
                            }
                        }
                    })
            })
            $('.count-reduce').click(function(){
                if( $(this).parent().find("input").val()<=1){
                    $(this).parent().find("input").val(1);
                }
                let i = $(this).parent().find("input").val();
                --i;
                let reduce = $(this).parent().find("input").val(i);
                let re = $(this).parent().parent().prev().find('p:nth-child(2)').html();
                let sum = $(this).parent().find('input').val() * re;
                 $(this).parent().parent().next().find('p').html(sum);
                 $('#all-price').html(zong-=parseInt(re));
                 $.ajax({
                    type:'get',
                    url:'php/updateGoodsCount.php',
                    async:true,
                    dataType:'json',
                    data:{vipName:phone,goodsId:$('.hidden-goodsId').html(),goodsCount:$('.count-input').val()},
                    success:function(data){
                        if(data==1){
                            console.log('减少成功');
                        }else{
                            console.log("减少失败");
                        }
                    }
                })
            })
            
        }
    });
});
