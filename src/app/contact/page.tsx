"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useSound } from "@/components/ui/ambient-sound";

export default function ContactPage() {
  const { playHover, playClick } = useSound();
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#FAF8F5] min-h-screen text-[#1E241B] font-sans">
        
        {/* Title Block */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16 space-y-4">
          <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
            GET IN TOUCH
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#1E241B] font-light uppercase tracking-wider italic">
            Contact Us
          </h1>
          <div className="h-[1px] w-16 bg-[#C5A86A]/40 mx-auto" />
          <p className="text-xs sm:text-sm text-[#1E241B]/75 leading-relaxed tracking-wider max-w-2xl mx-auto">
            We’re here to assist you on your hair, nails, and beauty journey. Use our WhatsApp channel to talk to our reception staff or to our new AI receptionist if our staff are busy with clients.
          </p>
        </div>

        {/* Form and Contact Details Grid */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-stretch">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-[#EFECE6] rounded-lg shadow-premium flex flex-col justify-between">
            <div className="mb-8">
              <span className="text-[#C5A86A] text-[8px] tracking-[0.25em] font-bold uppercase block">
                CONCIERGE MESSAGING
              </span>
              <h2 className="font-serif text-2xl text-[#1E241B] font-light uppercase tracking-wider italic mt-1">
                Send a Message
              </h2>
              <div className="h-[1px] w-12 bg-[#C5A86A]/30 mt-2" />
            </div>

            {formSubmitted ? (
              <div className="p-10 bg-[#EFECE6]/40 border border-[#C5A86A]/20 rounded-lg flex flex-col items-center justify-center text-center space-y-4 h-full">
                <CheckCircle size={32} className="text-[#C5A86A]" />
                <h3 className="font-serif text-lg text-[#1E241B] font-semibold uppercase tracking-wider">
                  Thank You
                </h3>
                <p className="font-sans text-xs text-[#1E241B]/60 max-w-sm tracking-wide leading-relaxed">
                  Your message has been delivered to the front desk. We will respond as quickly as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="flex flex-col space-y-1.5">
                  <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="bg-transparent border-b border-[#1E241B]/15 py-3 text-xs tracking-wider text-[#1E241B] focus:outline-none focus:border-[#C5A86A]"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    className="bg-transparent border-b border-[#1E241B]/15 py-3 text-xs tracking-wider text-[#1E241B] focus:outline-none focus:border-[#C5A86A]"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    placeholder="Your Mobile Number"
                    className="bg-transparent border-b border-[#1E241B]/15 py-3 text-xs tracking-wider text-[#1E241B] focus:outline-none focus:border-[#C5A86A]"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Your Message"
                    className="bg-transparent border-b border-[#1E241B]/15 py-3 text-xs tracking-wider text-[#1E241B] focus:outline-none focus:border-[#C5A86A] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="w-full bg-[#1E241B] hover:bg-[#5C6B57] text-[#FAF8F5] font-sans text-[10px] font-bold tracking-[0.25em] uppercase py-4 rounded-full transition-all duration-300 cursor-pointer shadow-md"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details Card */}
          <div className="lg:col-span-5 bg-white border border-[#EFECE6] p-8 md:p-12 rounded-lg shadow-premium flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-[#C5A86A] text-[8px] tracking-[0.25em] font-bold uppercase block">
                INFORMATION
              </span>
              <h2 className="font-serif text-2xl text-[#1E241B] font-light uppercase tracking-wider italic">
                Contact Details
              </h2>
              <div className="h-[1px] w-12 bg-[#C5A86A]/30 mt-2" />

              <ul className="space-y-6 font-sans text-xs tracking-wider">
                <li>
                  <span className="text-[9px] tracking-widest uppercase text-[#1E241B]/40 font-bold block mb-1">
                    Call Us
                  </span>
                  <a href="tel:02071234567" className="hover:text-[#C5A86A] transition-colors text-sm font-semibold">
                    020 7123 4567
                  </a>
                </li>

                <li>
                  <span className="text-[9px] tracking-widest uppercase text-[#1E241B]/40 font-bold block mb-1">
                    Enquiries & Marketing
                  </span>
                  <a href="mailto:info@maisondebeautelondon.com" className="hover:text-[#C5A86A] transition-colors text-sm font-semibold">
                    info@maisondebeautelondon.com
                  </a>
                </li>

                <li>
                  <span className="text-[9px] tracking-widest uppercase text-[#1E241B]/40 font-bold block mb-1">
                    Press & PR
                  </span>
                  <a href="mailto:press@maisondebeautedemo.com" className="hover:text-[#C5A86A] transition-colors text-sm font-semibold">
                    press@maisondebeautedemo.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Action Grid */}
            <div className="pt-8 border-t border-[#EFECE6] space-y-4">
              <span className="text-[9px] tracking-widest uppercase text-[#1E241B]/40 font-bold block">
                Quick Booking
              </span>
              <div className="grid grid-cols-2 gap-3 text-[9px] font-bold tracking-widest uppercase text-center font-sans">
                <Link
                  href="https://wa.me/447000000000"
                  target="_blank"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="bg-[#25d366] text-white py-3.5 rounded-full hover:bg-[#1ebd58] transition-all duration-300 shadow-sm"
                >
                  WhatsApp
                </Link>
                <Link
                  href="https://www.fresha.com/providers/maison-de-beaute-demo"
                  target="_blank"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="bg-[#C5A86A] text-white py-3.5 rounded-full hover:bg-[#B49658] transition-all duration-300 shadow-sm"
                >
                  Book Online
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Opening Hours Block */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="bg-white border border-[#EFECE6] rounded-lg p-8 md:p-12 shadow-premium">
            <div className="text-center mb-8">
              <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
                OPERATIONAL TIMINGS
              </span>
              <h2 className="font-serif text-3xl text-[#1E241B] font-light uppercase tracking-wider italic mt-1">
                Opening Hours
              </h2>
              <div className="h-[1px] w-12 bg-[#C5A86A]/40 mx-auto mt-2" />
            </div>

            <div className="max-w-md mx-auto">
              <table className="w-full text-xs font-sans tracking-widest border-collapse">
                <tbody>
                  {[
                    { day: "Monday", hours: "9:00 am - 6:00 pm" },
                    { day: "Tuesday", hours: "9:00 am - 6:00 pm" },
                    { day: "Wednesday", hours: "9:00 am - 6:00 pm" },
                    { day: "Thursday", hours: "9:00 am - 8:00 pm" },
                    { day: "Friday", hours: "9:00 am - 8:00 pm" },
                    { day: "Saturday", hours: "9:00 am - 6:00 pm" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#EFECE6]/80 last:border-b-0"
                    >
                      <td className="py-4 font-bold uppercase text-[9px] text-[#1E241B]/70">
                        {row.day}
                      </td>
                      <td className="py-4 text-right font-light text-[#1E241B]/80">
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-4 font-bold uppercase text-[9px] text-[#C5A86A]">
                      Bank Holidays
                    </td>
                    <td className="py-4 text-right font-light text-[#1E241B]/50">
                      Closed
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Franchise Section */}
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="h-[1px] bg-[#EFECE6] w-full mb-16" />
          
          <div className="space-y-6">
            <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
              BUSINESS OPPORTUNITIES
            </span>
            <h2 className="font-serif text-3xl text-[#1E241B] font-light uppercase tracking-wider italic mt-1">
              Franchise
            </h2>
            <p className="text-xs sm:text-sm text-[#1E241B]/70 leading-relaxed tracking-wider max-w-2xl mx-auto font-light">
              Are you excited about the growth of Hair, Nails and Beauty treatments and interested in our help setting up your own Maison de Beauté? We welcome driven individuals who share our dedication to Hair, Nails or Beauty excellence. Reach out via email with your background, ideas, and preferred geographical location for opening your very own Maison de Beauté franchise business. We look forward to hearing from you.
            </p>
            <div className="pt-4">
              <a
                href="mailto:info@maisondebeautelondon.com"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-block bg-[#1E241B] hover:bg-[#5C6B57] text-[#FAF8F5] font-sans text-[10px] font-bold tracking-[0.25em] uppercase px-10 py-4.5 rounded-full transition-all duration-300 shadow-md"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
