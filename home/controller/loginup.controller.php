<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>前台登录控制器</title>
</head>
<body>
	<?php
	// require "__dir__.home/view/loginup.html";
	$username=$_GET['username'];
	$password=$_GET['password'];
	$link = mysqli_connect('localhost','root','');
	mysqli_select_db($link,"home_user");
	$sql = "select username,password from user_list where username='$username'";
	$result = mysqli_query($link,$sql);
	$array = mysqli_fetch_assoc($result);
	var_dump($array);
	var_dump($result);
	$name = $array['username'];
	$pwd = $array['password'];

	if($username==$name&&$password==$pwd){
		echo "欢迎！";
		setcookie("$username","$password");
		// header("location:")
	}else{
		echo "用户名或者密码错误，请重新输入！";
	}

	?>
</body>
</html>