"use client";

import Alert from "@/components/Alert";
import usePassword from "@/hooks/usePassword";
import useShortLink from "@/hooks/useShortLink";
import React from "react";
import Image from "next/image";
import womanpoint from "/public/womananalyse.svg";
import { IoSearch } from "react-icons/io5";
import { MdOutlineVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import Inputs from "@/components/Inputs";
import ShowInfoLinks from "./components/ShowInfoLinks";
import { motion } from "framer-motion";
import Loading from "../loading";
import AdComponent from "@/components/adsense";

const Page = () => {
  const {
    handleVisibilityPassword,
    viewPassword,
    changeVisiblity,
    handleChangeVisibility,
  } = usePassword();
  const {
    postInfoLink,
    msg,
    loading,
    url,
    password,
    Seturl,
    shortUrl,
    Setpassword,
    Setmsg,
  } = useShortLink();

  if (shortUrl) {
    return (
      <ShowInfoLinks
        ShortUrl={shortUrl?.shortUrl}
        clicks={shortUrl?.clicks}
        date={shortUrl?.createdAt}
      />
    );
  }

  return (
    <section className="flex flex-col gap-30 px-30 py-20">
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

      <aside className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-28">
        <div className="flex flex-col justify-center items-center gap-2 max-w-[600px]">
          <div className="space-y-4 text-center lg:text-left px-8 md:px-0">
            <h1 className="text-2xl md:text-3xl text-[rgb(3,76,140)] font-bold">
              Deseja ter informações do seu{" "}
              <span className="text-[#BF2C0B]">link encurtado</span>?
            </h1>
            <p className="font-light text-[#0A0A0D] font-sora">
              Cole seu link encurtado abaixo e, se ele estiver protegido, digite
              a senha para acessar estatísticas detalhadas como cliques e data
              de criação.
            </p>
            <p className=" text-gray-700">
              O YKMiniURL oferece uma maneira simples e segura de acompanhar o
              desempenho dos seus links. Veja quem acessou, quando e quantas
              vezes!
            </p>
          </div>
          <div className="flex flex-col items-center py-38 gap-5  mt-9 ">
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
                placehold="digite sua senha"
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

            <Inputs
              value={url}
              onChange={(e) => Seturl(e.target.value)}
              placehold="cole seu link"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-[30%] right-0 top-0 flex justify-center items-center px-[13px] py-1 rounded-[24px] border-[1px] bg-[#034C8C] text-[#D7D7D7]"
                onClick={postInfoLink}
              >
                <IoSearch />
              </motion.button>
            </Inputs>
          </div>
        </div>

        <Image src={womanpoint} width={360} height={310} alt="a" />
      </aside>
      <div className="px-4 text-center md:px-6 lg:text-start lg:px-32 mt-10 text-gray-800 ">
        <p className="">
          Suas informações são armazenadas com segurança e visíveis apenas para
          você. Se o link estiver protegido por senha, somente quem a possui
          poderá acessar os dados detalhados.
        </p>
        <AdComponent />
      </div>
    </section>
  );
};

export default Page;
