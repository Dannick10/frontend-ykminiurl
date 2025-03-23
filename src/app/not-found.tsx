"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Custom404() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl"
      >
        <div className="relative w-full h-[300px] md:h-[400px] mb-8">
          <Image 
            src="/error404.svg" 
            alt="Página não encontrada" 
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-[#034C8C] mb-4">
          Oops! Página não encontrada
        </h1>
        
        <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
          Parece que você tentou acessar uma página que não existe ou foi movida.
        </p>
        
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#BF2C0B] text-white font-medium rounded-full shadow-lg hover:bg-[#a82609] transition-all"
          >
            Voltar para a página inicial
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
