"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const bridalServicesGrid = [
  {
    title: "Bridal hair",
    img: "/images/bridal_hair.jpg",
    desc: "Romantic hair updos, textured waves, and in-salon bridal hair trials mapped specifically to your bridal gown and hair accessories.",
    learnLink: "/service/bridal-hair",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Bridal Makeup",
    img: "/images/bridal_makeup.jpg",
    desc: "Camera-ready, long-lasting wedding makeup styling. Tailored using premium cosmetic ranges and setting sprays for complete confidence.",
    learnLink: "/service/bridal-makeup",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
];

export default function BridalServices() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#eae5db] min-h-screen text-[#788672] font-sans">
        
        {/* Title Wrap */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <div className="text-center md:text-left border-b border-[#dcd7cc] pb-6">
            <h1 className="font-serif text-5xl md:text-6xl text-[#788672] font-semibold tracking-wider uppercase">
              Bridal
            </h1>
          </div>
        </div>

        {/* Treatment Boxes Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {bridalServicesGrid.map((serv, index) => (
              <div
                key={index}
                className="flex flex-col bg-[#788672] text-[#fcfaf7] shadow-md border border-[#788672]/20 overflow-hidden"
              >
                {/* Thumbnail Wrap */}
                <Link href={serv.learnLink} className="h-[300px] relative w-full overflow-hidden bg-[#677461] block">
                  <Image
                    src={serv.img}
                    alt={serv.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-102 transition-transform duration-700"
                    priority={index < 2}
                  />
                </Link>

                {/* Content Wrap */}
                <div className="p-8 md:p-12 flex-grow flex flex-col justify-between items-center text-center space-y-6">
                  <div className="space-y-4 w-full">
                    <Link href={serv.learnLink} className="hover:text-[#C6A86B] transition-colors block">
                      <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-[0.05em] uppercase text-white">
                        {serv.title}
                      </h2>
                    </Link>
                    <hr className="border-t border-white/20 w-full" />
                    <p className="font-sans text-xs md:text-sm leading-relaxed tracking-wider text-white/90 min-h-[60px] flex items-center justify-center">
                      {serv.desc}
                    </p>
                  </div>

                  {/* Buttons Wrap */}
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2 w-full">
                    <Link
                      href={serv.learnLink}
                      className="border border-white text-white font-bold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-white hover:text-[#788672] transition-all duration-300 min-w-[140px] text-center"
                    >
                      Learn More
                    </Link>
                    <a
                      href={serv.bookLink}
                      className="bg-[#eae5db] border border-[#eae5db] text-[#788672] font-bold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-white hover:text-[#788672] hover:border-white transition-all duration-300 min-w-[140px] text-center"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bridal Inquiry Form Section */}
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-[#cbd1c9]/35 border border-[#dcd7cc] p-8 md:p-12 rounded-xl space-y-6 shadow-sm">
            <div>
              <h3 className="font-serif text-2xl text-[#788672] font-semibold uppercase tracking-wider">
                Bridal Consultation Request
              </h3>
              <p className="font-sans text-xs text-[#788672]/70 tracking-wide mt-2">
                Share details about your wedding day. Our bridal coordinator will contact you to discuss options and plan trials.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-[#eae5db]/60 border border-[#788672]/25 rounded-2xl flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle size={36} className="text-[#788672]" />
                <h4 className="font-serif text-lg text-[#788672] font-semibold">
                  Request Received
                </h4>
                <p className="font-sans text-xs text-[#788672]/70 max-w-sm">
                  Thank you. We would be honored to style your big day. Our bridal coordinator will get back to you within 24 hours.
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
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                    Wedding Location / Venue
                  </label>
                  <input
                    type="text"
                    className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                    Bridal Party Size (Hair/Makeup)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bride + 3 bridesmaids"
                    className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2 sm:col-span-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2 sm:col-span-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                    Additional Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share details about style preferences, destinations, timings, etc."
                    className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-4 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672] resize-none"
                  />
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#788672] text-[#fcfaf7] font-semibold text-xs tracking-[0.25em] uppercase py-4 rounded shadow hover:bg-[#677461] transition-all duration-300"
                  >
                    Submit Consultation Request
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
