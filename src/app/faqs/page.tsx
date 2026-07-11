"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const faqs = [
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
    a: "Blush + Blow is a hair and beauty salon that provides, nails, tanning, massage, waxing, hair colour, cuts, styling, blow dries and more. Visit our website for more details.",
  },
  {
    q: "Can I walk in and get an appointment?",
    a: "We have lots of people who walk in and get an appointment but to avoid disappointment we recommend booking on our website www.blushandblowlondon.com",
  },
  {
    q: "What are your opening hours?",
    a: "We are open Monday - Wednesday 7:30am to 6:00pm Thursday - Friday 7:30am to 8pm and Saturday - 9:00am to 6:00pm.",
  },
  {
    q: "Do you provide hair and beauty for weddings?",
    a: "We have provided hair and make-up staff for weddings all over the World. Let us know what you would like and and we'll give you a quote. We'd be honoured to be part of your big day.",
  },
  {
    q: "Can I get my make-up done in Blush + Blow?",
    a: "We have two make-up artists who work in Blush + Blow and who can travel for fashion or advertising shoots or weddings etc. Book online to make an appointment at Blush + Blow or else email us your specific requirements and we'll get straight back to you.",
  },
  {
    q: "How can I book an appointment?",
    a: "You can book an appointment through our website at www.blushandblowlondon.com, via phone at 020 7736 0430, or through our Instagram @blushandblowlondon and WhatsApp 07979782832 channels.",
  },
  {
    q: "I'm running late. Can I still come to my appointment?",
    a: "Sorry to hear that you have been delayed but don't worry as we are here to help. Let me check what your appointment was for and I'll ask the staff member/s involved in your appointment if it can be done within the time remaining or whether you will need to rebook.",
  },
  {
    q: "Do you have air conditioning?",
    a: "Yes, our salon has air conditioning.",
  },
  {
    q: "Can I bring my dog to Blush + Blow?",
    a: "We are very dog friendly. So long as your doggy is too. Please clean up after your dog if they have an accident in the salon. We look forward to welcoming you both.",
  },
  {
    q: "Can I bring my child or baby to Blush + Blow?",
    a: "Children are very welcome and we even have kids parties in our salon so ask about booking us for a childrens party. For a normal booking where you bring your child please have them sit quietly and don't disrupt any other clients who may have come to get away from their own children for an hour! If your child causes other clients to complain we may have to reschedule your appointment but that's never happened yet.",
  },
  {
    q: "Where can I leave my bike?",
    a: "You can lock your bike to a bike stand outside the front of the salon.",
  },
  {
    q: "Can I hire an electric bike near by?",
    a: "There is an electric bike rental stand about 100 yards away by the Green.",
  },
  {
    q: "How far away is the Tube or Underground Station?",
    a: "The Tube is a 5 minute walk away.",
  },
  {
    q: "Can I use my Skin Studio Voucher at Blush + Blow?",
    a: "Unfortunately vouchers between the two locations are non-transferable.",
  },
  {
    q: "Do you sell vouchers or gift cards?",
    a: "Yes we sell vouchers and giftcards on the website.",
  },
  {
    q: "I can't make a booking on your website?",
    a: "I am sorry to hear that you are having trouble booking online. Call us or message us via Whatsapp on our site.",
  },
  {
    q: "Can I pay in Euros or Dollars?",
    a: "We accept cash in Pounds Sterling only or any major credit card including American Express.",
  },
  {
    q: "Do you accept American Express?",
    a: "We do accept American Express.",
  },
  {
    q: "Do you accept walk-ins?",
    a: "Yes, we do accept walk-ins based on availability. However, we recommend booking in advance to secure your preferred time and team member.",
  },
  {
    q: "Is the clinic wheelchair accessible?",
    a: "Our hair and nail stations are upstairs however our bathroom and treatment rooms are downstairs and are unfortunately not wheelchair accessible.",
  },
  {
    q: "How do I get there by public transport?",
    a: "Parsons Green Tube is a short walk away and the 22 bus stops a block from us at the Irene Road stop. You can lock your bike outside too.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards, as well as cash payments.",
  },
  {
    q: "How will you use my personal information and data?",
    a: "We will use your information to communicate with you about treatments and any offers and promotions related to relevant treatments for you.",
  },
];

const testimonialsList = [
  {
    name: "Zara and Adam Glowacki",
    text: "Migle is simply amazing! I have been doing my hair with her for past 3 years, colour and cut, she always listens to what you want and like and never does anything opposite of that. Every single time i come out of the salon feeling very happy with my hair:) She will always check in the end if everything is ok until everything is perfect!",
  },
  {
    name: "Sophie Luker",
    text: "I go to Migle for my blow dries, hair cuts and colour and would not go anywhere else. She always listens to my colour requests and always does a fab job! I have really fine hair that doesn’t usually hold a curl, yet Migle manages to get it right every time.",
  },
];

export default function FAQsPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#eae5db] min-h-screen text-[#788672] font-sans">
        
        {/* Title */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16 space-y-4">
          <h1 className="font-serif text-5xl md:text-6xl text-[#788672] font-semibold uppercase tracking-wider">
            FAQ’s
          </h1>
          <div className="h-[1px] w-24 bg-[#788672]/30 mx-auto" />
        </div>

        {/* Collapsible FAQ Section */}
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#eae5db] border border-[#dcd7cc] overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveIdx(isOpen ? null : idx)}
                  className="w-full px-8 py-5 text-left flex items-center justify-between font-serif text-base text-[#788672] font-semibold tracking-wide focus:outline-none"
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
                      <p className="px-8 py-5 font-sans text-xs leading-relaxed tracking-wider text-[#788672]/85 bg-[#cbd1c9]/15">
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
        <div className="max-w-4xl mx-auto px-6 mt-28 border-t border-[#788672]/15 pt-20">
          <div className="text-center space-y-8">
            <h2 className="font-serif text-3xl uppercase tracking-wider font-semibold">
              Testimonials
            </h2>
            <div className="h-[1px] w-12 bg-[#788672]/30 mx-auto" />

            <div className="min-h-[140px] flex items-center justify-center">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#788672] text-[#788672]" />
                  ))}
                </div>
                <p className="font-serif text-base md:text-lg italic leading-relaxed text-[#788672]/90">
                  "{testimonialsList[testimonialIdx].text}"
                </p>
                <p className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase pt-2">
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
                    idx === testimonialIdx ? "bg-[#788672] w-4" : "bg-[#b9c1b7]"
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
