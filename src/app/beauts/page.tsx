"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#FFFFFF] min-h-screen text-[#181816] font-sans">
        
        {/* Title Block */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16 space-y-4">
          <h1 className="font-serif text-5xl md:text-6xl text-[#181816] font-semibold uppercase tracking-wider">
            Beauts
          </h1>
          <div className="h-[1px] w-24 bg-[#C6A86B]/30 mx-auto" />
          <p className="text-sm md:text-base text-[#666666] leading-relaxed tracking-wider max-w-2xl mx-auto font-light">
            Some examples of our work. Hand-crafted hair, nails, beauty styling, and treatments created by our experts.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {beautImages.map((imgUrl, index) => (
              <div
                key={index}
                onClick={() => setSelectedImg(imgUrl)}
                className="group relative aspect-square bg-white border border-[#ECE8E1] rounded-none overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 cursor-zoom-in"
              >
                <Image
                  src={imgUrl}
                  alt={`Blush + Blow work example ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                
                {/* Micro-hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-[9px] tracking-widest text-white font-bold uppercase bg-[#E5A99E] px-4 py-2.5 rounded-none shadow-md">
                    View
                  </span>
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
              className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            >
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-6 right-6 text-white hover:text-white/80 p-2 focus:outline-none"
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
