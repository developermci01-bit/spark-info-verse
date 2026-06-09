<?php
/**
 * Wieser Petroleum — Contact Form Mail Handler
 *
 * Deploy: this file is copied to dist/send-mail.php at build time.
 * Upload the dist/ contents to your shared hosting; the form will POST here.
 *
 * Requirements: PHP 7.2+ with the built-in mail() function enabled
 * (standard on virtually all shared hosting). For better deliverability you
 * can later swap mail() for SMTP/PHPMailer — the request/response contract
 * below stays the same.
 */

// ============ CONFIG ============
$RECIPIENT      = 'info@wieserpetroleum.com';
$FROM_EMAIL     = 'no-reply@wieserpetroleum.com'; // must be on your domain for best deliverability
$FROM_NAME      = 'Wieser Petroleum Website';
$ALLOWED_ORIGIN = '*'; // tighten to e.g. 'https://wieserpetroleum.com' once live
// ================================

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: ' . $ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Accept JSON or form-encoded
$raw   = file_get_contents('php://input');
$input = [];
$ct    = $_SERVER['CONTENT_TYPE'] ?? '';
if (stripos($ct, 'application/json') !== false) {
    $input = json_decode($raw, true) ?: [];
} else {
    $input = $_POST;
}

// Honeypot — silently accept bot submissions
if (!empty($input['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$name    = trim((string)($input['name']    ?? ''));
$email   = trim((string)($input['email']   ?? ''));
$phone   = trim((string)($input['phone']   ?? ''));
$subject = trim((string)($input['subject'] ?? ''));
$message = trim((string)($input['message'] ?? ''));

// Validation
$errors = [];
if ($name === ''    || mb_strlen($name) > 100)                 $errors[] = 'Invalid name';
if ($email === ''   || !filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 255) $errors[] = 'Invalid email';
if (mb_strlen($phone) > 50)                                    $errors[] = 'Invalid phone';
if ($subject === '' || mb_strlen($subject) > 150)              $errors[] = 'Invalid subject';
if ($message === '' || mb_strlen($message) > 5000)             $errors[] = 'Invalid message';

if ($errors) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => implode(', ', $errors)]);
    exit;
}

// Header-injection guard: strip CR/LF from anything reused in headers
$sanitizeHeader = function ($v) {
    return str_replace(["\r", "\n", "%0a", "%0d"], '', $v);
};
$safeName    = $sanitizeHeader($name);
$safeEmail   = $sanitizeHeader($email);
$safeSubject = $sanitizeHeader($subject);

$mailSubject = '[Website] ' . $safeSubject;

$bodyLines = [
    'New contact form submission',
    str_repeat('-', 40),
    'Name:    ' . $name,
    'Email:   ' . $email,
    'Phone:   ' . ($phone !== '' ? $phone : '—'),
    'Subject: ' . $subject,
    '',
    'Message:',
    $message,
    '',
    str_repeat('-', 40),
    'Sent: ' . date('Y-m-d H:i:s'),
    'IP:   ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'),
];
$body = implode("\r\n", $bodyLines);

$headers   = [];
$headers[] = 'From: ' . $FROM_NAME . ' <' . $FROM_EMAIL . '>';
$headers[] = 'Reply-To: ' . $safeName . ' <' . $safeEmail . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$sent = @mail($RECIPIENT, $mailSubject, $body, implode("\r\n", $headers), '-f' . $FROM_EMAIL);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail could not be sent']);
    exit;
}

echo json_encode(['ok' => true]);
