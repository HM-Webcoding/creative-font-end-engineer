import { cn } from "@/utils/cn";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const PrimaryButton = ({ className, children }: Props) => {
  return (
    <button
      className={cn(
        "bg-radial-white-glow px-5 py-3 rounded-xl text-lg cursor-pointer text-white font-semibold custom-box-shadow custom-text-shadow transition duration-300 hover:bg-[#4b5bff]",
        className
      )}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
