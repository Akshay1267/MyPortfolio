import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersonalDetails } from "../../constants";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiLinkedin, FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_2o5xxla",
        "template_l566yen",
        form.current,
        "y4MVv_8QJ88QQ7D2t"
      )
      .then(
        () => {
          setIsSending(false);
          form.current.reset();
          toast.success("Message sent successfully! Thank you for reaching out.", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        },
        (error) => {
          setIsSending(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please reach out directly via email!", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto relative"
    >
      <ToastContainer />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
          <FiMail className="text-amber-600" />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
          Let’s Build Something Great
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full mx-auto mt-4"></div>
        <p className="text-stone-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Whether you have an internship/job opportunity, a project collaboration, or just want to connect, my inbox is always open!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Contact Information & Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl p-7 border border-warm-300 shadow-warm-md">
            <h3 className="text-xl font-bold text-stone-900 mb-2">
              Contact Information
            </h3>
            <p className="text-stone-600 text-sm mb-6 leading-relaxed">
              Feel free to reach out via email, phone, or any of my social profiles.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${PersonalDetails.email}`}
                className="flex items-center space-x-3.5 p-3 rounded-xl bg-warm-50 hover:bg-amber-50 border border-warm-200 hover:border-amber-300 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <FiMail size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-stone-500 font-semibold">Email Address</p>
                  <p className="text-sm font-bold text-stone-900 truncate">
                    {PersonalDetails.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${PersonalDetails.phone}`}
                className="flex items-center space-x-3.5 p-3 rounded-xl bg-warm-50 hover:bg-amber-50 border border-warm-200 hover:border-amber-300 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <FiPhone size={18} />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-semibold">Phone Number</p>
                  <p className="text-sm font-bold text-stone-900">
                    {PersonalDetails.phone}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center space-x-3.5 p-3 rounded-xl bg-warm-50 border border-warm-200">
                <div className="w-10 h-10 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center flex-shrink-0">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-semibold">Location</p>
                  <p className="text-sm font-bold text-stone-900">
                    {PersonalDetails.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="mt-8 pt-6 border-t border-warm-200">
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">
                Social Profiles
              </p>
              <div className="flex items-center space-x-3">
                <a
                  href={PersonalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-warm-100 hover:bg-amber-600 hover:text-white text-stone-700 border border-warm-200 transition-all shadow-warm-sm"
                  title="LinkedIn"
                >
                  <FiLinkedin size={18} />
                </a>
                <a
                  href={PersonalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-warm-100 hover:bg-stone-900 hover:text-white text-stone-700 border border-warm-200 transition-all shadow-warm-sm"
                  title="GitHub"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href={PersonalDetails.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-warm-100 hover:bg-amber-600 hover:text-white text-stone-700 border border-warm-200 transition-all shadow-warm-sm"
                  title="LeetCode"
                >
                  <SiLeetcode size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-warm-300 shadow-warm-md">
            <h3 className="text-2xl font-bold text-stone-900 mb-1">
              Send a Direct Message
            </h3>
            <p className="text-stone-600 text-sm mb-6">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-warm-50 text-stone-900 border border-warm-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-600 transition text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                    Your Email <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="e.g. john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-warm-50 text-stone-900 border border-warm-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-600 transition text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Subject <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Full-Stack Opportunity / Project Collaboration"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-warm-50 text-stone-900 border border-warm-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-600 transition text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Message <span className="text-amber-600">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Hello Akshay, I saw your portfolio and would like to talk about..."
                  rows="5"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-warm-50 text-stone-900 border border-warm-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-600 transition text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 hover:from-amber-700 hover:to-orange-600 shadow-warm-amber hover:shadow-warm-xl transition-all disabled:opacity-70 cursor-pointer"
              >
                {isSending ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
