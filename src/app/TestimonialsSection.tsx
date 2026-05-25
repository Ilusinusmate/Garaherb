"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";

const testimonials = [
  {
    id: 1,
    image: "/images/img_clientimage.png",
    quote:
      "Today I can satisfy her in bed every night and we are more in love than ever",
    name: "Michael R.",
    age: "52 years old",
  },
  {
    id: 2,
    image: "/images/img_clientimage_1.png.png",
    quote:
      "Today I can satisfy her in bed every night and we are more in love than ever",
    name: "Michael R.",
    age: "52 years old",
  },
  {
    id: 3,
    image: "/images/img_clientimage_2.png",
    quote:
      "Today I can satisfy her in bed every night and we are more in love than ever",
    name: "Michael R.",
    age: "52 years old",
  },
  {
    id: 4,
    image: "/images/img_clientimage_444x280.png",
    quote:
      "Today I can satisfy her in bed every night and we are more in love than ever",
    name: "Michael R.",
    age: "52 years old",
  },
];

export default function TestimonialsSection() {
  const handleOrderNow = () => {
    const productSection = document.getElementById("product-packages");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-[78px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold text-center text-[#111] leading-tight mb-10 sm:mb-12 lg:mb-14 max-w-2xl mx-auto font-inter">
          Over <span className="text-[#f7c417]">150,000</span> Men Reported
          Better Sexual Performance Using Garaherb
        </h2>

        {/* Desktop: 4-column grid with photo card */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-transform duration-200"
            >
              {/* Photo */}
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Text */}
              <div className="p-4 flex flex-col gap-2">
                <p className="text-sm font-normal text-gray-600 italic leading-relaxed font-inter">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-bold text-[#111] font-inter">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500 font-inter">{t.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: cards with circular avatar on top */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col items-center">
              {/* Avatar circle — overlaps the card below */}
              <div className="relative w-[80px] h-[80px] rounded-full border-2 border-[#f7c417] overflow-hidden z-10 mb-[-40px]">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Card */}
              <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] pt-12 pb-5 px-5 flex flex-col gap-2 text-center">
                <p className="text-sm font-normal text-gray-600 italic leading-relaxed font-inter">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-bold text-[#111] font-inter">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500 font-inter">{t.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button onClick={handleOrderNow} variant="primary" size="medium">
            <Image
              src="/images/img_vector_black_900.svg"
              alt=""
              width={24}
              height={24}
            />
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
}
