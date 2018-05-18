<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>后台首页登录</title>
	<link href="https://cdn.bootcss.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="./static/admin.css">
</head>
<body>
	<div class="container">
		<div class="panel panel-default text-center"><h1>题库网后台登录</h1></div>
	<form action="../controller/admin.controller.php" clas="input-group" method="post">
		用户名:	<input type="text" class="form-control" name="username" placeholder="请设置用户名字">
		<br/>
		密码：	<input type="text" name="password" class="form-control" placeholder="请设置用户密码">
		<br/>
		<input type="submit" class="btn btn-info btn-lg" value="登录">
	</form>
	</div>
</body>
</html>