"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import { MdOutlineVisibility, MdVisibilityOff } from "react-icons/md";
import {
  FaShieldAlt,
  FaChartLine,
  FaLink,
  FaShareAlt,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import usePassword from "@/hooks/usePassword";
import useShortLink from "@/hooks/useShortLink";
import Alert from "@/components/Alert";
import Inputs from "@/components/Inputs";
import Cards from "@/components/Cards";
import Arcodion from "@/components/Arcodion";
import Loading from "./loading";
import AdComponent from "@/components/adsense";
import { copyToClipboard } from "@/utils/copyBoard";
import Link from "next/link";
import Counter from "@/components/Counter";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const {
    viewPassword,
    handleVisibilityPassword,
    changeVisiblity,
    handleChangeVisibility,
  } = usePassword();

  const {
    createShortLink,
    msg,
    loading,
    url,
    password,
    Seturl,
    shortUrl,
    Setpassword,
    Setmsg,
    setMessage,
  } = useShortLink();

  const FAQdata: { title: string; subtitle: string }[] = [
    {
      title: "O que é o YKMiniURL?",
      subtitle:
        "O YKMiniURL é uma ferramenta online gratuita que transforma links longos em URLs curtas, fáceis de compartilhar e gerenciar. Você pode adicionar senhas para proteger seus links e obter informações detalhadas sobre o desempenho deles, como cliques e acessos.",
    },
    {
      title: "Como faço para encurtar um link?",
      subtitle:
        "É simples! Cole o link longo na caixa de texto, clique em 'Encurtar' e pronto. Você receberá uma URL curta que pode compartilhar onde quiser.",
    },
    {
      title: "Como adicionar uma senha ao meu link?",
      subtitle:
        "Clique em 'Adicionar senha', digite a senha desejada e confirme. Só quem tiver a senha poderá acessar o link encurtado.",
    },
    {
      title: "Como obter informações sobre meu link?",
      subtitle:
        "Vá até a página 'Informações', cole seu link encurtado, digite a senha (se houver) e veja estatísticas detalhadas.",
    },
  ];

  const stats = [
    { label: "Links Encurtados", value: 2, suffix: "k+" },
    { label: "Usuários Ativos", value: 5, suffix: "K+" },
    { label: "Uptime", value: 99.9, suffix: "%" },
    { label: "Gratuito", value: 100, suffix: "%" },
  ];

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopyLink = () => {
    if (shortUrl) {
      copyToClipboard(
        `https://ykminiurl.vercel.app/redirect?link=${shortUrl.shortUrl}`
      );
      setCopied(true);
      setMessage("sucesso", "Link copiado com sucesso", "green", true);
    }
  };

  return (
    <main className="overflow-hidden">
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

      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-24" id="encurtar">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-50 clip-path-hero z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-[#034C8C] rounded-full text-sm">
                Encurtador de URLs Profissional
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Transforme links longos em{" "}
                <span className="text-[#034C8C]">URLs curtas</span> e{" "}
                <span className="text-[#BF2C0B]">seguras</span>
              </h1>

              <p className="text-lg text-gray-700">
                Compartilhar links nunca foi tão fácil. O YKMiniURL permite
                encurtar URLs, adicionar proteção por senha e rastrear o
                desempenho dos seus links.
              </p>

              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    Encurte seu link agora
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#BF2C0B] text-[#BF2C0B] font-medium transition-all hover:bg-[#BF2C0B] hover:text-white"
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
                        aria-label={
                          changeVisiblity === "text"
                            ? "Ocultar senha"
                            : "Mostrar senha"
                        }
                      >
                        {changeVisiblity === "text" ? (
                          <MdOutlineVisibility />
                        ) : (
                          <MdVisibilityOff />
                        )}
                      </button>
                    </Inputs>
                  </div>
                )}

                <Inputs
                  value={url}
                  onChange={(e) => Seturl(e.target.value)}
                  placehold="Cole seu link aqui"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-[30%] right-0 top-0 flex justify-center items-center gap-2 px-[13px] py-1 rounded-[24px] bg-[#034C8C] text-white font-medium"
                    onClick={createShortLink}
                  >
                    Encurtar <IoSearch />
                  </motion.button>
                </Inputs>

                {shortUrl && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-600">
                          Seu link encurtado:
                        </span>
                        <button
                          onClick={handleCopyLink}
                          className="flex items-center gap-1 text-sm font-medium text-[#034C8C] hover:text-[#023a6a]"
                        >
                          {copied ? (
                            <>
                              <FaCheck className="w-4 h-4" /> Copiado
                            </>
                          ) : (
                            <>
                              <FaCopy className="w-4 h-4" /> Copiar
                            </>
                          )}
                        </button>
                      </div>
                      <div className="p-3 bg-white rounded border border-gray-200 font-medium text-[#BF2C0B] break-all">
                        https://ykminiurl.vercel.app/redirect?link=
                        {shortUrl.shortUrl}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
                <Image
                  src="/woman.svg"
                  alt="Ilustração de uma mulher representando o YKMiniURL"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#034C8C] mb-4">
              Por que escolher o YKMiniURL?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nossa plataforma oferece tudo o que você precisa para gerenciar
              seus links de forma eficiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 ">
                <FaLink className="w-6 h-6 text-[#034C8C]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Links Curtos
              </h3>
              <p className="text-gray-600">
                Transforme URLs longas em links curtos e fáceis de compartilhar
                em segundos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 group">
                <FaShieldAlt className="w-6 h-6 text-[#034C8C] group-hover:scale-1" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Proteção por Senha
              </h3>
              <p className="text-gray-600">
                Adicione uma camada extra de segurança aos seus links com
                proteção por senha.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 group">
                <FaChartLine className="w-6 h-6 text-[#034C8C] group-hover:scale-1" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Estatísticas
              </h3>
              <p className="text-gray-600">
                Acompanhe o desempenho dos seus links com métricas de cliques e
                acessos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 group">
                <FaShareAlt className="w-6 h-6 text-[#034C8C] group-hover:scale-1" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Compartilhamento
              </h3>
              <p className="text-gray-600">
                Compartilhe seus links encurtados em qualquer plataforma com
                facilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#034C8C] mb-4">
              O que você pode fazer com o YKMiniURL?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore todas as funcionalidades da nossa plataforma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Cards />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div
                className="p-6 bg-white rounded-xl shadow-md"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-3xl md:text-4xl font-bold text-[#034C8C]">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={10}
                  />
                </p>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#010A11] to-[#012C52]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/brilh.svg"
            alt="Fundo brilhante decorativo"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comece Agora - <span className="text-[#FFAF40]">É Grátis!</span>
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-lg">
                Sem custos, sem complicações. Encurte seus links e compartilhe
                com o mundo hoje mesmo! Nossa plataforma é totalmente gratuita e
                sem limitações.
              </p>
              <Link href="#encurtar">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-[#FFAF40] text-[#012C52] font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Começar a Encurtar
                </motion.button>
              </Link>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
                <Image
                  src="/fire.svg"
                  alt="Ícone de fogo"
                  fill
                  className="object-contain"
                />
                <div className="absolute -z-10 top-1/2 animate-pulse left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#FFAF40] rounded-full opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#034C8C] mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre o YKMiniURL.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Arcodion dataBase={FAQdata} />
          </div>

          <div className="mt-16">
            <AdComponent
              data-ad-slot="2645846225"
              data-full-width-responsive="true"
              data-ad-layout="in-article"
              data-ad-format="fluid"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-[#034C8C]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Pronto para transformar seus links?
          </h2>
          <Link href="#encurtar">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-[#034C8C] font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Encurtar meu primeiro link
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
}
