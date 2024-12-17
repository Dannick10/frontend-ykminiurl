import React from 'react'
import { MdError } from "react-icons/md";
import womanbarin from "/public/womanbarin.svg"
import Image from 'next/image';
const custom404 = () => {
  return (
    <section className='h-screen flex flex-col lg:flex-row items-center justify-center gap-10'>
        <aside className='flex flex-col justify-center items-center'>
              <div className='flex gap-6 items-center justify-center'>
                <span className='text-6xl text-[#BF2C0B] '>
                <MdError/>
                </span>
                <h1 className='text-5xl md:text-[64px] text-[#BF2C0B] font-bold'>404 ERROR</h1>
              </div>
              <h2 className='text-2xl md:text-[24px] text-[#034C8C]'>Página não existe</h2>
        </aside>
        <div className="relative w-[60vh] h-[60vh]">
          <Image
            src={womanbarin}
            alt="woman"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
    </section>
  )
}

export default custom404