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

      <main className="pt-32 pb-24 bg-[#FCFAF7] min-h-screen text-[#181816] font-sans">
        
        {/* Title Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center space-y-4">
          <h1 className="font-serif text-5xl md:text-6xl text-[#181816] font-semibold uppercase tracking-wider">
            Careers
          </h1>
          <div className="h-[1px] w-24 bg-[#C6A86B]/30 mx-auto" />
          <p className="text-sm md:text-base text-[#666666] leading-relaxed tracking-wider max-w-3xl mx-auto font-light">
            We’re always excited to connect with new talent! If you’re interested in joining our passionate team, please feel free to reach out by emailing{" "}
            <a href="mailto:info@blushandblowlondon.com" className="text-[#C6A86B] underline font-semibold">
              info@blushandblowlondon.com
            </a>.
          </p>
        </div>

        {/* Career Inquiry Form Section */}
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-[#ECE8E1] p-8 md:p-12 rounded-none space-y-6 shadow-premium">
            <div>
              <h3 className="font-serif text-2xl text-[#181816] font-semibold uppercase tracking-wider">
                Apply to Join the Team
              </h3>
              <p className="font-sans text-xs text-[#666666] tracking-wide mt-2">
                Fill out the quick form below or email us your CV directly at info@blushandblowlondon.com.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-[#C6A86B]/10 border border-[#C6A86B]/20 rounded-none flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle size={36} className="text-[#C6A86B]" />
                <h4 className="font-serif text-lg text-[#181816] font-semibold">
                  Application Received
                </h4>
                <p className="font-sans text-xs text-[#666666] max-w-sm">
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
                  <label className="font-sans text-[10px] tracking-widest text-[#5A6655] uppercase font-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#5A6655] uppercase font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#5A6655] uppercase font-semibold">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    className="bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#5A6655] uppercase font-semibold">
                    Desired Role / Specialism
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hair Stylist, Nail Tech"
                    className="bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors placeholder-[#a5a5a5]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2 sm:col-span-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#5A6655] uppercase font-semibold">
                    Years of Industry Experience
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2 sm:col-span-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#5A6655] uppercase font-semibold">
                    Covering Note / Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about yourself and why you'd like to work with us..."
                    className="bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors resize-none placeholder-[#a5a5a5]"
                    required
                  />
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#5A6655] text-white font-semibold text-xs tracking-[0.25em] uppercase py-4 rounded-none hover:bg-[#C6A86B] transition-all duration-300 cursor-pointer"
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
