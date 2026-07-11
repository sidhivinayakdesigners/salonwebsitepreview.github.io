"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 border-t border-white/5 font-sans">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.12
            }
          }
        }}
        className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
      >
        
        {/* Brand details */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-6"
        >
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
            {[
              { href: "https://www.instagram.com/blushandblowlondon", icon: <Instagram size={18} />, label: "Instagram" },
              { href: "https://www.facebook.com/blushandblow", icon: <Facebook size={18} />, label: "Facebook" },
              { href: "https://wa.me/447979782832", icon: <MessageCircle size={18} />, label: "WhatsApp" },
              { href: "tel:02077360430", icon: <Phone size={16} />, label: "Call Us" }
            ].map((soc, idx) => (
              <motion.a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="text-[#999999] hover:text-[#C6A86B] transition-colors"
                aria-label={soc.label}
              >
                {soc.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-6"
        >
          <h4 className="font-serif text-sm tracking-[0.22em] uppercase text-[#C6A86B] font-medium">
            About Us
          </h4>
          <nav className="flex flex-col space-y-3 font-sans text-xs tracking-widest text-[#999999]">
            {[
              { href: "/", label: "Home" },
              { href: "/team-members", label: "Team Members" },
              { href: "/careers", label: "Careers" },
              { href: "/contact", label: "Contact & Hours" }
            ].map((link, idx) => (
              <motion.div key={idx} whileHover={{ x: 3 }}>
                <Link href={link.href} className="hover:text-[#C6A86B] transition-colors">
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        {/* Services menu */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-6"
        >
          <h4 className="font-serif text-sm tracking-[0.22em] uppercase text-[#C6A86B] font-medium">
            Services
          </h4>
          <nav className="flex flex-col space-y-3 font-sans text-xs tracking-widest text-[#999999]">
            {[
              { href: "/hair", label: "Hair Styling & Color" },
              { href: "/nails", label: "Nails (Hands & Feet)" },
              { href: "/beauty", label: "Brows, Makeup & Massage" },
              { href: "/bridal", label: "Bridal Hair & Makeup" }
            ].map((link, idx) => (
              <motion.div key={idx} whileHover={{ x: 3 }}>
                <Link href={link.href} className="hover:text-[#C6A86B] transition-colors">
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 25 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-6"
        >
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
              className="bg-[#1A1A1A] border border-white/10 rounded px-5 py-3 text-xs tracking-widest text-white placeholder-[#555555] focus:outline-none focus:border-[#C6A86B] w-full transition-colors"
              required
            />
            <Button
              type="submit"
              variant="gold-solid"
              className="px-6 py-3 min-w-[100px] text-[10px] cursor-pointer hover:bg-[#C6A86B] transition-colors"
            >
              Join
            </Button>
          </form>
        </motion.div>

      </motion.div>

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
