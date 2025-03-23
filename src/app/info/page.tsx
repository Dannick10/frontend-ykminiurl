"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { IoSearch } from "react-icons/io5"
import { MdOutlineVisibility, MdVisibilityOff } from "react-icons/md"
import { FaShieldAlt, FaInfoCircle } from "react-icons/fa"
import Alert from "@/components/Alert"
import usePassword from "@/hooks/usePassword"
import useShortLink from "@/hooks/useShortLink"
import Inputs from "@/components/Inputs"
import ShowInfoLinks from "./components/ShowInfoLinks"
import Loading from "../loading"
import AdComponent from "@/components/adsense"

const InfoPage = () => {
  const { handleVisibilityPassword, viewPassword, changeVisiblity, handleChangeVisibility } = usePassword()

  const { postInfoLink, msg, loading, url, password, Seturl, shortUrl, Setpassword, Setmsg } = useShortLink()

  if (shortUrl) {
    return <ShowInfoLinks ShortUrl={shortUrl?.shortUrl} clicks={shortUrl?.clicks} date={shortUrl?.createdAt} />
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {msg.status && (
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
      )}

      {loading && <Loading />}

      <section className="container mx-auto px-4 py-20 md:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 max-w-xl"
          >
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-block px-4 py-1 mb-2 bg-blue-100 text-[#034C8C] rounded-full text-sm font-medium">
                Estatísticas de Links
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#034C8C] leading-tight">
                Deseja ter informações do seu <span className="text-[#BF2C0B]">link encurtado</span>?
              </h1>

              <p className="text-gray-700 text-lg">
                Cole seu link encurtado abaixo e, se ele estiver protegido, digite a senha para acessar estatísticas
                detalhadas como cliques e data de criação.
              </p>

              <p className="text-gray-600">
                O YKMiniURL oferece uma maneira simples e segura de acompanhar o desempenho dos seus links. Veja quem
                acessou, quando e quantas vezes!
              </p>
            </div>

            <div className="mt-10 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-800">Verificar estatísticas</h3>
                <motion.button
                  whileHover={{
                    background: "#BF2C0B",
                    color: "white",
                    boxShadow: "0px 4px 10px rgba(191, 44, 11, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#BF2C0B] text-[#BF2C0B] text-sm font-medium transition-all"
                  onClick={handleVisibilityPassword}
                >
                  <FaShieldAlt />
                  {viewPassword ? "Remover senha" : "Adicionar senha"}
                </motion.button>
              </div>

              {viewPassword && (
                <div className="mb-4">
                  <Inputs
                    value={password}
                    onChange={(e) => Setpassword(e.target.value)}
                    type={changeVisiblity}
                    placehold="Digite sua senha"
                  >
                    <button
                      className="w-[20%] right-0 top-0 flex justify-center items-center px-[13px] py-1 rounded-[24px] border-[1px] text-[#BF2C0B] cursor-pointer"
                      onClick={handleChangeVisibility}
                      aria-label={changeVisiblity === "text" ? "Ocultar senha" : "Mostrar senha"}
                    >
                      {changeVisiblity === "text" ? <MdOutlineVisibility /> : <MdVisibilityOff />}
                    </button>
                  </Inputs>
                </div>
              )}

              <Inputs value={url} onChange={(e) => Seturl(e.target.value)} placehold="Cole seu link encurtado aqui">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[30%] right-0 top-0 flex justify-center items-center gap-2 px-[13px] py-1 rounded-[24px] bg-[#034C8C] text-white font-medium"
                  onClick={postInfoLink}
                >
                  Verificar <IoSearch />
                </motion.button>
              </Inputs>

              <div className="mt-4 flex items-start gap-2 text-sm text-gray-500">
                <FaInfoCircle className="mt-1 flex-shrink-0" />
                <p>
                  Suas informações são armazenadas com segurança e visíveis apenas para você. Se o link estiver
                  protegido por senha, somente quem a possui poderá acessar os dados detalhados.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
              <Image
                src="/womananalyse.svg"
                width={400}
                height={400}
                alt="Mulher analisando dados"
                className="relative z-10"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-16">
          <AdComponent />
        </div>
      </section>
    </main>
  )
}

export default InfoPage

