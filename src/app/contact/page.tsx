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

      <main className="pt-32 pb-24 bg-[#eae5db] min-h-screen text-[#788672] font-sans">
        
        {/* Title Block */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16 space-y-4">
          <h1 className="font-serif text-5xl md:text-6xl text-[#788672] font-semibold uppercase tracking-wider">
            Contact Us
          </h1>
          <div className="h-[1px] w-24 bg-[#788672]/30 mx-auto" />
          <p className="text-sm md:text-base text-[#788672]/85 leading-relaxed tracking-wider max-w-2xl mx-auto font-medium">
            We’re here to assist you on your hair nails and beauty journey. Use our WhatsApp channel to talk to our reception staff or to our new AI receptionist if our staff are busy with clients.
          </p>
        </div>

        {/* Form and Contact Details Grid */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-stretch">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#eae5db] p-8 md:p-12 border border-[#dcd7cc] shadow-sm flex flex-col justify-between">
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-semibold uppercase tracking-wider">
                Send a Message
              </h2>
              <div className="h-[1px] w-12 bg-[#788672]/30 mt-2" />
            </div>

            {formSubmitted ? (
              <div className="p-10 bg-[#cbd1c9]/25 border border-[#788672]/20 rounded flex flex-col items-center justify-center text-center space-y-4 h-full">
                <CheckCircle size={44} className="text-[#788672]" />
                <h3 className="font-serif text-xl font-semibold uppercase">
                  Thank You
                </h3>
                <p className="font-sans text-xs text-[#788672]/80 max-w-sm">
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
                  <label className="text-[10px] tracking-widest uppercase font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="bg-[#cbd1c9]/30 border border-[#dcd7cc] rounded px-4 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-[10px] tracking-widest uppercase font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    className="bg-[#cbd1c9]/30 border border-[#dcd7cc] rounded px-4 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-[10px] tracking-widest uppercase font-bold">
                    Mobile
                  </label>
                  <input
                    type="tel"
                    placeholder="Your Mobile"
                    className="bg-[#cbd1c9]/30 border border-[#dcd7cc] rounded px-4 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <label className="text-[10px] tracking-widest uppercase font-bold">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Your Message"
                    className="bg-[#cbd1c9]/30 border border-[#dcd7cc] rounded px-4 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#788672] text-white font-semibold text-xs tracking-[0.25em] uppercase py-4 rounded shadow-sm hover:bg-[#677461] transition-colors"
                >
                  Send
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details Card */}
          <div className="lg:col-span-5 bg-[#cbd1c9]/25 border border-[#788672]/10 p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="font-serif text-2xl font-semibold uppercase tracking-wider">
                Contact Details
              </h2>
              <div className="h-[1px] w-12 bg-[#788672]/30 mt-2" />

              <ul className="space-y-6 font-sans text-sm tracking-wider">
                <li>
                  <span className="text-[10px] tracking-widest uppercase text-[#788672]/70 font-bold block mb-1">
                    Call Us
                  </span>
                  <a href="tel:02077360430" className="hover:text-[#677461] font-semibold">
                    020 7736 0430
                  </a>
                </li>

                <li>
                  <span className="text-[10px] tracking-widest uppercase text-[#788672]/70 font-bold block mb-1">
                    Enquiries & Marketing
                  </span>
                  <a href="mailto:info@blushandblowlondon.com" className="hover:text-[#677461] font-semibold">
                    info@blushandblowlondon.com
                  </a>
                </li>

                <li>
                  <span className="text-[10px] tracking-widest uppercase text-[#788672]/70 font-bold block mb-1">
                    Press & PR
                  </span>
                  <a href="mailto:mel@melissalloydpr.com" className="hover:text-[#677461] font-semibold">
                    mel@melissalloydpr.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Action Grid */}
            <div className="pt-8 border-t border-[#788672]/10 space-y-4">
              <span className="text-[10px] tracking-widest uppercase text-[#788672]/70 font-bold block">
                Quick Booking
              </span>
              <div className="grid grid-cols-2 gap-3 text-[10px] font-bold tracking-widest uppercase text-center">
                <Link
                  href="https://wa.me/447979782832"
                  target="_blank"
                  className="bg-[#25d366] text-white py-3 rounded hover:bg-[#1ebd58] transition-colors"
                >
                  WhatsApp
                </Link>
                <Link
                  href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                  target="_blank"
                  className="bg-[#788672] text-white py-3 rounded hover:bg-[#677461] transition-colors"
                >
                  Book Online
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Opening Hours Block */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="bg-[#788672] text-[#fcfaf7] rounded-lg p-8 md:p-12 shadow-sm border border-[#788672]/10">
            <div className="text-center mb-8">
              <h2 className="font-serif text-3xl uppercase tracking-wider font-semibold">
                Opening Hours
              </h2>
              <div className="h-[1px] w-12 bg-white/30 mx-auto mt-2" />
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
                      className="border-b border-white/10 last:border-b-0"
                    >
                      <td className="py-3 font-semibold uppercase text-xs">
                        {row.day}
                      </td>
                      <td className="py-3 text-right font-light text-white/90">
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-3 font-semibold uppercase text-xs text-[#C6A86B]">
                      Bank Holidays
                    </td>
                    <td className="py-3 text-right font-light text-white/60">
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
          <div className="h-[1px] bg-[#788672]/15 w-full mb-16" />
          
          <div className="space-y-6">
            <h2 className="font-serif text-3xl uppercase tracking-wider font-semibold">
              Franchise
            </h2>
            <p className="text-sm text-[#788672]/85 leading-relaxed tracking-wider max-w-2xl mx-auto font-light">
              Are you excited about the growth of Hair, Nails and Beauty treatments and interested in our help setting up your own Blush + Blow? We welcome driven individuals who share our dedication to Hair, Nails or Beauty excellence. Reach out via email with your background, ideas, and preferred geographical location for opening your very own Blush + Blow franchise business. We look forward to hearing from you.
            </p>
            <div className="pt-4">
              <a
                href="mailto:info@blushandblowlondon.com"
                className="inline-block bg-[#788672] text-white font-semibold text-xs tracking-[0.25em] uppercase px-10 py-4.5 rounded shadow-sm hover:bg-[#677461] transition-colors"
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
