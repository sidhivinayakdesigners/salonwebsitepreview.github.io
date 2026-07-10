"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const hairServices = [
  {
    category: "Blow Dries",
    description: "Wash, scalp massage, and our signature blow dry styling.",
    items: [
      { name: "Short Hair Blow Dry", price: "£49", detail: "Chin length or shorter" },
      { name: "Medium Hair Blow Dry", price: "£54", detail: "Shoulder length" },
      { name: "Long & Thick Hair Blow Dry", price: "£58", detail: "Past shoulder length" },
      { name: "Extra Long/Thick or with Extensions", price: "£63", detail: "Extra time allocated" },
    ],
  },
  {
    category: "Cuts & Styling",
    description: "Precision haircuts and styling with our senior stylists.",
    items: [
      { name: "Cut & Blow Dry (Stylist)", price: "£83", detail: "Bespoke styling" },
      { name: "Cut & Blow Dry (Senior Stylist)", price: "£95", detail: "Master precision cut" },
      { name: "Rough Dry (Add-on)", price: "£20", detail: "Available with technical services only" },
      { name: "Children's Haircut (Under 12)", price: "£25", detail: "Dry trim" },
    ],
  },
  {
    category: "Treatments",
    description: "Repair, hydrate, and smooth your locks with our premium formulas.",
    items: [
      { name: "Olaplex Standalone Treatment", price: "£45", detail: "Bond building repair" },
      { name: "Kerasilk Keratin Treatment - Short", price: "£200", detail: "Long-lasting smooth hair (up to 5 months)" },
      { name: "Kerasilk Keratin Treatment - Medium", price: "£250", detail: "Frizz-free styling control" },
      { name: "Kerasilk Keratin Treatment - Long/Thick", price: "£300", detail: "Intense smoothing and repair" },
      { name: "Halo Treatment", price: "£150", detail: "Instant gloss and luxury hydration boost" },
    ],
  },
  {
    category: "Technical & Colour",
    description: "Custom colouring using premium, gentle hair formulations.",
    items: [
      { name: "Permanent Root Touch-up", price: "£75", detail: "Up to 2cm regrowth" },
      { name: "Full Head Permanent Tint", price: "£95", detail: "Even, rich all-over color" },
      { name: "Half Head Foil Highlights", price: "£145", detail: "Dimension and lift" },
      { name: "Full Head Foil Highlights", price: "£195", detail: "All-over premium brightening" },
      { name: "Bespoke Balayage / Hand-Paint", price: "£210", detail: "Soft, seamless sun-kissed gradients" },
    ],
  },
];

export default function HairServices() {
  return (
    <>
      <Navbar />

      <main className="pt-20 bg-[#eae5db] min-h-screen text-[#788672]">
        {/* Banner Section */}
        <section className="relative h-[360px] w-full flex items-center justify-center bg-[#222222]">
          <Image
            src="/images/hair.png"
            alt="Editorial London Hair Salon Styling"
            fill
            sizes="100vw"
            className="object-cover opacity-45"
            priority
          />
          <div className="relative text-center max-w-3xl mx-auto px-6 z-10 space-y-4">
            <span className="text-[#C6A86B] text-xs font-semibold tracking-[0.3em] uppercase">
              BLUSH + BLOW HAIR
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-semibold uppercase tracking-wider">
              Hair Styling & Colour
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
                Bespoke Hair Designs
              </h2>
              <p className="font-sans text-[10px] text-[#C6A86B] tracking-widest uppercase font-bold">
                WEST LONDON STYLING RETREAT
              </p>
            </div>
            
            <p className="font-sans text-xs md:text-sm text-[#788672]/80 leading-relaxed tracking-wider">
              From our famous London blow dries to customized balayage blends, our senior artists formulate custom styling and colouring routines to match your unique look.
            </p>

            <div className="bg-[#cbd1c9]/35 border border-[#dcd7cc] p-6 rounded-xl space-y-4">
              <p className="font-serif text-base text-[#788672] font-semibold uppercase tracking-wider">
                Important Information
              </p>
              <ul className="space-y-3 text-xs text-[#788672]/85 leading-relaxed font-sans tracking-wide">
                <li className="flex items-start space-x-2">
                  <Check size={14} className="text-[#788672] shrink-0 mt-0.5" />
                  <span>Skin Patch test required 48 hours prior to any new technical/colour service.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={14} className="text-[#788672] shrink-0 mt-0.5" />
                  <span>All technical services exclude cut and blow dry unless specified.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={14} className="text-[#788672] shrink-0 mt-0.5" />
                  <span>Cancellation within 24 hours will incur a 50% service charge.</span>
                </li>
              </ul>
            </div>

            <Link
              href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
              className="w-full bg-[#788672] text-[#fcfaf7] font-semibold text-xs tracking-[0.25em] uppercase py-4 rounded hover:bg-[#677461] transition-all duration-300 shadow block text-center"
            >
              Book Stylist Now
            </Link>
          </div>

          {/* Right Price list */}
          <div className="lg:col-span-8 space-y-16">
            {hairServices.map((cat) => (
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
