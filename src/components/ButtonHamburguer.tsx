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
        className="flex md:hidden z-40 flex-col gap-1 cursor-pointer"
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
          <div className="fixed top-0 right-0 border-l-2 border-[#BF2C0B] 0 bg-white z-10 w-4/6 h-full">
            <ul className="gap-6 flex flex-col text-gray-900 py-16">
              {NavItems.map((items, index) => (
                <Link
                  className="relative"
                  href={items.url}
                  key={index}
                  onClick={hanldeChangeButton}
                >
                  <li className="relative hover:text-orange-600 group px-8 py-4  transition-colors duration-300 text-xl ">
                    {items.name}
                    
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