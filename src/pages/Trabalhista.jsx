import { useState } from 'react'
import './../components/flip.css' // Vamos criar esse arquivo para os estilos de flip

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
            <div className="max-w-4xl mx-auto bg-black bg-opacity-15 rounded-lg p-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-center shadow-lg mb-10 text-white font-[Georgia]">
                    Atuação na Área Trabalhista
                </h1>

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

                    <h2 className="text-2xl font-semibold mt-6 mb-2">Serviços prestados:</h2>
                    <ul className="list-disc list-inside mb-4 ml-4">
                        <li>Defesa e orientação em <strong>ações trabalhistas</strong> individuais e coletivas;</li>
                        <li>Assessoria preventiva, com foco em <strong>compliance trabalhista</strong> e <strong>adequação à legislação vigente</strong>;</li>
                        <li>Atuação em <strong>acordos e negociações coletivas</strong>;</li>
                        <li><strong>Revisão de contratos</strong>, políticas internas e práticas de RH;</li>
                        <li>Representação em <strong>reclamatórias trabalhistas</strong>, com foco em mediação e soluções estratégicas.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold mt-6 mb-2">Nossas principais preocupações:</h2>
                    <ul className="list-disc list-inside mb-4 ml-4">
                        <li><strong>Proteger os direitos do trabalhador</strong>, zelando por condições dignas, remuneração adequada e respeito às normas da CLT;</li>
                        <li><strong>Preservar a segurança jurídica das empresas</strong>, evitando passivos trabalhistas e conflitos que comprometam a sustentabilidade do negócio;</li>
                        <li><strong>Agir com ética, responsabilidade e transparência</strong>, promovendo soluções que beneficiem ambas as partes e reduzam litígios.</li>
                    </ul>
                    <p className="mt-4 text-justify leading-relaxed">
                        Nosso time é formado por advogados especializados, que atuam com empatia, conhecimento técnico e visão estratégica, buscando sempre <strong>o equilíbrio entre os interesses do empregado e do empregador</strong>, dentro do que a legislação permite.
                    </p>
                </div>
            </div>
        </div>
    )
}
