import { FaWhatsapp } from 'react-icons/fa'

export default function BotaoWhatsApp() {
  return (
    <a
      href="https://wa.me/5519997637219?text=Olá,%20gostaria%20de%20mais%20informações."
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex fixed gap-2 bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white text-left text-sm sm:text-base font-semibold rounded-full p-4 shadow-lg transition-all duration-300"
      //className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-left text-sm sm:text-base font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
    >
      <FaWhatsapp  size={24} className="text-base sm:text-xl" />
      {/*<span className="hidden md:inline font-semibold">Atendimento WhatsApp</span>*/}
      
    </a>
  )
}
