"use client";

import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import SocialMedia from "./SocialMedia";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Handle scroll effect for transparent header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <header className="w-full">
      <nav
        className={`absolute top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 flex justify-between items-center transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "bg-stone-900/95 backdrop-blur-sm"
            : "bg-transparent"
        }`}>
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center">
          <div className="text-2xl font-semibold text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            AriskaAdi
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-16">
          <a
            href="#about"
            className="text-md font-medium text-white hover:text-yellow-400 transition duration-200">
            About
          </a>
          <a
            href="#projects"
            className="text-md font-medium text-white hover:text-yellow-400 transition duration-200">
            My Projects
          </a>
          <a
            href="#testimonial"
            className="text-md font-medium text-white hover:text-yellow-400 transition duration-200">
            Testimonial
          </a>
          <a
            href="#contact"
            className="text-md font-medium text-white hover:text-yellow-400 transition duration-200">
            Contact Me
          </a>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-8">
          <SocialMedia />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-stone-900/95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden pt-20`}>
        <div className="container mx-auto px-4 py-8 flex flex-col h-full">
          <div className="flex flex-col space-y-6 text-center">
            <a
              href="#about"
              className="text-lg font-medium text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a
              href="#projects"
              className="text-lg font-medium text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}>
              My Projects
            </a>
            <a
              href="#testimonial"
              className="text-lg font-medium text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}>
              Testimonial
            </a>
            <a
              href="#contact"
              className="text-lg font-medium text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>

          <div className="mt-auto">
            <div className="flex justify-center space-x-6">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
