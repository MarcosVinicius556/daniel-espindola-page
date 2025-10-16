export default function DanielEspindola() {
  return (
    <section id="daniel-espindola" className="text-[#EDEDED]">
      <div className="pt-15 md:pt-0 flex flex-col md:flex-row bg-[#161616]">
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center max-w-[720px] ml-auto">
          <h3 className="md:w-md md:max-w-[399px] text-left text-3xl sm:text-4xl md:text-[52px] font-bold mb-4 self-start md:self-end">
            Daniel <br className="hidden md:block"/> Espindola
          </h3>
          <p className="md:w-md md:max-w-[399px] text-left tracking-[-3%] text-sm sm:text-base md:text-[18px] leading-relaxed self-end">
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
            className="w-full h-64 sm:h-80 md:h-[654px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
