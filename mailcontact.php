<?php
$for = 'Bond_J_0o7@hotmail.com';
$title = 'Sending email from PHP';
$message = '<html>'.
        '<head> <title> Email with HTML </title> </head>'.
        '<body> <h1> Email with HTML </h1>'.
        'This is an email that is sent in HTML format.'
    '<hr>'.
    'Sent by my program in PHP'.
    '</body>'.
    '</html>';
$headers = 'MIME-Version: 1.0'. "\ r \ n";
$headers .= 'Content-type: text / html; charset = utf-8 '. "\ r \ n";
$headers .= 'From: Name1 Name 2 <Bond_J_0o7@hotmail.com>';
$sent = mail ($for, $title, $message, $headers);

if ($sent)
    echo 'Email sent correctly';
else
    echo 'Error in sending the email';
?>
