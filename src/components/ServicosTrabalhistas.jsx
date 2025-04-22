import {
    Briefcase,
    ShieldCheck,
    Handshake,
    FileText,
    Gavel,
    AlertTriangle,
    ClipboardList,
    BookOpen,
    Users,
    FileSearch,
  } from 'lucide-react';
  
  const servicosTrabalhistas = [
    {
      icon: <Gavel className="text-red-600 w-6 h-6" />,
      texto: "Defesa e orientação em ações trabalhistas individuais e coletivas"
    },
    {
      icon: <ShieldCheck className="text-green-600 w-6 h-6" />,
      texto: "Assessoria preventiva, com foco em compliance trabalhista e adequação à legislação vigente"
    },
    {
      icon: <Handshake className="text-blue-600 w-6 h-6" />,
      texto: "Atuação em acordos e negociações coletivas"
    },
    {
      icon: <FileText className="text-indigo-600 w-6 h-6" />,
      texto: "Revisão de contratos, políticas internas e práticas de RH"
    },
    {
      icon: <Briefcase className="text-amber-600 w-6 h-6" />,
      texto: "Representação em reclamatórias trabalhistas, com foco em mediação e soluções estratégicas"
    },
    {
      icon: <ClipboardList className="text-emerald-600 w-6 h-6" />,
      texto: "Elaboração e revisão de políticas internas e código de conduta"
    },
    {
      icon: <AlertTriangle className="text-orange-600 w-6 h-6" />,
      texto: "Defesa em ações de assédio moral ou sexual no ambiente de trabalho"
    },
    {
      icon: <Users className="text-yellow-700 w-6 h-6" />,
      texto: "Orientação em processos de demissão por justa causa"
    },
    {
      icon: <BookOpen className="text-teal-600 w-6 h-6" />,
      texto: "Consultoria em programas de Participação nos Lucros e Resultados (PLR)"
    },
    {
      icon: <FileSearch className="text-cyan-700 w-6 h-6" />,
      texto: "Análise e prevenção de riscos trabalhistas em auditorias jurídicas"
    },
  ];
  
  export default function ServicosTrabalhistas() {
    return (
      <div className="bg-white shadow-lg rounded p-6 mt-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Serviços Prestados</h2>
        <ul className="space-y-4 text-gray-800">
          {servicosTrabalhistas.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span>{item.icon}</span>
              <p className="leading-relaxed">{item.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  