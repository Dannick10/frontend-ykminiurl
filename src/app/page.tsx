"use client";
import Image from "next/image";
import woman from "/public/woman.svg";
import usePassword from "@/hooks/usePassword";
import Alert from "@/components/Alert";
import useShortLink from "@/hooks/useShortLink";
import Inputs from "@/components/Inputs";
import { MdOutlineVisibility, MdVisibilityOff } from "react-icons/md";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import { copyToClipboard } from "@/utils/copyBoard";
import Cards from "@/components/Cards";
import Arcodion from "@/components/Arcodion";
import Loading from "./loading";
import AdComponent from "@/components/adsense";

const Home = () => {
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

  const FAQdata = [
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

  return (
    <section className="flex flex-col gap-28 px-4 md:px-30 py-20">
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

      <aside className="flex flex-col-reverse lg:flex-row gap-2 justify-between px-4 md:px-28 items-center md:gap-10 lg:gap-20">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="space-y-4 text-center lg:text-left  max-w-[450px]">
            <h1 className="text-2xl md:text-3xl max-w-[448px] text-[rgb(3,76,140)] font-bold">
              Transforme links longos em URLs curtas e seguras em segundos!
            </h1>
            <p className="font-light text-base text-gray-700 text-left font-sora">
              Compartilhar links nunca foi tão fácil e seguro. O YKMiniURL
              permite encurtar URLs, adicionar proteção por senha e rastrear o
              desempenho dos seus links com estatísticas detalhadas.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 mt-9 w-full max-w-md">
            <div className="flex-1 w-full">
              <motion.button
                whileHover={{
                  background: "#BF2C0B",
                  color: "white",
                  boxShadow: "1px 1px 10px #BF2C0B",
                  scale: [1, 1.2, 1],
                }}
                whileTap={{ scale: [1, 0.8, 1] }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center px-[13px] py-1 rounded-[24px] border-[1px] border-[#BF2C0B] text-[#BF2C0B]"
                onClick={handleVisibilityPassword}
                aria-label="Adicionar senha ao link"
              >
                Adicionar senha
              </motion.button>
            </div>
            {viewPassword && (
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
            )}

            <Inputs
              value={url}
              onChange={(e) => Seturl(e.target.value)}
              placehold="Cole seu link aqui"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-[30%] right-0 top-0 flex justify-center items-center px-[13px] py-1 rounded-[24px] border-[1px] bg-[#034C8C] text-[#D7D7D7]"
                onClick={createShortLink}
                aria-label="Encurtar o link inserido"
              >
                <IoSearch />
              </motion.button>
            </Inputs>
            
            <p className="text-base text-gray-700">
              Ideal para redes sociais, e-mails ou qualquer situação onde um
              link curto faz a diferença. Comece agora, é totalmente grátis!
            </p>
          </div>
          {shortUrl && (
            <div className="mt-4 flex justify-center items-center flex-col gap-4">
              <button
                className="font-sora font-bold text-sm text-[#D7D7D7] bg-[#034C8C] p-2 rounded-full"
                onClick={() => {
                  setMessage(
                    "sucesso",
                    "Link copiado com sucesso",
                    "green",
                    true
                  );
                  copyToClipboard(
                    `https://ykminiurl.vercel.app/redirect?link=${shortUrl.shortUrl}`
                  );
                }}
                aria-label="Copiar link encurtado"
              >
                Seu Link está pronto para ser copiado
              </button>
              <p className="font-ramabhadra font-bold text-lg text-[#BF2C0B]">
                https://ykminiurl.vercel.app/redirect?link={shortUrl.shortUrl}
              </p>
            </div>
          )}
        </div>
        <div className="relative w-[300px] h-[300px] md:w-[504px] md:h-[300px]">
          <Image
            src={woman}
            alt="Ilustração de uma mulher representando o YKMiniURL"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </aside>

      <section className="px-12 md:px-28 flex flex-col gap-6">
        <h2 className="text-xl text-[rgb(3,76,140)] font-bold">
          O que você pode fazer com o YKMiniURL?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
          <Cards />
        </div>
        <AdComponent />
      </section>

      <section className="flex flex-col justify-center items-center gap-4 min-h-[308px] bg-gradient-to-r from-[#010A11] to-[#012C52] relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Comece Agora - <span className="text-[#FFAF40]">É Grátis!</span>
        </h2>
        <p className="text-white text-center max-w-lg">
          Sem custos, sem complicações. Encurte seus links e compartilhe com o
          mundo hoje mesmo!
        </p>
        <Image src={"/fire.svg"} alt="Ícone de fogo" width={192} height={192} />
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={"/brilh.svg"}
            alt="Fundo brilhante decorativo"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="px-10 md:px-28 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-gray-900">
          Perguntas Frequentes (FAQ)
        </h2>
        <Arcodion dataBase={FAQdata} />
        <AdComponent />
      </section>
    </section>
  );
};

export default Home