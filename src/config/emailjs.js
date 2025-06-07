export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_ochqdmt", // Replace with your EmailJS service ID
  TEMPLATE_ID: "template_8y73sl5", // Replace with your EmailJS template ID
  PUBLIC_KEY: "g88gxNdJMgOCFNy46", // Replace with your EmailJS public key
};

// Template parameters mapping
export const EMAIL_TEMPLATE_PARAMS = {
  from_name: "from_name", // Name field in your EmailJS template
  from_email: "from_email", // Email field in your EmailJS template
  message: "message", // Message field in your EmailJS template
  to_name: "to_name", // Recipient name field in your EmailJS template
};

/*
 * SETUP INSTRUCTIONS:
 *
 * 1. Go to https://www.emailjs.com/ and create an account
 * 2. Create a new email service (Gmail, Outlook, etc.)
 * 3. Create an email template with the following variables:
 *    - {{from_name}} - Sender's name
 *    - {{from_email}} - Sender's email
 *    - {{message}} - Message content
 *    - {{to_name}} - Your name (recipient)
 *
 * 4. Get your credentials:
 *    - Service ID: Found in the "Email Services" section
 *    - Template ID: Found in the "Email Templates" section
 *    - Public Key: Found in "Account" -> "General" -> "Public Key"
 *
 * 5. Replace the values above with your actual credentials
 *
 * Example EmailJS template:
 * Subject: New Contact Form Message from {{from_name}}
 *
 * Hello {{to_name}},
 *
 * You have received a new message from your portfolio contact form:
 *
 * Name: {{from_name}}
 * Email: {{from_email}}
 *
 * Message:
 * {{message}}
 *
 * Best regards,
 * Portfolio Contact Form
 */
