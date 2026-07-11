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

// Team List mapping (rendered horizontally in lookbook carousel)
const teamMembersList = [
  { name: "Bridget", role: "FOUNDER", image: "/images/team/bridget.png" },
  { name: "Annie", role: "RECEPTIONIST", image: "/images/team/annie.webp" },
  { name: "Morgan", role: "BEAUTY & LASER THERAPIST", image: "/images/team/morgan.webp" },
  { name: "Bee", role: "NAIL TECHNICIAN", image: "/images/team/bee.webp" },
  { name: "Cristina", role: "NAIL TECHNICIAN & MAKEUP ARTIST", image: "/images/team/cristina.webp" },
  { name: "Freya", role: "BEAUTY THERAPIST & MAKEUP ARTIST", image: "/images/team/freya.webp" },
  { name: "Hema", role: "BEAUTY THERAPIST", image: "/images/team/hema.webp" },
  { name: "Kate", role: "OPERATIONS", image: "/images/team/kate.webp" },
  { name: "Lamiaa", role: "BEAUTY THERAPIST & COLOURIST", image: "/images/team/lamiaa.png" },
  { name: "Migle", role: "COLOURIST", image: "/images/team/migle.webp" },
  { name: "Rozina", role: "COLOURIST", image: "/images/team/rozina.webp" },
  { name: "Sara Eddi", role: "COLOURIST", image: "/images/team/sara.webp" },
];

const initialGallery = [
  "/images/salon_1.webp",
  "/images/salon_2.webp",
  "/images/salon_14.webp",
  "/images/salon_4.webp",
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeField, setActiveField] = useState<string | null>(null);

  // Auto-run reviews slider
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx((prev) => (prev + 1) % testimonialsList.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#5A6655] z-[9999] flex flex-col items-center justify-center select-none overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-6">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.2
                    }
                  }
                }}
                className="flex items-center space-x-1"
              >
                {"BLUSH + BLOW".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-[0.1em] uppercase"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, letterSpacing: "0.5em" }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                className="flex items-center w-full justify-center text-[#FCFAF7]/80"
              >
                <span className="text-[10px] sm:text-xs tracking-[0.5em] uppercase font-sans font-light">
                  LONDON
                </span>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, delay: 0.3, ease: "easeInOut" }}
              className="absolute bottom-16 left-12 right-12 h-[0.5px] bg-[#FCFAF7]/30 origin-left"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      <main className="overflow-hidden bg-[#FCFAF7] text-[#181816]">
        
        {/* 1. HERO/BANNER SECTION */}
        <section className="relative pt-24 pb-12 lg:min-h-screen lg:flex lg:items-center lg:pt-32 lg:pb-16 bg-[#FCFAF7]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Wording and Vertical stacked large buttons */}
            <div className="lg:col-span-6 flex flex-col space-y-8 lg:space-y-10 z-10 order-2 lg:order-none text-center lg:text-left items-center lg:items-start w-full">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.6
                    }
                  }
                }}
                className="space-y-4"
              >
                <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-[68px] text-[#181816] leading-[1.2] lg:leading-[1.1] font-semibold tracking-[0.05em] uppercase">
                  {["ADDING", "COLOUR", "TO", "YOUR", "LIFE"].map((word, idx) => (
                    <span key={idx} className="inline-block overflow-hidden mr-3">
                      <motion.span
                        className="inline-block"
                        variants={{
                          hidden: { y: "100%", opacity: 0 },
                          visible: { y: 0, opacity: 1 }
                        }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {word}
                      </motion.span>
                      {idx === 1 && <br />}
                    </span>
                  ))}
                </h1>
              </motion.div>

              {/* Stacked block buttons matching screenshot color and size */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 1.2
                    }
                  }
                }}
                className="flex flex-col space-y-4 max-w-sm w-full mx-auto lg:mx-0"
              >
                {["Hair", "Nails", "Beauty", "Bridal"].map((lbl) => (
                  <motion.div
                    key={lbl}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.025, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={`/${lbl.toLowerCase()}`}
                      className="w-full block bg-white/60 text-[#181816] font-serif text-sm tracking-[0.25em] uppercase py-4 text-center rounded hover:bg-[#5A6655] hover:text-white hover:border-[#5A6655] transition-all duration-300 shadow-sm border border-[#ECE8E1]"
                    >
                      {lbl}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Hero Image with solid green frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative h-[320px] sm:h-[400px] lg:h-[500px] w-full flex items-center justify-center order-1 lg:order-none"
            >
              <div className="w-[92%] h-[92%] overflow-hidden border border-[#C6A86B] p-2 bg-[#FCFAF7] relative shadow-xl">
                <div className="w-full h-full relative overflow-hidden border border-[#5A6655]/20">
                  <motion.div
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1.0 }}
                    transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src="/images/homepage_hero_main.webp"
                      alt="Adding Colour To Your Life"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 2. CONCERN SECTION */}
        <section className="py-16 lg:py-24 bg-[#FCFAF7] border-t border-[#ECE8E1] overflow-hidden">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="max-w-5xl mx-auto px-8 py-16 bg-white border border-[#ECE8E1] rounded shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
          >
            {/* Left: Image */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 relative h-[300px] sm:h-[400px] lg:h-[450px] w-full max-w-md mx-auto"
            >
              <Image
                src="/images/color_life_concern.webp"
                alt="Show your true colours"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-contain"
              />
            </motion.div>

            {/* Right: Text & Action */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col items-center justify-center text-center space-y-6 lg:space-y-8"
            >
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181816] font-semibold uppercase tracking-[0.1em] leading-[1.2]">
                Show your <br />
                <span className="text-[#C6A86B] italic font-serif lowercase font-normal">true</span> colours
              </h2>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                  className="border border-[#5A6655] text-[#5A6655] font-semibold text-xs tracking-[0.25em] uppercase px-12 py-4.5 rounded hover:bg-[#5A6655] hover:text-white transition-all duration-300 block text-center min-w-[200px]"
                >
                  Book Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* 3. HAIR SERVICES SECTION */}
        <section className="py-16 lg:py-24 bg-[#FCFAF7] border-t border-[#ECE8E1]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-16 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-[#181816] font-semibold uppercase tracking-wider">
                Hair Services
              </h2>
              <div className="h-[1px] w-16 bg-[#C6A86B]/30 mx-auto mt-4" />
            </div>

            {/* Grid of 4 Cards */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { title: "Colour", img: "/images/haircolour.avif" },
                { title: "Treatments", img: "/images/hairtreatment.jpg" },
                { title: "Extensions", img: "/images/Hair_Extensions.webp" },
                { title: "Styling - Blow Dries", img: "/images/styling_blow_dries.jpg" },
              ].map((serv, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="group bg-white border border-[#ECE8E1] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 flex flex-col h-full cursor-pointer rounded-none"
                >
                  <div className="h-60 relative overflow-hidden border-b border-[#ECE8E1]">
                    <Image
                      src={serv.img}
                      alt={serv.title}
                      fill
                      sizes="25vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-6 text-center space-y-4 flex-grow flex flex-col justify-between">
                    <h3 className="font-serif text-lg text-[#181816] font-semibold uppercase tracking-wider group-hover:text-[#C6A86B] transition-colors">
                      {serv.title}
                    </h3>
                    <Link
                      href="/hair"
                      className="text-[9px] tracking-[0.2em] font-bold text-[#C6A86B] uppercase flex items-center justify-center space-x-1.5 hover:text-[#A88B52] transition-colors pt-2"
                    >
                      <span>Explore Service</span>
                      <ArrowRight size={10} className="group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-16">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="/hair"
                  className="inline-block border border-[#5A6655]/40 text-[#5A6655] font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#5A6655] hover:text-white transition-all duration-300"
                >
                  More Hair Services
                </Link>
              </motion.div>
            </div>

          </div>
        </section>

        {/* 4. NAILS SERVICES SECTION */}
        <section className="py-16 lg:py-24 bg-[#FCFAF7] border-t border-[#ECE8E1]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-16 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-[#181816] font-semibold uppercase tracking-wider">
                Nails Services
              </h2>
              <div className="h-[1px] w-16 bg-[#C6A86B]/30 mx-auto mt-4" />
            </div>

            {/* Hands & Feet Split Columns */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
              {[
                { label: "Nails Hands", title: "Hands", img: "/images/homepage_manicure.jpg", slug: "/nails" },
                { label: "Nails Feet", title: "Feet", img: "/images/homepage_pedicure.jpg", slug: "/nails" },
              ].map((col, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="group bg-white border border-[#ECE8E1] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 flex flex-col cursor-pointer rounded-none"
                >
                  <div className="p-4 bg-[#FCFAF7] border-b border-[#ECE8E1] text-center text-[10px] tracking-[0.25em] text-[#5A6655] font-semibold uppercase group-hover:bg-[#ECE8E1]/40 transition-colors">
                    {col.label}
                  </div>
                  <div className="h-72 relative overflow-hidden">
                    <Image
                      src={col.img}
                      alt={col.title}
                      fill
                      sizes="50vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 text-center space-y-4">
                    <h3 className="font-serif text-xl text-[#181816] font-semibold uppercase tracking-wider group-hover:text-[#C6A86B] transition-colors">
                      {col.title}
                    </h3>
                    <Link
                      href={col.slug}
                      className="text-[9px] tracking-[0.2em] font-bold text-[#C6A86B] uppercase flex items-center justify-center space-x-1.5 hover:text-[#A88B52] transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight size={10} className="group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 lg:mt-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="/nails"
                  className="inline-block border border-[#5A6655]/40 text-[#5A6655] font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#5A6655] hover:text-white transition-all duration-300 text-center min-w-[200px]"
                >
                  More Nails Services
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                  className="inline-block bg-[#5A6655] text-white font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#C6A86B] transition-all duration-300 text-center min-w-[200px]"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>

          </div>
        </section>

        {/* 5. BEAUTY SERVICES SECTION */}
        <section className="py-16 lg:py-24 bg-[#FCFAF7] border-t border-[#ECE8E1]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-16 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-[#181816] font-semibold uppercase tracking-wider">
                Beauty Services
              </h2>
              <div className="h-[1px] w-16 bg-[#C6A86B]/30 mx-auto mt-4" />
            </div>

            {/* Grid of 4 Cards */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { title: "Brows + Threading", img: "/images/beauty_brows.jpg", slug: "/service/brows-threading" },
                { title: "Spray Tan", img: "/images/beauty_tan.webp", slug: "/service/spray-tan" },
                { title: "Make Up", img: "/images/beauty_makeup.jpg", slug: "/service/makeup" },
                { title: "Massage", img: "/images/beauty_massage.webp", slug: "/service/massage" },
              ].map((serv, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="group bg-white border border-[#ECE8E1] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 flex flex-col h-full cursor-pointer rounded-none"
                >
                  <div className="h-60 relative overflow-hidden border-b border-[#ECE8E1]">
                    <Image
                      src={serv.img}
                      alt={serv.title}
                      fill
                      sizes="25vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 text-center space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-1">
                      <p className="text-[10px] tracking-widest text-[#5A6655]/60 font-semibold uppercase">
                        {serv.title}
                      </p>
                      <h3 className="font-serif text-lg text-[#181816] font-semibold uppercase tracking-wider group-hover:text-[#C6A86B] transition-colors">
                        {serv.title}
                      </h3>
                    </div>
                    <Link
                      href={serv.slug}
                      className="text-[9px] tracking-[0.2em] font-bold text-[#C6A86B] uppercase flex items-center justify-center space-x-1.5 hover:text-[#A88B52] transition-colors pt-2"
                    >
                      <span>Explore Service</span>
                      <ArrowRight size={10} className="group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 lg:mt-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="/beauty"
                  className="inline-block border border-[#5A6655]/40 text-[#5A6655] font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#5A6655] hover:text-white transition-all duration-300 text-center min-w-[220px]"
                >
                  See All Beauty Services
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                  className="inline-block bg-[#5A6655] text-white font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#C6A86B] transition-all duration-300 text-center min-w-[200px]"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>

          </div>
        </section>

        {/* 6. TEAM SECTION */}
        <section id="team" className="py-16 lg:py-24 bg-[#181816] text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-16 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-[#C6A86B] font-semibold uppercase tracking-wider">
                Team
              </h2>
              <div className="h-[1px] w-16 bg-[#C6A86B]/40 mx-auto mt-4" />
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="flex space-x-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
            >
              {teamMembersList.map((memb, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="flex-shrink-0 w-72 bg-[#FCFAF7] text-[#181816] overflow-hidden shadow-premium border border-white/5 cursor-pointer hover:shadow-premium-hover transition-all duration-500 rounded-none"
                >
                  <div className="h-80 relative overflow-hidden border-b border-[#ECE8E1] bg-[#181816]">
                    <Image
                      src={memb.image}
                      alt={memb.name}
                      fill
                      sizes="280px"
                      className="object-cover object-bottom"
                    />
                  </div>
                  <div className="p-6 text-center space-y-2">
                    <h3 className="font-serif text-lg font-semibold uppercase tracking-wider text-[#181816]">{memb.name}</h3>
                    <p className="font-sans text-[9px] tracking-widest text-[#5A6655] uppercase font-bold">
                      {memb.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* 7. BRIDAL SERVICES SECTION */}
        <section className="py-16 lg:py-24 bg-[#FCFAF7] border-t border-[#ECE8E1]">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-16 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-[#181816] font-semibold uppercase tracking-wider">
                Bridal Services
              </h2>
              <p className="font-sans text-xs text-[#666666] leading-relaxed tracking-wider max-w-lg mx-auto">
                Every wedding and every bride is different. Book a conversation with Bridget our founder, she'd love to hear your exciting plans.
              </p>
              <div className="h-[1px] w-16 bg-[#C6A86B]/30 mx-auto mt-4" />
            </div>

            {/* Split layout for Bridal */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {[
                { label: "Bridal hair", title: "Bridal hair", img: "/images/bridal_hair.jpg", slug: "/service/bridal-hair" },
                { label: "Bridal Makeup", title: "Bridal Makeup", img: "/images/bridal_makeup.jpg", slug: "/service/bridal-makeup" },
              ].map((b, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="group bg-white border border-[#ECE8E1] overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 flex flex-col cursor-pointer rounded-none"
                >
                  <div className="p-4 bg-[#FCFAF7] border-b border-[#ECE8E1] text-center text-[10px] tracking-[0.25em] text-[#5A6655] font-semibold uppercase group-hover:bg-[#ECE8E1]/40 transition-colors">
                    {b.label}
                  </div>
                  <div className="h-72 relative overflow-hidden">
                    <Image
                      src={b.img}
                      alt={b.title}
                      fill
                      sizes="50vw"
                      className="object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 text-center space-y-4">
                    <h3 className="font-serif text-xl text-[#181816] font-semibold uppercase tracking-wider group-hover:text-[#C6A86B] transition-colors">
                      {b.title}
                    </h3>
                    <Link
                      href={b.slug}
                      className="text-[9px] tracking-[0.2em] font-bold text-[#C6A86B] uppercase flex items-center justify-center space-x-1.5 hover:text-[#A88B52] transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight size={10} className="group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="/bridal"
                  className="inline-block border border-[#5A6655]/40 text-[#5A6655] font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#5A6655] hover:text-white transition-all duration-300 text-center min-w-[200px]"
                >
                  More Bridal Services
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Link
                  href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                  className="inline-block bg-[#5A6655] text-white font-semibold text-xs tracking-[0.25em] uppercase px-8 py-4 rounded hover:bg-[#C6A86B] transition-all duration-300 text-center min-w-[200px]"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        {/* 10. TESTIMONIALS SECTION */}
        <section className="py-16 lg:py-24 bg-[#FCFAF7] border-t border-[#ECE8E1]">
          <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
            
            <div className="space-y-4">
              <h2 className="font-serif text-3xl text-[#181816] font-semibold uppercase tracking-wider">
                Testimonials
              </h2>
              <div className="h-[1px] w-16 bg-[#C6A86B]/30 mx-auto mt-4" />
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
                      <Star key={i} size={14} className="fill-[#C6A86B] text-[#C6A86B]" />
                    ))}
                  </div>
                  <p className="font-serif text-lg md:text-xl text-[#181816] italic leading-relaxed max-w-3xl mx-auto">
                    "{testimonialsList[testimonialIdx].text}"
                  </p>
                  <p className="font-sans text-[10px] font-bold tracking-[0.2em] text-[#A88B52] uppercase pt-2">
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
                    idx === testimonialIdx ? "bg-[#C6A86B] w-4" : "bg-[#ECE8E1]"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </section>

        {/* 13. FAQ ACCORDION SECTION */}
        <section id="faq" className="py-16 lg:py-24 bg-[#FCFAF7] border-t border-[#ECE8E1]">
          <div className="max-w-3xl mx-auto px-6">
            
            <div className="text-center mb-10 lg:mb-16 space-y-4">
              <h2 className="font-serif text-3xl text-[#181816] font-semibold uppercase tracking-wider">
                Faq’s
              </h2>
              <div className="h-[1px] w-16 bg-[#C6A86B]/30 mx-auto mt-4" />
            </div>

            <div className="space-y-4">
              {faqsList.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-[#ECE8E1] overflow-hidden shadow-premium hover:shadow-premium-hover rounded-none transition-shadow"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full px-5 py-4 sm:px-8 sm:py-6 text-left flex items-center justify-between font-serif text-sm sm:text-base text-[#181816] font-semibold tracking-wide focus:outline-none hover:text-[#C6A86B] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-[#C6A86B] font-serif text-2xl font-light inline-block"
                      >
                        {isOpen ? "−" : "+"}
                      </motion.span>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-[#ECE8E1]"
                        >
                          <p className="px-5 py-4 sm:px-8 sm:py-6 font-sans text-xs leading-relaxed tracking-wider text-[#666666] bg-[#FCFAF7]/40">
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
        <section id="contact" className="py-16 lg:py-24 bg-[#FCFAF7] border-t border-[#ECE8E1]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            
            {/* Form */}
            <div className="lg:col-span-7 space-y-8 bg-white p-5 md:p-12 rounded border border-[#ECE8E1] shadow-premium rounded-none">
              <div>
                <h2 className="font-serif text-3xl text-[#181816] font-semibold uppercase tracking-wider">
                  Get In Touch
                </h2>
                <p className="font-sans text-xs text-[#666666] leading-relaxed tracking-wider mt-2">
                  Plan your pampering or styling visit. Send a message to our frontdesk below.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-[#C6A86B]/10 border border-[#C6A86B]/20 rounded flex flex-col items-center justify-center text-center space-y-3">
                  <CheckCircle size={36} className="text-[#C6A86B]" />
                  <h3 className="font-serif text-lg text-[#181816] font-semibold">
                    Thank You
                  </h3>
                  <p className="font-sans text-xs text-[#666666] max-w-sm">
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
                  <div className="flex flex-col space-y-2 relative">
                    <label className="font-sans text-[10px] tracking-widest text-[#5A6655] uppercase font-semibold">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        onFocus={() => setActiveField("name")}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors"
                        required
                      />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeField === "name" ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A86B] origin-center"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 relative">
                    <label className="font-sans text-[10px] tracking-widest text-[#5A6655] uppercase font-semibold">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        onFocus={() => setActiveField("phone")}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors"
                        required
                      />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeField === "phone" ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A86B] origin-center"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 sm:col-span-2 relative">
                    <label className="font-sans text-[10px] tracking-widest text-[#5A6655] uppercase font-semibold">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        onFocus={() => setActiveField("email")}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors"
                        required
                      />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeField === "email" ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A86B] origin-center"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 sm:col-span-2 relative">
                    <label className="font-sans text-[10px] tracking-widest text-[#5A6655] uppercase font-semibold">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        rows={4}
                        onFocus={() => setActiveField("message")}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-transparent border-b border-[#ECE8E1] focus:border-[#C6A86B] rounded-none py-3.5 px-1 text-xs tracking-wider text-[#181816] focus:outline-none transition-colors resize-none"
                        required
                      />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeField === "message" ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A86B] origin-center"
                      />
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2 pt-2">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="w-full bg-[#5A6655] text-white font-semibold text-xs tracking-[0.25em] uppercase py-4 rounded shadow-sm hover:bg-[#C6A86B] transition-all duration-300 cursor-pointer"
                    >
                      Submit Request
                    </motion.button>
                  </div>
                </form>
              )}
            </div>

            {/* Info details & Map */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              
              <div className="space-y-6">
                <h3 className="font-serif text-2xl text-[#181816] font-semibold uppercase tracking-wider">
                  Blush + Blow London
                </h3>
                
                <div className="space-y-4 font-sans text-xs tracking-wider text-[#666666]">
                  <div className="flex items-start space-x-3">
                    <MapPin size={16} className="text-[#C6A86B] shrink-0 mt-0.5" />
                    <span>197 New Kings Rd, London SW6 4SR</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={14} className="text-[#C6A86B] shrink-0" />
                    <span>020 7736 0430</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={14} className="text-[#C6A86B] shrink-0" />
                    <span>info@blushandblowlondon.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock size={16} className="text-[#C6A86B] shrink-0 mt-0.5" />
                    <div>
                      <p>Mon - Wed: 7:30 am - 6:00 pm</p>
                      <p className="mt-1">Thu - Fri: 7:30 am - 8:00 pm</p>
                      <p className="mt-1">Sat: 9:00 am - 6:00 pm</p>
                      <p className="mt-1 text-[#666666]/60">Sunday: Closed</p>
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
              <div className="h-64 relative overflow-hidden border border-[#ECE8E1] shadow-sm">
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
      <div className="fixed bottom-0 left-0 right-0 bg-[#5A6655] border-t border-[#ECE8E1]/10 z-40 text-white py-3 px-4 md:py-4.5 md:px-6 flex items-center justify-between shadow-lg">
        <div className="hidden md:flex items-center space-x-3.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#C6A86B] animate-pulse shrink-0" />
          <p className="font-serif text-sm font-semibold tracking-wide leading-snug">
            Caring for your hair, nails and skin makes you look and feel healthier, younger and more confident. Prioritise yourself.
          </p>
        </div>
        <div className="flex items-center justify-between w-full md:w-auto md:justify-end space-x-4 shrink-0">
          <span className="font-sans text-[10px] tracking-widest uppercase text-white/70 hidden lg:inline">
            197 New Kings Rd, London SW6 4SR
          </span>
          <div className="flex items-center space-x-3 w-full md:w-auto justify-center">
            <Link
              href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
              className="bg-transparent border border-white/30 text-white font-semibold text-[10px] tracking-[0.2em] uppercase px-4 py-2.5 rounded hover:bg-white/10 transition-colors text-center flex-1 md:flex-none whitespace-nowrap"
            >
              Check Availability
            </Link>
            <Link
              href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
              className="bg-[#FCFAF7] text-[#5A6655] border border-[#FCFAF7] font-semibold text-[10px] tracking-[0.2em] uppercase px-4 py-2.5 rounded hover:bg-white transition-all duration-300 block text-center flex-1 md:flex-none whitespace-nowrap"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Fixed Tab: Bottom-Left Check Availability (Exactly matching screenshot) */}
      <div className="fixed bottom-32 left-0 z-40 hidden md:block">
        <Link
          href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
          className="bg-[#5A6655] text-[#FCFAF7] font-serif text-[11px] tracking-[0.2em] uppercase px-4 py-3 border border-white/20 border-l-0 rounded-r shadow-lg block select-none hover:bg-[#C6A86B] transition-colors"
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
