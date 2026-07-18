"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { X, ArrowRight, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSound } from "@/components/ui/ambient-sound";

// Complete blog articles content database
const posts = [
  {
    id: "blindfold",
    title: "Cutting Women’s Hair Blindfolded",
    cat: "Trends",
    date: "1st April 2025",
    author: "By Eleanor Vance",
    img: "/images/blog/blind.jpg",
    desc: "How one Hairdresser ensures his team are able to make the cut. Artistic Director at Maison de Beauté, Antoine Laurent...",
    content: `Antoine began introducing blindfold training sessions for his styling team to help them hone their instinctual understanding of hair structure, texture, and weight distribution. "When you remove sight, your hands become your eyes," he explains. "You feel the thickness of the strand, you understand the bounce, and you cut based on structural balance rather than just visual shapes."

This unusual practice has gained popularity in Chelsea, drawing clients who seek custom, signature layering that grows out beautifully. Antoine reassures: "Don't worry, we only use blindfolds during advanced training workshops, not on our clients! But the result is that our stylists develop an unmatched feel for hair shaping."

Through this sensory technique, Maison de Beauté stylists learn to read hair density without relying solely on visual guidelines. By stripping away sight, a stylist must rely entirely on their fingers to gauge tension, thickness, and natural fall. It’s an exercise in pure structural styling that elevates our haircut precision to a world-class level.`,
  },
  {
    id: "mental-health",
    title: "Boost your mental health and your friendships",
    cat: "Tips",
    date: "3rd January 2025",
    author: "By Eleanor Vance",
    img: "/images/blog/washing.webp",
    desc: "In the bustling city of London, prioritizing self-care can sometimes feel like a luxury...",
    content: `In the bustling city of London, where schedules are packed, prioritizing self-care can sometimes feel like an afterthought. However, self-care isn't just about personal pampering—it can also be a vital tool for strengthening your mental health and bonding with friends.

Salons are increasingly becoming social hubs where friends can unwind together. Booking a pedicure side-by-side or enjoying signature blow-dries before a night out in Kensington is a great way to catch up. Taking this time to disconnect from screens and catch up in a relaxed, aesthetic environment releases serotonin and lowers stress levels.

At Maison de Beauté, we design our spaces to encourage warm connection. We believe that self-care is a collaborative experience. Next time you plan a catch-up, skip the noisy coffee shop and spend an hour getting pampered together. Your mind—and your nails—will thank you.`,
  },
  {
    id: "cheap-special",
    title: "Why Special isn't Cheap and Cheap isn't Special.",
    cat: "General",
    date: "5th October 2024",
    author: "By Eleanor Vance",
    img: "/images/blog/color_price.webp",
    desc: "When it comes to hair colour, getting it right requires high level of expertise, high quality products, and a deep understanding of hair chemistry...",
    content: `When it comes to professional hair colour, getting it right requires a high level of expertise, premium products, and a deep understanding of hair chemistry.

Cheap hair color treatments often use harsh chemical developers that strip the hair of its natural protein bonds, leading to long-term dryness, splitting, and brassiness. In contrast, luxury coloring services use nourishing pigment systems (like our B-Corp certified Davines colors) and molecular repair additives (like Olaplex and K18) to preserve your hair's structural integrity.

Antoine explains: "A cheap color service might look acceptable for the first week, but the damage shows as it washes out. A master colorist takes time to map your natural tones, formulate custom blends, and treat the strands. That is why special isn't cheap, and cheap isn't special."

Investing in high-end coloring means investing in the long-term health of your hair. We formulate bespoke recipes unique to each client's cuticle health and skin undertones, ensuring a beautiful fade-out that remains rich and lustrous for weeks.`,
  },
  {
    id: "biab-nails",
    title: "Discover the Benefits of BIAB for Beautiful Nails",
    cat: "General, Tips",
    date: "27th September 2024",
    author: "By Eleanor Vance",
    img: "/images/blog/nails_biab.jpg",
    desc: "As women living a busy London life, we often find ourselves searching for nail services that are both gorgeous and durable...",
    content: `As women living a busy London life, we often find ourselves searching for nail services that are both gorgeous and durable. Enter BIAB (Builder in a Bottle)—the revolutionary nail overlay that is taking the beauty world by storm.

Unlike traditional gel extensions or acrylics which can file down and weaken the natural nail plate, BIAB is a soak-off builder gel formulated to strengthen and nurture your nails underneath. It creates a flexible, protective shield that prevents splitting, breaking, and chipping.

BIAB is ideal for clients trying to grow out short or damaged nails. Over a few sessions, you'll notice your natural nails are longer, thicker, and healthier. Plus, it can be styled with any high-gloss gel shade or custom nail art. The result is a clean, structural manicure that stands up to the demands of London life while looking incredibly chic.`,
  },
  {
    id: "best-colourist",
    title: "The Best Hair Colourist in Chelsea",
    cat: "General, Latest Insights",
    date: "27th September 2024",
    author: "By Eleanor Vance",
    img: "/images/blog/hair_colourist.jpg",
    desc: "Find the best hair colour specialist near you. Our Chelsea colourists deliver everything from balayage to full head highlights...",
    content: `Finding the perfect hair colorist can be a journey of trial and error. But at Maison de Beauté, we are proud to host some of the best hair colour specialists in West London.

Our colour team is trained extensively in Davines formulation, bespoke hand-painted balayage, highlight correction, and high-shine glossing. We begin every color service with a comprehensive personal consultation, analyzing your skin undertones, hair density, and lifestyle routines to build a bespoke color recipe.

Whether you're looking for a bright champagne blonde highlight set, a warm chestnut regrowth touch-up, or a dimensional sun-kissed balayage, our specialists in Chelsea are dedicated to delivering high-performance, sustainable results. Visit us on the Maison Avenue and experience the difference of master colorists.`,
  },
];

export default function BlowerPage() {
  const { playHover, playClick } = useSound();
  const [activeArticle, setActiveArticle] = useState<typeof posts[0] | null>(null);

  const featured = posts[0];
  const latest = posts.slice(1);

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#FAF8F5] min-h-screen text-[#1E241B] font-sans">
        
        {/* Title Block */}
        <div className="max-w-4xl mx-auto px-6 text-center mb-16 space-y-4">
          <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
            LATEST INSIGHTS
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-[#1E241B] font-light uppercase tracking-wider italic">
            The Blower
          </h1>
          <div className="h-[1px] w-16 bg-[#C5A86A]/40 mx-auto" />
          <p className="text-xs sm:text-sm text-[#1E241B]/75 leading-relaxed tracking-wider max-w-2xl mx-auto font-light">
            Welcome to The Blower, your go-to destination for the latest insights, tips, and trends in hair, nails and beauty. Discover expert advice, product reviews, and insider knowledge.
          </p>
        </div>

        {/* Featured Post */}
        <div className="max-w-6xl mx-auto px-6 mb-20">
          <div className="bg-white border border-[#EFECE6] rounded-lg overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-10 shadow-premium">
            
            <div className="w-full md:w-7/12 relative aspect-[4/3] rounded overflow-hidden shadow-sm">
              <Image
                src={featured.img}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover hover:scale-[1.01] transition-transform duration-1000"
                priority
              />
            </div>

            <div className="w-full md:w-5/12 space-y-6">
              <div className="space-y-1">
                <span className="text-[9px] tracking-[0.25em] text-[#C5A86A] uppercase font-bold">
                  Featured / {featured.cat}
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-[#1E241B] font-light tracking-wide leading-tight uppercase animate-fade-in">
                  {featured.title}
                </h2>
              </div>

              <div className="h-[1px] w-12 bg-[#C5A86A]/30" />

              <p className="text-xs text-[#1E241B]/70 leading-relaxed font-light">
                {featured.desc}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#EFECE6]">
                <div className="text-[9px] tracking-wider text-[#1E241B]/50 font-sans">
                  <p>{featured.date}</p>
                  <p className="font-bold text-[10px] text-[#1E241B]/70 mt-0.5">{featured.author}</p>
                </div>
                <button
                  onMouseEnter={playHover}
                  onClick={() => {
                    playClick();
                    setActiveArticle(featured);
                  }}
                  className="bg-[#1E241B] hover:bg-[#5C6B57] text-[#FAF8F5] font-bold text-[9px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-sm flex items-center space-x-1.5"
                >
                  <BookOpen size={10} />
                  <span>Read Article</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Latest Posts Grid */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center space-x-4 mb-8">
            <h2 className="font-serif text-2xl uppercase tracking-wider font-light text-[#1E241B]">
              Latest Posts
            </h2>
            <div className="h-[1px] flex-grow bg-[#EFECE6]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {latest.map((post, idx) => (
              <div
                key={idx}
                className="group bg-white border border-[#EFECE6] rounded-lg overflow-hidden shadow-premium flex flex-col justify-between h-full hover:shadow-premium-hover transition-all duration-500"
              >
                <div>
                  <div className="relative aspect-square overflow-hidden border-b border-[#EFECE6]">
                    <Image
                      src={post.img}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                    />
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[8px] tracking-[0.25em] text-[#C5A86A] uppercase font-bold">
                      {post.cat}
                    </span>
                    <h3 className="font-serif text-base text-[#1E241B] font-light tracking-wide uppercase leading-snug group-hover:text-[#C5A86A] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[11px] leading-relaxed text-[#1E241B]/60 font-light line-clamp-3">
                      {post.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-[#EFECE6]/50 flex items-center justify-between">
                  <span className="text-[9px] tracking-wider text-[#1E241B]/40">
                    {post.date}
                  </span>
                  <button
                    onMouseEnter={playHover}
                    onClick={() => {
                      playClick();
                      setActiveArticle(post);
                    }}
                    className="text-[9px] tracking-[0.2em] font-bold text-[#C5A86A] uppercase hover:underline cursor-pointer flex items-center space-x-1"
                  >
                    <span>Read</span>
                    <ArrowRight size={10} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Lightbox Article Reader Modal */}
        <AnimatePresence>
          {activeArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center p-4 md:p-6 cursor-zoom-out"
            >
              <motion.div
                initial={{ y: 20, scale: 0.98 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 20, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                className="bg-[#FAF8F5] max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-lg shadow-2xl p-6 md:p-10 relative flex flex-col space-y-6 cursor-default scrollbar-thin"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onMouseEnter={playHover}
                  onClick={() => {
                    playClick();
                    setActiveArticle(null);
                  }}
                  className="absolute top-4 right-4 text-[#1E241B]/60 hover:text-[#1E241B] p-2 focus:outline-none cursor-pointer"
                  aria-label="Close article"
                >
                  <X size={20} />
                </button>

                {/* Article Header */}
                <div className="space-y-3 pt-4 text-center">
                  <span className="text-[#C5A86A] text-[9px] tracking-[0.25em] font-bold uppercase block font-sans">
                    {activeArticle.cat}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl text-[#1E241B] font-light uppercase tracking-wide leading-tight">
                    {activeArticle.title}
                  </h2>
                  <div className="flex items-center justify-center space-x-4 text-[9px] tracking-wider text-[#1E241B]/50 font-sans">
                    <span>{activeArticle.date}</span>
                    <span>•</span>
                    <span className="font-semibold uppercase text-[#1E241B]/70">{activeArticle.author}</span>
                  </div>
                  <div className="h-[1px] w-12 bg-[#C5A86A]/45 mx-auto pt-2" />
                </div>


                {/* Article Text Content */}
                <div className="font-sans text-xs md:text-sm text-[#1E241B]/80 leading-relaxed tracking-wider space-y-4 font-light whitespace-pre-wrap pt-2">
                  {activeArticle.content}
                </div>

                {/* Article Footer Signoff */}
                <div className="pt-6 border-t border-[#EFECE6]/70 flex items-center justify-between text-[10px] tracking-widest text-[#5C6B57] font-bold uppercase font-sans">
                  <span>Maison de Beauté London</span>
                  <button
                    onMouseEnter={playHover}
                    onClick={() => {
                      playClick();
                      setActiveArticle(null);
                    }}
                    className="text-[#C5A86A] hover:underline cursor-pointer"
                  >
                    Close Reading View
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <Footer />
    </>
  );
}
