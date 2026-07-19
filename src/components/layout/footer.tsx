"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useSound } from "@/components/ui/ambient-sound";

export const Footer = () => {
  const { playHover, playClick } = useSound();
  return (
    <footer className="bg-[#121610] text-[#FAF8F5] pt-24 pb-16 border-t border-white/5 select-none">
      
      {/* Upper Brand Monogram Header */}
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 border-b border-white/5 pb-12 mb-16 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="font-serif text-3xl md:text-5xl tracking-[0.25em] text-white uppercase font-light leading-none">
              Maison de Beauté
            </span>
            <span className="text-[9px] tracking-[0.5em] text-[#C5A86A] uppercase block mt-2 font-sans font-medium">
              L O N D O N
            </span>
          </div>
          <p className="font-serif text-xs md:text-sm text-[#FAF8F5]/45 italic max-w-sm leading-relaxed md:text-right font-light">
            "Offering premium hair, nails, beauty, and skincare services in the heart of Chelsea, London."
          </p>
        </div>
      </div>

      {/* Grid Columns */}
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Column 1: Coordinates */}
        <div className="flex flex-col space-y-5">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C5A86A] font-semibold">
            Coordinates
          </span>
          <div className="font-sans text-xs tracking-widest text-[#FAF8F5]/60 space-y-3.5 leading-relaxed">
            <p>
              Maison Avenue, Chelsea<br />
              London, SW6 4SR
            </p>
            <div className="pt-2 space-y-1.5">
              <a href="tel:02071234567" className="hover:text-[#C5A86A] transition-colors block">
                020 7123 4567
              </a>
              <a href="mailto:concierge@maisondebeaute.com" className="hover:text-[#C5A86A] transition-colors block">
                concierge@maisondebeaute.com
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col space-y-5">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C5A86A] font-semibold">
            Navigation
          </span>
          <nav className="flex flex-col space-y-3 font-sans text-xs tracking-widest text-[#FAF8F5]/60">
            {[
              { href: "/", label: "Home" },
              { href: "/team-members", label: "Team" },
              { href: "/careers", label: "Careers" },
              { href: "/contact", label: "Contact & Hours" }
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onMouseEnter={playHover}
                onClick={playClick}
                className="hover:text-[#C5A86A] transition-colors w-fit relative group pb-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A86A] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3: Offerings */}
        <div className="flex flex-col space-y-5">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C5A86A] font-semibold">
            Offerings
          </span>
          <nav className="flex flex-col space-y-3 font-sans text-xs tracking-widest text-[#FAF8F5]/60">
            {[
              { href: "/hair", label: "Hair Styling & Color" },
              { href: "/nails", label: "Nails (Hands & Feet)" },
              { href: "/beauty", label: "Brows, Makeup & Massage" },
              { href: "/bridal", label: "Bridal Hair & Makeup" }
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onMouseEnter={playHover}
                onClick={playClick}
                className="hover:text-[#C5A86A] transition-colors w-fit relative group pb-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A86A] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 4: Club Newsletter */}
        <div className="flex flex-col space-y-5">
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C5A86A] font-semibold">
            The Club
          </span>
          <p className="font-sans text-xs text-[#FAF8F5]/60 leading-relaxed tracking-wider">
            Join our newsletter to receive seasonal updates, luxury tips, and priority booking invites.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative flex items-center border-b border-[#FAF8F5]/20 focus-within:border-[#C5A86A] transition-colors duration-300 py-1.5 mt-2"
          >
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-transparent text-xs tracking-[0.15em] text-[#FAF8F5] placeholder-[#FAF8F5]/30 focus:outline-none w-full pr-10 font-sans"
              required
            />
            <button
              type="submit"
              onMouseEnter={playHover}
              onClick={playClick}
              className="absolute right-0 text-[#C5A86A] hover:text-white transition-colors text-xs font-semibold tracking-widest font-sans cursor-pointer uppercase"
              aria-label="Subscribe"
            >
              JOIN
            </button>
          </form>
          {/* Social Icons */}
          <div className="flex items-center space-x-3.5 pt-4">
            {[
              { href: "https://www.instagram.com/maisondebeautedemo", icon: <Instagram size={14} />, label: "Instagram" },
              { href: "https://www.facebook.com/maisondebeautedemo", icon: <Facebook size={14} />, label: "Facebook" },
              { href: "https://wa.me/447000000000", icon: <MessageCircle size={14} />, label: "WhatsApp" },
              { href: "tel:02071234567", icon: <Phone size={13} />, label: "Call Us" }
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[#FAF8F5]/50 hover:text-[#C5A86A] hover:border-[#C5A86A] transition-all duration-300"
                aria-label={soc.label}
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Copyright Footer Links */}
      <div className="max-w-[1360px] mx-auto px-4 md:px-8 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[8px] tracking-[0.25em] uppercase text-[#FAF8F5]/35 gap-4">
        <p>&copy; {new Date().getFullYear()} Maison de Beauté. All rights reserved.</p>
        <div className="flex items-center space-x-8">
          <Link href="/privacy-statement" onMouseEnter={playHover} onClick={playClick} className="hover:text-[#C5A86A] transition-colors relative group pb-0.5">
            Privacy Policy
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A86A] transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link href="/terms-and-conditions" onMouseEnter={playHover} onClick={playClick} className="hover:text-[#C5A86A] transition-colors relative group pb-0.5">
            Terms & Conditions
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A86A] transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>
      </div>

    </footer>
  );
};
