"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  ArrowRight,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Testimonials data (scraped and parsed)
const testimonialsList = [
  {
    name: "Zara and Adam Glowacki",
    text: "Migle is simply amazing! I have been doing my hair with her for past 3 years, colour and cut, she always listens to what you want and like and never does anything opposite of that. Every single time i come out of the salon feeling very happy with my hair:) She will always check in the end if everything is ok until everything is perfect! Salon itself is very clean and pretty and in a lovely location ❤️",
  },
  {
    name: "Sophie Luker",
    text: "I go to Migle for my blow dries, hair cuts and colour and would not go anywhere else. She always listens to my colour requests and always does a fab job! I have really fine hair that doesn’t usually hold a curl, yet Migle manages to get it right every time. Thank you!",
  },
  {
    name: "HCannon",
    text: "What a gorgeous spot. Between Blush & Blow and their sister (next door) location, The Skin Studio, you can get a complete beauty package in a gorgeous space, from lovely, professional staff. I have had several blowouts here and a couple of manicures and have never ever been disappointed. Well done to the whole team.",
  },
  {
    name: "Anna Halliday",
    text: "The best salon in Parsons Green, by a long way!! They have excellent stylists - you can trust that you will always walk out with an amazing blow dry or beauty treatment. Also the team are super kind and friendly, and the salon itself is really beautiful and stylish. Highly recommend ❤",
  },
  {
    name: "Ellie Rhodes",
    text: "Beautiful Space. Friendly Staff and coffee passed to you as soon as you walk in! Morgan was a gem, so friendly and kind. Aways checked I was happy with what I was after in my results. Will be back :)",
  },
  {
    name: "Stephanie oiknine",
    text: "I had high lights with Sarah and the result is amazing, looks so natural. Exactly how I like it. Plus she is super friendly and nice and the blow dry is amazing as well. Highly recommended",
  },
];

// FAQs data (scraped and parsed)
const faqsList = [
  {
    q: "When did Blush + Blow open?",
    a: "Blush + Blow opened in 2016 and next door The Skin Studio Opened in 2022.",
  },
  {
    q: "Where is Blush + Blow located?",
    a: "Blush + Blow is located in Parsons Green, London. Our address is 197 New King’s Road, London SW6 4SR.",
  },
  {
    q: "What does Blush + Blow do or provide?",
    a: "Blush + Blow is a hair and beauty salon that provides, nails, tanning, massage, waxing, hair colour, cuts, styling, blow dries and more. Visit our website for more details",
  },
  {
    q: "What are your opening hours?",
    a: "We are open Monday - Wednesday 7:30am to 6:00pm Thursday - Friday 7:30am to 8pm and Saturday - 9:00am to 6:00pm",
  },
  {
    q: "Do you accept walk-ins?",
    a: "Yes, we do accept walk-ins based on availability. However, we recommend booking in advance to secure your preferred time and team member.",
  },
];

// Team List (scraped)
const teamMembersList = [
  { name: "Bridget", role: "FOUNDER", image: "/images/bridal.png" },
  { name: "Annie", role: "RECEPTIONIST", image: "/images/beauty.png" },
  { name: "Morgan", role: "BEAUTY & LASER THERAPIST", image: "/images/skin.png" },
  { name: "Bee", role: "NAIL TECHNICIAN", image: "/images/nails.png" },
  { name: "Cristina", role: "NAIL TECHNICIAN & MAKEUP ARTIST", image: "/images/hair.png" },
  { name: "Freya", role: "BEAUTY THERAPIST & MAKEUP ARTIST", image: "/images/hero.png" },
  { name: "Hema", role: "BEAUTY THERAPIST", image: "/images/beauty.png" },
  { name: "Kate", role: "OPERATIONS", image: "/images/skin.png" },
  { name: "Lamiaa", role: "BEAUTY THERAPIST & COLOURIST", image: "/images/hair.png" },
  { name: "Migle", role: "COLOURIST", image: "/images/bridal.png" },
  { name: "Rozina", role: "COLOURIST", image: "/images/hero.png" },
  { name: "Sara Eddi", role: "COLOURIST", image: "/images/beauty.png" },
];

const initialGallery = [
  "/images/hero.png",
  "/images/hair.png",
  "/images/nails.png",
  "/images/skin.png",
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Auto-run reviews slider
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % testimonialsList.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#eae5db] text-[#788672]">
        
        {/* 1. HERO/BANNER SECTION */}
        <section className="relative min-h-screen flex items-center pt-32 pb-16 bg-[#eae5db]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Wording and Vertical stacked large buttons */}
            <div className="lg:col-span-6 flex flex-col space-y-10 z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <h1 className="font-serif text-5xl md:text-6xl lg:text-[68px] text-[#788672] leading-[1.1] font-semibold tracking-[0.05em] uppercase">
                  ADDING COLOUR <br />
                  TO YOUR LIFE
                </h1>
              </motion.div>

              {/* Stacked block buttons matching screenshot color and size */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col space-y-4 max-w-sm w-full"
              >
                {["Hair", "Nails", "Beauty", "Bridal", "Skin"].map((lbl) => (
                  <Link
                    key={lbl}
                    href={`/${lbl.toLowerCase()}`}
                    className="w-full bg-[#cbd1c9] text-[#788672] font-serif text-sm tracking-[0.25em] uppercase py-4 text-center rounded hover:bg-[#b9c1b7] transition-all duration-300 shadow-sm border border-[#788672]/10"
                  >
                    {lbl}
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Hero Image with solid green frame */}
            <div className="lg:col-span-6 relative h-[500px] w-full flex items-center justify-center">
              <div className="w-[92%] h-[92%] overflow-hidden border-[8px] border-[#788672] relative shadow-lg">
                <Image
                  src="/images/hero.png"
                  alt="Blush and Blow Salon SW6 Front"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </section>

        {/* 2. CONCERN SECTION */}
        <section className="py-24 bg-[#eae5db] border-t border-[#dcd7cc]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: Image */}
            <div className="lg:col-span-6 relative h-[500px] w-full max-w-md mx-auto">
              <Image
                src="/images/concern.webp"
                alt="Show your true colours"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-contain"
              />
            </div>

            {/* Right: Text & Action */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center text-center space-y-8">
              <h2 className="font-serif text-5xl md:text-6xl text-[#788672] font-semibold uppercase tracking-[0.1em] leading-[1.2]">
                Show your <br />
                true colours
              </h2>
              <div>
                <Link
                  href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                  className="border border-[#788672] text-[#788672] font-semibold text-xs tracking-[0.25em] uppercase px-12 py-4.5 rounded hover:bg-[#788672] hover:text-white transition-all duration-300 block text-center min-w-[200px]"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. HAIR SERVICES SECTION */}
        <section className="py-24 bg-[#eae5db] border-t border-[#dcd7cc]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-[#788672] font-semibold uppercase tracking-wider">
                Hair Services
              </h2>
              <div className="h-[1px] w-16 bg-[#788672]/30 mx-auto mt-4" />
            </div>

            {/* Grid of 4 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Colour", img: "/images/hair.png" },
                { title: "Treatments", img: "/images/skin.png" },
                { title: "Extensions", img: "/images/nails.png" },
                { title: "Styling - Blow Dries", img: "/images/hero.png" },
              ].map((serv, index) => (
                <div
                  key={index}
                  className="group bg-[#eae5db] border border-[#dcd7cc] overflow-hidden shadow transition-all duration-300 flex flex-col h-full"
                >
                  <div className="h-60 relative overflow-hidden border-b border-[#dcd7cc]">
                    <Image
                      src={serv.img}
                      alt={serv.title}
                      fill
                      sizes="25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-6 text-center space-y-4 flex-grow flex flex-col justify-between">
                    <h3 className="font-serif text-lg text-[#788672] font-semibold uppercase tracking-wider">
                      {serv.title}
                    </h3>
                    <Link
                      href="/hair"
                      className="text-[10px] tracking-widest font-bold text-[#788672]/70 uppercase flex items-center justify-center space-x-1 hover:text-[#788672] transition-colors pt-2"
                    >
                      <span>Explore</span>
                      <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                href="/hair"
                className="inline-block border border-[#788672]/30 text-[#788672] font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#788672] hover:text-white transition-all duration-300"
              >
                More Hair Services
              </Link>
            </div>

          </div>
        </section>

        {/* 4. NAILS SERVICES SECTION */}
        <section className="py-24 bg-[#eae5db] border-t border-[#dcd7cc]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-[#788672] font-semibold uppercase tracking-wider">
                Nails Services
              </h2>
              <div className="h-[1px] w-16 bg-[#788672]/30 mx-auto mt-4" />
            </div>

            {/* Hands & Feet Split Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { label: "Nails Hands", title: "Hands", img: "/images/nails.png" },
                { label: "Nails Feet", title: "Feet", img: "/images/beauty.png" },
              ].map((col, index) => (
                <div
                  key={index}
                  className="group bg-[#eae5db] border border-[#dcd7cc] overflow-hidden shadow transition-all duration-300 flex flex-col"
                >
                  <div className="p-4 bg-[#cbd1c9]/45 border-b border-[#dcd7cc] text-center text-[10px] tracking-[0.25em] text-[#788672] font-semibold uppercase">
                    {col.label}
                  </div>
                  <div className="h-72 relative overflow-hidden">
                    <Image
                      src={col.img}
                      alt={col.title}
                      fill
                      sizes="50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 text-center space-y-4">
                    <h3 className="font-serif text-xl text-[#788672] font-semibold uppercase tracking-wider">
                      {col.title}
                    </h3>
                    <Link
                      href="/nails"
                      className="text-[10px] tracking-widest font-bold text-[#788672]/70 uppercase flex items-center justify-center space-x-1 hover:text-[#788672] transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
              <Link
                href="/nails"
                className="inline-block border border-[#788672]/30 text-[#788672] font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#788672] hover:text-white transition-all duration-300 text-center min-w-[200px]"
              >
                More Nails Services
              </Link>
              <Link
                href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                className="inline-block bg-[#788672] text-[#fcfaf7] font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#677461] transition-all duration-300 text-center min-w-[200px]"
              >
                Book Now
              </Link>
            </div>

          </div>
        </section>

        {/* 5. BEAUTY SERVICES SECTION */}
        <section className="py-24 bg-[#eae5db] border-t border-[#dcd7cc]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-[#788672] font-semibold uppercase tracking-wider">
                Beauty Services
              </h2>
              <div className="h-[1px] w-16 bg-[#788672]/30 mx-auto mt-4" />
            </div>

            {/* Grid of 4 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Brows + Threading", img: "/images/beauty.png" },
                { title: "Spray Tan", img: "/images/skin.png" },
                { title: "Make Up", img: "/images/bridal.png" },
                { title: "Massage", img: "/images/hero.png" },
              ].map((serv, index) => (
                <div
                  key={index}
                  className="group bg-[#eae5db] border border-[#dcd7cc] overflow-hidden shadow transition-all duration-300 flex flex-col h-full"
                >
                  <div className="h-60 relative overflow-hidden border-b border-[#dcd7cc]">
                    <Image
                      src={serv.img}
                      alt={serv.title}
                      fill
                      sizes="25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 text-center space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-1">
                      <p className="text-[10px] tracking-widest text-[#788672]/60 font-semibold uppercase">
                        {serv.title}
                      </p>
                      <h3 className="font-serif text-lg text-[#788672] font-semibold uppercase tracking-wider">
                        {serv.title}
                      </h3>
                    </div>
                    <Link
                      href="/beauty"
                      className="text-[10px] tracking-widest font-bold text-[#788672]/70 uppercase flex items-center justify-center space-x-1 hover:text-[#788672] transition-colors pt-2"
                    >
                      <span>Explore</span>
                      <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
              <Link
                href="/beauty"
                className="inline-block border border-[#788672]/30 text-[#788672] font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#788672] hover:text-white transition-all duration-300 text-center min-w-[220px]"
              >
                See All Beauty Services
              </Link>
              <Link
                href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                className="inline-block bg-[#788672] text-[#fcfaf7] font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#677461] transition-all duration-300 text-center min-w-[200px]"
              >
                Book Now
              </Link>
            </div>

          </div>
        </section>

        {/* 6. TEAM SECTION */}
        <section id="team" className="py-24 bg-[#c0c8b9] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-[#788672] font-semibold uppercase tracking-wider">
                Team
              </h2>
              <div className="h-[1px] w-16 bg-[#788672]/40 mx-auto mt-4" />
            </div>

            <div className="flex space-x-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent">
              {teamMembersList.map((memb, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-72 bg-[#eae5db] text-[#788672] overflow-hidden shadow border border-[#dcd7cc]"
                >
                  <div className="h-80 relative overflow-hidden border-b border-[#dcd7cc]">
                    <Image
                      src={memb.image}
                      alt={memb.name}
                      fill
                      sizes="280px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center space-y-2">
                    <h3 className="font-serif text-lg font-semibold uppercase tracking-wider">{memb.name}</h3>
                    <p className="font-sans text-[9px] tracking-widest text-[#788672]/70 uppercase font-bold">
                      {memb.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 7. BRIDAL SERVICES SECTION */}
        <section className="py-24 bg-[#eae5db] border-t border-[#dcd7cc]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-[#788672] font-semibold uppercase tracking-wider">
                Bridal Services
              </h2>
              <p className="font-sans text-xs text-[#788672]/80 leading-relaxed tracking-wider max-w-lg mx-auto">
                Every wedding and every bride is different. Book a conversation with Bridget our founder, she'd love to hear your exciting plans.
              </p>
              <div className="h-[1px] w-16 bg-[#788672]/30 mx-auto mt-4" />
            </div>

            {/* Split layout for Bridal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { label: "Bridal hair", title: "Bridal hair", img: "/images/bridal.png" },
                { label: "Bridal Makeup", title: "Bridal Makeup", img: "/images/beauty.png" },
              ].map((b, index) => (
                <div
                  key={index}
                  className="group bg-[#eae5db] border border-[#dcd7cc] overflow-hidden shadow transition-all duration-300 flex flex-col"
                >
                  <div className="p-4 bg-[#cbd1c9]/45 border-b border-[#dcd7cc] text-center text-[10px] tracking-[0.25em] text-[#788672] font-semibold uppercase">
                    {b.label}
                  </div>
                  <div className="h-72 relative overflow-hidden">
                    <Image
                      src={b.img}
                      alt={b.title}
                      fill
                      sizes="50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 text-center space-y-4">
                    <h3 className="font-serif text-xl text-[#788672] font-semibold uppercase tracking-wider">
                      {b.title}
                    </h3>
                    <Link
                      href="/bridal"
                      className="text-[10px] tracking-widest font-bold text-[#788672]/70 uppercase flex items-center justify-center space-x-1 hover:text-[#788672] transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
              <Link
                href="/bridal"
                className="inline-block border border-[#788672]/30 text-[#788672] font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#788672] hover:text-white transition-all duration-300 text-center min-w-[200px]"
              >
                More Bridal Services
              </Link>
              <Link
                href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                className="inline-block bg-[#788672] text-[#fcfaf7] font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#677461] transition-all duration-300 text-center min-w-[200px]"
              >
                Book Now
              </Link>
            </div>

          </div>
        </section>

        {/* 8. SALON LOOKBOOK GALLERY SECTION */}
        <section id="gallery" className="py-24 bg-[#eae5db] border-t border-[#dcd7cc]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-[#788672] font-semibold uppercase tracking-wider">
                Salon
              </h2>
              <div className="h-[1px] w-16 bg-[#788672]/30 mx-auto mt-4" />
            </div>

            {/* Grid display with exact label structure */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Voucher", img: "/images/hero.png" },
                { label: "Cotton Towel", img: "/images/hair.png" },
                { label: "Voucher", img: "/images/nails.png" },
                { label: "Clinic", img: "/images/skin.png" },
              ].map((col, idx) => (
                <div key={idx} className="bg-[#eae5db] border border-[#dcd7cc] overflow-hidden shadow flex flex-col">
                  <div className="h-56 relative overflow-hidden">
                    <Image src={col.img} alt={col.label} fill className="object-cover" />
                  </div>
                  <div className="p-4 text-center font-sans text-[10px] tracking-widest text-[#788672] uppercase font-bold border-t border-[#dcd7cc]">
                    {col.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 space-y-6">
              <Link
                href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                className="inline-block bg-[#788672] text-[#fcfaf7] font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#677461] transition-all duration-300 text-center min-w-[200px]"
              >
                Book Now
              </Link>
            </div>

          </div>
        </section>

        {/* 9. SKIN SERVICES SECTION */}
        <section className="py-24 bg-[#eae5db] border-t border-[#dcd7cc]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-[#788672] font-semibold uppercase tracking-wider">
                Skin Services
              </h2>
              <div className="h-[1px] w-16 bg-[#788672]/30 mx-auto mt-4" />
            </div>

            {/* 3 Columns Grid for Skin Studio */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {[
                { label: "Laser", img: "/images/skin.png" },
                { label: "Skin", img: "/images/beauty.png" },
                { label: "Aesthetics", img: "/images/hero.png" },
              ].map((col, index) => (
                <div
                  key={index}
                  className="group bg-[#eae5db] border border-[#dcd7cc] overflow-hidden shadow transition-all duration-300 flex flex-col text-center"
                >
                  <div className="p-5 bg-[#eae5db] flex flex-col justify-center border-b border-[#dcd7cc] select-none font-serif tracking-[0.2em] font-semibold">
                    <span className="text-[10px] text-[#788672]">THE SKIN STUDIO</span>
                    <span className="text-[7px] text-[#788672]/85 tracking-[0.4em] mt-0.5">LONDON</span>
                  </div>
                  <div className="h-60 relative overflow-hidden border-b border-[#dcd7cc]">
                    <Image
                      src={col.img}
                      alt={col.label}
                      fill
                      sizes="33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <span className="text-[10px] tracking-widest text-[#788672]/70 font-semibold uppercase block">
                      {col.label}
                    </span>
                    <h3 className="font-serif text-lg text-[#788672] font-semibold uppercase tracking-wider">
                      {col.label}
                    </h3>
                    <Link
                      href="/skin"
                      className="text-[10px] tracking-widest font-bold text-[#788672]/70 uppercase flex items-center justify-center space-x-1 hover:text-[#788672] transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                className="inline-block bg-[#788672] text-[#fcfaf7] font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#677461] transition-all duration-300 text-center min-w-[200px]"
              >
                Book Now
              </Link>
            </div>

          </div>
        </section>

        {/* 10. TESTIMONIALS SECTION */}
        <section className="py-24 bg-[#eae5db] border-t border-[#dcd7cc]">
          <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
            
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-[#788672] font-semibold uppercase tracking-wider">
                Testimonials
              </h2>
              <div className="h-[1px] w-16 bg-[#788672]/30 mx-auto mt-4" />
            </div>

            <div className="relative min-h-[220px] sm:min-h-[160px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIdx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#788672] text-[#788672]" />
                    ))}
                  </div>
                  <p className="font-serif text-lg text-[#788672] italic leading-relaxed max-w-2xl mx-auto">
                    "{testimonialsList[testimonialIdx].text}"
                  </p>
                  <p className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#788672] uppercase pt-2">
                    — {testimonialsList[testimonialIdx].name}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bullet indicators */}
            <div className="flex items-center justify-center space-x-2">
              {testimonialsList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestimonialIdx(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === testimonialIdx ? "bg-[#788672] w-4" : "bg-[#b9c1b7]"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </section>

        {/* 11. PRESS LOGO SLIDER */}
        <section className="py-16 bg-[#c0c8b9] text-white text-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">
            <h2 className="font-serif text-3xl font-semibold text-[#788672] uppercase tracking-wider">Press</h2>
            <div className="h-[1px] w-16 bg-[#788672]/30 mx-auto" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center pt-4 opacity-85 font-serif tracking-[0.25em] text-xs text-[#788672] font-semibold">
              <span>GRAZIA</span>
              <span>TATLER</span>
              <span>VOGUE</span>
              <span>GLAMOUR</span>
              <span>COSMOPOLITAN</span>
              <span>DAILY MAIL</span>
            </div>
          </div>
        </section>

        {/* 12. INSTAGRAM SECTION */}
        <section className="py-24 bg-[#eae5db] border-t border-[#dcd7cc]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center space-x-3 select-none">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#dcd7cc] relative">
                  <Image src="/images/beauty.png" alt="blushandblowlondon profile" fill className="object-cover" />
                </div>
                <h3 className="font-serif text-lg text-[#788672] font-semibold">blushandblowlondon</h3>
              </div>
            </div>

            {/* Grid of Instagram posts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["insta-1", "insta-2", "insta-3", "insta-4"].map((itm, idx) => (
                <a
                  key={idx}
                  href="https://www.instagram.com/blushandblowlondon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden border border-[#dcd7cc] block"
                >
                  <Image
                    src={initialGallery[idx]}
                    alt="Instagram Post"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#788672]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                    <Instagram size={20} className="mb-2" />
                    <span className="text-[10px] tracking-widest uppercase font-bold">View on Instagram</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="https://www.instagram.com/blushandblowlondon/"
                className="inline-block border border-[#788672]/30 text-[#788672] font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#788672] hover:text-white transition-all duration-300 text-center min-w-[200px]"
              >
                Follow On Instagram
              </Link>
            </div>

          </div>
        </section>

        {/* 13. FAQ ACCORDION SECTION */}
        <section id="faq" className="py-24 bg-[#eae5db] border-t border-[#dcd7cc]">
          <div className="max-w-3xl mx-auto px-6">
            
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-serif text-3xl text-[#788672] font-semibold uppercase tracking-wider">
                Faq’s
              </h2>
              <div className="h-[1px] w-16 bg-[#788672]/30 mx-auto mt-4" />
            </div>

            <div className="space-y-4">
              {faqsList.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#eae5db] border border-[#dcd7cc] overflow-hidden shadow"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full px-8 py-6 text-left flex items-center justify-between font-serif text-base text-[#788672] font-semibold tracking-wide focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <span className="text-[#788672] font-serif text-2xl font-light">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-[#dcd7cc]"
                        >
                          <p className="px-8 py-6 font-sans text-xs leading-relaxed tracking-wider text-[#788672]/80 bg-[#eae5db]/50">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 14. CONTACT & HOURS */}
        <section id="contact" className="py-24 bg-[#eae5db] border-t border-[#dcd7cc]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Form */}
            <div className="lg:col-span-7 space-y-8 bg-[#eae5db] p-8 md:p-12 rounded border border-[#dcd7cc] shadow-sm">
              <div>
                <h2 className="font-serif text-3xl text-[#788672] font-semibold uppercase tracking-wider">
                  Get In Touch
                </h2>
                <p className="font-sans text-xs text-[#788672]/70 leading-relaxed tracking-wider mt-2">
                  Plan your pampering or styling visit. Send a message to our frontdesk below.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-[#cbd1c9]/20 border border-[#788672]/20 rounded flex flex-col items-center justify-center text-center space-y-3">
                  <CheckCircle size={36} className="text-[#788672]" />
                  <h3 className="font-serif text-lg text-[#788672] font-semibold">
                    Thank You
                  </h3>
                  <p className="font-sans text-xs text-[#788672]/70 max-w-sm">
                    Your request has been received. Our concierge will be in touch shortly to assist with your booking.
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
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="bg-[#cbd1c9]/35 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="bg-[#cbd1c9]/35 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-2 sm:col-span-2">
                    <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="bg-[#cbd1c9]/35 border border-[#dcd7cc] rounded px-5 py-3.5 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672]"
                      required
                    />
                  </div>
                  <div className="flex flex-col space-y-2 sm:col-span-2">
                    <label className="font-sans text-[10px] tracking-widest text-[#788672] uppercase font-semibold">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="bg-[#cbd1c9]/35 border border-[#dcd7cc] rounded-lg px-5 py-4 text-xs tracking-wider text-[#788672] focus:outline-none focus:border-[#788672] resize-none"
                      required
                    />
                  </div>
                  
                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#788672] text-[#fcfaf7] font-semibold text-xs tracking-[0.25em] uppercase py-4 rounded shadow hover:bg-[#677461] transition-all duration-300"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Info details & Map */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-[#788672] font-semibold uppercase tracking-wider">
                  Blush + Blow London
                </h3>
                
                <div className="space-y-4 font-sans text-xs tracking-wider text-[#788672]/80">
                  <div className="flex items-start space-x-3">
                    <MapPin size={16} className="text-[#788672] shrink-0 mt-0.5" />
                    <span>197 New Kings Rd, London SW6 4SR</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={14} className="text-[#788672] shrink-0" />
                    <span>020 7736 0430</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={14} className="text-[#788672] shrink-0" />
                    <span>info@blushandblowlondon.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock size={16} className="text-[#788672] shrink-0 mt-0.5" />
                    <div>
                      <p>Mon - Wed: 7:30 am - 6:00 pm</p>
                      <p className="mt-1">Thu - Fri: 7:30 am - 8:00 pm</p>
                      <p className="mt-1">Sat: 9:00 am - 6:00 pm</p>
                      <p className="mt-1 text-[#788672]/60">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="https://wa.me/447979782832"
                    className="w-full flex items-center justify-center space-x-2 border border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-colors py-3.5 rounded text-xs uppercase font-bold tracking-widest"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp Frontdesk</span>
                  </Link>
                </div>
              </div>

              {/* Map */}
              <div className="h-64 relative overflow-hidden border border-[#dcd7cc] shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.582650074211!2d-0.2030272230489972!3d51.465809713809025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fb2159753c1%3A0xe54e69b0fa5d27eb!2s197%20New%20Kings%20Rd%2C%20London%20SW6%204SR%2C%20UK!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-85"
                />
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Floating Availability bar (Sticky bottom) */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#788672] border-t border-white/10 z-40 text-white py-4.5 px-6 flex flex-col md:flex-row items-center justify-between shadow-lg gap-4">
        <div className="flex items-center space-x-3.5">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
          <p className="font-serif text-sm font-semibold tracking-wide leading-snug">
            Caring for your hair, nails and skin makes you look and feel healthier, younger and more confident. Prioritise yourself.
          </p>
        </div>
        <div className="flex items-center space-x-4 shrink-0">
          <span className="font-sans text-[10px] tracking-widest uppercase text-white/70 hidden lg:inline">
            197 New Kings Rd, London SW6 4SR
          </span>
          <Link
            href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
            className="bg-[#fcfaf7] text-[#788672] font-semibold text-[10px] tracking-[0.25em] uppercase px-6 py-3 rounded hover:bg-white transition-colors"
          >
            Check Availability
          </Link>
        </div>
      </div>

      {/* Fixed Tab: Bottom-Left Check Availability (Exactly matching screenshot) */}
      <div className="fixed bottom-32 left-0 z-40">
        <Link
          href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
          className="bg-[#788672] text-[#fcfaf7] font-serif text-[11px] tracking-[0.2em] uppercase px-4 py-3 border border-white/20 border-l-0 rounded-r shadow-lg block select-none hover:bg-[#677461] transition-colors"
        >
          Check Availability
        </Link>
      </div>

      {/* Floating WhatsApp green circle (bottom right) */}
      <div className="fixed bottom-24 right-6 z-40">
        <a
          href="https://wa.me/447979782832"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
          aria-label="WhatsApp"
        >
          <MessageCircle size={24} className="fill-white text-[#25d366]" />
        </a>
      </div>

      <Footer />
    </>
  );
}
