export default function Footer() {
    return (
      <footer className="bg-black text-white py-6 mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Martin & Oliveira - Todos os direitos reservados.</p>
          <p className="text-sm"> R. Siqueira Campos, 358 - Centro</p>
          <p className="text-sm"> Mogi Guaçu - SP</p>
          <p className="text-xs mt-2">
            Desenvolvido por Cleiton | <a href="mailto:contato@martineoliveira.com" className="underline hover:text-yellow-400">contato@martineoliveira.com</a>
          </p>
        </div>
      </footer>
    )
  }
  