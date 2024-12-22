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

export default function Home() {
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
    setMessage
  } = useShortLink();

  const FAQdata = [
    {
      title: "O que é o YKMiniURL?",
      subtitle: "é uma ferramenta online gratuita que permite transformar links longos em URLs curtas, fáceis de compartilhar e gerenciar. Além de encurtar links, o YKMiniURL oferece a opção de adicionar senhas aos links encurtados e informações detalhadas sobre o desempenho dos links."
    },
    {
      title: "Como faço para encurtar um link?",
      subtitle: "Para encurtar um link, basta colar o link longo na caixa de texto e clicar em 'Encurtar'."
    },
    {
      title: "Como faço para adicionar uma senha ao meu link?",
      subtitle: "Para adicionar uma senha ao seu link, basta clicar no botão 'Adicionar senha' e digitar a senha desejada."
    },
    {
      title: "Como posso ter informações sobre o meu link?",
      subtitle: "Para obter informações sobre o seu link, basta ir a página 'informações' e copiar seu link encurtado, digitar a senha, se houver."
    }
  ]

  return (
    <section className="flex flex-col gap-28 px-30 py-20">
      {msg.status && (
        <Alert
          title={msg.title}
          subtitle={msg.subtitle}
          colors={msg.color}
          handleCloseMsg={() => Setmsg({
            title: "",
            subtitle: "",
            color: "green",
            status: false,
          })}
        />
      )}

      {loading && (
        <div
          role="status"
          className="w-full h-full fixed flex justify-center items-center bg-black bg-opacity-10 z-10"
        >
          <svg
            aria-hidden="true"
            className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-[#BF2C0B]"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}

      <aside className="flex flex-col-reverse lg:flex-row gap-2 justify-between px-28 items-center md:gap-10 lg:gap-20">
        <div className="flex flex-col justify-center items-center gap-2 ">
          <div className="space-y-2 text-center lg:text-left px-8 md:px-0">
            <h1 className="text-3xl md:text-4xl max-w-[448px] text-[rgb(3,76,140)] font-bold ">
            Transforme links longos em URLs curtas e seguras em segundos! 
            </h1>
            <p className="font-light text-lg md:text-xl text-[#0A0A0D] font-sora">
             Compartilhar links nunca foi tão fácil e seguro.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center  gap-5  mt-9 ">
            <div className="flex-1 w-full">
              <motion.button        
                whileHover={{
                  background: "#BF2C0B",
                  color: "white",
                  boxShadow: "1px 1px 10px #BF2C0B",
                  scale: [1, 1.2, 1],
                }}
                whileTap={{
                  scale: [1, 0.8, 1],
                }}
                transition={{ duration: 0.5 }}
                className="flex  justify-center items-center px-[13px] py-1 rounded-[24px] border-[1px] border-[#BF2C0B] text-[#BF2C0B]"
                onClick={handleVisibilityPassword}
              >
                adicionar senha
              </motion.button>
            </div>
            {viewPassword && (
              <Inputs
                value={password}
                onChange={(e) => Setpassword(e.target.value)}
                type={changeVisiblity}
              >
                <button
                  className="w-[20%] right-0 top-0 flex justify-center items-center px-[13px] py-1 rounded-[24px] border-[1px]  text-[#BF2C0B] cursor-pointer"
                  onClick={handleChangeVisibility}
                >
                  {changeVisiblity == "text" ? (
                    <MdOutlineVisibility />
                  ) : (
                    <MdVisibilityOff />
                  )}
                </button>
              </Inputs>
            )}

            <Inputs value={url} onChange={(e) => Seturl(e.target.value)}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-[30%] right-0 top-0 flex justify-center items-center px-[13px] py-1 rounded-[24px] border-[1px] bg-[#034C8C] text-[#D7D7D7]"
                onClick={createShortLink}
              >
                <IoSearch />
              </motion.button>
            </Inputs>
          </div>
          {shortUrl && (
            <div className="mt-4 flex justify-center items-center flex-col gap-4">
              <button className="font-sora font-bold text-sm text-[#D7D7D7] bg-[#034C8C] p-2 rounded-full"
              onClick={() =>  
                {
                  setMessage("sucesso","Link copiado com sucesso","green",true)
                  copyToClipboard(`https://ykminiurl.vercel.app/redirect?link=${shortUrl.shortUrl}`)
                }
              }
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
          <Image src={woman} alt="woman" fill style={{ objectFit: "contain" }} />
        </div>
      </aside>

      <section className="px-12 md:px-28 flex flex-col  gap-6">
          <h3 className="text-xl text-[rgb(3,76,140)] font-bold">O que você pode fazer com o YKMiniURL?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4 ">
            <Cards/>
          </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-4 min-h-[308px] bg-gradient-to-r  from-[#010A11] to-[#012C52] relative">
         <h2 className="text-3xl md:text-4xl font-bold text-white">Comece Agora - <span className="text-[#FFAF40]">É Grátis!</span></h2>
         <Image src={"/fire.svg"} alt="fire" width={192} height={192} />
         <div className="absolute top-0 left-0 w-full h-full">
         <Image src={"/brilh.svg"} alt="brilh" fill className="object-cover" />
         </div>
      </section>

      <section className="px-10 md:px-28 flex flex-col gap-4">
          <p className="text-xl font-bold text-gray-900">FAQ</p>
            <Arcodion dataBase={FAQdata} />
      </section>
    </section>
  );
}
