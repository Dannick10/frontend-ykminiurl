"use client"

import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { motion, AnimatePresence } from "framer-motion"

type AccordionProps = {
  dataBase: { title: string; subtitle: string }[]
}

const Arcodion = ({ dataBase }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {dataBase.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <h3 className="text-lg font-bold text-[#034C8C]">{item.title}</h3>
            <div
              className={`text-[#BF2C0B] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
            >
              <IoIosArrowDown />
            </div>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                id={`accordion-content-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-200"
              >
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-700">{item.subtitle}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

export default Arcodion

