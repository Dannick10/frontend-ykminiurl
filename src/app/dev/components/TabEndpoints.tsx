"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { endpointsData } from "@/app/dev/data/EndpointsViews"
import { FaChevronDown, FaChevronUp, FaCopy, FaCode } from "react-icons/fa"

type Endpoint = {
  exampleRequest: string
}

type EndpointsProps = {
  msg: (endpoint: Endpoint) => void
}

const Endpoints = ({ msg }: EndpointsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleEndpoint = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const getMethodColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "get":
        return "bg-green-100 text-green-800"
      case "post":
        return "bg-blue-100 text-blue-800"
      case "put":
        return "bg-yellow-100 text-yellow-800"
      case "delete":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (text: string) => {
    if (text.includes("200") || text.includes("201") || text.includes("202")) {
      return "text-green-600"
    } else if (text.includes("400") || text.includes("401") || text.includes("403") || text.includes("404")) {
      return "text-yellow-600"
    } else if (text.includes("500")) {
      return "text-red-600"
    }
    return "text-gray-600"
  }

  return (
    <div className="space-y-4">
      {endpointsData.map((endpoint, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all"
        >
          <div
            className="flex items-center justify-between p-4 cursor-pointer select-none"
            onClick={() => toggleEndpoint(index)}
          >
            <div className="flex items-center gap-3 flex-1">
              <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getMethodColor(endpoint.type)}`}>
                {endpoint.type}
              </div>
              <h3 className="text-lg font-bold text-gray-800">{endpoint.title}</h3>
            </div>
            <div className="text-[#034C8C]">{openIndex === index ? <FaChevronUp /> : <FaChevronDown />}</div>
          </div>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-200"
              >
                <div className="p-6 space-y-4">
                  <p className="text-gray-700">{endpoint.subtitle}</p>

                  {endpoint.params && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Parâmetros:</h4>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <code className="text-sm text-gray-800">{endpoint.params}</code>
                      </div>
                    </div>
                  )}

                  {endpoint.exampleRequest && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-semibold text-gray-700">Exemplo de Requisição:</h4>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#034C8C] text-white text-xs font-medium"
                          onClick={() => msg(endpoint)}
                        >
                          <FaCopy className="text-xs" /> Copiar
                        </motion.button>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 overflow-x-auto">
                        <pre className="text-sm text-[#BF2C0B] font-mono whitespace-pre-wrap">
                          {endpoint.exampleRequest}
                        </pre>
                      </div>
                    </div>
                  )}

                  {endpoint.exampleResponse && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Exemplo de Resposta:</h4>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 overflow-x-auto">
                        <pre className="text-sm text-[#034C8C] font-mono whitespace-pre-wrap">
                          {endpoint.exampleResponse}
                        </pre>
                      </div>
                    </div>
                  )}

                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Códigos de Resposta:</h4>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <ul className="space-y-2">
                        {endpoint.responses.map((response, responseIndex) => (
                          <li key={responseIndex} className={`flex items-start gap-2 ${getStatusColor(response.text)}`}>
                            <FaCode className="mt-1 flex-shrink-0" />
                            <span>{response.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

export default Endpoints

