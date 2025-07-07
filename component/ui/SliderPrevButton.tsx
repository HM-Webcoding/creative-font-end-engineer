import { cn } from "@/utils/cn";
import React from "react";

interface SliderPrevButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

const SliderPrevButton: React.FC<SliderPrevButtonProps> = ({
  onClick,
  className = "",
  children,
}) => (
  <button
    onClick={onClick}
    className={cn(
      `
      w-15 h-15 rounded-full flex justify-center items-center border-2 border-[var(--primaryColor)]/20 transition-all duration-500 delay-75 overflow-hidden bg-clip-padding hover:text-white hover:bg-gradient-to-b hover:from-[#FE71B9] hover:to-[#708BFD] cursor-pointer
    `,
      className
    )}
  >
    {children}
  </button>
);

export default SliderPrevButton;
