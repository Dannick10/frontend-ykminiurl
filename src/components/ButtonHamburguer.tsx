"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ButtonHamburguerProps = {
  items: {
    name: string;
    url: string;
  }[];
};
const ButtonHamburguer = ({ items: NavItems }: ButtonHamburguerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const hanldeChangeButton = () => {
    setIsOpen(!isOpen);
  };

  const resizeClose = () => {
    addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    });
  };

  useEffect(() => {
    resizeClose();

    return () => resizeClose();
  }, []);

  return (
    <>
      <div
        className="flex md:hidden z-20 flex-col gap-1 cursor-pointer"
        onClick={hanldeChangeButton}
      >
        <span
          className={`w-[55px] h-2 bg-[#BF2C0B] transition-all ${
            isOpen && `rotate-45 translate-y-5`
          }`}
        ></span>
        <span
          className={`w-[55px] h-2 bg-[#BF2C0B] transition-all ${
            isOpen && "hidden"
          }`}
        ></span>
        <span
          className={`w-[55px] h-2 bg-[#BF2C0B] transition-all ${
            isOpen && `-rotate-45 translate-y-2`
          }`}
        ></span>
      </div>

      {isOpen && (
        <>
          <span className="w-full h-full top-0 left-0 fixed bg-black bg-opacity-10 backdrop-blur-sm"
          onClick={hanldeChangeButton}
          ></span>
          <div className="fixed top-0 right-0 border-l-2 border-[#BF2C0B] 0 bg-white text-white z-10 w-4/6 h-full">
            <ul className="gap-6 flex flex-col text-[#BF2C0B] py-16">
              {NavItems.map((items, index) => (
                <Link
                  className="relative"
                  href={items.url}
                  key={index}
                  onClick={hanldeChangeButton}
                >
                  <li className="relative group px-8 py-4  transition-colors duration-300 text-orange-500 hover:text-white text-xl ">
                    {items.name}
                    <span className="w-full h-10 left-0 text-orange-400 absolute bg-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"></span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default ButtonHamburguer;