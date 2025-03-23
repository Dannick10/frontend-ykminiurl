"use client"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"

const Footer = () => {
  const listsLink = [
    {
      title: "YKminiurl",
      links: [
        {
          text: "Início",
          href: "/",
        },
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
          href: "https://www.linkedin.com/in/futurodevdaniel/",
        },
        {
          text: "Telefone",
          href: "/telefone",
        },
      ],
    },
    {
      title: "Serviços",
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
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-[#034C8C]">
                  <span className="text-[#BF2C0B]">YK</span>miniurl
                </h2>
                <p className="text-gray-600 mt-2">Encurte, proteja e compartilhe seus links com facilidade.</p>
              </div>

              <div className="mt-auto">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Siga-nos</h3>
                <div className="flex gap-4">
                  <Link href="https://github.com/Dannick10/frontend-ykminiurl" target="_blank">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#BF2C0B] hover:text-white transition-colors"
                    >
                      <FaGithub className="text-xl" />
                    </motion.div>
                  </Link>
                  <Link href="https://www.linkedin.com/in/futurodevdaniel/" target="_blank">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#BF2C0B] hover:text-white transition-colors"
                    >
                      <FaLinkedin className="text-xl" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {listsLink.map((list, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold text-[#BF2C0B] mb-4">{list.title}</h3>
                  <ul className="space-y-3">
                    {list.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link.href} className="text-gray-600 hover:text-[#BF2C0B] transition-colors">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} YKMiniURL. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-[#BF2C0B] transition-colors">
              Política de Privacidade
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-[#BF2C0B] transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

