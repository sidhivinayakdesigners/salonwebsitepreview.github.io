"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Calendar } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const beautyServices = [
  {
    category: "Brows + Lash Grooming",
    description: "Detailed sculpting, tinting, and lash lifts for beautiful eyes.",
    items: [
      { name: "Brow Tint & Shape", price: "£28", detail: "Custom hybrid tinting & precision wax tidiness" },
      { name: "Eyebrow Shape (Wax or Thread)", price: "£18", detail: "Clean outline mapping" },
      { name: "Bespoke Lash Lift & Tint", price: "£65", detail: "Natural curl boost and dark defining coat" },
    ],
  },
  {
    category: "Spray Tan",
    description: "Flawless, sun-kissed bronzing using premium St. Tropez formulas.",
    items: [
      { name: "Full Body St. Tropez Spray Tan", price: "£38", detail: "Express quick-wash tan customized to skin tone" },
      { name: "Half Body Spray Tan", price: "£25", detail: "Upper torso or legs styling" },
    ],
  },
  {
    category: "Massage & Body Therapies",
    description: "Decompress and restore muscle balance with clinical wellness strokes.",
    items: [
      { name: "Blush + Blow Deep Tissue Massage (60 Mins)", price: "£85", detail: "Releases severe tension, targets knots" },
      { name: "Swedish Relaxing Body Therapy (60 Mins)", price: "£75", detail: "Long sliding strokes for sensory comfort" },
      { name: "Pregnancy Massage (75 Mins)", price: "£90", detail: "Prenatal-safe relief for neck and back" },
    ],
  },
  {
    category: "Makeup Styling",
    description: "Artistry cosmetic application for dinners, parties, or editorial needs.",
    items: [
      { name: "Full Face Event Makeup", price: "£70", detail: "Include strip-lash styling" },
      { name: "Eyes Only Makeup focus", price: "£40", detail: "Shadow mapping, eyeliner focus & false lashes" },
    ],
  },
];

export default function BeautyServices() {
  return (
    <>
      <Navbar />

      <main className="pt-20 bg-[#eae5db] min-h-screen text-[#788672]">
        {/* Banner Section */}
        <section className="relative h-[360px] w-full flex items-center justify-center bg-[#222222]">
          <Image
            src="/images/beauty.png"
            alt="Luxury London Spa & Beauty Treatment Salon"
            fill
            sizes="100vw"
            className="object-cover opacity-45"
            priority
          />
          <div className="relative text-center max-w-3xl mx-auto px-6 z-10 space-y-4">
            <span className="text-[#C6A86B] text-xs font-semibold tracking-[0.3em] uppercase">
              BLUSH + BLOW BEAUTY
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-semibold uppercase tracking-wider">
              Beauty, Makeup & Massage
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
                Sensory Glow
              </h2>
              <p className="font-sans text-[10px] text-[#C6A86B] tracking-widest uppercase font-bold">
                WEST LONDON BEAUTY RETREAT
              </p>
            </div>
            
            <p className="font-sans text-xs md:text-sm text-[#788672]/80 leading-relaxed tracking-wider">
              Step away from London's bustle. Our beauty rooms offer customized massage therapies, professional makeup applications, and clean, precise brow styling to enhance your natural beauty.
            </p>

            <div className="bg-[#cbd1c9]/35 border border-[#dcd7cc] p-6 rounded-xl space-y-4">
              <p className="font-serif text-base text-[#788672] font-semibold uppercase tracking-wider">
                Salon Guidelines
              </p>
              <ul className="space-y-3 text-xs text-[#788672]/85 leading-relaxed font-sans tracking-wide">
                <li className="flex items-start space-x-2">
                  <Check size={14} className="text-[#788672] shrink-0 mt-0.5" />
                  <span>Tinting and lamination services require patch tests 48 hours prior.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={14} className="text-[#788672] shrink-0 mt-0.5" />
                  <span>Waxing services are not available for children under 16.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={14} className="text-[#788672] shrink-0 mt-0.5" />
                  <span>Please advise us on prenatal stages for pregnancy massages.</span>
                </li>
              </ul>
            </div>

            <Link
              href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
              className="w-full bg-[#788672] text-[#fcfaf7] font-semibold text-xs tracking-[0.25em] uppercase py-4 rounded hover:bg-[#677461] transition-all duration-300 shadow block text-center"
            >
              Book Appointment
            </Link>
          </div>

          {/* Right Price list */}
          <div className="lg:col-span-8 space-y-16">
            {beautyServices.map((cat) => (
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
