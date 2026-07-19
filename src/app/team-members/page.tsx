"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
  {
    name: "Annie",
    role: "Receptionist",
    img: "/images/team/annie.webp",
    desc: "Annie is our friendly receptionist who thrives in working in a bustling environment where everyone works as a team. She really enjoys working with people, both our clients and supporting our staff. Annie's kind and calm demeanor will welcome you into our space and you will be well taken care of.",
  },
  {
    name: "Genevieve",
    role: "Founder",
    img: "/images/team/bridget.png",
    desc: "Genevieve has a love for gorgeous hair, beauty and glowing skin as well as a passion for keeping up to date with the latest industry trends and technologies. This has allowed her to create a truly luxurious retreat in the heart of London that delivers bespoke treatments, in a setting that feels like a home away from home.",
  },
  {
    name: "Camille",
    role: "Beauty & Laser Therapist",
    img: "/images/team/morgan.webp",
    desc: "Camille enjoys the aspect of caring in beauty work. She loves making someone feel better when they might not be feeling their best. Camille is skilled in a variety of beauty treatments as well as Hydrafacial and laser hair removal. Her calm demeanour and attention to detail make her a favourite among her clients.",
  },
  {
    name: "Eleanor",
    role: "Operations",
    img: "/images/team/kate.webp",
    desc: "Eleanor loves enabling others and playing a part in making the cogs of the business turn. She enjoys interacting with the team and that her role covers a variety of work, from supporting others, being creative and administration.",
  },
  {
    name: "Bee",
    role: "Nail Technician",
    img: "/images/team/bee.webp",
    desc: "Bee believes that careful and patient preparation creates the setting for applying flawless work. She loves to see her clients' glowing and admiring her work. Her favourite treatment to deliver is gel-extensions, ensuring her clients' leave with long, strong and stunning nails.",
  },
  {
    name: "Cristina",
    role: "Nail Technician & Makeup Artist",
    img: "/images/team/cristina.webp",
    desc: "Cristina is inspired by making people feel beautiful. She loves doing make-up because it allows her to use her creativity to bring out the best in others and enhance their natural beauty. She feels a deep sense of gratitude in being able to empower her clients and the positive impact that her work has on others.",
  },
  {
    name: "Sophia",
    role: "Beauty & Makeup Specialist",
    img: "/images/team/freya.webp",
    desc: "Sophia loves making her clients feel more comfortable and relaxed, so that they leave the salon feeling happy and a more confident version of themselves. She is passionate about doing makeovers and giving makeup lessons, as this brings her clients joy and empowers them to use their products correctly.",
  },
  {
    name: "Amara",
    role: "Beauty Therapist",
    img: "/images/team/hema.webp",
    desc: "Amara loves to make people feel better, ease stress and induce relaxation. She achieves this through the power of touch: she has over 17 years experience in massage, which is her favourite treatment to perform. Amara is kind, supportive and caring and regularly gets feedback that she has made her clients' day.",
  },
  {
    name: "Layla",
    role: "Beauty & Threading Artist",
    img: "/images/team/lamiaa.png",
    desc: "Layla is a multi-talented beauty professional, having done hair for over 20 years as well as being extremely in demand for her threading skills! She is so popular that she gets booked up weeks in advance, so magical are her hands! She is also renowned for her signature baby-lights and really enjoys the creative element of colour.",
  },
  {
    name: "Mia",
    role: "Colourist",
    img: "/images/team/migle.webp",
    desc: "Mia has been with Maison de Beauté London since our doors opened in 2016. She is constantly in demand with our clients for her amazing blow dry skills and colour creations. Her hair styling is so loved by her clients that she has travelled to five different countries for multiple Maison de Beauté London International brides.",
  },
  {
    name: "Rose",
    role: "Colourist",
    img: "/images/team/rozina.webp",
    desc: "Rose can create the perfect look for any occasion. She specialises in incredible blow dries and flawless styling. Her clients' burst with happiness with the results and she loves creating this experience for them. She also uses colour to transform clients' hair into gorgeous, glowing locks.",
  },
  {
    name: "Sara",
    role: "Colourist",
    img: "/images/team/sara.webp",
    desc: "Sara loves that her profession allows her to express her creativity and at the same time help people feel more confident. She is wonderfully creative, friendly and attentive and takes great care of her clients. With more than 10 years' hair experience, she fashions beautiful up dos and delivers gorgeous colour.",
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -120 : 120,
    opacity: 0,
  }),
};

const mobileSlideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
  }),
};

export default function TeamMembers() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeBioIndex, setActiveBioIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1: next, -1: prev

  const handleNext = () => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % teamMembers.length);
    setActiveBioIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
    setActiveBioIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  // Get 3 visible members for desktop slider
  const getVisibleMembers = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const idx = (startIndex + i) % teamMembers.length;
      visible.push({ ...teamMembers[idx], originalIndex: idx });
    }
    return visible;
  };

  const activeMember = teamMembers[activeBioIndex];

  return (
    <div className="min-h-screen bg-[#C0C8B9] text-[#5C6B57]">
      <Navbar />

      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 select-none overflow-x-hidden">
        
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-7xl font-normal uppercase tracking-[0.25em] text-[#5C6B57]">
            TEAM
          </h1>
          <div className="h-[1px] w-20 bg-[#5C6B57]/30 mx-auto mt-4" />
        </div>

        {/* Carousel Slider Section */}
        <div className="relative flex items-center justify-between w-full max-w-6xl mx-auto px-4">
          
          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white text-[#5C6B57] flex items-center justify-center shadow-md hover:scale-105 transition-all z-10 shrink-0 cursor-pointer"
            aria-label="Previous team member"
          >
            <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Members Display Container */}
          <div className="w-full mx-2 overflow-hidden min-h-[420px] flex items-center justify-center relative">
            
            {/* Desktop View (3 columns) */}
            <div className="hidden md:block w-full">
              <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                <motion.div
                  key={startIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-3 gap-6 py-6 w-full"
                >
                  {getVisibleMembers().map((member, index) => {
                    const isActive = member.originalIndex === activeBioIndex;
                    return (
                      <div
                        key={index}
                        onClick={() => setActiveBioIndex(member.originalIndex)}
                        className={`flex items-center justify-center transition-all duration-350 cursor-pointer ${
                          isActive ? "scale-102 opacity-100" : "scale-98 opacity-75 hover:opacity-90"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          
                          {/* Left Side: Role Text (rotated -90deg) */}
                          <div className="h-[340px] flex items-center justify-end w-6">
                            <span
                              className="text-[9px] tracking-[0.25em] text-[#5C6B57]/80 uppercase font-sans font-bold whitespace-nowrap block"
                              style={{
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                              }}
                            >
                              {member.role}
                            </span>
                          </div>

                          {/* Middle: Photo inside frame */}
                          <div className="relative w-[210px] h-[300px] lg:w-[245px] lg:h-[350px] shrink-0 border-[3px] border-[#5C6B57] p-2.5 bg-transparent">
                            <div className="relative w-full h-full overflow-hidden bg-transparent">
                              <Image
                                src={member.img}
                                alt={member.name}
                                fill
                                className="object-cover object-center pointer-events-none mix-blend-multiply"
                                sizes="(max-width: 1024px) 210px, 250px"
                              />
                            </div>
                          </div>

                          {/* Right Side: Name (rotated -90deg, large serif) */}
                          <div className="h-[340px] flex items-center justify-start w-10">
                            <span
                              className="font-serif text-4xl lg:text-5xl tracking-[0.2em] text-[#5C6B57] uppercase font-light whitespace-nowrap block"
                              style={{
                                writingMode: "vertical-rl",
                                transform: "rotate(180deg)",
                              }}
                            >
                              {member.name}
                            </span>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile View (1 column) */}
            <div className="md:hidden w-full flex items-center justify-center min-h-[300px]">
              <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                <motion.div
                  key={activeBioIndex}
                  custom={direction}
                  variants={mobileSlideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-center font-sans"
                >
                  
                  {/* Left Side: Role Text */}
                  <div className="h-[260px] flex items-center justify-end w-6">
                    <span
                      className="text-[8px] tracking-[0.2em] text-[#5C6B57]/85 uppercase font-sans font-bold whitespace-nowrap block"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {activeMember.role}
                    </span>
                  </div>

                  {/* Middle: Photo Box */}
                  <div className="relative w-[170px] h-[240px] shrink-0 border-[3px] border-[#5C6B57] p-1.5 bg-transparent">
                    <div className="relative w-full h-full overflow-hidden bg-transparent">
                      <Image
                        src={activeMember.img}
                        alt={activeMember.name}
                        fill
                        className="object-cover object-center pointer-events-none mix-blend-multiply"
                        sizes="170px"
                      />
                    </div>
                  </div>

                  {/* Right Side: Name */}
                  <div className="h-[260px] flex items-center justify-start w-10">
                    <span
                      className="font-serif text-4xl tracking-[0.2em] text-[#5C6B57] uppercase font-light whitespace-nowrap block"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {activeMember.name}
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white text-[#5C6B57] flex items-center justify-center shadow-md hover:scale-105 transition-all z-10 shrink-0 cursor-pointer"
            aria-label="Next team member"
          >
            <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

        {/* Biography Block of Active Member */}
        <div className="max-w-2xl mx-auto text-center mt-16 px-6 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-8 shadow-sm animate-fade-in">
          <h2 className="font-serif text-2xl text-[#5C6B57] uppercase tracking-wider mb-1">
            {activeMember.name}
          </h2>
          <span className="text-[9px] tracking-[0.25em] text-[#5C6B57]/70 uppercase font-sans font-bold block mb-4">
            {activeMember.role}
          </span>
          <p className="font-sans text-xs sm:text-sm leading-relaxed tracking-wider text-[#5C6B57]/90 font-light max-w-xl mx-auto">
            {activeMember.desc}
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
