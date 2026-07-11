"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 bg-[#FFFFFF]/90 backdrop-blur-md text-[#111111] border-b border-[#ECE8E1] shadow-sm select-none h-20"
      >
        {/* Scallop Divider at the bottom of the header */}
        <div className="absolute bottom-[-10px] left-0 w-full h-[10px] header-scallop z-25 opacity-30" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between relative">
          
          {/* Left Side: Hamburger & Logo (aligned horizontally for desktop, relative for mobile) */}
          <div className="flex items-center space-x-5 z-10">
            <button
              onClick={toggleMobileMenu}
              className="text-[#111111] hover:text-[#C6A86B] transition-colors focus:outline-none p-1 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Logo Link */}
            <Link href="/" className="flex items-center group shrink-0">
              <div className="relative w-[150px] h-[40px]">
                <img
                  src="/images/logo.svg"
                  alt="Blush + Blow London"
                  className="object-contain w-full h-full"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links (Clean, borderless links centered vertically) */}
          <nav className="hidden lg:flex items-center space-x-6 text-[10px] font-sans font-bold tracking-[0.2em] uppercase">
            <Link
              href="/"
              className={`hover:text-[#C6A86B] relative transition-colors ${
                pathname === "/" ? "text-[#C6A86B]" : "text-[#111111]"
              }`}
            >
              <span>Home</span>
              {pathname === "/" && (
                <motion.div layoutId="nav-underline" className="absolute bottom-[-10px] left-0 right-0 h-[2px] bg-[#C6A86B]" />
              )}
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`hover:text-[#C6A86B] transition-colors focus:outline-none space-x-1 cursor-pointer flex items-center ${
                  pathname.startsWith("/team-members") || pathname.startsWith("/careers") ? "text-[#C6A86B]" : "text-[#111111]"
                }`}
              >
                <span>About +</span>
                {(pathname.startsWith("/team-members") || pathname.startsWith("/careers")) && (
                  <motion.div layoutId="nav-underline" className="absolute bottom-[-10px] left-0 right-0 h-[2px] bg-[#C6A86B]" />
                )}
              </button>
              
              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 420, damping: 28 }}
                    className="absolute left-0 mt-2 w-44 bg-[#FFFFFF] border border-[#ECE8E1] rounded shadow-lg py-2 z-50 text-[#111111] origin-top"
                  >
                    {[
                      { href: "/team-members", label: "Team Members" },
                      { href: "/careers", label: "Careers" }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Link
                          href={item.href}
                          className="block px-5 py-2 hover:bg-[#FDF8F6] text-[9px] tracking-widest font-bold text-[#111111] hover:text-[#C6A86B] transition-colors"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
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
              <button 
                className={`hover:text-[#C6A86B] transition-colors focus:outline-none space-x-1 cursor-pointer flex items-center ${
                  ["/hair", "/nails", "/beauty", "/bridal"].includes(pathname) ? "text-[#C6A86B]" : "text-[#111111]"
                }`}
              >
                <span>Services +</span>
                {["/hair", "/nails", "/beauty", "/bridal"].includes(pathname) && (
                  <motion.div layoutId="nav-underline" className="absolute bottom-[-10px] left-0 right-0 h-[2px] bg-[#C6A86B]" />
                )}
              </button>
              
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 420, damping: 28 }}
                    className="absolute left-0 mt-2 w-44 bg-[#FFFFFF] border border-[#ECE8E1] rounded shadow-lg py-2 z-50 text-[#111111] origin-top"
                  >
                    {[
                      { href: "/hair", label: "Hair" },
                      { href: "/nails", label: "Nails" },
                      { href: "/beauty", label: "Beauty" },
                      { href: "/bridal", label: "Bridal" }
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <Link
                          href={item.href}
                          className="block px-5 py-2 hover:bg-[#FDF8F6] text-[9px] tracking-widest font-bold text-[#111111] hover:text-[#C6A86B] transition-colors"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/beauts"
              className={`hover:text-[#C6A86B] relative transition-colors ${
                pathname === "/beauts" ? "text-[#C6A86B]" : "text-[#111111]"
              }`}
            >
              <span>Beauts</span>
              {pathname === "/beauts" && (
                <motion.div layoutId="nav-underline" className="absolute bottom-[-10px] left-0 right-0 h-[2px] bg-[#C6A86B]" />
              )}
            </Link>
            
            <Link
              href="/blower"
              className={`hover:text-[#C6A86B] relative transition-colors ${
                pathname === "/blower" ? "text-[#C6A86B]" : "text-[#111111]"
              }`}
            >
              <span>The Blower</span>
              {pathname === "/blower" && (
                <motion.div layoutId="nav-underline" className="absolute bottom-[-10px] left-0 right-0 h-[2px] bg-[#C6A86B]" />
              )}
            </Link>

            <Link
              href="/faqs"
              className={`hover:text-[#C6A86B] relative transition-colors ${
                pathname === "/faqs" ? "text-[#C6A86B]" : "text-[#111111]"
              }`}
            >
              <span>Faq's</span>
              {pathname === "/faqs" && (
                <motion.div layoutId="nav-underline" className="absolute bottom-[-10px] left-0 right-0 h-[2px] bg-[#C6A86B]" />
              )}
            </Link>

            <Link
              href="/contact"
              className={`hover:text-[#C6A86B] relative transition-colors ${
                pathname === "/contact" ? "text-[#C6A86B]" : "text-[#111111]"
              }`}
            >
              <span>Contact</span>
              {pathname === "/contact" && (
                <motion.div layoutId="nav-underline" className="absolute bottom-[-10px] left-0 right-0 h-[2px] bg-[#C6A86B]" />
              )}
            </Link>

            <Link
              href="/contact"
              className="hover:text-[#C6A86B] relative transition-colors text-[#111111]"
            >
              <span>Refer A Friend</span>
            </Link>
          </nav>

          {/* Right Side: Primary Blush Pink Book Now Button */}
          <div className="z-10">
            <Link
              href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
              className="bg-[#E5A99E] text-white font-semibold text-[8px] sm:text-[10px] tracking-[0.25em] uppercase px-3 py-2 sm:px-5 sm:py-2.5 rounded-none shadow-sm hover:bg-[#111111] transition-all duration-300 block text-center whitespace-nowrap"
            >
              Book Now
            </Link>
          </div>

        </div>
      </motion.header>

      {/* Mobile Sidebar Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
              className="fixed inset-0 bg-black/60 z-40"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="fixed top-0 left-0 w-72 h-full bg-[#FFFFFF] text-[#111111] border-r border-[#ECE8E1] z-50 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            >
              <div className="space-y-8">
                {/* Logo & Close */}
                <div className="flex items-center justify-between pb-4 border-b border-[#ECE8E1]">
                  <div className="flex flex-col items-center">
                    <span className="font-serif text-lg tracking-[0.2em] font-bold text-[#111111]">
                      BLUSH + BLOW
                    </span>
                    <span className="text-[7px] tracking-[0.35em] text-[#C6A86B] font-medium">
                      LONDON
                    </span>
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="text-[#111111] hover:text-[#C6A86B]"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col space-y-4 font-sans text-xs tracking-widest uppercase font-bold text-[#111111]">
                  <Link href="/" onClick={toggleMobileMenu} className="hover:text-[#C6A86B] transition-colors">
                    Home
                  </Link>
                  <div className="space-y-2">
                    <span className="text-[#111111]/50 text-[10px] tracking-widest uppercase">About</span>
                    <div className="pl-4 flex flex-col space-y-2">
                      <Link href="/team-members" onClick={toggleMobileMenu} className="hover:text-[#C6A86B] transition-colors">Team Members</Link>
                      <Link href="/careers" onClick={toggleMobileMenu} className="hover:text-[#C6A86B] transition-colors">Careers</Link>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[#111111]/50 text-[10px] tracking-widest uppercase">Services</span>
                    <div className="pl-4 flex flex-col space-y-2">
                      <Link href="/hair" onClick={toggleMobileMenu} className="hover:text-[#C6A86B] transition-colors">Hair</Link>
                      <Link href="/nails" onClick={toggleMobileMenu} className="hover:text-[#C6A86B] transition-colors">Nails</Link>
                      <Link href="/beauty" onClick={toggleMobileMenu} className="hover:text-[#C6A86B] transition-colors">Beauty</Link>
                      <Link href="/bridal" onClick={toggleMobileMenu} className="hover:text-[#C6A86B] transition-colors">Bridal</Link>
                    </div>
                  </div>
                  <Link href="/beauts" onClick={toggleMobileMenu} className="hover:text-[#C6A86B] transition-colors">
                    Beauts
                  </Link>
                  <Link href="/blower" onClick={toggleMobileMenu} className="hover:text-[#C6A86B] transition-colors">
                    The Blower
                  </Link>
                  <Link href="/faqs" onClick={toggleMobileMenu} className="hover:text-[#C6A86B] transition-colors">
                    Faq's
                  </Link>
                  <Link href="/contact" onClick={toggleMobileMenu} className="hover:text-[#C6A86B] transition-colors">
                    Contact
                  </Link>
                  <Link href="/contact" onClick={toggleMobileMenu} className="hover:text-[#C6A86B] transition-colors">
                    Refer A Friend
                  </Link>
                </nav>
              </div>

              {/* Bottom Details */}
              <div className="pt-6 border-t border-[#ECE8E1] text-center space-y-4">
                <Link
                  href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                  className="bg-[#E5A99E] text-white font-semibold text-[10px] tracking-[0.25em] uppercase py-3.5 rounded-none w-full block shadow-sm hover:bg-[#111111] transition-colors"
                >
                  Book Appointment
                </Link>
                <p className="text-[8px] text-[#111111]/70 tracking-wider">
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
