<?php
	require "conn.php";

$id=$_GET['sid'];
$a=mysql_query("select * from excel where sid=$id ");
$arr=mysql_fetch_array($a,MYSQL_ASSOC);
echo json_encode($arr)
?>