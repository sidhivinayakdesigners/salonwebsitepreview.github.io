import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blush + Blow London | Luxury Hair, Nails & Beauty | New Kings Road SW6",
  description: "Blush + Blow London offers luxury hair, beauty, and skincare services on New Kings Road, Parsons Green, SW6. Discover premium experiences tailored to you.",
  metadataBase: new URL("https://blushandblowlondon.com"),
  openGraph: {
    title: "Blush + Blow London | Luxury Hair, Nails & Beauty | New Kings Road SW6",
    description: "Blush + Blow London offers luxury hair, beauty, and skincare services on New Kings Road, Parsons Green, SW6. Discover premium experiences tailored to you.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-white text-[#222222] font-sans antialiased selection:bg-[#C6A86B]/20 selection:text-[#222222]">
        {children}
      </body>
    </html>
  );
}
