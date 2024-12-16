import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"
interface AlertProps {
  title: string;
  subtitle: string;
  colors: "green" | "red" | "yellow";
  handleCloseMsg: () => void;
}

const Alert = ({ title, subtitle, colors,handleCloseMsg }: AlertProps) => {
  const colorMap = {
    green: {
      bg: "bg-green-100",
      border: "border-green-500",
      text: "text-green-900",
      icon: "text-green-500",
    },
    red: {
      bg: "bg-red-100",
      border: "border-red-500",
      text: "text-red-900",
      icon: "text-red-500",
    },
    yellow: {
      bg: "bg-yellow-100",
      border: "border-yellow-500",
      text: "text-yellow-900",
      icon: "text-yellow-500",
    },
  };

  const colorsApplied = colorMap[colors];

  return (
    <motion.div
       initial={{y: "-100px"}}
       animate={{y: 0}}
       exit={{y: "-100px"}}
       transition={{type: "spring", duration: 0.5}}
      className={twMerge(
        clsx(
          colorsApplied.bg,
          colorsApplied.border,
          colorsApplied.text,
          "border-t-4",
          "rounded-b",
          "fixed",
          "w-full",
          "top-0",
          "px-4",
          "py-3",
          "z-30",
          "shadow-md",
        )
      )}
      role="alert"
    
    >
      <div className="flex">
        <div className="py-1">
          <svg
            className={twMerge(
              clsx(
                colorsApplied.icon,
                "fill-current",
                "h-6",
                "w-6",
                "mr-4"
              )
            )}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm">{subtitle}</p>
        </div>
      </div>
            <div className="absolute right-0 top-0 text-[30px]" onClick={handleCloseMsg}>
      <IoMdClose />

            </div>

    </motion.div>
  );
};

export default Alert;
