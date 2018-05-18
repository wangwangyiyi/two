<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>前台注册控制器</title>
</head>
<body>
	<?php
	 // require "../view/login.php" ;
	$username = $_GET["username"];
	$password = $_GET["password"];
	$phone = $_GET["phone"];
	if(empty($username)){
		echo"名字不能为空！";
		header("Refresh:2;url=../view/login.html");	
		exit();
	}
	if(empty($password)){
		echo  "密码不能为空！";
		header("Refresh:2;url=../view/login.html");
		exit();
	}
	if(empty($phone)){
		echo  "手机号码不能为空！";
		header("Refresh:2;url=../view/login.html");		
		exit();		
	}
	$link =  mysqli_connect('localhost','root','');
	mysqli_select_db($link,"home_user");
	$sql = "select username from user_list where username='$username'";
	$result = mysqli_query($link,$sql);
	// var_dump($result);
	 $array = mysqli_fetch_assoc($result);
	var_dump($array);
	// while ($array = mysqli_fetch_assoc($result)) {
// if($username==$array["username"]){
// 				 echo "恭喜，注册成功！";
// 			 print_r($array["username"]);
// 			}else{
// 				echo '已存在了';
// 				 print_r($array["username"]);
// 			}	
// }
		if(!$array){
			$sql = "insert into user_list(username,password,phone)values('$username','$password','$phone')";
			$insert = mysqli_query($link,$sql);
				 if($insert){
				 	echo "恭喜，注册成功！";
				};
				 // print_r($array["username"]);

			}else{
				echo '已存在了,两秒后跳转注册页重新注册！';
		header("Refresh:2;url=../view/login.html");		
	?>
</body>
</html>