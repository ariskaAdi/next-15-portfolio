"use client";

// import Link from "next/link";
// import SocialMedia from "../Templates/SocialMedia/SocialMedia";
// import SocialMedia from "../social-media";

const Footer = () => {
  return (
    <footer className="bg-[#262626] text-white py-10 mt-5 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-mono uppercase tracking-wide">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4  inline-block">About Us</h3>
            <p className="leading-relaxed">
              We are a company committed to raw, no-fluff services that get the
              job done.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4 inline-block">Follow Us</h3>
            <div className="flex gap-4">{/* <SocialMedia /> */}</div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4  inline-block">Contact</h3>
            <p>
              Email: <span className="underline">info@example.com</span>
            </p>
            <p>
              Phone: <span className="underline">+1 234 567 890</span>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className=" mt-10 pt-6 text-center text-xs font-mono uppercase">
          <p>
            © {new Date().getFullYear()} Your Company. All rights brutally
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
