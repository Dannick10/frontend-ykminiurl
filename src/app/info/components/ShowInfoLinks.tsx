"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BiSolidPointer } from "react-icons/bi";
import { FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";
import Alert from "@/components/Alert";
import useShortLink from "@/hooks/useShortLink";
import { formatRelativeTime } from "@/utils/DateConvert";
import Loading from "@/app/loading";
import AdComponent from "@/components/adsense";

type ShowInfoProps = {
  ShortUrl: string | undefined;
  clicks: number | undefined;
  date: string | undefined;
};

const ShowInfoLinks = ({ ShortUrl, clicks, date }: ShowInfoProps) => {
  const { msg, Setmsg, loading } = useShortLink();
  const [dateFormat] = useState(formatRelativeTime(date));

  const fullUrl = `https://ykminiurl.vercel.app/redirect?link=${ShortUrl}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-16 md:py-20">
      {msg.status && (
        <Alert
          title={msg.title}
          subtitle={msg.subtitle}
          colors={msg.color}
          handleCloseMsg={() =>
            Setmsg({ title: "", subtitle: "", color: "green", status: false })
          }
        />
      )}

      {loading && <Loading />}

      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#034C8C] mb-4">
            Estatísticas do Link
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja informações detalhadas sobre o desempenho do seu link
            encurtado.
          </p>
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-6 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <BiSolidPointer className="text-[#034C8C] text-2xl" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#BF2C0B] mb-1">
                    {clicks || 0}
                  </h3>
                  <p className="text-gray-600">Total de Cliques</p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 flex flex-col items-center justify-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <FaCalendarAlt className="text-[#034C8C] text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-[#034C8C] mb-1">
                    {dateFormat}
                  </h3>
                  <p className="text-gray-600">Data de Criação</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Seu link encurtado:
                </h3>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 break-all">
                  <code className="text-[#BF2C0B] font-medium">{fullUrl}</code>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={fullUrl || ""}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#034C8C] text-white font-medium hover:bg-[#023a6a] transition-all"
                  >
                    Acessar Link <FaExternalLinkAlt className="text-sm" />
                  </motion.button>
                </Link>

                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#034C8C] text-[#034C8C] font-medium hover:bg-blue-50 transition-all"
                  >
                    Encurtar Novo Link
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <div className="mt-8">
              <AdComponent
                data-ad-slot="2645846225"
                data-full-width-responsive="true"
                data-ad-layout="in-article"
                data-ad-format="fluid"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
              <Image
                src="/database.svg"
                alt="Análise de dados"
                width={450}
                height={450}
                className="relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ShowInfoLinks;
