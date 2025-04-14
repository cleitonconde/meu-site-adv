function Contato() {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Fale Conosco</h1>
        <p className="mt-4">Clique abaixo para entrar em contato:</p>
        <a
          href="https://wa.me/5519997868859?text=Olá!%20Gostaria%20de%20mais%20informações"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          WhatsApp
        </a>
        <br />
        <a
          href="mailto:contato@advocacia.com"
          className="mt-2 inline-block text-blue-600 underline"
        >
          Enviar e-mail
        </a>
      </div>
    )
  }
  
  export default Contato
  