import { motion } from "framer-motion"


interface PriveTermsSectionProps {
    icon: React.ReactNode
    title: string
    content: React.ReactNode
  }
  
  const PriveTermsSection = ({ icon, title, content }: PriveTermsSectionProps) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-sm p-6 md:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-[#034C8C] flex-shrink-0">
            {icon}
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-[#034C8C] mb-4">{title}</h2>
            <div className="text-gray-700">{content}</div>
          </div>
        </div>
      </motion.div>
    )
  }
  
  export default PriveTermsSection