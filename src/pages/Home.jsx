// src/pages/Home.jsx
export default function Home2() {
  return (
    <div className="relative h-screen bg-[url('/images/home-bg.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay preto transparente cobrindo toda a tela */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Conteúdo acima do overlay */}
      <div className="relative z-10 flex flex-col items-center p-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mt-8">
          Bem-vindo ao Escritório Patrão e Patrãozinho
        </h1>

        <p className="text-white text-center max-w-md sm:max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg mt-4">
          Atuamos com ética, comprometimento e excelência para defender seus direitos. Conte com nossa equipe especializada.
        </p>
      </div>
    </div>
  );
}
