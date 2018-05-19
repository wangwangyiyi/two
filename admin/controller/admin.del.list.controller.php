<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>列表删除控制器</title>
</head>
<body>
	<?php
		$id =$_GET['id'];
		$link = mysqli_connect('localhost','root','');
		mysqli_select_db($link,"home_user");
		$sql = "delete from tiku_list where id={$id}";
		$result = mysqli_query($link,$sql);
		if(!$result){
			echo "数据删除失败！";
			var_dump($sql);
			var_dump($result);
		}else{
			// while($assoc = mysqli_fetch_assoc($result)){
			header("location:../view/list.php");
			}












	?>
</body>
</html>