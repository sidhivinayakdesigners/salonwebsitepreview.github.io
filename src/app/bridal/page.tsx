"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Calendar, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const bridalServices = [
  {
    category: "Bridal Styling & Artistry",
    description: "Exceptional hair and makeup creations for your wedding day.",
    items: [
      { name: "Bridal Hair Styling", price: "£120", detail: "Signature elegant updo or waves (1 hr 15 mins)" },
      { name: "Bridal Makeup Artistry", price: "£125 - £150", detail: "Flawless camera-ready makeup with lash application" },
      { name: "Bridal Trial (In-Salon Hair + Makeup)", price: "£180", detail: "Detailed consultation and complete styling trial run" },
      { name: "Bridesmaids Hair & Makeup (Per person)", price: "£160", detail: "Consistent, elegant styling matching the bride's vision" },
    ],
  },
];

export default function BridalServices() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      <Navbar />

      <main className="pt-20 bg-[#eae5db] min-h-screen text-[#788672]">
        {/* Banner Section */}
        <section className="relative h-[360px] w-full flex items-center justify-center bg-[#222222]">
          <Image
            src="/images/bridal.png"
            alt="Luxury London Bridal Hair & Makeup Salon"
            fill
            sizes="100vw"
            className="object-cover opacity-45"
            priority
          />
          <div className="relative text-center max-w-3xl mx-auto px-6 z-10 space-y-4">
            <span className="text-[#C6A86B] text-xs font-semibold tracking-[0.3em] uppercase">
              BLUSH + BLOW BRIDE
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-semibold uppercase tracking-wider">
              Bridal Collections
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
                Crafted to Perfection
              </h2>
              <p className="font-sans text-[10px] text-[#C6A86B] tracking-widest uppercase font-bold">
                WORLDWIDE BRIDAL ARTISTRY
              </p>
            </div>
            
            <p className="font-sans text-xs md:text-sm text-[#788672]/80 leading-relaxed tracking-wider">
              Blush + Blow London is renowned for producing gorgeous bridal styling. Our specialists, like Migle, have traveled to over five countries to style international brides, providing calm guidance and exquisite results.
            </p>

            <div className="bg-[#cbd1c9]/35 border border-[#dcd7cc] p-6 rounded-xl space-y-4">
              <p className="font-serif text-base text-[#788672] font-semibold uppercase tracking-wider">
                Bridal Support
              </p>
              <ul className="space-y-3 text-xs text-[#788672]/85 leading-relaxed font-sans tracking-wide">
                <li className="flex items-start space-x-2">
                  <Check size={14} className="text-[#788672] shrink-0 mt-0.5" />
                  <span>Trials are highly recommended 6-12 weeks before your wedding date.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={14} className="text-[#788672] shrink-0 mt-0.5" />
                  <span>On-location styling within Greater London and internationally.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <Check size={14} className="text-[#788672] shrink-0 mt-0.5" />
                  <span>Flexible styling teams capable of handling large bridal parties.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Price list & Consultation Form */}
          <div className="lg:col-span-8 space-y-16">
            {bridalServices.map((cat) => (
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

            {/* Bridal Inquiry Form */}
            <div className="bg-[#cbd1c9]/35 border border-[#dcd7cc] p-8 md:p-12 rounded-xl space-y-6 shadow-sm">
              <div>
                <h3 className="font-serif text-2xl text-[#788672] font-semibold uppercase tracking-wider">
                  Bridal Consultation Request
                </h3>
                <p className="font-sans text-xs text-[#788672]/70 tracking-wide mt-2">
                  Share details about your wedding day. Our bridal coordinator will contact you to discuss options and plan trials.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-[#eae5db]/60 border border-[#788672]/25 rounded-2xl flex flex-col items-center justify-center text-center space-y-3">
                  <CheckCircle size={36} className="text-[#788672]" />
                  <h4 className="font-serif text-lg text-[#788672] font-semibold">
                    Request Received
                  </h4>
                  <p className="font-sans text-xs text-[#788672]/70 max-w-sm">
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
                  <div className="flex flex-col space-y-2">
                    <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                      Wedding Date
                    </label>
                    <input
                      type="date"
                      className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                      Wedding Location / Venue
                    </label>
                    <input
                      type="text"
                      className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                      Bridal Party Size (Hair/Makeup)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Bride + 3 bridesmaids"
                      className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-2 sm:col-span-2">
                    <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-2 sm:col-span-2">
                    <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                      Additional Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details about style preferences, destinations, timings, etc."
                      className="bg-[#eae5db]/60 border border-[#dcd7cc] rounded-lg px-5 py-4 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672] resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#788672] text-[#fcfaf7] font-semibold text-xs tracking-[0.25em] uppercase py-4 rounded shadow hover:bg-[#677461] transition-all duration-300"
                    >
                      Submit Consultation Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}
