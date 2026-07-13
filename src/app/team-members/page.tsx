"use client";

import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const teamMembers = [
  {
    name: "Annie",
    role: "Receptionist",
    img: "/images/team/annie.webp",
    desc: "Annie is our friendly receptionist who thrives in working in a bustling environment where everyone works as a team. She really enjoys working with people, both our clients and supporting our staff. Annie’s kind and calm demeanor will welcome you into our space and you will be well taken care of.",
  },
  {
    name: "Bridget",
    role: "Founder",
    img: "/images/team/bridget.png",
    desc: "Bridget has a love for gorgeous hair, beauty and glowing skin as well as a passion for keeping up to date with the latest industry trends and technologies. This has allowed her to create a truly luxurious retreat in the heart of London that delivers bespoke treatments, in a setting that feels like a home away from home.",
  },
  {
    name: "Morgan",
    role: "Beauty & Laser Therapist",
    img: "/images/team/morgan.webp",
    desc: "Morgan enjoys the aspect of caring in beauty work. She loves making someone feel better when they might not be feeling their best. Morgan is skilled in a variety of beauty treatments as well as Hydrafacial and laser hair removal. Her calm demeanour and attention to detail make her a favourite among her clients.",
  },
  {
    name: "Kate",
    role: "Operations",
    img: "/images/team/kate.webp",
    desc: "Kate loves enabling others and playing a part in making the cogs of the business turn. She enjoys interacting with the team and that her role covers a variety of work, from supporting others, being creative and administration.",
  },
  {
    name: "Bee",
    role: "Nail Technician",
    img: "/images/team/bee.webp",
    desc: "Bee believes that careful and patient preparation creates the setting for applying flawless work. She loves to see her clients’ glowing and admiring her work. Her favourite treatment to deliver is gel-extensions, ensuring her clients’ leave with long, strong and stunning nails.",
  },
  {
    name: "Cristina",
    role: "Nail Technician & Makeup Artist",
    img: "/images/team/cristina.webp",
    desc: "Cristina is inspired by making people feel beautiful. She loves doing make-up because it allows her to use her creativity to bring out the best in others and enhance their natural beauty. She feels a deep sense of gratitude in being able to empower her clients and the positive impact that her work has on others.",
  },
  {
    name: "Freya",
    role: "Beauty Therapist & Makeup Artist",
    img: "/images/team/freya.webp",
    desc: "Freya loves making her clients feel more comfortable and relaxed, so that they leave the salon feeling happy and a more confident version of themselves. She is passionate about doing makeovers and giving makeup lessons, as this brings her clients joy and empowers them to use their products correctly.",
  },
  {
    name: "Hema",
    role: "Beauty Therapist",
    img: "/images/team/hema.webp",
    desc: "Hema loves to make people feel better, ease stress and induce relaxation. She achieves this through the power of touch: she has over 17 years experience in massage, which is her favourite treatment to perform. Hema is kind, supportive and caring and regularly gets feedback that she has made her clients’ day.",
  },
  {
    name: "Lamiaa",
    role: "Beauty Therapist & Threading Artist",
    img: "/images/team/lamiaa.png",
    desc: "Lamiaa is a multi-talented beauty professional, having done hair for over 20 years as well as being extremely in demand for her threading skills! She is so popular that she gets booked up weeks in advance, so magical are her hands! She is also renowned for her signature baby-lights and really enjoys the creative element of colour.",
  },
  {
    name: "Migle",
    role: "Colourist",
    img: "/images/team/migle.webp",
    desc: "Migle has been with Blush + Blow London since our doors opened in 2016. She is constantly in demand with our clients for her amazing blow dry skills and colour creations. Her hair styling is so loved by her clients that she has travelled to five different countries for multiple Blush + Blow London International brides.",
  },
  {
    name: "Rozina",
    role: "Colourist",
    img: "/images/team/rozina.webp",
    desc: "Rozina can create the perfect look for any occasion. She specialises in incredible blow dries and flawless styling. Her clients’ burst with happiness with the results and she loves creating this experience for them. She also uses colour to transform clients’ hair into gorgeous, glowing locks.",
  },
  {
    name: "Sara Eddi",
    role: "Colourist",
    img: "/images/team/sara.webp",
    desc: "Sara Eddi loves that her profession allows her to express her creativity and at the same time help people feel more confident. She is wonderfully creative, friendly and attentive and takes great care of her clients. With more than 10 years’ hair experience, she fashions beautiful up dos and delivers gorgeous colour.",
  },
];

export default function TeamMembers() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#FAF8F5] min-h-screen text-[#1E241B] font-sans overflow-x-hidden">
        
        {/* Title Section */}
        <div className="max-w-7xl mx-auto px-6 mb-28 text-center space-y-4">
          <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
            THE ARTISTS & FOUNDERS
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#1E241B] font-light uppercase tracking-wider italic">
            Blushers + Blowers
          </h1>
          <div className="h-[1px] w-16 bg-[#C5A86A]/40 mx-auto" />
          <p className="text-xs sm:text-sm text-[#1E241B]/75 leading-relaxed tracking-wider max-w-2xl mx-auto">
            Driven by passion and expertise, our team at Blush + Blow combines years of industry experience with a shared goal: to elevate your personal style.
          </p>
        </div>

        {/* Alternating Wide Overlap Rows */}
        <div className="max-w-6xl mx-auto px-6 space-y-24 md:space-y-28">
          {teamMembers.map((member, index) => {
            const isOdd = index % 2 === 0;
            return (
              <div key={index} className="relative w-full overflow-visible">
                {/* Responsive banner box container */}
                <div
                  className={`w-full rounded-lg md:h-[280px] flex flex-col ${
                    isOdd ? "md:flex-row" : "md:flex-row-reverse"
                  } overflow-visible shadow-premium border border-[#EFECE6] bg-white`}
                >
                  
                  {/* Photo Section (Absolute Overlapping on Desktop, block on Mobile) */}
                  <div
                    className="relative w-full md:w-5/12 h-[300px] md:h-full shrink-0 overflow-visible"
                  >
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[330px] md:w-[310px] md:h-[350px] lg:h-[380px] overflow-visible"
                    >
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        sizes="(max-width: 768px) 280px, 350px"
                        className="object-contain object-bottom pointer-events-none"
                        priority={index < 2}
                      />
                    </div>
                  </div>

                  {/* Text Details Section */}
                  <div
                    className={`w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center ${
                      isOdd ? "text-center md:text-left" : "text-center md:text-right"
                    }`}
                  >
                    <div>
                      <h2 className="font-serif text-3xl font-light tracking-wider uppercase text-[#1E241B]">
                        {member.name}
                      </h2>
                      <span className="text-[#C5A86A] text-[9px] tracking-[0.25em] uppercase font-bold block mt-1.5 font-sans">
                        {member.role}
                      </span>
                    </div>

                    <hr className="my-5 w-full border-[#EFECE6]" />

                    <p className="font-sans text-xs sm:text-sm leading-relaxed tracking-wider text-[#1E241B]/70 font-light">
                      {member.desc}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </main>

      <Footer />
    </>
  );
}
