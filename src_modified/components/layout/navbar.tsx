"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// Brand colours (matching live site layout, custom palette for our colours)
const SAGE = "#E5A99E";       // Our brand blush — used where live site uses sage green on buttons
const HEADER_BG = "#4a5e4f";  // Live site header dark sage green
const HEADER_TEXT = "#FFFFFF"; // White text on dark header

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 select-none"
        style={{ backgroundColor: HEADER_BG }}
      >
        {/* Scallop Divider at the bottom of the header */}
        <div className="absolute bottom-[-12px] left-0 w-full h-[12px] header-scallop z-10" />

        <div className="max-w-none px-6 h-[70px] flex items-center justify-between">
          
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-5">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-white/70 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo — text version matching live site style */}
            <Link href="/" className="flex flex-col items-center leading-none group">
              <span className="font-serif tracking-[0.18em] text-white text-[18px] font-normal uppercase group-hover:text-white/80 transition-colors">
                BLUSH + BLOW
              </span>
              <div className="flex items-center gap-2 w-full mt-[2px]">
                <span className="flex-1 h-[0.5px] bg-white/40" />
                <span className="text-white text-[8px] tracking-[0.3em] uppercase font-normal">
                  LONDON
                </span>
                <span className="flex-1 h-[0.5px] bg-white/40" />
              </div>
            </Link>
          </div>

          {/* Center / Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0 text-[11px] font-sans tracking-[0.18em] uppercase">
            {[
              { href: "/", label: "Home" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-[10px] transition-colors hover:text-white/70 ${
                  pathname === href ? "text-white underline underline-offset-4" : "text-white"
                }`}
              >
                {label}
              </Link>
            ))}

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-[10px] text-white hover:text-white/70 transition-colors focus:outline-none cursor-pointer tracking-[0.18em] uppercase text-[11px] font-sans flex items-center gap-1">
                About +
              </button>
              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-1 w-48 bg-white border border-gray-100 shadow-lg py-1 z-50"
                  >
                    {[
                      { href: "/team-members", label: "Team Members" },
                      { href: "/careers", label: "Careers" },
                    ].map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        className="block px-4 py-2 text-[10px] tracking-widest uppercase text-[#4a5e4f] hover:bg-gray-50 transition-colors"
                      >
                        {label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 py-[10px] text-white hover:text-white/70 transition-colors focus:outline-none cursor-pointer tracking-[0.18em] uppercase text-[11px] font-sans flex items-center gap-1">
                Services +
              </button>
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full mt-1 w-48 bg-white border border-gray-100 shadow-lg py-1 z-50"
                  >
                    {[
                      { href: "/hair", label: "Hair" },
                      { href: "/nails", label: "Nails" },
                      { href: "/beauty", label: "Beauty" },
                      { href: "/bridal", label: "Bridal" },
                    ].map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        className="block px-4 py-2 text-[10px] tracking-widest uppercase text-[#4a5e4f] hover:bg-gray-50 transition-colors"
                      >
                        {label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {[
              { href: "/beauts", label: "Beauts" },
              { href: "/blower", label: "The Blower" },
              { href: "/faqs", label: "Faq's" },
              { href: "/contact", label: "Contact" },
              { href: "/contact", label: "Refer A Friend" },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className={`px-4 py-[10px] transition-colors hover:text-white/70 ${
                  pathname === href ? "text-white underline underline-offset-4" : "text-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right: Book Now */}
          <Link
            href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
            className="hidden sm:block border border-white text-white text-[10px] tracking-[0.2em] uppercase px-5 py-2 hover:bg-white hover:text-[#4a5e4f] transition-all duration-300 font-sans whitespace-nowrap"
          >
            Book Now
          </Link>
        </div>
      </header>

      {/* Mobile Sidebar Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
              className="fixed inset-0 bg-black z-40"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="fixed top-0 left-0 w-72 h-full z-50 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
              style={{ backgroundColor: HEADER_BG }}
            >
              <div className="space-y-8">
                {/* Logo & Close */}
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <div className="flex flex-col items-center">
                    <span className="font-serif text-[16px] tracking-[0.18em] text-white uppercase">
                      BLUSH + BLOW
                    </span>
                    <span className="text-[8px] tracking-[0.3em] text-white/60 uppercase mt-1">
                      LONDON
                    </span>
                  </div>
                  <button onClick={toggleMobileMenu} className="text-white hover:text-white/70">
                    <X size={20} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col space-y-5 font-sans text-[11px] tracking-widest uppercase text-white">
                  <Link href="/" onClick={toggleMobileMenu} className="hover:text-white/70 transition-colors">Home</Link>
                  <div className="space-y-2">
                    <span className="text-white/50 text-[10px] tracking-widest uppercase">About</span>
                    <div className="pl-4 flex flex-col space-y-2">
                      <Link href="/team-members" onClick={toggleMobileMenu} className="hover:text-white/70 transition-colors">Team Members</Link>
                      <Link href="/careers" onClick={toggleMobileMenu} className="hover:text-white/70 transition-colors">Careers</Link>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-white/50 text-[10px] tracking-widest uppercase">Services</span>
                    <div className="pl-4 flex flex-col space-y-2">
                      <Link href="/hair" onClick={toggleMobileMenu} className="hover:text-white/70 transition-colors">Hair</Link>
                      <Link href="/nails" onClick={toggleMobileMenu} className="hover:text-white/70 transition-colors">Nails</Link>
                      <Link href="/beauty" onClick={toggleMobileMenu} className="hover:text-white/70 transition-colors">Beauty</Link>
                      <Link href="/bridal" onClick={toggleMobileMenu} className="hover:text-white/70 transition-colors">Bridal</Link>
                    </div>
                  </div>
                  <Link href="/beauts" onClick={toggleMobileMenu} className="hover:text-white/70 transition-colors">Beauts</Link>
                  <Link href="/blower" onClick={toggleMobileMenu} className="hover:text-white/70 transition-colors">The Blower</Link>
                  <Link href="/faqs" onClick={toggleMobileMenu} className="hover:text-white/70 transition-colors">Faq's</Link>
                  <Link href="/contact" onClick={toggleMobileMenu} className="hover:text-white/70 transition-colors">Contact</Link>
                  <Link href="/contact" onClick={toggleMobileMenu} className="hover:text-white/70 transition-colors">Refer A Friend</Link>
                </nav>
              </div>

              {/* Bottom */}
              <div className="pt-6 border-t border-white/20 text-center space-y-4">
                <Link
                  href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                  className="border border-white text-white font-sans text-[10px] tracking-[0.2em] uppercase py-3 w-full block hover:bg-white hover:text-[#4a5e4f] transition-colors"
                >
                  Book Appointment
                </Link>
                <p className="text-[9px] text-white/50 tracking-wider">
                  197 New Kings Rd, SW6 4SR • 020 7736 0430
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
