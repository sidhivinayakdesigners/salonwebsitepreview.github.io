"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const hairServicesGrid = [
  {
    title: "Colour",
    img: "/images/haircolour.avif",
    desc: "The Regrowth Permanent Color service targets root touch-ups, seamlessly blending new hair growth with your existing color. Ideal for maintaining...",
    learnLink: "/service/colour",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Blow Dry",
    img: "/images/hairblowdry.jpg",
    desc: "Experience the ultimate blow dry with our color experts, who bring a unique blend of artistry and technique to every...",
    learnLink: "/service/blow-dry-blush-blow-london",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Cut and Style",
    img: "/images/haircutanddry.webp",
    desc: "Cut and Style offers personalized haircuts and styling services tailored to enhance your natural beauty. Our expert stylists use the...",
    learnLink: "/service/cut-and-style",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Treatments",
    img: "/images/hairtreatment.jpg",
    desc: "Hair treatments are specialized services designed to nourish, repair, and revitalize hair. These treatments target issues like dryness, damage, frizz,...",
    learnLink: "/service/hair-treatments",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Extensions",
    img: "/images/Hair_Extensions.webp",
    desc: "Extensions are a versatile way to enhance the length, volume, and style of your hair, offering a natural, fuller look...",
    learnLink: "/service/hair-extensions",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Styling – Blow Dries",
    img: "/images/styling_blow_dries.jpg",
    desc: "Dry Styling is a quick and efficient hairstyling technique that enhances your look without the need for a full wash...",
    learnLink: "/service/styling-blow-dries",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
];

export default function HairServices() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#eae5db] min-h-screen text-[#788672] font-sans">
        
        {/* Title Wrap */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <div className="text-center md:text-left border-b border-[#dcd7cc] pb-6">
            <h1 className="font-serif text-5xl md:text-6xl text-[#788672] font-semibold tracking-wider uppercase">
              Hair
            </h1>
          </div>
        </div>

        {/* Treatment Boxes Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {hairServicesGrid.map((serv, index) => (
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
                      className="bg-[#eae5db] border border-[#eae5db] text-[#788672] font-bold text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-white hover:text-[#788672] hover:border-white transition-all duration-300 min-w-[140px]"
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
