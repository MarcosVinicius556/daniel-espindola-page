"use client";

import { GoArrowUpRight } from "react-icons/go";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useRef, useState } from "react";

export default function ContactSection() {

  const [executionStatus, setExecutionStatus] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  const name = useRef<any>(null);
  const email = useRef<any>(null);
  const tel = useRef<any>(null);
  const message = useRef<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(executeRecaptcha);
    if (!executeRecaptcha) return console.log("reCAPTCHA não carregado ainda");

    try {
      const token = await executeRecaptcha("contact_form");

      const recaptchaResponse = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      
      const recaptchaData = await recaptchaResponse.json();

      if(!recaptchaData.success) {
        setExecutionStatus("❌ Falha na verificação do ReCaptcha. Por favor tente novamente.");
      }
    } catch(error) {
      console.error("Erro ao executar o reCAPTCHA:", error);
      setExecutionStatus("❌ Erro ao executar o reCAPTCHA. Por favor tente novamente.");
      return;
    }
    
    try {
      let formData = {
        name: name?.current?.value,
        email: email?.current?.value,
        tel: tel?.current?.value,
        message: message?.current?.value
      };

      console.log(formData);
      const emailResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });

      const emailData = await emailResponse.json();

      if (emailData.success) {
        setExecutionStatus("✅ E-mail enviado com sucesso!");
      } else {
        setExecutionStatus("❌ Falha no envio do e-mail. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
      setExecutionStatus("❌ Erro ao enviar o e-mail. Tente novamente.");
    }
  };

  return (
    <section id="contact" className="bg-white w-full text-black py-12 sm:py-16 px-4 sm:px-6 md:px-20">
      <div className="max-w-[1440px] mx-auto pt-6 sm:pt-9">

        <div className="grid grid-cols-1 md:flex md:flex-row md:justify-center md:gap-20">

          <form onSubmit={handleSubmit} className="flex flex-col gap-1 md:max-w-[460px] mb-10">
            <h2 className="text-4xl md:text-5xl mb-4 tracking-wide">Entre em Contato</h2>

            <div className="mb-5">
              <label htmlFor="nome" className="block mb-2 text-sm font-medium text-black">Nome</label>
              <input ref={name} name="nome" type="text" className="bg-white p-2 text-base w-full border-b focus:outline-none" required />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">E-mail</label>
              <input ref={email} name="email" type="email" className="bg-white p-2 text-base w-full border-b focus:outline-none" required />
            </div>

            <div className="mb-5">
              <label htmlFor="telefone" className="block mb-2 text-sm font-medium text-black">Telefone</label>
              <input ref={tel} name="telefone" type="tel" className="bg-white p-2 text-base w-full border-b focus:outline-none"/>
            </div>

            <div className="mb-5">
              <label htmlFor="mensagem" className="block mb-2 text-sm font-medium text-black">Mensagem</label>
              <textarea ref={message} name="mensagem" className="bg-white min-h-[82px] p-2 text-base w-full border focus:outline-none"/>
            </div>

            <p className="text-style-light mb-6 text-[14px] max-w-full md:max-w-[450px]">
              Este site é protegido por reCAPTCHA e a <a href="https://policies.google.com/privacy" className="underline">Política de Privacidade do Google</a> e <a href="https://policies.google.com/terms" className="underline">Termos de Serviço</a> do Google são aplicáveis.
            </p>

            <button type="submit" className="bg-black border border-black text-[#EDEDED] w-[91px] cursor-pointer py-3 rounded hover:bg-white hover:text-black transition">
              Enviar
            </button>
            {executionStatus && <p>{executionStatus}</p>}
          </form>

          <div className="flex flex-col items-start sm:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 tracking-[-3%]">Conheça nossos <br /> imóveis</h2>
            <p className="text-style-light mb-6 text-sm sm:text-base md:text-[18px] w-full sm:w-[350px] md:w-[400px]">
              Imóveis exclusivos em Itapema, selecionados com cuidado para quem busca
              alto padrão, conforto e localização privilegiada.
            </p>

            <a href="/imoveis" className="mb-5 flex flex-row align-center justify-center bg-black border border-black text-[#EDEDED] px-6 py-3 rounded-sm text-sm font-bold hover:bg-transparent hover:text-black transition">
              Ver Imóveis <GoArrowUpRight className="ml-1 bold size-[25px] md:text-[30px]" />
            </a>

            <img 
              src="/images/cards/Imagem 03.png" 
              loading="lazy"
              alt="Foto de apartamento com vista para praia"
              className="w-full sm:w-[400px] md:w-[450px] h-64 sm:h-80 md:h-[400px] object-cover brightness-50 border-b border-white pb-5"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
