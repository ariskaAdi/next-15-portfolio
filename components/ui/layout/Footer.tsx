"use client";

import SocialMedia from "./SocialMedia";

// import Link from "next/link";
// import SocialMedia from "../Templates/SocialMedia/SocialMedia";
// import SocialMedia from "../social-media";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm  tracking-wide">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4  inline-block">About Me</h3>
            <p className="leading-relaxed">
              I’m a Full Stack Developer who builds efficient and user-friendly
              web applications.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4 inline-block">Follow Me</h3>
            <SocialMedia />
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4  inline-block">Contact</h3>
            <p>
              Email:{" "}
              <span className="underline">ariskaadipraseto@gmail.com</span>
            </p>
            <p>
              Phone: <span className="underline">+62 831-3507-8376</span>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" mt-10 pt-6 text-center text-xs font-mono uppercase">
          <p>© {new Date().getFullYear()} Ariska Adi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
