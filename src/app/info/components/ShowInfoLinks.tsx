import React, { useState } from "react";
import database from "/public/database.svg";
import Image from "next/image";
import Alert from "@/components/Alert";
import useShortLink from "@/hooks/useShortLink";
import { BiSolidPointer } from "react-icons/bi";
import Link from "next/link";
import { formatRelativeTime } from "@/utils/DateConvert";
import { motion } from "framer-motion";
import Loading from "@/app/loading";
type Showinfo = {
  ShortUrl: string | undefined;
  clicks: number | undefined;
  date: string | undefined;
};

const ShowInfoLinks = ({ ShortUrl, clicks, date }: Showinfo) => {
  const { msg, Setmsg, loading } = useShortLink();
  const [dateFormat] = useState(formatRelativeTime(date));

  return (
    <section className="flex flex-col gap-30 px-30 py-10">
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

      {loading && (
       <Loading/>
      )}

      <aside className="flex flex-col-reverse lg:flex-row justify-center items-center flex-wrap gap-8 lg:gap-10 py-8">
        <div className="flex flex-col justify-center items-center gap-2 max-w-[600px]">
          <div className="space-y-10 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center text-8xl gap-4 text-[32px] text-[#BF2C0B] font-bold ">
              <span>
                <BiSolidPointer />
              </span>

              <p> {clicks} Clicks</p>
            </div>
            <p className="font-sora text-[#034C8C] font-light text-[24px]">
              {dateFormat}
            </p>
            <Link
              href={`https://ykminiurl.vercel.app/redirect?link=${ShortUrl}`|| ""}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="font-poppins flex justify-center items-center px-[13px] py-1 rounded-[24px] border-[1px] bg-[#034C8C] text-[#D7D7D7]"
              >
                Acessar Link
              </motion.button>
            </Link>
          </div>
        </div>
       
          <Image src={database} alt="woman" width={400} height={300} />
     
      </aside>
    </section>
  );
};

export default ShowInfoLinks;
