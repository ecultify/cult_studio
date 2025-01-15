import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;  // Changed from href to to for React Router
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
  external?: boolean; // Add this to handle external links
}

export default function Button({
  children,
  to,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  className = '',
  onClick,
  external = false
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-[#f78800] text-white hover:bg-[#e67a00] shadow-lg hover:shadow-xl",
    secondary: "bg-[#0066CC] text-white hover:bg-[#0052a3] shadow-lg hover:shadow-xl",
    outline: "border-2 border-[#f78800] text-[#f78800] hover:bg-[#f78800] hover:text-white",
    ghost: "bg-white/20 backdrop-blur-lg text-white hover:bg-white/30"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  };

  const buttonContent = (
    <>
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    className: `${baseStyles} ${variants[variant]} ${sizes[size]} rounded-lg ${className}`
  };

  // Handle different types of buttons/links
  if (to) {
    if (external) {
      // External link using regular anchor tag
      return (
        <motion.a href={to} target="_blank" rel="noopener noreferrer" {...motionProps}>
          {buttonContent}
        </motion.a>
      );
    }
    // Internal link using React Router's Link
    return (
      <motion.div {...motionProps}>
        <Link to={to} className="flex items-center">
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  // Regular button
  return (
    <motion.button onClick={onClick} {...motionProps}>
      {buttonContent}
    </motion.button>
  );
}