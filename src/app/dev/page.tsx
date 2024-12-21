"use client";
import logo from "/public/logo.svg";
import React from "react";
import Endpoints from "./components/TabEndpoints";
import Image from "next/image";
import useShortLink from "@/hooks/useShortLink";
import Alert from "@/components/Alert";
import { copyToClipboard } from "@/utils/copyBoard";
import Arcodion from "@/components/Arcodion";
import { motion } from "framer-motion" 
import Link from "next/link";

const Page = () => {
  const { setMessage, msg, Setmsg } = useShortLink();

  const usabillyApi = [
    {
      title: "Gratuidade",
      subtitle: "Use todos os recursos sem pagar nada."
    },
    {
      title: "Facilidade",
      subtitle: " Endpoints simples e bem estruturados."
    },
    {
      title: "Segurança",
      subtitle: "Links curtos e seguros para compartilhar."
    },
    {
      title: "Confiabilidade",
      subtitle: "Retornos claros para facilitar o tratamento de erros no cliente."
    }
  ]

  return (
    <>
      {msg.status && (
        <div className="fixed top-0 z-20">
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

      <main className="w-full py-8 min-h-80 flex justify-center flex-col items-center gap-8">
        <section className="flex items-center gap-2">
          <div className="w-[90px] h-[90px] md:w-[125px] md:h-[125px] relative">
          <Image src={logo} fill className="object-fill" alt="logo" />
          </div>
          <div className="flex gap-2 flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-gray-950">Introdução</h1>
            <p className="text-xl text-gray-600">api da ykminiurl</p>
          </div>
        </section>

        <section className="py-8 px-10 flex flex-col items-center max-w-[960px] gap-8">
          <div className="w-full">
            <p>
              Bem-vindo à documentação da YKminiurl! Essa API é 100% gratuita e
              foi desenvolvida para facilitar o gerenciamento e o
              compartilhamento de links de forma eficiente e segura. Sem custos
              e sem complicações, você pode aproveitar todos os recursos
              disponíveis:
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <h2 className="font-bold">Como começar</h2>
            <ul className="list-decimal space-y-2 select-auto">
              <li>
                Consulte os endpoints detalhados abaixo para entender como
                consumir a API.
              </li>
              <li>
                Use ferramentas como Postman ou bibliotecas HTTP de sua
                linguagem preferida para realizar testes.
              </li>
              <li>
                Implemente a integração e otimize seu sistema com links curtos e
                seguros.
              </li>
            </ul>
            <p className="font-bold">
              Se você tiver dúvidas ou precisar de suporte, entre em contato!
            </p>
          </div>

            <article
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full space-y-8 max-w-[640px] py-8"
        >
                <Arcodion dataBase={usabillyApi}/>
            </article>

            <div>
                <p className="font-bold">A API possui uma documentação interativa no Swagger, onde você pode visualizar todos os endpoints disponíveis, seus parâmetros e testar diretamente as requisições.</p>
                <Link href={"https://backend-ykminiurl.onrender.com/docs/"} target="_blank">
                <motion.button        
                        className="flex font-sora w-full justify-center items-center px-[18px] py-2 rounded-[24px] border-[1px]  bg-orange-600 text-gray-100 mt-8 font-bold text-xl hover:bg-orange-500 transition-all"
                        >
                        SEGUIR PARA A DOC SWAGGER
                      </motion.button>
                </Link>
              </div>
        </section>

        <article
          id="accordion-collapse"
          data-accordion="collapse"
          className="w-full space-y-8 max-w-[640px] px-10 md:px-0 overflow-hidden"
        >
          <Endpoints msg={(endpoint) => { 
            copyToClipboard(endpoint.exampleRequest)
                        setMessage(
                          "sucesso",
                          "o arquivo JSON foi enviado para sua area de transferencia",
                          "green",
                          true
                        );   }} />
        </article>
      </main>
    </>
  );
};

export default Page;
