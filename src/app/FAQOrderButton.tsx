"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function FAQOrderButton() {
  const handleOrderNow = () => {
    const productSection = document.getElementById("product-packages");
    if (productSection) productSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Button onClick={handleOrderNow} variant="primary" size="medium">
      <Image src="/images/img_vector_black_900.svg" alt="" width={22} height={22} />
      Order Now
    </Button>
  );
}
