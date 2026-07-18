"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useSound } from "@/components/ui/ambient-sound";

const nailServicesGrid = [
  {
    title: "Gel Manicure",
    img: "/images/gel_manicure.jpg",
    desc: "Cuticle detailing, custom nail shaping, and long-lasting gel polish with high-gloss durability.",
    learnLink: "/service/gel-manicure",
    bookLink: "https://www.fresha.com/providers/maison-de-beaute-demo",
  },
  {
    title: "Manicure (Natural)",
    img: "/images/manicure_without_polish.png",
    desc: "A natural nail grooming service focused on cuticle care, filing, buffing, and relaxing skin hydration.",
    learnLink: "/service/manicure-without-polish",
    bookLink: "https://www.fresha.com/providers/maison-de-beaute-demo",
  },
  {
    title: "BIAB overlay",
    img: "/images/biab.jpg",
    desc: "Builder in a Bottle overlay to reinforce natural nail strength, preventing breakage and chips.",
    learnLink: "/service/biab",
    bookLink: "https://www.fresha.com/providers/maison-de-beaute-demo",
  },
  {
    title: "Gel Pedicure",
    img: "/images/gel_pedicure.png",
    desc: "Warm foot bath, botanical scrub, detailed cuticle prep, and long-wear gel coat.",
    learnLink: "/service/gel-pedicure",
    bookLink: "https://www.fresha.com/providers/maison-de-beaute-demo",
  },
  {
    title: "Signature Pedicure",
    img: "/images/pedicure.jpg",
    desc: "A classic botanical foot soak, callus prep, massage, and premium standard lacquer finish.",
    learnLink: "/service/pedicure",
    bookLink: "https://www.fresha.com/providers/maison-de-beaute-demo",
  },
  {
    title: "Luxury Gel Manicure",
    img: "/images/luxury_gel_manicure.jpg",
    desc: "An indulgent treatment including nourishing hand masks, deep massage, and flawless gel color.",
    learnLink: "/service/luxury-gel-manicure",
    bookLink: "https://www.fresha.com/providers/maison-de-beaute-demo",
  },
];

export default function NailsServices() {
  const { playHover, playClick } = useSound();
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
              Nails <span className="font-sans not-italic font-semibold text-[0.8em] text-[#5C6B57]">Services</span>
            </h1>
          </div>
        </div>

        {/* Treatment Boxes Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nailServicesGrid.map((serv, index) => (
              <div
                key={index}
                className="flex flex-col bg-white shadow-premium border border-[#EFECE6] rounded-lg overflow-hidden group hover:shadow-premium-hover transition-all duration-500"
              >
                {/* Thumbnail Wrap */}
                <Link
                  href={serv.learnLink}
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="h-72 relative w-full overflow-hidden bg-[#E8E5DF] block"
                >
                  <Image
                    src={serv.img}
                    alt={serv.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-102 transition-transform duration-1000"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </Link>

                {/* Content Wrap */}
                <div className="p-8 flex-grow flex flex-col justify-between items-center text-center space-y-6">
                  <div className="space-y-3 w-full">
                    <span className="text-[#C5A86A] text-[8px] tracking-[0.25em] font-bold uppercase block">
                      NAILS • THERAPY
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

      </main>

      <Footer />
    </>
  );
}
