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

      <main className="pt-32 pb-24 bg-[#FCFAF7] min-h-screen text-[#181816] font-sans">
        
        {/* Title Wrap */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <div className="text-center md:text-left border-b border-[#ECE8E1] pb-6">
            <h1 className="font-serif text-5xl md:text-6xl text-[#181816] font-semibold tracking-wider uppercase">
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
                className="flex flex-col bg-white text-[#181816] shadow-premium hover:shadow-premium-hover border border-[#ECE8E1] overflow-hidden transition-all duration-500 rounded-none"
              >
                {/* Thumbnail Wrap */}
                <Link href={serv.learnLink} className="h-[300px] relative w-full overflow-hidden bg-[#FCFAF7] block border-b border-[#ECE8E1]">
                  <Image
                    src={serv.img}
                    alt={serv.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-108 transition-transform duration-700 ease-out"
                    priority={index < 2}
                  />
                </Link>

                {/* Content Wrap */}
                <div className="p-8 md:p-12 flex-grow flex flex-col justify-between items-center text-center space-y-6 bg-white">
                  <div className="space-y-4 w-full">
                    <Link href={serv.learnLink} className="hover:text-[#C6A86B] transition-colors block">
                      <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-[0.05em] uppercase text-[#181816] hover:text-[#C6A86B] transition-colors">
                        {serv.title}
                      </h2>
                    </Link>
                    <hr className="border-t border-[#ECE8E1] w-full" />
                    <p className="font-sans text-xs md:text-sm leading-relaxed tracking-wider text-[#666666] min-h-[60px] flex items-center justify-center font-light">
                      {serv.desc}
                    </p>
                  </div>

                  {/* Buttons Wrap */}
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2 w-full">
                    <Link
                      href={serv.learnLink}
                      className="border border-[#5A6655]/45 text-[#5A6655] font-bold text-[10px] tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#5A6655] hover:text-white transition-all duration-300 min-w-[140px] text-center rounded-none"
                    >
                      Learn More
                    </Link>
                    <a
                      href={serv.bookLink}
                      className="bg-[#5A6655] border border-[#5A6655] text-white font-bold text-[10px] tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#C6A86B] hover:border-[#C6A86B] transition-all duration-300 min-w-[140px] text-center rounded-none"
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
          <div className="bg-white border border-[#ECE8E1] p-8 md:p-12 rounded-none space-y-6 shadow-premium">
            <div>
              <h3 className="font-serif text-2xl text-[#181816] font-semibold uppercase tracking-wider">
                Bridal Consultation Request
              </h3>
              <p className="font-sans text-xs text-[#666666] tracking-wide mt-2">
                Share details about your wedding day. Our bridal coordinator will contact you to discuss options and plan trials.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-[#C6A86B]/10 border border-[#C6A86B]/20 rounded-none flex flex-col items-center justify-center text-center space-y-3">
                <CheckCircle size={36} className="text-[#C6A86B]" />
                <h4 className="font-serif text-lg text-[#181816] font-semibold">
                  Request Received
                </h4>
                <p className="font-sans text-xs text-[#666666] max-w-sm">
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
                  <label className="font-sans text-[10px] tracking-widest text-[#5A6655] uppercase font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#5A6655] uppercase font-semibold">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    className="bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#5A6655] uppercase font-semibold">
                    Wedding Location / Venue
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#5A6655] uppercase font-semibold">
                    Bridal Party Size (Hair/Makeup)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bride + 3 bridesmaids"
                    className="bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors placeholder-[#a5a5a5]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2 sm:col-span-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#5A6655] uppercase font-semibold">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    className="bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-2 sm:col-span-2">
                  <label className="font-sans text-[10px] tracking-widest text-[#5A6655] uppercase font-semibold">
                    Additional Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share details about style preferences, destinations, timings, etc."
                    className="bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors resize-none placeholder-[#a5a5a5]"
                  />
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#5A6655] text-white font-semibold text-xs tracking-[0.25em] uppercase py-4 rounded-none hover:bg-[#C6A86B] transition-all duration-300 cursor-pointer"
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
