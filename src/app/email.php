<?php

header('Content-type: application/json');

$errors = '';

if(empty($errors))
{
	$from_name = $_POST['name'];
	$from_email = $_POST['email'];
  $title = $_POST['title'];
	$message = $_POST['message'];

	$to_email = 'proair@proairmarine.com';
	$to_email_cc = $from_email;

	$contact = "<p><strong>Name:</strong> $from_name</p>
		    <p><strong>Email:</strong> $from_email</p>";
  $subject = "<p><strong>Title:</strong> $title</p>";
	$content = "<p>$message</p>";

	$email_subject = $title;
	$email_subject_cc = "Your Email to Proair Sdn Bhd Titled: $title";

	$email_body = '<html><body>';
	$email_body .= "$contact $subject $content";
	$email_body .= '</body></html>';

	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: $my_email\n";
	$headers .= "Reply-To: $from_email";

	mail($to_email,$email_subject,$email_body,$headers);
	mail($to_email_cc,$email_subject_cc,$email_body,$headers);

	$response_array['status'] = 'success';
	echo json_encode($response_array);
} else {
	$response_array['status'] = 'error';
	echo json_encode($response_array);
}
?>
