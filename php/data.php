   <?php
require "conn.php";
$a='select * from excel';

$b=mysql_query($a);
$arr=array();
for($i=0;$i<mysql_num_rows($b);$i++){
$arr[$i]=mysql_fetch_array($b,MYSQL_ASSOC);
};
echo json_encode($arr)
?>