<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<link href="https://cdn.bootcss.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
	<title>列表修改页面</title>
</head>
<body>
	<p>请输入您需要修改的列表名字：</p>
	<form action="../controller/admin.updata.list.controller.php">
		<input type="text" name="id">
		<input type="text" name='tiku_list'>
		<input type="submit" value="修改">
	</form>
</body>
</html>