import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft } from "lucide-react";

// Standard Hair FAQs provided by the user
const hairFaqs = [
  {
    q: "How do I book an appointment for a Blow Dry or a Cut or Colour?",
    a: "You can book directly via our online Fresha booking system, call us at 020 7736 0430, or drop by the salon. We recommend booking in advance.",
  },
  {
    q: "What hair services do you offer?",
    a: "We offer permanent regrowth colouring, full head highlights, balayage, signature blow dries, cuts, styling, extensions, and intensive mask treatments.",
  },
  {
    q: "Davines Colour & Products",
    a: "We proudly use Davines hair color and care systems. Davines is a world-renowned, B-Corp certified sustainable brand known for clean, high-performance styling formulas.",
  },
  {
    q: "Do you offer services for both men and women?",
    a: "Yes! Blush + Blow is a unisex salon offering premium hair styling, cuts, and coloring for both men and women.",
  },
  {
    q: "How much does a haircut cost?",
    a: "Haircuts start from £65 for a stylist cut and £75 for a senior stylist cut. This includes a luxury wash, scalp massage, and blow dry finish.",
  },
  {
    q: "Can I book a consultation before my hair appointment?",
    a: "Absolutely. We offer complimentary consultations for color matching, restyling advice, and extension fittings.",
  },
  {
    q: "What brands of hair products do you use?",
    a: "We use premium products from Davines, Olaplex, and K18 to ensure maximum structural integrity and high shine.",
  },
  {
    q: "How long do your appointments take?",
    a: "Blow dries take around 45 minutes. Cut & styles take 1 hour, and colour services range from 1.5 to 3 hours depending on length and complexity.",
  },
  {
    q: "Which hair appointments do I need a patch test for?",
    a: "All hair coloring services (highlights, balayage, permanent tints, regrowth tinting) require a quick patch test at least 48 hours prior to your first appointment.",
  },
  {
    q: "I'm allergic to nuts. Do you have nuts in any of your products or in the salon please?",
    a: "Certain luxury styling products may contain natural seed or nut oils. Please notify our staff of any allergies during your consultation so we can use nut-free alternatives.",
  },
];

// Nails, Beauty, and Bridal FAQs
const nailsFaqs = [
  { q: "How long does a gel manicure last?", a: "Our gel manicures typically last 2 to 3 weeks without chipping, depending on active use and care." },
  { q: "What gel brands do you stock?", a: "We use professional industry leaders like CND Shellac, OPI, and non-toxic builder gels." },
  { q: "Do I need to book in advance?", a: "Walk-ins are welcome based on availability, but we recommend booking to secure your preferred nail artist." },
];

const beautyFaqs = [
  { q: "Do I need a patch test for tinting?", a: "Yes, all lamination, tinting, and lash lifts require a quick patch test 48 hours before your first appointment." },
  { q: "How long does brow lamination last?", a: "Lamination typically lasts between 6 to 8 weeks with proper aftercare." },
  { q: "How should I prepare for my spray tan?", a: "Exfoliate and shave 24 hours prior. Arrive with loose, dark clothing and no deodorant or perfumes." },
];

const bridalFaqs = [
  { q: "When should I book my bridal hair trial?", a: "We highly recommend booking your trial 6 to 12 weeks before your wedding date." },
  { q: "Do you travel on-location?", a: "Yes, our bridal styling team travels to venues within Greater London and internationally." },
  { q: "Can you accommodate large bridal parties?", a: "Yes, our flexible styling teams can style brides, bridesmaids, and mothers of the bride simultaneously." },
];

// Full dictionary of dynamic service paths
const servicesData: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    priceTag: string;
    priceList: { name: string; price: string; note: string }[];
    faqs: { q: string; a: string }[];
  }
> = {
  // === HAIR ===
  colour: {
    title: "Colour",
    description:
      "At Blush + Blow, we believe that your hair colour is more than just a shade—it's a reflection of your style and personality. Our expert team of colorists is dedicated to providing bespoke hair colour services that bring out the best in your hair, whether you're looking for a subtle touch-up or a complete transformation.",
    image: "/images/haircolour.avif",
    priceTag: "£49",
    priceList: [
      { name: "Permanent Colour Regrowth", price: "£49", note: "any professional" },
      { name: "Full Head Permanent Colour", price: "£75", note: "any professional" },
      { name: "Half Head Foil Highlights", price: "£110", note: "any professional" },
      { name: "Full Head Foil Highlights", price: "£140", note: "any professional" },
      { name: "T-Section Highlights", price: "£85", note: "any professional" },
      { name: "Bespoke Balayage / Ombre", price: "£160", note: "any professional" },
    ],
    faqs: hairFaqs,
  },
  "blow-dry-blush-blow-london": {
    title: "Blow Dry",
    description:
      "Experience the ultimate blow dry with our color experts, who bring a unique blend of technique and brushwork to every blow dry. Enjoy a luxury wash and condition followed by a customized bouncy or sleek blow dry finish.",
    image: "/images/hairblowdry.jpg",
    priceTag: "£35",
    priceList: [
      { name: "Blow Dry (Short Hair)", price: "£35", note: "any professional" },
      { name: "Blow Dry (Long Hair)", price: "£45", note: "any professional" },
      { name: "Blow Dry (with Extensions)", price: "£55", note: "any professional" },
    ],
    faqs: hairFaqs,
  },
  "cut-and-style": {
    title: "Cut and Style",
    description:
      "Cut and Style offers personalized haircuts and styling services tailored to enhance your natural beauty. Our expert stylists use precision structural layering and cutting methods to frame your face perfectly.",
    image: "/images/haircutanddry.webp",
    priceTag: "£65",
    priceList: [
      { name: "Cut & Blow Dry (Stylist)", price: "£65", note: "any professional" },
      { name: "Cut & Blow Dry (Senior Stylist)", price: "£75", note: "any professional" },
      { name: "Wet Cut & Tidy", price: "£50", note: "any professional" },
      { name: "Gents Cut & Style", price: "£40", note: "any professional" },
    ],
    faqs: hairFaqs,
  },
  "hair-treatments": {
    title: "Treatments",
    description:
      "Hair treatments are specialized services designed to nourish, repair, and revitalize hair. These treatments target issues like dryness, damage, frizz, or scalp health, leaving your hair looking healthy and strong.",
    image: "/images/hairtreatment.jpg",
    priceTag: "£25",
    priceList: [
      { name: "Intense Conditioning Masque", price: "£25", note: "any professional" },
      { name: "Olaplex Standalone Bond Repair", price: "£45", note: "any professional" },
      { name: "K18 Molecular Treatment Mask", price: "£30", note: "any professional" },
      { name: "Keratin Smoothing Blowout", price: "£180", note: "any professional" },
    ],
    faqs: hairFaqs,
  },
  "hair-extensions": {
    title: "Extensions",
    description:
      "Extensions are a versatile way to enhance the length, volume, and style of your hair, offering a natural, fuller look. Using only premium, ethically sourced human hair extensions custom-matched to your color.",
    image: "/images/Hair_Extensions.webp",
    priceTag: "From £60",
    priceList: [
      { name: "Tape-In Application", price: "By Consultation", note: "any professional" },
      { name: "Micro-Ring / Bead Fitting", price: "By Consultation", note: "any professional" },
      { name: "Weft Application", price: "By Consultation", note: "any professional" },
      { name: "Extension Removal & Tidy", price: "£60", note: "any professional" },
    ],
    faqs: hairFaqs,
  },
  "styling-blow-dries": {
    title: "Styling – Blow Dries",
    description:
      "Dry Styling is a quick and efficient hairstyling technique that enhances your look without the need for a full wash and blow-dry. It focuses on using professional tools to style dry hair, adding volume, texture, or creating sleek finishes, perfect for touch-ups or a polished look on the go. Ideal for transforming your hair in minutes!",
    image: "/images/styling_blow_dries.jpg",
    priceTag: "£80",
    priceList: [
      { name: "Hair Up (with wash & blow dry)", price: "£80", note: "any professional" },
      { name: "Dry Styling (Curls or Waves)", price: "£45", note: "any professional" },
      { name: "Express Braids & Plaits", price: "£35", note: "any professional" },
    ],
    faqs: hairFaqs,
  },

  // === NAILS ===
  "nails-hands": {
    title: "Manicure",
    description:
      "Manicure is a complete hand and nail care service designed to clean, shape, and beautify the nails while improving the health of your hands.",
    image: "/images/manicure.jpg",
    priceTag: "£36",
    priceList: [
      { name: "Gel Shape & Paint (Hands)", price: "£36", note: "any professional" },
      { name: "Blush + Blow Signature Manicure", price: "£45", note: "any professional" },
      { name: "Gel Removal & Nail Tidy", price: "£20", note: "any professional" },
      { name: "Quick File & Polish", price: "£25", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "manicure-without-polish": {
    title: "Manicure (without polish)",
    description:
      "Manicure (without Polish) is a natural nail care service focused on enhancing the health and appearance of your hands and nails through expert detailing, filing, and skin hydration.",
    image: "/images/manicure_without_polish.png",
    priceTag: "£30",
    priceList: [
      { name: "Manicure (without Polish)", price: "£30", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "gel-manicure-and-gel-pedicure": {
    title: "Gel Manicure and Gel Pedicure",
    description:
      "Gel Manicure and Gel Pedicure is a comprehensive nail service that combines expert care for both your hands and feet, with long-lasting gel coatings for maximum style.",
    image: "/images/gel_manicure_gel_pedicure.png",
    priceTag: "£76",
    priceList: [
      { name: "Gel Manicure & Gel Pedicure Package", price: "£76", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "manicure-and-pedicure": {
    title: "Manicure and Pedicure",
    description:
      "Manicure and Pedicure is a combined treatment designed to provide effective cuticle work, skin filing, and hydration therapy for hands and feet.",
    image: "/images/manicure_pedicure.jpg",
    priceTag: "£65",
    priceList: [
      { name: "Manicure & Pedicure Package", price: "£65", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "bambino-manicure-under-12": {
    title: "Bambino Manicure (under 12)",
    description:
      "Bambino Manicure (under 12) is a delightful nail service tailored specifically for children under 12, providing a fun, safe, and gentle nail tidy.",
    image: "/images/bambino_manicure.jpg",
    priceTag: "£15",
    priceList: [
      { name: "Bambino Manicure (under 12)", price: "£15", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "bambino-pedicure-under-12": {
    title: "Bambino Pedicure (under 12)",
    description:
      "Bambino Pedicure (under 12) is a fun and age-appropriate foot care service designed specifically for children under 12 to enjoy a relaxing soak and paint.",
    image: "/images/bambino_pedicure.jpg",
    priceTag: "£18",
    priceList: [
      { name: "Bambino Pedicure (under 12)", price: "£18", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "profession-male-pedicure": {
    title: "Male Pedicure",
    description:
      "Male Pedicure is a tailored foot care service designed specifically for men, focusing on grooming and comfort, callus smoothing, and massage.",
    image: "/images/male_pedicure.jpg",
    priceTag: "£35",
    priceList: [
      { name: "Male Pedicure", price: "£35", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "male-manicure": {
    title: "Male Manicure",
    description:
      "Male Manicure is a specialized nail service designed to cater to the grooming needs of men, including deep cuticle cleaning, filing, and skin therapy.",
    image: "/images/male_manicure.jpg",
    priceTag: "£28",
    priceList: [
      { name: "Male Manicure", price: "£28", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "luxury-gel-pedicure": {
    title: "Luxury Gel Pedicure",
    description:
      "Luxury Gel Pedicure is an exquisite foot care service designed to provide a pampering experience with scrubs and masks while delivering long-lasting gel results.",
    image: "/images/luxury_gel_pedicure.jpg",
    priceTag: "£65",
    priceList: [
      { name: "Luxury Gel Pedicure", price: "£65", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "luxury-pedicure": {
    title: "Luxury Pedicure",
    description:
      "Luxury Pedicure is a rejuvenating foot care service that provides a pampering experience while enhancing the beauty and health of soles with classic polish.",
    image: "/images/luxury_pedicure.jpg",
    priceTag: "£55",
    priceList: [
      { name: "Luxury Pedicure", price: "£55", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "luxury-gel-manicure": {
    title: "Luxury Gel Manicure",
    description:
      "Luxury Gel Manicure is an indulgent nail service that combines expert nail care with the long-lasting benefits of gel polish, hands mask, and deep massage.",
    image: "/images/luxury_gel_manicure.jpg",
    priceTag: "£55",
    priceList: [
      { name: "Luxury Gel Manicure", price: "£55", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "luxury-manicure": {
    title: "Luxury Manicure",
    description:
      "Luxury Manicure is a premium hand and nail care service designed to provide an indulgent experience while enhancing nail structure with classic lacquer.",
    image: "/images/luxury_manicure.jpg",
    priceTag: "£45",
    priceList: [
      { name: "Luxury Manicure", price: "£45", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "gel-pedicure": {
    title: "Gel Pedicure",
    description:
      "Gel Pedicure is a luxurious foot care service that combines nail grooming with long-lasting gel polish for a flawless finish.",
    image: "/images/gel_pedicure.png",
    priceTag: "£40",
    priceList: [
      { name: "Gel Pedicure", price: "£40", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "shape-paint-hands": {
    title: "Shape and Paint Hands",
    description:
      "Shape and Paint Hands is a classic nail service that enhances the look of your natural nails by shaping them to your preference and painting them with high-quality classic polish.",
    image: "/images/shape_paint_hands.png",
    priceTag: "£25",
    priceList: [
      { name: "Shape & Paint (Hands)", price: "£25", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "gel-shape-paint-hands": {
    title: "Gel Shape and Paint Hands",
    description:
      "Gel Shape and Paint Hands is a nail service that focuses on reshaping and painting the nails with gel polish for a glossy, durable finish that lasts up to 2-3 weeks.",
    image: "/images/gel_shape_paint_hands.png",
    priceTag: "£36",
    priceList: [
      { name: "Gel Shape & Paint (Hands)", price: "£36", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "gel-manicure": {
    title: "Gel Manicure",
    description:
      "Gel Manicure is a premium nail service that offers long-lasting, glossy color with a durable finish. This manicure begins with full cuticle care, filing, and shaping.",
    image: "/images/gel_manicure.jpg",
    priceTag: "£45",
    priceList: [
      { name: "Gel Manicure", price: "£45", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  pedicure: {
    title: "Pedicure",
    description:
      "Pedicure is a relaxing and rejuvenating foot care service that focuses on both grooming and pampering your feet. The treatment includes foot soak, scrub, and massage.",
    image: "/images/pedicure.jpg",
    priceTag: "£45",
    priceList: [
      { name: "Pedicure", price: "£45", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "shape-paint-feet": {
    title: "Shape and Paint Feet",
    description:
      "Shape and Paint Feet is a simple yet effective nail service that focuses on grooming and beautifying your toenails with a perfect shape and premium standard lacquer.",
    image: "/images/shape_paint_feet.jpg",
    priceTag: "£28",
    priceList: [
      { name: "Shape & Paint (Feet)", price: "£28", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  "gel-shape-paint-feet": {
    title: "Gel Shape and Paint Feet",
    description:
      "Gel Shape and Paint Feet is a nail service designed to enhance the appearance of your toenails with professional shaping and long-lasting gel coatings.",
    image: "/images/gel_shape_paint_feet.jpg",
    priceTag: "£40",
    priceList: [
      { name: "Gel Shape & Paint (Feet)", price: "£40", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },
  biab: {
    title: "BIAB",
    description:
      "A BIAB manicure uses Builder in a Bottle, a gel-like nail base and top coat, which is applied as an overlay to strengthen your natural nails and prevent breakage.",
    image: "/images/biab.jpg",
    priceTag: "£48",
    priceList: [
      { name: "BIAB Overlay (Natural)", price: "£48", note: "any professional" },
      { name: "BIAB Overlay (with Gel Colour)", price: "£58", note: "any professional" },
      { name: "BIAB Infill Maintenance", price: "£45", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },

  // === NAILS FEET ===
  "nails-feet": {
    title: "Pedicures",
    description:
      "Indulgent foot therapies, scrub exfoliation, and detailed nail beauty. Pamper your feet in our comfortable massage chairs with warm botanical foot baths.",
    image: "/images/beauty.png",
    priceTag: "£40",
    priceList: [
      { name: "Gel Shape & Paint (Feet)", price: "£40", note: "any professional" },
      { name: "Blush + Blow Luxury Pedicure", price: "£55", note: "any professional" },
      { name: "Callus Treatment & Gel Pedicure", price: "£65", note: "any professional" },
    ],
    faqs: nailsFaqs,
  },

  // === BEAUTY ===
  eyelashes: {
    title: "Lashes",
    description:
      "Enhance your natural beauty with our premium lash services. Whether you're looking for a dramatic volume boost or a natural lash lift curl, our artists customize each treatment.",
    image: "/images/beauty_lashes.jpg",
    priceTag: "From £65",
    priceList: [
      { name: "Lash Lift & Tint", price: "£65", note: "any professional" },
      { name: "Full Set Eyelash Extensions", price: "£90", note: "any professional" },
      { name: "Eyelash Infill Refill", price: "£50", note: "any professional" },
      { name: "Lash Tint Only", price: "£20", note: "any professional" },
    ],
    faqs: beautyFaqs,
  },
  "brows-threading": {
    title: "Brows + Threading",
    description:
      "Detailed sculpting, hybrid tinting, lamination, and lash lifts designed to frame your eyes beautifully and define your facial symmetry.",
    image: "/images/beauty_brows.jpg",
    priceTag: "£28",
    priceList: [
      { name: "Brow Tint & Shape", price: "£28", note: "any professional" },
      { name: "Eyebrow Shape (Wax or Thread)", price: "£18", note: "any professional" },
      { name: "Bespoke Lash Lift & Tint", price: "£65", note: "any professional" },
    ],
    faqs: beautyFaqs,
  },
  "spray-tan": {
    title: "Spray Tan",
    description:
      "Flawless, golden bronzing using premium St. Tropez formulas. Exclusively custom-blended by our therapists for a natural, streak-free sun-kissed finish.",
    image: "/images/beauty_tan.webp",
    priceTag: "£38",
    priceList: [
      { name: "Full Body St. Tropez Tan", price: "£38", note: "any professional" },
      { name: "Half Body Spray Tan", price: "£25", note: "any professional" },
    ],
    faqs: beautyFaqs,
  },
  makeup: {
    title: "Make Up",
    description:
      "Artistry cosmetic applications using premium brands for event glamour, editorial shoots, dinner parties, or quick accent eyes styling.",
    image: "/images/beauty_makeup.jpg",
    priceTag: "£70",
    priceList: [
      { name: "Full Face Event Makeup", price: "£70", note: "any professional" },
      { name: "Eyes Only Makeup focus", price: "£40", note: "any professional" },
    ],
    faqs: beautyFaqs,
  },
  massage: {
    title: "Massage",
    description:
      "Decompress and restore muscle balance with deep tissue or relaxing body therapies in our private, quiet beauty rooms.",
    image: "/images/beauty_massage.webp",
    priceTag: "£75",
    priceList: [
      { name: "Swedish Relaxing Massage (60 Min)", price: "£75", note: "any professional" },
      { name: "Deep Tissue Massage (60 Min)", price: "£85", note: "any professional" },
      { name: "Pregnancy Massage (75 Min)", price: "£90", note: "any professional" },
    ],
    faqs: beautyFaqs,
  },

  // === BRIDAL ===
  "bridal-hair": {
    title: "Bridal hair",
    description:
      "Romantic hair updos, textured waves, and in-salon bridal hair trials mapped specifically to your bridal gown and hair accessories.",
    image: "/images/bridal_hair.jpg",
    priceTag: "£120",
    priceList: [
      { name: "Bridal Hair Styling (On-Day)", price: "£120", note: "any professional" },
      { name: "Bridal Hair Trial (In-Salon)", price: "£90", note: "any professional" },
      { name: "Bridesmaid Hair Styling", price: "£80", note: "any professional" },
    ],
    faqs: bridalFaqs,
  },
  "bridal-makeup": {
    title: "Bridal Makeup",
    description:
      "Camera-ready, long-lasting wedding makeup styling. Tailored using premium cosmetic ranges and setting sprays for complete confidence under wedding photography.",
    image: "/images/bridal_makeup.jpg",
    priceTag: "£125",
    priceList: [
      { name: "Bridal Makeup Artistry (On-Day)", price: "£125", note: "any professional" },
      { name: "Bridal Makeup Trial (In-Salon)", price: "£90", note: "any professional" },
      { name: "Bridesmaid Makeup Artistry", price: "£80", note: "any professional" },
    ],
    faqs: bridalFaqs,
  },
};

// Next.js Static Export parameters generator
export async function generateStaticParams() {
  return [
    { slug: "colour" },
    { slug: "blow-dry-blush-blow-london" },
    { slug: "cut-and-style" },
    { slug: "hair-treatments" },
    { slug: "hair-extensions" },
    { slug: "styling-blow-dries" },
    { slug: "nails-hands" },
    { slug: "nails-feet" },
    { slug: "eyelashes" },
    { slug: "brows-threading" },
    { slug: "spray-tan" },
    { slug: "makeup" },
    { slug: "massage" },
    { slug: "bridal-hair" },
    { slug: "bridal-makeup" },
    { slug: "manicure-without-polish" },
    { slug: "gel-manicure-and-gel-pedicure" },
    { slug: "manicure-and-pedicure" },
    { slug: "bambino-manicure-under-12" },
    { slug: "bambino-pedicure-under-12" },
    { slug: "profession-male-pedicure" },
    { slug: "male-manicure" },
    { slug: "luxury-gel-pedicure" },
    { slug: "luxury-pedicure" },
    { slug: "luxury-gel-manicure" },
    { slug: "luxury-manicure" },
    { slug: "gel-pedicure" },
    { slug: "shape-paint-hands" },
    { slug: "gel-shape-paint-hands" },
    { slug: "gel-manicure" },
    { slug: "pedicure" },
    { slug: "shape-paint-feet" },
    { slug: "gel-shape-paint-feet" },
    { slug: "biab" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetail({ params }: PageProps) {
  const { slug } = await params;
  const data = servicesData[slug] || servicesData.colour;

  // Set the back url path according to dynamic category slug
  let backUrl = "/hair";
  if (
    slug.startsWith("nails-") ||
    slug === "manicure-without-polish" ||
    slug === "gel-manicure-and-gel-pedicure" ||
    slug === "manicure-and-pedicure" ||
    slug === "bambino-manicure-under-12" ||
    slug === "bambino-pedicure-under-12" ||
    slug === "profession-male-pedicure" ||
    slug === "male-manicure" ||
    slug === "luxury-gel-pedicure" ||
    slug === "luxury-pedicure" ||
    slug === "luxury-gel-manicure" ||
    slug === "luxury-manicure" ||
    slug === "gel-pedicure" ||
    slug === "shape-paint-hands" ||
    slug === "gel-shape-paint-hands" ||
    slug === "gel-manicure" ||
    slug === "pedicure" ||
    slug === "shape-paint-feet" ||
    slug === "gel-shape-paint-feet" ||
    slug === "biab"
  ) {
    backUrl = "/nails";
  } else if (
    slug === "eyelashes" ||
    slug === "brows-threading" ||
    slug === "spray-tan" ||
    slug === "makeup" ||
    slug === "massage"
  ) {
    backUrl = "/beauty";
  } else if (slug.startsWith("bridal-")) {
    backUrl = "/bridal";
  }

  return (
    <>
      <Navbar />

      <main className="pt-32 pb-24 bg-[#FFFFFF] min-h-screen text-[#181816] font-sans">
        
        {/* Back Link */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
          <Link
            href={backUrl}
            className="inline-flex items-center space-x-2 text-xs tracking-widest uppercase font-bold text-[#E5A99E] hover:text-[#111111] transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Services</span>
          </Link>
        </div>

        {/* Top Header Section */}
        <section className="py-12 md:py-16 max-w-7xl mx-auto px-6 md:px-12 space-y-4">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#181816] font-semibold uppercase tracking-wider">
            {data.title}
          </h1>
          <p className="text-sm md:text-base text-[#666666] leading-relaxed tracking-wider max-w-4xl font-light">
            {data.description}
          </p>
        </section>

        {/* Pricing & Image Box (Green Detail Container) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="bg-white text-[#181816] grid grid-cols-1 md:grid-cols-2 shadow-premium border border-[#ECE8E1] rounded-none">
            
            {/* Left Column: Image */}
            <div className="h-[300px] md:h-auto min-h-[350px] relative w-full overflow-hidden bg-[#FFFFFF] border-r border-[#ECE8E1]">
              <Image
                src={data.image}
                alt={data.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Right Column: Price Content */}
            <div className="p-8 md:p-12 flex-col justify-between flex-grow flex">
              
              {/* Highlight Price Box */}
              <div className="bg-[#FDF8F6] text-[#181816] border-y border-[#ECE8E1] py-8 text-center font-bold text-xl md:text-2xl uppercase tracking-wider select-none mb-6">
                Price: {data.priceTag}
              </div>

              {/* Sub-items list */}
              <div className="space-y-4 flex-grow">
                {data.priceList.map((item, idx) => (
                  <div key={idx} className="border-b border-[#ECE8E1] pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="font-sans text-sm md:text-base text-[#181816] font-semibold">
                      {item.name}
                    </span>
                    <div className="flex items-baseline space-x-2 shrink-0">
                      <span className="font-serif text-base md:text-lg text-[#C6A86B] font-bold">
                        {item.price}
                      </span>
                      {item.note && (
                        <span className="text-[10px] text-[#E5A99E] tracking-widest uppercase font-sans">
                          {item.note}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Book Now Button */}
              <div className="pt-8">
                <a
                  href="https://www.fresha.com/providers/blush-blow-w9xnf8li?pId=9954&dppub=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#111111] text-white font-bold text-xs tracking-[0.25em] uppercase py-4 rounded-none hover:bg-[#E5A99E] hover:text-white transition-all duration-300 text-center shadow-sm block cursor-pointer"
                >
                  Book Now
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* 13. FAQ ACCORDION SECTION */}
        <section className="py-24 bg-[#FDF8F6] border-t border-[#ECE8E1]">
          <div className="max-w-4xl mx-auto px-6">
            
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-[#181816] font-semibold uppercase tracking-wider">
                Faq’s
              </h2>
              <div className="h-[1px] w-16 bg-[#C6A86B]/30 mx-auto mt-4" />
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group border border-[#ECE8E1] bg-white shadow-sm transition-all"
                >
                  <summary className="flex justify-between items-center font-serif text-sm sm:text-base text-[#181816] font-semibold cursor-pointer select-none px-6 py-5 list-none hover:text-[#C6A86B] transition-colors">
                    <span>{faq.q}</span>
                    <span className="text-[#C6A86B] font-sans text-xl group-open:hidden">+</span>
                    <span className="text-[#C6A86B] font-sans text-xl hidden group-open:inline">−</span>
                  </summary>
                  <div className="px-6 pb-5 text-xs sm:text-sm text-[#666666] leading-relaxed tracking-wider font-sans border-t border-[#ECE8E1] pt-4 bg-[#FFFFFF]/45">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
