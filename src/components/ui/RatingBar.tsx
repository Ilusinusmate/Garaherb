'use client';
import { twMerge } from 'tailwind-merge';
import { HTMLAttributes } from 'react';

interface RatingBarProps extends HTMLAttributes<HTMLDivElement> {
  // Rating configuration
  rating?: number
  maxRating?: number
  size?: 'small' | 'medium' | 'large'
  showLabel?: boolean
  readonly?: boolean
  
  // Optional parameters
  layout_width?: string
  position?: string
  
  // Callback for interactive rating
  onRatingChange?: (rating: number) => void
}

const RatingBar = ({
  rating = 5,
  maxRating = 5,
  size = 'medium',
  showLabel = false,
  readonly = true,
  layout_width,
  position,
  onRatingChange,
  className,
  ...props
}: RatingBarProps) => {
  // Safe validation for optional parameters
  const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width.trim() !== ''
  const hasValidPosition = position && typeof position === 'string' && position.trim() !== ''

  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : '',
    hasValidPosition ? position : '',
  ].filter(Boolean).join(' ')

  // Size configurations
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  }

  const starSize = sizeClasses[size]

  const handleStarClick = (selectedRating: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(selectedRating)
    }
  }

  const renderStars = () => {
    const stars = []
    
    for (let i = 1; i <= maxRating; i++) {
      const isFilled = i <= rating
      const isPartial = !Number.isInteger(rating) && i === Math.ceil(rating)
      const partialPercentage = isPartial ? ((rating % 1) * 100) : 0

      stars.push(
        <button
          key={i}
          type="button"
          onClick={() => handleStarClick(i)}
          disabled={readonly}
          className={twMerge(
            'relative focus:outline-none transition-transform duration-150',
            !readonly && 'hover:scale-110 cursor-pointer',
            readonly && 'cursor-default'
          )}
          aria-label={`Rate ${i} out of ${maxRating} stars`}
        >
          {/* Empty star background */}
          <svg
            className={twMerge(starSize, 'text-border-medium')}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          
          {/* Filled star overlay */}
          {(isFilled || isPartial) && (
            <svg
              className={twMerge(starSize, 'absolute top-0 left-0 text-primary-bg')}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              style={isPartial ? {
                clipPath: `inset(0 ${100 - partialPercentage}% 0 0)`
              } : undefined}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )}
        </button>
      )
    }
    
    return stars
  }

  return (
    <div
      className={twMerge(
        'inline-flex items-center gap-1',
        optionalClasses,
        className
      )}
      role="img"
      aria-label={`Rating: ${rating} out of ${maxRating} stars`}
      {...props}
    >
      <div className="flex items-center gap-[2px]">
        {renderStars()}
      </div>
      
      {showLabel && (
        <span className="ml-2 text-sm text-text-muted font-medium">
          {rating.toFixed(1)} / {maxRating}
        </span>
      )}
    </div>
  )
}

export default RatingBar