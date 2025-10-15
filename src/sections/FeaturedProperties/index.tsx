import { GoArrowDown } from "react-icons/go";

const highlights = [
  {
    title: "Cobertura",
    image: "/images/cards/Imagem 03.png",
  },
  {
    title: "Casas",
    image: "/images/cards/Imagem 02.png",
  },
  {
    title: "Apartamentos",
    image: "/images/cards/Imagem 01.png",
  },
];

export default function FeaturedProperties() {
  return (
    <section id="featured-properties" className="bg-[#171717] text-white py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto md:mt-12 md:flex md:flex-col">
        <div className="flex flex-col flex-row items-start md:items-center justify-between mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 md:mb-0">
            Imóveis em Destaque
          </h2>
          <div className="bg-white w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border border-white flex items-center justify-center rounded-sm">
            <span className="text-black text-lg sm:text-xl md:text-2xl">
              <GoArrowDown className="text-[25px] sm:text-[30px] md:text-[35px]" />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 md:mb-12">
          {highlights.map((item, index) => (
            <div key={index} className="relative h-84 sm:h-96 md:h-104 lg:h-120 group overflow-hidden rounded-md">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover filter brightness-50 group-hover:scale-105 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <a href={`/imoveis?type=${item.title}`} className="bg-transparent border border-white text-white px-4 py-2 sm:px-6 sm:py-3 rounded-sm text-sm sm:text-base font-bold hover:bg-white hover:text-black transition cursor-pointer">
                  {item.title}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
            Referência em imóveis <br />
            exclusivos no litoral <br />
            catarinense.
          </p>
          <p className="md:w-md text-sm sm:text-base md:text-md text-gray-300 leading-relaxed">
            Somos especialistas em imóveis de alto padrão em Itapema, com
            atendimento personalizado e focado nos seus objetivos. <br />
            Nosso compromisso é entregar experiências únicas na compra e venda
            de imóveis com curadoria de qualidade, segurança e exclusividade.
          </p>
        </div>

        <div className="mt-8 md:mt-12 border-t border-[#292929] pt-4 md:pt-6 text-sm text-gray-500" />
      </div>
    </section>
  );
}
