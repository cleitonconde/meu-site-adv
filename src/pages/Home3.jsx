// src/pages/Home.jsx

export default function Home() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat p-4"
           style={{ backgroundImage: "url('/fundo.jpg')" }}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Bem-vindo ao Escritório de Advocacia
        </h1>
        <p className="text-white text-center max-w-md sm:max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg">
          Atuamos com ética, comprometimento e excelência para defender seus direitos. Conte com nossa equipe especializada.
        </p>
      </div>
    )
  }
  