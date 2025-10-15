export default function DanielEspindola() {
  return (
    <section id="daniel-espindola" className="text-gray-900">
      <div className="pt-15 md:pt-0 flex flex-col md:flex-row bg-[#171717] text-white">
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center max-w-[720px] mx-auto">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Daniel <br className="hidden md:block"/> Espindola
          </h3>
          <p className="md:w-md text-gray-300 text-sm sm:text-base md:text-md leading-relaxed">
            Daniel Espindola lidera um time apaixonado pelo mercado imobiliário
            de alto padrão. Atuamos em Itapema com foco total em transformar
            objetivos em conquistas reais, por meio de um atendimento
            personalizado, discreto e altamente qualificado. Cada detalhe da
            nossa atuação é pensado para oferecer uma jornada única na compra
            ou venda do seu imóvel — com curadoria criteriosa, segurança,
            exclusividade e uma escuta ativa voltada ao que realmente importa:
            você.
          </p>
        </div>

        <div className="w-full md:w-1/2 h-full">
          <img
            src="/images/profile/daniel_espindola.png"
            alt="Daniel Espindola"
            className="w-full h-64 sm:h-80 md:h-[700px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
