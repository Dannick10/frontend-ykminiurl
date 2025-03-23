"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaCopy, FaBook, FaCode, FaLock, FaRocket } from "react-icons/fa"
import logo from "/public/logo.svg"
import Endpoints from "./components/TabEndpoints"
import useShortLink from "@/hooks/useShortLink"
import Alert from "@/components/Alert"
import { copyToClipboard } from "@/utils/copyBoard"

const DevPage = () => {
  const { setMessage, msg, Setmsg } = useShortLink()

  const apiFeatures = [
    {
      title: "Gratuidade",
      subtitle: "Use todos os recursos sem pagar nada.",
    },
    {
      title: "Facilidade",
      subtitle: "Endpoints simples e bem estruturados.",
    },
    {
      title: "Segurança",
      subtitle: "Links curtos e seguros para compartilhar.",
    },
    {
      title: "Confiabilidade",
      subtitle: "Retornos claros para facilitar o tratamento de erros no cliente.",
    },
  ]

  return (
    <>
      {msg.status && (
        <div className="fixed top-0 z-50 w-full">
          <Alert
            title={msg.title}
            subtitle={msg.subtitle}
            colors={msg.color}
            handleCloseMsg={() =>
              Setmsg({
                title: "",
                subtitle: "",
                color: "green",
                status: false,
              })
            }
          />
        </div>
      )}

      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        {/* Hero Section */}
        <section className="container mx-auto py-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Image src={logo || "/placeholder.svg"} fill className="object-contain" alt="YKMiniURL Logo" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#034C8C]">
                  API <span className="text-[#BF2C0B]">Documentação</span>
                </h1>
                <p className="text-gray-600">Integre o YKMiniURL em suas aplicações</p>
              </div>
            </div>

            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1 mb-4 bg-blue-100 text-[#034C8C] rounded-full text-sm font-medium">
                Para Desenvolvedores
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Bem-vindo à documentação da YKMiniURL! Nossa API é 100% gratuita e foi desenvolvida para facilitar o
                gerenciamento e o compartilhamento de links de forma eficiente e segura. Sem custos e sem complicações,
                você pode aproveitar todos os recursos disponíveis.
              </p>
            </div>
          </motion.div>

          {/* API Base URL Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-[#034C8C] text-white p-4">
                <h2 className="font-bold">Base URL</h2>
              </div>
              <div className="flex items-center">
                <div
                  className="p-4 border-r border-gray-200 hover:bg-gray-100 cursor-pointer transition-colors"
                  onClick={() => {
                    copyToClipboard("https://backend-ykminiurl.onrender.com/")
                    setMessage("sucesso", "O link foi copiado para sua área de transferência", "green", true)
                  }}
                >
                  <FaCopy className="text-gray-500" />
                </div>
                <code className="p-4 flex-1 font-mono text-[#BF2C0B]">https://backend-ykminiurl.onrender.com/</code>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Getting Started Section */}
        <section className="container mx-auto py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#034C8C] mb-6">Como começar</h2>

              <ol className="list-decimal pl-5 space-y-4 mb-6">
                <li className="text-gray-700">
                  Consulte os endpoints detalhados abaixo para entender como consumir a API.
                </li>
                <li className="text-gray-700">
                  Use ferramentas como Postman ou bibliotecas HTTP de sua linguagem preferida para realizar testes.
                </li>
                <li className="text-gray-700">
                  Implemente a integração e otimize seu sistema com links curtos e seguros.
                </li>
              </ol>

              <div className="bg-blue-50 border-l-4 border-[#034C8C] p-4 rounded">
                <p className="font-medium text-[#034C8C]">
                  Se você tiver dúvidas ou precisar de suporte, entre em contato!
                </p>
              </div>
            </motion.div>

            {/* API Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-[#034C8C] mb-6">Recursos da API</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <FaRocket className="text-[#034C8C] text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Gratuidade</h3>
                  <p className="text-gray-600">Use todos os recursos sem pagar nada.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <FaCode className="text-[#034C8C] text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Facilidade</h3>
                  <p className="text-gray-600">Endpoints simples e bem estruturados.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <FaLock className="text-[#034C8C] text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Segurança</h3>
                  <p className="text-gray-600">Links curtos e seguros para compartilhar.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <FaBook className="text-[#034C8C] text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Confiabilidade</h3>
                  <p className="text-gray-600">Retornos claros para facilitar o tratamento de erros.</p>
                </div>
              </div>
            </motion.div>

            {/* Swagger Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#034C8C] mb-4">Documentação Interativa</h2>
              <p className="text-gray-700 mb-6">
                A API possui uma documentação interativa no Swagger, onde você pode visualizar todos os endpoints
                disponíveis, seus parâmetros e testar diretamente as requisições.
              </p>

              <Link href="https://backend-ykminiurl.onrender.com/docs/" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#BF2C0B] text-white font-bold text-lg hover:bg-[#a82609] transition-all"
                >
                  <FaBook className="text-xl" />
                  ACESSAR DOCUMENTAÇÃO SWAGGER
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Endpoints Section */}
        <section className="container mx-auto py-12 px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-[#034C8C] mb-8 text-center">Endpoints Disponíveis</h2>

            <Endpoints
              msg={(endpoint) => {
                copyToClipboard(endpoint.exampleRequest)
                setMessage("sucesso", "O arquivo JSON foi enviado para sua área de transferência", "green", true)
              }}
            />
          </motion.div>
        </section>
      </main>
    </>
  )
}

export default DevPage

