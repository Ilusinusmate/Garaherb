"use client";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes, ReactNode, CSSProperties } from "react";

const buttonClasses = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase rounded-full whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(180deg,#FFFE4A_0%,#FFD901_100%)] text-[#0d0d11] hover:brightness-105 hover:scale-105 active:scale-95 focus:ring-[#FFD901]",
        secondary:
          "bg-secondary-bg text-text-primary border-2 border-border-primary hover:bg-secondary-bg-light focus:ring-border-primary",
        outline:
          "border-2 border-border-primary text-text-primary bg-transparent hover:bg-secondary-bg-light focus:ring-border-primary",
      },
      size: {
        small: "text-lg px-4 py-2 leading-xl",
        medium: "text-2xl px-6 py-3 leading-6xl",
        large: "text-3xl px-8 py-4 leading-7xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

interface ButtonProps
  extends
    ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {
  // Required parameters with defaults
  text?: string;
  text_font_size?: string;
  text_font_family?: string;
  text_font_weight?: string;
  text_line_height?: string;
  text_text_align?: string;
  text_text_transform?: string;
  text_color?: string;
  fill_background?: string;
  border_border_bottom?: string;
  border_border_radius?: string;

  // Optional parameters
  layout_align_self?: string;
  layout_gap?: string;
  layout_width?: string;
  padding?: string;
  margin?: string;
  position?: string;

  // Standard React props
  children?: ReactNode;
}

const Button = ({
  // Required parameters with defaults
  text = "Order Now",
  text_font_size = "text-2xl",
  text_font_family = "Inter",
  text_font_weight = "font-semibold",
  text_line_height = "leading-6xl",
  text_text_align = "left",
  text_text_transform = "uppercase",
  text_color = "text-text-secondary",
  fill_background = "linear-gradient(180deg,#f7c417_0%,#e6b305_100%)",
  border_border_bottom = "6px solid #8e7c02",
  border_border_radius = "rounded-xl",

  // Optional parameters (no defaults)
  layout_align_self,
  layout_gap,
  layout_width,
  padding,
  margin,
  position,

  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}: ButtonProps) => {
  // Safe validation for optional parameters
  const hasValidAlignSelf =
    layout_align_self &&
    typeof layout_align_self === "string" &&
    layout_align_self.trim() !== "";
  const hasValidGap =
    layout_gap && typeof layout_gap === "string" && layout_gap.trim() !== "";
  const hasValidWidth =
    layout_width &&
    typeof layout_width === "string" &&
    layout_width.trim() !== "";
  const hasValidPadding =
    padding && typeof padding === "string" && padding.trim() !== "";
  const hasValidMargin =
    margin && typeof margin === "string" && margin.trim() !== "";
  const hasValidPosition =
    position && typeof position === "string" && position.trim() !== "";

  const optionalClasses = [
    hasValidAlignSelf ? `self-${layout_align_self}` : "",
    hasValidGap ? `gap-[${layout_gap}]` : "",
    hasValidWidth ? `w-[${layout_width}]` : "",
    hasValidPadding ? `p-[${padding}]` : "",
    hasValidMargin ? `m-[${margin}]` : "",
    hasValidPosition ? position : "",
  ]
    .filter(Boolean)
    .join(" ");

  // Build custom styles for non-Tailwind properties
  const customStyles: CSSProperties = {
    fontFamily: "Inter",
    fontSize: "clamp(16px, 2vw, 24px)",
    fontWeight: 600,
    paddingTop: "18px",
    paddingBottom: "18px",
    paddingLeft: "clamp(24px, 7vw, 104px)",
    paddingRight: "clamp(24px, 7vw, 104px)",
    boxShadow: "0px 4px 16px rgba(142, 124, 2, 0.7)",
    borderBottom: "6px solid #8E7C02",
    boxSizing: "border-box",
    background:
      variant === "primary" || !variant
        ? "linear-gradient(180deg,#FFFE4A 0%,#FFD901 100%)"
        : undefined,
  };

  // Build Tailwind classes for styling
  const styleClasses = [
    text_font_size,
    text_font_weight,
    text_line_height,
    `text-${text_text_align}`,
    text_text_transform,
    !variant ? text_color : "",
    !variant ? border_border_radius : "",
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    if (typeof onClick === "function") {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={customStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        styleClasses,
        optionalClasses,
        className,
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;
