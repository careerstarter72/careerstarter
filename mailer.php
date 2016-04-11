 <?php

   if(isset($_REQUEST['submit']))
   {

$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$subject=$_REQUEST['subject'];

$comments=$_REQUEST['comments'];

//$message1="Thank you for contact CareerStarter";
//$message1="Thank you for contact CareerStarter";
$message1= "Hello!

Your contact form has been submitted by:

Name: $name
E-mail: $email
Subject: $subject


Comments:
$comments
</tr>
End of message
";



 $message1 = '<html><body>';
 
$message1 .= '<table width="100%"; rules="all" style="border:1px solid #3A5896;" cellpadding="10">';
 
//$message1 .= "<tr><td><img src='http://www.phpgang.com/wp-content/uploads/gang.jpg' alt='PHP Gang' /></td></tr>";
 
$message1 .= "<tr><td colspan=2>Dear \$name,<br /><br />$comments</td></tr>";
 
//$message1 .= "<tr><td colspan=2 font='colr:#999999;'><I></I></td></tr>"; 
 
$message1 .= "</table>";
 
$message1 .= "</body></html>";



//$mailto='suribabu.m09@gmail.com';
$headers  = "From: $email\r\n";
$headers .= "Content-type: text/html\r\n"; 
$headers .= "MIME-Version: 1.0\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1";
$message1 .="\r\n";
$message1 .=$name."\r\n";
$message1 .=$email."\r\n";
$message1 .=$phone."\r\n";

    //SEND Mail
ini_set('vizagdirectory', 'support@vizagdirectory.com'); // Set your Sendingadress here
     if (mail('suribabu.m09@gmail.com', $subject, $message1, $headers)) {
        echo "<script>alert('Your message was successfully sent!
Thank you for contacting us, we will reply
to your inquiry as soon as possible!')</script>"; 
      } else {
        //echo "<script>alert('Mail sending ... ERROR!')</script>";
   }

   
   }
?>