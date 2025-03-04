import React from "react";
import Image from "next/image";
type cardsType = {
  title: string;
  description: string[];
  svg: string;
};

const Cards = () => {
  const CardsDate: cardsType[] = [
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
      description: ["Proteja seus links com senhas personalizadas.", "Só quem tiver a senha poderá acessar o conteúdo, garantindo segurança extra."],
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
      title: " Redirecionamento Fácil",
      description: [
        "Redirecione usuários ao link original com apenas um clique.",
        "Nosso sistema é rápido, confiável e funciona em qualquer dispositivo.",
      ],
      svg: "/cards/iconrefresh.svg",
    },
  ];

  return (
    <>
      {CardsDate.map((card, i) => (
        <div
          className="border-2 border-gray-200 rounded-md max-w-[440px] flex flex-col-reverse items-center  lg:flex-row gap-4 p-6 md:p-3"
          key={i}
        >
          <div>
            <h3 className="text-lg">{card.title}</h3>
            {card.description.map((text, index) => (
              <p className="text-gray-800 py-1" key={index}>
                {text}
              </p>
            ))}
          </div>
          <Image src={card.svg} width={50} height={50} alt="svg" />
        </div>
      ))}
    </>
  );
};

export default Cards;
