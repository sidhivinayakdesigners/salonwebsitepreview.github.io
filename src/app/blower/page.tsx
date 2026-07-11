"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const posts = [
  {
    title: "Cutting Women’s Hair Blindfolded",
    cat: "Trends",
    date: "1st April 2025",
    author: "By Kate Holmes",
    img: "/images/blog/blind.jpg",
    desc: "How one Hairdresser ensures his team are able to make the cut. Artistic Director at Blush + Blow, Gianmarco Rinna...",
  },
  {
    title: "Boost your mental health and your friendships",
    cat: "Tips",
    date: "3rd January 2025",
    author: "By Kate Holmes",
    img: "/images/blog/washing.webp",
    desc: "In the bustling city of London, where time seems to fly and schedules are packed, prioritizing self-care can sometimes feel like a luxury...",
  },
  {
    title: "Why Special isn't Cheap and Cheap isn't Special.",
    cat: "General",
    date: "5th October 2024",
    author: "By Kate Holmes",
    img: "/images/blog/color_price.webp",
    desc: "When it comes to hair colour, getting it right requires high level of expertise, high quality products, and a deep understanding of hair chemistry...",
  },
  {
    title: "Discover the Benefits of BIAB for Beautiful Nails",
    cat: "General, Tips",
    date: "27th September 2024",
    author: "By Kate Holmes",
    img: "/images/blog/nails_biab.jpg",
    desc: "As women living a busy London life, we often find ourselves searching for nail services that are both gorgeous and durable...",
  },
  {
    title: "The Best Hair Colourist in Parsons Green",
    cat: "General, Latest Insights",
    date: "27th September 2024",
    author: "By Kate Holmes",
    img: "/images/blog/hair_colourist.jpg",
    desc: "Find the best hair colour specialist near you. Our Parsons Green colourists deliver everything from balayage to full head highlights...",
  },
];

export default function BlowerPage() {
  const featured = posts[0];
  const latest = posts.slice(1);

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#eae5db] min-h-screen text-[#788672] font-sans">
        
        {/* Title Block */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16 space-y-4">
          <h1 className="font-serif text-5xl md:text-6xl text-[#788672] font-semibold uppercase tracking-wider">
            The Blower
          </h1>
          <div className="h-[1px] w-24 bg-[#788672]/30 mx-auto" />
          <p className="text-sm md:text-base text-[#788672]/85 leading-relaxed tracking-wider max-w-2xl mx-auto font-medium">
            Welcome to The Blower, your go-to destination for the latest insights, tips, and trends in hair, nails and beauty. Discover expert advice, product reviews, and insider knowledge to help you achieve your best look ever.
          </p>
        </div>

        {/* Featured Post */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="bg-[#cbd1c9]/20 border border-[#788672]/10 rounded-lg overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-10 shadow-sm">
            
            <div className="w-full md:w-7/12 relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src={featured.img}
                alt={featured.title}
                fill
                className="object-cover hover:scale-102 transition-transform duration-500"
                priority
              />
            </div>

            <div className="w-full md:w-5/12 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] tracking-[0.25em] text-[#C6A86B] uppercase font-bold">
                  Featured / {featured.cat}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-[#788672] font-semibold tracking-wide leading-tight uppercase">
                  {featured.title}
                </h2>
              </div>

              <div className="h-[1px] w-12 bg-[#788672]/20" />

              <p className="text-xs md:text-sm text-[#788672]/90 leading-relaxed font-light">
                {featured.desc}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#788672]/10">
                <div className="text-[10px] tracking-wider text-[#788672]/70">
                  <p>{featured.date}</p>
                  <p className="font-semibold text-xs mt-0.5">{featured.author}</p>
                </div>
                <button
                  onClick={() => alert("Coming soon!")}
                  className="bg-[#788672] text-[#fcfaf7] font-semibold text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 rounded hover:bg-[#677461] transition-colors"
                >
                  Read More
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Latest Posts Grid */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="font-serif text-2xl uppercase tracking-wider font-semibold">
              Latest Posts
            </h2>
            <div className="h-[1px] flex-grow bg-[#788672]/15" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {latest.map((post, idx) => (
              <div
                key={idx}
                className="group bg-[#eae5db] border border-[#dcd7cc] rounded overflow-hidden shadow-sm flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative aspect-square overflow-hidden border-b border-[#dcd7cc]">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[9px] tracking-[0.25em] text-[#C6A86B] uppercase font-bold">
                      {post.cat}
                    </span>
                    <h3 className="font-serif text-base text-[#788672] font-semibold tracking-wide uppercase leading-snug group-hover:text-[#677461] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[11px] leading-relaxed text-[#788672]/80 font-light line-clamp-3">
                      {post.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-[#788672]/5 flex items-center justify-between">
                  <span className="text-[9px] tracking-wider text-[#788672]/60">
                    {post.date}
                  </span>
                  <button
                    onClick={() => alert("Coming soon!")}
                    className="text-[9px] tracking-[0.2em] font-bold text-[#788672] uppercase hover:underline"
                  >
                    Read
                  </button>
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
