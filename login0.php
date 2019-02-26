<?php
header("Content-type:text/html;charset=utf-8");
$phone = $_GET['phone'];
$conn = mysql_connect('localhost','root','root');
if(!$conn){
    echo "数据库连接错误";
}else{
    mysql_select_db("mogujie",$conn);
    $sqlstr="select * from userinfo where phone='$phone'";
    $result = mysql_query($sqlstr,$conn);
    mysql_close($conn);
    if(mysql_num_rows($result)==1){
        echo "0";
    }else{
        echo "1";
    }
}

?>