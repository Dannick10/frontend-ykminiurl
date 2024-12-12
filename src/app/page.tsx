import Image from "next/image";
import woman from "/public/woman.svg";
export default function Home() {
  return (
    <section className="flex flex-col gap-30 px-30 py-10">
      <aside className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2 max-w-[600px]">
          <div className="space-y-2">
          <h1 className="text-[32px] text-[rgb(3,76,140)] font-bold ">
            Intuitivo e fácil, <span className="text-[#BF2C0B]">encurte</span>{" "}
            sua url e <span className="text-[#BF2C0B]">compartilhe</span> !
          </h1>
          <p className="font-light text-[24px] text-[#0A0A0D]">
            tenha informações da sua url, quantas pessoas acessou e data que foi
            criada.
          </p>
          </div>
          <div className="flex flex-col justify-center items-center py-38 gap-5  my-9 ">
            <div className="flex-1 w-full">
            <button className="flex  justify-center items-center px-[13px] py-1 rounded-[24px] border-[1px] border-[#BF2C0B] text-[#BF2C0B]">adicionar senha</button>
            </div>
            <div className="border-2 rounded-[20px] py-1.5 px-1.5 w-[367px] border-[#BF2C0B] overflow-hidden relative flex">
                <input type="text" placeholder="Cole seu link" className="w-full h-full font-light outline-none px-4 py-2 text-[#211D26]  " />
                <button className="w-[60%] right-0 top-0 flex justify-center items-center px-[13px] py-1 rounded-[24px] border-[1px] bg-[#034C8C] text-[#D7D7D7]">Encurtar link</button>
            </div>
          </div>
        </div>
        <div className="relative w-[80vh] h-[80vh]">
          <Image src={woman} alt="woman" fill style={{objectFit: "cover"}} />
        </div>
      </aside>
    </section>
  );
}
