"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex align-center items-center justify-center overflow-hidden bg-[#171717] text-white">

      <div className="absolute w-full h-screen overflow-hidden">
        <div className="absolute inset-0 brightness-60">
          <Image
            src="/images/cards/Imagem 04.png"
            alt="Moradias de Luxo"
            fill
            priority
            className="object-cover object-center md:object-[50%_50%]"
            sizes="(max-width: 768px) 100vw, 100vw"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center space-y-6 px-4"
      >

        <div className={`flex flex-col items-center text-center select-none`}>

          <img fetchPriority="high" src="/images/logo/svg/horzt branco.svg" alt="Moradias de Luxo" className="object-cover w-full h-full md:w-[500px]" />
      </div>

        <div className="flex justify-center gap-4 pt-4">
          <a
            href="/imoveis"
            className="flex flex-row align-center justify-center bg-white border border-white text-black px-6 py-3 rounded-sm text-sm font-bold hover:bg-transparent hover:text-white transition"
          >
            Ver Imóveis <GoArrowUpRight className="ml-1 text-[20px]" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5548996106477?text=Ol%C3%A1,%20gost%C3%A1ria%20de%20conversar%20sobre%20um%20im%C3%B3vel%20que%20vi%20em%20seu%20site!"
            className="bg-white border border-white text-black px-6 py-3 rounded-sm text-sm font-bold hover:bg-transparent hover:text-white transition"
            target="_blank"
          >
            Entrar em contato
          </a>
        </div>
      </motion.div>
    </section>
  );
}
