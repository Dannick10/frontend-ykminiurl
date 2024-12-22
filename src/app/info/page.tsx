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
    <section className="flex flex-col gap-30 px-30 py-10">
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

      <aside className="flex flex-col-reverse lg:flex-row justify-center items-center gap-8 lg:gap-28">
        <div className="flex flex-col justify-center items-center gap-2 max-w-[600px]">
          <div className="space-y-2 text-center lg:text-left px-8 md:px-0">
            <h1 className="text-[24px] md:text-[32px] text-[rgb(3,76,140)] font-bold ">
              Deseja ter informações do seu{" "}
              <span className="text-[#BF2C0B]">link</span> ?
            </h1>
            <p className="font-light text-[18px] md:text-[24px] text-[#0A0A0D] font-sora">
              cole seu link encurtado, digite a senha se o link estiver com
              segurança.
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
                onClick={postInfoLink}
              >
                <IoSearch />
              </motion.button>
            </Inputs>
          </div>
        </div>

        <Image src={womanpoint} width={360} height={310} alt="a" />
      </aside>
      <div className="px-4 text-center md:px-6 lg:text-start lg:px-32 mt-8 text-gray-800 ">
      <p className="">Suas informações são armazenadas com segurança e visíveis apenas para você. Se o link estiver protegido por senha, somente quem a possui poderá acessar os dados detalhados.</p>
      </div>
    </section>
  );
};

export default Page;
