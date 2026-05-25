"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface Ingredient {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function IngredientsSection() {
  const handleOrderNow = () => {
    const productSection = document.getElementById("product-packages");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ingredients: Ingredient[] = [
    {
      id: 1,
      name: "Vitamina B3 (Niacina)",
      image: "/images/ingredient-1.png",
      description:
        "Essential for energy metabolism, it improves circulation and contributes to cellular energy production.",
    },
    {
      id: 2,
      name: "L-Citrulina",
      image: "/images/ingredient-2.png",
      description:
        "It increases blood flow, improves physical performance, and aids in muscle recovery.",
    },
    {
      id: 3,
      name: "L-Carnitina",
      image: "/images/ingredient-3.png",
      description:
        "It aids in energy production, reduces fatigue, and improves overall performance.",
    },
    {
      id: 4,
      name: "Maca Peruana",
      image: "/images/ingredient-4.png",
      description: "Known for increasing energy, libido, and physical stamina.",
    },
    {
      id: 5,
      name: "Pine (Pinus pinaster)",
      image: "/images/ingredient-5.png",
      description:
        "A powerful natural antioxidant that aids in circulation and vitality.",
    },
    {
      id: 6,
      name: "Saffron (Crocus sativus)",
      image: "/images/ingredient-6.png",
      description:
        "Premium ingredient associated with improved mood, focus, and emotional balance.",
    },
  ];

  return (
    <section className="w-full bg-secondary-bg py-12 sm:py-16 lg:py-[78px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 sm:gap-[6px] mb-8 sm:mb-12 lg:mb-[62px] px-4 sm:px-8 lg:px-[56px]">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-center leading-tight font-inter">
            <span className="text-text-primary">Every capsula of </span>
            <span className="bg-[linear-gradient(90deg,#ff4646_0%,#f6e323_100%)] bg-clip-text text-transparent">
              Garaherb contains:
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-normal text-text-muted text-center leading-relaxed font-inter max-w-4xl">
            an optimally dosed proprietary blend of synbiotics carefully mixed
            to complement one another into a one-of-a-kind powerful
            gut-supporting formula
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-[46px] items-stretch">
          {ingredients.map((ingredient, index) => (
            <div key={ingredient.id} className="flex flex-col items-center">
              {/* Ingredient Image with Badge */}
              <div className="relative mb-[-36px] sm:mb-[-36px] z-10">
                <div className="relative w-[100px] sm:w-[120px] md:w-[140px] aspect-square rounded-full border-2 border-border-highlight overflow-hidden">
                  <Image
                    src={ingredient.image}
                    alt={ingredient.name}
                    width={140}
                    height={140}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Ingredient Card */}
              <div className="w-full flex-1 bg-secondary-bg-accent rounded-md border border-border-medium p-6 sm:p-8 lg:p-[78px_40px] flex flex-col items-center gap-2 sm:gap-[4px] text-center pt-12 sm:pt-[78px]">
                <h3 className="text-xl sm:text-2xl font-medium text-text-white font-inter leading-6xl">
                  {ingredient.name}
                </h3>
                <p className="text-sm sm:text-base font-normal text-text-white font-inter leading-lg">
                  {ingredient.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleOrderNow}
            className="w-full sm:w-auto"
            layout_align_self="auto"
            layout_gap="8px"
            layout_width="auto"
            padding="12px 24px"
            margin="0"
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
      </div>
    </section>
  );
}
