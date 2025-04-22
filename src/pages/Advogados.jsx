export default function Advogados() {
  return (
    <div className="min-h-screen py-10 sm:py-36 px-4">
      <div className="max-w-4xl mx-auto bg-black bg-opacity-15 rounded-lg p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white shadow-lg px_#fff] font-poppins">Nossos Advogados</h1>

        <div className="space-y-10 ">
          {/* Card do Advogado 1 */}
          <div className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/advogados/thaydao.jpeg"
              alt="Dr. Lucas Martin"
              //className="w-full sm:w-48 h-64 object-cover"
              className="w-[192px] h-[256px] object-cover flex-shrink-0 mt-4 sm:mt-0"
            />
            <div className="p-6 text-gray-800 text-justify">
              <h2 className="text-lg sm:text-xl text-left font-bold mb-2">Dr. Lucas Athayde Martin - OAB/SP 382.584</h2>
              <p>
                Especialista em Direito Trabalhista com mais de 15 anos de experiência. Dr. Lucas atua na defesa dos direitos dos trabalhadores e empregadores, oferecendo consultoria estratégica e representação jurídica em casos complexos.
              </p>
            </div>
          </div>

          {/* Card do Advogado 2 */}
          <div className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/advogados/patrao.jpeg"
              alt="Dr. Igor Oliveira"
              //className="w-full sm:w-48 h-64 object-cover"
              className="w-[192px] h-[256px] object-cover flex-shrink-0 mt-4 sm:mt-0"
            />
            <div className="p-6 text-gray-800 text-justify">
              <h2 className="text-xl font-bold mb-2">Dr. Igor Oliveira Firme - OAB/SP - 413.751</h2>
              <p>
                Com forte atuação em Direito Civil, Dr. Igor é reconhecido por sua dedicação e empatia ao tratar dos interesses dos seus clientes. Seu trabalho inclui desde consultorias até contencioso em tribunais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
