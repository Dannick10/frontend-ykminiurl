import React from "react";
import Image from "next/image";
import logo from "/public/logo.svg";
import Link from "next/link";
import ButtonHamburguer from "./ButtonHamburguer";

type navProps = {
  name: string;
  url: string;
};

const Header = () => {
  const navItems: navProps[] = [
    {
      name: "inicio",
      url: "/",
    },
    {
      name: "Informações",
      url: "/info",
    },
    {
      name: "Desenvolvedores",
      url: "/dev",
    },
  ];
  
  return (
    <aside className="fixed  w-full z-10 bg-white flex justify-between px-10 items-center gap-2 font-sora border-b-2 border-gray-100">
      <div className="flex gap-2">
        <Image src={logo} alt="logo" width={50} height={50} />
        <h3 className="text-[40px] text-[#034C8C] font-bold">
          <span className="text-[#BF2C0B]">YK</span>miniurl
        </h3>
      </div>

      <ul className="justify-center items-center md:gap-4 lg:gap-10 text-xl font-light  hidden md:flex">
        {navItems.map((items, i) => (
            <Link href={items.url} key={i}>
          <li className="hover:text-orange-600 duration-300">
              {items.name}
          </li>
            </Link>
        ))}
      </ul>
      <ButtonHamburguer items={navItems} />
    </aside>
  );
};

export default Header;
