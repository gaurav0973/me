import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Instagram,
  Youtube,
  FileText,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS_CONFIG;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Gaurav Maurya",
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#1a1b26] text-[#c0caf5] p-4 sm:p-8 max-w-6xl mx-auto"
    >
      {/* Header with Tiger Icon */}
      <div className="mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          <span className="text-[#7aa2f7]">04.</span> Leave a message for me
        </h1>
        <div className="h-1 w-32 sm:w-48 bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] mb-6"></div>
      </div>

      {/* center the contact form */}
      <div className="flex justify-center">
        <div className="mt-8 lg:mt-0 w-full max-w-2xl">
          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded-lg flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <p className="text-green-300 text-sm sm:text-base">
                Thank you for your message! I'll get back to you soon.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-300 text-sm sm:text-base">
                Sorry, there was an error sending your message. Please try again
                or contact me directly.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-[#24283b] border border-[#414868] rounded-lg focus:ring-2 focus:ring-[#7aa2f7] focus:border-transparent text-[#c0caf5] placeholder-[#9aa5ce] text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-[#24283b] border border-[#414868] rounded-lg focus:ring-2 focus:ring-[#7aa2f7] focus:border-transparent text-[#c0caf5] placeholder-[#9aa5ce] text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                placeholder="Your email"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                disabled={isSubmitting}
                className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-[#24283b] border border-[#414868] rounded-lg focus:ring-2 focus:ring-[#7aa2f7] focus:border-transparent text-[#c0caf5] placeholder-[#9aa5ce] resize-vertical text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                placeholder="Type your message"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-transparent border-2 border-[#7aa2f7] text-[#7aa2f7] rounded-full hover:bg-[#7aa2f7] hover:text-[#1a1b26] transition-all duration-300 flex items-center gap-2 font-medium text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#7aa2f7]"
            >
              {isSubmitting ? (
                <>
                  Sending
                  <Loader2 className="w-4 h-4 animate-spin" />
                </>
              ) : (
                <>
                  Send
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
