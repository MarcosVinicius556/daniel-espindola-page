export default async function HomePage() {

  return (
    <section className="min-h-screen bg-dark py-12 px-6">
      <div className="flex flex-col h-screen justify-center items-center">

        <div className={`flex flex-col items-center text-center`}>
            <img src="/images/logo/svg/horzt branco.svg" alt="Moradias de Luxo" className="object-cover w-full h-full md:w-[500px]" />
        </div>

        <h1 className="text-sm font-bold mb-4 mt-8">Em breve mais imóveis disponíveis!</h1>

        <div className="flex justify-center gap-4 pt-4">
          <a
            href="/"
            className="bg-white border border-white text-black px-6 py-3 rounded-sm text-sm font-bold hover:bg-transparent hover:text-[#EDEDED] transition"
          >
            Retornar
          </a>
        </div>

      </div>
    </section>
  );
}
