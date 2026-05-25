"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function FormulaSection() {
  const handleOrderNow = () => {
    const productSection = document.getElementById("product-packages");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-secondary-bg-dark relative overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[700px]">
        {/* LEFT — image fills the entire half */}
        <div className="relative w-full lg:w-1/2 min-h-[320px] lg:min-h-full">
          <div className="absolute inset-0">
            <Image
              src="/images/img_productimage.png"
              alt=""
              fill
              className="object-cover object-center"
            />
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.7) 100%)'
              }}
            />
          </div>
          {/* Stamp overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <Image
              src="/images/img_stampicon.png"
              alt="60 Days Guarantee Stamp"
              width={130}
              height={130}
              className="absolute top-20 right-20 sm:top-6 sm:right-6 w-[90px] sm:w-[120px] lg:w-[130px]"
            />
          </div>
        </div>

        {/* RIGHT — content */}
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center gap-6 sm:gap-8 lg:gap-[40px] px-6 sm:px-10 lg:px-[56px] py-12 sm:py-16 lg:py-[80px] text-center lg:text-left z-10">
          {/* Limited Offer Badge */}
          <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <Image
              src="/images/img_flame_fire.png"
              alt=""
              width={16}
              height={30}
              className="w-3 sm:w-4"
            />
            <span className="text-sm sm:text-base font-medium text-text-white-transparent font-inter">
              LIMITED TIME OFFER
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-4xl font-bold leading-tight font-inter">
            <span className="text-text-white">The Formula Behind Your </span>
            <span className="bg-[linear-gradient(90deg,#ff4646_0%,#f6e323_100%)] bg-clip-text text-transparent">
              High Performance
            </span>
          </h2>

          {/* Description Paragraphs */}
          <div className="flex flex-col gap-4">
            <p className="text-base sm:text-lg md:text-xl font-normal text-text-white-transparent leading-relaxed font-inter">
              GaraHerb was developed to meet the needs of people who require
              more energy, mental clarity, balanced libido, and sustained
              vitality—without the reliance on artificial stimulants.
            </p>
            <p className="text-base sm:text-lg md:text-xl font-normal text-text-white-transparent leading-relaxed font-inter">
              The formula combines selected natural ingredients, vitamins, and
              premium compounds that work synergistically to enhance your daily
              performance.
            </p>
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleOrderNow}
            className="w-full sm:w-auto mx-auto lg:mx-0"
            layout_align_self="auto"
            layout_gap="0"
            layout_width="auto"
            padding="default"
            margin="default"
            position="static"
            variant="primary"
            size="md"
          >
            <Image
              src="/images/img_vector_black_900.svg"
              alt=""
              width={24}
              height={24}
            />
            Order Now
          </Button>

          {/* Decorative Background Image */}
          <Image
            src="/images/img_background.png"
            alt=""
            width={442}
            height={546}
            className="absolute bottom-0 right-0 w-[30%] lg:w-[40%] opacity-20 z-0 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
