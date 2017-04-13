<?php
if(isset($_POST['submit'])){
	console.log('php');
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$mobile = $_POST['mobile'];
$message = $_POST['message'];

$email_subject = "New Form submission";
$email_body = "You have received a new message from the user $name.\n".
"Here is the message:\n $message".

$to = "gundeeps2786@gmail.com";
$headers = "From: $visitor_email \r\n";

$retval = mail ($to,$email_subject,$email_body,$headers);
header('location: home.tpl')
if( $retval == true ) {
            echo "Message sent successfully...";
         }else {
            echo "Message could not be sent...";
         }
}
else{
	header('location :home.tpl');
	exit(0);
}
?>