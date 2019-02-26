<?php
header("Content-type:text/html;charset=utf-8");
    // 接收数据
    @$userphone = $_GET['phone'];
    @$password  =$_GET['password'];
    //------------------数据处理
    //搭桥
    $conn = mysql_connect("localhost","root","root");
    if(!$conn){
        echo "数据库连接错误";
    }else{
        mysql_select_db("mogujie",$conn);
        $sqlstr = "select * from userinfo where phone='$userphone' and password='$password'";
        $result = mysql_query($sqlstr,$conn);
        mysql_close($conn);
        if(mysql_num_rows($result)==1){
            // header("location:index.html");
            
            echo "1";
        }else{
            // echo "<script> 
            //         let i = 3;
            //         document.write('登录失败'+i+'秒后跳转到登录页面');
            //         let timer = setInterval(function(){
            //             i--;
            //             if(i==0){
            //                 clearTimeout('timer');
            //                window.location.href='login.html';
            //             }
            //         },1000);
            //      </script>";
            echo "0";
        }
    }
?>