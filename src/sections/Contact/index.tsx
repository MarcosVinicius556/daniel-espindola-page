import { GoArrowUpRight } from "react-icons/go";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white w-full text-black py-12 sm:py-16 px-4 sm:px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto pt-6 sm:pt-9">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <form className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-wide">Entre em Contato</h2>

            <div className="mb-5">
              <label htmlFor="nome" className="block mb-2 text-sm font-medium text-black">Nome</label>
              <input type="text" className="bg-white p-2 text-base w-full border-b focus:outline-none" required />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">E-mail</label>
              <input type="email" className="bg-white p-2 text-base w-full border-b focus:outline-none" required />
            </div>

            <div className="mb-5">
              <label htmlFor="telefone" className="block mb-2 text-sm font-medium text-black">Telefone</label>
              <input type="tel" className="bg-white p-2 text-base w-full border-b focus:outline-none"/>
            </div>

            <div className="mb-5">
              <label htmlFor="mensagem" className="block mb-2 text-sm font-medium text-black">Mensagem</label>
              <textarea className="bg-white min-h-[150px] sm:min-h-[180px] md:min-h-[200px] p-2 text-base w-full border focus:outline-none"/>
            </div>

            <p className="text-gray-700 mb-6 text-sm max-w-full md:max-w-[450px]">
              Este site é protegido por reCAPTCHA e a <a href="https://policies.google.com/privacy" className="underline">Política de Privacidade do Google</a> e <a href="https://policies.google.com/terms" className="underline">Termos de Serviço</a> do Google são aplicáveis.
            </p>

            <button className="bg-black border border-black text-white w-[120px] sm:w-[120px] cursor-pointer py-3 rounded hover:bg-white hover:text-black transition">
              Enviar
            </button>
          </form>

          <div className="flex flex-col items-start sm:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold tracking-wide">Conheça nossos <br /> imóveis</h2>
            <p className="text-gray-700 mb-6 text-sm sm:text-base md:text-base w-full sm:w-[350px] md:w-[400px]">
              Imóveis exclusivos em Itapema, selecionados com cuidado para quem busca
              alto padrão, conforto e localização privilegiada.
            </p>

            <a href="/imoveis" className="mb-5 flex flex-row align-center justify-center bg-black border border-black text-white px-6 py-3 rounded-sm text-sm font-bold hover:bg-transparent hover:text-black transition">
              Ver Imóveis <GoArrowUpRight className="ml-1 bold text-[20px]" />
            </a>

            <img 
              src="/images/cards/Imagem 03.png" 
              alt="Foto de apartamento com vista para praia"
              className="w-full sm:w-[400px] md:w-[450px] h-64 sm:h-80 md:h-[400px] object-cover brightness-50 border-b border-white pb-5"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
