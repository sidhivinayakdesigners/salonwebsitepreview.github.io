"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { useSound } from "@/components/ui/ambient-sound";

const faqs = [
  {
    q: "When did Maison de Beauté open?",
    a: "Maison de Beauté opened in 2016, and our adjacent Skin Studio opened in 2022.",
  },
  {
    q: "Where is Maison de Beauté located?",
    a: "We are situated in Chelsea, Kensington. Our address is 123 Maison Avenue, London SW6 4SR.",
  },
  {
    q: "What treatments do you provide?",
    a: "We offer hair styling, coloring, blow dries, manicures, pedicures, beauty waxing, brows, lashes, massage, and spray tanning.",
  },
  {
    q: "Can I walk in, or do I need to book?",
    a: "We do accommodate walk-ins when possible, but we highly recommend booking online in advance to ensure availability.",
  },
  {
    q: "What are your opening hours?",
    a: "Monday – Wednesday: 9am to 6pm | Thursday – Friday: 9am to 8pm | Saturday: 9am to 6pm | Sunday: Closed.",
  },
  {
    q: "Do you offer wedding styling?",
    a: "Yes, we specialize in bridal hair and makeup services. We cater to weddings globally and offer full in-salon trials.",
  },
  {
    q: "How can I contact the salon?",
    a: "Call us on 020 7123 4567, WhatsApp us on 07979782832, or email info@maisondebeautelondon.com.",
  },
  {
    q: "Is the salon pet friendly?",
    a: "We are extremely dog friendly! Well-behaved dogs are always welcome.",
  },
];

const testimonialsList = [
  {
    name: "Zara and Adam Glowacki",
    text: "Mia is simply amazing! I have been doing my hair with her for past 3 years, colour and cut, she always listens to what you want and like and never does anything opposite of that. Every single time i come out of the salon feeling very happy with my hair:) She will always check in the end if everything is ok until everything is perfect!",
  },
  {
    name: "Sophie Luker",
    text: "I go to Mia for my blow dries, hair cuts and colour and would not go anywhere else. She always listens to my colour requests and always does a fab job! I have really fine hair that doesn’t usually hold a curl, yet Mia manages to get it right every time.",
  },
];

export default function FAQsPage() {
  const { playHover, playClick } = useSound();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#FAF8F5] min-h-screen text-[#1E241B] font-sans">
        
        {/* Title */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16 space-y-4">
          <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
            COMMON INQUIRIES
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#1E241B] font-light uppercase tracking-wider italic">
            FAQ’s
          </h1>
          <div className="h-[1px] w-16 bg-[#C5A86A]/40 mx-auto" />
        </div>

        {/* Collapsible FAQ Section */}
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-[#EFECE6] rounded-md overflow-hidden shadow-premium transition-all duration-300"
              >
                <button
                  onMouseEnter={playHover}
                  onClick={() => {
                    playClick();
                    setActiveIdx(isOpen ? null : idx);
                  }}
                  className="w-full px-6 py-5 text-left flex items-center justify-between font-serif text-sm sm:text-base text-[#1E241B] font-normal tracking-wide focus:outline-none hover:text-[#C5A86A] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#C5A86A] font-serif text-2xl font-light leading-none">
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
                      className="border-t border-[#EFECE6]"
                    >
                      <p className="px-6 py-5 font-sans text-xs leading-relaxed tracking-wider text-[#1E241B]/70 bg-[#FAF8F5]/50">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Testimonials at bottom */}
        <div className="max-w-4xl mx-auto px-6 mt-28 border-t border-[#EFECE6] pt-20">
          <div className="text-center space-y-8">
            <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
              REVIEWS
            </span>
            <h2 className="font-serif text-3xl text-[#1E241B] font-light uppercase tracking-wider italic mt-1">
              Client Testimonials
            </h2>
            <div className="h-[1px] w-12 bg-[#C5A86A]/40 mx-auto" />

            <div className="min-h-[140px] flex items-center justify-center">
              <div className="space-y-4 max-w-2xl bg-white p-8 border border-[#EFECE6] rounded-lg shadow-premium">
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#C5A86A] text-[#C5A86A]" />
                  ))}
                </div>
                <p className="font-serif text-sm sm:text-base italic leading-relaxed text-[#1E241B]/80 font-light">
                  "{testimonialsList[testimonialIdx].text}"
                </p>
                <p className="font-sans text-[9px] font-bold tracking-[0.2em] uppercase pt-2 text-[#C5A86A]">
                  — {testimonialsList[testimonialIdx].name}
                </p>
              </div>
            </div>

            {/* Bullet indicators */}
            <div className="flex items-center justify-center space-x-2">
              {testimonialsList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestimonialIdx(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === testimonialIdx ? "bg-[#C5A86A] w-4" : "bg-[#1E241B]/15"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
