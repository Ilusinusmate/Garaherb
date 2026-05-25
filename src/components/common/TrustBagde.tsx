'use client';
import { twMerge } from 'tailwind-merge';
import { HTMLAttributes, ReactNode } from 'react';
import Image from'next/image';

interface TrustBadgeProps extends HTMLAttributes<HTMLDivElement> {
  icon?: string | ReactNode
  title: string
  description?: string
  variant?: 'default' | 'compact' | 'minimal'
  iconSize?: 'small' | 'medium' | 'large'
}

const TrustBadge = ({
  icon,
  title,
  description,
  variant = 'default',
  iconSize = 'medium',
  className,
  ...props
}: TrustBadgeProps) => {
  // Icon size configurations
  const iconSizeClasses = {
    small: 'w-8 h-8 sm:w-10 sm:h-10',
    medium: 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14',
    large: 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20',
  }

  // Variant styles
  const variantClasses = {
    default: 'flex-col items-center text-center gap-2 sm:gap-3 p-4 sm:p-6',
    compact: 'flex-row items-center text-left gap-3 sm:gap-4 p-3 sm:p-4',
    minimal: 'flex-row items-center text-left gap-2 sm:gap-3 p-2 sm:p-3',
  }

  const renderIcon = () => {
    if (!icon) return null

    if (typeof icon === 'string') {
      return (
        <div className={twMerge('relative flex-shrink-0', iconSizeClasses[iconSize])}>
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      )
    }

    return <div className="flex-shrink-0">{icon}</div>
  }

  return (
    <div
      className={twMerge(
        'inline-flex transition-all duration-200',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {renderIcon()}
      
      <div className="flex flex-col gap-1">
        <h3 
          className="text-sm sm:text-base md:text-lg font-semibold text-text-primary leading-md sm:leading-lg"
          style={{ fontFamily: 'Inter' }}
        >
          {title}
        </h3>
        
        {description && (
          <p 
            className="text-xs sm:text-sm text-text-muted leading-sm sm:leading-base"
            style={{ fontFamily: 'Inter' }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default TrustBadge

// Preset trust badge components for common use cases
export const SecurePaymentBadge = (props: Partial<TrustBadgeProps>) => (
  <TrustBadge
    title="Secure Payment"
    description="256-bit SSL encryption"
    icon={
      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-accent-success" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    }
    {...props}
  />
)

export const MoneyBackGuaranteeBadge = (props: Partial<TrustBadgeProps>) => (
  <TrustBadge
    title="60-Day Money Back Guarantee"
    description="100% satisfaction guaranteed"
    icon={
      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-primary-bg" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      </svg>
    }
    {...props}
  />
)

export const OneTimeFeeBadge = (props: Partial<TrustBadgeProps>) => (
  <TrustBadge
    title="One-Time Fee"
    description="No subscriptions or hidden charges"
    icon={
      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-text-info" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
      </svg>
    }
    {...props}
  />
)

export const NaturalFormulaBadge = (props: Partial<TrustBadgeProps>) => (
  <TrustBadge
    title="100% Natural Formula"
    description="Plant-based ingredients"
    icon={
      <svg className="w-10 h-10 sm:w-12 sm:h-12 text-accent-success" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
      </svg>
    }
    {...props}
  />
)