"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function PerformanceSection() {
  const handleOrderNow = () => {
    const productSection = document.getElementById("product-packages");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    "Stiffer and longer-lasting erections",
    "Increased libido",
    "Improved thickness and size",
    "Nights of pleasure restored",
    "Reversal of erectile dysfunction",
  ];

  return (
    <section className="w-full bg-secondary-bg-dark py-12 sm:py-16 lg:py-0">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col lg:flex-row items-center justify-between relative">
          {/* Product Image with Lightning Effect */}
          <div className="w-full lg:w-[50%] relative flex items-center justify-center py-8 lg:py-0">
            <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[700px] aspect-square">
              {/* Lightning Background */}
              <Image
                src="/images/img_ligthningicon2.png"
                alt=""
                width={684}
                height={830}
                className="absolute inset-0 w-full h-full object-contain opacity-70"
              />
              {/* Product Bottle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/img_01_1.png"
                  alt="GaraHerb Product"
                  width={760}
                  height={758}
                  className="w-[85%] h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-[45%] flex flex-col gap-4 sm:gap-6 text-center lg:text-left py-8 lg:py-16">
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
            <h2 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-3xl font-bold leading-tight font-inter">
              <span className="text-text-white">
                The only doctor-approved formula to give men{" "}
              </span>
              <span className="bg-[linear-gradient(90deg,#ff4646_0%,#f6e323_100%)] bg-clip-text text-transparent">
                long-lasting and extremely firm erections!
              </span>
            </h2>

            {/* Benefits List */}
            <div className="flex flex-col gap-2 sm:gap-3 items-center lg:items-start">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Image
                    src="/images/img_checkverde.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="flex-shrink-0 mt-1"
                  />
                  <span className="text-base sm:text-lg md:text-xl font-medium text-text-white font-inter leading-4xl">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleOrderNow}
              className="w-full sm:w-auto mx-auto lg:mx-0 mt-2 sm:mt-4"
              layout_align_self="auto"
              layout_gap="0"
              layout_width="auto"
              padding="default"
              margin="default"
              position="relative"
              variant="primary"
              size="medium"
            >
              <Image
                src="/images/img_vector_black_900.svg"
                alt=""
                width={24}
                height={24}
              />
              Order Now
            </Button>
          </div>

          {/* Decorative Image */}
          {/* <Image
            src="/images/img_image_6.png"
            alt=""
            width={316}
            height={512}
            className="absolute -right-4 sm:-right-8 bottom-0 w-[20%] lg:w-[16%] opacity-[0.3] hidden lg:block grayscale"
          /> */}
        </div>
      </div>
    </section>
  );
}
