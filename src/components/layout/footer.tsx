"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Brand details */}
        <div className="flex flex-col space-y-6">
          <Link href="/" className="flex flex-col select-none">
            <span className="font-serif text-lg md:text-xl tracking-[0.25em] text-white uppercase font-bold">
              BLUSH + BLOW
            </span>
            <span className="text-[8px] tracking-[0.45em] text-[#C6A86B] uppercase ml-0.5 font-sans">
              LONDON
            </span>
          </Link>
          <p className="font-sans text-xs text-[#999999] leading-relaxed tracking-wider max-w-xs">
            Blush + Blow London offers premium hair, nails, beauty, and skincare services in the heart of Parsons Green on New Kings Road, Fulham (SW6).
          </p>
          {/* Social Icons */}
          <div className="flex items-center space-x-5 pt-2">
            <a
              href="https://www.instagram.com/blushandblowlondon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] hover:text-[#C6A86B] luxury-transition"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.facebook.com/blushandblow"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] hover:text-[#C6A86B] luxury-transition"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://wa.me/447979782832"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] hover:text-[#C6A86B] luxury-transition"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="tel:02077360430"
              className="text-[#999999] hover:text-[#C6A86B] luxury-transition"
              aria-label="Call Us"
            >
              <Phone size={16} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-serif text-sm tracking-[0.22em] uppercase text-[#C6A86B] font-medium">
            About Us
          </h4>
          <nav className="flex flex-col space-y-3 font-sans text-xs tracking-widest text-[#999999]">
            <Link href="/" className="hover:text-[#C6A86B] luxury-transition">
              Home
            </Link>
            <Link href="/team-members" className="hover:text-[#C6A86B] luxury-transition">
              Team Members
            </Link>
            <Link href="/careers" className="hover:text-[#C6A86B] luxury-transition">
              Careers
            </Link>
            <Link href="/contact" className="hover:text-[#C6A86B] luxury-transition">
              Contact & Hours
            </Link>
          </nav>
        </div>

        {/* Services menu */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-serif text-sm tracking-[0.22em] uppercase text-[#C6A86B] font-medium">
            Services
          </h4>
          <nav className="flex flex-col space-y-3 font-sans text-xs tracking-widest text-[#999999]">
            <Link href="/hair" className="hover:text-[#C6A86B] luxury-transition">
              Hair Styling & Color
            </Link>
            <Link href="/nails" className="hover:text-[#C6A86B] luxury-transition">
              Nails (Hands & Feet)
            </Link>
            <Link href="/beauty" className="hover:text-[#C6A86B] luxury-transition">
              Brows, Makeup & Massage
            </Link>
            <Link href="/bridal" className="hover:text-[#C6A86B] luxury-transition">
              Bridal Hair & Makeup
            </Link>
          </nav>
        </div>

        {/* Newsletter Signup */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-serif text-sm tracking-[0.22em] uppercase text-[#C6A86B] font-medium">
            Newsletter
          </h4>
          <p className="font-sans text-xs text-[#999999] leading-relaxed tracking-wider">
            Subscribe to stay updated with Blush + Blow news, seasonal promotions, and beauty tips.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2 pt-2"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="bg-[#1E1E1E] border border-white/10 rounded-full px-5 py-3.5 text-xs tracking-widest text-white placeholder-[#555555] focus:outline-none focus:border-[#C6A86B] w-full"
              required
            />
            <Button
              type="submit"
              variant="gold-solid"
              className="px-6 py-3 min-w-[100px] text-[10px]"
            >
              Join
            </Button>
          </form>
        </div>

      </div>

      {/* Border & Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#666666]">
        <p>&copy; {new Date().getFullYear()} Blush + Blow London. All Rights Reserved.</p>
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <Link href="/" className="hover:text-[#C6A86B] luxury-transition">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-[#C6A86B] luxury-transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};
