<?php
header("Content-type:text/html;charetset=utf-8");
    //接收数据
    $userphone = $_POST['textphone'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    // -------------------------------数据处理
    //搭桥
    $conn = mysql_connect('localhost','root','root');
    if(!$conn){
        echo "服务器连接错误";
    }else{
        //目的选择数据库
        mysql_select_db("mogujie",$conn);
        //传输数据
        $sqlstr = "insert into userinfo(phone,username,password,email) values('$userphone','$username','$password','$email')";
        //执行sql语句
        $result = mysql_query($sqlstr,$conn);
        //关闭数据库
        mysql_close($conn);
    //     if($result==1){
    //         echo "注册成功";
    //         header("location:login.html");
    //     }else{
    //         echo "0";
    //     }
    // }
        if($result==1){
            //成功了
            echo "1";
        }else{
            echo "0";
        }
    }
 ?>