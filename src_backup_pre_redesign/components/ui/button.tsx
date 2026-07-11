import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "gold-outline" | "gold-solid" | "plain";
  type?: "button" | "submit";
  disabled?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "gold-outline",
  type = "button",
  disabled = false,
  href,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-semibold text-[11px] tracking-[0.2em] uppercase px-8 py-4 rounded-full border luxury-transition focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    "gold-outline":
      "border-accent bg-white text-[#222222] hover:bg-accent hover:text-white",
    "gold-solid":
      "border-accent bg-accent text-white hover:bg-accent-hover hover:border-accent-hover",
    plain: "border-transparent bg-transparent text-[#222222] hover:text-accent",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedStyles}
    >
      {children}
    </button>
  );
};
