"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyStatement() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E241B]">
      <Navbar />

      {/* Hero Banner Header */}
      <div className="pt-32 pb-16 bg-[#C0C8B9] text-center select-none">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-3xl md:text-5xl text-[#5C6B57] font-normal tracking-[0.2em] uppercase">
            Privacy Statement
          </h1>
          <div className="h-[1px] w-16 bg-[#5C6B57]/45 mx-auto mt-4" />
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="prose prose-stone max-w-none font-sans text-sm sm:text-base leading-relaxed text-[#1E241B]/80 space-y-8">
          
          <p className="font-serif italic text-lg text-[#5C6B57]">
            Maison de Beauté London is committed to protecting the privacy of our clients and website visitors. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you use our website or services.
          </p>

          <hr className="border-[#EFECE6] my-8" />

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information from you when you interact with our website or use our services. This information may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name</li>
              <li>Contact information (e.g., email address, phone number)</li>
              <li>Demographic information</li>
              <li>Medical history and skin condition information</li>
              <li>Payment information</li>
            </ul>
            <p>
              We collect this information in order to provide you with our services, communicate with you, process payments, and improve our website and services.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              2. Use of Personal Information
            </h2>
            <p>
              We may use your personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and personalize our services</li>
              <li>To communicate with you, including responding to inquiries and providing appointment reminders</li>
              <li>To process payments and fulfill orders</li>
              <li>To send promotional materials, newsletters, or other marketing communications (you may opt out of receiving these communications at any time)</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              3. Disclosure of Personal Information
            </h2>
            <p>
              We may disclose your personal information to third parties in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>With your consent</li>
              <li>To service providers who assist us in operating our website or providing our services (e.g., payment processors, appointment scheduling software)</li>
              <li>To comply with legal requirements or respond to lawful requests from government authorities</li>
            </ul>
            <p>
              We do not sell or rent your personal information to third parties for their marketing purposes.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              4. Data Security
            </h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              5. Cookies and Tracking Technologies
            </h2>
            <p>
              We may use cookies and similar tracking technologies to collect information about your interactions with our website. You may disable cookies in your browser settings, but this may affect the functionality of our website.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              6. Children’s Privacy
            </h2>
            <p>
              Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If you believe that we have inadvertently collected information from a child under 13, please contact us immediately.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              7. Changes to this Privacy Policy
            </h2>
            <p>
              We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on our website. We encourage you to review this Privacy Policy periodically for changes.
            </p>
          </div>

          <hr className="border-[#EFECE6] my-8" />

          {/* Contact */}
          <div className="text-center pt-4">
            <h3 className="font-serif text-lg text-[#5C6B57] uppercase tracking-wider mb-2">
              Contact Us
            </h3>
            <p className="text-sm">
              If you have any questions or concerns about our Privacy Policy, or if you would like to exercise your rights regarding your personal information, please contact us at{" "}
              <a href="tel:02077360430" className="text-[#5C6B57] hover:underline font-bold">
                020 7736 0430
              </a>.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
