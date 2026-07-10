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
      <header className="fixed top-0 left-0 w-full z-50 bg-[#788672] text-white shadow-md select-none h-20">
        {/* Scallop Divider at the bottom of the header */}
        <div className="absolute bottom-[-10px] left-0 w-full h-[10px] header-scallop z-25" />

        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative">
          
          {/* Left Side: Hamburger & Logo */}
          <div className="flex items-center space-x-5">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-white/80 transition-colors focus:outline-none p-1"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <Link href="/" className="flex flex-col items-center">
              <span className="font-serif text-lg md:text-xl tracking-[0.22em] text-white uppercase font-bold">
                BLUSH + BLOW
              </span>
              <div className="flex items-center w-full justify-center space-x-1.5 mt-0.5">
                <div className="h-[0.5px] bg-white/40 flex-grow" />
                <span className="text-[7px] tracking-[0.35em] text-white/90 uppercase font-sans font-light">
                  LONDON
                </span>
                <div className="h-[0.5px] bg-white/40 flex-grow" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center h-full text-[10px] font-sans font-bold tracking-[0.2em] uppercase">
            <Link
              href="/"
              className={`px-4 flex items-center h-full border-r border-white/10 transition-colors ${
                pathname === "/" ? "bg-[#677461] border-l border-white/10" : "hover:bg-[#677461]"
              }`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div
              className="relative h-full border-r border-white/10"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 flex items-center h-full hover:bg-[#677461] transition-colors focus:outline-none space-x-1">
                <span>About +</span>
              </button>
              
              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 w-44 bg-white border border-[#dcd7cc] rounded-lg shadow-lg py-2 z-50 text-[#788672]"
                  >
                    <Link
                      href="/#about"
                      className="block px-5 py-2 hover:bg-[#FAF8F6] text-[9px] tracking-widest font-bold"
                    >
                      Story
                    </Link>
                    <Link
                      href="/#team"
                      className="block px-5 py-2 hover:bg-[#FAF8F6] text-[9px] tracking-widest font-bold"
                    >
                      Team
                    </Link>
                    <Link
                      href="/#gallery"
                      className="block px-5 py-2 hover:bg-[#FAF8F6] text-[9px] tracking-widest font-bold"
                    >
                      Salon
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services Dropdown */}
            <div
              className="relative h-full border-r border-white/10"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-4 flex items-center h-full hover:bg-[#677461] transition-colors focus:outline-none space-x-1">
                <span>Services +</span>
              </button>
              
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 w-44 bg-white border border-[#dcd7cc] rounded-lg shadow-lg py-2 z-50 text-[#788672]"
                  >
                    <Link
                      href="/hair"
                      className="block px-5 py-2 hover:bg-[#FAF8F6] text-[9px] tracking-widest font-bold"
                    >
                      Hair
                    </Link>
                    <Link
                      href="/nails"
                      className="block px-5 py-2 hover:bg-[#FAF8F6] text-[9px] tracking-widest font-bold"
                    >
                      Nails
                    </Link>
                    <Link
                      href="/beauty"
                      className="block px-5 py-2 hover:bg-[#FAF8F6] text-[9px] tracking-widest font-bold"
                    >
                      Beauty
                    </Link>
                    <Link
                      href="/skin"
                      className="block px-5 py-2 hover:bg-[#FAF8F6] text-[9px] tracking-widest font-bold"
                    >
                      Skin
                    </Link>
                    <Link
                      href="/bridal"
                      className="block px-5 py-2 hover:bg-[#FAF8F6] text-[9px] tracking-widest font-bold"
                    >
                      Bridal
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/#team"
              className="px-4 flex items-center h-full border-r border-white/10 hover:bg-[#677461] transition-colors"
            >
              Beauts
            </Link>
            
            <Link
              href="/hair"
              className="px-4 flex items-center h-full border-r border-white/10 hover:bg-[#677461] transition-colors"
            >
              The Blower
            </Link>

            <Link
              href="/#faq"
              className="px-4 flex items-center h-full border-r border-white/10 hover:bg-[#677461] transition-colors"
            >
              Faq's
            </Link>

            <Link
              href="/#contact"
              className="px-4 flex items-center h-full border-r border-white/10 hover:bg-[#677461] transition-colors"
            >
              Contact
            </Link>

            <Link
              href="/#contact"
              className="px-4 flex items-center h-full hover:bg-[#677461] transition-colors"
            >
              Refer A Friend
            </Link>
          </nav>

          {/* Right Side: Cream Book Now Button */}
          <div>
            <Link
              href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
              className="bg-[#fcfaf7] text-[#788672] font-semibold text-[10px] tracking-[0.25em] uppercase px-5 py-2.5 rounded shadow-sm hover:bg-white transition-all duration-300 block text-center"
            >
              Book Now
            </Link>
          </div>

        </div>
      </header>

      {/* Mobile Sidebar Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 w-72 h-full bg-[#788672] text-white z-50 p-6 flex flex-col justify-between shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="space-y-8">
                {/* Logo & Close */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex flex-col items-center">
                    <span className="font-serif text-lg tracking-[0.2em] font-bold">
                      BLUSH + BLOW
                    </span>
                    <span className="text-[7px] tracking-[0.35em] font-light">
                      LONDON
                    </span>
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="text-white hover:text-white/80"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col space-y-4 font-sans text-xs tracking-widest uppercase font-bold">
                  <Link href="/" onClick={toggleMobileMenu} className="hover:text-white/80">
                    Home
                  </Link>
                  <div className="space-y-2">
                    <span className="text-white/50 text-[10px]">About</span>
                    <div className="pl-4 flex flex-col space-y-2">
                      <Link href="/#about" onClick={toggleMobileMenu} className="hover:text-white/80">Story</Link>
                      <Link href="/#team" onClick={toggleMobileMenu} className="hover:text-white/80">Team</Link>
                      <Link href="/#gallery" onClick={toggleMobileMenu} className="hover:text-white/80">Salon</Link>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <span className="text-white/50 text-[10px]">Services</span>
                    <div className="pl-4 flex flex-col space-y-2">
                      <Link href="/hair" onClick={toggleMobileMenu} className="hover:text-white/80">Hair</Link>
                      <Link href="/nails" onClick={toggleMobileMenu} className="hover:text-white/80">Nails</Link>
                      <Link href="/beauty" onClick={toggleMobileMenu} className="hover:text-white/80">Beauty</Link>
                      <Link href="/skin" onClick={toggleMobileMenu} className="hover:text-white/80">Skin</Link>
                      <Link href="/bridal" onClick={toggleMobileMenu} className="hover:text-white/80">Bridal</Link>
                    </div>
                  </div>
                  <Link href="/#team" onClick={toggleMobileMenu} className="hover:text-white/80">
                    Beauts
                  </Link>
                  <Link href="/hair" onClick={toggleMobileMenu} className="hover:text-white/80">
                    The Blower
                  </Link>
                  <Link href="/#faq" onClick={toggleMobileMenu} className="hover:text-white/80">
                    Faq's
                  </Link>
                  <Link href="/#contact" onClick={toggleMobileMenu} className="hover:text-white/80">
                    Contact
                  </Link>
                </nav>
              </div>

              {/* Bottom Details */}
              <div className="pt-6 border-t border-white/10 text-center space-y-4">
                <Link
                  href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                  className="bg-[#fcfaf7] text-[#788672] font-semibold text-[10px] tracking-[0.25em] uppercase py-3 rounded w-full block shadow"
                >
                  Book Appointment
                </Link>
                <p className="text-[8px] text-white/50 tracking-wider">
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
