<?php
	 header('content-type:text/html;charset=utf-8');
	 define('HOST','localhost');
	 define('USERNAME','root');
     $num=@mysql_connect(HOST,USERNAME);
     mysql_query("set names 'utf8'",$num);
	 if(!$num){
	 	die("服务器连接错误".mysql_error());
	 };
	 mysql_select_db('article');
?>


