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
    <header className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10 h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110">
            <Image 
              src={logo || "/placeholder.svg"} 
              alt="YKMiniURL logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <h3 className="text-2xl md:text-[40px] text-[#034C8C] font-bold transition-colors duration-300">
            <span className="text-[#BF2C0B] group-hover:text-[#e03a15]">YK</span>
            <span className="group-hover:text-[#0468c3]">miniurl</span>
          </h3>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 lg:gap-12">
            {navItems.map((item, i) => (
              <li key={i} className="relative group">
                <Link 
                  href={item.url} 
                  className="text-lg font-medium text-gray-700 hover:text-[#BF2C0B] transition-colors duration-300 py-2"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BF2C0B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        

          <ButtonHamburguer items={navItems} />

      </div>
    </header>
  );
};

export default Header;
