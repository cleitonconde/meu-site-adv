export default function Trabalhista() {
    const servicos = [
        { img: '/images/trabalhista/acidente-trabalho.png', titulo: 'Acidente de Trabalho' },
        { img: '/images/trabalhista/dano-moral.png', titulo: 'Dano Moral' },
        { img: '/images/trabalhista/hora-extra.png', titulo: 'Horas Extras' },
        { img: '/images/trabalhista/justa-causa.png', titulo: 'Justa Causa' },
        { img: '/images/trabalhista/perigo.png', titulo: 'Adicional de Periculosidade e Insalubridade' },
        { img: '/images/trabalhista/discriminacao.png', titulo: 'Assédio Moral' },
        { img: '/images/trabalhista/contrato.png', titulo: 'Rescisão Indireta' },
        { img: '/images/trabalhista/carteira-de-identidade.png', titulo: 'Trabalho sem Carteira Assinada' },
        { img: '/images/trabalhista/consultoria.png', titulo: 'Consultoria Preventiva entre outros' },
    ]

    return (
        <div className="min-h-screen py-10 sm:py-36">
            <div className="max-w-4xl mx-auto bg-black bg-opacity-15 rounded-lg p-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-white font-[Georgia]">
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
                                    className="bg-gray-100 p-4 rounded-lg shadow text-center"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.titulo}
                                        className="w-28 h-28 object-contain mx-auto mb-3"
                                    />
                                    <p className="font-semibold">{item.titulo}</p>
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
