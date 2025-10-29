"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Image from "next/image";
import { GoArrowDown } from "react-icons/go";

type Feedback = {
  name: string;
  city: string;
  state: string;
  text: string;
  image: string;
};

const feedbacks: Feedback[] = [
  {
    name: "Giovani",
    city: "São Paulo",
    state: "SP",
    text: `Quando quero tomar um bom café e relaxar, sempre vou na imobiliária do Daniel. 
          Na realidade, esta é só uma desculpa para encontrar boas oportunidades de investimentos e negócios.
          As informações e o atendimento são sempre claros, prestativos, profissionais, precisos e atualizados.
          Daniel e sua equipe são muito atenciosos e honestos, por isso é sempre bom investir tempo (e dinheiro) com eles.
          E o café é muito bom... palavra de italiano.`,
    image: "/images/profile/anon.jpg",
  },
  {
    name: "Exemplo",
    city: "Curitiba",
    state: "PR",
    text: "O atendimento foi impecável! Me senti segura durante todo o processo. Recomendo demais",
    image: "/images/profile/anon.jpg",
  },
];

export default function FeedbackSection() {
  return (
    <section id="feedbacks" className="bg-[#161616] text-[#EDEDED] py-12 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto md:mt-28 py-8">
        <div className="flex flex-row w-full items-start md:items-center justify-between mb-10 md:mb-25">
          <h2 className="text-3xl sm:text-4xl md:text-[52px] font-light mb-6 md:mb-0">
            O que falam sobre nós
          </h2>
          <div className="bg-white w-10 h-10 sm:w-12 sm:h-12 md:w-[54px] md:h-[54px] border border-white flex items-center justify-center rounded-sm">
            <span className="text-black text-lg sm:text-xl md:text-2xl">
              <GoArrowDown className="text-[25px] sm:text-[30px] md:text-[35px]" />
            </span>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="pb-12"
        >
          {feedbacks.map((f, i) => (
            <SwiperSlide key={i} >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-gray-800 rounded-xl px-6 py-10 md:px-16 relative flex justify-center items-center"
              >
                <div className="flex flex-col items-center max-w-3xl">
                  <div className="w-24 h-24 mb-6 rounded-full border-4 border-gray-500 overflow-hidden">
                    <Image
                      src={f.image}
                      alt={f.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <p className="uppercase tracking-widest text-sm text-gray-400 mb-6">
                    Cliente Daniel Espíndola
                  </p>
                  <p className="text-[#EDEDED] text-left tracking-[-3%] text-sm sm:text-base md:text-[18px] leading-relaxed max-w-2xl">
                    {f.text}
                  </p>

                  <p className="mt-15 self-start font-semibold text-gray-400">
                    {f.name.toUpperCase()} – {f.city.toUpperCase()} – {f.state.toUpperCase()}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
