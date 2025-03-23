"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

type ButtonHamburguerProps = {
  items: {
    name: string
    url: string
  }[]
}

const ButtonHamburguer = ({ items: NavItems }: ButtonHamburguerProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      <button
        className="flex md:hidden flex-col justify-center items-center gap-1.5 w-12 h-12 rounded-md focus:outline-none"
        onClick={handleToggleMenu}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-1 bg-[#BF2C0B] rounded-full"
        ></motion.span>
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-1 bg-[#BF2C0B] rounded-full"
        ></motion.span>
        <motion.span
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-1 bg-[#BF2C0B] rounded-full"
        ></motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={handleToggleMenu}
            ></motion.div>

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-white z-50 shadow-xl border-l-2 border-[#BF2C0B]"
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-[#034C8C]">
                    <span className="text-[#BF2C0B]">YK</span>miniurl
                  </h2>
                </div>

                <nav className="flex-1 overflow-y-auto py-8">
                  <ul className="flex flex-col space-y-2">
                    {NavItems.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.url}
                          className="flex items-center px-8 py-4 text-xl font-medium text-gray-800 hover:bg-gray-50 hover:text-[#BF2C0B] transition-colors duration-300"
                          onClick={handleToggleMenu}
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

               
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default ButtonHamburguer

