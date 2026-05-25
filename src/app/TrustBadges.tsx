'use client';
import Image from'next/image';

export default function TrustBadges() {
  const badges = [
    {
      icon: '/images/img_security_symbol.svg',
      title: 'Secure & Discreet\nPayment',
      width: 48,
      height: 48
    },
    {
      icon: '/images/img_guaranteesymbol.svg',
      title: '60-DAY Guarantee',
      width: 48,
      height: 48
    },
    {
      icon: '/images/img_shipingsymbol.svg',
      title: 'One-Time Fee,\nNo Autoship',
      width: 56,
      height: 56
    },
    {
      icon: '/images/img_mask_group.svg',
      title: 'Fórmula 100% natural',
      width: 48,
      height: 48
    }
  ]

  return (
    <section className="w-full bg-primary-bg">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-6 sm:py-7">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`flex items-center justify-center gap-3 sm:gap-4 py-2 sm:py-3 ${
                index < badges.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-border-medium' : ''
              }`}
            >
              <Image
                src={badge.icon}
                alt=""
                width={badge.width}
                height={badge.height}
                className="flex-shrink-0 w-10 sm:w-12"
              />
              <p className="text-base sm:text-lg md:text-xl font-medium text-text-primary text-center sm:text-left font-poppins whitespace-pre-line leading-5 sm:leading-5xl">
                {badge.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}