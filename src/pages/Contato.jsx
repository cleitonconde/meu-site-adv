import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import MapaEscritorio from './../components/MapaEscritorio'
import InputMask from 'react-input-mask'

export default function Contato() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    // Captura data/hora atual
    const now = new Date()
    const dataHora = now.toLocaleString('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
    })

    // Atualiza o campo hidden no formulário
    form.current.time.value = dataHora
    //form.current.telefone.value = '19997868859'

    emailjs
      .sendForm(
        'service_osur2vg',
        'template_6afksg6',
        form.current,
        '5yBoRWsPNen4RqZjs'
      )
      .then(
        () => {
          alert('Mensagem enviada com sucesso!')
          form.current.reset()
        },
        (error) => {
          alert('Erro ao enviar. Tente novamente.')
          console.error(error)
        }
      )
  }

  return (
    <div className="min-h-screen py-10 sm:py-36">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 bg-black bg-opacity-15 rounded-lg p-10">
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row items-start bg-white shadow-lg overflow-hidden">
            {/* Contato */}
            <div className="w-full sm:w-1/2 p-6">
              <h1 className="text-3xl font-bold font-cinzel mb-6">Entre em contato</h1>

              <div className="text-xl flex items-center space-x-2 text-black font-bold mb-2">
                <span>(19) 99763-7219</span>
                <a
                  href="https://wa.me/5519997637219?text=Olá!%20Acessei%20o%20site%20da%20Martin%20e%20Oliveira%20e%20gostaria%20de%20mais%20informações."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={20} className="hover:text-green-500" />
                </a>
              </div>

              <div className="text-xl flex items-center space-x-2 text-black font-bold mb-2">
                <span>(19) 99808-2424</span>
                <a
                  href="https://wa.me/5519998082424?text=Olá!%20Acessei%20o%20site%20da%20Martin%20e%20Oliveira%20e%20gostaria%20de%20mais%20informações."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={20} className="hover:text-green-500" />
                </a>
              </div>
            </div>

            {/* Formulário */}
            <div className="w-full sm:w-1/2 p-6 bg-white rounded">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nome</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 block w-full bg-gray-100 rounded-md border-gray-500 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 block w-full bg-gray-100 rounded-md border-gray-700 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Telefone</label>
                  <InputMask
                    mask="(99) 99999-9999"
                    type="tel"
                    name="telefone"
                    required
                    className="mt-1 block w-full bg-gray-100 rounded-md border-gray-500 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mensagem</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full bg-gray-100 rounded-md border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  ></textarea>
                </div>

                {/* Campo oculto para data/hora */}
                <input type="hidden" name="time" />

                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded shadow"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>

          {/* Mapa */}
          <div>
            <MapaEscritorio />
          </div>
        </div>
      </div>
    </div>
  )
}
