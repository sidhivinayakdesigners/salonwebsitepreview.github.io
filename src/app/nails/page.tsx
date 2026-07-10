"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Calendar } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const nailServices = [
  {
    category: "Manicures",
    description: "Expert shaping, cuticle care, and precise polish styling.",
    items: [
      { name: "Gel Shape & Paint (Hands)", price: "£36", detail: "File, cuticle prep & long-lasting gel polish" },
      { name: "Blush + Blow Signature Manicure", price: "£45", detail: "Soak, scrub, massage & luxury classic polish" },
      { name: "Gel Removal & Nail Tidiness", price: "£20", detail: "Safe soak-off, shape, hydrate & clear strengthening coat" },
      { name: "Quick File & Polish", price: "£25", detail: "Dry shape & premium standard lacquer" },
    ],
  },
  {
    category: "Pedicures",
    description: "Indulgent foot therapies, scrub exfoliation, and nail beauty.",
    items: [
      { name: "Gel Shape & Paint (Feet)", price: "£40", detail: "Tidy up, file, gel coating" },
      { name: "Blush + Blow Luxury Pedicure", price: "£55", detail: "Deep foot soak, skin smoothing, massage, polish styling" },
      { name: "Callus Treatment & Gel Pedicure", price: "£65", detail: "Targeted skin softening, cuticle focus & shellac" },
    ],
  },
  {
    category: "Grooming & Add-ons",
    description: "Care enhancements for optimal nail durability and style.",
    items: [
      { name: "Classic French Finish Upgrade", price: "£8", detail: "Elegant hand-painted tips" },
      { name: "IBX Nail Strength Treatment", price: "£15", detail: "Penetrating toughening therapy for weak nails" },
      { name: "Nail Art (Per Finger)", price: "£3", detail: "Minimalist dots, lines, or custom design accents" },
    ],
  },
];

export default function NailsServices() {
  return (
    <>
      <Navbar />

      <main className="pt-20 bg-[#eae5db] min-h-screen text-[#788672]">
        {/* Banner Section */}
        <section className="relative h-[360px] w-full flex items-center justify-center bg-[#222222]">
          <Image
            src="/images/nails.png"
            alt="Luxury London Nails Manicure Salon"
            fill
            sizes="100vw"
            className="object-cover opacity-45"
            priority
          />
          <div className="relative text-center max-w-3xl mx-auto px-6 z-10 space-y-4">
            <span className="text-[#C6A86B] text-xs font-semibold tracking-[0.3em] uppercase">
              BLUSH + BLOW NAILS
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-semibold uppercase tracking-wider">
              Manicures & Pedicures
            </h1>
            <div className="h-[1px] w-20 bg-[#C6A86B] mx-auto mt-4" />
          </div>
        </section>

        {/* Pricing & Info Section */}
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Details */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-[#788672] font-semibold leading-snug uppercase tracking-wider">
                Nail Artistry
              </h2>
              <p className="font-sans text-[10px] text-[#C6A86B] tracking-widest uppercase font-bold">
                PREMIUM NAIL STUDIO
              </p>
            </div>
            
            <p className="font-sans text-xs md:text-sm text-[#788672]/80 leading-relaxed tracking-wider">
              Enjoy peaceful grooming rituals at our nail stations. We prioritize nail health and strength, utilizing premium brands like OPI, CND Shellac, and non-toxic options for lasting radiance.
            </p>

            <div className="bg-[#cbd1c9]/35 border border-[#dcd7cc] p-6 rounded-xl space-y-4">
              <p className="font-serif text-base text-[#788672] font-semibold uppercase tracking-wider">
                Nails Guarantee
              </p>
              <ul className="space-y-3 text-xs text-[#788672]/85 leading-relaxed font-sans tracking-wide">
                <li className="flex items-start space-x-2">
                  <Check size={14} className="text-[#788672] shrink-0 mt-0.5" />
                  <span>Complimentary gel repair within 5 days of your appointment.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={14} className="text-[#788672] shrink-0 mt-0.5" />
                  <span>All metal files and tools undergo medical-grade sanitization.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={14} className="text-[#788672] shrink-0 mt-0.5" />
                  <span>Vast selection of over 200 luxury shades, glazes, and chromes.</span>
                </li>
              </ul>
            </div>

            <Link
              href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
              className="w-full bg-[#788672] text-[#fcfaf7] font-semibold text-xs tracking-[0.25em] uppercase py-4 rounded hover:bg-[#677461] transition-all duration-300 shadow block text-center"
            >
              Book Nail Service
            </Link>
          </div>

          {/* Right Price list */}
          <div className="lg:col-span-8 space-y-16">
            {nailServices.map((cat) => (
              <div key={cat.category} className="space-y-6">
                <div className="border-b border-[#dcd7cc] pb-4">
                  <h3 className="font-serif text-2xl text-[#788672] font-semibold uppercase tracking-wider">
                    {cat.category}
                  </h3>
                  <p className="font-sans text-xs text-[#788672]/80 tracking-wider mt-1">
                    {cat.description}
                  </p>
                </div>

                <div className="divide-y divide-[#dcd7cc]/60">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group hover:bg-[#cbd1c9]/35 px-2 rounded-xl transition-all duration-300"
                    >
                      <div className="space-y-1">
                        <p className="font-sans text-sm font-semibold text-[#788672] group-hover:text-[#C6A86B] transition-colors">
                          {item.name}
                        </p>
                        <p className="font-sans text-xs text-[#788672]/80 tracking-wide">
                          {item.detail}
                        </p>
                      </div>
                      <div className="flex items-center space-x-6">
                        <span className="font-serif text-lg font-medium text-[#788672]">
                          {item.price}
                        </span>
                        <a
                          href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#C6A86B] hover:text-[#788672] uppercase border-b border-[#C6A86B]/30 hover:border-[#788672] pb-0.5"
                        >
                          Book
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}
