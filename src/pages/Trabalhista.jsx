import { useState } from 'react'
import './../components/flip.css'
import ServicosTrabalhistas from './../components/ServicosTrabalhistas'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function Trabalhista() {
    const servicos = [
        { img: '/images/trabalhista/acidente-trabalho.png', titulo: 'Acidente de Trabalho', descricao: 'Suporte jurídico em casos de acidentes de trabalho, incluindo indenizações, benefícios e direitos do trabalhador acidentado.' },
        { img: '/images/trabalhista/dano-moral.png', titulo: 'Dano Moral', descricao: 'Representação legal em casos de dano moral no ambiente de trabalho, buscando reparação e compensação para o trabalhador afetado.' },
        { img: '/images/trabalhista/hora-extra.png', titulo: 'Horas Extras', descricao: 'Assessoria jurídica para questões relacionadas a horas extras, incluindo cálculos, direitos do trabalho e procedimentos legais.' },
        { img: '/images/trabalhista/justa-causa.png', titulo: 'Demissão por Justa Causa', descricao: 'Orientações e defesa legal em casos de demissão por justa causa, garantindo os direitos do trabalhador e contestando decições injustas.' },
        { img: '/images/trabalhista/perigo.png', titulo: 'Adicional de Periculosidade e Insalubridade', descricao: 'Análise e assistência para garantir o recebimento correto e adicional de periculosidade e insalubridade de acordo com a legislação.' },
        { img: '/images/trabalhista/discriminacao.png', titulo: 'Assédio Moral', descricao: 'Apoio legal em casos de assédio moral no ambiente de trabalho, incluindo orientações, denúncias e medidas legais.' },
        { img: '/images/trabalhista/contrato.png', titulo: 'Rescisão Indireta', descricao: 'Assistência jurídica para trabalhadores que buscam a rescisão indireta do contrato de trabalho devido a irregularidades graves por parte do empregador.' },
        { img: '/images/trabalhista/carteira-de-identidade.png', titulo: 'Trabalho sem Carteira Assinada', descricao: 'Auxílio legal para trabalhadores que enfrentam situações de trabalho sem registro formal, buscando regularizações e direitos trabalhistas.' },
        { img: '/images/trabalhista/consultoria.png', titulo: 'Consultoria Preventiva', descricao: 'Representação legal em casos de dano moral no ambiente de trabalho, buscando reparação e compensação para o trabalhador afetado.' }
    ]

    const [flipped, setFlipped] = useState(Array(servicos.length).fill(false))

    const toggleFlip = (index) => {
        const updated = [...flipped]
        updated[index] = !updated[index]
        setFlipped(updated)
    }

    return (
        <div className="min-h-screen py-10 sm:py-36">
            <div className="max-w-4xl mx-auto bg-black bg-opacity-35 rounded-lg p-10">
                <h1 className="text-2xl sm:text-3xl font-bold text-center shadow-lg mb-6 text-white font-cinzel">
                    ADVOCACIA ESPECIALIZADA EM DIREITO DO TRABALHO
                </h1>
                <h2 className="text-xl sm:text-xl font-semibold text-center shadow-sm mb-10 text-white font-poppins">
                    DEFENDEMOS SEUS DIREITOS TRABALHISTAS COM DEDICAÇÃO E EXPERIÊNCIA.
                </h2>

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

                <div className="max-w-[794px] mx-auto p-6 bg-white shadow-lg">
                    <p className="mb-4 text-justify leading-relaxed">
                        O escritório atua com excelência na área do Direito Trabalhista, oferecendo suporte jurídico tanto para <strong>empresas</strong> quanto para <strong>trabalhadores</strong>. Nosso compromisso é garantir que as relações de trabalho sejam regidas pelo respeito às leis e pela justiça, buscando sempre a melhor solução para cada caso.
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
                    </div>
                    <ServicosTrabalhistas />
                    <p className="mt-8 text-justify leading-relaxed">
                        Nosso time é formado por advogados especializados, que atuam com empatia, conhecimento técnico e visão estratégica, buscando sempre <strong>o equilíbrio entre os interesses do empregado e do empregador</strong>, dentro do que a legislação permite.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <a
                            href="https://wa.me/5519997637219?text=Olá%20Lucas,%20gostaria%20de%20mais%20informações."
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
    )
}
