<?php

    require "conn.php";//引入数据库连接

    //获取前端页面传来的值

    if(isset($_POST['question_title'])){//检测是否传输过去
        $title=$_POST['question_title'];
        $description=$_POST['question_description'];
        $resolve=$_POST['question_resolve'];
        $conn->query("insert taobaopic values(null,'$title','$description','$resolve',NOW())");
    }
 
  