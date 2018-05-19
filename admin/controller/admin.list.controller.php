<?php session_start();?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>后台列表控制器</title>
</head>
<body>
<div class="container">
		<?php
// session_start();
if(!$_SESSION['username']){
 	exit('没有登录');
}
	$link = mysqli_connect('localhost','root','');
	mysqli_select_db($link,"home_user");
	$sql = 'select * from tiku_list';
	$result = mysqli_query($link,$sql);
	if(!$result){
		echo "数据获取失败！";
		exit();
	}
	// $assoc = mysqli_fetch_assoc($result);
	echo "<div class='content'>";
	echo "<table class='table text-center' border='2'>";
	echo "<a href='../view/insert.list.php'>增加列表项</a>";
	echo "<tr><td>题库列表序列号</td><td>题库列表名字</td><td>修改</td><td>删除</td></tr>";
	while($assoc = mysqli_fetch_assoc($result)){	
	echo "<tr>
		<td>{$assoc['id']}</td>
		<td>{$assoc['tiku_name']}</td>
		<td><a href='../view/del.list.php?id={$assoc['id']}'>删除</a></td>
		<td><a href='../view/updata.list.php?id={$assoc['id']}'>修改</a></td>
		</tr>";	
 }
		echo "</table></div>";


?>
</div>
</body>
</html>