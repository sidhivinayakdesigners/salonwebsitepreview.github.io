"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useSound } from "@/components/ui/ambient-sound";

export const Navbar = () => {
  const { playHover, playClick } = useSound();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 h-24 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#EFECE6] shadow-sm text-[#1E241B]"
            : "bg-[#FAF8F5]/80 backdrop-blur-sm border-b border-[#EFECE6]/40 text-[#1E241B]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
          
          {/* Left Side: Brand Logo (Centered absolutely on mobile, left-aligned relative on desktop) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:relative lg:left-auto lg:top-auto lg:translate-x-0 lg:translate-y-0 lg:transform-none z-20 flex flex-col items-center lg:items-start justify-center">
            <Link href="/" onMouseEnter={playHover} onClick={playClick} className="flex flex-col items-center lg:items-start group select-none">
              <span className="font-serif text-base sm:text-lg md:text-xl tracking-[0.22em] font-normal uppercase whitespace-nowrap text-[#1E241B] leading-none">
                MAISON DE BEAUTÉ
              </span>
              <div className="flex items-center w-full justify-center lg:justify-start space-x-1.5 mt-1.5">
                <div className="h-[0.5px] w-4 bg-[#1E241B]/15" />
                <span className="text-[6.5px] sm:text-[7.5px] tracking-[0.35em] text-[#C5A86A] uppercase font-sans font-semibold">
                  LONDON
                </span>
                <div className="h-[0.5px] w-4 bg-[#1E241B]/15" />
              </div>
            </Link>
          </div>

          {/* Left Side Menu Toggle (Mobile/Tablet only) */}
          <div className="flex items-center lg:hidden z-10">
            <button
              onClick={toggleMobileMenu}
              onMouseEnter={playHover}
              className="transition-colors focus:outline-none p-1 cursor-pointer text-[#1E241B] hover:text-[#C5A86A]"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Right Side: Navigation Menu (Desktop only) */}
          <nav className="hidden lg:flex items-center space-x-1 text-[11px] sm:text-xs font-serif font-normal tracking-[0.2em] uppercase z-10">
            
            {/* HOME */}
            <Link
              href="/"
              onMouseEnter={playHover}
              onClick={playClick}
              className={`px-4 py-2 relative transition-colors ${
                pathname === "/" ? "text-[#C5A86A]" : "text-[#1E241B] hover:text-[#C5A86A]"
              }`}
            >
              HOME
              {pathname === "/" && (
                <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-[#C5A86A]" />
              )}
            </Link>

            {/* ABOUT */}
            <div
              className="relative"
              onMouseEnter={() => { playHover(); setActiveDropdown("about"); }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 flex items-center space-x-1 hover:text-[#C5A86A] transition-colors focus:outline-none cursor-pointer font-serif uppercase tracking-[0.2em]">
                <span>ABOUT +</span>
              </button>
              
              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 mt-1 w-44 bg-[#FAF8F5] border border-[#EFECE6] rounded shadow-lg py-2 z-50 text-[#1E241B] origin-top font-serif tracking-[0.18em]"
                  >
                    {[
                      { href: "/team-members", label: "TEAM MEMBERS" },
                      { href: "/careers", label: "CAREERS" }
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onMouseEnter={playHover}
                        onClick={playClick}
                        className="block px-5 py-2.5 hover:bg-[#E8E5DF] text-[9px] font-normal text-[#1E241B] hover:text-[#C5A86A] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => { playHover(); setActiveDropdown("services"); }}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-2 flex items-center space-x-1 hover:text-[#C5A86A] transition-colors focus:outline-none cursor-pointer font-serif uppercase tracking-[0.2em]">
                <span>SERVICES +</span>
              </button>
              
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 mt-1 w-44 bg-[#FAF8F5] border border-[#EFECE6] rounded shadow-lg py-2 z-50 text-[#1E241B] origin-top font-serif tracking-[0.18em]"
                  >
                    {[
                      { href: "/hair", label: "HAIR" },
                      { href: "/nails", label: "NAILS" },
                      { href: "/beauty", label: "BEAUTY" },
                      { href: "/bridal", label: "BRIDAL" }
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onMouseEnter={playHover}
                        onClick={playClick}
                        className="block px-5 py-2.5 hover:bg-[#E8E5DF] text-[9px] font-normal text-[#1E241B] hover:text-[#C5A86A] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* BEAUTS, THE BLOWER, FAQs, CONTACT */}
            {[
              { href: "/beauts", label: "BEAUTS" },
              { href: "/blower", label: "THE BLOWER" },
              { href: "/faqs", label: "FAQ'S" },
              { href: "/contact", label: "CONTACT" }
            ].map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onMouseEnter={playHover}
                onClick={playClick}
                className={`px-4 py-2 relative transition-colors ${
                  pathname === link.href ? "text-[#C5A86A]" : "text-[#1E241B] hover:text-[#C5A86A]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-[#C5A86A]" />
                )}
              </Link>
            ))}

          </nav>

        </div>
      </motion.header>

      {/* Mobile Sidebar Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
              className="fixed inset-0 bg-[#1E241B]/40 backdrop-blur-sm z-40 lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="fixed top-0 left-0 w-72 h-full bg-[#1E241B] text-[#FAF8F5] z-50 p-6 flex flex-col justify-between shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="space-y-8">
                {/* Logo & Close */}
                <div className="flex items-center justify-between pb-4 border-b border-[#FAF8F5]/10">
                  <div className="flex flex-col">
                    <span className="font-serif text-sm tracking-[0.15em] font-bold">
                      MAISON DE BEAUTÉ
                    </span>
                    <span className="text-[6px] tracking-[0.25em] text-[#C5A86A] uppercase font-sans mt-0.5">
                      LONDON
                    </span>
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="text-[#FAF8F5] hover:text-[#C5A86A] transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col space-y-4 font-sans text-xs tracking-widest uppercase font-bold text-[#FAF8F5]/90">
                  <Link href="/" onMouseEnter={playHover} onClick={() => { playClick(); toggleMobileMenu(); }} className="hover:text-[#C5A86A] transition-colors">
                    Home
                  </Link>
                  <div className="space-y-2">
                    <span className="text-[#C5A86A] text-[8px] tracking-[0.3em] uppercase block font-semibold font-sans">About Us</span>
                    <div className="pl-3 flex flex-col space-y-2.5 border-l border-[#FAF8F5]/10">
                      <Link href="/team-members" onMouseEnter={playHover} onClick={() => { playClick(); toggleMobileMenu(); }} className="hover:text-[#C5A86A] transition-colors">Team Members</Link>
                      <Link href="/careers" onMouseEnter={playHover} onClick={() => { playClick(); toggleMobileMenu(); }} className="hover:text-[#C5A86A] transition-colors">Careers</Link>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[#C5A86A] text-[8px] tracking-[0.3em] uppercase block font-semibold font-sans">Services</span>
                    <div className="pl-3 flex flex-col space-y-2.5 border-l border-[#FAF8F5]/10">
                      <Link href="/hair" onMouseEnter={playHover} onClick={() => { playClick(); toggleMobileMenu(); }} className="hover:text-[#C5A86A] transition-colors">Hair</Link>
                      <Link href="/nails" onMouseEnter={playHover} onClick={() => { playClick(); toggleMobileMenu(); }} className="hover:text-[#C5A86A] transition-colors">Nails</Link>
                      <Link href="/beauty" onMouseEnter={playHover} onClick={() => { playClick(); toggleMobileMenu(); }} className="hover:text-[#C5A86A] transition-colors">Beauty</Link>
                      <Link href="/bridal" onMouseEnter={playHover} onClick={() => { playClick(); toggleMobileMenu(); }} className="hover:text-[#C5A86A] transition-colors">Bridal</Link>
                    </div>
                  </div>
                  <Link href="/beauts" onMouseEnter={playHover} onClick={() => { playClick(); toggleMobileMenu(); }} className="hover:text-[#C5A86A] transition-colors">
                    Beauts
                  </Link>
                  <Link href="/blower" onMouseEnter={playHover} onClick={() => { playClick(); toggleMobileMenu(); }} className="hover:text-[#C5A86A] transition-colors">
                    The Blower
                  </Link>
                  <Link href="/faqs" onMouseEnter={playHover} onClick={() => { playClick(); toggleMobileMenu(); }} className="hover:text-[#C5A86A] transition-colors">
                    Faq's
                  </Link>
                  <Link href="/contact" onMouseEnter={playHover} onClick={() => { playClick(); toggleMobileMenu(); }} className="hover:text-[#C5A86A] transition-colors">
                    Contact
                  </Link>
                </nav>
              </div>

              {/* Bottom Details */}
              <div className="pt-6 border-t border-[#FAF8F5]/10 text-center space-y-4">
                <Link
                  href="https://www.fresha.com/providers/maison-de-beaute-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C5A86A] text-white font-semibold text-[9px] tracking-[0.25em] uppercase py-3 rounded-full w-full block shadow hover:bg-[#B49658] transition-colors"
                >
                  Book Online
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
