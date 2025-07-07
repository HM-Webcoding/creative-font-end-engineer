import { cn } from "@/utils/cn";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const IconButton = ({ className, children }: Props) => {
  return (
    <button
      className={cn(
        "primary-gradient flex gap-1.5 items-center justify-center px-4 py-3 rounded-full text-lg cursor-pointer text-white font-semibold inset-double-shadow custom-text-shadow",
        className
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
