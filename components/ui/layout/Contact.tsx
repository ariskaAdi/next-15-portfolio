import React from "react";
import SocialMedia from "./SocialMedia";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="container mx-auto px-4 md:px-6 py-12 scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <div className="space-y-10">
          <div>
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">
              / Let&apos;s Connect /
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-black uppercase">
              Ready to bring your ideas to life?
            </h1>
            <p className="text-gray-600 text-base">
              Whether you&apos;re starting a new project, need a developer on
              your team, or just want to say hello — I&apos;m always open to
              meaningful collaborations. Reach out and let&apos;s talk.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 text-base text-gray-700">
            {/* Call */}
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">Phone</h3>
              <div className="space-y-1">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+62 831-3507-8376</span>
                </p>
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">Email</h3>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>ariskaadiprasetyo@gmail.com</span>
              </p>
            </div>

            {/* Socials */}
            <div>
              <h3 className="font-semibold text-lg mb-2 text-black">
                Find me on
              </h3>
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-black mb-4">
              Send a message
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              Fill out the form below and I’ll get back to you as soon as
              possible.
            </p>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black placeholder:text-gray-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black placeholder:text-gray-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black placeholder:text-gray-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-black placeholder:text-gray-500"></textarea>

              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                <span>Send Message</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2">
                  <path
                    d="M1.16699 7H12.8337"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 1.16699L12.8333 7.00033L7 12.8337"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
