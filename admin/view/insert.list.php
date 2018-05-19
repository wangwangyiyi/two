<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link href="https://cdn.bootcss.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
	<title>列表增加页面</title>
</head>
<body>
	<p>请输入您需要添加的列表名字：</p>
	<form action="../controller/admin.insert.list.controller.php">
		<input type="text" name='tiku_name'>
		<input type="submit" value="添加">
	</form>
</body>
</html>