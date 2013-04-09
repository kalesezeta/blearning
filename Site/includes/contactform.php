<?php

$EmailFrom = $_REQUEST['email']; 
$EmailTo = "kalesezeta@gmail.com"; // Your email address here
$Subject = "B-learning";
$Name = Trim(stripslashes($_POST['name'])); 
$Email = Trim(stripslashes($_POST['email'])); 
$Message = Trim(stripslashes($_POST['message'])); 

// validation
$validationOK=true;
if (!$validationOK) {
 	echo "Error";
 	exit;
}

// prepare email body text
$Body = "";
$Body .= "Nombre: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Mensaje: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "De: <$EmailFrom>");

// redirect to success page 
if ($success){
	include "contact_success.tpl.php";
}
else{
 	echo "Error";
}
?>