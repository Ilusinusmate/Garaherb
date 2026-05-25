"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ProductPackages from "./ProductPackages";

const trustBadges = [
  {
    icon: "/images/img_security_symbol.svg",
    title: "Secure & Discreet",
    subtitle: "Payment",
  },
  {
    icon: "/images/img_guaranteesymbol.svg",
    title: "60-DAY",
    subtitle: "Guarantee",
  },
  {
    icon: "/images/img_shipingsymbol.svg",
    title: "One-Time Fee,",
    subtitle: "No Autoship",
  },
  {
    icon: "/images/img_mask_group.svg",
    title: "Fórmula 100%",
    subtitle: "natural",
  },
];

export default function ShippingBanner() {
  const handleOrderNow = () => {
    const productSection = document.getElementById("product-packages");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* 1. Yellow Shipping Banner */}
      <div className="w-full bg-[#f7c417] py-4 sm:py-5 px-4">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          <Image
            src="/images/img_shipping_icon.png"
            alt="Free Shipping"
            width={64}
            height={48}
            className="w-12 sm:w-14 flex-shrink-0"
          />
          <div className="text-center sm:text-left">
            <p className="text-[#111] font-bold text-sm sm:text-base md:text-lg font-inter leading-tight">
              Every <span className="text-[#7a3800]">6 Bottle</span> Order Gets{" "}
              <span className="text-[#7a3800]">FREE Shipping</span> Too!
            </p>
            <p className="text-[#333] text-xs sm:text-sm font-normal font-inter mt-0.5">
              *97% Of Customers Order 6 Bottles (Our Recommended Option)
            </p>
          </div>
        </div>
      </div>

      {/* 2. Urgency Dark Banner */}
      <div className="w-full bg-[#0d0d11] py-4 sm:py-5 px-4">
        <p className="text-center text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl uppercase leading-tight font-inter max-w-3xl mx-auto">
          Take advantage of{" "}
          <span className="text-[#f7c417]">this limited offer to stock</span>
          <br className="sm:hidden" /> up on Garaherb while supplies last!
        </p>
      </div>

      {/* 3. Product Packages Carousel */}
      <ProductPackages />

      {/* 4. Star Rating */}
      <div className="w-full bg-white py-8 sm:py-10 flex flex-col items-center gap-2">
        <p className="text-[20px] sm:text-[24px] font-bold text-[#111] font-inter">
          Our customers say
        </p>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <svg
              key={s}
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="#f7c417"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <span className="text-lg sm:text-xl font-bold text-[#111] font-inter ml-2">
            4.9/5
          </span>
        </div>
        <p className="text-sm sm:text-base text-gray-500 font-inter">
          Based on <span className="text-[#f7c417] font-semibold">38,204</span>{" "}
          reviews
        </p>
      </div>

      {/* 5. Trust Badges */}
      <div className="w-full bg-white py-6 sm:py-8 border-t border-b border-gray-100">
        <div className="w-full max-w-[860px] mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-10">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <Image
                  src={badge.icon}
                  alt={badge.title}
                  width={32}
                  height={32}
                  className="w-7 sm:w-8 flex-shrink-0"
                />
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-[#111] font-inter leading-tight">
                    {badge.title}
                  </p>
                  <p className="text-xs font-normal text-gray-500 font-inter">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. 60-Day Guarantee */}
      <div className="w-full bg-[#FFFFFF] py-8 sm:py-10 lg:py-12 px-4">
        <div className="w-full max-w-[860px] mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 bg-[linear-gradient(135deg,#1a0000_0%,#3d0a0a_60%,#1a0000_100%)] rounded-2xl p-6 sm:p-8 lg:p-10">
            <div className="flex-shrink-0">
              <Image
                src="/images/img_stampicon.png"
                alt="60 Days Guarantee"
                width={180}
                height={180}
                className="w-[130px] sm:w-[160px] lg:w-[180px]"
              />
            </div>
            <div className="flex flex-col gap-4 text-center sm:text-left">
              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold leading-tight font-inter">
                <span className="text-white">100% Satisfaction & </span>
                <span className="text-[#f7c417]">
                  60-Day
                  <br />
                  money back guarantee
                </span>
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-inter">
                Your order today is covered by our iron-clad{" "}
                <strong className="text-white">
                  60-day 100% money-back guarantee
                </strong>
                . If you are not impressed with the results, then at any time in
                the next 60 days write to us and we'll refund every single cent.
              </p>
              <div className="flex justify-center sm:justify-start">
                <Button
                  onClick={handleOrderNow}
                  variant="primary"
                  size="medium"
                >
                  <Image
                    src="/images/img_vector_black_900.svg"
                    alt=""
                    width={22}
                    height={22}
                  />
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
