import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
  className?: string;
  target?: string;
  rel?: string;
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  variant = 'primary',
  icon = true,
  className = '',
  target,
  rel
}: AnimatedButtonProps) {
  const baseStyles = "inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-colors";

  const variants = {
    primary: "bg-[#f78800] text-white hover:bg-[#e67a00]",
    secondary: "bg-white/10 backdrop-blur-lg text-white hover:bg-white/20 border border-white/20",
    outline: "border-2 border-[#f78800] text-[#f78800] hover:bg-[#f78800] hover:text-white"
  };

  const buttonContent = (
    <>
      {children}
      {icon && <ArrowRight className="w-5 h-5" />}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 },
    className: `${baseStyles} ${variants[variant]} ${className}`
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} {...motionProps}>
      {buttonContent}
    </motion.button>
  );
}