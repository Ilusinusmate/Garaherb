'use client';
import Image from'next/image';
 import Button from'@/components/ui/Button';

export default function HeroSection() {
  const handleOrderNow = () => {
    const productSection = document.getElementById('product-packages')
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const benefits = [
    { text: 'Boost Energy & Stamina' },
    { text: 'Enhance Performance' },
    { text: '100% Natural Formula' },
    { text: '60-Day Guarantee' }
  ]

  return (
    <section className="w-full bg-[linear-gradient(45deg,#0b0b0b_0%,#190d0b_50%,#aa2315_100%)] relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[600px] sm:min-h-[700px] lg:min-h-[778px] relative">
          {/* Background Effects */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/img_vector.png"
              alt=""
              fill
              className="object-cover opacity-30"
            />
            <Image
              src="/images/img_mesheffect.png"
              alt=""
              width={1064}
              height={506}
              className="absolute top-0 left-0 w-full sm:w-[80%] lg:w-[54%] opacity-40"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-[52%] flex flex-col gap-4 sm:gap-6 items-center lg:items-start text-center lg:text-left z-10 py-8 sm:py-12 lg:py-0 lg:pl-[184px] px-4 my-6">
            {/* Limited Offer Badge */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/images/img_flame_fire.png"
                alt=""
                width={16}
                height={30}
                className="w-3 sm:w-4 h-auto"
              />
              <span className="text-sm sm:text-base font-medium text-text-white-transparent font-inter">
                LIMITED TIME OFFER
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-tight font-inter">
              <span className="text-text-white">
                The Natural Solution<br className="hidden sm:block" /> That is{' '}
              </span>
              <span className="bg-[linear-gradient(90deg,#ff4646_0%,#f6e323_100%)] bg-clip-text text-transparent">
                Helping Men Reclaim Their Vitality
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-full lg:max-w-[90%]">
              <span className="text-text-white-transparent font-normal font-inter">
                Thousands of men are{' '}
              </span>
              <span className="text-text-white font-semibold font-inter">
                experiencing renewed energy, confidence, and performance with this powerful natural formula.
              </span>
            </p>

            {/* Benefits Grid */}
            <div className="w-full flex flex-col gap-4 sm:gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center justify-center lg:justify-start gap-2">
                    <Image
                      src="/images/img_checkverde.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="flex-shrink-0"
                    />
                    <span className="text-base sm:text-lg font-medium text-text-white font-inter">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleOrderNow}
              className="mt-4 sm:mt-6 w-full sm:w-auto"
              layout_align_self="auto"
              layout_gap="8px"
              layout_width="auto"
              padding="16px 32px"
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

          {/* Product Image Section */}
          <div className="w-full lg:w-[48%] relative flex items-center justify-center z-10 py-8 lg:py-0">
            <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[692px] aspect-square">
              {/* Main Product Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/img_01_1.png"
                  alt="GaraHerb Product Bottle"
                  width={692}
                  height={692}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>

              <Image
                src="/images/img_vector_2.png"
                alt=""
                width={508}
                height={532}
                className="absolute -top-[50px] sm:-top-[80px] right-0 w-[50%] sm:w-[60%] lg:w-auto opacity-80 -z-10"
              />
              {/* Decorative Elements */}
              <Image
                src="/images/img_frame_2647.png"
                alt=""
                width={1496}
                height={1392}
                className="absolute top-0 right-0 w-full opacity-40"
              />
              <Image
                src="/images/img_pill_capsule_o03.png"
                alt=""
                width={104}
                height={110}
                className="absolute bottom-[15%] right-[10%] w-[15%] sm:w-[18%] animate-bounce"
              />
              <Image
                src="/images/img_folha2.png"
                alt=""
                width={214}
                height={374}
                className="absolute top-[20%] right-[5%] w-[30%] sm:w-[34%] opacity-70"
              />
              <Image
                src="/images/img_pill_capsule_o03_96x92.png"
                alt=""
                width={92}
                height={96}
                className="absolute bottom-[20%] left-[20%] w-[14%] sm:w-[16%] animate-bounce"
                style={{ animationDelay: '0.3s' }}
              />
              <Image
                src="/images/img_folha1.png"
                alt=""
                width={290}
                height={512}
                className="absolute bottom-0 left-0 w-[25%] sm:w-[28%] opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}