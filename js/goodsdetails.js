$(function(){
    $(".small-item-box li").hover(
        function(){
            $(this).addClass("small-img-item");
        },
    function(){
        $(this).removeClass("small-img-item");
    });
    $(".small-item-box li:nth-child(1)").hover(
        function(){
            $(".goods-big-img-box img").attr('src','img/big-img1.jpg')
        },
    );$(".small-item-box li:nth-child(2)").hover(
        function(){
            $(".goods-big-img-box img").attr('src','img/big-img2.jpg')
        },
    );$(".small-item-box li:nth-child(3)").hover(
        function(){
            $(".goods-big-img-box img").attr('src','img/big-img3.jpg')
        },
    );$(".small-item-box li:nth-child(4)").hover(
        function(){
            $(".goods-big-img-box img").attr('src','img/big-img4.jpg')
        },
    );
    $(".small-item-box li:nth-child(5)").hover(
        function(){
            $(".goods-big-img-box img").attr('src','img/big-img5.jpg')
        },
    );
})


// 接受从数据库传过来的数据

    //获取url中的参数
    function getUrlParam(name){
        //构造一个含有目标参数的正则表达式对象
        var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
        //匹配目标函数
        var r = window.location.search.substr(1).match(reg);
        // 返回参数
        if(r!=null) return unescape(r[2]);
        return null;
    }
    //接收URL中的参数goodsId
    var id = getUrlParam('goodsId');
$(function(){

console.log('id:'+id);
    $.ajax({
        type:'get',
        url:'php/getGoodsinfo.php',
        dataType:'json',
        data:{goodsId:id},
        success:function(obj){
            $('.goods-big-img-box img').attr('src',obj.goodsImg);
            $('#small-img img').attr('src',obj.goodsImg);
            $('.goods-box-tit span').html(obj.goodsDesc);
            $('#new-price').html(obj.goodsPrice);
            $('#old-price').html(obj.beiyong1);
            $('#double-price').html(obj.beiyong3);
            $('.small-img1 img').attr('src',obj.goodsImg);
            $('.small-img2 img').attr('src',obj.goodsImg);
            $('.small-img3 img').attr('src',obj.goodsImg);
            $('.small-img4 img').attr('src',obj.goodsImg);
            $('.small-img5 img').attr('src',obj.goodsImg);   
        }
    })
});
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
})
var username = getCookie('userphone');
console.log(username);
$(".buy-car-img").click(function(){
    $.ajax({
        type:'get',
        url:'php/addShoppingCart.php',
        dataType:"json",
        async:true,
        data:{vipName:username,goodsId:id,goodsCount:1},
        success:function(data){
            if(data==1){
                location.href="shoppingtrolley.html";
            }else{
                alert("添加失败");
            }
        }
    })
});