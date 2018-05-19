<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>添加控制器</title>
</head>
<body>
	<?php
		$tiku_name = $_GET['tiku_name'];
		$link = mysqli_connect('localhost','root','');
		mysqli_select_db($link,"home_user");
		$sql = "insert into tiku_list (tiku_name)values('$tiku_name')";
		$result = mysqli_query($link,$sql);
		if(!$result){
			echo "数据添加失败！";
			var_dump($result);
			var_dump(expression);
		}else{
			header("location:../view/list.php");
		}
	?>
</body>
</html>