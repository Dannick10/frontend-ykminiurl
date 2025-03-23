"use client"
import Image from "next/image"
import { motion } from "framer-motion"

type CardType = {
  title: string
  description: string[]
  svg: string
}

const Cards = () => {
  const cardsData: CardType[] = [
    {
      title: "Encurtar Links Longos",
      description: [
        "Transforme URLs extensas em links curtos e fáceis de compartilhar.",
        "Ideal para redes sociais, e-mails ou mensagens. Rápido e simples!",
      ],
      svg: "/cards/iconlink.svg",
    },
    {
      title: "Adicionar Senha",
      description: [
        "Proteja seus links com senhas personalizadas.",
        "Só quem tiver a senha poderá acessar o conteúdo, garantindo segurança extra.",
      ],
      svg: "/cards/iconshield.svg",
    },
    {
      title: "Obter Informações",
      description: [
        "Acompanhe o desempenho dos seus links com estatísticas detalhadas.",
        "Veja quantos cliques cada URL recebeu e otimize seu uso.",
      ],
      svg: "/cards/iconinfo.svg",
    },
    {
      title: "Redirecionamento Fácil",
      description: [
        "Redirecione usuários ao link original com apenas um clique.",
        "Nosso sistema é rápido, confiável e funciona em qualquer dispositivo.",
      ],
      svg: "/cards/iconrefresh.svg",
    },
  ]

  return (
    <>
      {cardsData.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 p-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Image src={card.svg || "/placeholder.svg"} width={32} height={32} alt={card.title} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#034C8C] mb-3 text-center md:text-left">{card.title}</h3>
              <div className="space-y-2">
                {card.description.map((text, index) => (
                  <p key={index} className="text-gray-600">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  )
}

export default Cards

