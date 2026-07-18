"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useSound } from "@/components/ui/ambient-sound";

export const Footer = () => {
  const { playHover, playClick } = useSound();
  return (
    <footer className="bg-[#121610] text-[#FAF8F5] pt-20 pb-20 border-t border-white/5 font-sans">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
      >
        
        {/* Brand details */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-6"
        >
          <Link href="/" className="flex flex-col select-none">
            <span className="font-serif text-base tracking-[0.25em] text-white uppercase font-bold">
              MAISON DE BEAUTÉ
            </span>
            <span className="text-[7px] tracking-[0.35em] text-[#C5A86A] uppercase mt-0.5 font-sans">
              LONDON
            </span>
          </Link>
          <p className="font-sans text-xs text-[#FAF8F5]/60 leading-relaxed tracking-wider max-w-xs">
            Maison de Beauté London offers premium hair, nails, beauty, and skincare services in the heart of Chelsea on Maison Avenue, Kensington (SW6).
          </p>
          {/* Social Icons */}
          <div className="flex items-center space-x-5 pt-2">
            {[
              { href: "https://www.instagram.com/maisondebeautedemo", icon: <Instagram size={16} />, label: "Instagram" },
              { href: "https://www.facebook.com/maisondebeautedemo", icon: <Facebook size={16} />, label: "Facebook" },
              { href: "https://wa.me/447000000000", icon: <MessageCircle size={16} />, label: "WhatsApp" },
              { href: "tel:02071234567", icon: <Phone size={15} />, label: "Call Us" }
            ].map((soc, idx) => (
              <motion.a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-[#FAF8F5]/50 hover:text-[#C5A86A] transition-colors"
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
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-6"
        >
          <h4 className="font-serif text-xs tracking-[0.2em] uppercase text-[#C5A86A] font-semibold">
            About Us
          </h4>
          <nav className="flex flex-col space-y-3 font-sans text-xs tracking-widest text-[#FAF8F5]/60">
            {[
              { href: "/", label: "Home" },
              { href: "/team-members", label: "Team Members" },
              { href: "/careers", label: "Careers" },
              { href: "/contact", label: "Contact & Hours" }
            ].map((link, idx) => (
              <motion.div key={idx} whileHover={{ x: 2 }}>
                <Link href={link.href} onMouseEnter={playHover} onClick={playClick} className="hover:text-[#C5A86A] transition-colors">
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        {/* Services menu */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-6"
        >
          <h4 className="font-serif text-xs tracking-[0.2em] uppercase text-[#C5A86A] font-semibold font-sans">
            Services
          </h4>
          <nav className="flex flex-col space-y-3 font-sans text-xs tracking-widest text-[#FAF8F5]/60">
            {[
              { href: "/hair", label: "Hair Styling & Color" },
              { href: "/nails", label: "Nails (Hands & Feet)" },
              { href: "/beauty", label: "Brows, Makeup & Massage" },
              { href: "/bridal", label: "Bridal Hair & Makeup" }
            ].map((link, idx) => (
              <motion.div key={idx} whileHover={{ x: 2 }}>
                <Link href={link.href} onMouseEnter={playHover} onClick={playClick} className="hover:text-[#C5A86A] transition-colors">
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-6"
        >
          <h4 className="font-serif text-xs tracking-[0.2em] uppercase text-[#C5A86A] font-semibold">
            Newsletter
          </h4>
          <p className="font-sans text-xs text-[#FAF8F5]/60 leading-relaxed tracking-wider">
            Subscribe to stay updated with Maison de Beauté news, seasonal promotions, and beauty tips.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col space-y-3 pt-2"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent border-b border-[#FAF8F5]/20 pb-2 text-xs tracking-widest text-[#FAF8F5] placeholder-[#FAF8F5]/30 focus:outline-none focus:border-[#C5A86A] w-full transition-colors"
              required
            />
            <Button
              type="submit"
              variant="gold-solid"
              onMouseEnter={playHover}
              onClick={playClick}
              className="px-6 py-2.5 text-[8px] mt-2 self-start bg-[#C5A86A] border-[#C5A86A] text-white hover:bg-[#B49658]"
            >
              Subscribe
            </Button>
          </form>
        </motion.div>

      </motion.div>

      {/* Border & Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[8px] tracking-[0.2em] uppercase text-[#FAF8F5]/30 gap-4">
        <p>&copy; {new Date().getFullYear()} Maison de Beauté London. All Rights Reserved.</p>
        <div className="flex items-center space-x-6">
          <Link href="/" onMouseEnter={playHover} onClick={playClick} className="hover:text-[#C5A86A] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/" onMouseEnter={playHover} onClick={playClick} className="hover:text-[#C5A86A] transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};
