"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowRight } from "lucide-react";

const hairServicesGrid = [
  {
    title: "Colour",
    img: "/images/haircolour.avif",
    desc: "Seamless root touch-up, highlights, and hand-painted balayage customized by master colorists for a natural, shimmering blend.",
    learnLink: "/service/colour",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Blow Dry",
    img: "/images/hairblowdry.jpg",
    desc: "Indulge in a relaxing scalp massage wash followed by our signature bouncy or sleek blow dry finish styled for any occasion.",
    learnLink: "/service/blow-dry-blush-blow-london",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Cut and Style",
    img: "/images/haircutanddry.webp",
    desc: "Bespoke structural layering and precision cuts designed to frame your features and elevate your personal style.",
    learnLink: "/service/cut-and-style",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Treatments",
    img: "/images/hairtreatment.jpg",
    desc: "Nourish and repair with intensive molecular masks and bond-building therapies including Olaplex and Keratin smoothing.",
    learnLink: "/service/hair-treatments",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Extensions",
    img: "/images/Hair_Extensions.webp",
    desc: "Premium, ethically sourced human hair extensions custom matched to add breathtaking length, thickness, and volume.",
    learnLink: "/service/hair-extensions",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Styling – Blow Dries",
    img: "/images/styling_blow_dries.jpg",
    desc: "Express dry styling, elegant updos, and intricate braids completed in minutes to prepare you for events.",
    learnLink: "/service/styling-blow-dries",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
];

export default function HairServices() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#FAF8F5] min-h-screen text-[#1E241B] font-sans">
        
        {/* Title Wrap */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="text-center md:text-left border-b border-[#EFECE6] pb-8">
            <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans mb-2">
              BLUSH + BLOW LONDON
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-[#1E241B] font-light tracking-wider uppercase italic">
              Hair <span className="font-sans not-italic font-semibold text-[0.8em] text-[#5C6B57]">Services</span>
            </h1>
          </div>
        </div>

        {/* Treatment Boxes Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hairServicesGrid.map((serv, index) => (
              <div
                key={index}
                className="flex flex-col bg-white shadow-premium border border-[#EFECE6] rounded-lg overflow-hidden group hover:shadow-premium-hover transition-all duration-500"
              >
                {/* Thumbnail Wrap */}
                <Link href={serv.learnLink} className="h-72 relative w-full overflow-hidden bg-[#E8E5DF] block">
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
                      HAIR • STYLING
                    </span>
                    <Link href={serv.learnLink} className="hover:text-[#C5A86A] transition-colors block">
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
                      className="border border-[#1E241B]/15 text-[#1E241B] font-bold text-[9px] tracking-[0.2em] uppercase px-5 py-3 hover:border-[#C5A86A] hover:bg-[#C5A86A] hover:text-white transition-all duration-300 rounded-full flex-1 text-center"
                    >
                      Details
                    </Link>
                    <a
                      href={serv.bookLink}
                      target="_blank"
                      rel="noopener noreferrer"
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
