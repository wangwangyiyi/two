
	<?php
	$link = mysqli_connect('localhost','root','');
	mysqli_select_db($link,"home_user");
	$sql = "select * from tiku_list";
	$result = mysqli_query($link,$sql);
	$arr=array();
	// $array = mysqli_fetch_assoc($result);

	// array_merge(array1)
	while($array = mysqli_fetch_assoc($result)){
	 // $aa = array_merge($array,$array);
		$arr[]=$array;
   
};
 print_r(json_encode($arr));






	?>
