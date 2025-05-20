import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <div className="space-y-8">
          <div>
            <p className="text-gray-500 text-sm mb-4">/ get in touch /</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              We are always ready to help you and answer your questions
            </h1>
            <p className="text-gray-600 mb-8">
              Post-ironic twee friendly system porttitor i hack pricestack
              misshared hardpoint evesdrop crawling deeper.
            </p>
          </div>

          {/* Call Center */}
          <div>
            <h3 className="font-bold text-lg mb-3">Call Center</h3>
            <div className="space-y-1">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>800 (49) 915 20 52</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (123) 800-345-6578</span>
              </p>
            </div>
          </div>

          {/* Email */}
          <div>
            <h3 className="font-bold text-lg mb-3">Email</h3>
            <p className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>hello@email.co</span>
            </p>
          </div>

          {/* Social Network */}
          <div>
            <h3 className="font-bold text-lg mb-3">Social network</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-gray-700" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="w-5 h-5 text-gray-700" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-gray-700" />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Youtube className="w-5 h-5 text-gray-700" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div>
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Define your goals and identify areas where AI can add value to
              your business
            </p>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-700"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-700"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-700"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-700"></textarea>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                  <span>Send a message</span>
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
