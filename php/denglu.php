<?php
	require 'conn.php';
	if(isset($_POST['user']) && isset($_POST['pass'])){
		$user=$_POST['user'];
		$pass=$_POST['pass'];
	}else{
		exit('非法操作');
	};

	//echo true;
	$result=mysql_query("select * from hehes where username='$user' and password='$pass' ");

	if($result){
		if(mysql_fetch_array($result)){//登陆成功
			echo true;
		}else{//失败
			echo false;
		};
	}else{
		echo '账号或密码错误';
	}
	

