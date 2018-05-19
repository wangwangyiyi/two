<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>后台登录控制器</title>
</head>
<body>
	<?php
	 // require "../view/admin.php" ;
	$username = $_POST['username'];
	$password = $_POST['password'];
	$admin = 'root';
	$pwd = '123456';
	// $link =  mysqli_connect('localhost','root','');
	// mysqli_select_db($link,home_user);
	// $sql = "select username from home_user;
	// $result = mysql_query($sql)";
	// $array = mysql_fetch_assoc($result);
	// while ($array) {
	// 			if(!isset($username)&&isset($password)){
	// 			echo "不能为空！";
	// 			if(!in_array($array, $username)){
	// 			echo "恭喜，注册成功！";
	// 			}
	// 		}
	// 	}
	if($username==$admin&&$password==$pwd){
		$_SESSION['username'] = $admin;
		$_SESSION['password'] = $pwd;
		echo '欢迎来到后台页面！';
		header('location:../view/list.php');
		// session_destroy();
	}else{
		echo "名字或者密码不正确！";
		exit();
	}




	?>
</body>
</html>