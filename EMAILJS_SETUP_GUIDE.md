# EmailJS Setup Guide for Portfolio Contact Form

## Overview

Your contact form is now integrated with EmailJS to send emails directly from your portfolio website. Follow this guide to complete the setup.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Connect Your Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

### Template Settings:

- **Template Name**: Portfolio Contact Form
- **Subject**: `New Contact Form Message from {{from_name}}`

### Template Content:

```
Hello {{to_name}},

You have received a new message from your portfolio contact form:

**Contact Details:**
- Name: {{from_name}}
- Email: {{from_email}}

**Message:**
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Important Variables to include:**

   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (recipient)

5. Save the template and note down your **Template ID** (e.g., `template_def456`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `ghi789jkl`)

## Step 5: Update Configuration

Open `src/config/emailjs.js` and replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "service_abc123", // Replace with your Service ID
  TEMPLATE_ID: "template_def456", // Replace with your Template ID
  PUBLIC_KEY: "ghi789jkl", // Replace with your Public Key
};
```

## Step 6: Test Your Setup

1. Start your development server: `npm run dev`
2. Navigate to your contact form
3. Fill out and submit the form
4. Check your email for the message

## Features Included

### ✅ Loading States

- Button shows "Sending..." with spinner during submission
- Form fields are disabled during submission

### ✅ Success/Error Messages

- Green success message when email is sent successfully
- Red error message if sending fails
- Messages auto-disappear after 5 seconds

### ✅ Form Validation

- Required field validation
- Email format validation
- Form reset after successful submission

### ✅ User Experience

- Responsive design for all devices
- Smooth transitions and animations
- Clear visual feedback

## Troubleshooting

### Common Issues:

1. **"Failed to send email" error**

   - Check if your Service ID, Template ID, and Public Key are correct
   - Verify your email service is properly connected
   - Check browser console for detailed error messages

2. **Template variables not working**

   - Ensure variable names match exactly: `{{from_name}}`, `{{from_email}}`, etc.
   - Variables are case-sensitive

3. **Emails not received**

   - Check spam/junk folder
   - Verify the recipient email in your EmailJS service settings
   - Test with a different email address

4. **CORS errors**
   - EmailJS should handle CORS automatically
   - If issues persist, check EmailJS documentation for domain configuration

### Rate Limits (Free Plan):

- 200 emails per month
- Consider upgrading if you expect high traffic

## Security Notes

- Your Public Key is safe to expose in client-side code
- Never expose your Private Key in frontend code
- EmailJS automatically prevents spam and abuse

## Next Steps

Once setup is complete, you can:

1. Customize the email template styling
2. Add auto-reply functionality
3. Set up email notifications
4. Monitor email delivery in the EmailJS dashboard

---

**Need Help?**

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Support: Check EmailJS help center or community forums
