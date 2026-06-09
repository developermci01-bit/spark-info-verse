Add a PHP mail handler for the contact form, to be deployed on the shared hosting alongside the built site.

## What I'll create

**`public/send-mail.php`** — copied to `dist/` at build time, ends up at `https://yourdomain.com/send-mail.php`.

The script will:
- Accept `POST` JSON or form-encoded data with fields: `name`, `email`, `phone`, `subject`, `message`
- Server-side validate: required fields, valid email, length limits, basic header-injection protection (strip `\r` / `\n` from name/email/subject)
- Send mail via PHP's built-in `mail()` to `info@wieserpetroleum.com`
- Set `Reply-To` to the submitter's email and a `From:` using the hosting domain (configurable at top of file)
- Return JSON: `{ ok: true }` on success, `{ ok: false, error: "..." }` on validation/send failure with appropriate HTTP status
- Send proper CORS headers (same-origin allowed by default; constant at top to widen if needed)
- Honor a simple honeypot field (`website`) to drop bots silently

## Frontend wiring (`src/components/Contact.tsx`)

- Replace the stub `handleSubmit` with a real `fetch('/send-mail.php', { method: 'POST', ... })`
- Add submitting / success / error states using the existing toast (`sonner`) and disable the button while sending
- Reset the form on success
- Add a hidden honeypot `website` input

## Notes for the user (will be in the PHP file header comments)

- `mail()` must be enabled by the hosting provider (it is on virtually all shared hosting)
- For better deliverability they can later swap to SMTP/PHPMailer; the same endpoint contract still works
- The recipient address is configurable at the top of the file