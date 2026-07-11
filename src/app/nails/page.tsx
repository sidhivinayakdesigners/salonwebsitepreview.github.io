"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const nailServicesGrid = [
  {
    title: "Manicure",
    img: "/images/manicure.jpg",
    desc: "Manicure is a complete hand and nail care service designed to clean, shape, and beautify the nails while improving the health of your hands.",
    learnLink: "/service/nails-hands",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Manicure (without polish)",
    img: "/images/manicure_without_polish.png",
    desc: "Manicure (without Polish) is a natural nail care service focused on enhancing the health and appearance of your hands and nails.",
    learnLink: "/service/manicure-without-polish",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Gel Manicure and Gel Pedicure",
    img: "/images/gel_manicure_gel_pedicure.png",
    desc: "Gel Manicure and Gel Pedicure is a comprehensive nail service that combines expert care for both your hands and feet, with long-lasting gel coatings.",
    learnLink: "/service/gel-manicure-and-gel-pedicure",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Manicure and Pedicure",
    img: "/images/manicure_pedicure.jpg",
    desc: "Manicure and Pedicure is a combined treatment designed to provide effective cuticle work, skin filing, and hydration therapy for hands and feet.",
    learnLink: "/service/manicure-and-pedicure",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Bambino Manicure (under 12)",
    img: "/images/bambino_manicure.jpg",
    desc: "Bambino Manicure (under 12) is a delightful nail service tailored specifically for children under 12, providing a fun and gentle nail tidy.",
    learnLink: "/service/bambino-manicure-under-12",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Bambino Pedicure (under 12)",
    img: "/images/bambino_pedicure.jpg",
    desc: "Bambino Pedicure (under 12) is a fun and age-appropriate foot care service designed specifically for children under 12 to refresh feet.",
    learnLink: "/service/bambino-pedicure-under-12",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Male Pedicure",
    img: "/images/male_pedicure.jpg",
    desc: "Male Pedicure is a tailored foot care service designed specifically for men, focusing on clean grooming, callus file prep, and hydration comfort.",
    learnLink: "/service/profession-male-pedicure",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Male Manicure",
    img: "/images/male_manicure.jpg",
    desc: "Male Manicure is a specialized nail service designed to cater to the grooming needs of men, including deep cuticle shape and massage.",
    learnLink: "/service/male-manicure",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Luxury Gel Pedicure",
    img: "/images/luxury_gel_pedicure.jpg",
    desc: "Luxury Gel Pedicure is an exquisite foot care service designed to provide a pampering experience while delivering long-lasting results.",
    learnLink: "/service/luxury-gel-pedicure",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Luxury Pedicure",
    img: "/images/luxury_pedicure.jpg",
    desc: "Luxury Pedicure is a rejuvenating foot care service that provides a pampering experience while enhancing the beauty and health of soles.",
    learnLink: "/service/luxury-pedicure",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Luxury Gel Manicure",
    img: "/images/luxury_gel_manicure.jpg",
    desc: "Luxury Gel Manicure is an indulgent nail service that combines expert nail care, hand scrubs, and massage with long-lasting gel polish.",
    learnLink: "/service/luxury-gel-manicure",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Luxury Manicure",
    img: "/images/luxury_manicure.jpg",
    desc: "Luxury Manicure is a premium hand and nail care service designed to provide an indulgent experience while enhancing nail structure.",
    learnLink: "/service/luxury-manicure",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Gel Pedicure",
    img: "/images/gel_pedicure.png",
    desc: "Gel Pedicure is a luxurious foot care service that combines nail grooming with long-lasting gel polish for a flawless finish.",
    learnLink: "/service/gel-pedicure",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Shape and Paint Hands",
    img: "/images/shape_paint_hands.png",
    desc: "Shape and Paint Hands is a classic nail service that enhances the look of your natural nails by shaping them to your preference and painting them with high-quality classic polish.",
    learnLink: "/service/shape-paint-hands",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Gel Shape and Paint Hands",
    img: "/images/gel_shape_paint_hands.png",
    desc: "Gel Shape and Paint Hands is a nail service that focuses on reshaping and painting the nails with gel polish for a glossy, durable finish that lasts up to 2-3 weeks.",
    learnLink: "/service/gel-shape-paint-hands",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Gel Manicure",
    img: "/images/gel_manicure.jpg",
    desc: "Gel Manicure is a premium nail service that offers long-lasting, glossy color with a durable finish. This manicure begins with full cuticle care, filing, and shaping.",
    learnLink: "/service/gel-manicure",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Pedicure",
    img: "/images/pedicure.jpg",
    desc: "Pedicure is a relaxing and rejuvenating foot care service that focuses on both grooming and pampering your feet. It includes soak, hard skin removal, and massage.",
    learnLink: "/service/pedicure",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Shape and Paint Feet",
    img: "/images/shape_paint_feet.jpg",
    desc: "Shape and Paint Feet is a simple yet effective nail service that focuses on grooming and beautifying your toenails with a perfect shape and premium standard lacquer.",
    learnLink: "/service/shape-paint-feet",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "Gel Shape and Paint Feet",
    img: "/images/gel_shape_paint_feet.jpg",
    desc: "Gel Shape and Paint Feet is a nail service designed to enhance the appearance of your toenails with professional shaping and long-lasting gel coatings.",
    learnLink: "/service/gel-shape-paint-feet",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
  {
    title: "BIAB",
    img: "/images/biab.jpg",
    desc: "A BIAB manicure uses Builder in a Bottle, a gel-like nail base and top coat, which is applied as an overlay to strengthen your natural nails and prevent breakage.",
    learnLink: "/service/biab",
    bookLink: "https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true",
  },
];

export default function NailsServices() {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#FCFAF7] min-h-screen text-[#181816] font-sans">
        
        {/* Title Wrap */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <div className="text-center md:text-left border-b border-[#ECE8E1] pb-6">
            <h1 className="font-serif text-5xl md:text-6xl text-[#181816] font-semibold tracking-wider uppercase">
              Nails
            </h1>
          </div>
        </div>

        {/* Treatment Boxes Grid */}
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {nailServicesGrid.map((serv, index) => (
              <div
                key={index}
                className="flex flex-col bg-white text-[#181816] shadow-premium hover:shadow-premium-hover border border-[#ECE8E1] overflow-hidden transition-all duration-500 rounded-none"
              >
                {/* Thumbnail Wrap */}
                <Link href={serv.learnLink} className="h-[300px] relative w-full overflow-hidden bg-[#FCFAF7] block border-b border-[#ECE8E1]">
                  <Image
                    src={serv.img}
                    alt={serv.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-108 transition-transform duration-700 ease-out"
                    priority={index < 2}
                  />
                </Link>

                {/* Content Wrap */}
                <div className="p-8 md:p-12 flex-grow flex flex-col justify-between items-center text-center space-y-6 bg-white">
                  <div className="space-y-4 w-full">
                    <Link href={serv.learnLink} className="hover:text-[#C6A86B] transition-colors block">
                      <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-[0.05em] uppercase text-[#181816] hover:text-[#C6A86B] transition-colors">
                        {serv.title}
                      </h2>
                    </Link>
                    <hr className="border-t border-[#ECE8E1] w-full" />
                    <p className="font-sans text-xs md:text-sm leading-relaxed tracking-wider text-[#666666] min-h-[60px] flex items-center justify-center font-light">
                      {serv.desc}
                    </p>
                  </div>

                  {/* Buttons Wrap */}
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2 w-full">
                    <Link
                      href={serv.learnLink}
                      className="border border-[#5A6655]/45 text-[#5A6655] font-bold text-[10px] tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#5A6655] hover:text-white transition-all duration-300 min-w-[140px] text-center rounded-none"
                    >
                      Learn More
                    </Link>
                    <a
                      href={serv.bookLink}
                      className="bg-[#5A6655] border border-[#5A6655] text-white font-bold text-[10px] tracking-[0.2em] uppercase px-6 py-3 hover:bg-[#C6A86B] hover:border-[#C6A86B] transition-all duration-300 min-w-[140px] text-center rounded-none"
                    >
                      Book Now
                    </a>
                  </div>
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
