import Image from "next/image";
import FAQAccordion from "./FAQAccordion";
import FAQOrderButton from "./FAQOrderButton";

export default function FAQSection() {
  return (
    <section className="w-full bg-[#0d0d11] py-12 sm:py-16 lg:py-20 px-4">
      <div className="w-full max-w-[780px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-8 sm:mb-10">
          <p className="text-[#f7c417] text-sm sm:text-base font-semibold uppercase tracking-widest font-inter">
            FAQ
          </p>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-white text-center font-inter leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion — client island */}
        <FAQAccordion />

        {/* CTA Button — client island */}
        <div className="flex justify-center mb-10">
          <FAQOrderButton />
        </div>

        {/* Supplement Label Image */}
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            src="/images/img_product_info.png"
            alt="GaraHerb Supplement Facts"
            width={780}
            height={380}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
