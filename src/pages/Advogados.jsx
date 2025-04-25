import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Advogados() {
  return (
    <div className="min-h-screen py-10 sm:py-36 px-4">
      <div className="max-w-4xl mx-auto bg-black bg-opacity-15 rounded-lg p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white shadow-lg px_#fff] font-cinzel">Nossos Advogados</h1>

        <div className="space-y-10 ">
          {/* Card do Advogado 1 */}
          <div className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/advogados/lucas.jpeg"
              alt="Dr. Lucas Martin"
              //className="w-full sm:w-48 h-64 object-cover"
              className="w-[192px] h-[256px] object-cover flex-shrink-0 mt-4 sm:mt-0"
            />
            <div className="p-6 text-gray-800 text-justify">
              <h2 className="text-lg sm:text-xl text-left font-bold">Dr. Lucas Athayde Martin</h2>
              <p className="text-sm font-poppins mb-2"> OAB/SP - 382.584</p>
              <p>
                Especialista em Direito Trabalhista com mais de 15 anos de experiência. Dr. Lucas atua na defesa dos direitos dos trabalhadores e empregadores, oferecendo consultoria estratégica e representação jurídica em casos complexos.
              </p>
              <div className="mt-8 flex justify-end">
                <a
                  href="https://wa.me/5519997637219?text=Olá%20Lucas,%20gostaria%20de%20mais%20informações."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-left text-sm sm:text-base font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                  Fale com o Advogado
                </a>
              </div>
            </div>
          </div>


          {/* Card do Advogado 2 */}
          <div className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/images/advogados/igor.jpeg"
              alt="Dr. Igor Oliveira"
              //className="w-full sm:w-48 h-64 object-cover"
              className="w-[192px] h-[256px] object-cover flex-shrink-0 mt-4 sm:mt-0"
            />
            <div className="p-6 text-gray-800 text-justify">
            <h2 className="text-lg sm:text-xl text-left font-bold">Dr. Igor Oliveira Firme</h2>
              <p className="text-sm font-poppins mb-2"> OAB/SP - 413.751</p>
              <p>
                Com forte atuação em Direito Civil, Dr. Igor é reconhecido por sua dedicação e empatia ao tratar dos interesses dos seus clientes. Seu trabalho inclui desde consultorias até contencioso em tribunais.
              </p>
              <div className="mt-8 flex justify-end">
                <a
                  href="https://wa.me/5519998082424?text=Olá%20Igor,%20gostaria%20de%20mais%20informações."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-left text-sm sm:text-base font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                  Fale com o Advogado
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
