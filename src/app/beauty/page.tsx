"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const beautyServicesGrid = [
  {
    title: "Lashes",
    img: "/images/beauty_lashes.jpg",
    desc: "Enhance your natural beauty with our premium lash services. Whether you're looking for a dramatic volume boost or a natural lash lift curl, our artists customize each treatment.",
    learnLink: "/service/eyelashes",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Brows + Threading",
    img: "/images/beauty_brows.jpg",
    desc: "Brows: A premier destination for brow shaping and enhancement, offering expert services tailored to each individual's unique features.",
    learnLink: "/service/brows-threading",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Spray Tan",
    img: "/images/beauty_tan.webp",
    desc: "Achieve a sun-kissed glow without the harmful effects of UV exposure with our premium spray tan service using St. Tropez express solutions.",
    learnLink: "/service/spray-tan",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Make Up",
    img: "/images/beauty_makeup.jpg",
    desc: "Makeup is a form of artistic expression that enhances your natural beauty. Our artists use premium Charlotte Tilbury and MAC cosmetics.",
    learnLink: "/service/makeup",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Massage",
    img: "/images/beauty_massage.webp",
    desc: "Massage is a therapeutic practice designed to manipulate muscles and soft tissues to promote deep relaxation and target muscle knots.",
    learnLink: "/service/massage",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
];

export default function BeautyServices() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#eae5db] min-h-screen text-[#788672] font-sans">
        
        {/* Title Wrap */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <div className="text-center md:text-left border-b border-[#dcd7cc] pb-6">
            <h1 className="font-serif text-5xl md:text-6xl text-[#788672] font-semibold tracking-wider uppercase">
              Beauty
            </h1>
          </div>
        </div>

        {/* Treatment Boxes Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {beautyServicesGrid.map((serv, index) => (
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

      </main>

      <Footer />
    </>
  );
}
