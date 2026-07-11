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

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#FCFAF7] min-h-screen text-[#181816] font-sans">
        
        {/* Title Block */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16 space-y-4">
          <h1 className="font-serif text-5xl md:text-6xl text-[#181816] font-semibold uppercase tracking-wider">
            Contact Us
          </h1>
          <div className="h-[1px] w-24 bg-[#C6A86B]/30 mx-auto" />
          <p className="text-sm md:text-base text-[#666666] leading-relaxed tracking-wider max-w-2xl mx-auto font-light">
            We’re here to assist you on your hair nails and beauty journey. Use our WhatsApp channel to talk to our reception staff or to our new AI receptionist if our staff are busy with clients.
          </p>
        </div>

        {/* Form and Contact Details Grid */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-stretch">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-[#ECE8E1] shadow-premium rounded-none flex flex-col justify-between">
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-semibold uppercase tracking-wider text-[#181816]">
                Send a Message
              </h2>
              <div className="h-[1px] w-12 bg-[#C6A86B]/30 mt-2" />
            </div>

            {formSubmitted ? (
              <div className="p-10 bg-[#C6A86B]/10 border border-[#C6A86B]/20 rounded-none flex flex-col items-center justify-center text-center space-y-4 h-full">
                <CheckCircle size={44} className="text-[#C6A86B]" />
                <h3 className="font-serif text-xl font-semibold uppercase text-[#181816]">
                  Thank You
                </h3>
                <p className="font-sans text-xs text-[#666666] max-w-sm">
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
                  <label className="text-[10px] tracking-widest uppercase font-bold text-[#5A6655]">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-[#5A6655]">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-[#5A6655]">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    className="bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-[10px] tracking-widest uppercase font-bold text-[#5A6655]">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    required
                    className="bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#5A6655] text-white font-semibold text-xs tracking-[0.25em] uppercase py-4 rounded-none hover:bg-[#C6A86B] transition-colors cursor-pointer"
                >
                  Send
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details Card */}
          <div className="lg:col-span-5 bg-white border border-[#ECE8E1] p-8 md:p-12 shadow-premium rounded-none flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="font-serif text-2xl font-semibold uppercase tracking-wider text-[#181816]">
                Contact Details
              </h2>
              <div className="h-[1px] w-12 bg-[#C6A86B]/30 mt-2" />

              <ul className="space-y-6 font-sans text-sm tracking-wider">
                <li>
                  <span className="text-[10px] tracking-widest uppercase text-[#5A6655] font-bold block mb-1">
                    Call Us
                  </span>
                  <a href="tel:02077360430" className="hover:text-[#C6A86B] text-[#181816] font-semibold transition-colors">
                    020 7736 0430
                  </a>
                </li>

                <li>
                  <span className="text-[10px] tracking-widest uppercase text-[#5A6655] font-bold block mb-1">
                    Enquiries & Marketing
                  </span>
                  <a href="mailto:info@blushandblowlondon.com" className="hover:text-[#C6A86B] text-[#181816] font-semibold transition-colors">
                    info@blushandblowlondon.com
                  </a>
                </li>

                <li>
                  <span className="text-[10px] tracking-widest uppercase text-[#5A6655] font-bold block mb-1">
                    Press & PR
                  </span>
                  <a href="mailto:mel@melissalloydpr.com" className="hover:text-[#C6A86B] text-[#181816] font-semibold transition-colors">
                    mel@melissalloydpr.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Action Grid */}
            <div className="pt-8 border-t border-[#ECE8E1] space-y-4">
              <span className="text-[10px] tracking-widest uppercase text-[#5A6655] font-bold block">
                Quick Booking
              </span>
              <div className="grid grid-cols-2 gap-3 text-[10px] font-bold tracking-widest uppercase text-center">
                <Link
                  href="https://wa.me/447979782832"
                  target="_blank"
                  className="bg-[#25d366] text-white py-3 rounded-none hover:bg-[#1ebd58] transition-colors cursor-pointer"
                >
                  WhatsApp
                </Link>
                <Link
                  href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                  target="_blank"
                  className="bg-[#5A6655] text-white py-3 rounded-none hover:bg-[#C6A86B] transition-colors cursor-pointer"
                >
                  Book Online
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Opening Hours Block */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="bg-white text-[#181816] rounded-none p-8 md:p-12 shadow-premium border border-[#ECE8E1]">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl uppercase tracking-wider font-semibold text-[#181816]">
                Opening Hours
              </h2>
              <div className="h-[1px] w-12 bg-[#C6A86B]/30 mx-auto mt-2" />
            </div>

            <div className="max-w-md mx-auto">
              <table className="w-full text-sm font-sans tracking-wider border-collapse">
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
                      className="border-b border-[#ECE8E1] last:border-b-0"
                    >
                      <td className="py-3 font-semibold uppercase text-xs text-[#5A6655]">
                        {row.day}
                      </td>
                      <td className="py-3 text-right font-light text-[#666666]">
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-3 font-semibold uppercase text-xs text-[#C6A86B]">
                      Bank Holidays
                    </td>
                    <td className="py-3 text-right font-light text-[#666666]/60">
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
          <div className="h-[1px] bg-[#ECE8E1] w-full mb-16" />
          
          <div className="space-y-6">
            <h2 className="font-serif text-3xl uppercase tracking-wider font-semibold text-[#181816]">
              Franchise
            </h2>
            <p className="text-sm text-[#666666] leading-relaxed tracking-wider max-w-2xl mx-auto font-light">
              Are you excited about the growth of Hair, Nails and Beauty treatments and interested in our help setting up your own Blush + Blow? We welcome driven individuals who share our dedication to Hair, Nails or Beauty excellence. Reach out via email with your background, ideas, and preferred geographical location for opening your very own Blush + Blow franchise business. We look forward to hearing from you.
            </p>
            <div className="pt-4">
              <a
                href="mailto:info@blushandblowlondon.com"
                className="inline-block bg-[#5A6655] text-white font-semibold text-xs tracking-[0.25em] uppercase px-10 py-4.5 rounded-none hover:bg-[#C6A86B] transition-colors cursor-pointer"
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
