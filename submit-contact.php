<?php
header("Content-Type: application/json");

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Required fields
$required = [
    "firstName", "lastName", "email", "phone",
    "address", "city", "postalCode",
    "contactMethod", "appointmentDate", "appointmentTime"
];

foreach ($required as $field) {
    if (empty($data[$field])) {
        echo json_encode(["success" => false, "message" => "$field is required"]);
        exit;
    }
}

// Sanitize function
function clean($value) {
    return htmlspecialchars(trim($value));
}

// Assign variables
$firstName = clean($data["firstName"]);
$lastName = clean($data["lastName"]);
$email = clean($data["email"]);
$phone = clean($data["phone"]);
$address = clean($data["address"]);
$city = clean($data["city"]);
$postalCode = clean($data["postalCode"]);
$contactMethod = clean($data["contactMethod"]);
$referral = clean($data["referral"] ?? "");
$serviceType = clean($data["serviceType"] ?? "");
$gateCode = clean($data["gateCode"] ?? "");
$appointmentDate = clean($data["appointmentDate"]);
$appointmentTime = clean($data["appointmentTime"]);


// Email settings
$to = "romik2211128@iimscollege.edu.np";   // CHANGE THIS
$subject = "New Service Booking Request";

$message = "
New Service Booking

------------------------
Name: $firstName $lastName
Email: $email
Phone: $phone

Address: $address
City: $city
Postal Code: $postalCode

Preferred Contact: $contactMethod

Appointment:
Date: $appointmentDate
Time: $appointmentTime

Referral: $referral

Service Details:
$serviceType

Gate Code: $gateCode
------------------------
";

$headers = "From: romikvlogs@gmail.com\r\n";
$headers .= "Reply-To: $email\r\n";

$mailSent = mail($to, $subject, $message, $headers);

if ($mailSent) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Email failed"]);
}