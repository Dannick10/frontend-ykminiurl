import React from 'react'
import Image from 'next/image'
type cardsType = {
    title: string,
    description: string,
    svg: string
}

const Cards = () => {

    const CardsDate: cardsType[] = [
        {
            title: 'Encurtar Links Longos',
            description: 'Torne seus links curtos e fáceis de compartilhar.',
            svg: '/cards/iconlink.svg'
        },
        {
            title: 'Adicionar Senha',
            description: 'Proteja seus links com uma senha personalizada.',
            svg: '/cards/iconshield.svg'
        },
        {
            title: 'Obter Informações',
            description: 'Veja como seus links estão performando com estatísticas detalhadas.',
            svg: '/cards/iconinfo.svg'
        },
        {
            title: ' Redirecionamento Fácil',
            description: 'Redirecione para o link original com apenas um clique.',
            svg: '/cards/iconrefresh.svg'
        },
    ]

  return (
    <>
    {CardsDate.map((card, i) => (
    <div className='border-2 border-gray-200 rounded-md max-w-[440px] flex flex-col-reverse items-center  lg:flex-row gap-4 p-6 md:p-8' key={i}>
        <div>
            <h4 className='text-lg'>{card.title}</h4>
            <p className='text-gray-800'>{card.description}</p>
        </div>
        <Image src={card.svg} width={50} height={50} alt='svg'/>
    </div>
    ))}
    </>
  )
}

export default Cards