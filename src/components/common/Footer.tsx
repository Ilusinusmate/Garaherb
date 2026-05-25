'use client';
import { twMerge } from 'tailwind-merge';
 import Link from'next/link';

interface FooterProps {
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  const navigationLinks = [
    { text: 'Terms & Conditions', href: '/terms' },
    { text: 'Privacy Policy', href: '/privacy' },
    { text: 'Contact', href: '/contact' },
    { text: 'Disclaimer', href: '/disclaimer' },
    { text: 'Reference', href: '/reference' },
    { text: 'Refund', href: '/refund' },
    { text: 'Shipping', href: '/shipping' },
  ]

  return (
    <footer 
      className={twMerge('w-full', className)}
      role="contentinfo"
    >
      {/* Navigation Links Section */}
      <div className="w-full bg-primary-bg">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav 
            className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 py-6 sm:py-7"
            aria-label="Footer navigation"
          >
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-base sm:text-lg md:text-xl font-normal text-text-primary text-center hover:underline focus:outline-none focus:ring-2 focus:ring-border-primary transition-all duration-200"
                style={{ fontFamily: 'Inter' }}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Disclaimer and Copyright Section */}
      <div className="w-full bg-secondary-bg-dark">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Disclaimer */}
          <div className="flex justify-center items-center pt-8 sm:pt-10 pb-6 sm:pb-8 px-4">
            <p 
              className="text-sm sm:text-base font-normal text-text-highlight text-center leading-md sm:leading-lg max-w-4xl"
              style={{ fontFamily: 'Inter' }}
            >
              These statements have not been evaluated by the Food and Drug Administration. 
              This product is not intended to diagnose, treat, cure, or prevent any disease. 
              The information provided on this site is for informational purposes only and is 
              not intended as a substitute for advice from your physician or other health care 
              professional or any information contained on or in any product label or packaging. 
              You should not use the information on this site for diagnosis or treatment of any 
              health problem or for prescription of any medication or other treatment. You should 
              consult with a healthcare professional before starting any diet, exercise or 
              supplementation program, before taking any medication, or if you have or suspect 
              you might have a health problem.
            </p>
          </div>

          {/* Copyright and Address */}
          <div className="flex flex-col justify-center items-center gap-2 py-6 sm:py-8 bg-secondary-bg px-4">
            <p 
              className="text-base sm:text-lg font-normal text-text-secondary text-center"
              style={{ fontFamily: 'Inter' }}
            >
              Copyright 2024 © Kymezol. All Rights Reserved.
            </p>
            <p 
              className="text-sm sm:text-base font-normal text-text-secondary text-center"
              style={{ fontFamily: 'Inter' }}
            >
              Kymezol LABS, LLC 401 RYLAND ST STE 200 A, RENO, NV 89502
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer