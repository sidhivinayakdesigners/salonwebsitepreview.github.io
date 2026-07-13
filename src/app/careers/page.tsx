"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CheckCircle } from "lucide-react";

export default function CareersPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#FAF8F5] min-h-screen text-[#1E241B] font-sans">
        
        {/* Title Section */}
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center space-y-4">
          <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
            JOIN BLUSH + BLOW
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#1E241B] font-light uppercase tracking-wider italic">
            Careers
          </h1>
          <div className="h-[1px] w-16 bg-[#C5A86A]/40 mx-auto" />
          <p className="text-xs sm:text-sm text-[#1E241B]/75 leading-relaxed tracking-wider max-w-2xl mx-auto">
            We’re always excited to connect with new talent! If you’re interested in joining our passionate team, please feel free to reach out by emailing{" "}
            <a href="mailto:info@blushandblowlondon.com" className="text-[#C5A86A] underline font-bold transition-colors hover:text-[#B49658]">
              info@blushandblowlondon.com
            </a>.
          </p>
        </div>

        {/* Career Inquiry Form Section */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-[#EFECE6] p-8 md:p-12 rounded-lg space-y-8 shadow-premium">
            <div>
              <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
                TALENT ACQUISITION
              </span>
              <h3 className="font-serif text-2xl text-[#1E241B] font-light uppercase tracking-wider italic mt-1">
                Apply to Join the Team
              </h3>
              <p className="font-sans text-xs text-[#1E241B]/60 tracking-wide mt-2 leading-relaxed">
                Fill out the quick form below or email us your CV directly at info@blushandblowlondon.com.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-[#EFECE6]/40 border border-[#C5A86A]/20 rounded-lg flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle size={32} className="text-[#C5A86A]" />
                <h4 className="font-serif text-lg text-[#1E241B] font-semibold uppercase tracking-wider">
                  Application Received
                </h4>
                <p className="font-sans text-xs text-[#1E241B]/60 max-w-sm tracking-wide leading-relaxed">
                  Thank you for your interest in Blush + Blow London. Our operations manager will review your submission and contact you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                <div className="flex flex-col space-y-1.5">
                  <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-[#1E241B]/15 py-3 text-xs tracking-wider text-[#1E241B] focus:outline-none focus:border-[#C5A86A]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-[#1E241B]/15 py-3 text-xs tracking-wider text-[#1E241B] focus:outline-none focus:border-[#C5A86A]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    className="bg-transparent border-b border-[#1E241B]/15 py-3 text-xs tracking-wider text-[#1E241B] focus:outline-none focus:border-[#C5A86A]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                    Desired Role
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hair Stylist, Nail Tech"
                    className="bg-transparent border-b border-[#1E241B]/15 py-3 text-xs tracking-wider text-[#1E241B] focus:outline-none focus:border-[#C5A86A]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5 sm:col-span-2">
                  <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                    Years of Industry Experience
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-[#1E241B]/15 py-3 text-xs tracking-wider text-[#1E241B] focus:outline-none focus:border-[#C5A86A]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5 sm:col-span-2">
                  <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                    Covering Note
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about yourself and why you'd like to work with us..."
                    className="bg-transparent border-b border-[#1E241B]/15 py-3 text-xs tracking-wider text-[#1E241B] focus:outline-none focus:border-[#C5A86A] resize-none"
                    required
                  />
                </div>

                <div className="sm:col-span-2 pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#1E241B] hover:bg-[#5C6B57] text-[#FAF8F5] font-sans text-[10px] font-bold tracking-[0.25em] uppercase py-4 rounded-full transition-all duration-300 cursor-pointer shadow-md"
                  >
                    Submit CV / Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
