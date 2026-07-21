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
  ChevronLeft,
  ChevronRight,
  Sparkles,
  User,
  Scissors,
  HelpCircle,
  X,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useSound } from "@/components/ui/ambient-sound";

// Testimonials data
// Testimonials data
const testimonialsList = [
  {
    name: "Zara and Adam Glowacki",
    text: "Mia is simply amazing! I have been doing my hair with her for past 3 years, colour and cut, she always listens to what you want and like and never does anything opposite of that. Every single time I come out of the salon feeling very happy with my hair:) She will always check in the end if everything is ok until everything is perfect! Salon itself is very clean and pretty and in a lovely location ❤️"
  },
  {
    name: "Sophie Luker",
    text: "I go to Mia for my blow dries, hair cuts and colour and would not go anywhere else. She always listens to my colour requests and always does a fab job! I have really fine hair that doesn’t usually hold a curl, yet Mia manages to get it right every time. Thank you!"
  },
  {
    name: "HCannon",
    text: "What a gorgeous spot. Between Maison de Beauté and our sister (next door) location, The Skin Studio, you can get a complete beauty package in a gorgeous space, from lovely, professional staff. I have had several blowouts here and a couple of manicures and have never ever been disappointed. Well done to the whole team."
  },
  {
    name: "Anna Halliday",
    text: "The best salon in Chelsea, by a long way!! They have excellent stylists - you can trust that you will always walk out with an amazing blow dry or beauty treatment. Also the team are super kind and friendly, and the salon itself is really beautiful and stylish. Highly recommend ❤"
  },
  {
    name: "Ellie Rhodes",
    text: "Beautiful Space. Friendly Staff and coffee passed to you as soon as you walk in! Camille was a gem, so friendly and kind. Always checked I was happy with what I was after in my results. Will be back :)"
  },
  {
    name: "Stephanie oiknine",
    text: "I had highlights with Sara and the result is amazing, looks so natural. Exactly how I like it. Plus she is super friendly and nice and the blow dry is amazing as well. Highly recommended"
  },
  {
    name: "Hayley Richardson",
    text: "I love this salon - have always been so happy with my treatments and the staff are friendly and attentive. Great atmosphere, stylish place, would definitely recommend."
  },
  {
    name: "Jade Adami",
    text: "A beautiful salon experience, which left me feeling pampered and indulged. The ladies at the salon really looked after me. I will certainly be back!"
  },
  {
    name: "Lucy Coe",
    text: "Amazing salon, welcoming staff and the best blow dry I have had in London. It lasts me the whole night, a feat I have never managed before! Thanks team."
  },
  {
    name: "Kate Richards",
    text: "I've finally found the perfect place for facials and botox with Dr K! Helps that Maison de Beauté is a gorgeous salon and the staff are super friendly too. Dr K made feel so relaxed and my skin looks and feels amazing, can't imagine going anywhere else now"
  },
  {
    name: "Kate Richards",
    text: "Visited for the first time last night and will definitely be making this my salon of choice. The atmosphere is so friendly, the salon is gorgeous and the girls make you feel instantly warm and welcome. On top of that my treatment was brilliant and have booked to back in a few weeks!"
  },
  {
    name: "Marianna Cirillo",
    text: "I’m a regular at Maison de Beauté and never been disappointed! I had a few treatments done with Dr Krystina and I have to say she is the best ever!! Love the results and lasts for long time! High recommend her!"
  },
  {
    name: "Rebecca Ross",
    text: "I always absolutely love going to Maison de Beauté. The team are meticulous and extremely professional. They always remember you and make you feel at ease and as through you are truly a valued customer. Their costs for a Gel Shape and Paint are extremely competitive too - which is always a plus!"
  }
];

// Press section logos
const pressImages = [
  {
    src: "https://blushandblowlondon.com/wp-content/themes/skinstudiolondon/images/Press%201.png",
    alt: "Grazia, Tatler, Cosmopolitan, Vogue, Glamour, Bazaar, WomensHealth, Sheerluxe",
  },
  {
    src: "https://blushandblowlondon.com/wp-content/themes/skinstudiolondon/images/Press%202.png",
    alt: "Hello, Ok, London Evening Standard, Perfect Wedding, Get The Gloss, Forbes, StyleNest",
  },
  {
    src: "https://blushandblowlondon.com/wp-content/themes/skinstudiolondon/images/Press%203.png",
    alt: "Mailonline, Metro, The Telegraph, Independent, TheSun, DailyMail",
  },
];

// FAQs data
const faqsList = [
  {
    q: "When did Maison de Beauté open?",
    a: "Maison de Beauté opened in 2016 and our sister space, The Skin Studio, opened in 2022 next door.",
  },
  {
    q: "Where is Maison de Beauté located?",
    a: "Maison de Beauté is located in Chelsea, London. Our address is 123 Maison Avenue, London SW6 4SR.",
  },
  {
    q: "What services do you provide?",
    a: "We are a full-service hair and beauty salon providing nails, blow dries, color, cuts, bridal packages, and beauty treatments.",
  },
  {
    q: "What are your opening hours?",
    a: "We are open Mon - Wed: 9:00 am - 6:00 pm, Thu - Fri: 9:00 am - 8:00 pm, and Sat: 9:00 am - 6:00 pm. We are closed on Sundays.",
  },
];

// Team List
const teamMembersList = [
  { name: "Bee", role: "NAIL TECHNICIAN", image: "/images/team/bee.webp" },
  { name: "Annie", role: "RECEPTIONIST", image: "/images/team/annie.webp" },
  { name: "Cristina", role: "NAIL TECHNICIAN & MAKEUP ARTIST", image: "/images/team/cristina.webp" },
  { name: "Genevieve", role: "FOUNDER & DIRECTOR", image: "/images/team/bridget.png" },
  { name: "Camille", role: "BEAUTY & LASER THERAPIST", image: "/images/team/morgan.webp" },
  { name: "Layla", role: "BEAUTY & THREADING ARTIST", image: "/images/team/lamiaa.png" },
  { name: "Mia", role: "COLOURIST", image: "/images/team/migle.webp" },
  { name: "Rose", role: "COLOURIST", image: "/images/team/rozina.webp" },
  { name: "Sara", role: "COLOURIST", image: "/images/team/sara.webp" },
];

// Quick menu price highlights
const quickMenuData = {
  hair: [
    { name: "Permanent Colour Regrowth", price: "£49", desc: "Seamless root touch-up with luxury Davines color system." },
    { name: "Cut & Blow Dry (Stylist)", price: "£65", desc: "Precision style cut, deep conditioning wash & bouncy blow dry finish." },
    { name: "Bespoke Balayage / Ombre", price: "£160", desc: "Custom hand-painted highlights tailored to your natural tone." },
    { name: "Olaplex Standalone Repair", price: "£45", desc: "Molecular bond-building treatment to restore dry or damaged strands." },
  ],
  nails: [
    { name: "Gel Shape & Paint (Hands)", price: "£36", desc: "Cuticle work, precision shaping and high-gloss long lasting gel polish." },
    { name: "Maison de Beauté Signature Manicure", price: "£45", desc: "Deluxe skin exfoliation, deep massage and classic paint finish." },
    { name: "BIAB Overlay (Natural)", price: "£48", desc: "Builder in a Bottle overlay to strengthen and grow natural nails." },
    { name: "Gel Pedicure", price: "£40", desc: "Refreshing botanical soak, cuticle care and durable gel polish." },
  ],
  beauty: [
    { name: "Brow Tint & Shape", price: "£28", desc: "Precision mapping, shaping (wax/thread) and custom brow tinting." },
    { name: "Full Body St. Tropez Tan", price: "£38", desc: "Streak-free, bespoke bronzing for a flawless sun-kissed glow." },
    { name: "Lash Lift & Tint", price: "£65", desc: "Natural root-lifting lash curl that opens eyes for 6-8 weeks." },
    { name: "Swedish Relaxing Massage (60 Min)", price: "£75", desc: "Private room therapy designed to decompress muscles and restore calm." },
  ],
  bridal: [
    { name: "Bridal Hair Styling (On-Day)", price: "£120", desc: "Luxury wedding day styling, updos or romantic textured waves." },
    { name: "Bridal Makeup Artistry (On-Day)", price: "£125", desc: "Camera-ready, long-wear cosmetic application including lash flares." },
    { name: "Bridal Hair Trial (In-Salon)", price: "£90", desc: "Detailed 1.5-hour design consultation to perfect your wedding look." },
  ],
};

const fullServiceDetails: Record<
  string,
  { title: string; price: string; desc: string; time: string }
> = {
  // Hair -> Colour
  "permanent-regrowth": {
    title: "Permanent Colour Regrowth",
    price: "£49",
    desc: "Seamless root touch-up with luxury Davines color system to blend roots perfectly with your existing color.",
    time: "120 mins",
  },
  "full-head-color": {
    title: "Full Head Permanent Colour",
    price: "£75",
    desc: "Complete hair coloring from root to tip, customized by master colorists for a vibrant, shimmering blend.",
    time: "150 mins",
  },
  "half-head-foils": {
    title: "Half Head Foil Highlights",
    price: "£110",
    desc: "Precision foil highlights distributed through the crown and sides for natural brightness and dimension.",
    time: "150 mins",
  },
  "full-head-foils": {
    title: "Full Head Foil Highlights",
    price: "£140",
    desc: "Full-head dimensional foil highlights custom matched to add brightness and blend seamlessly.",
    time: "180 mins",
  },
  "t-section-foils": {
    title: "T-Section Highlights",
    price: "£85",
    desc: "Quick highlight refresh focusing on the parting and hairline to maintain your look between full visits.",
    time: "90 mins",
  },
  "balayage": {
    title: "Bespoke Balayage / Ombre",
    price: "£160",
    desc: "Custom hand-painted highlights tailored to your skin tone and hair movement for a dimensional, low-maintenance look.",
    time: "180 mins",
  },
  // Hair -> Blowdry
  "blowdry-short": {
    title: "Blow Dry (Short Hair)",
    price: "£35",
    desc: "Refreshing wash, scalp massage, and professional blow dry styled sleek or bouncy for short cuts.",
    time: "40 mins",
  },
  "blowdry-long": {
    title: "Blow Dry (Long Hair)",
    price: "£45",
    desc: "Signature washing therapy and styled bouncy/sleek blow dry finish for longer hair lengths.",
    time: "50 mins",
  },
  "blowdry-extensions": {
    title: "Blow Dry (with Extensions)",
    price: "£55",
    desc: "Specialized, gentle blow dry and wash styled carefully to protect and blend your hair extensions.",
    time: "60 mins",
  },
  // Hair -> Cuts
  "cut-stylist": {
    title: "Cut & Blow Dry (Stylist)",
    price: "£65",
    desc: "Precision structural style cut, washing therapy, and professional blow dry finish by our expert stylists.",
    time: "60 mins",
  },
  "cut-senior-stylist": {
    title: "Cut & Blow Dry (Senior Stylist)",
    price: "£75",
    desc: "Bespoke restyling, washing therapy, and signature blowout by our Senior Creative Stylist.",
    time: "60 mins",
  },
  "wet-cut": {
    title: "Wet Cut & Tidy",
    price: "£50",
    desc: "Quick structural trim or tidy-up on wet hair without a blow-dry finish.",
    time: "45 mins",
  },
  "gents-cut": {
    title: "Gents Cut & Style",
    price: "£40",
    desc: "Precision gent's clipper or scissor cut, scalp wash, and styled finish.",
    time: "30 mins",
  },
  // Hair -> Treatments
  "treatment-mask": {
    title: "Intense Conditioning Masque",
    price: "£25",
    desc: "Deep moisture-infusion therapy to revive dry, dull strands and seal hair cuticles.",
    time: "30 mins",
  },
  "treatment-olaplex": {
    title: "Olaplex Standalone Bond Repair",
    price: "£45",
    desc: "Concentrated bond-building treatment to restore internal structural integrity and strength.",
    time: "45 mins",
  },
  "treatment-k18": {
    title: "K18 Molecular Treatment Mask",
    price: "£30",
    desc: "Advanced bio-mimetic peptide treatment that repairs hair damage at the molecular level in minutes.",
    time: "30 mins",
  },
  "treatment-keratin": {
    title: "Keratin Smoothing Blowout",
    price: "£180",
    desc: "Premium long-lasting protein smoothing therapy that eliminates frizz and relaxes curls for months.",
    time: "150 mins",
  },
  // Nails -> Manicure
  "gel-hands": {
    title: "Gel Shape & Paint (Hands)",
    price: "£36",
    desc: "Cuticle care, precision nail shaping, and long-lasting gel polish in your choice of shade.",
    time: "40 mins",
  },
  "sig-manicure": {
    title: "Maison de Beauté Signature Manicure",
    price: "£45",
    desc: "Deluxe hand therapy with gentle skin exfoliation, deep moisturizing massage, and classic polish.",
    time: "50 mins",
  },
  "nail-tidy": {
    title: "Gel Removal & Nail Tidy",
    price: "£20",
    desc: "Safe professional gel soak-off, cuticle care, nail shaping, and nourishing nail oil.",
    time: "30 mins",
  },
  "file-polish": {
    title: "Quick File & Polish",
    price: "£25",
    desc: "Express nail shaping and paint with classic polish for hands on the go.",
    time: "25 mins",
  },
  "biab": {
    title: "BIAB Natural Overlay",
    price: "£48",
    desc: "Builder in a Bottle protective overlay to strengthen natural nails and encourage growth.",
    time: "60 mins",
  },
  // Nails -> Pedicure
  "gel-pedicure": {
    title: "Gel Pedicure",
    price: "£40",
    desc: "Refreshing foot soak, shaping, cuticle care, and durable, high-gloss gel polish finish.",
    time: "45 mins",
  },
  "male-pedicure": {
    title: "Male Pedicure",
    price: "£35",
    desc: "Grooming foot care including botanical soak, callus filing, cuticle detail, and massage.",
    time: "40 mins",
  },
  "bambino-pedicure": {
    title: "Bambino Pedicure (under 12)",
    price: "£18",
    desc: "Gentle, kid-friendly foot soak, nail shaping, and classic paint finish for children.",
    time: "25 mins",
  },
  // Nails -> Combo
  "gel-pack": {
    title: "Gel Manicure & Gel Pedicure Package",
    price: "£76",
    desc: "Combined hands and feet gel treatment package for long-lasting visual perfection.",
    time: "80 mins",
  },
  "mani-pedi-pack": {
    title: "Manicure & Pedicure Package",
    price: "£65",
    desc: "Standard combined hands and feet botanical therapy with classic polish.",
    time: "95 mins",
  },
  // Beauty -> Brows & Lashes
  "brow-tint": {
    title: "Brow Tint & Shape",
    price: "£28",
    desc: "Precision mapping, thread/wax shaping, and customized brow tint to define arches.",
    time: "30 mins",
  },
  "lash-lift": {
    title: "Lash Lift & Tint",
    price: "£65",
    desc: "Semi-permanent root lifting and lash tinting to open eyes for a mascara look.",
    time: "60 mins",
  },
  // Beauty -> Tan
  "spray-tan": {
    title: "Full Body St. Tropez Tan",
    price: "£38",
    desc: "Streak-free, express golden spray tanning for a natural sun-kissed look.",
    time: "20 mins",
  },
  // Beauty -> Massage
  "swedish-massage": {
    title: "Swedish Relaxing Massage",
    price: "£75",
    desc: "60-minute relaxing full body massage in a quiet room to decompress muscles.",
    time: "60 mins",
  },
};

type MenuKey = "hair" | "nails" | "beauty" | "bridal";

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

export default function Home() {
  const { playHover, playClick } = useSound();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [testiStartIdx, setTestiStartIdx] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(3);
  const [pressIdx, setPressIdx] = useState(0);
  const [currentTeamIdx, setCurrentTeamIdx] = useState(0);
  const [teamDirection, setTeamDirection] = useState(1); // 1: next (right to left), -1: prev (left to right)
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeField, setActiveField] = useState<string | null>(null);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  // Quick menu active category
  const [activeMenuTab, setActiveMenuTab] = useState<MenuKey>("hair");

  // Bespoke Interactive Treatment Planner state
  const [quizStep, setQuizStep] = useState(0); // 0: intro, 1: focus, 2: subcategory, 3: priority, 4: result
  const [quizSelection, setQuizSelection] = useState({
    focus: "",
    subcategory: "",
    priority: "",
  });

  // Floating Concierge state
  const [showConcierge, setShowConcierge] = useState(false);
  const [bridalEmail, setBridalEmail] = useState("");
  const [bridalSent, setBridalSent] = useState(false);

  // Hero section image slideshow index
  const [heroImageIdx, setHeroImageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIdx((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Handle client resize to dynamically update visible reviews count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCardsCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCardsCount(2);
      } else {
        setVisibleCardsCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-run reviews slider
  useEffect(() => {
    const maxIndex = testimonialsList.length - visibleCardsCount;
    const interval = setInterval(() => {
      setTestiStartIdx((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [visibleCardsCount]);

  // Auto-run press slider
  useEffect(() => {
    const interval = setInterval(() => {
      setPressIdx((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTeamMember = () => {
    setTeamDirection(1);
    setCurrentTeamIdx((prev) => (prev + 1) % teamMembersList.length);
  };
  const prevTeamMember = () => {
    setTeamDirection(-1);
    setCurrentTeamIdx((prev) => (prev - 1 + teamMembersList.length) % teamMembersList.length);
  };

  const getVisibleTeamMembers = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const idx = (currentTeamIdx + i) % teamMembersList.length;
      visible.push(teamMembersList[idx]);
    }
    return visible;
  };

  const handlePrevTesti = () => {
    const maxIndex = testimonialsList.length - visibleCardsCount;
    setTestiStartIdx((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };
  const handleNextTesti = () => {
    const maxIndex = testimonialsList.length - visibleCardsCount;
    setTestiStartIdx((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);



  // Quiz Recommendation Generator
  const getQuizRecommendation = () => {
    const { priority } = quizSelection;
    if (priority && fullServiceDetails[priority]) {
      return {
        ...fullServiceDetails[priority],
        link: "https://www.fresha.com/providers/maison-de-beaute-demo",
      };
    }
    // Default Fallback
    return {
      title: "The Maison de Beauté Signature Welcome Package",
      price: "£101",
      desc: "Our highly popular signature combination: a precision style cut & finish with an express gel shape & paint manicure.",
      time: "90 mins",
      link: "https://www.fresha.com/providers/maison-de-beaute-demo",
    };
  };

  const recommendation = getQuizRecommendation();

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#1E241B] z-[9999] flex flex-col items-center justify-center select-none overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-4">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.1
                    }
                  }
                }}
                className="flex items-center space-x-1"
              >
                {"MAISON DE BEAUTÉ".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="font-serif text-2xl sm:text-4xl text-white font-bold tracking-[0.15em] uppercase"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="flex items-center justify-center text-[#C5A86A]"
              >
                <span className="text-[8px] tracking-[0.4em] uppercase font-sans font-medium">
                  LONDON
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      <main className="overflow-hidden bg-[#FAF8F5] text-[#1E241B] min-h-screen pt-20">

        {/* 1. CINEMATIC ASYMMETRICAL HERO */}
        <section className="relative py-12 md:py-24 bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left Column: Heading and Menu links */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left items-center lg:items-start order-2 lg:order-1"
            >

              <div className="space-y-4">
                <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
                  FULHAM & PARSONS GREEN
                </span>
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#1E241B] leading-[1.05] font-light tracking-[0.03em] uppercase italic">
                  <span className="block overflow-hidden py-1">
                    <motion.span 
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                      className="block"
                    >
                      Adding Colour
                    </motion.span>
                  </span>
                  <span className="block overflow-hidden py-1">
                    <motion.span 
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                      className="font-sans font-semibold not-italic tracking-[0.06em] text-[0.75em] text-[#5C6B57] block"
                    >
                      To Your Life
                    </motion.span>
                  </span>
                </h1>
                <p className="font-sans text-xs sm:text-sm text-[#1E241B]/70 leading-relaxed max-w-lg mx-auto lg:mx-0 tracking-wide font-light">
                  Welcome to London's signature house of bouncy blowouts, bespoke hand-painted balayages, and clean nail wellness. Designed for structural confidence.
                </p>
              </div>

              {/* Service Categories Links */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-4">
                {[
                  { name: "Hair", href: "/hair" },
                  { name: "Nails", href: "/nails" },
                  { name: "Beauty", href: "/beauty" },
                  { name: "Bridal", href: "/bridal" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onMouseEnter={playHover}
                    onClick={playClick}
                    className="border border-[#1E241B]/10 bg-white text-[#1E241B] font-sans text-[9px] font-bold tracking-[0.25em] uppercase py-4 text-center transition-all duration-300 shadow-sm active:scale-[0.98] rounded luxury-btn-draw hover:text-[#C5A86A]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

            </motion.div>

            {/* Right Column: High Fashion Visual Overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="lg:col-span-5 relative w-full flex items-center justify-center order-1 lg:order-2"
            >
              <div className="relative w-full aspect-[4/5] p-2 border border-[#C5A86A]/20 rounded-lg shadow-premium bg-white max-w-[420px] mx-auto overflow-hidden">
                <div className="w-full h-full relative overflow-hidden bg-[#E8E5DF] rounded-md">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={heroImageIdx}
                      initial={{ opacity: 0, scale: 1.03 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={[
                          "/images/homepage_hero_main.webp",
                          "/images/haircolour.avif",
                          "/images/beauty_brows.jpg"
                        ][heroImageIdx]}
                        alt="Maison de Beauté London styling"
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-black/5" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* 2. RUNWAY MARQUEE TICKER (DOUBLE LAYER) */}
        <div className="bg-[#1E241B] py-3.5 overflow-hidden border-y border-[#C5A86A]/20 select-none flex flex-col space-y-2">
          <div className="runway-marquee whitespace-nowrap flex items-center gap-16 text-white text-[9px] tracking-[0.3em] font-sans font-bold uppercase">
            <span>MAISON DE BEAUTÉ</span>
            <span className="text-[#C5A86A]">★</span>
            <span>SIGNATURE BLOW DRIES</span>
            <span className="text-[#C5A86A]">★</span>
            <span>PRECISION BALAYAGE</span>
            <span className="text-[#C5A86A]">★</span>
            <span>BIAB NAIL ARTISTRY</span>
            <span className="text-[#C5A86A]">★</span>
            <span>ST. TROPEZ GLOW</span>
            <span className="text-[#C5A86A]">★</span>
            <span>BRIDAL CONCIERGE</span>
            <span className="text-[#C5A86A]">★</span>

            {/* Repeat for seamless loop */}
            <span>MAISON DE BEAUTÉ</span>
            <span className="text-[#C5A86A]">★</span>
            <span>SIGNATURE BLOW DRIES</span>
            <span className="text-[#C5A86A]">★</span>
            <span>PRECISION BALAYAGE</span>
            <span className="text-[#C5A86A]">★</span>
            <span>BIAB NAIL ARTISTRY</span>
            <span className="text-[#C5A86A]">★</span>
            <span>ST. TROPEZ GLOW</span>
            <span className="text-[#C5A86A]">★</span>
            <span>BRIDAL CONCIERGE</span>
            <span className="text-[#C5A86A]">★</span>
          </div>
          <div className="runway-marquee-reverse whitespace-nowrap flex items-center gap-16 text-white/50 text-[8px] tracking-[0.25em] font-sans uppercase">
            <span>HAIR • COLOUR • CUT • BLOWDRY • NAILS • MASSAGE • LASHES • BRIDAL • LUXURY EXPERIENCE</span>
            <span className="text-[#C5A86A]">✦</span>
            <span>HAIR • COLOUR • CUT • BLOWDRY • NAILS • MASSAGE • LASHES • BRIDAL • LUXURY EXPERIENCE</span>
            <span className="text-[#C5A86A]">✦</span>
          </div>
        </div>

        {/* 3. INTERACTIVE TREATMENT PLANNER (THE CONSULTATION QUIZ) */}
        <section className="py-20 bg-[#FAF8F5] border-b border-[#EFECE6]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white border border-[#EFECE6] rounded-lg shadow-premium p-8 md:p-12 relative overflow-hidden">

              {/* Decorative side accent lines */}
              <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-[#C5A86A]" />

              <div className="max-w-2xl mx-auto text-center space-y-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={quizStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full"
                  >

                 {/* Intro step */}
                {quizStep === 0 && (
                  <div className="space-y-6">
                    <h2 className="font-serif text-3xl md:text-4xl text-[#1E241B] font-light uppercase tracking-wider italic">
                      Book Appointment
                    </h2>
                    <p className="font-sans text-xs text-[#1E241B]/60 leading-relaxed tracking-wide max-w-md mx-auto">
                      Answer a few quick questions to design your bespoke booking and choose the perfect treatment in seconds.
                    </p>
                    <button
                      onClick={() => setQuizStep(1)}
                      className="bg-[#1E241B] hover:bg-[#C5A86A] text-[#FAF8F5] font-sans text-[10px] font-bold tracking-[0.25em] uppercase px-10 py-4 rounded-full transition-all duration-300 cursor-pointer shadow-md"
                    >
                      Book Appointment
                    </button>
                  </div>
                )}

                {/* Step 1: Select Focus */}
                {quizStep === 1 && (
                  <div className="space-y-6">
                    <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
                      STEP 1 OF 3
                    </span>
                    <h3 className="font-serif text-2xl text-[#1E241B] uppercase tracking-wider italic font-light">
                      Which zone needs our expert attention?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                      {[
                        { id: "hair", name: "Hair Styling & Colour" },
                        { id: "nails", name: "Hands, Feet & Nails" },
                        { id: "beauty", name: "Brows, Lashes & Tan" },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => {
                            setQuizSelection({ focus: opt.id, subcategory: "", priority: "" });
                            setQuizStep(2);
                          }}
                          className="border border-[#EFECE6] bg-[#FAF8F5]/30 hover:border-[#C5A86A] hover:bg-white text-[#1E241B] py-5 px-4 font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded shadow-sm cursor-pointer"
                        >
                          {opt.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Select Subcategory */}
                {quizStep === 2 && (
                  <div className="space-y-6">
                    <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
                      STEP 2 OF 3
                    </span>
                    <h3 className="font-serif text-2xl text-[#1E241B] uppercase tracking-wider italic font-light">
                      What type of service are you looking for?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {quizSelection.focus === "hair" && (
                        <>
                          {[
                            { id: "colour", name: "Colour & Highlights" },
                            { id: "blowdry", name: "Blow Dries & Styling" },
                            { id: "cut", name: "Precision Cuts & Styles" },
                            { id: "treatment", name: "Revitalizing Hair Treatments" },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => {
                                setQuizSelection((prev) => ({ ...prev, subcategory: opt.id, priority: "" }));
                                setQuizStep(3);
                              }}
                              className="border border-[#EFECE6] bg-[#FAF8F5]/30 hover:border-[#C5A86A] hover:bg-white text-[#1E241B] py-5 px-4 font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded shadow-sm cursor-pointer"
                            >
                              {opt.name}
                            </button>
                          ))}
                        </>
                      )}

                      {quizSelection.focus === "nails" && (
                        <>
                          {[
                            { id: "mani", name: "Manicures & Gel Nails" },
                            { id: "pedi", name: "Pedicures & Foot Care" },
                            { id: "combo", name: "Mani-Pedi Combined Packages" },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => {
                                setQuizSelection((prev) => ({ ...prev, subcategory: opt.id, priority: "" }));
                                setQuizStep(3);
                              }}
                              className="border border-[#EFECE6] bg-[#FAF8F5]/30 hover:border-[#C5A86A] hover:bg-white text-[#1E241B] py-5 px-4 font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded shadow-sm cursor-pointer"
                            >
                              {opt.name}
                            </button>
                          ))}
                        </>
                      )}

                      {quizSelection.focus === "beauty" && (
                        <>
                          {[
                            { id: "brows", name: "Brows & Lashes" },
                            { id: "tan", name: "Spray Tanning" },
                            { id: "massage", name: "Soothing Massages" },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => {
                                setQuizSelection((prev) => ({ ...prev, subcategory: opt.id, priority: "" }));
                                setQuizStep(3);
                              }}
                              className="border border-[#EFECE6] bg-[#FAF8F5]/30 hover:border-[#C5A86A] hover:bg-white text-[#1E241B] py-5 px-4 font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded shadow-sm cursor-pointer"
                            >
                              {opt.name}
                            </button>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 3: Select Treatment */}
                {quizStep === 3 && (
                  <div className="space-y-6">
                    <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
                      STEP 3 OF 3
                    </span>
                    <h3 className="font-serif text-2xl text-[#1E241B] uppercase tracking-wider italic font-light">
                      Choose your specific treatment
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {/* Hair -> Colour */}
                      {quizSelection.subcategory === "colour" && (
                        <>
                          {[
                            { id: "permanent-regrowth", name: "Permanent Colour Regrowth (£49)" },
                            { id: "full-head-color", name: "Full Head Permanent Colour (£75)" },
                            { id: "half-head-foils", name: "Half Head Foil Highlights (£110)" },
                            { id: "full-head-foils", name: "Full Head Foil Highlights (£140)" },
                            { id: "t-section-foils", name: "T-Section Highlights (£85)" },
                            { id: "balayage", name: "Bespoke Balayage / Ombre (£160)" },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => {
                                setQuizSelection((prev) => ({ ...prev, priority: opt.id }));
                                setQuizStep(4);
                              }}
                              className="border border-[#EFECE6] bg-[#FAF8F5]/30 hover:border-[#C5A86A] hover:bg-white text-[#1E241B] py-5 px-4 font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded shadow-sm cursor-pointer"
                            >
                              {opt.name}
                            </button>
                          ))}
                        </>
                      )}

                      {/* Hair -> Blowdry */}
                      {quizSelection.subcategory === "blowdry" && (
                        <>
                          {[
                            { id: "blowdry-short", name: "Blow Dry - Short Hair (£35)" },
                            { id: "blowdry-long", name: "Blow Dry - Long Hair (£45)" },
                            { id: "blowdry-extensions", name: "Blow Dry - with Extensions (£55)" },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => {
                                setQuizSelection((prev) => ({ ...prev, priority: opt.id }));
                                setQuizStep(4);
                              }}
                              className="border border-[#EFECE6] bg-[#FAF8F5]/30 hover:border-[#C5A86A] hover:bg-white text-[#1E241B] py-5 px-4 font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded shadow-sm cursor-pointer"
                            >
                              {opt.name}
                            </button>
                          ))}
                        </>
                      )}

                      {/* Hair -> Cut */}
                      {quizSelection.subcategory === "cut" && (
                        <>
                          {[
                            { id: "cut-stylist", name: "Cut & Blow Dry - Stylist (£65)" },
                            { id: "cut-senior-stylist", name: "Cut & Blow Dry - Senior Stylist (£75)" },
                            { id: "wet-cut", name: "Wet Cut & Tidy (£50)" },
                            { id: "gents-cut", name: "Gents Cut & Style (£40)" },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => {
                                setQuizSelection((prev) => ({ ...prev, priority: opt.id }));
                                setQuizStep(4);
                              }}
                              className="border border-[#EFECE6] bg-[#FAF8F5]/30 hover:border-[#C5A86A] hover:bg-white text-[#1E241B] py-5 px-4 font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded shadow-sm cursor-pointer"
                            >
                              {opt.name}
                            </button>
                          ))}
                        </>
                      )}

                      {/* Hair -> Treatments */}
                      {quizSelection.subcategory === "treatment" && (
                        <>
                          {[
                            { id: "treatment-mask", name: "Intense Conditioning Masque (£25)" },
                            { id: "treatment-olaplex", name: "Olaplex Standalone Bond Repair (£45)" },
                            { id: "treatment-k18", name: "K18 Molecular Treatment Mask (£30)" },
                            { id: "treatment-keratin", name: "Keratin Smoothing Blowout (£180)" },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => {
                                setQuizSelection((prev) => ({ ...prev, priority: opt.id }));
                                setQuizStep(4);
                              }}
                              className="border border-[#EFECE6] bg-[#FAF8F5]/30 hover:border-[#C5A86A] hover:bg-white text-[#1E241B] py-5 px-4 font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded shadow-sm cursor-pointer"
                            >
                              {opt.name}
                            </button>
                          ))}
                        </>
                      )}

                      {/* Nails -> Mani */}
                      {quizSelection.subcategory === "mani" && (
                        <>
                          {[
                            { id: "gel-hands", name: "Gel Shape & Paint - Hands (£36)" },
                            { id: "sig-manicure", name: "Maison de Beauté Signature Manicure (£45)" },
                            { id: "nail-tidy", name: "Gel Removal & Nail Tidy (£20)" },
                            { id: "file-polish", name: "Quick File & Polish (£25)" },
                            { id: "biab", name: "BIAB Natural Overlay (£48)" },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => {
                                setQuizSelection((prev) => ({ ...prev, priority: opt.id }));
                                setQuizStep(4);
                              }}
                              className="border border-[#EFECE6] bg-[#FAF8F5]/30 hover:border-[#C5A86A] hover:bg-white text-[#1E241B] py-5 px-4 font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded shadow-sm cursor-pointer"
                            >
                              {opt.name}
                            </button>
                          ))}
                        </>
                      )}

                      {/* Nails -> Pedi */}
                      {quizSelection.subcategory === "pedi" && (
                        <>
                          {[
                            { id: "gel-pedicure", name: "Gel Pedicure (£40)" },
                            { id: "male-pedicure", name: "Male Pedicure (£35)" },
                            { id: "bambino-pedicure", name: "Bambino Pedicure (£18)" },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => {
                                setQuizSelection((prev) => ({ ...prev, priority: opt.id }));
                                setQuizStep(4);
                              }}
                              className="border border-[#EFECE6] bg-[#FAF8F5]/30 hover:border-[#C5A86A] hover:bg-white text-[#1E241B] py-5 px-4 font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded shadow-sm cursor-pointer"
                            >
                              {opt.name}
                            </button>
                          ))}
                        </>
                      )}

                      {/* Nails -> Combo */}
                      {quizSelection.subcategory === "combo" && (
                        <>
                          {[
                            { id: "gel-pack", name: "Gel Manicure & Gel Pedicure Pack (£76)" },
                            { id: "mani-pedi-pack", name: "Manicure & Pedicure Package (£65)" },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => {
                                setQuizSelection((prev) => ({ ...prev, priority: opt.id }));
                                setQuizStep(4);
                              }}
                              className="border border-[#EFECE6] bg-[#FAF8F5]/30 hover:border-[#C5A86A] hover:bg-white text-[#1E241B] py-5 px-4 font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded shadow-sm cursor-pointer"
                            >
                              {opt.name}
                            </button>
                          ))}
                        </>
                      )}

                      {/* Beauty -> Brows */}
                      {quizSelection.subcategory === "brows" && (
                        <>
                          {[
                            { id: "brow-tint", name: "Brow Tint & Shape (£28)" },
                            { id: "lash-lift", name: "Lash Lift & Tint (£65)" },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => {
                                setQuizSelection((prev) => ({ ...prev, priority: opt.id }));
                                setQuizStep(4);
                              }}
                              className="border border-[#EFECE6] bg-[#FAF8F5]/30 hover:border-[#C5A86A] hover:bg-white text-[#1E241B] py-5 px-4 font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded shadow-sm cursor-pointer"
                            >
                              {opt.name}
                            </button>
                          ))}
                        </>
                      )}

                      {/* Beauty -> Tan */}
                      {quizSelection.subcategory === "tan" && (
                        <>
                          {[
                            { id: "spray-tan", name: "Full Body St. Tropez Tan (£38)" },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => {
                                setQuizSelection((prev) => ({ ...prev, priority: opt.id }));
                                setQuizStep(4);
                              }}
                              className="border border-[#EFECE6] bg-[#FAF8F5]/30 hover:border-[#C5A86A] hover:bg-white text-[#1E241B] py-5 px-4 font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded shadow-sm cursor-pointer"
                            >
                              {opt.name}
                            </button>
                          ))}
                        </>
                      )}

                      {/* Beauty -> Massage */}
                      {quizSelection.subcategory === "massage" && (
                        <>
                          {[
                            { id: "swedish-massage", name: "Swedish Relaxing Massage (£75)" },
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              onClick={() => {
                                setQuizSelection((prev) => ({ ...prev, priority: opt.id }));
                                setQuizStep(4);
                              }}
                              className="border border-[#EFECE6] bg-[#FAF8F5]/30 hover:border-[#C5A86A] hover:bg-white text-[#1E241B] py-5 px-4 font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 rounded shadow-sm cursor-pointer"
                            >
                              {opt.name}
                            </button>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 4: Result */}
                {quizStep === 4 && (
                  <div className="space-y-6 text-left">
                    <div className="text-center space-y-1">
                      <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
                        RECOMMENDED TREATMENT PLAN
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#1E241B] uppercase tracking-wider italic font-light">
                        {recommendation.title}
                      </h3>
                      <div className="h-[1px] w-12 bg-[#C5A86A]/40 mx-auto mt-2" />
                    </div>

                    <div className="bg-[#FAF8F5] border border-[#EFECE6] p-6 rounded-lg space-y-4 shadow-inner mt-4">
                      <div className="flex items-center justify-between border-b border-[#EFECE6] pb-3 text-xs sm:text-sm font-bold uppercase font-sans">
                        <span>ESTIMATED VALUE</span>
                        <span className="text-[#C5A86A] text-lg font-serif">{recommendation.price}</span>
                      </div>
                      <p className="font-sans text-xs text-[#1E241B]/70 leading-relaxed tracking-wide font-light">
                        {recommendation.desc}
                      </p>
                      <div className="text-[10px] tracking-wider text-[#1E241B]/50 font-bold uppercase font-sans pt-2">
                        Duration: {recommendation.time}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full pt-4">
                      <a
                        href={recommendation.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 bg-[#1E241B] hover:bg-[#5C6B57] text-white font-sans text-[10px] font-bold tracking-[0.25em] uppercase py-4 rounded-full text-center transition-all duration-300 shadow-sm"
                      >
                        Book Recommendation
                      </a>
                      <button
                        onClick={() => setQuizStep(1)}
                        className="w-full sm:flex-1 border border-[#1E241B]/15 text-[#1E241B] font-sans text-[10px] font-bold tracking-[0.2em] uppercase py-4 rounded-full text-center transition-all duration-300 hover:border-[#C5A86A] bg-transparent cursor-pointer"
                      >
                        Change Options
                      </button>
                    </div>
                  </div>
                )}
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>
          </div>
        </section>



        {/* 4. ASYMMETRICAL EDITORIAL GRID PHILOSOPHY */}
        <section className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#EFECE6]">
          <div className="max-w-4xl mx-auto px-6 w-full text-center space-y-8">
            <div className="space-y-2">
              <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans font-semibold">
                OUR GALLERY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1E241B] font-light uppercase tracking-wider italic">
                Beauts Gallery
              </h2>
              <div className="h-[1px] w-12 bg-[#C5A86A]/40 mx-auto mt-2" />
            </div>

            {/* Centered 2x2 Beauts Gallery Grid */}
            <div className="flex flex-col items-center space-y-6 w-full">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-[480px] mx-auto">
                {[
                  "/images/beauts/beaut_1.jpg",
                  "/images/beauts/beaut_2.jpg",
                  "/images/beauts/beaut_3.jpg",
                  "/images/beauts/beaut_4.jpg",
                ].map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedGalleryImg(img)}
                    className="relative aspect-square border border-[#C5A86A]/25 p-1 bg-white rounded-md shadow-premium overflow-hidden group hover:border-[#C5A86A] transition-all duration-500 cursor-pointer block w-full text-left"
                  >
                    <div className="w-full h-full relative overflow-hidden rounded bg-[#FAF8F5]">
                      <Image
                        src={img}
                        alt={`Beauts look ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, 240px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                  </button>
                ))}
              </div>
              <Link
                href="/beauts"
                className="inline-flex items-center space-x-2 text-[9px] tracking-widest font-bold text-[#5C6B57] hover:text-[#C5A86A] uppercase pt-2 transition-colors duration-300"
              >
                <span>Explore Full Lookbook</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </section>





        {/* 7. ASYMMETRICAL GRID LOOKBOOK */}
        <section className="py-16 md:py-24 bg-white border-b border-[#EFECE6]">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-16 space-y-3">
              <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
                OUR SERVICES
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1E241B] font-light uppercase tracking-wider italic">
                Services Lookbook
              </h2>
              <div className="h-[1px] w-12 bg-[#C5A86A]/40 mx-auto mt-2" />
            </div>

            {/* Asymmetrical High-Fashion Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Hair (Colour) - Large Vertical Offset */}
              <div className="md:col-span-2 md:row-span-2 group flex flex-col justify-between bg-white border border-[#EFECE6] rounded-lg overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 relative cursor-pointer h-[320px] md:h-[520px]">
                <Link href="/hair" className="absolute inset-0 block overflow-hidden bg-[#E8E5DF]">
                  <Image
                    src="/images/haircolour.avif"
                    alt="Colour"
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-101"
                  />
                  {/* Luxury bottom-left fade details overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white space-y-2">
                    <span className="font-sans text-[8px] tracking-[0.25em] text-[#C5A86A] font-bold uppercase">
                      HAIR • COLOUR
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl tracking-wider uppercase font-light">
                      Colour & Highlights
                    </h3>
                    <p className="font-sans text-[10px] tracking-wide text-white/70 max-w-sm font-light">
                      Bespoke hand-painted balayages, root touches, and precision tone formulas.
                    </p>
                    <span className="text-[9px] tracking-[0.2em] font-bold text-[#C5A86A] uppercase pt-2 flex items-center gap-1.5 hover:underline">
                      <span>View Services</span>
                      <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              </div>

              {/* Card 2: Nails (Gel shape) - Standard Box */}
              <div className="group flex flex-col justify-between bg-white border border-[#EFECE6] rounded-lg overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 relative cursor-pointer h-[245px]">
                <Link href="/nails" className="absolute inset-0 block overflow-hidden bg-[#E8E5DF]">
                  <Image
                    src="/images/homepage_manicure.jpg"
                    alt="Nails Hands"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-101"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6 text-white space-y-1">
                    <span className="font-sans text-[8px] tracking-[0.25em] text-[#C5A86A] font-bold uppercase">
                      NAILS • WELLNESS
                    </span>
                    <h3 className="font-serif text-lg tracking-wider uppercase font-light">
                      Nails Hands
                    </h3>
                    <span className="text-[9px] tracking-[0.2em] font-bold text-[#C5A86A] uppercase pt-1 flex items-center gap-1">
                      <span>View Services</span>
                      <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              </div>

              {/* Card 3: Beauty (Brows) - Standard Box */}
              <div className="group flex flex-col justify-between bg-white border border-[#EFECE6] rounded-lg overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 relative cursor-pointer h-[245px]">
                <Link href="/beauty" className="absolute inset-0 block overflow-hidden bg-[#E8E5DF]">
                  <Image
                    src="/images/beauty_brows.jpg"
                    alt="Brows + Lash"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-101"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6 text-white space-y-1">
                    <span className="font-sans text-[8px] tracking-[0.25em] text-[#C5A86A] font-bold uppercase">
                      BEAUTY • ARCHES
                    </span>
                    <h3 className="font-serif text-lg tracking-wider uppercase font-light">
                      Brows + Lash
                    </h3>
                    <span className="text-[9px] tracking-[0.2em] font-bold text-[#C5A86A] uppercase pt-1 flex items-center gap-1">
                      <span>View Services</span>
                      <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              </div>

              {/* Card 4: Bridal - Wide Horizontal Banner spanning 3 columns */}
              <div className="md:col-span-3 group flex flex-col justify-between bg-white border border-[#EFECE6] rounded-lg overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-500 relative cursor-pointer h-[180px] md:h-[220px]">
                <Link href="/bridal" className="absolute inset-0 block overflow-hidden bg-[#E8E5DF]">
                  <Image
                    src="/images/bridal_hair.jpg"
                    alt="Bridal Styling"
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-101"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent flex flex-col justify-center p-8 text-white space-y-2 max-w-xl">
                    <span className="font-sans text-[8px] tracking-[0.25em] text-[#C5A86A] font-bold uppercase">
                      BRIDAL • EXPERIENCE
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl tracking-wider uppercase font-light">
                      Bridal Styling Packages
                    </h3>
                    <p className="font-sans text-[10px] tracking-wide text-white/70 font-light max-w-md hidden sm:block">
                      Curated hair, makeup, and prep trials designed for camera-ready perfection on your special day.
                    </p>
                    <span className="text-[9px] tracking-[0.2em] font-bold text-[#C5A86A] uppercase pt-1 flex items-center gap-1.5 hover:underline">
                      <span>Explore Bridal Menu</span>
                      <ArrowRight size={10} />
                    </span>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* 8. TEAM PORTFOLIOS */}
        <section id="team" className="py-20 md:py-24 bg-[#C0C8B9] border-b border-white/5 select-none overflow-hidden text-[#5C6B57]">
          <div className="max-w-7xl mx-auto px-6">

            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="font-serif text-5xl md:text-7xl font-normal uppercase tracking-[0.25em] text-[#5C6B57]">
                TEAM
              </h2>
              <div className="h-[1px] w-20 bg-[#5C6B57]/30 mx-auto mt-4" />
            </div>

            {/* Carousel Slider with flanking vertical layout */}
            <div className="relative flex items-center justify-between w-full max-w-6xl mx-auto px-2 mt-8">
              
              {/* Left Arrow */}
              <button
                onClick={prevTeamMember}
                className="w-12 h-12 rounded-full bg-white text-[#5C6B57] flex items-center justify-center shadow-md hover:scale-105 transition-all z-10 shrink-0 cursor-pointer"
                aria-label="Previous team member"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Members Frame */}
              <div className="w-full mx-2 overflow-hidden min-h-[420px] flex items-center justify-center relative">
                
                {/* Desktop view: 3 members */}
                <div className="hidden md:block w-full">
                  <AnimatePresence initial={false} mode="popLayout" custom={teamDirection}>
                    <motion.div
                      key={currentTeamIdx}
                      custom={teamDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="grid grid-cols-3 gap-6 py-6 w-full"
                    >
                      {getVisibleTeamMembers().map((member, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center"
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
                                  src={member.image}
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
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Mobile view: 1 member */}
                <div className="md:hidden w-full flex items-center justify-center min-h-[300px]">
                  <AnimatePresence initial={false} mode="popLayout" custom={teamDirection}>
                    <motion.div
                      key={currentTeamIdx}
                      custom={teamDirection}
                      variants={mobileSlideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center justify-center"
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
                          {teamMembersList[currentTeamIdx].role}
                        </span>
                      </div>

                      {/* Middle: Photo Box */}
                      <div className="relative w-[170px] h-[240px] shrink-0 border-[3px] border-[#5C6B57] p-1.5 bg-transparent">
                        <div className="relative w-full h-full overflow-hidden bg-transparent">
                          <Image
                            src={teamMembersList[currentTeamIdx].image}
                            alt={teamMembersList[currentTeamIdx].name}
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
                          {teamMembersList[currentTeamIdx].name}
                        </span>
                      </div>

                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>

              {/* Right Arrow */}
              <button
                onClick={nextTeamMember}
                className="w-12 h-12 rounded-full bg-white text-[#5C6B57] flex items-center justify-center shadow-md hover:scale-105 transition-all z-10 shrink-0 cursor-pointer"
                aria-label="Next team member"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>

          </div>
        </section>

        {/* 9. TESTIMONIALS */}
        <section className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#EFECE6]/40 select-none overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-4 md:px-8">
            
            {/* Title */}
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-[#5C6B57] font-normal tracking-[0.25em] uppercase">
                Testimonials
              </h2>
              <div className="h-[1px] w-12 bg-[#5C6B57]/30 mx-auto mt-3.5" />
            </div>

            {/* Slider Container with side arrows */}
            <div className="relative flex items-center justify-between w-full">
              
              {/* Left Arrow */}
              <button
                onClick={handlePrevTesti}
                className="text-[#5C6B57] hover:text-[#4A5746] transition-colors p-3 text-3xl font-light cursor-pointer select-none z-10"
                aria-label="Previous testimonials"
              >
                &lt;
              </button>

              {/* Slide viewport */}
              <div className="flex-grow mx-4 overflow-hidden py-4">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${testiStartIdx * (100 / visibleCardsCount)}%)`,
                  }}
                >
                  {testimonialsList.map((item, idx) => {
                    const isDark = idx % 2 === 1;
                    return (
                      <div
                        key={idx}
                        className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                      >
                        <div
                          className={`h-full flex flex-col justify-between p-8 sm:p-10 rounded shadow-sm min-h-[300px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[420px] transition-all duration-300 ${
                            isDark ? "bg-[#5C6B57] text-[#FAF8F5]" : "bg-[#C0C8B9] text-[#5C6B57]"
                          }`}
                        >
                          <div className="space-y-5 text-center flex-grow flex flex-col justify-center">
                            <h3 className="font-serif text-lg sm:text-xl font-normal leading-tight">
                              {item.name}
                            </h3>
                            
                            {/* 5 Stars */}
                            <div className="flex items-center justify-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={13}
                                  className={isDark ? "fill-[#FAF8F5] text-[#FAF8F5]" : "fill-[#5C6B57] text-[#5C6B57]"}
                                />
                              ))}
                            </div>

                            <p className="font-serif text-sm sm:text-base leading-relaxed font-light italic">
                              &ldquo;{item.text}&rdquo;
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNextTesti}
                className="text-[#5C6B57] hover:text-[#4A5746] transition-colors p-3 text-3xl font-light cursor-pointer select-none z-10"
                aria-label="Next testimonials"
              >
                &gt;
              </button>

            </div>

            {/* Dots navigation */}
            <div className="flex justify-center space-x-2 mt-10">
              {[...Array(testimonialsList.length - visibleCardsCount + 1)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestiStartIdx(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === testiStartIdx ? "bg-[#5C6B57] w-3" : "bg-[#5C6B57]/30"
                  }`}
                  aria-label={`Go to testimonial page ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </section>

        {/* 9.25. PRESS SECTION */}
        <section className="py-16 bg-[#C0C8B9] border-b border-[#EFECE6]/20 select-none">
          <div className="max-w-[1360px] mx-auto px-4 md:px-8">
            
            {/* Title */}
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl text-[#5C6B57] font-normal tracking-[0.25em] uppercase">
                Press
              </h2>
              <div className="h-[1px] w-12 bg-[#5C6B57]/30 mx-auto mt-3.5" />
            </div>
            
            {/* Slider with side arrows */}
            <div className="relative flex items-center justify-between w-full">
              
              {/* Left Arrow */}
              <button
                onClick={() => setPressIdx((prev) => (prev - 1 + 3) % 3)}
                className="text-[#5C6B57] hover:text-[#4A5746] transition-colors p-3 text-3xl font-light cursor-pointer select-none z-10"
                aria-label="Previous slide"
              >
                &lt;
              </button>

              {/* Slide transition container */}
              <div className="flex-grow mx-4 md:mx-8 overflow-hidden relative flex items-center justify-center min-h-[100px] sm:min-h-[135px] md:min-h-[155px] lg:min-h-[180px]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={pressIdx}
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -200 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex justify-center grayscale contrast-125 opacity-85 hover:opacity-100 transition-opacity duration-300"
                  >
                    <img
                      src={pressImages[pressIdx].src}
                      alt={pressImages[pressIdx].alt}
                      loading="eager"
                      className="h-[90px] sm:h-[125px] md:h-[145px] lg:h-[160px] w-auto object-contain mx-auto"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => setPressIdx((prev) => (prev + 1) % 3)}
                className="text-[#5C6B57] hover:text-[#4A5746] transition-colors p-3 text-3xl font-light cursor-pointer select-none z-10"
                aria-label="Next slide"
              >
                &gt;
              </button>

            </div>

            {/* Dots navigation */}
            <div className="flex justify-center space-x-2 mt-8">
              {pressImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPressIdx(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === pressIdx ? "bg-[#5C6B57] w-3" : "bg-white/50"
                  }`}
                  aria-label={`Go to press slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </section>

        {/* 9.5. INSTAGRAM FEED */}
        <section className="py-16 bg-[#FAF8F5] border-b border-[#EFECE6]">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Instagram Profile Header */}
            <div className="flex items-center mb-8">
              <a
                href="https://www.instagram.com/blushandblowlondon/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center space-x-3.5 group select-none cursor-pointer"
              >
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/instagram/profile.webp"
                    alt="Blush + Blow London Instagram Profile"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  {/* Hover overlay for profile circle */}
                  <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <Instagram size={16} className="text-white" />
                  </div>
                </div>
                <h3 className="font-serif text-lg tracking-widest text-[#5C6B57] lowercase font-medium transition-colors duration-300">
                  blushandblowlondon
                </h3>
              </a>
            </div>

            {/* Instagram Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: "/images/instagram/post_1.webp", alt: "Instagram post 1" },
                { src: "/images/instagram/post_2.webp", alt: "Instagram post 2" },
                { src: "/images/instagram/post_3.webp", alt: "Instagram post 3" },
                { src: "/images/instagram/post_4.webp", alt: "Instagram post 4" },
              ].map((post, idx) => (
                <div key={idx} className="insta-post relative aspect-square overflow-hidden group rounded shadow-sm border border-[#EFECE6]/40">
                  <a
                    href="https://www.instagram.com/blushandblowlondon/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full relative"
                  >
                    <Image
                      src={post.src}
                      alt={post.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300">
                      <Instagram size={20} className="text-white" />
                      <span className="text-white text-[8px] tracking-[0.2em] font-sans font-bold uppercase mt-2">
                        View on Instagram
                      </span>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Follow Button */}
            <div className="flex justify-center mt-10">
              <a
                href="https://www.instagram.com/blushandblowlondon/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-xs tracking-[0.25em] uppercase px-8 py-3.5 border border-[#5C6B57] text-[#5C6B57] hover:bg-[#5C6B57] hover:text-white transition-all duration-300 bg-transparent block text-center"
              >
                Follow on Instagram
              </a>
            </div>

          </div>
        </section>

        {/* 10. FAQ ACCORDION */}
        <section id="faq" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#EFECE6]">
          <div className="max-w-3xl mx-auto px-6">

            <div className="text-center mb-12 space-y-2">
              <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
                COMMON QUERIES
              </span>
              <h2 className="font-serif text-3xl text-[#1E241B] font-light uppercase tracking-wider italic">
                Faq&apos;s
              </h2>
              <div className="h-[1px] w-12 bg-[#C5A86A]/40 mx-auto mt-2" />
            </div>

            <div className="space-y-4">
              {faqsList.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-[#EFECE6] overflow-hidden transition-all duration-300 rounded-md px-5"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full py-4 text-left flex items-center justify-between font-serif text-sm sm:text-base text-[#1E241B] font-normal tracking-wide focus:outline-none hover:text-[#C5A86A] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="text-[#C5A86A] font-serif text-xl font-light">
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
                        >
                          <p className="pb-5 pt-1 font-sans text-xs leading-relaxed tracking-wider text-[#1E241B]/75 border-t border-[#EFECE6]/60 font-light">
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

        {/* 11. CONTACT CONCIERGE FORM */}
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Form */}
            <div className="lg:col-span-7 space-y-8 bg-transparent">
              <div>
                <span className="text-[#C5A86A] text-[9px] tracking-[0.3em] font-bold uppercase block font-sans">
                  PLAN YOUR VISIT
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#1E241B] font-light uppercase tracking-wider italic mt-1">
                  Get In Touch
                </h2>
                <p className="font-sans text-xs text-[#1E241B]/60 leading-relaxed tracking-wider mt-2 font-light">
                  Plan your pampering or styling visit. Send a message to our frontdesk below.
                </p>
              </div>

              {formSubmitted ? (
                <div className="p-8 bg-[#EFECE6]/40 border border-[#C5A86A]/20 rounded-lg flex flex-col items-center justify-center text-center space-y-3 shadow-sm">
                  <CheckCircle size={32} className="text-[#C5A86A]" />
                  <h3 className="font-serif text-lg text-[#1E241B] font-semibold uppercase tracking-wider">
                    Thank You
                  </h3>
                  <p className="font-sans text-xs text-[#1E241B]/60 max-w-sm tracking-wide leading-relaxed font-light">
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
                  <div className="flex flex-col space-y-1 relative">
                    <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        onFocus={() => setActiveField("name")}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-transparent border-b border-[#1E241B]/15 py-3 px-1 text-xs tracking-wider text-[#1E241B] focus:outline-none transition-colors"
                        required
                      />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeField === "name" ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A86A] origin-center"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1 relative">
                    <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        onFocus={() => setActiveField("phone")}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-transparent border-b border-[#1E241B]/15 py-3 px-1 text-xs tracking-wider text-[#1E241B] focus:outline-none transition-colors"
                        required
                      />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeField === "phone" ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A86A] origin-center"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1 sm:col-span-2 relative">
                    <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        onFocus={() => setActiveField("email")}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-transparent border-b border-[#1E241B]/15 py-3 px-1 text-xs tracking-wider text-[#1E241B] focus:outline-none transition-colors"
                        required
                      />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeField === "email" ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A86A] origin-center"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1 sm:col-span-2 relative">
                    <label className="font-sans text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold">
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        rows={3}
                        onFocus={() => setActiveField("message")}
                        onBlur={() => setActiveField(null)}
                        className="w-full bg-transparent border-b border-[#1E241B]/15 py-3 px-1 text-xs tracking-wider text-[#1E241B] focus:outline-none transition-colors resize-none"
                        required
                      />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: activeField === "message" ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A86A] origin-center"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 pt-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full bg-[#1E241B] hover:bg-[#5C6B57] text-[#FAF8F5] font-sans text-[10px] font-bold tracking-[0.25em] uppercase py-4 rounded-full transition-all duration-300 cursor-pointer shadow-md"
                    >
                      Submit Concierge Request
                    </motion.button>
                  </div>
                </form>
              )}
            </div>

            {/* Info details & Map */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">

              <div className="space-y-6">
                <h3 className="font-serif text-xl text-[#1E241B] uppercase tracking-wider font-semibold">
                  Maison de Beauté London
                </h3>

                <div className="space-y-4 font-sans text-xs tracking-wider text-[#1E241B]/75 leading-relaxed font-light">
                  <div className="flex items-start space-x-3">
                    <MapPin size={14} className="text-[#C5A86A] shrink-0 mt-0.5" />
                    <span>197 New Kings Rd, London SW6 4SR</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={13} className="text-[#C5A86A] shrink-0" />
                    <span>020 7123 4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={13} className="text-[#C5A86A] shrink-0" />
                    <span>info@maisondebeautelondon.com</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock size={14} className="text-[#C5A86A] shrink-0 mt-0.5" />
                    <div>
                      <p>Mon - Wed: 9:00 am - 6:00 pm</p>
                      <p className="mt-0.5">Thu - Fri: 9:00 am - 8:00 pm</p>
                      <p className="mt-0.5">Sat: 9:00 am - 6:00 pm</p>
                      <p className="mt-0.5 text-[#1E241B]/40">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="https://wa.me/447000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 border border-[#5C6B57] text-[#5C6B57] hover:bg-[#5C6B57] hover:text-white transition-all py-3.5 rounded-full text-[9px] uppercase font-bold tracking-widest"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp Frontdesk</span>
                  </Link>
                </div>
              </div>

              {/* Map iframe */}
              <div className="h-56 relative overflow-hidden border border-[#EFECE6] shadow-sm rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.582650074211!2d-0.2030272230489972!3d51.465809713809025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fb2159753c1%3A0xe54e69b0fa5d27eb!2s197%20New%20Kings%20Rd%2C%20London%20SW6%204SR%2C%20UK!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-90"
                />
              </div>

            </div>

          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedGalleryImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedGalleryImg(null)}
              className="fixed inset-0 bg-black/85 z-[999] flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            >
              <button
                onClick={() => setSelectedGalleryImg(null)}
                className="absolute top-6 right-6 text-white hover:text-white/80 p-2 focus:outline-none cursor-pointer"
                aria-label="Close image viewer"
              >
                <X size={28} />
              </button>

              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative max-w-4xl max-h-[80vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedGalleryImg}
                  alt="Expanded lookbook image"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 12. FLOATING CONCIERGE WIDGET */}
        <div className="fixed bottom-24 right-6 z-50">
          <div className="relative">

            {/* The Floating Expandable Widget Button */}
            <motion.button
              onClick={() => setShowConcierge(!showConcierge)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#C5A86A] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center cursor-pointer border border-white/20 select-none focus:outline-none"
              aria-label="Toggle concierge assistant"
            >
              {showConcierge ? <X size={20} /> : <Sparkles size={20} />}
            </motion.button>

            {/* Dropdown Menu Modal */}
            <AnimatePresence>
              {showConcierge && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-16 right-0 w-80 bg-white/95 backdrop-blur-md border border-[#EFECE6] rounded-lg shadow-2xl p-6 space-y-6"
                >
                  <div className="border-b border-[#EFECE6] pb-3 text-left">
                    <span className="text-[#C5A86A] text-[8px] tracking-[0.25em] font-bold uppercase block font-sans">
                      FRONTDESK ASSISTANT
                    </span>
                    <h4 className="font-serif text-lg text-[#1E241B] font-light uppercase tracking-wider italic mt-0.5">
                      Kensington Concierge
                    </h4>
                  </div>

                  <div className="space-y-3 font-sans text-[10px] font-bold tracking-widest uppercase text-left">
                    <a
                      href="https://www.fresha.com/providers/maison-de-beaute-demo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-[#1E241B] text-white py-3.5 px-4 rounded hover:bg-[#5C6B57] transition-all"
                    >
                      <span>Book Online (Fresha)</span>
                      <ArrowRight size={12} />
                    </a>

                    <a
                      href="https://wa.me/447000000000"
                      target="_blank"
                      className="flex items-center justify-between border border-[#25d366] text-[#25d366] hover:bg-[#25d366] hover:text-white py-3.5 px-4 rounded transition-all"
                    >
                      <span>WhatsApp Concierge</span>
                      <MessageCircle size={12} />
                    </a>

                    <a
                      href="tel:02071234567"
                      className="flex items-center justify-between border border-[#1E241B]/15 text-[#1E241B] hover:border-[#C5A86A] py-3.5 px-4 rounded transition-all"
                    >
                      <span>Call Front Desk</span>
                      <Phone size={12} />
                    </a>
                  </div>

                  {/* Brochure signup form */}
                  <div className="border-t border-[#EFECE6] pt-4 text-left">
                    <span className="text-[8px] tracking-widest text-[#1E241B]/50 uppercase font-bold block mb-2 font-sans">
                      Request Bridal Brochure
                    </span>
                    {bridalSent ? (
                      <p className="text-[10px] text-[#5C6B57] font-semibold tracking-wide">
                        ✓ Brochure link sent to your inbox.
                      </p>
                    ) : (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          setBridalSent(true);
                        }}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="email"
                          placeholder="Your email address"
                          value={bridalEmail}
                          onChange={(e) => setBridalEmail(e.target.value)}
                          className="flex-grow bg-transparent border-b border-[#1E241B]/15 py-1.5 text-xs text-[#1E241B] focus:outline-none focus:border-[#C5A86A]"
                          required
                        />
                        <button
                          type="submit"
                          className="bg-[#C5A86A] hover:bg-[#B49658] text-white text-[8px] tracking-widest uppercase font-bold py-2 px-3 rounded cursor-pointer"
                        >
                          Send
                        </button>
                      </form>
                    )}
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
