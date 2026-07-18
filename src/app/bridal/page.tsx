"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useSound } from "@/components/ui/ambient-sound";

const bridalServicesGrid = [
  {
    title: "Bridal hair",
    img: "/images/bridal_hair.jpg",
    desc: "Romantic hair updos, textured waves, and in-salon bridal hair trials mapped specifically to your bridal gown and hair accessories.",
    learnLink: "/service/bridal-hair",
    bookLink: "https://www.fresha.com/providers/maison-de-beaute-demo",
  },
  {
    title: "Bridal Makeup",
    img: "/images/bridal_makeup.jpg",
    desc: "Camera-ready, long-lasting wedding makeup styling. Tailored using premium cosmetic ranges and setting sprays for complete confidence.",
    learnLink: "/service/bridal-makeup",
    bookLink: "https://www.fresha.com/providers/maison-de-beaute-demo",
  },
];

export default function BridalServices() {
  const { playHover, playClick } = useSound();
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#FAF8F5] min-h-screen text-[#1E241B] font-sans">
        
        {/* Title Wrap */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center md:text-left border-b border-[#EFECE6] pb-8">
            <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans mb-2">
              MAISON DE BEAUTÉ
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-[#1E241B] font-light tracking-wider uppercase italic">
              Bridal <span className="font-sans not-italic font-semibold text-[0.8em] text-[#5C6B57]">Services</span>
            </h1>
          </div>
        </div>

        {/* Treatment Boxes Grid */}
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bridalServicesGrid.map((serv, index) => (
              <div
                key={index}
                className="flex flex-col bg-white shadow-premium border border-[#EFECE6] rounded-lg overflow-hidden group hover:shadow-premium-hover transition-all duration-500"
              >
                {/* Thumbnail Wrap */}
                <Link
                  href={serv.learnLink}
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="h-80 relative w-full overflow-hidden bg-[#E8E5DF] block"
                >
                  <Image
                    src={serv.img}
                    alt={serv.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-102 transition-transform duration-1000"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </Link>

                {/* Content Wrap */}
                <div className="p-8 flex-grow flex flex-col justify-between items-center text-center space-y-6">
                  <div className="space-y-3 w-full">
                    <span className="text-[#C5A86A] text-[8px] tracking-[0.25em] font-bold uppercase block">
                      BRIDAL • BEAUTY
                    </span>
                    <Link
                      href={serv.learnLink}
                      onMouseEnter={playHover}
                      onClick={playClick}
                      className="hover:text-[#C5A86A] transition-colors block"
                    >
                      <h2 className="font-serif text-2xl font-light tracking-[0.05em] uppercase text-[#1E241B]">
                        {serv.title}
                      </h2>
                    </Link>
                    <div className="h-[1px] w-8 bg-[#C5A86A]/30 mx-auto" />
                    <p className="font-sans text-xs leading-relaxed tracking-wider text-[#1E241B]/70 min-h-[50px] flex items-center justify-center">
                      {serv.desc}
                    </p>
                  </div>

                  {/* Buttons Wrap */}
                  <div className="flex items-center justify-center gap-3 pt-2 w-full">
                    <Link
                      href={serv.learnLink}
                      onMouseEnter={playHover}
                      onClick={playClick}
                      className="border border-[#1E241B]/15 text-[#1E241B] font-bold text-[9px] tracking-[0.2em] uppercase px-5 py-3 hover:border-[#C5A86A] hover:bg-[#C5A86A] hover:text-white transition-all duration-300 rounded-full flex-1 text-center"
                    >
                      Details
                    </Link>
                    <a
                      href={serv.bookLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={playHover}
                      onClick={playClick}
                      className="bg-[#C5A86A] text-white font-bold text-[9px] tracking-[0.2em] uppercase px-5 py-3 hover:bg-[#B49658] transition-all duration-300 rounded-full flex-1 text-center shadow-sm"
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
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-[#EFECE6] p-8 md:p-12 rounded-lg space-y-8 shadow-premium">
            <div>
              <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
                BRIDAL CONCIERGE
              </span>
              <h3 className="font-serif text-2xl text-[#1E241B] font-light uppercase tracking-wider italic mt-1 font-light">
                Bridal Consultation Request
              </h3>
              <p className="font-sans text-xs text-[#1E241B]/60 tracking-wide mt-2 leading-relaxed">
                Share details about your wedding day. Our bridal coordinator will contact you to discuss options and plan trials.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-[#EFECE6]/40 border border-[#C5A86A]/20 rounded-lg flex flex-col items-center justify-center text-center space-y-3 shadow-sm">
                <CheckCircle size={32} className="text-[#C5A86A]" />
                <h4 className="font-serif text-lg text-[#1E241B] font-semibold uppercase tracking-wider">
                  Request Received
                </h4>
                <p className="font-sans text-xs text-[#1E241B]/60 max-w-sm tracking-wide leading-relaxed font-light">
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
                <div className="flex flex-col space-y-1.5">
                  <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-[#1E241B]/15 py-3 text-xs tracking-wider text-[#1E241B] focus:outline-none focus:border-[#C5A86A]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    className="bg-transparent border-b border-[#1E241B]/15 py-3 text-xs tracking-wider text-[#1E241B] focus:outline-none focus:border-[#C5A86A]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                    Wedding Location / Venue
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b border-[#1E241B]/15 py-3 text-xs tracking-wider text-[#1E241B] focus:outline-none focus:border-[#C5A86A]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                    Bridal Party Size
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bride + 3 bridesmaids"
                    className="bg-transparent border-b border-[#1E241B]/15 py-3 text-xs tracking-wider text-[#1E241B] focus:outline-none focus:border-[#C5A86A]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5 sm:col-span-2">
                  <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    className="bg-transparent border-b border-[#1E241B]/15 py-3 text-xs tracking-wider text-[#1E241B] focus:outline-none focus:border-[#C5A86A]"
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5 sm:col-span-2">
                  <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                    Additional Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share details about style preferences, destinations, timings, etc."
                    className="bg-transparent border-b border-[#1E241B]/15 py-3 text-xs tracking-wider text-[#1E241B] focus:outline-none focus:border-[#C5A86A] resize-none"
                  />
                </div>

                <div className="sm:col-span-2 pt-4">
                  <button
                    type="submit"
                    onMouseEnter={playHover}
                    onClick={playClick}
                    className="w-full bg-[#1E241B] hover:bg-[#5C6B57] text-[#FAF8F5] font-sans text-[10px] font-bold tracking-[0.25em] uppercase py-4 rounded-full transition-all duration-300 cursor-pointer shadow-md"
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
