import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { LiaFacebookSquare } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";
import { RiPinterestLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#171717] mx-auto text-gray-400 py-10 px-4 sm:px-6 md:px-20 border-t border-neutral-800">
      <div className="max-w-[1440px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-14 md:gap-20">

        <div className="flex flex-col items-center sm:items-start">
          <img loading="lazy" src="/images/logo/svg/horzt branco.svg" alt="Logo de Daniel Espindola" className="w-48 sm:w-56 md:w-70 p-0 mb-4 sm:mb-6"/>

          <a href="/imoveis" className="w-full flex flex-row align-center justify-center bg-white border border-white text-black px-6 py-3 rounded-sm text-sm font-bold hover:bg-transparent hover:text-white transition">
            Conhecer os imóveis <GoArrowUpRight className="ml-1 text-[20px]" />
          </a>
        </div>

        <div className="flex flex-col max-w-sm sm:max-w-full md:ml-10 items-center sm:items-start">
          <h4 className="text-white mb-3 text-2xl sm:text-[28px] tracking-wide text-center sm:text-left">CONTATO</h4>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 mb-4">
            <MdOutlineMail className="text-gray-200" size={28} />
            <p className="text-center sm:text-left text-sm sm:text-base text-gray-200">
              E-MAIL <br />
              contato@daniel<br />espindola.com.br
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3">
            <FaWhatsapp className="text-gray-200" size={28}/>
            <p className="text-center sm:text-left text-sm sm:text-base text-gray-200">
              WHATSAPP <br />
              (48) 99610-6477
            </p>
          </div>
        </div>

        <div className="flex flex-col max-w-sm sm:max-w-full items-center sm:items-start">
          <h2 className="mb-2 text-white text-2xl sm:text-[28px] tracking-wide text-center sm:text-left">MENU</h2>
          <ul className="space-y-1 text-gray-200 text-sm sm:text-base text-center sm:text-left">
            <li><a href="#hero">Home</a></li>
            <li><a href="#featured-properties">Destaques</a></li>
            <li><a href="#team">Equipe</a></li>
            <li><a href="#daniel-espindola">Daniel Espindola</a></li>
            <li><a href="#contact">Contato</a></li>
            <li><a href="/imoveis">Imóveis</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start md:ml-[-100px]">
          <h4 className="mb-2 text-white text-2xl sm:text-[28px] tracking-wide text-center sm:text-left">REDES SOCIAIS</h4>
          <div className="flex gap-4 justify-center sm:justify-start">
            <a href="https://www.instagram.com/danielespindolaimobiliaria" target="_blank"><FaInstagram className="text-gray-200" size={28}/></a>
            <a href="#"><RiPinterestLine className="text-gray-200" size={28}/></a>
            <a href="https://www.facebook.com/p/Daniel-Esp%C3%ADndola-Investimentos-Imobili%C3%A1rios-61567441977530/" target="_blank"><LiaFacebookSquare className="text-gray-200" size={28}/></a>
          </div>
        </div>

      </div>

      <p className="text-center mx-auto text-gray-200 py-10 px-4 sm:px-6 md:px-20 border-t border-gray-800 text-sm mt-10">
        © {new Date().getFullYear()} Desenvolvido por Marcos Vinicius Angeli Costa.
      </p>
    </footer>
  );
}
