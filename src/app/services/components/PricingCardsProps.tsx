import { motion } from "framer-motion";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  popular?: boolean;
  delay: number;
}

const PricingCard = ({
  title,
  subtitle,
  price,
  features,
  popular = false,
  delay,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-xl shadow-md overflow-hidden border ${
        popular ? "border-[#BF2C0B]" : "border-gray-200"
      } relative`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-[#BF2C0B] text-white text-xs font-bold py-1 px-3 rounded-bl-lg">
          Mais Popular
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{subtitle}</p>
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-500">INVESTIMENTO</p>
          <p className="text-2xl font-bold text-[#034C8C]">{price}</p>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <Link target="_blank" href="https://www.linkedin.com/in/futurodevdaniel/">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 rounded-lg font-medium ${
              popular
                ? "bg-[#BF2C0B] text-white hover:bg-[#a82609]"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            } transition-colors`}
          >
            Solicitar Orçamento
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default PricingCard;
