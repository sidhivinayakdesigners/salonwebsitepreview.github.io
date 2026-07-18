"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSound } from "@/components/ui/ambient-sound";

const beautImages = [
  "/images/beauts/beaut_1.jpg",
  "/images/beauts/beaut_2.jpg",
  "/images/beauts/beaut_3.jpg",
  "/images/beauts/beaut_4.jpg",
  "/images/beauts/beaut_5.jpg",
  "/images/beauts/beaut_6.jpg",
  "/images/beauts/beaut_7.jpg",
  "/images/beauts/beaut_8.jpg",
  "/images/beauts/beaut_9.jpg",
  "/images/beauts/beaut_10.jpg",
  "/images/beauts/beaut_11.jpg",
  "/images/beauts/beaut_12.jpg",
];

export default function BeautsPage() {
  const { playHover, playClick } = useSound();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#FAF8F5] min-h-screen text-[#1E241B] font-sans">
        
        {/* Title Block */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16 space-y-4">
          <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
            OUR GALLERY
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#1E241B] font-light uppercase tracking-wider italic">
            Beauts Lookbook
          </h1>
          <div className="h-[1px] w-16 bg-[#C5A86A]/40 mx-auto" />
          <p className="text-xs sm:text-sm text-[#1E241B]/75 leading-relaxed tracking-wider max-w-2xl mx-auto font-light">
            Some examples of our work. Hand-crafted hair, nails, beauty styling, and treatments created by our experts.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {beautImages.map((imgUrl, index) => (
              <div
                key={index}
                data-cursor="view"
                onMouseEnter={playHover}
                onClick={() => {
                  playClick();
                  setSelectedImg(imgUrl);
                }}
                className="group relative aspect-square bg-white border border-[#EFECE6] rounded-lg overflow-hidden shadow-premium hover:shadow-premium-hover hover:border-[#C5A86A] transition-all duration-500 cursor-zoom-in p-1"
              >
                <div className="w-full h-full relative overflow-hidden rounded">
                  <Image
                    src={imgUrl}
                    alt={`Maison de Beauté work example ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-102 transition-transform duration-700"
                  />
                  
                  {/* Micro-hover overlay */}
                  <div className="absolute inset-0 bg-[#1E241B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-[8px] tracking-widest text-[#FAF8F5] font-bold uppercase bg-[#C5A86A] px-4 py-2.5 rounded-full shadow-md font-sans">
                      View Look
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
              className="fixed inset-0 bg-[#1E241B]/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            >
              <button
                onClick={() => setSelectedImg(null)}
                onMouseEnter={playHover}
                className="absolute top-6 right-6 text-[#FAF8F5] hover:text-[#C5A86A] p-2 focus:outline-none cursor-pointer"
                aria-label="Close image viewer"
              >
                <X size={28} />
              </button>

              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative max-w-4xl max-h-[80vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImg}
                  alt="Expanded work example"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <Footer />
    </>
  );
}
