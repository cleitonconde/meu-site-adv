import { ShieldCheck, Handshake, FileText, AlertCircle, Users, Heart, Briefcase, Gavel, CheckCircle, UserCheck, Scale } from 'lucide-react';

const preocupacoes = [
  {
    icon: <ShieldCheck className="text-green-600 w-6 h-6" />,
    texto: "Proteger os direitos e interesses dos nossos clientes, buscando sempre soluções jurídicas eficazes e justas."
  },
  {
    icon: <Handshake className="text-blue-600 w-6 h-6" />,
    texto: "Evitar litígios desnecessários por meio de uma abordagem estratégica e preventiva, com foco na conciliação e mediação."
  },
  {
    icon: <FileText className="text-indigo-600 w-6 h-6" />,
    texto: "Garantir o cumprimento de contratos e obrigações legais, oferecendo segurança jurídica nas relações civis."
  },
  {
    icon: <AlertCircle className="text-red-600 w-6 h-6" />,
    texto: "Atuar com transparência e clareza para que o cliente compreenda todas as etapas e possibilidades do processo."
  },
  {
    icon: <Users className="text-yellow-600 w-6 h-6" />,
    texto: "Preservar o patrimônio e os direitos de herança e família, com soluções que respeitam valores pessoais e emocionais."
  },
  {
    icon: <Heart className="text-pink-600 w-6 h-6" />,
    texto: "Manter um relacionamento de confiança e proximidade, garantindo suporte em todas as decisões jurídicas importantes."
  },
  {
    icon: <Briefcase className="text-amber-600 w-6 h-6" />,
    texto: "Assegurar os direitos dos trabalhadores, conforme previsto na legislação."
  },
  {
    icon: <Gavel className="text-purple-600 w-6 h-6" />,
    texto: "Evitar injustiças no ambiente de trabalho, como demissões indevidas ou assédio."
  },
  {
    icon: <CheckCircle className="text-green-700 w-6 h-6" />,
    texto: "Oferecer respaldo jurídico completo para empresas e trabalhadores."
  },
  {
    icon: <UserCheck className="text-orange-600 w-6 h-6" />,
    texto: "Prevenir e resolver conflitos trabalhistas com agilidade e ética."
  },
  {
    icon: <Scale className="text-blue-700 w-6 h-6" />,
    texto: "Promover acordos justos e benéficos para ambas as partes envolvidas."
  },
];

export default function Preocupacoes() {
  return (
    <div className="bg-white shadow-lg rounded p-6 mt-10">
      {/*<h2 className="text-2xl font-bold mb-6">Nossas principais preocupações na área civil</h2> */}
      <ul className="space-y-4 text-gray-800">
        {preocupacoes.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span>{item.icon}</span>
            <p className="leading-relaxed"><strong>{item.texto.split(",")[0]},</strong>{item.texto.split(",").slice(1).join(",")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
