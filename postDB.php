<?php
	include_once('userDB.php');
	
	$username = $_POST['usrId'];
	$email = $_POST['email'];
	if(mysql_query("insert into user values('$username','$email')"))
		echo "Successfull Inserted";
	else
		echo "Insertion Failed";
?>
