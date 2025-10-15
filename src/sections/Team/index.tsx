import Seal from "@/components/Seal";

export default function Team() {
  return (
    <section id="team" className="text-gray-900 bg-white">
      <div className="pb-10 md:pb-0 flex flex-col md:flex-row bg-white">
        
        <div className="w-full md:w-1/2">
          <img
            src="/images/profile/team.png"
            alt="Nossa equipe"
            className="w-full h-64 sm:h-80 md:h-[700px] object-cover"
          />
        </div>

        <div className="mt-8 w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-12 max-w-[720px] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-left">
            Conheça<br className="hidden md:block"/> nossa equipe
          </h2>
          <p className="text-gray-700 md:w-md text-sm sm:text-base md:text-md leading-relaxed">
            Composta por profissionais altamente qualificados e apaixonados pelo mercado imobiliário de alto padrão, nossa equipe está pronta para transformar seu sonho em realidade. Atuamos em Itapema com foco total em excelência, oferecendo um atendimento personalizado, discreto e centrado nos seus objetivos. Cada membro do nosso time carrega a missão de proporcionar uma jornada única na compra ou venda do seu imóvel, com curadoria, segurança, exclusividade e um olhar apurado para o que realmente importa: você.
          </p>
        </div>
      </div>

      <Seal />
    </section>
  );
}
