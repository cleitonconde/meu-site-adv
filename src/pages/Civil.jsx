import { useState } from 'react'
import { ShieldCheck, MessageCircle, Home, Handshake, Heart, Clock, Lock } from 'lucide-react'
import './../components/flip.css'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Civil() {
    const servicos = [
        { img: '/images/civil/direito-contratual.png', titulo: 'Direito Contratual', descricao: 'Elaboração, revisão e execução de contratos entre pessoas físicas ou jurídicas.' },
        { img: '/images/civil/direito-familia.png', titulo: 'Direito de Família', descricao: 'Trata de divórcios, guarda de filhos, pensão alimentícia, adoção e união estável.' },
        { img: '/images/civil/direito-sucessoes-2.png', titulo: 'Direito das Sucessões', descricao: 'Regula as relações jurídicas que envolvem deveres de fazer, não fazer, dar ou pagar algo.' },
        { img: '/images/civil/direito-obrigacoes.png', titulo: 'Direito das Obrigações', descricao: 'Orientações e defesa legal em casos de demissão por justa causa, garantindo os direitos do trabalhador e contestando decições injustas.' },
        { img: '/images/civil/responsabilidade-civil.png', titulo: 'Responsabilidade Civil', descricao: 'Reparação de danos morais ou materiais causados a terceiros.' },
        { img: '/images/civil/direito-imobiliario.png', titulo: 'Direito Imobiliário', descricao: 'Questões sobre compra e venda de imóveis, locações, usucapião e regularização fundiária.' },
    ]

    const [flipped, setFlipped] = useState(Array(servicos.length).fill(false))

    const toggleFlip = (index) => {
        const updated = [...flipped]
        updated[index] = !updated[index]
        setFlipped(updated)
    }

    return (
        <div className="min-h-screen py-10 sm:py-36">
            <div className="max-w-4xl mx-auto bg-black bg-opacity-15 rounded-lg p-10">
                <h1 className="text-3xl sm:text-4xl font-bold font-cinzel text-center shadow-lg mb-10 text-white font-[Georgia]">
                    Atuação na Área Civil
                </h1>

                <div className="max-w-[794px] mx-auto p-6 bg-white shadow-lg">
                    <p className="mb-4 text-justify leading-relaxed">
                        As relações do dia a dia — como comprar um imóvel, fazer um contrato, resolver problemas familiares ou lidar com heranças — são parte do Direito Civil. No Escritório <strong>Martin & Oliveira</strong>, estamos ao seu lado para orientar e defender seus direitos civis com clareza, transparência e atenção personalizada. Nossa missão é facilitar soluções seguras e justas em momentos importantes da sua vida.
                    </p>

                    {/* 🔳 GRID DE SERVIÇOS COM IMAGEM */}
                    <div className="mt-8">
                        <h3 className="text-xl font-bold mb-4">Áreas de atuação:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {servicos.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flip-card ${flipped[index] ? 'flipped' : ''}`}
                                    onClick={() => toggleFlip(index)}
                                >
                                    <div className="flip-inner">
                                        <div className="flip-front bg-gray-100 p-4 rounded-lg shadow text-center">
                                            <img
                                                src={item.img}
                                                alt={item.titulo}
                                                className="w-28 h-28 object-contain mx-auto mb-2"
                                            />
                                            <p className="font-semibold text-sm">{item.titulo}</p>
                                        </div>
                                        <div className="flip-back bg-white p-4 rounded-lg shadow text-center flex items-center justify-center">
                                            <p className="font-semibold">{item.descricao}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 flex justify-center">
                            <a
                                href="https://wa.me/5519998082424?text=Olá%20Lucas,%20gostaria%20de%20mais%20informações."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-left text-sm sm:text-base font-semibold py-3 px-3 sm:px-6 rounded-full shadow-lg transition-all duration-300"
                            >
                                <FaWhatsapp className="text-xl" />
                                Fale com o Advogado
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
