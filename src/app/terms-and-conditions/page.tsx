"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E241B]">
      <Navbar />

      {/* Hero Banner Header */}
      <div className="pt-32 pb-16 bg-[#C0C8B9] text-center select-none">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-3xl md:text-5xl text-[#5C6B57] font-normal tracking-[0.2em] uppercase">
            Terms & Conditions
          </h1>
          <div className="h-[1px] w-16 bg-[#5C6B57]/45 mx-auto mt-4" />
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="prose prose-stone max-w-none font-sans text-sm sm:text-base leading-relaxed text-[#1E241B]/80 space-y-8">
          
          <p className="font-serif italic text-lg text-[#5C6B57]">
            Welcome to Maison de Beauté London! These terms and conditions outline the rules and regulations for the use of our website and the services we provide.
          </p>

          <p>
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Maison de Beauté London if you do not accept all of the terms and conditions stated on this page.
          </p>

          <hr className="border-[#EFECE6] my-8" />

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              1. Services Provided
            </h2>
            <p>
              Our website offers information about various skin treatments, products, and services provided by Maison de Beauté London. We aim to provide accurate and up-to-date information, but we do not guarantee the accuracy, completeness, or timeliness of the information provided.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              2. Client Responsibilities
            </h2>
            <p>
              Clients must provide accurate and truthful information when using our services, including but not limited to personal details, medical history, and skin conditions. Clients are responsible for following any pre-treatment or post-treatment instructions provided by Maison de Beauté London.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              3. Treatment Results
            </h2>
            <p>
              Results of skin treatments may vary from person to person. We cannot guarantee specific outcomes, as individual factors such as skin type, lifestyle, and adherence to aftercare instructions can influence results.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              4. Payment Terms
            </h2>
            <p>
              Payment for services must be made in accordance with the pricing and payment terms provided by Maison de Beauté London. We reserve the right to change prices and payment terms at any time, with notice provided to clients where required by law.
            </p>
            <p>
              No refunds may be given for payments taken in advance, for example voucher sales and Black Friday sales.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              5. Cancellation and Refund Policy
            </h2>
            <p>
              Clients may cancel appointments in accordance with our cancellation policy, as outlined on our website or communicated at the time of booking. Refunds for cancelled appointments or unused services may be provided at our discretion. Non-attendance of a booked appointment will be charged for.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              6. Membership Terms & Conditions
            </h2>
            <p>
              Memberships are valid for 12 months from the date of purchase, unless otherwise stated. All memberships are non-refundable and non-transferable.
            </p>
            <p>
              Membership credit may be redeemed against eligible treatments and services, subject to consultation and suitability. Credit represents prepaid treatment value and is only considered earned once services have been provided.
            </p>
            <p>
              Any unused membership balance remaining after the expiry date will lapse and be forfeited, with no refund, extension, or transfer permitted.
            </p>
            <p>
              Appointments remain subject to our standard cancellation policy. We always encourage members to use their full membership value within the validity period, and our team will be happy to help you plan your treatments in advance.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              7. Intellectual Property
            </h2>
            <p>
              All content, including but not limited to text, images, logos, and graphics, on this website is the property of Maison de Beauté London and is protected by copyright laws. Clients may not use, reproduce, or distribute our content without prior written consent.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              8. Privacy Policy
            </h2>
            <p>
              We respect the privacy of our clients and website visitors. Our privacy practices are outlined in our separate Privacy Policy, which is incorporated into these terms and conditions by reference.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Maison de Beauté London shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website or services.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              10. Governing Law
            </h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws. Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#5C6B57] font-normal uppercase tracking-wider">
              11. Changes to Terms and Conditions
            </h2>
            <p>
              Maison de Beauté London reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website. By continuing to use our website after such changes, you accept and agree to the modified terms.
            </p>
          </div>

          <hr className="border-[#EFECE6] my-8" />

          {/* Contact */}
          <div className="text-center pt-4">
            <h3 className="font-serif text-lg text-[#5C6B57] uppercase tracking-wider mb-2">
              Contact Us
            </h3>
            <p className="text-sm">
              If you have any questions or concerns about these terms and conditions, please contact us at{" "}
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
