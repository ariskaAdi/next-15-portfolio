"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Twitter, Linkedin } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";

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
        <Link href="/" className="flex items-center">
          <div className="text-2xl font-semibold text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            AriskaAdi
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-16">
          <Link
            href="/"
            className="text-md font-medium text-white hover:text-yellow-400 transition duration-200">
            Home
          </Link>
          <Link
            href="/about"
            className="text-md font-medium text-white hover:text-yellow-400 transition duration-200">
            About
          </Link>
          <Link
            href="/rooms"
            className="text-md font-medium text-white hover:text-yellow-400 transition duration-200">
            Rooms
          </Link>
          <Link
            href="/contact"
            className="text-md font-medium text-white hover:text-yellow-400 transition duration-200">
            Contact
          </Link>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-sm text-white hover:text-white/80">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-sm text-white hover:text-white/80">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="#" className="text-sm text-white hover:text-white/80">
            <Linkedin className="h-6 w-6" />
          </Link>
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
            <Link
              href="#"
              className="text-lg font-medium text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link
              href="#"
              className="text-lg font-medium text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}>
              Rooms
            </Link>
            <Link
              href="#"
              className="text-lg font-medium text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}>
              Reservation
            </Link>
            <Link
              href="#"
              className="text-lg font-medium text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}>
              News & Events
            </Link>
            <Link
              href="#"
              className="text-lg font-medium text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex items-center text-white"></div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex justify-center space-x-6">
              <Link href="#" className="text-white hover:text-white/80">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
