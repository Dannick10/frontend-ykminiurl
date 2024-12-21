import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import React from "react";
import Link from "next/link";
const Footer = () => {
  const listsLink = [
    {
      title: "YKminiurl",
      links: [
        {
          text: "Informações",
          href: "/info",
        },
        {
          text: "Documentação",
          href: "/dev",
        },
      ],
    },
    {
      title: "Recursos",
      links: [
        {
          text: "Denunciar URL",
          href: "/report",
        },
      ],
    },
    {
      title: "Contato",
      links: [
        {
          text: "Email",
          href: "/email",
        },
        {
          text: "LinkedIn",
          href: "https://www.linkedin.com/",
        },
        {
          text: "Telefone",
          href: "/telefone",
        },
      ],
    },
    {
      title: "Serviçoes",
      links: [
        {
          text: "UI/UX",
          href: "/ui-ux",
        },
        {
          text: "Designers",
          href: "/designers",
        },
        {
            text: "Web - service",
            href: "/webservice",
          },
      ],
    },
  ];

  return (
    <footer className="px-[30px] py-[20px] flex justify-between border-t-2 border-gray-200">
      <div className="flex items-center">
         <ul className="flex gap-2 text-2xl">
            <li className="cursor-pointer hover:text-blue-800"><FaGithub/></li>
            <li className="cursor-pointer hover:text-gray-800"><FaLinkedin/></li>
         </ul>
      </div>

        <div className="flex gap-10 text-sm">
            {listsLink.map((list, index) => (
            <div key={index} className="flex flex-col ml-[20px]">
                <h2 className="font-bold py-4 text-base text-orange-600">{list.title}</h2>
                <ul className="space-y-2 text-gray-900">
                {list.links.map((link, index) => (
                    <li key={index} className="hover:text-orange-600">
                    <Link href={link.href}>{link.text}</Link>
                    </li>
                ))}
                </ul>
            </div>
        ))}
      </div>

      <div className="flex justify-end items-end font-bold text-sm text-orange-600">
        <p>2024 YKMiniURL. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
