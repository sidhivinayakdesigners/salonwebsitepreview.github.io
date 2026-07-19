import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { SoundProvider } from "@/components/ui/ambient-sound";
import Script from "next/script";

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

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison de Beauté London | Luxury Hair, Nails & Beauty | Maison Avenue SW6",
  description: "Maison de Beauté London offers luxury hair, beauty, and skincare services on Maison Avenue, Chelsea, SW6. Discover premium experiences tailored to you.",
  metadataBase: new URL("https://maisondebeautelondon.com"),
  openGraph: {
    title: "Maison de Beauté London | Luxury Hair, Nails & Beauty | Maison Avenue SW6",
    description: "Maison de Beauté London offers luxury hair, beauty, and skincare services on Maison Avenue, Chelsea, SW6. Discover premium experiences tailored to you.",
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
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable} ${outfit.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF8F5] text-[#1E241B] font-sans antialiased selection:bg-[#C5A86A]/20 selection:text-[#1E241B]">
        <SoundProvider>
          {children}
          <Script
            src="https://widget.fresha.com/bootstrap.js"
            strategy="afterInteractive"
          />
        </SoundProvider>
      </body>
    </html>
  );
}
