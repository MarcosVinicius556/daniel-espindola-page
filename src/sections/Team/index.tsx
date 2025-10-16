import Seal from "@/components/Seal";

export default function Team() {
  return (
    <section id="team" className="bg-white">
      <div className="pb-10 md:pb-0 flex flex-col md:flex-row bg-white">
        
        <div className="w-full md:w-1/2">
          <img
            src="/images/profile/team.png"
            alt="Nossa equipe"
            className="w-full h-64 sm:h-80 md:h-[654px] object-cover"
          />
        </div>

        <div className="mt-8 w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-12 max-w-[720px] mr-auto">
          <h2 className="text-style-regular md:w-md md:max-w-[399px] text-left text-3xl sm:text-4xl md:text-[52px] font-bold mb-4 self-start md:text-left">
            Conheça<br className="hidden md:block"/> nossa equipe
          </h2>
          <p className="md:w-md md:max-w-[399px] text-left tracking-[-3%] text-sm sm:text-base md:text-[18px] leading-relaxed text-style-light">
            Composta por profissionais altamente qualificados e apaixonados pelo mercado imobiliário de alto padrão, nossa equipe está pronta para transformar seu sonho em realidade. Atuamos em Itapema com foco total em excelência, oferecendo um atendimento personalizado, discreto e centrado nos seus objetivos. Cada membro do nosso time carrega a missão de proporcionar uma jornada única na compra ou venda do seu imóvel, com curadoria, segurança, exclusividade e um olhar apurado para o que realmente importa: você.
          </p>
        </div>
      </div>

      <Seal />
    </section>
  );
}
