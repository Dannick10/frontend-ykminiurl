"use client"
import { twMerge } from "tailwind-merge"
import clsx from "clsx"
import { IoMdClose } from "react-icons/io"
import { motion } from "framer-motion"
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa"

interface AlertProps {
  title: string
  subtitle: string
  colors: "green" | "red" | "yellow"
  handleCloseMsg: () => void
}

const Alert = ({ title, subtitle, colors, handleCloseMsg }: AlertProps) => {
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
  }

  const colorsApplied = colorMap[colors]

  const getIcon = () => {
    switch (colors) {
      case "green":
        return <FaCheckCircle className={`h-6 w-6 ${colorsApplied.icon}`} />
      case "red":
        return <FaExclamationTriangle className={`h-6 w-6 ${colorsApplied.icon}`} />
      case "yellow":
        return <FaExclamationTriangle className={`h-6 w-6 ${colorsApplied.icon}`} />
      default:
        return <FaInfoCircle className={`h-6 w-6 ${colorsApplied.icon}`} />
    }
  }

  return (
    <motion.div
      initial={{ y: "-100px" }}
      animate={{ y: 0 }}
      exit={{ y: "-100px" }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
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
          "z-50",
          "shadow-md",
        ),
      )}
      role="alert"
    >
      <div className="container mx-auto max-w-6xl relative">
        <div className="flex items-start">
          <div className="py-1">{getIcon()}</div>
          <div className="ml-4">
            <p className="font-bold text-lg">{title}</p>
            <p className="text-sm mt-1">{subtitle}</p>
          </div>
          <button
            onClick={handleCloseMsg}
            className="absolute right-0 top-0 p-2 hover:bg-black/10 rounded-full transition-colors"
            aria-label="Fechar alerta"
          >
            <IoMdClose className="text-2xl" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Alert

