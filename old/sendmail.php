<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set your email address
    $to = "madhukarbabulal5@gmail.com";

    // Set email subject
    $subject = "New Form Submission";

    // Build the email message
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message: $message\n";

    // Send the email
    mail($to, $subject, $body);

    // Optionally, you can redirect the user to a thank you page
    header("Location: thank-you.html");
    exit();
}
?>
