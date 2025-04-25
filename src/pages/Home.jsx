import Preocupacoes from './../components/Preocupacoes'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen py-10 sm:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 bg-black bg-opacity-15 rounded-lg p-10">
        <div className="space-y-10">
          {/* Seção Quem Somos */}
          <div className="flex flex-col sm:flex-row items-center bg-white shadow-lg overflow-hidden">
            <div className="max-w-[1050px] p-6">
              <h1 className="text-3xl font-bold font-cinzel text-top mb-6 shadow-lg">
                Quem Somos
              </h1>
              <p className="text-gray-700 text-justify leading-relaxed">
                No escritório de advocacia <strong>Martin & Oliveira</strong>, somos especializados nas áreas Trabalhista e Civil, e nossa missão é oferecer um atendimento próximo e eficiente para quem precisa de apoio jurídico. Sabemos como questões legais podem ser complexas e, por isso, estamos aqui para tornar o processo mais tranquilo e claro para você.
              </p>
              <p className="text-gray-700 text-justify leading-relaxed">
                Nossa equipe é formada por profissionais comprometidos em encontrar as melhores soluções para os desafios que você enfrenta, sempre com muito empenho e transparência. Trabalhamos com foco em resultados e no seu bem-estar, buscando garantir que seus direitos sejam respeitados e protegidos.
              </p>
              <p className="text-gray-700 text-justify leading-relaxed">
                Seja para questões trabalhistas ou cíveis, queremos estar ao seu lado para ajudá-lo a encontrar a melhor saída. No <strong>Martin & Oliveira </strong>, nosso compromisso é com você, oferecendo um atendimento humanizado e soluções práticas, sem complicação.
              </p>
            </div>
            <img
              src="/images/logos/simbolofundo1.png"
              alt="Simbolo"
              className="w-[128px] h-[152px] sm:w-[192px] sm:h-[350px] object-cover flex-shrink-0 mt-4 sm:mt-0 mb-4 sm:mb-0 transform transition duration-300 hover:-translate-y-1 hover:scale-125 hover:shadow-xl"
            />
          </div>

          <div className="mb-10 flex justify-center">
            <a
              href="https://wa.me/5519997637219?text=Olá%20Lucas,%20gostaria%20de%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-600 text-white text-left text-sm sm:text-base font-semibold py-3 px-3 sm:px-6 rounded-full shadow-lg transition-all duration-300"
            >
              <FaWhatsapp className="text-xl" />
              Fale com o Advogado
            </a>
          </div>

          {/* Seção Preocupações - Direito Civil */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold font-cinzel mb-4 shadow-lg text-gray-800">Nossas Preocupações com Você</h2>
            <Preocupacoes />
          </div>
        </div>
      </div>
    </div>
  )
}
