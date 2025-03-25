import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
    >
      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <div className="text-[#034C8C] text-2xl">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
