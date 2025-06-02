import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex space-x-4">
      <Link href="https://github.com/ariskaAdi" aria-label="Github">
        <div className="rounded-full p-2 bg-white hover:bg-transparent text-gray-700 hover:text-yellow-500 transition-colors">
          <Github className="w-5 h-5" />
        </div>
      </Link>

      <Link href="https://www.instagram.com/ariskaadipr" aria-label="Instagram">
        <div className="rounded-full p-2 bg-white hover:bg-transparent text-gray-700 hover:text-yellow-500 transition-colors">
          <Instagram className="w-5 h-5" />
        </div>
      </Link>

      <Link
        href="https://www.linkedin.com/in/ariska-adi-prasetyo-25a0bb287/"
        aria-label="LinkedIn">
        <div className="rounded-full p-2 bg-white hover:bg-transparent text-gray-700 hover:text-yellow-500 transition-colors">
          <Linkedin className="w-5 h-5" />
        </div>
      </Link>

      <Link
        href="https://x.com/ariskaadipras?t=t3Cp1ADCUIb5OSotsb0z3g&s=08 "
        aria-label="Twitter">
        <div className="rounded-full p-2 bg-white hover:bg-transparent text-gray-700 hover:text-yellow-500 transition-colors">
          <Twitter className="w-5 h-5" />
        </div>
      </Link>
    </div>
  );
};

export default SocialMedia;
