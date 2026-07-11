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

      <main className="pt-32 pb-24 bg-[#eae5db] min-h-screen text-[#788672] font-sans">
        
        {/* Title Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center space-y-4">
          <h1 className="font-serif text-5xl md:text-6xl text-[#788672] font-semibold uppercase tracking-wider">
            Careers
          </h1>
          <div className="h-[1px] w-24 bg-[#788672]/30 mx-auto" />
          <p className="text-sm md:text-base text-[#788672]/85 leading-relaxed tracking-wider max-w-3xl mx-auto">
            We’re always excited to connect with new talent! If you’re interested in joining our passionate team, please feel free to reach out by emailing{" "}
            <a href="mailto:info@blushandblowlondon.com" className="text-[#C6A86B] underline font-bold">
              info@blushandblowlondon.com
            </a>.
          </p>
        </div>

        {/* Career Inquiry Form Section */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-[#cbd1c9]/35 border border-[#dcd7cc] p-8 md:p-12 rounded-xl space-y-6 shadow-sm">
            <div>
              <h3 className="font-serif text-2xl text-[#788672] font-semibold uppercase tracking-wider">
                Apply to Join the Team
              </h3>
              <p className="font-sans text-xs text-[#788672]/70 tracking-wide mt-2">
                Fill out the quick form below or email us your CV directly at info@blushandblowlondon.com.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-[#eae5db]/60 border border-[#788672]/25 rounded-2xl flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle size={36} className="text-[#788672]" />
                <h4 className="font-serif text-lg text-[#788672] font-semibold">
                  Application Received
                </h4>
                <p className="font-sans text-xs text-[#788672]/70 max-w-sm">
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
                <div className="flex flex-col space-y-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                    Desired Role / Specialism
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hair Stylist, Nail Tech"
                    className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2 sm:col-span-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                    Years of Industry Experience
                  </label>
                  <input
                    type="text"
                    className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2 sm:col-span-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                    Covering Note / Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about yourself and why you'd like to work with us..."
                    className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-4 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672] resize-none"
                    required
                  />
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#788672] text-[#fcfaf7] font-semibold text-xs tracking-[0.25em] uppercase py-4 rounded shadow hover:bg-[#677461] transition-all duration-300"
                  >
                    Submit Inquiry
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
