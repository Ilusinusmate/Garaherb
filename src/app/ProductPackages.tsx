"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface PackageType {
  id: string;
  label: string;
  labelColor: string;
  bottles: number;
  supply: string;
  images: Array<{ src: string; className: string }>;
  pricePerBottle: number;
  pricePerBottleText: string;
  features: string[];
  totalOriginal: string;
  totalDiscounted: string;
  bonus?: {
    badge: string;
    items: Array<{ src: string; className: string }>;
  };
  highlight?: boolean;
  borderColor?: string;
  bgColor?: string;
}

export default function ProductPackages() {
  const [selectedPackage, setSelectedPackage] = useState<string>("best-seller");
  const [activeIndex, setActiveIndex] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const packages: PackageType[] = [
    {
      id: "starter",
      label: "Starter",
      labelColor: "bg-secondary-bg-dark",
      bottles: 2,
      supply: "60 Day Supply",
      images: [
        { src: "/images/img_01_1.png", className: "w-[139px] sm:w-[278px]" },
        {
          src: "/images/img_01_1.png",
          className: "w-[139px] sm:w-[278px] -ml-[50px] sm:-ml-[92px]",
        },
      ],
      pricePerBottle: 69,
      pricePerBottleText: "/Bottle",
      features: ["60 DAYS GUARANTEE"],
      totalOriginal: "$79",
      totalDiscounted: "$69",
      bgColor: "bg-secondary-bg",
      borderColor: "border-border-primary-transparent",
    },
    {
      id: "best-seller",
      label: "Best Seller",
      labelColor: "bg-[linear-gradient(90deg,#ff4646_0%,#f6e323_100%)]",
      bottles: 6,
      supply: "180 Day Supply",
      images: [
        {
          src: "/images/img_01_3.png",
          className: "w-[83px] sm:w-[166px] mt-[5px] sm:mt-[10px]",
        },
        {
          src: "/images/img_03_1.png",
          className: "w-[139px] sm:w-[278px] -ml-[66px] sm:-ml-[132px]",
        },
        {
          src: "/images/img_01_4.png",
          className:
            "w-[72px] sm:w-[144px] mt-[9px] sm:mt-[18px] -ml-[38px] sm:-ml-[76px]",
        },
        {
          src: "/images/img_01_1.png",
          className:
            "w-[89px] sm:w-[178px] mt-[4px] sm:mt-[8px] -ml-[64px] sm:-ml-[128px]",
        },
      ],
      pricePerBottle: 49,
      pricePerBottleText: "/Bottle",
      features: [
        "3 FREE BONUSES!",
        "FAST & FREE SHIPPING",
        "60 DAYS GUARANTEE",
      ],
      totalOriginal: "$79",
      totalDiscounted: "$69",
      bonus: {
        badge: "+2 BONUS",
        items: [
          {
            src: "/images/img_mockup_ebook_giant_monster.png",
            className: "w-[46px] sm:w-[92px]",
          },
          {
            src: "/images/img_mockup_ebook_the_lesbian.png",
            className: "w-[44px] sm:w-[88px] -ml-[22px] sm:-ml-[44px]",
          },
        ],
      },
      highlight: true,
      bgColor: "bg-primary-bg-light",
      borderColor: "border-border-error",
    },
    {
      id: "standard",
      label: "Standard",
      labelColor: "bg-secondary-bg-dark",
      bottles: 3,
      supply: "90 Day Supply",
      images: [{ src: "/images/img_03_2.png", className: "w-full" }],
      pricePerBottle: 59,
      pricePerBottleText: "/Bottle",
      features: [
        "1 FREE BONUSES!",
        "FAST & FREE SHIPPING",
        "60 DAYS GUARANTEE",
      ],
      totalOriginal: "$79",
      totalDiscounted: "$69",
      bonus: {
        badge: "+1 BONUS",
        items: [
          {
            src: "/images/img_mockup_ebook_giant_monster.png",
            className: "w-[53px] sm:w-[106px]",
          },
        ],
      },
      bgColor: "bg-secondary-bg",
      borderColor: "border-border-primary",
    },
  ];

  const handleOrderClick = (packageId: string) => {
    setSelectedPackage(packageId);
  };

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (!card) return;
    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const timer = setTimeout(() => {
      const card = container.children[1] as HTMLElement;
      if (card)
        container.scrollTo({
          left: card.offsetLeft - container.offsetLeft,
          behavior: "instant" as ScrollBehavior,
        });
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = (container.children[0] as HTMLElement)?.offsetWidth ?? 0;
    const index = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  return (
    <section
      id="product-packages"
      className="w-full bg-white py-12 sm:py-16 lg:py-[78px]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 sm:gap-[6px] mb-8 sm:mb-12 lg:mb-[62px]">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-center font-poppins leading-tight">
            <span className="text-text-primary">Order Your </span>
            <span className="bg-[linear-gradient(90deg,#ff4646_0%,#f6e323_100%)] bg-clip-text text-transparent">
              Garaherb
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-normal text-text-muted text-center font-inter">
            Select the package that fits your goals and save more:
          </p>
        </div>

        {/* Package Cards — carousel on mobile, grid on md+ */}

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 pb-4 no-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`flex-none w-[85vw] max-w-[340px] flex flex-col rounded-lg border ${pkg.borderColor} ${pkg.bgColor} overflow-hidden transition-all duration-300 snap-center ${
                  selectedPackage === pkg.id ? "ring-2 ring-primary-bg" : ""
                }`}
              >
                {/* === card content reused below === */}
                <div className={`w-full ${pkg.labelColor} py-1`}>
                  <p className="text-xl font-medium text-center text-text-white font-inter">
                    {pkg.label}
                  </p>
                </div>
                <div className="px-4 py-3 text-center">
                  <h3 className="text-[28px] font-bold text-text-subdued font-inter mb-1">
                    {pkg.bottles} BOTTLE
                  </h3>
                  <p className="text-xl font-medium text-text-muted font-inter">
                    {pkg.supply}
                  </p>
                </div>
                <div className="relative h-[180px] flex items-center justify-center px-2 my-2">
                  <div className="flex items-center justify-center">
                    {pkg.images.map((image, index) => (
                      <Image
                        key={index}
                        src={image.src}
                        alt={`${pkg.label} Package`}
                        width={278}
                        height={278}
                        className={`object-contain ${image.className}`}
                      />
                    ))}
                  </div>
                  {pkg.bonus && (
                    <div className="absolute bottom-2 right-2 flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1 bg-[linear-gradient(90deg,#ff4646_0%,#f6e323_100%)] px-2 py-[2px] rounded-xs">
                        <Image
                          src="/images/img_svgxmlbase64phn2zyb4bwxucz0iahr0cdovl3d3dy53my5vcmcvmjawmc9zdmciihdpzhropsiyncigagvpz2h0psiyncigdmlld0jved0imcawidi0idi0iibmawxspsjub25liibzdhjva2u9imn1cnjlbnrdb2xvciigc3ryb2tllxdpzhropsiyiibzdhjva2utbgluzwnhcd0icm91bmqiihn0cm9rzs1saw5la_1.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="w-4"
                        />
                        <span className="text-[9px] font-extrabold text-text-white uppercase font-inter">
                          VIP BONUS
                        </span>
                      </div>
                      <div className="flex items-start gap-1 relative">
                        <span className="bg-accent-success text-text-white text-[9px] font-black px-1 rounded-xs font-koh z-10">
                          {pkg.bonus.badge}
                        </span>
                        <div className="flex items-center -ml-[24px]">
                          {pkg.bonus.items.map((item, index) => (
                            <Image
                              key={index}
                              src={item.src}
                              alt=""
                              width={106}
                              height={140}
                              className={`object-contain ${item.className}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="px-4 flex flex-col gap-3 items-center">
                  <div className="text-center">
                    <span className="text-[42px] font-bold leading-none">
                      ${pkg.pricePerBottle}
                    </span>
                    <span className="text-lg font-normal text-text-muted">
                      {" "}
                      {pkg.pricePerBottleText}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    {pkg.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center gap-2"
                      >
                        <Image
                          src="/images/img_checkverde.svg"
                          alt=""
                          width={20}
                          height={20}
                          className="flex-shrink-0"
                        />
                        <span className="text-sm font-medium text-text-muted text-center font-inter">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-4 mt-4 flex flex-col gap-3 items-center">
                  <button
                    onClick={() => handleOrderClick(pkg.id)}
                    className="w-full cursor-pointer transition-transform duration-200 hover:scale-105"
                    type="button"
                    aria-label="Buy Now"
                  >
                    <Image
                      src="/images/img_image_1.png"
                      alt="Payment Methods"
                      width={314}
                      height={102}
                      className="w-full rounded-lg"
                    />
                  </button>
                  <Image
                    src="/images/img_pck_cards_1.png"
                    alt="Security Badges"
                    width={314}
                    height={28}
                    className="w-full"
                  />
                  <p className="text-xl font-medium text-center pb-4">
                    <span className="text-[#5e7885] line-through">
                      TOTAL: {pkg.totalOriginal}
                    </span>
                    <span className="text-text-info ml-2">
                      {pkg.totalDiscounted}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center shadow-md disabled:opacity-30"
            disabled={activeIndex === 0}
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={() =>
              scrollToIndex(Math.min(packages.length - 1, activeIndex + 1))
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center shadow-md disabled:opacity-30"
            disabled={activeIndex === packages.length - 1}
            aria-label="Next"
          >
            ›
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {packages.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === activeIndex ? "bg-primary-bg w-4" : "bg-border-medium"}`}
                aria-label={`Go to package ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`flex flex-col rounded-lg border ${pkg.borderColor} ${pkg.bgColor} overflow-hidden transition-all duration-300 ${
                pkg.highlight
                  ? "shadow-[0px_4px_40px_#00000019] scale-100 md:scale-105"
                  : ""
              } ${selectedPackage === pkg.id ? "ring-2 ring-primary-bg" : ""}`}
            >
              {/* Package Label */}
              <div className={`w-full ${pkg.labelColor} py-1 sm:py-[4px]`}>
                <p className="text-xl sm:text-2xl font-medium text-center text-text-white font-inter">
                  {pkg.label}
                </p>
              </div>

              {/* Package Info */}
              <div className="px-4 sm:px-6 lg:px-[56px] py-3 sm:py-4 text-center">
                <h3 className="text-[28px] sm:text-[32px] md:text-4xl font-bold text-text-subdued font-inter mb-1 sm:mb-2">
                  {pkg.bottles} BOTTLE
                </h3>
                <p className="text-xl sm:text-2xl font-medium text-text-muted font-inter">
                  {pkg.supply}
                </p>
              </div>

              {/* Product Images */}
              <div className="relative h-[180px] sm:h-[220px] lg:h-[280px] flex items-center justify-center px-2 sm:px-4 my-2 sm:my-4">
                <div className="flex items-center justify-center">
                  {pkg.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image.src}
                      alt={`${pkg.label} Package`}
                      width={278}
                      height={278}
                      className={`object-contain ${image.className}`}
                    />
                  ))}
                </div>

                {/* Bonus Badge */}
                {pkg.bonus && (
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 flex flex-col items-end gap-1 sm:gap-2">
                    <div className="flex items-center gap-1 sm:gap-2 bg-[linear-gradient(90deg,#ff4646_0%,#f6e323_100%)] px-2 sm:px-[26px] py-[2px] rounded-xs">
                      <Image
                        src="/images/img_svgxmlbase64phn2zyb4bwxucz0iahr0cdovl3d3dy53my5vcmcvmjawmc9zdmciihdpzhropsiyncigagvpz2h0psiyncigdmlld0jved0imcawidi0idi0iibmawxspsjub25liibzdhjva2u9imn1cnjlbnrdb2xvciigc3ryb2tllxdpzhropsiyiibzdhjva2utbgluzwnhcd0icm91bmqiihn0cm9rzs1saw5la_1.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="w-4 sm:w-5"
                      />
                      <span className="text-[9px] sm:text-xs font-extrabold text-text-white uppercase font-inter">
                        VIP BONUS
                      </span>
                    </div>
                    <div className="flex items-start gap-1 relative">
                      <span className="bg-accent-success text-text-white text-[9px] sm:text-xs font-black px-1 sm:px-[4px] rounded-xs border-none font-koh z-10">
                        {pkg.bonus.badge}
                      </span>
                      <div className="flex items-center -ml-[24px] sm:-ml-[32px]">
                        {pkg.bonus.items.map((item, index) => (
                          <Image
                            key={index}
                            src={item.src}
                            alt=""
                            width={106}
                            height={140}
                            className={`object-contain ${item.className}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Pricing */}
              <div className="px-4 sm:px-6 lg:px-[38px] flex flex-col gap-3 sm:gap-4 items-center">
                <div className="text-center">
                  <span className="text-[42px] sm:text-[52px] md:text-[64px] font-bold leading-none">
                    ${pkg.pricePerBottle}
                  </span>
                  <span className="text-lg sm:text-xl md:text-2xl font-normal text-text-muted">
                    {" "}
                    {pkg.pricePerBottleText}
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-2 w-full">
                  {pkg.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center gap-2 sm:gap-[10px]"
                    >
                      <Image
                        src="/images/img_checkverde.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="flex-shrink-0"
                      />
                      <span className="text-sm sm:text-base font-medium text-text-muted text-center font-inter">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Options */}
              <div className="px-4 sm:px-6 lg:px-[34px] mt-4 sm:mt-6 flex flex-col gap-3 sm:gap-[14px] items-center">
                <button
                  onClick={() => handleOrderClick(pkg.id)}
                  className="w-full cursor-pointer transition-transform duration-200 hover:scale-105 hover:animate-pulse hover:animate-none"
                  type="button"
                  aria-label="Buy Now"
                >
                  <Image
                    src="/images/img_image_1.png"
                    alt="Payment Methods"
                    width={314}
                    height={102}
                    className="w-full rounded-lg"
                  />
                </button>
                <Image
                  src="/images/img_pck_cards_1.png"
                  alt="Security Badges"
                  width={314}
                  height={28}
                  className="w-full"
                />
                <p className="text-xl sm:text-2xl font-medium text-center">
                  <span className="text-[#5e7885] line-through">
                    TOTAL: {pkg.totalOriginal}
                  </span>
                  <span className="text-text-info ml-2">
                    {pkg.totalDiscounted}
                  </span>
                </p>
              </div>

              {/* Order Button - Disabled for now, only for testing*/}
              {/* <div className="px-4 sm:px-6 py-4 sm:py-6 mt-auto">
                <Button
                  onClick={() => handleOrderClick(pkg.id)}
                  className="w-full"
                  layout_align_self="auto"
                  layout_gap="gap-2"
                  layout_width="w-full"
                  padding="px-4 py-2"
                  margin="m-0"
                  position="relative"
                  variant="primary"
                  size="md"
                >
                  <Image
                    src="/images/img_vector_black_900.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  Buy Now
                </Button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
